import { useTranslation } from 'react-i18next';
import Button from '../components/Button/Button';
import { images } from '../data/images';

export default function NaturalSetting() {
  const { t } = useTranslation();

  return (
    <section className="section split">
      <div className="split__media" data-aos="fade-up">
        <img src={images.setting} alt="Quiet forest setting in soft natural light" />
      </div>
      <div className="split__content" data-aos="fade-up">
        <p className="eyebrow">{t('site.location')}</p>
        <h2>{t('home.settingTitle')}</h2>
        <p>{t('home.settingBody')}</p>
        <Button to="/retreats-workshops" variant="text">
          {t('common.askRetreat')}
        </Button>
      </div>
    </section>
  );
}
