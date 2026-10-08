import { ButtonLink } from "./ButtonLink";

export function OutlineButtonLink({ children, ...props }) {
  return (
    <ButtonLink {...props} variant="secondary">
      {children}
    </ButtonLink>
  );
}
