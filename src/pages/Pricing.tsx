import { useOutletContext } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import type { Package } from '@/data';
import { useLanguage } from '@/i18n/LanguageContext';
import { useDocumentMeta } from '@/i18n/useDocumentMeta';

type OutletContext = { openCheckout: (pkg: Package) => void };

export default function Pricing() {
  const { openCheckout } = useOutletContext<OutletContext>();
  const { t, content } = useLanguage();
  useDocumentMeta(t.seo.pricing.title, t.seo.pricing.description);

  return (
    <div className="page-wrap page-width">
      <section className="page-hero">
        <div className="section-label">{t.pricing.label}</div>
        <h1>{t.pricing.h1Line1}<br /><em>{t.pricing.h1Emphasis}</em></h1>
        <p className="page-hero-copy">{t.pricing.copyLine1}<br /><strong>{t.pricing.copyLine2}</strong></p>
      </section>

      <section className="pricing-grid pricing-grid-page">
        {content.packages.map((item) => (
          <article className={item.featured ? 'price-card featured' : 'price-card'} key={item.name}>
            {item.featured && <div className="popular-label">{t.pricing.popularLabel}</div>}
            <span className="price-eyebrow">{item.eyebrow}</span>
            <h3>{item.name}</h3>
            <p className="price-description">{item.description}</p>
            <div className="price">
              <strong>{item.price}</strong>
              <span>₾<br /><small>{t.pricing.perMonth}</small></span>
            </div>
            <ul>
              {item.features.map((feature) => (
                <li key={feature}><Check size={16} /> {feature}</li>
              ))}
            </ul>
            <button
              className={item.featured ? 'button button-primary' : 'button button-dark'}
              onClick={() => openCheckout(item)}
            >
              {t.pricing.chooseButton} <ArrowRight size={17} />
            </button>
          </article>
        ))}
      </section>
    </div>
  );
}
