import Button from '../components/Button.jsx';
import SEO from '../components/SEO.jsx';
import Section from '../components/Section.jsx';

export default function NotFound() {
  return (
    <Section className="page-hero page-hero--center">
      <SEO title="Page Not Found" description="The requested page could not be found." />
      <p className="eyebrow">404</p>
      <h1>This page is not part of the path.</h1>
      <p>Return to the home page or reach out with an inquiry.</p>
      <div className="button-row">
        <Button to="/">Home</Button>
        <Button to="/contact" variant="secondary">Contact</Button>
      </div>
    </Section>
  );
}
