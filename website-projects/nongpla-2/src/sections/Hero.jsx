import { useTranslation } from 'react-i18next';
import Button from '../components/Button/Button';
import { images } from '../data/images';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero__image" aria-hidden="true">
        <img src={images.hero} alt="" />
      </div>
      <div className="hero__content">
        <p className="eyebrow">{t('home.heroEyebrow')}</p>
        <h1>{t('home.heroTitle')}</h1>
        <p>{t('home.heroBody')}</p>
        <div className="hero__actions">
          <Button to="/contact">{t('home.heroCta')}</Button>
          <Button to="/services" variant="ghost">
            {t('home.heroSecondary')}
          </Button>
        </div>
      </div>
    </section>
  );
}
