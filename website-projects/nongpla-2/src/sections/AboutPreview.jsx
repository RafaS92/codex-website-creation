import { useTranslation } from 'react-i18next';
import Button from '../components/Button/Button';
import { images } from '../data/images';

export default function AboutPreview() {
  const { t } = useTranslation();

  return (
    <section className="section split split--reverse">
      <div className="split__media" data-aos="fade-up">
        <img src={images.portrait} alt="A calm healing practice detail with warm natural light" />
      </div>
      <div className="split__content" data-aos="fade-up">
        <p className="eyebrow">{t('about.title')}</p>
        <h2>{t('home.aboutTitle')}</h2>
        <p>{t('home.aboutBody')}</p>
        <Button to="/about" variant="text">
          {t('common.learnMore')}
        </Button>
      </div>
    </section>
  );
}
