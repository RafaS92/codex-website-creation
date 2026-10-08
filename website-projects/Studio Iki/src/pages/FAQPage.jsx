import { faqGroups, imagery } from "../data/content";
import { ButtonLink } from "../components/ButtonLink";
import { CTASection, FAQItem, Hero } from "../components/UI";

function MedicalNote() {
  return (
    <aside className="medical-note">
      <h2>Complementary care</h2>
      <p>
        Studio IKI therapies support well-being and relaxation. They do not
        diagnose conditions, promise a cure, or replace qualified medical advice
        or treatment.
      </p>
    </aside>
  );
}

export function FAQPage() {
  return (
    <>
      <Hero
        centered
        backgroundImage={imagery.japaneseStudio}
        backgroundPosition="center 45%"
        title="Frequently Asked Questions"
        body="Clear starting points for learning, receiving care, and planning a visit."
      />
      <section className="section section--tint">
        <div className="shell narrow faq-groups">
          {faqGroups.map((group) => (
            <section key={group.title}>
              <h2>{group.title}</h2>
              {group.items.map(([q, a]) => (
                <FAQItem key={q} question={q} answer={a} />
              ))}
            </section>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="shell narrow">
          <MedicalNote />
        </div>
      </section>
      <CTASection
        title="Still have questions?"
        body="You are welcome to ask about a seminar, therapy, or practical detail."
      >
        <ButtonLink to="/contact">Contact Studio IKI</ButtonLink>
      </CTASection>
    </>
  );
}
