import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PathwayCard({ item }) {
  return (
    <article className="pathway-card">
      <Link to={item.to} aria-label={`Learn more about ${item.title}`}>
        <div className="pathway-card__image">
          <img src={item.image.src} alt={item.image.alt} loading="lazy" />
        </div>
        <div className="pathway-card__content">
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          <span>
            Learn more
            <ArrowUpRight aria-hidden="true" />
          </span>
        </div>
      </Link>
    </article>
  );
}
