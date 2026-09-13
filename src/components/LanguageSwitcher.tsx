import { useLanguage } from '@/i18n/LanguageContext';

export default function LanguageSwitcher() {
  const { lang, switchLanguage } = useLanguage();

  return (
    <div className="lang-switch" role="group" aria-label="Language / ენა">
      <button
        type="button"
        className={lang === 'ka' ? 'is-active' : ''}
        onClick={() => switchLanguage('ka')}
        aria-current={lang === 'ka' ? 'true' : undefined}
      >
        ქართული
      </button>
      <span aria-hidden="true">/</span>
      <button
        type="button"
        className={lang === 'en' ? 'is-active' : ''}
        onClick={() => switchLanguage('en')}
        aria-current={lang === 'en' ? 'true' : undefined}
      >
        English
      </button>
    </div>
  );
}
