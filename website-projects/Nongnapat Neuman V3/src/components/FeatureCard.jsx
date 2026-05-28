export default function FeatureCard({ title, text, eyebrow }) {
  return (
    <article className="feature-card">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}
