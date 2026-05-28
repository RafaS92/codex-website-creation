import Button from '../components/Button.jsx';
import CTASection from '../components/CTASection.jsx';
import FeatureCard from '../components/FeatureCard.jsx';
import ImagePanel from '../components/ImagePanel.jsx';
import SEO from '../components/SEO.jsx';
import Section from '../components/Section.jsx';
import { images } from '../data/siteData.js';

const trainingPath = [
  {
    title: 'Reiki Level I: Shoden',
    text: 'Foundational practice, self-care, energetic awareness, and the beginning of hands-on Reiki study.',
  },
  {
    title: 'Reiki Level II: Okuden',
    text: 'A deeper level for students ready to expand their practice, symbols, and applied understanding.',
  },
  {
    title: 'Reiki Master: Shinpiden',
    text: 'Advanced study for committed practitioners seeking a mature and grounded path of Reiki integration.',
  },
];

export default function ReikiTraining() {
  return (
    <>
      <SEO title="Reiki Training" description="Reiki training and integrative healing workshops with Nongnapat Neuman in Chiang Dao." />

      <section className="reiki-hero">
        <img src={images.reikiMist.src} alt={images.reikiMist.alt} loading="eager" />
        <div data-aos="fade-up">
          <p className="eyebrow">Reiki training</p>
          <h1>The path of Reiki</h1>
          <p>A grounded learning path for students and practitioners interested in authentic Reiki practice, lineage, and integration.</p>
          <div className="button-row">
            <Button href="#training">Explore Curriculum</Button>
            <Button href="#lineage" variant="light">Our Lineage</Button>
          </div>
        </div>
      </section>

      <Section id="lineage" tone="stone" className="split-section">
        <ImagePanel image={images.portrait} />
        <div className="split-section__copy">
          <p className="eyebrow">Grounded in tradition</p>
          <h2>Reiki taught with clarity, respect, and lived experience.</h2>
          <p>Nongnapat's wider healing practice has developed over more than 20 years, bringing Reiki into conversation with mindfulness, somatic awareness, energy work, and nature-based healing.</p>
        </div>
      </Section>

      <Section className="values-section">
        <div className="feature-grid">
          <FeatureCard title="Experienced Practice" text="A mature teaching presence shaped by years of holistic healing work." />
          <FeatureCard title="Traditional Usui Lineage" text="A respectful training path rooted in Reiki foundations and practical embodiment." />
          <FeatureCard title="Holistic Integration" text="Support for applying Reiki within real care, self-practice, and grounded daily life." />
        </div>
      </Section>

      <Section id="training" className="training-section">
        <div className="section-heading">
          <p className="eyebrow">Training path</p>
          <h2>Learn at a pace that supports depth.</h2>
        </div>
        <div className="training-grid">
          {trainingPath.map((item) => (
            <FeatureCard key={item.title} title={item.title} text={item.text} />
          ))}
        </div>
        <article className="advanced-card">
          <div>
            <p className="eyebrow">Advanced workshops</p>
            <h3>Integrative healing workshops</h3>
            <p>For practitioners and students interested in bridging Reiki with somatic therapies, sound, mindfulness, and nature-based practice.</p>
          </div>
          <ImagePanel image={images.reiki} />
        </article>
      </Section>

      <CTASection
        title="Begin your Reiki journey"
        text="Ask about training levels, prerequisites, dates, certification details, and whether the path is aligned for you."
        primary="Ask About Reiki Training"
      />
    </>
  );
}
