import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <div className="page-wrap page-width">
      <section className="page-hero">
        <div className="section-label">01 / ჩვენ შესახებ</div>
        <h1>მოძრაობა არის<br /><em>ცხოვრება.</em></h1>
      </section>

      <section className="intro-grid">
        <div>
          <p className="large-copy">Mata Fitness-ში ვქმნით გარემოს, სადაც ვარჯიში მხოლოდ რუტინა არ არის. აქ შენ იპოვი ენერგიას, სწორ ადამიანებს და მოტივაციას, რომელიც ყოველდღე წინ გიბიძგებს.</p>
          <p className="large-copy">ჩვენი მისია მარტივია — დაგეხმაროთ იპოვოთ ძალა, რომელიც უკვე გაქვს, და ააშენოთ ჩვევები, რომლებიც სამუდამოდ დარჩება.</p>
          <Link className="text-link" to="/programs">აღმოაჩინე ჩვენი პროგრამები <ArrowRight size={17} /></Link>
        </div>
        <div className="stats-grid">
          <div><strong>1,200<span>+</span></strong><small>აქტიური წევრი</small></div>
          <div><strong>24<span>/7</span></strong><small>ენერგიის სივრცე</small></div>
          <div><strong>12<span>+</span></strong><small>ჯგუფური კლასი</small></div>
          <div><strong>8<span>+</span></strong><small>პროფესიონალი ტრენერი</small></div>
        </div>
      </section>
    </div>
  );
}
