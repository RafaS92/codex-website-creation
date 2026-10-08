import { Link } from "react-router-dom";
import { faqGroups, imagery } from "../data/content";
import mainPlaImage from "../assets/services/main-pla-img.png";
import { OutlineButtonLink } from "../components/OutlineButtonLink";
import { HomeHero } from "../components/HomeHero";
import { ServicesGrid } from "../components/ServicesGrid";
import {
  EmptyState,
  FAQItem,
  ImageFrame,
  QuoteSection,
  SectionHeading,
} from "../components/UI";

export function HomePage() {
  return (
    <>
      <HomeHero />


      <section className="section home-about">
        <div className="shell home-about__layout">
          <ImageFrame
            src={mainPlaImage}
            alt="Nongnapat Neuman, founder and practitioner at Studio IKI"
            className="home-about__portrait"
          />
          <div className="home-about__copy" data-aos="fade-up">
            <p className="eyebrow">Nongnapat Neuman</p>
            <h2>A Journey of Healing</h2>
            <p className="lede">
              More than 20 years of professional wellness experience have
              shaped a calm, personal approach rooted in deep listening.
            </p>
            <p className="home-about__bio">
              Known as Pla, Nongnapat is the founder and practitioner behind
              Studio IKI. She brings warmth, calm attention, and more than two
              decades of wellness experience to every seminar and therapy
              session.
            </p>
            <OutlineButtonLink to="/about">
              Read Full Story
            </OutlineButtonLink>
          </div>
        </div>
      </section>

       <section className="section">
        <div className="shell">
          <SectionHeading
            title="Holistic Therapies"
            body="Four gentle pathways, offered with personal attention and respect for each person’s needs."
            centered
          />
          <ServicesGrid />
        </div>
      </section>

      <section className="section section--tint">
        <div className="shell split feature-row">
          <div data-aos="fade-up">
            <p className="eyebrow">Primary offering</p>
            <h2>Jikiden Reiki Seminars</h2>
            <p>
              Learn the authentic teachings of Jikiden Reiki through the
              official curriculum of the Jikiden Reiki Institute in Kyoto, with
              hands-on practice and respect for its Japanese roots.
            </p>
            <OutlineButtonLink to="/jikiden-reiki-seminar">
              Explore the Seminar
            </OutlineButtonLink>
          </div>
          <ImageFrame
            src={imagery.seminar}
            alt="A quiet setting prepared for traditional Reiki learning"
          />
        </div>
      </section>

       <QuoteSection
        quote="Healing is not about becoming someone else. It is about returning to who we truly are."
        author="Nongnapat Neuman"
        variant="white"
        framed
      />

      <section className="section section--flush-top">
        <div className="shell garden-panel">
          <SectionHeading
            eyebrow="Chiang Dao, Thailand"
            title="Our Location"
            body="A quiet nature sanctuary created for slowing down, reconnecting, and allowing the body’s natural intelligence to be heard."
            centered
          />
          <ImageFrame
            src={imagery.garden}
            alt="Healing Garden surrounded by the landscape of Chiang Dao"
          />
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            title="Upcoming Gatherings"
            body="Seminars and events will appear here when their details are confirmed."
          />
          <EmptyState
            title="New dates are being prepared"
            body="You can still share your interest in a seminar or future gathering."
            action={
              <OutlineButtonLink to="/contact">
                Register Your Interest
              </OutlineButtonLink>
            }
          />
        </div>
      </section>

      <section className="section section--tint">
        <div className="shell narrow">
          <SectionHeading title="Frequently Asked Questions" centered />
          {faqGroups[0].items.slice(0, 2).map(([q, a]) => (
            <FAQItem key={q} question={q} answer={a} />
          ))}
          <div className="center-link">
            <Link to="/faq">Read Full FAQ</Link>
          </div>
        </div>
      </section>

    </>
  );
}
