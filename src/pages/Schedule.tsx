import { Clock3 } from 'lucide-react';
import { schedule } from '@/data';

function ArrowUpRight({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(-45deg)' }}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default function Schedule() {
  return (
    <div className="page-wrap page-width">
      <section className="page-hero">
        <div className="section-label">04 / ჯგუფური ვარჯიშები</div>
        <h1>იპოვე შენი<br /><em>რითმი.</em></h1>
        <div className="schedule-note">
          <Clock3 size={22} />
          <p>ჯგუფური ვარჯიშები შედის<br />ყველა აბონემენტში.</p>
        </div>
      </section>

      <section className="schedule-list">
        {schedule.map(([day, time, title, trainer]) => (
          <div className="schedule-row" key={`${day}-${title}`}>
            <strong>{day}</strong>
            <span className="schedule-time">{time}</span>
            <span className="schedule-title">{title}</span>
            <span className="schedule-trainer">{trainer}</span>
            <button aria-label={`${title}-ის დაჯავშნა`}><ArrowUpRight size={18} /></button>
          </div>
        ))}
      </section>
    </div>
  );
}
