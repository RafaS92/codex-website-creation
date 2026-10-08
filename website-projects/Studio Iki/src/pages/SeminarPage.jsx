import { imagery } from "../data/content";
import { ButtonLink } from "../components/ButtonLink";
import { CTASection, Hero, ImageFrame } from "../components/UI";

const seminarAudiences = [
  {
    icon: "self-care",
    title: "For self-care",
    body: "For people seeking a grounded practice they can bring into everyday life.",
  },
  {
    icon: "family",
    title: "For family support",
    body: "For those who want gentle practical skills to support the people close to them.",
  },
  {
    icon: "practitioners",
    title: "For practitioners",
    body: "For wellness and healthcare professionals interested in authentic Japanese Reiki.",
  },
];

function AudienceIcon({ name }) {
  const icons = {
    "self-care": (
      <>
        <circle cx="24" cy="15" r="5" />
        <path d="M24 4v4M13 9l3 3M35 9l-3 3M12 23c4 0 7 2 9 5l3 4 3-4c2-3 5-5 9-5M8 27l8 9c2 2 5 4 8 6 3-2 6-4 8-6l8-9" />
      </>
    ),
    family: (
      <>
        <circle cx="17" cy="22" r="6" />
        <circle cx="32" cy="22" r="6" />
        <path d="M7 41v-5c0-5 4-8 10-8s10 3 10 8v5M23 41v-5c0-5 4-8 10-8s9 3 9 8v5M24 15c-6-4-5-10 0-10 5 0 6 6 0 10Z" />
      </>
    ),
    practitioners: (
      <>
        <circle cx="24" cy="14" r="6" />
        <path d="M24 3v4M13 7l3 3M35 7l-3 3M10 19h5M33 19h5M8 40V28c0-3 4-3 4 0v5l5-6c2-2 5 0 3 3l-5 7v5M40 40V28c0-3-4-3-4 0v5l-5-6c-2-2-5 0-3 3l5 7v5" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icons[name]}
    </svg>
  );
}

export function SeminarPage() {
  return (
    <>
      <Hero
        centered
        backgroundImage={imagery.japaneseStudio}
        backgroundPosition="center 48%"
        eyebrow="Authentic Japanese Reiki Training"
        title="Jikiden Reiki Seminar"
        body="Learn the official Jikiden Reiki curriculum through hands-on practice and Japanese tradition."
      />
      <section className="section">
        <div className="shell split feature-row">
          <div data-aos="fade-up">
            <p className="eyebrow">Traditional Japanese Reiki education</p>
            <h2>Learning with respect for its origins</h2>
            <p>
              Learn a simple, practical form of Reiki preserved through its
              Japanese lineage and taught with respect for its origins.
            </p>
            <ButtonLink to="/contact">Inquire About a Seminar</ButtonLink>
          </div>
          <ImageFrame
            src={imagery.seminar}
            alt="A peaceful environment for learning Jikiden Reiki"
            eager
          />
        </div>
      </section>
      <section className="section section--tint">
        <div className="shell split feature-row">
          <div>
            <p className="eyebrow">Directly passed down Reiki</p>
            <h2>Close to its original Japanese form</h2>
            <p>
              Jikiden Reiki follows the lineage of Chujiro Hayashi Sensei and
              the Yamaguchi family in Kyoto. It emphasizes simplicity, hands-on
              practice, and trust in the body’s natural ability to restore
              balance.
            </p>
            <p>
              The seminar follows the official curriculum of the Jikiden Reiki
              Institute in Kyoto, Japan.
            </p>
          </div>
          <ImageFrame
            src={imagery.seminarPractice}
            alt="Hands-on learning in a calm seminar setting"
          />
        </div>
      </section>
      <section className="section seminar-audience">
        <svg
          className="seminar-audience__botanical"
          aria-hidden="true"
          viewBox="0 0 180 300"
          fill="none"
        >
          <path d="M5 295C35 215 53 143 120 48" />
          <path d="M42 219c-36-3-46-30-38-55 27 8 42 25 38 55ZM69 166c-25-16-24-43-8-60 22 17 27 36 8 60ZM99 112c-13-22-4-45 15-56 13 24 9 42-15 56ZM35 242c-2-28 15-44 39-45 0 28-13 43-39 45ZM61 190c4-27 22-39 46-34-5 26-20 38-46 34Z" />
        </svg>
        <div className="shell seminar-audience__inner">
          <header className="seminar-audience__heading">
            <div className="seminar-audience__rosette" aria-hidden="true">
              <span />
            </div>
            <h2>For Whom</h2>
            <div className="ornamental-rule" aria-hidden="true">
              <span />
            </div>
            <p>
              A practical learning path for personal care, family support, and
              responsible professional integration.
            </p>
          </header>
          <div className="seminar-audience__grid">
            {seminarAudiences.map((audience) => (
              <article className="seminar-audience__card" key={audience.title}>
                <div className="seminar-audience__icon">
                  <AudienceIcon name={audience.icon} />
                </div>
                <h3>{audience.title}</h3>
                <div className="ornamental-rule ornamental-rule--small" aria-hidden="true">
                  <span />
                </div>
                <p>{audience.body}</p>
                <svg
                  className="seminar-audience__wave"
                  aria-hidden="true"
                  viewBox="0 0 400 70"
                  preserveAspectRatio="none"
                >
                  <path d="M0 22C78 0 125 68 217 43c70-20 110-55 183-39v66H0Z" />
                </svg>
              </article>
            ))}
          </div>
        </div>
        <svg
          className="seminar-audience__contours"
          aria-hidden="true"
          viewBox="0 0 220 280"
          fill="none"
        >
          <path d="M216 6C123 45 171 99 86 130S37 221 5 275" />
          <path d="M218 24c-74 33-42 83-119 117s-45 88-77 135" />
          <path d="M220 43c-57 27-26 74-102 111s-43 78-70 122" />
          <path d="M220 64c-45 22-16 65-86 101s-39 69-61 111" />
          <path d="M220 87c-34 16-8 51-69 87s-35 63-52 101" />
        </svg>
      </section>
      <section className="section seminar-curriculum">
        <div className="shell split feature-row">
          <div>
            <p className="eyebrow">The curriculum</p>
            <h2>Learn through practice and context</h2>
            <p>
              Teaching includes hands-on practice, the history and philosophy of
              Jikiden Reiki, and ways to embody its simplicity in daily life.
            </p>
            <p>
              Exact dates, duration, prerequisites, language, price, capacity,
              inclusions, and certification details are confirmed individually
              before registration.
            </p>
          </div>
          <div className="card quiet-card">
            <h3>Learning environment</h3>
            <p>
              Healing Garden offers a warm, supportive setting where students
              can learn without hurry and experience care as they practise.
            </p>
            <h3>Official lineage</h3>
            <p>
              Instruction is led by Nongnapat Neuman, a certified Jikiden Reiki
              Shihan through Kyoto, Japan.
            </p>
          </div>
        </div>
      </section>
      <CTASection
        title="Learn Jikiden Reiki at Healing Garden"
        body="Share your interest and receive confirmed seminar details directly."
      >
        <ButtonLink to="/contact">Join a Jikiden Reiki Seminar</ButtonLink>
      </CTASection>
    </>
  );
}
