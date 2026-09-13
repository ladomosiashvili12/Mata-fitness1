import { useOutletContext } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { packages } from '@/data';
import type { Package } from '@/data';

type OutletContext = { openCheckout: (pkg: Package) => void };

export default function Pricing() {
  const { openCheckout } = useOutletContext<OutletContext>();

  return (
    <div className="page-wrap page-width">
      <section className="page-hero">
        <div className="section-label">05 / წევრობა</div>
        <h1>აირჩიე შენი<br /><em>სტარტი.</em></h1>
        <p className="page-hero-copy">არ არსებობს იდეალური მომენტი დასაწყებად.<br /><strong>არსებობს მხოლოდ დღეს.</strong></p>
      </section>

      <section className="pricing-grid pricing-grid-page">
        {packages.map((item) => (
          <article className={item.featured ? 'price-card featured' : 'price-card'} key={item.name}>
            {item.featured && <div className="popular-label">ყველაზე პოპულარული</div>}
            <span className="price-eyebrow">{item.eyebrow}</span>
            <h3>{item.name}</h3>
            <p className="price-description">{item.description}</p>
            <div className="price">
              <strong>{item.price}</strong>
              <span>₾<br /><small>/ თვე</small></span>
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
              არჩევა <ArrowRight size={17} />
            </button>
          </article>
        ))}
      </section>
    </div>
  );
}
