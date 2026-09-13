import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { trainers } from '@/data';

export default function Trainers() {
  return (
    <div className="page-wrap page-width">
      <section className="page-hero">
        <div className="section-label">03 / შენი გუნდი</div>
        <h1>შეხვდი<br /><em>გუნდს.</em></h1>
        <Link className="outline-button" to="/contact">დაგვიკავშირდი <ArrowRight size={17} /></Link>
      </section>

      <section className="trainer-grid trainer-grid-page">
        {trainers.map((trainer, index) => (
          <article className="trainer-card" key={trainer.name}>
            <div className="trainer-photo">
              <img src={trainer.image} alt={trainer.name} />
              <span>0{index + 1}</span>
            </div>
            <h3>{trainer.name}</h3>
            <p>{trainer.role}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
