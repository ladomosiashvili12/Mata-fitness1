import { createContext, useContext, useEffect, useMemo, type ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { translations, type Lang, type Translations } from './translations';
import { contentByLang, type LocalizedContent } from './content';

const STORAGE_KEY = 'mata-fitness-lang';

export function getStoredLanguage(): Lang {
  if (typeof window === 'undefined') return 'ka';
  return window.localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'ka';
}

type LanguageContextValue = {
  lang: Lang;
  t: Translations;
  content: LocalizedContent;
  switchLanguage: (target: Lang) => void;
  localizedPath: (path: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ lang, children }: { lang: Lang; children: ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const localizedPath = (path: string) => {
    const clean = path === '/' ? '' : path;
    return lang === 'en' ? `/en${clean}` : clean || '/';
  };

  const switchLanguage = (target: Lang) => {
    if (target === lang) return;
    const currentBase = lang === 'en' ? location.pathname.replace(/^\/en/, '') || '/' : location.pathname;
    const cleanBase = currentBase === '/' ? '' : currentBase;
    const nextPath = target === 'en' ? `/en${cleanBase}` : cleanBase || '/';
    window.localStorage.setItem(STORAGE_KEY, target);
    navigate(nextPath);
  };

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      t: translations[lang],
      content: contentByLang[lang],
      switchLanguage,
      localizedPath,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [lang, location.pathname]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}
