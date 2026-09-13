import { Link } from 'react-router-dom';
import { ArrowRight, Zap } from 'lucide-react';
import { images } from '@/data';

function ArrowUpRight({ size = 18 }: { size?: number }) {
  return <ArrowRight size={size} style={{ transform: 'rotate(-45deg)' }} />;
}

export default function Programs() {
  return (
    <div className="page-wrap page-width">
      <section className="page-hero">
        <div className="section-label">02 / პროგრამები</div>
        <h1>ვარჯიში შენს<br /><em>რითმში.</em></h1>
        <p className="page-hero-copy">იქნება ეს პერსონალური ყურადღება თუ გუნდური ენერგია — შენს მიზნამდე მისასვლელი გზა აქ იწყება.</p>
      </section>

      <section className="program-grid program-grid-page">
        <article className="program-card program-card-large">
          <img src={images.training} alt="პერსონალური ვარჯიში" />
          <div className="card-shade" />
          <div className="program-card-content">
            <span>01</span>
            <h3>პერსონალური<br />ტრენინგი</h3>
            <p>ერთი-ერთზე ყურადღება. მაქსიმალური შედეგი.</p>
            <Link to="/trainers">გაიგე მეტი <ArrowUpRight /></Link>
          </div>
        </article>
        <article className="program-card">
          <img src={images.functional} alt="ფუნქციონალური ვარჯიში" />
          <div className="card-shade" />
          <div className="program-card-content">
            <span>02</span>
            <h3>ჯგუფური<br />ვარჯიში</h3>
            <p>ერთად უფრო ძლიერები ვართ.</p>
            <Link to="/schedule">განრიგის ნახვა <ArrowUpRight /></Link>
          </div>
        </article>
        <article className="program-card program-card-accent">
          <div className="accent-icon"><Zap /></div>
          <span>03</span>
          <h3>შენი<br />პროგრესი</h3>
          <p>გეგმა, რომელიც შენზეა მორგებული. შედეგი, რომელსაც დაინახავ.</p>
          <Link to="/pricing">დაიწყე ახლა <ArrowUpRight /></Link>
        </article>
      </section>
    </div>
  );
}
