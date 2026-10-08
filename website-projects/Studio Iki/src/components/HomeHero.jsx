import { imagery } from "../data/content";

export function HomeHero() {
  return (
    <section className="home-hero" aria-labelledby="home-hero-title">
      <img
        className="home-hero__media"
        src={imagery.treatment}
        alt="Nongnapat offering a gentle Reiki treatment"
        loading="eager"
        decoding="async"
      />
      <div className="home-hero__shade" aria-hidden="true" />
      <div className="home-hero__content" data-aos="fade-up">
        <h1 id="home-hero-title">Studio IKI</h1>
      </div>
      <div className="home-hero__dots" aria-hidden="true">
        <span />
        <span />
        <span className="is-active" />
      </div>
    </section>
  );
}
