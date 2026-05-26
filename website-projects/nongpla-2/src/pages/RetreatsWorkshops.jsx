import { useTranslation } from 'react-i18next';
import Card from '../components/Card/Card';
import SEO from '../components/SEO/SEO';
import SectionHeader from '../components/SectionHeader/SectionHeader';
import { images } from '../data/images';
import ContactCTA from '../sections/ContactCTA';

export default function RetreatsWorkshops() {
  const { t, i18n } = useTranslation();
  const formats = t('retreats.formats', { returnObjects: true });

  return (
    <>
      <SEO title={`${t('retreats.title')} | ${t('site.name')}`} description={t('retreats.intro')} lang={i18n.language} />
      <section className="page-hero">
        <div className="container page-hero__grid">
          <SectionHeader title={t('retreats.title')} body={t('retreats.intro')} level={1} />
          <img src={images.setting} alt="Forest setting for nature-based healing" />
        </div>
      </section>
      <section className="section section--sage">
        <div className="container">
          <SectionHeader title={t('retreats.formatsTitle')} body={t('retreats.note')} />
          <div className="grid grid--three">
            {formats.map((format) => (
              <Card key={format} title={format} variant="compact" />
            ))}
          </div>
        </div>
      </section>
      <ContactCTA action={t('common.askRetreat')} />
    </>
  );
}
