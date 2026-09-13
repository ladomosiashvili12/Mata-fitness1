import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';
import { images } from '@/data';
import { useLanguage } from '@/i18n/LanguageContext';

export default function Footer() {
  const { t, localizedPath } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="page-width footer-inner">
        <Link to={localizedPath('/')}>
          <img src={images.logo} alt="Mata Fitness" />
        </Link>
        <p>{t.footer.tagline}</p>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label={t.footer.instagramAria}>
          <Instagram size={21} />
        </a>
        <small>{t.footer.copyright}</small>
      </div>
    </footer>
  );
}
