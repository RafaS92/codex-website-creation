import { OutlineButtonLink } from "./OutlineButtonLink";

export function CardServices({ service }) {
  return (
    <article className="card-services" data-aos="fade-up">
      <div className="card-services__media">
        <img
          className="card-services__image"
          src={service.image}
          alt={service.imageAlt}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="card-services__content">
        <h4
          className={`card-services__heading${service.centerCardTitle ? " card-services__heading--centered" : ""}`}
        >
          {service.title}
        </h4>
        <span className="card-services__ornament" aria-hidden="true" />
        <p className="card-services__description">{service.short}</p>
        <OutlineButtonLink
          className="card-services__link"
          to={`/therapies#${service.id}`}
        >
          Read More
        </OutlineButtonLink>
      </div>
    </article>
  );
}
