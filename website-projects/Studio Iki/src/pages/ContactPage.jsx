import { imagery } from "../data/content";
import { Hero, ImageFrame } from "../components/UI";

export function ContactPage() {
  return (
    <>
      <Hero
        centered
        backgroundImage={imagery.japaneseStudio}
        backgroundPosition="center 55%"
        eyebrow="Contact & inquiry"
        title="Begin the Dialogue"
        body="Whether you are asking about a therapy, an upcoming seminar, or simply wishing to connect, contact Nongnapat directly."
      />
      <section className="section contact-page">
        <div className="shell reading-column contact-intro" data-aos="fade-up">
          <div className="contact-card card">
            <ImageFrame src={imagery.portrait} alt="Nongnapat Neuman" />
            <div>
              <h2>Nongnapat Neuman</h2>
              <p>Founder, teacher, and practitioner</p>
              <a href="mailto:nongnapatr@gmail.com">nongnapatr@gmail.com</a>
              <p className="pending">Phone details pending</p>
              <p className="pending">
                Complete location details pending · Chiang Dao, Thailand
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
