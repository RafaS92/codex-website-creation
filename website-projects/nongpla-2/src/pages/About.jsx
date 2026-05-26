import { useTranslation } from 'react-i18next';
import Card from '../components/Card/Card';
import SEO from '../components/SEO/SEO';
import SectionHeader from '../components/SectionHeader/SectionHeader';
import { images } from '../data/images';
import ContactCTA from '../sections/ContactCTA';

export default function About() {
  const { t, i18n } = useTranslation();
  const values = t('about.values', { returnObjects: true });

  return (
    <>
      <SEO title={`${t('about.title')} | ${t('site.name')}`} description={t('about.intro')} lang={i18n.language} />
      <section className="page-hero">
        <div className="container page-hero__grid">
          <SectionHeader eyebrow="20+ years" title={t('about.title')} body={t('about.intro')} level={1} />
          <img src={images.portrait} alt="Warm healing practice detail in natural light" />
        </div>
      </section>
      <section className="section">
        <div className="container container--narrow prose-block">
          <p>{t('about.philosophy')}</p>
        </div>
      </section>
      <section className="section section--sage">
        <div className="container">
          <SectionHeader title={t('about.valuesTitle')} />
          <div className="grid grid--five">
            {values.map((value) => (
              <Card key={value} title={value} variant="compact" />
            ))}
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
