import { useTranslation } from 'react-i18next';
import Card from '../components/Card/Card';
import SEO from '../components/SEO/SEO';
import SectionHeader from '../components/SectionHeader/SectionHeader';
import { images } from '../data/images';
import ContactCTA from '../sections/ContactCTA';

export default function ReikiTraining() {
  const { t, i18n } = useTranslation();
  const students = t('reiki.students', { returnObjects: true });

  return (
    <>
      <SEO title={`${t('reiki.title')} | ${t('site.name')}`} description={t('reiki.intro')} lang={i18n.language} />
      <section className="page-hero">
        <div className="container page-hero__grid">
          <SectionHeader title={t('reiki.title')} body={t('reiki.intro')} level={1} />
          <img src={images.sound} alt="Meditative movement and healing practice atmosphere" />
        </div>
      </section>
      <section className="section">
        <div className="container container--narrow">
          <SectionHeader title={t('reiki.approachTitle')} body={t('reiki.approach')} align="center" />
        </div>
      </section>
      <section className="section section--sage">
        <div className="container">
          <div className="grid grid--four">
            {students.map((student) => (
              <Card key={student} title={student} variant="compact" />
            ))}
          </div>
        </div>
      </section>
      <ContactCTA action={t('common.askReiki')} />
    </>
  );
}
