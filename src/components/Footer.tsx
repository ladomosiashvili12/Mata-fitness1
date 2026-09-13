import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';
import { images } from '@/data';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-width footer-inner">
        <Link to="/"><img src={images.logo} alt="Mata Fitness" /></Link>
        <p>მოძრაობა არის ცხოვრება.</p>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
          <Instagram size={21} />
        </a>
        <small>© 2024 MATA FITNESS</small>
      </div>
    </footer>
  );
}
