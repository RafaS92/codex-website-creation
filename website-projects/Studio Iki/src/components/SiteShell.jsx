import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { navigation } from '../data/content'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 })
  }, [pathname])
  return null
}

function Header() {
  const [open, setOpen] = useState(false)
  const triggerRef = useRef(null)
  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])
  useEffect(() => {
    if (!open) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        triggerRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <Link className="wordmark" to="/" aria-label="Studio IKI home">Studio IKI 息</Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'}>{item.label}</NavLink>
          ))}
        </nav>
        <div className="site-header__actions">
          <Link className="text-link desktop-contact" to="/contact">Contact</Link>
          <Link className="button button--primary desktop-cta" to="/contact">Join a Seminar</Link>
          <button
            ref={triggerRef}
            className="menu-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <span aria-hidden="true">{open ? '×' : '☰'}</span>
          </button>
        </div>
      </div>
      <nav id="mobile-navigation" className={`mobile-nav ${open ? 'is-open' : ''}`} aria-label="Mobile navigation" hidden={!open}>
        {navigation.map((item) => (
          <NavLink key={item.to} to={item.to} end={item.to === '/'} onClick={() => setOpen(false)}>{item.label}</NavLink>
        ))}
        <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
        <Link className="button button--primary" to="/contact" onClick={() => setOpen(false)}>Join a Seminar</Link>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__top">
        <Link className="wordmark" to="/">Studio IKI 息</Link>
        <p>© {new Date().getFullYear()} Studio IKI. Built with intention.</p>
      </div>
      <div className="shell site-footer__links">
        <div><Link to="/privacy">Privacy Policy</Link><Link to="/terms">Terms / Booking Policy</Link></div>
        <div><Link to="/contact">Inquiry</Link><Link to="/about">Credentials</Link></div>
      </div>
    </footer>
  )
}

export default function SiteShell() {
  return (
    <>
      <ScrollToTop />
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header />
      <main id="main-content"><Outlet /></main>
      <Footer />
    </>
  )
}
