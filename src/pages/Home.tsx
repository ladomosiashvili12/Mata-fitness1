import { Link } from 'react-router-dom';
import { ArrowRight, Play, Zap } from 'lucide-react';
import { images } from '@/data';

function ArrowUpRight({ size = 18 }: { size?: number }) {
  return <ArrowRight size={size} style={{ transform: 'rotate(-45deg)' }} />;
}

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content page-width">
          <p className="kicker"><span /> MATA FITNESS • 2024</p>
          <h1>გახდი შენი<br /><em>საუკეთესო</em> ვერსია.</h1>
          <p className="hero-copy">სივრცე, სადაც შენი ძალა იზრდება.<br />შენი ტემპით. შენი წესებით.</p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/pricing">დაიწყე დღეს <ArrowRight size={18} /></Link>
            <Link className="play-button" to="/about"><span><Play size={15} fill="currentColor" /></span> გაიგე მეტი</Link>
          </div>
        </div>
        <div className="hero-stamp">EST.<br /><strong>2024</strong></div>
        <div className="scroll-hint"><span /> ჩასქროლე ქვემოთ</div>
      </section>

      <section className="home-intro page-width section-padding">
        <div className="section-label">ჩვენ შესახებ</div>
        <div className="intro-grid">
          <div>
            <h2>მოძრაობა არის<br /><em>ცხოვრება.</em></h2>
            <p className="large-copy">Mata Fitness-ში ვქმნით გარემოს, სადაც ვარჯიში მხოლოდ რუტინა არ არის. აქ შენ იპოვი ენერგიას, სწორ ადამიანებს და მოტივაციას, რომელიც ყოველდღე წინ გიბიძგებს.</p>
            <Link className="text-link" to="/programs">აღმოაჩინე ჩვენი პროგრამები <ArrowRight size={17} /></Link>
          </div>
          <div className="stats-grid">
            <div><strong>1,200<span>+</span></strong><small>აქტიური წევრი</small></div>
            <div><strong>24<span>/7</span></strong><small>ენერგიის სივრცე</small></div>
            <div><strong>12<span>+</span></strong><small>ჯგუფური კლასი</small></div>
            <div><strong>8<span>+</span></strong><small>პროფესიონალი ტრენერი</small></div>
          </div>
        </div>
      </section>

      <section className="dark-section section-padding">
        <div className="page-width">
          <div className="section-heading">
            <div>
              <div className="section-label">პროგრამები</div>
              <h2>ვარჯიში შენს<br /><em>რითმში.</em></h2>
            </div>
            <p>იქნება ეს პერსონალური ყურადღება თუ გუნდური ენერგია — შენს მიზნამდე მისასვლელი გზა აქ იწყება.</p>
          </div>
          <div className="program-grid">
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
          </div>
        </div>
      </section>

      <section className="gallery-section page-width section-padding">
        <div className="section-heading">
          <div>
            <div className="section-label">ჩვენი სივრცე</div>
            <h2>შენი ახალი<br /><em>სახლი.</em></h2>
          </div>
          <p>ყველაფერი, რაც გჭირდება შენი საუკეთესო ფორმისთვის.</p>
        </div>
        <div className="gallery-grid">
          <img className="gallery-wide" src={images.gym} alt="Mata Fitness სავარჯიშო დარბაზი" />
          <img src={images.exterior} alt="Mata Fitness შენობა" />
          <img src={images.functional} alt="ვარჯიშის სივრცე" />
        </div>
      </section>
    </>
  );
}
