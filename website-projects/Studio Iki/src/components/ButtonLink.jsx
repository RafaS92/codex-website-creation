import { Link } from "react-router-dom";

export function ButtonLink({
  to,
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  const classes = ["button", `button--${variant}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <Link className={classes} to={to} {...props}>
      {children}
    </Link>
  );
}
