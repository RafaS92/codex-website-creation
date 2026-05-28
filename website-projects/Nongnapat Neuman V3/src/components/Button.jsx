import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  href,
  type = 'button',
  variant = 'primary',
  className = '',
  ariaLabel,
  onClick,
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
    <button className={classes} type={type} aria-label={ariaLabel} onClick={onClick}>
      {children}
    </button>
  );
}
