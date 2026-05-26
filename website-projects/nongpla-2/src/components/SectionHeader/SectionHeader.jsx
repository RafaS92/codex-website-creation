export default function SectionHeader({ eyebrow, title, body, align = 'left', level = 2 }) {
  const Heading = `h${level}`;

  return (
    <div className={`section-header section-header--${align}`} data-aos="fade-up">
      {eyebrow && <p className="section-header__eyebrow">{eyebrow}</p>}
      <Heading>{title}</Heading>
      {body && <p>{body}</p>}
    </div>
  );
}
