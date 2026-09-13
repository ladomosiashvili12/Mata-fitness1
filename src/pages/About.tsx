import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { useDocumentMeta } from '@/i18n/useDocumentMeta';

export default function About() {
  const { t, localizedPath } = useLanguage();
  useDocumentMeta(t.seo.about.title, t.seo.about.description);

  return (
    <div className="page-wrap page-width">
      <section className="page-hero">
        <div className="section-label">{t.about.label}</div>
        <h1>{t.about.h1Line1}<br /><em>{t.about.h1Emphasis}</em></h1>
      </section>

      <section className="intro-grid">
        <div>
          <p className="large-copy">{t.about.copy1}</p>
          <p className="large-copy">{t.about.copy2}</p>
          <Link className="text-link" to={localizedPath('/programs')}>{t.about.link} <ArrowRight size={17} /></Link>
        </div>
        <div className="stats-grid">
          <div><strong>1,200<span>+</span></strong><small>{t.home.stats.members}</small></div>
          <div><strong>24<span>/7</span></strong><small>{t.home.stats.access}</small></div>
          <div><strong>12<span>+</span></strong><small>{t.home.stats.classes}</small></div>
          <div><strong>8<span>+</span></strong><small>{t.home.stats.trainers}</small></div>
        </div>
      </section>
    </div>
  );
}
