import { useId, useState } from "react";

export function Hero({
  eyebrow,
  title,
  body,
  backgroundImage,
  backgroundPosition = "center",
  image,
  imageAlt = "",
  actions,
  centered = false,
  className = "",
}) {
  const classes = [
    "hero",
    "section",
    centered && "hero--centered",
    backgroundImage && "hero--image",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section
      className={classes}
      style={
        backgroundImage
          ? {
              "--hero-image": `url("${backgroundImage}")`,
              "--hero-position": backgroundPosition,
            }
          : undefined
      }
    >
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
      {title && <h2>{title}</h2>}
      {body && <p>{body}</p>}
    </header>
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

export function QuoteSection({
  quote,
  author,
  framed = false,
  variant = "tinted",
}) {
  const backgroundVariant = variant === "white" ? "white" : "tinted";

  return (
    <blockquote
      className={`philosophy-quote philosophy-quote--${backgroundVariant}${framed ? " philosophy-quote--framed" : ""}`}
    >
      <p>“{quote}”</p>
      {author && (
        <>
          <span className="philosophy-quote__rule" aria-hidden="true" />
          <cite>— {author}</cite>
        </>
      )}
    </blockquote>
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
