import { useCallback, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CheckoutModal from './CheckoutModal';
import type { Package } from '@/data';

export default function Layout() {
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const location = useLocation();

  const openCheckout = useCallback((pkg: Package) => {
    setSelectedPackage(pkg);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeCheckout = useCallback(() => {
    setSelectedPackage(null);
    document.body.style.overflow = '';
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="app-shell">
      <Header />
      <main>
        <Outlet context={{ openCheckout }} />
      </main>
      <Footer />
      {selectedPackage && <CheckoutModal pkg={selectedPackage} onClose={closeCheckout} />}
    </div>
  );
}
