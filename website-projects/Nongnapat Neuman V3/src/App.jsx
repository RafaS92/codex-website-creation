import { Route, Routes } from 'react-router-dom';
import SiteLayout from './layouts/SiteLayout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import RetreatsWorkshops from './pages/RetreatsWorkshops.jsx';
import ReikiTraining from './pages/ReikiTraining.jsx';
import ContactFAQ from './pages/ContactFAQ.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="retreats-workshops" element={<RetreatsWorkshops />} />
        <Route path="reiki-training" element={<ReikiTraining />} />
        <Route path="contact" element={<ContactFAQ />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
