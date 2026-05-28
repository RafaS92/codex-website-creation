export default function Section({ children, className = '', tone = '', id, aos = 'fade-up' }) {
  const classes = ['section', tone ? `section--${tone}` : '', className].filter(Boolean).join(' ');

  return (
    <section className={classes} id={id} data-aos={aos}>
      {children}
    </section>
  );
}
