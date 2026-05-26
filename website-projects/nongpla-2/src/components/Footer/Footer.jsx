import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { navItems } from '../../data/navigationData';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <p className="footer__brand">{t('site.name')}</p>
          <p>{t('site.location')}</p>
        </div>
        <div className="footer__links" aria-label="Footer navigation">
          {navItems.slice(0, 6).map((item) => (
            <NavLink key={item.to} to={item.to}>
              {t(item.key)}
            </NavLink>
          ))}
        </div>
        <div>
          <p>{t('common.contactIntro')}</p>
          <NavLink to="/contact">{t('nav.cta')}</NavLink>
        </div>
      </div>
    </footer>
  );
}
