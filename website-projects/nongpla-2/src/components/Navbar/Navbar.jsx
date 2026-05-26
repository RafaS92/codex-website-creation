import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { navItems } from '../../data/navigationData';
import Button from '../Button/Button';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'th' : 'en');
  };

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <NavLink className="navbar__brand" to="/" onClick={() => setOpen(false)}>
          <span>{t('site.name')}</span>
          <small>{t('site.location')}</small>
        </NavLink>
        <button
          className="navbar__toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((current) => !current)}
        >
          <span className="navbar__toggle-line" />
          <span className="sr-only">Menu</span>
        </button>
        <div className={`navbar__menu ${open ? 'is-open' : ''}`} id="site-menu">
          <div className="navbar__links">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)}>
                {t(item.key)}
              </NavLink>
            ))}
          </div>
          <div className="navbar__actions">
            <button className="language-toggle" type="button" onClick={changeLanguage}>
              {i18n.language === 'en' ? 'TH' : 'EN'}
            </button>
            <Button to="/contact" variant="secondary" onClick={() => setOpen(false)}>
              {t('nav.cta')}
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
