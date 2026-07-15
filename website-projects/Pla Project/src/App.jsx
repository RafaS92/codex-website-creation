import { useEffect } from 'react';
import AOS from 'aos';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

function RouteEffects() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!hash) window.scrollTo({ top: 0, behavior: 'auto' });
    else window.requestAnimationFrame(() => document.querySelector(hash)?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' }));
    window.setTimeout(() => AOS.refresh(), 60);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    AOS.init({ duration: reduce ? 0 : 600, easing: 'ease-out', once: true, offset: 24, disable: reduce });
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <RouteEffects />
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
