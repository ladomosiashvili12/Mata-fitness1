import { Clock3, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { useDocumentMeta } from '@/i18n/useDocumentMeta';

export default function Contact() {
  const { t } = useLanguage();
  useDocumentMeta(t.seo.contact.title, t.seo.contact.description);

  return (
    <div className="page-wrap page-width">
      <section className="page-hero">
        <div className="section-label">{t.contact.label}</div>
        <h1>{t.contact.h1Line1}<br /><em>{t.contact.h1Emphasis}</em></h1>
      </section>

      <section className="contact-grid contact-grid-page">
        <div>
          <p className="large-copy">{t.contact.copy}</p>
          <div className="contact-details">
            <div><MapPin size={20} /><p><strong>{t.contact.address.label}</strong>{t.contact.address.value}</p></div>
            <div><Phone size={20} /><p><strong>{t.contact.call.label}</strong>{t.contact.call.value}</p></div>
            <div><Clock3 size={20} /><p><strong>{t.contact.hours.label}</strong>{t.contact.hours.value}</p></div>
          </div>
        </div>
      </section>
    </div>
  );
}
