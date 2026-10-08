import { ButtonLink } from "../components/ButtonLink";
import { imagery } from "../data/content";
import { Hero } from "../components/UI";

export function NotFoundPage() {
  return (
    <Hero
      centered
      backgroundImage={imagery.japaneseStudio}
      backgroundPosition="center 55%"
      eyebrow="404"
      title="Page not found"
      body="The page you are looking for may have moved."
      actions={<ButtonLink to="/">Return Home</ButtonLink>}
    />
  );
}
