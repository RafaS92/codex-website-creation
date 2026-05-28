import Button from './Button.jsx';

export default function CTASection({ title, text, primary = 'Inquire Now', secondary, secondaryTo }) {
  return (
    <section className="cta-section" data-aos="fade-up">
      <div className="cta-section__inner">
        <p className="eyebrow">Gentle next step</p>
        <h2>{title}</h2>
        <p>{text}</p>
        <div className="button-row">
          <Button to="/contact">{primary}</Button>
          {secondary && <Button to={secondaryTo} variant="secondary">{secondary}</Button>}
        </div>
      </div>
    </section>
  );
}
