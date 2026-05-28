import Button from '../components/Button.jsx';
import ContactForm from '../components/ContactForm.jsx';
import FeatureCard from '../components/FeatureCard.jsx';
import ImagePanel from '../components/ImagePanel.jsx';
import SEO from '../components/SEO.jsx';
import Section from '../components/Section.jsx';
import { images } from '../data/siteData.js';

export default function Services() {
  return (
    <>
      <SEO title="Services" description="Healing sessions, energy work, somatic therapies, sound healing, mindfulness, and nature-based care with Nongnapat Neuman." />

      <Section className="page-hero page-hero--center">
        <p className="eyebrow">Private care</p>
        <h1>Healing sessions and somatic therapies</h1>
        <p>In-person sessions for people seeking deep rest, grounding, balance, and reconnection.</p>
      </Section>

      <Section className="service-detail">
        <ImagePanel image={images.hands} />
        <div>
          <p className="eyebrow">Energy work</p>
          <h2>Subtle support for energetic wellbeing.</h2>
          <p>Energy work can support people who feel depleted, overwhelmed, or disconnected from their inner steadiness. The tone is calm, clear, and grounded.</p>
          <Button to="/reiki-training" variant="text">Learn more about Reiki</Button>
        </div>
      </Section>

      <Section tone="stone" className="service-detail service-detail--reverse">
        <div>
          <p className="eyebrow">Somatic therapies</p>
          <h2>Return to the body gently.</h2>
          <p>Somatic work supports awareness, regulation, and reconnection through embodied practices that meet the visitor where they are.</p>
          <div className="mini-grid">
            <FeatureCard title="The Focus" text="Grounding, nervous system steadiness, emotional reconnection, and safe presence." />
            <FeatureCard title="The Pace" text="Unhurried, inquiry-led, and responsive to what is actually needed." />
          </div>
        </div>
        <ImagePanel image={images.somatic} />
      </Section>

      <Section className="service-detail">
        <div>
          <p className="eyebrow">Sound healing</p>
          <h2>Vibrational restoration in a quiet setting.</h2>
          <p>Sound, stillness, and mindful attention create a restorative environment for people seeking rest and energetic balance.</p>
        </div>
        <ImagePanel image={images.sound} />
      </Section>

      <Section className="inquiry-band">
        <div>
          <p className="eyebrow">Ask about a private session</p>
          <h2>Share what you are seeking.</h2>
          <p>The first step is a simple inquiry. Nongnapat can help clarify which service or experience may be most aligned.</p>
        </div>
        <ContactForm compact />
      </Section>
    </>
  );
}
