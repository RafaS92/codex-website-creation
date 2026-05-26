import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import SiteLayout from './layouts/SiteLayout';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ReikiTraining from './pages/ReikiTraining';
import RetreatsWorkshops from './pages/RetreatsWorkshops';
import Services from './pages/Services';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="retreats-workshops" element={<RetreatsWorkshops />} />
          <Route path="reiki-training" element={<ReikiTraining />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
