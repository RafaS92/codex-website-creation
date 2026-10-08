import mainPlaImage from "../assets/services/main-pla-img.png";
import { aboutHighlights, credentials, imagery } from "../data/content";
import { ButtonLink } from "../components/ButtonLink";
import {
  CTASection,
  Hero,
  ImageFrame,
  QuoteSection,
  SectionHeading,
} from "../components/UI";

function CredentialIcon({ name }) {
  const icons = {
    lotus: (
      <>
        <path d="M24 8c-7 7-8 16 0 25 8-9 7-18 0-25Z" />
        <path d="M23 18c-8-6-15-6-15-6 0 11 5 18 16 21M25 18c8-6 15-6 15-6 0 11-5 18-16 21M9 25c-4 2-6 5-6 5 6 8 13 9 21 3M39 25c4 2 6 5 6 5-6 8-13 9-21 3M24 33c-6 3-7 8-6 13l6-4 6 4c1-5 0-10-6-13Z" />
      </>
    ),
    hands: (
      <>
        <path d="M9 39V27l-4-5c-2-3 1-5 3-3l6 7v-8c0-3 4-3 4 0v11l-4 5v5M39 39V27l4-5c2-3-1-5-3-3l-6 7v-8c0-3-4-3-4 0v11l4 5v5" />
        <path d="M9 39h9M30 39h9" />
      </>
    ),
    spiral: (
      <path d="M35 17c-8-9-23-4-23 8 0 10 12 15 19 8 6-6 2-16-6-16-7 0-10 8-5 12 4 4 10 1 10-4 0-3-3-5-6-4-2 1-2 4 0 5" />
    ),
    meditation: (
      <>
        <circle cx="24" cy="13" r="5" />
        <path d="M18 22c3-3 9-3 12 0M17 24v9l-7 5h11l3-5 3 5h11l-7-5v-9M14 39c4 3 16 3 20 0" />
      </>
    ),
    globe: (
      <>
        <circle cx="24" cy="24" r="16" />
        <path d="M8 24h32M24 8c6 5 9 10 9 16s-3 11-9 16c-6-5-9-10-9-16s3-11 9-16Z" />
      </>
    ),
  };
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icons[name]}
    </svg>
  );
}

function CredentialsShowcase() {
  const secondaryCredentials = [
    { icon: "hands", text: credentials[1] },
    { icon: "spiral", text: credentials[2] },
    { icon: "meditation", text: credentials[3] },
    { icon: "globe", text: credentials[4] },
  ];

  return (
    <section className="section credentials-showcase">
      <div className="shell">
        <SectionHeading
          title="Experience and Credentials"
          body="Traditional wisdom, careful training, and modern therapeutic understanding meet in one personal practice."
          centered
        />
        <div className="credentials-showcase__grid">
          <article className="primary-credential">
            <p className="eyebrow">Primary Certification</p>
            <h3>
              Certified Jikiden
              <br />
              Reiki Shihan
            </h3>
            <span className="primary-credential__rule" aria-hidden="true" />
            <p className="primary-credential__location">through Kyoto, Japan</p>
            <span className="primary-credential__icon">
              <CredentialIcon name="lotus" />
            </span>
            <p className="primary-credential__description">
              Highest level of Reiki mastery in the traditional Jikiden system,
              passed down in its purest form.
            </p>
          </article>
          <div className="credential-rows">
            {secondaryCredentials.map((credential) => (
              <article className="credential-row" key={credential.text}>
                <span className="credential-row__icon">
                  <CredentialIcon name={credential.icon} />
                </span>
                <span className="credential-row__dot" aria-hidden="true">
                  •
                </span>
                <p>{credential.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutHero() {
  return (
    <section className="about-hero">
      <div className="shell about-hero__layout">
        <div className="about-hero__copy" data-aos="fade-up">
          <p className="eyebrow">Nongnapat Neuman</p>
          <h1>A Journey of Healing &amp; Discovery</h1>
          <p className="lede">
            More than 20 years of professional wellness experience have shaped a
            calm, personal approach rooted in deep listening.
          </p>
          <ul className="about-hero__highlights">
            {aboutHighlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>
        <figure className="about-hero__portrait" data-aos="fade">
          <img
            src={mainPlaImage}
            alt="Nongnapat Neuman, founder and practitioner at Studio IKI"
            loading="eager"
            decoding="async"
          />
        </figure>
      </div>
    </section>
  );
}

export function AboutPage() {
  return (
    <>
      <Hero
        centered
        backgroundImage={imagery.japaneseStudio}
        backgroundPosition="center 55%"
        eyebrow="About & Philosophy"
        title="Studio IKI"
        body="Discover Nongnapat Neuman’s journey, professional foundation, and calm, personal approach to authentic Japanese Reiki and holistic care."
      />
      <AboutHero />
      <section className="section section--tint" id="professional-foundation">
        <div className="shell split feature-row">
          <div>
            <p className="eyebrow">Professional foundation</p>
            <h2>Refining the craft</h2>
            <p>
              Nongnapat was part of the opening teams at Kamalaya Wellness
              Sanctuary and Four Seasons Resort Koh Samui, developing treatment
              protocols and training programmes while supporting therapist teams
              and guests with complex needs.
            </p>
            <p>
              She later served as Wellness Development Manager and teacher at
              Kamalaya and as an international independent teacher for Chiva-Som
              International Academy.
            </p>
          </div>
          <ImageFrame
            src={imagery.treatment}
            alt="Nongnapat offering attentive, gentle care"
          />
        </div>
      </section>
      <CredentialsShowcase />
      <QuoteSection
        quote="Healing is not about becoming someone else. It is about returning to who we truly are."
        author="Nongnapat Neuman"
        framed
      />
      <section className="section">
        <div className="shell split feature-row feature-row--image-first">
          <ImageFrame
            src={imagery.garden}
            alt="The restorative natural surroundings of Healing Garden"
          />
          <div>
            <p className="eyebrow">The philosophy</p>
            <h2>Space to slow down and listen</h2>
            <p>
              Genuine healing cannot be forced. Nongnapat’s intention is not to
              fix anyone, but to create a supportive environment where people
              can reconnect with themselves and allow healing to unfold in its
              own way.
            </p>
            <p>
              Healing Garden was created from this vision: a nature-connected
              place to breathe deeply and rediscover the quiet wisdom already
              within.
            </p>
          </div>
        </div>
      </section>
      <CTASection
        title="Begin your journey with Studio IKI"
        body="If Nongnapat’s calm, personal approach resonates with you, you are welcome to ask about Jikiden Reiki seminars or personalised holistic care."
      >
        <ButtonLink to="/contact">Contact Studio IKI</ButtonLink>
      </CTASection>
    </>
  );
}
