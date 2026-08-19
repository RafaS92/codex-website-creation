import { useEffect } from 'react'
import AOS from 'aos'
import { Route, Routes, useLocation } from 'react-router-dom'
import SiteShell from './components/SiteShell'
import { AboutPage, ContactPage, EventsPage, FAQPage, HomePage, LegalPage, NotFoundPage, SeminarPage, TherapiesPage } from './pages/Pages'

const titles = {
  '/': 'Studio IKI | Jikiden Reiki & Holistic Therapies',
  '/jikiden-reiki-seminar': 'Jikiden Reiki Seminar | Studio IKI',
  '/therapies': 'Holistic Therapies | Studio IKI',
  '/about': 'About & Philosophy | Studio IKI',
  '/events': 'Gatherings & Events | Studio IKI',
  '/faq': 'Frequently Asked Questions | Studio IKI',
  '/contact': 'Contact & Inquiry | Studio IKI',
  '/privacy': 'Privacy Policy | Studio IKI',
  '/terms': 'Terms / Booking Policy | Studio IKI',
}

function RouteEffects() {
  const { pathname } = useLocation()
  useEffect(() => {
    document.title = titles[pathname] || 'Studio IKI'
    AOS.refresh()
  }, [pathname])
  return null
}

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 600, once: true, offset: 60, disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches })
  }, [])

  return (
    <>
      <RouteEffects />
      <Routes>
        <Route element={<SiteShell />}>
          <Route index element={<HomePage />} />
          <Route path="jikiden-reiki-seminar" element={<SeminarPage />} />
          <Route path="therapies" element={<TherapiesPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="privacy" element={<LegalPage type="privacy" />} />
          <Route path="terms" element={<LegalPage type="terms" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}
