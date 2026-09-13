import { Clock3 } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { useDocumentMeta } from '@/i18n/useDocumentMeta';

function ArrowUpRight({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(-45deg)' }}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default function Schedule() {
  const { t, content } = useLanguage();
  useDocumentMeta(t.seo.schedule.title, t.seo.schedule.description);

  return (
    <div className="page-wrap page-width">
      <section className="page-hero">
        <div className="section-label">{t.schedule.label}</div>
        <h1>{t.schedule.h1Line1}<br /><em>{t.schedule.h1Emphasis}</em></h1>
        <div className="schedule-note">
          <Clock3 size={22} />
          <p>{t.schedule.noteLine1}<br />{t.schedule.noteLine2}</p>
        </div>
      </section>

      <section className="schedule-list">
        {content.schedule.map((row) => (
          <div className="schedule-row" key={`${row.day}-${row.title}`}>
            <strong>{row.day}</strong>
            <span className="schedule-time">{row.time}</span>
            <span className="schedule-title">{row.title}</span>
            <span className="schedule-trainer">{row.trainer}</span>
            <button aria-label={t.schedule.bookAria(row.title)}><ArrowUpRight size={18} /></button>
          </div>
        ))}
      </section>
    </div>
  );
}
