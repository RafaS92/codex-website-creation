import { Link } from 'react-router-dom';
import { navigation } from '../content/site';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <p className="site-footer__brand">Nongnapat Neuman</p>
          <p className="site-footer__note">Holistic practitioner<br />Chiang Dao, Northern Thailand</p>
        </div>
        <nav className="site-footer__nav" aria-label="Footer navigation">
          {navigation.map((item) => <Link key={item.label} to={item.to}>{item.label}</Link>)}
          <Link to="/contact">Inquire</Link>
        </nav>
        <div className="site-footer__closing">
          <p>Deep rest, balance,<br />and reconnection.</p>
          <small>© {new Date().getFullYear()} Nongnapat Neuman</small>
        </div>
      </div>
    </footer>
  );
}
