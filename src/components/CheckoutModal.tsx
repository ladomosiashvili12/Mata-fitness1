import { FormEvent, useState } from 'react';
import { ArrowRight, Check, ShieldCheck, X } from 'lucide-react';
import type { Package } from '@/data';
import { useLanguage } from '@/i18n/LanguageContext';

export default function CheckoutModal({
  pkg,
  onClose,
}: {
  pkg: Package;
  onClose: () => void;
}) {
  const { t } = useLanguage();
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
        <button className="modal-close" onClick={onClose} aria-label={t.checkout.closeAria}>
          <X />
        </button>
        {submitted ? (
          <div className="success-state">
            <div className="success-icon"><Check /></div>
            <p className="kicker">{t.checkout.success.kicker}</p>
            <h2>{t.checkout.success.h2Line1}<br /><em>{t.checkout.success.h2Emphasis}</em></h2>
            <p>{t.checkout.success.thanks(pkg.name)}</p>
            <button className="button button-primary" onClick={onClose}>{t.checkout.success.closeButton}</button>
          </div>
        ) : (
          <>
            <div className="checkout-header">
              <div>
                <div className="section-label">{t.checkout.step}</div>
                <h2>{t.checkout.h2Line1}<br /><em>{t.checkout.h2Emphasis}</em></h2>
              </div>
              <div className="checkout-summary">
                <span>{pkg.name}</span>
                <strong>{pkg.price} ₾</strong>
              </div>
            </div>
            <div className="demo-notice">
              <ShieldCheck size={18} />
              <span>{t.checkout.demoNotice}</span>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <label>{t.checkout.firstName}<input required placeholder={t.checkout.firstNamePlaceholder} /></label>
                <label>{t.checkout.lastName}<input required placeholder={t.checkout.lastNamePlaceholder} /></label>
              </div>
              <label>{t.checkout.email}<input type="email" required placeholder="you@example.com" /></label>
              <label>{t.checkout.phone}<input type="tel" required placeholder={t.checkout.phonePlaceholder} /></label>
              <div className="form-divider"><span>{t.checkout.cardSectionLabel}</span></div>
              <label>{t.checkout.cardNumber}<input inputMode="numeric" required placeholder="0000 0000 0000 0000" /></label>
              <div className="form-row">
                <label>{t.checkout.expiry}<input required placeholder="MM / YY" /></label>
                <label>CVV<input required inputMode="numeric" placeholder="123" /></label>
              </div>
              <button className="button button-primary submit-button" type="submit">
                {t.checkout.continueButton} <ArrowRight size={18} />
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
