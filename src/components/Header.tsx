import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';
import { images } from '@/data';

const navItems = [
  { to: '/about', label: 'ჩვენ შესახებ' },
  { to: '/programs', label: 'პროგრამები' },
  { to: '/trainers', label: 'ტრენერები' },
  { to: '/schedule', label: 'განრიგი' },
  { to: '/pricing', label: 'ფასები' },
  { to: '/contact', label: 'კონტაქტი' },
];

export default function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome = location.pathname === '/';

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={isHome ? 'site-header is-transparent' : 'site-header is-solid'}>
      <Link className="brand" to="/" aria-label="Mata Fitness მთავარი გვერდი">
        <img src={images.logo} alt="Mata Fitness" />
      </Link>
      <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'}>
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to} className={({ isActive }) => (isActive ? 'is-active' : '')}>
            {item.label}
          </NavLink>
        ))}
      </nav>
      <Link className="header-cta" to="/pricing">შემოგვიერთდი <ArrowRight size={16} /></Link>
      <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label="მენიუს გახსნა">
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </header>
  );
}
