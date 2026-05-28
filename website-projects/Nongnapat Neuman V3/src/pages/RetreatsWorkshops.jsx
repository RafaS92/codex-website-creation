import Button from '../components/Button.jsx';
import CTASection from '../components/CTASection.jsx';
import FeatureCard from '../components/FeatureCard.jsx';
import Gallery from '../components/Gallery.jsx';
import ImagePanel from '../components/ImagePanel.jsx';
import SEO from '../components/SEO.jsx';
import Section from '../components/Section.jsx';
import { images } from '../data/siteData.js';

const galleryItems = [images.group, images.hike, images.altar];

export default function RetreatsWorkshops() {
  return (
    <>
      <SEO title="Retreats & Workshops" description="Integrative workshops and immersive retreats in Chiang Dao with Nongnapat Neuman." />

      <Section className="page-hero page-hero--center retreats-hero">
        <p className="eyebrow">Retreats & workshops</p>
        <h1>Deepen your connection</h1>
        <p>Immersive experiences shaped by nature, mindfulness, somatic practice, sound, and integrative healing.</p>
        <ImagePanel image={images.retreat} />
      </Section>

      <Section className="statement-section">
        <p className="eyebrow">Chiang Dao immersions</p>
        <h2>Integrative workshops and immersive retreats in Northern Thailand.</h2>
        <p>Designed for wellness travelers, retreat guests, and conscious individuals who want to slow down, reconnect, and learn in a grounded environment.</p>
      </Section>

      <Section tone="stone" className="retreat-features">
        <div className="feature-grid">
          <FeatureCard title="Group Harmony" text="A clear container for shared practice, reflection, and support." />
          <FeatureCard title="Nature-Based Healing" text="The landscape becomes part of the experience through slow rhythm, space, and presence." />
          <FeatureCard title="Skillful Facilitation" text="Experienced guidance that balances structure, intuition, and professional care." />
        </div>
        <div className="split-section split-section--compact">
          <div>
            <p className="eyebrow">Workshop rhythm</p>
            <h2>Held with care, not pressure.</h2>
            <p>Programs can include mindfulness, somatic exploration, sound, Reiki, reflective practice, and time in nature depending on the offering.</p>
            <Button to="/contact" variant="secondary">Ask About Retreats</Button>
          </div>
          <ImagePanel image={images.facilitation} />
        </div>
      </Section>

      <Section className="gallery-section">
        <Gallery items={galleryItems} />
      </Section>

      <CTASection
        title="Ready to embark on a journey of return?"
        text="Ask about upcoming retreats, workshops, custom group experiences, or private retreat support."
        primary="Ask About Retreats"
      />
    </>
  );
}
