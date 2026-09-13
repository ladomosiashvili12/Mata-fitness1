import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Programs from '@/pages/Programs';
import Trainers from '@/pages/Trainers';
import Schedule from '@/pages/Schedule';
import Pricing from '@/pages/Pricing';
import Contact from '@/pages/Contact';
import { LanguageProvider, getStoredLanguage } from '@/i18n/LanguageContext';

// The bare routes ("/", "/about", ...) are Georgian — the site's original,
// default language — and keep working exactly as before for anyone with
// those URLs bookmarked or indexed. The "/en/*" routes mirror the same
// pages in English. Both groups render the exact same page/layout
// components; only the LanguageProvider wrapping them differs.

// If someone previously chose English and lands back on the bare "/" URL,
// send them to "/en" so their choice is remembered. Any other Georgian URL
// (e.g. "/about") always stays Georgian, per spec.
function HomeOrRedirect() {
  return getStoredLanguage() === 'en' ? <Navigate to="/en" replace /> : <Home />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <LanguageProvider lang="ka">
              <Layout />
            </LanguageProvider>
          }
        >
          <Route index element={<HomeOrRedirect />} />
          <Route path="about" element={<About />} />
          <Route path="programs" element={<Programs />} />
          <Route path="trainers" element={<Trainers />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        <Route
          path="en"
          element={
            <LanguageProvider lang="en">
              <Layout />
            </LanguageProvider>
          }
        >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="programs" element={<Programs />} />
          <Route path="trainers" element={<Trainers />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
