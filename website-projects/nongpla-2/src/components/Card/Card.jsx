import Button from '../Button/Button';

export default function Card({ title, body, meta, link, action, children, variant = 'default' }) {
  return (
    <article className={`card card--${variant}`} data-aos="fade-up">
      {meta && <p className="card__meta">{meta}</p>}
      <h3>{title}</h3>
      {body && <p>{body}</p>}
      {children}
      {link && action && (
        <Button to={link} variant="text">
          {action}
        </Button>
      )}
    </article>
  );
}
