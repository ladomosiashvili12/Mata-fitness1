import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { useDocumentMeta } from '@/i18n/useDocumentMeta';

export default function Trainers() {
  const { t, content, localizedPath } = useLanguage();
  useDocumentMeta(t.seo.trainers.title, t.seo.trainers.description);

  return (
    <div className="page-wrap page-width">
      <section className="page-hero">
        <div className="section-label">{t.trainers.label}</div>
        <h1>{t.trainers.h1Line1}<br /><em>{t.trainers.h1Emphasis}</em></h1>
        <Link className="outline-button" to={localizedPath('/contact')}>{t.trainers.contactCta} <ArrowRight size={17} /></Link>
      </section>

      <section className="trainer-grid trainer-grid-page">
        {content.trainers.map((trainer, index) => (
          <article className="trainer-card" key={trainer.name}>
            <div className="trainer-photo">
              <img src={trainer.image} alt={trainer.name} />
              <span>0{index + 1}</span>
            </div>
            <h3>{trainer.name}</h3>
            <p>{trainer.role}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
