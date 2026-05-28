import { Mail, MessageCircle } from 'lucide-react';
import Button from '../components/Button.jsx';
import ContactForm from '../components/ContactForm.jsx';
import FAQAccordion from '../components/FAQAccordion.jsx';
import ImagePanel from '../components/ImagePanel.jsx';
import SEO from '../components/SEO.jsx';
import Section from '../components/Section.jsx';
import { contact, faqs, images } from '../data/siteData.js';

export default function ContactFAQ() {
  return (
    <>
      <SEO title="Contact" description="Contact Nongnapat Neuman about private healing sessions, retreats, workshops, and Reiki training." />

      <Section className="contact-page">
        <div className="contact-page__intro">
          <p className="eyebrow">Contact & FAQ</p>
          <h1>We are here to support your journey.</h1>
          <p>Reach out gently about private sessions, retreats, workshops, or Reiki training. The next step can be simple and unhurried.</p>
        </div>

        <div className="contact-page__grid">
          <div>
            <h2>Common Questions</h2>
            <FAQAccordion items={faqs} />
          </div>

          <aside className="contact-panel" aria-label="Contact options">
            <a className="contact-tile" href={contact.whatsapp}>
              <MessageCircle aria-hidden="true" />
              <span>WhatsApp</span>
            </a>
            <a className="contact-tile contact-tile--primary" href={`mailto:${contact.email}`}>
              <Mail aria-hidden="true" />
              <span>Email</span>
            </a>
            <h2>Inquire</h2>
            <ContactForm />
          </aside>
        </div>

        <div className="contact-page__image">
          <ImagePanel image={images.contact} />
          <div>
            <p className="eyebrow">Location</p>
            <h2>{contact.location}</h2>
            <p>The practice is primarily in person, with the environment and natural setting forming part of the experience.</p>
            <Button to="/services" variant="secondary">Review Services</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
