import { ButtonLink } from "../components/ButtonLink";
import { imagery } from "../data/content";
import { EmptyState, Hero, SectionHeading } from "../components/UI";

export function EventsPage() {
  return (
    <>
      <Hero
        centered
        backgroundImage={imagery.japaneseStudio}
        backgroundPosition="center 45%"
        eyebrow="At Healing Garden"
        title="Gatherings & Events"
        body="Upcoming seminars and gatherings will be shared here once dates and practical details are confirmed."
      />
      <section className="section">
        <div className="shell">
          <SectionHeading
            title="Upcoming Gatherings"
            body="Studio IKI’s event calendar is currently being prepared."
          />
          <EmptyState
            title="There are no published events yet"
            body="Register your interest and ask about future Jikiden Reiki seminars or gatherings."
            action={
              <ButtonLink to="/contact">Register Your Interest</ButtonLink>
            }
          />
        </div>
      </section>
    </>
  );
}
