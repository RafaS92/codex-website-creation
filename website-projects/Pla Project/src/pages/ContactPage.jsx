import { useEffect } from 'react';
import Button from '../components/Button';
import ContactForm from '../components/ContactForm';
import Accordion from '../components/Accordion';
import SectionContainer from '../components/SectionContainer';
import { faqs } from '../content/site';
import portrait from '../assets/images/contact/portrait.jpg';
import portraitMobile from '../assets/images/contact/portrait-mobile.jpg';
import landscape from '../assets/images/contact/chiang-dao.jpg';

export default function ContactPage() {
  useEffect(() => {
    document.title = 'Inquire | Nongnapat Neuman';
  }, []);

  return (
    <div className="contact-page">
      <SectionContainer className="contact-hero" aria-labelledby="contact-title">
        <div className="contact-hero__portrait">
          <picture>
            <source media="(max-width: 47.99rem)" srcSet={portraitMobile} />
            <img src={portrait} alt="Nongnapat Neuman standing in her practice space" width="1122" height="1402" fetchPriority="high" />
          </picture>
        </div>
        <div className="contact-hero__content">
          <p className="eyebrow">A quiet first step</p>
          <h1 id="contact-title">Begin a Conversation</h1>
          <p>Whether you are curious about a specific offering or simply want to explore whether this approach feels right, you are welcome to begin here.</p>
          <Button to="/contact#inquiry-form">Send an inquiry <span aria-hidden="true">↘</span></Button>
          <span className="contact-hero__aside">Private sessions · retreats · Reiki training</span>
        </div>
      </SectionContainer>

      <section className="contact-dark" aria-label="Inquiry and location">
        <div className="contact-grid">
          <div className="contact-grid__form" data-aos="fade-right">
            <ContactForm />
          </div>
          <aside className="sanctuary" data-aos="fade-left">
            <p className="eyebrow">Place matters</p>
            <h2>The Sanctuary in Chiang Dao</h2>
            <p>Nestled in Northern Thailand, the surrounding landscape offers a naturally quiet setting for rest, presence, and reconnection.</p>
            <div className="sanctuary__image"><img src={landscape} alt="Misty green mountains and forest in Chiang Dao" width="1408" height="768" loading="lazy" /></div>
            <address><span>Practice location</span><strong>Chiang Dao</strong><span>Northern Thailand</span></address>
          </aside>
        </div>
      </section>

      <SectionContainer className="preparations" aria-labelledby="preparations-title">
        <div className="section-heading">
          <p className="eyebrow">Before you arrive</p>
          <h2 id="preparations-title">Gentle Preparations</h2>
        </div>
        <Accordion items={faqs} />
      </SectionContainer>
    </div>
  );
}
