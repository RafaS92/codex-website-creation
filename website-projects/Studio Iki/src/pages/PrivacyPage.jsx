import { Link } from "react-router-dom";
import { imagery } from "../data/content";
import { Hero } from "../components/UI";

export function PrivacyPage() {
  return (
    <>
      <Hero
        centered
        backgroundImage={imagery.japaneseStudio}
        backgroundPosition="center 55%"
        eyebrow="Studio IKI"
        title="Privacy Policy"
      />
      <section className="section legal-page">
        <article className="shell reading-column">
          <div className="legal-placeholder">
            <h2>Content pending approval</h2>
            <p>
              Approved privacy policy content has not yet been supplied. This
              page is reserved for the final policy.
            </p>
            <p>
              For questions in the meantime, please{" "}
              <Link to="/contact">contact Studio IKI</Link>.
            </p>
          </div>
        </article>
      </section>
    </>
  );
}
