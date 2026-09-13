import { Link } from 'react-router-dom';
import { ArrowRight, Zap } from 'lucide-react';
import { images } from '@/data';
import { useLanguage } from '@/i18n/LanguageContext';
import { useDocumentMeta } from '@/i18n/useDocumentMeta';

function ArrowUpRight({ size = 18 }: { size?: number }) {
  return <ArrowRight size={size} style={{ transform: 'rotate(-45deg)' }} />;
}

export default function Programs() {
  const { t, localizedPath } = useLanguage();
  useDocumentMeta(t.seo.programs.title, t.seo.programs.description);

  return (
    <div className="page-wrap page-width">
      <section className="page-hero">
        <div className="section-label">{t.programs.label}</div>
        <h1>{t.programs.h1Line1}<br /><em>{t.programs.h1Emphasis}</em></h1>
        <p className="page-hero-copy">{t.programs.copy}</p>
      </section>

      <section className="program-grid program-grid-page">
        <article className="program-card program-card-large">
          <img src={images.training} alt={t.home.alt.personalTraining} />
          <div className="card-shade" />
          <div className="program-card-content">
            <span>01</span>
            <h3>{t.home.programCards.personal.title1}<br />{t.home.programCards.personal.title2}</h3>
            <p>{t.home.programCards.personal.copy}</p>
            <Link to={localizedPath('/trainers')}>{t.home.programCards.personal.link} <ArrowUpRight /></Link>
          </div>
        </article>
        <article className="program-card">
          <img src={images.functional} alt={t.home.alt.functionalTraining} />
          <div className="card-shade" />
          <div className="program-card-content">
            <span>02</span>
            <h3>{t.home.programCards.group.title1}<br />{t.home.programCards.group.title2}</h3>
            <p>{t.home.programCards.group.copy}</p>
            <Link to={localizedPath('/schedule')}>{t.home.programCards.group.link} <ArrowUpRight /></Link>
          </div>
        </article>
        <article className="program-card program-card-accent">
          <div className="accent-icon"><Zap /></div>
          <span>03</span>
          <h3>{t.home.programCards.progress.title1}<br />{t.home.programCards.progress.title2}</h3>
          <p>{t.home.programCards.progress.copy}</p>
          <Link to={localizedPath('/pricing')}>{t.home.programCards.progress.link} <ArrowUpRight /></Link>
        </article>
      </section>
    </div>
  );
}
