import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import SectionContainer from '../components/SectionContainer';
import { services } from '../content/site';
import hero from '../assets/images/services/hero.jpg';
import mobileIntro from '../assets/images/services/mobile-intro.jpg';

export default function ServicesPage() {
  useEffect(() => {
    document.title = 'Services | Nongnapat Neuman';
  }, []);

  return (
    <div className="services-page">
      <section className="services-hero" aria-labelledby="services-title">
        <picture>
          <source media="(max-width: 47.99rem)" srcSet={mobileIntro} />
          <img src={hero} alt="A quiet healing session in a lush natural setting" width="1122" height="1402" fetchPriority="high" />
        </picture>
        <div className="services-hero__overlay" />
        <div className="services-hero__content">
          <p className="eyebrow">Private care · retreats · training</p>
          <h1 id="services-title">Pathways to Balance</h1>
          <p>Experiences created to support deep rest, renewed awareness, and a grounded return to yourself.</p>
        </div>
      </section>

      <SectionContainer className="services-list" aria-label="Healing services">
        {services.map((service, index) => (
          <article className={`service-row${index % 2 ? ' service-row--reverse' : ''}`} id={service.id} key={service.id}>
            <div className="service-row__content" data-aos={index % 2 ? 'fade-left' : 'fade-right'}>
              <div className="service-row__meta"><span>{service.number}</span><span>{service.eyebrow}</span></div>
              <h2>{service.title}</h2>
              <p>{service.text}</p>
              <Button to="/contact" variant={index === 0 ? 'primary' : 'secondary'}>Inquire about this path <span aria-hidden="true">↗</span></Button>
            </div>
            <div className="service-row__image" data-aos={index % 2 ? 'fade-right' : 'fade-left'}>
              <img src={service.image} alt={service.alt} width="1408" height="768" loading="lazy" />
            </div>
          </article>
        ))}
      </SectionContainer>

      <section className="services-belief" aria-labelledby="services-belief-title">
        <p className="eyebrow">The intention</p>
        <h2 id="services-belief-title">Nongnapat provides a space where every person can move at their own pace—with calm, professional care.</h2>
        <Link className="text-link" to="/contact">Begin with an inquiry <span aria-hidden="true">↗</span></Link>
      </section>
    </div>
  );
}
