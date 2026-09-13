import { FormEvent, useState } from 'react';
import { ArrowRight, Check, ShieldCheck, X } from 'lucide-react';
import type { Package } from '@/data';

export default function CheckoutModal({
  pkg,
  onClose,
}: {
  pkg: Package;
  onClose: () => void;
}) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="modal-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="checkout-modal">
        <button className="modal-close" onClick={onClose} aria-label="დახურვა">
          <X />
        </button>
        {submitted ? (
          <div className="success-state">
            <div className="success-icon"><Check /></div>
            <p className="kicker">შეკვეთა მიღებულია</p>
            <h2>შენი სტარტი<br /><em>დადასტურებულია.</em></h2>
            <p>მადლობა, {pkg.name} პაკეტის არჩევისთვის. ჩვენი გუნდი მალე დაგიკავშირდება დასადასტურებლად.</p>
            <button className="button button-primary" onClick={onClose}>დახურვა</button>
          </div>
        ) : (
          <>
            <div className="checkout-header">
              <div>
                <div className="section-label">შეძენა / 01</div>
                <h2>დაიწყე<br /><em>დღეს.</em></h2>
              </div>
              <div className="checkout-summary">
                <span>{pkg.name}</span>
                <strong>{pkg.price} ₾</strong>
              </div>
            </div>
            <div className="demo-notice">
              <ShieldCheck size={18} />
              <span>ეს არის დემო-გადახდის ფორმა. თანხა არ ჩამოგეჭრება.</span>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <label>სახელი<input required placeholder="გიორგი" /></label>
                <label>გვარი<input required placeholder="მაისურაძე" /></label>
              </div>
              <label>ელ-ფოსტა<input type="email" required placeholder="you@example.com" /></label>
              <label>ტელეფონი<input type="tel" required placeholder="+995 5XX XX XX XX" /></label>
              <div className="form-divider"><span>ბარათის მონაცემები</span></div>
              <label>ბარათის ნომერი<input inputMode="numeric" required placeholder="0000 0000 0000 0000" /></label>
              <div className="form-row">
                <label>ვადა<input required placeholder="MM / YY" /></label>
                <label>CVV<input required inputMode="numeric" placeholder="123" /></label>
              </div>
              <button className="button button-primary submit-button" type="submit">
                გაგრძელება <ArrowRight size={18} />
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
