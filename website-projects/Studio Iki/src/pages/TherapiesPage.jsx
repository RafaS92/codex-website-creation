import { imagery, services } from "../data/content";
import { ButtonLink } from "../components/ButtonLink";
import { OutlineButtonLink } from "../components/OutlineButtonLink";
import { CTASection, Hero, ImageFrame } from "../components/UI";

const therapyContent = {
  "jikiden-reiki": {
    title: "Jikiden Reiki",
    details: [
      {
        body: "A traditional Japanese hands-on healing practice that supports the body’s natural ability to restore balance, relaxation, and well-being.",
      },
      {
        title: "Who it’s for",
        body: "Anyone seeking self-care, stress relief, emotional balance, or a complementary approach to support their health and healing journey.",
      },
      {
        title: "How it helps",
        body: "Helps reduce stress, supports physical and emotional well-being, encourages deep relaxation, and promotes the body’s natural healing response.",
      },
      {
        title: "How it’s delivered",
        body: "A gentle, hands-on treatment with the client fully clothed, in a calm and peaceful environment.",
      },
    ],
    quote:
      "A gentle practice that supports balance, relaxation, and natural healing.",
  },
  bcst: {
    title: "Biodynamic CranioSacral Therapy (BCST)",
    details: [
      {
        body: "A gentle, non-manipulative therapy that listens deeply to the body’s natural rhythms and supports the nervous system in finding balance. Originated in British Osteopathy.",
      },
      {
        title: "Who it’s for",
        body: "People experiencing stress, anxiety, trauma, chronic pain, fatigue, headaches, sleep disturbances, or those simply seeking deep restoration.",
      },
      {
        title: "How it helps",
        body: "Supports nervous system regulation, releases held tension, improves resilience, and encourages the body’s innate capacity to heal.",
      },
      {
        title: "How it’s delivered",
        body: "Using light, still touch while the client rests fully clothed on a treatment table.",
      },
    ],
    quote:
      "Gentle, still touch that supports nervous-system balance and deep restoration.",
  },
  "chi-nei-tsang": {
    title: "Chi Nei Tsang",
    details: [
      {
        body: "A Taoist abdominal therapy that focuses on the abdomen to improve the flow of energy, circulation, and organ function.",
      },
      {
        title: "Who it’s for",
        body: "Those experiencing digestive discomfort, emotional tension, stress held in the body, or anyone wishing to reconnect with their centre.",
      },
      {
        title: "How it helps",
        body: "Releases tension in the abdomen, supports healthy digestion, improves circulation, and helps process stored emotional stress.",
      },
      {
        title: "How it’s delivered",
        body: "A gentle abdominal massage using mindful touch and breathing techniques, tailored to each individual.",
      },
    ],
    quote:
      "Mindful abdominal care that supports digestion, circulation, and connection to your centre.",
  },
  "crystal-energy": {
    title: "Crystal Energy Healing",
    details: [
      {
        body: "A relaxing energy healing session that combines carefully selected crystals with gentle touch to support harmony of body, mind, and spirit.",
      },
      {
        title: "Who it’s for",
        body: "Anyone seeking relaxation, emotional balance, energetic support, or a quiet space for reflection and renewal.",
      },
      {
        title: "How it helps",
        body: "Promotes relaxation, restores energetic balance, encourages clarity, and supports overall well-being.",
      },
      {
        title: "How it’s delivered",
        body: "Crystals are placed on and around the body while gentle hands-on or hands-off energy healing is offered in a peaceful setting.",
      },
    ],
    quote:
      "A peaceful energy-healing practice that supports relaxation, clarity, and balance.",
  },
};

function TherapyFeature({ service, index }) {
  const content = therapyContent[service.id];

  return (
    <section
      className="section service-detail-section jikiden-feature"
      id={service.id}
    >
      <div className="shell jikiden-feature__stage">
        <div className="jikiden-feature__card">
          <div className="jikiden-feature__copy" data-aos="fade-up">
            <p className="jikiden-feature__number">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h2>{content.title}</h2>
            <span className="jikiden-feature__rule" aria-hidden="true" />
            <div className="jikiden-feature__details">
              {content.details.map((detail) => (
                <div
                  className="jikiden-feature__detail"
                  key={detail.title ?? "description"}
                >
                  {detail.title && <h3>{detail.title}</h3>}
                  <p>{detail.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <ImageFrame
          className="jikiden-feature__image"
          src={service.image}
          alt={service.imageAlt}
          eager={index === 0}
        />
        <blockquote className="jikiden-feature__quote">
          <p>{content.quote}</p>
        </blockquote>
      </div>
    </section>
  );
}

export function TherapiesPage() {
  return (
    <>
      <Hero
        centered
        backgroundImage={imagery.japaneseStudio}
        backgroundPosition="center 42%"
        eyebrow="Personalised holistic care"
        title="Therapies"
        body="Gentle, attentive sessions that create the conditions for relaxation, reconnection, and restoration."
      />
      <section className="section">
        <div className="shell split feature-row">
          <div data-aos="fade-up">
            <p className="eyebrow">Personalised holistic therapies</p>
            <h2>Care shaped around you</h2>
            <p>
              Each session offers a calm, supportive space to slow down,
              release tension, and reconnect with your natural sense of
              balance. Together, we choose the approach that best reflects
              what your body and well-being need in the moment.
            </p>
            <ButtonLink to="/contact">Inquire About a Therapy</ButtonLink>
          </div>
          <ImageFrame
            src={imagery.therapy}
            alt="A calm, personalised therapy session at Studio IKI"
            eager
          />
        </div>
      </section>
      {services.map((service, index) => (
        <TherapyFeature service={service} index={index} key={service.id} />
      ))}
      <CTASection
        title="Begin Your Healing Journey"
        body="Whether you wish to learn Jikiden Reiki or receive personalised therapeutic support, you are welcome to begin with an inquiry."
      >
        <ButtonLink to="/contact">Inquire About Seminars</ButtonLink>
        <OutlineButtonLink to="/contact">
          Book a Therapy Session
        </OutlineButtonLink>
      </CTASection>
    </>
  );
}
