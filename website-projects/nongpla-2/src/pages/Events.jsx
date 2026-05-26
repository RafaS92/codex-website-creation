import { useTranslation } from 'react-i18next';
import Card from '../components/Card/Card';
import SEO from '../components/SEO/SEO';
import SectionHeader from '../components/SectionHeader/SectionHeader';
import { images } from '../data/images';
import ContactCTA from '../sections/ContactCTA';

export default function Events() {
  const { t, i18n } = useTranslation();
  const events = t('events.items', { returnObjects: true });

  return (
    <>
      <SEO title={`${t('events.title')} | ${t('site.name')}`} description={t('events.intro')} lang={i18n.language} />
      <section className="page-hero page-hero--events">
        <div className="container page-hero__grid">
          <SectionHeader title={t('events.title')} body={t('events.intro')} level={1} />
          <img src={images.events} alt={t('events.imageAlt')} />
        </div>
      </section>
      <section className="section section--sage">
        <div className="container">
          <SectionHeader title={t('events.featuredTitle')} body={t('events.note')} />
          <div className="grid grid--three events-grid">
            {events.map((event) => (
              <Card key={event.title} title={event.title} body={event.body} variant="compact" />
            ))}
          </div>
        </div>
      </section>
      <ContactCTA action={t('events.action')} />
    </>
  );
}
