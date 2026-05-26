import { useTranslation } from 'react-i18next';
import SectionHeader from '../components/SectionHeader/SectionHeader';

export default function PhilosophyBlock() {
  const { t } = useTranslation();

  return (
    <section className="section philosophy">
      <div className="container container--narrow">
        <SectionHeader title={t('home.philosophyTitle')} body={t('home.philosophyBody')} align="center" />
      </div>
    </section>
  );
}
