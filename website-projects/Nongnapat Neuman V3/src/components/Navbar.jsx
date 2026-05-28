import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navLinks } from '../data/siteData.js';
import Button from './Button.jsx';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <nav className="navbar" aria-label="Main navigation">
        <Link className="navbar__brand" to="/">Nongnapat Neuman</Link>

        <div className="navbar__links" data-open={isOpen}>
          {navLinks.map((link) => (
            <NavLink
              className={({ isActive }) => (isActive ? 'navbar__link navbar__link--active' : 'navbar__link')}
              key={link.to}
              to={link.to}
            >
              {link.label}
            </NavLink>
          ))}
          <Button to="/contact" variant="primary" className="navbar__cta">Inquire</Button>
        </div>

        <button
          className="navbar__toggle"
          type="button"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>
    </header>
  );
}
