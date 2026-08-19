import { useId, useState } from "react";
import { Link } from "react-router-dom";

export function ButtonLink({ to, variant = "primary", children }) {
  return (
    <Link className={`button button--${variant}`} to={to}>
      {children}
    </Link>
  );
}

export function Hero({
  eyebrow,
  title,
  body,
  image,
  imageAlt = "",
  actions,
  centered = false,
}) {
  return (
    <section className={`hero section ${centered ? "hero--centered" : ""}`}>
      <div className={`shell ${image ? "split" : ""}`}>
        <div className="hero__copy" data-aos="fade-up">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1>{title}</h1>
          {body && <p className="lede">{body}</p>}
          {actions && <div className="actions">{actions}</div>}
        </div>
        {image && <ImageFrame src={image} alt={imageAlt} eager />}
      </div>
    </section>
  );
}

export function ImageFrame({ src, alt, eager = false, className = "" }) {
  return (
    <figure className={`image-frame ${className}`} data-aos="fade">
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
      />
    </figure>
  );
}

export function SectionHeading({ eyebrow, title, body, centered = false }) {
  return (
    <header
      className={`section-heading ${centered ? "section-heading--centered" : ""}`}
      data-aos="fade-up"
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {body && <p>{body}</p>}
    </header>
  );
}

export function ServiceCard({ service }) {
  return (
    <article className="card service-card" data-aos="fade-up">
      <h3>{service.title}</h3>
      <p>{service.short}</p>
    </article>
  );
}

export function FAQItem({ question, answer }) {
  const id = useId();
  const [open, setOpen] = useState(false);
  return (
    <article className={`faq-item ${open ? "is-open" : ""}`}>
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((value) => !value)}
        >
          <span>{question}</span>
          <span aria-hidden="true">{open ? "−" : "+"}</span>
        </button>
      </h3>
      <div id={id} hidden={!open}>
        <p>{answer}</p>
      </div>
    </article>
  );
}

export function CTASection({ title, body, children }) {
  return (
    <section className="section section--tint cta-section">
      <div className="shell narrow" data-aos="fade-up">
        <h2>{title}</h2>
        {body && <p>{body}</p>}
        <div className="actions actions--center">{children}</div>
      </div>
    </section>
  );
}

export function EmptyState({ title, body, action }) {
  return (
    <div className="empty-state">
      <h3>{title}</h3>
      <p>{body}</p>
      {action}
    </div>
  );
}
