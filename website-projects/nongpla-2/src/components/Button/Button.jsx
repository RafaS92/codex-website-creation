import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  type = 'button',
  onClick,
  ariaLabel,
  className = '',
}) {
  const classes = `button button--${variant} ${className}`.trim();

  if (to) {
    return (
      <Link className={classes} to={to} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a className={classes} href={href} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type={type} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
