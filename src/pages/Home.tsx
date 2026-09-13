import { Link } from 'react-router-dom';
import { ArrowRight, Play, Zap } from 'lucide-react';
import { images } from '@/data';
import { useLanguage } from '@/i18n/LanguageContext';
import { useDocumentMeta } from '@/i18n/useDocumentMeta';

function ArrowUpRight({ size = 18 }: { size?: number }) {
  return <ArrowRight size={size} style={{ transform: 'rotate(-45deg)' }} />;
}

export default function Home() {
  const { t, localizedPath } = useLanguage();
  useDocumentMeta(t.seo.home.title, t.seo.home.description);

  return (
    <>
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content page-width">
          <p className="kicker"><span /> {t.home.kicker}</p>
          <h1>{t.home.h1Line1}<br /><em>{t.home.h1Emphasis}</em> {t.home.h1Suffix}</h1>
          <p className="hero-copy">{t.home.heroCopyLine1}<br />{t.home.heroCopyLine2}</p>
          <div className="hero-actions">
            <Link className="button button-primary" to={localizedPath('/pricing')}>{t.home.ctaStart} <ArrowRight size={18} /></Link>
            <Link className="play-button" to={localizedPath('/about')}><span><Play size={15} fill="currentColor" /></span> {t.home.ctaLearnMore}</Link>
          </div>
        </div>
        <div className="hero-stamp">{t.home.estLabel}<br /><strong>{t.home.estYear}</strong></div>
        <div className="scroll-hint"><span /> {t.home.scrollHint}</div>
      </section>

      <section className="home-intro page-width section-padding">
        <div className="section-label">{t.home.introLabel}</div>
        <div className="intro-grid">
          <div>
            <h2>{t.home.introH2Line1}<br /><em>{t.home.introH2Emphasis}</em></h2>
            <p className="large-copy">{t.home.introCopy}</p>
            <Link className="text-link" to={localizedPath('/programs')}>{t.home.introLink} <ArrowRight size={17} /></Link>
          </div>
          <div className="stats-grid">
            <div><strong>1,200<span>+</span></strong><small>{t.home.stats.members}</small></div>
            <div><strong>24<span>/7</span></strong><small>{t.home.stats.access}</small></div>
            <div><strong>12<span>+</span></strong><small>{t.home.stats.classes}</small></div>
            <div><strong>8<span>+</span></strong><small>{t.home.stats.trainers}</small></div>
          </div>
        </div>
      </section>

      <section className="dark-section section-padding">
        <div className="page-width">
          <div className="section-heading">
            <div>
              <div className="section-label">{t.home.programsLabel}</div>
              <h2>{t.home.programsH2Line1}<br /><em>{t.home.programsH2Emphasis}</em></h2>
            </div>
            <p>{t.home.programsIntro}</p>
          </div>
          <div className="program-grid">
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
          </div>
        </div>
      </section>

      <section className="gallery-section page-width section-padding">
        <div className="section-heading">
          <div>
            <div className="section-label">{t.home.gallery.label}</div>
            <h2>{t.home.gallery.h2Line1}<br /><em>{t.home.gallery.h2Emphasis}</em></h2>
          </div>
          <p>{t.home.gallery.copy}</p>
        </div>
        <div className="gallery-grid">
          <img className="gallery-wide" src={images.gym} alt={t.home.alt.gym} />
          <img src={images.exterior} alt={t.home.alt.exterior} />
          <img src={images.functional} alt={t.home.alt.functional} />
        </div>
      </section>
    </>
  );
}
