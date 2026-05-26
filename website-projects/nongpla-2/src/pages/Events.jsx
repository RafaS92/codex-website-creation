import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Card from '../components/Card/Card';
import SEO from '../components/SEO/SEO';
import SectionHeader from '../components/SectionHeader/SectionHeader';
import { images } from '../data/images';
import { EVENTS_QUERY, sanityClient } from '../lib/sanityClient';
import ContactCTA from '../sections/ContactCTA';

export default function Events() {
  const { t, i18n } = useTranslation();
  const [events, setEvents] = useState([]);
  const [status, setStatus] = useState('loading');

  const language = i18n.language === 'th' ? 'th' : 'en';

  const formatter = useMemo(
    () =>
      new Intl.DateTimeFormat(language === 'th' ? 'th-TH' : 'en-US', {
        dateStyle: 'medium',
        timeStyle: 'short',
      }),
    [language],
  );

  useEffect(() => {
    let active = true;

    async function loadEvents() {
      if (!sanityClient) {
        setStatus('error');
        return;
      }

      setStatus('loading');

      try {
        const results = await sanityClient.fetch(EVENTS_QUERY);

        if (active) {
          setEvents(Array.isArray(results) ? results : []);
          setStatus('ready');
        }
      } catch (error) {
        if (active) {
          setEvents([]);
          setStatus('error');
        }
      }
    }

    loadEvents();

    return () => {
      active = false;
    };
  }, []);

  const getEventTitle = (event) => (language === 'th' ? event.titleTh : event.titleEn);
  const getEventDescription = (event) => (language === 'th' ? event.descriptionTh : event.descriptionEn);

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
          {status === 'loading' && <p className="events-status">{t('events.loading')}</p>}
          {status === 'error' && <p className="events-status events-status--error">{t('events.error')}</p>}
          {status === 'ready' && events.length === 0 && <p className="events-status">{t('events.empty')}</p>}
          {status === 'ready' && events.length > 0 && (
            <div className="grid grid--three events-grid">
              {events.map((event) => (
                <Card
                  key={event._id}
                  title={getEventTitle(event)}
                  body={getEventDescription(event)}
                  meta={event.startsAt ? formatter.format(new Date(event.startsAt)) : null}
                  variant="compact"
                />
              ))}
            </div>
          )}
        </div>
      </section>
      <ContactCTA action={t('events.action')} />
    </>
  );
}
