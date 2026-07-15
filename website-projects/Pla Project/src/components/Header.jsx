import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Button from './Button';
import { navigation } from '../content/site';

export default function Header() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);
  const mobileNavRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    const focusTimer = open
      ? window.setTimeout(() => mobileNavRef.current?.querySelector('a[href]')?.focus(), 0)
      : null;

    const onKey = (event) => {
      if (event.key === 'Escape' && open) {
        setOpen(false);
        triggerRef.current?.focus();
      }

      if (event.key === 'Tab' && open) {
        const focusableItems = [triggerRef.current, ...(mobileNavRef.current?.querySelectorAll('a[href]') ?? [])].filter(Boolean);
        const firstItem = focusableItems[0];
        const lastItem = focusableItems.at(-1);

        if (event.shiftKey && document.activeElement === firstItem) {
          event.preventDefault();
          lastItem?.focus();
        } else if (!event.shiftKey && document.activeElement === lastItem) {
          event.preventDefault();
          firstItem?.focus();
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      if (focusTimer) window.clearTimeout(focusTimer);
      document.body.classList.remove('menu-open');
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="wordmark" to="/" aria-label="Nongnapat Neuman, home">
          <span>Nongnapat</span> Neuman
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            item.to.includes('#') ? (
              <Link className="nav-link" to={item.to} key={item.label}>{item.label}</Link>
            ) : (
              <NavLink className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`} end={item.to === '/'} to={item.to} key={item.label}>
                {item.label}
              </NavLink>
            )
          ))}
        </nav>

        <div className="site-header__actions">
          <Button className="header-inquiry" to="/contact">Inquire</Button>
          <button
            ref={triggerRef}
            className="menu-trigger"
            type="button"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className={`menu-overlay${open ? ' is-open' : ''}`} onClick={() => setOpen(false)} aria-hidden="true" />
      <nav ref={mobileNavRef} id="mobile-navigation" className={`mobile-nav${open ? ' is-open' : ''}`} aria-label="Mobile navigation" aria-hidden={!open}>
        <p className="mobile-nav__eyebrow">Chiang Dao · Northern Thailand</p>
        <p className="mobile-nav__title">Nongnapat Neuman</p>
        <div className="mobile-nav__links">
          {navigation.map((item) => <Link to={item.to} key={item.label} tabIndex={open ? 0 : -1}>{item.label}<span aria-hidden="true">↗</span></Link>)}
          <Link to="/contact" tabIndex={open ? 0 : -1}>Inquire<span aria-hidden="true">↗</span></Link>
        </div>
      </nav>
    </header>
  );
}
