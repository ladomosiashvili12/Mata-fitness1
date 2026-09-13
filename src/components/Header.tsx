import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';
import { images } from '@/data';
import { useLanguage } from '@/i18n/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Header() {
  const location = useLocation();
  const { t, localizedPath } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome = location.pathname === '/' || location.pathname === '/en';

  const navItems = [
    { to: localizedPath('/about'), label: t.nav.about },
    { to: localizedPath('/programs'), label: t.nav.programs },
    { to: localizedPath('/trainers'), label: t.nav.trainers },
    { to: localizedPath('/schedule'), label: t.nav.schedule },
    { to: localizedPath('/pricing'), label: t.nav.pricing },
    { to: localizedPath('/contact'), label: t.nav.contact },
  ];

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={isHome ? 'site-header is-transparent' : 'site-header is-solid'}>
      <Link className="brand" to={localizedPath('/')} aria-label={t.nav.brandAria}>
        <img src={images.logo} alt="Mata Fitness" />
      </Link>
      <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'}>
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to} className={({ isActive }) => (isActive ? 'is-active' : '')} end>
            {item.label}
          </NavLink>
        ))}
        <LanguageSwitcher />
      </nav>
      <Link className="header-cta" to={localizedPath('/pricing')}>
        {t.nav.join} <ArrowRight size={16} />
      </Link>
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? t.nav.menuCloseAria : t.nav.menuOpenAria}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </header>
  );
}
