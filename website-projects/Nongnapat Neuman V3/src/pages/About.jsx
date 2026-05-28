import Button from '../components/Button.jsx';
import CTASection from '../components/CTASection.jsx';
import FeatureCard from '../components/FeatureCard.jsx';
import ImagePanel from '../components/ImagePanel.jsx';
import SEO from '../components/SEO.jsx';
import Section from '../components/Section.jsx';
import { images } from '../data/siteData.js';

export default function About() {
  return (
    <>
      <SEO title="About" description="Learn about Nongnapat Neuman's grounded holistic healing approach and nature-based practice in Chiang Dao." />

      <Section className="split-hero about-hero">
        <div>
          <p className="eyebrow">Practitioner-led healing</p>
          <h1>A calm, experienced presence for meaningful healing work.</h1>
          <p>Nongnapat Neuman brings more than 20 years of holistic healing experience into in-person work that supports deep rest, balance, emotional grounding, and energetic wellbeing.</p>
          <div className="button-row">
            <Button to="/contact">Inquire Now</Button>
            <Button to="/services" variant="secondary">Our Services</Button>
          </div>
        </div>
        <ImagePanel image={images.portrait} className="image-panel--portrait" />
      </Section>

      <Section tone="stone" className="split-section">
        <ImagePanel image={images.sanctuary} />
        <div className="split-section__copy">
          <p className="eyebrow">The sanctuary</p>
          <h2>A healing environment shaped by safety and stillness.</h2>
          <p>The natural setting is not background decoration. It is part of how visitors slow down, orient, and reconnect with themselves physically, emotionally, and energetically.</p>
        </div>
      </Section>

      <Section className="values-section">
        <div className="section-heading">
          <p className="eyebrow">A journey of silence and skill</p>
          <h2>Depth without pressure. Spiritual care with grounded clarity.</h2>
        </div>
        <div className="feature-grid">
          <FeatureCard title="Integrity" text="Clear, professional care that avoids exaggerated claims and keeps the visitor's pace at the center." />
          <FeatureCard title="Safety" text="A calm container for people experiencing stress, overwhelm, burnout, or nervous system imbalance." />
          <FeatureCard title="Connection" text="An integrative practice that bridges energy work, somatics, mindfulness, sound, and nature." />
        </div>
      </Section>

      <Section className="premium-section">
        <div>
          <p className="eyebrow">The 5-star healing experience</p>
          <h2>Professionalism meets depth.</h2>
          <p>Careful details, a grounded environment, and a high-quality service experience help visitors feel reassured before they arrive.</p>
        </div>
        <ImagePanel image={images.stones} />
      </Section>

      <CTASection
        title="Begin your practice of being"
        text="Ask about private care, retreat experiences, or Reiki training when you feel ready."
        secondary="Explore Services"
        secondaryTo="/services"
      />
    </>
  );
}
