import { Link } from "react-router-dom";
import { imagery } from "../data/content";
import { Hero } from "../components/UI";

export function TermsPage() {
  return (
    <>
      <Hero
        centered
        backgroundImage={imagery.japaneseStudio}
        backgroundPosition="center 48%"
        eyebrow="Studio IKI"
        title="Terms / Booking Policy"
      />
      <section className="section legal-page">
        <article className="shell reading-column">
          <div className="legal-placeholder">
            <h2>Content pending approval</h2>
            <p>
              Approved booking, payment, cancellation, and service terms have
              not yet been supplied. This page is reserved for the final policy
              if the confirmed booking model requires it.
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
