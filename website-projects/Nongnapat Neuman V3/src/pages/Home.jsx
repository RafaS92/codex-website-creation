import Button from '../components/Button.jsx';
import CTASection from '../components/CTASection.jsx';
import ImagePanel from '../components/ImagePanel.jsx';
import PathwayCard from '../components/PathwayCard.jsx';
import SEO from '../components/SEO.jsx';
import Section from '../components/Section.jsx';
import { images, pathways } from '../data/siteData.js';

export default function Home() {
  return (
    <>
      <SEO
        title="Holistic Healing in Chiang Dao"
        description="In-person holistic healing, retreats, workshops, and Reiki training with Nongnapat Neuman in Northern Thailand."
      />

      <section className="home-hero">
        <img src={images.mountains.src} alt={images.mountains.alt} loading="eager" />
        <div className="home-hero__content" data-aos="fade-up">
          <p className="eyebrow">Chiang Dao, Northern Thailand</p>
          <h1>Grounded healing for deep rest and reconnection</h1>
          <p>Private sessions, retreats, workshops, and Reiki training held with calm professionalism and more than 20 years of experience.</p>
          <div className="button-row">
            <Button to="/contact">Inquire About a Session</Button>
            <Button to="/services" variant="light">Explore Services</Button>
          </div>
        </div>
      </section>

      <Section className="split-section">
        <div className="split-section__copy">
          <p className="eyebrow">20 years of presence</p>
          <h2>Professional care with a quiet, nature-rooted rhythm.</h2>
          <p>Nongnapat Neuman offers holistic healing rooted in energy work, somatic therapies, sound healing, mindfulness, and a deep relationship with the natural setting of Chiang Dao.</p>
          <p>The website experience is intentionally spacious: an invitation into trust, clarity, and resonance before a visitor takes the next step.</p>
        </div>
        <ImagePanel image={images.hands} />
      </Section>

      <Section tone="stone" className="pathways-section">
        <div className="section-heading">
          <p className="eyebrow">A sanctuary for every stage</p>
          <h2>Choose the path that feels aligned.</h2>
        </div>
        <div className="pathways-grid">
          {pathways.map((pathway) => (
            <PathwayCard key={pathway.title} item={pathway} />
          ))}
        </div>
      </Section>

      <Section className="nature-feature" aos="fade-up">
        <img src={images.chiangDao.src} alt={images.chiangDao.alt} loading="lazy" />
        <div>
          <p className="eyebrow">Nature as teacher</p>
          <h2>Chiang Dao is part of the healing experience.</h2>
          <p>The work is shaped by quiet landscapes, slower rhythms, and a setting that helps visitors return to their body, breath, and inner steadiness.</p>
          <Button to="/retreats-workshops" variant="light">Learn About Retreats</Button>
        </div>
      </Section>

      <CTASection
        title="Begin your path to stillness"
        text="Share what you are seeking and ask about private sessions, retreats, workshops, or Reiki training at your own pace."
        secondary="Meet Nongnapat"
        secondaryTo="/about"
      />
    </>
  );
}
