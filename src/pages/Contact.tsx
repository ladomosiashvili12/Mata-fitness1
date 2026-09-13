import { Clock3, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div className="page-wrap page-width">
      <section className="page-hero">
        <div className="section-label">07 / გვეწვიე</div>
        <h1>მზად ხარ<br /><em>დაიწყო?</em></h1>
      </section>

      <section className="contact-grid contact-grid-page">
        <div>
          <p className="large-copy">პირველი ნაბიჯი მარტივია. მოდი, დაგვიკავშირდი ან პირდაპირ აირჩიე შენი პაკეტი ფასების გვერდზე.</p>
          <div className="contact-details">
            <div><MapPin size={20} /><p><strong>მისამართი</strong>თბილისი, საქართველო</p></div>
            <div><Phone size={20} /><p><strong>დაგვირეკე</strong>+995 555 00 00 00</p></div>
            <div><Clock3 size={20} /><p><strong>სამუშაო საათები</strong>ყოველდღე • 07:00 — 23:00</p></div>
          </div>
        </div>
      </section>
    </div>
  );
}
