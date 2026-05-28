import { Link } from 'react-router-dom';
import { contact, navLinks } from '../data/siteData.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <Link className="footer__brand" to="/">Nongnapat Neuman</Link>
          <p>Grounded holistic healing, retreats, workshops, and Reiki training in Chiang Dao, Northern Thailand.</p>
        </div>

        <div className="footer__group">
          <h2>Explore</h2>
          {navLinks.slice(1, 5).map((link) => (
            <Link key={link.to} to={link.to}>{link.label}</Link>
          ))}
        </div>

        <div className="footer__group">
          <h2>Connect</h2>
          <a href={contact.whatsapp}>WhatsApp</a>
          <a href={`mailto:${contact.email}`}>Email</a>
          <Link to="/contact">Inquiry Form</Link>
        </div>
      </div>
    </footer>
  );
}
