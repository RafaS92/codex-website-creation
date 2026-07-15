import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import ContactForm from '../components/ContactForm';
import SectionContainer from '../components/SectionContainer';
import { approachItems, servicePathways } from '../content/site';
import hero from '../assets/images/home/hero.jpg';
import heroMobile from '../assets/images/home/hero-mobile.jpg';
import grounding from '../assets/images/home/grounding.jpg';

export default function HomePage() {
  useEffect(() => {
    document.title = 'Nongnapat Neuman | Holistic Practitioner';
  }, []);

  return (
    <div className="home-page">
      <SectionContainer className="home-hero" aria-labelledby="home-title">
        <div className="home-hero__image-wrap">
          <picture>
            <source media="(max-width: 47.99rem)" srcSet={heroMobile} />
            <img src={hero} alt="Nongnapat Neuman seated in a calm, naturally lit room" width="1122" height="1402" fetchPriority="high" />
          </picture>
          <div className="experience-stamp" aria-label="More than 20 years of experience"><strong>20+</strong><span>years of<br />practice</span></div>
        </div>
        <div className="home-hero__content">
          <p className="eyebrow">Holistic practitioner · Chiang Dao</p>
          <h1 id="home-title">Return to your center.<br /><em>Breathe into stillness.</em></h1>
          <p className="lede">A grounded, integrative approach to deep rest, balance, and reconnection—held with experience, care, and the quiet presence of nature.</p>
          <Button to="/contact">Begin a conversation <span aria-hidden="true">↗</span></Button>
        </div>
      </SectionContainer>

      <section className="approach-section" id="approach" aria-labelledby="approach-title">
        <div className="approach-section__intro" data-aos="fade-up">
          <p className="eyebrow">The practice</p>
          <h2 id="approach-title">The Integrative Approach</h2>
          <p>Eastern and Western perspectives meet energy work, somatic awareness, sound, mindfulness, and the natural world.</p>
        </div>
        <div className="approach-grid">
          {approachItems.map((item, index) => (
            <article className="approach-card" key={item.title} data-aos="fade-up" data-aos-delay={index * 80}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
          <div className="approach-years" data-aos="fade-up">
            <strong>20+</strong><span>Years of grounded<br />professional practice</span>
          </div>
        </div>
      </section>

      <SectionContainer className="pathways-section" aria-labelledby="pathways-title">
        <div className="section-heading" data-aos="fade-up">
          <p className="eyebrow">Ways to begin</p>
          <h2 id="pathways-title">Service Pathways</h2>
          <p>Choose a starting point, or simply reach out and discover what feels aligned.</p>
        </div>
        <div className="pathway-grid">
          {servicePathways.map((service, index) => (
            <article className="service-card" key={service.title} data-aos="fade-up" data-aos-delay={index * 80}>
              <Link className="service-card__image" to={service.to} aria-label={`Learn about ${service.title}`}>
                <img src={service.image} alt={service.alt} width="1408" height="768" loading="lazy" />
              </Link>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <Link className="text-link" to={service.to}>Learn more <span aria-hidden="true">↗</span></Link>
            </article>
          ))}
        </div>
      </SectionContainer>

      <section className="trust-section" aria-label="Practice philosophy">
        <div className="trust-section__image" data-aos="fade-right">
          <img src={grounding} alt="Natural stone resting on textured paper in soft daylight" width="704" height="1520" loading="lazy" />
        </div>
        <blockquote data-aos="fade-up">
          <p>“A place to slow down, listen inward, and reconnect with what feels steady and true.”</p>
          <footer>— The heart of the practice</footer>
        </blockquote>
      </section>

      <section className="home-inquiry" aria-label="Inquiry form">
        <div className="home-inquiry__card" data-aos="fade-up">
          <ContactForm compact title="Begin Your Practice" />
        </div>
      </section>
    </div>
  );
}
