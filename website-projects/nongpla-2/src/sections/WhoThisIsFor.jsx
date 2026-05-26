import { useTranslation } from 'react-i18next';
import SectionHeader from '../components/SectionHeader/SectionHeader';

export default function WhoThisIsFor() {
  const { t } = useTranslation();

  return (
    <section className="section">
      <div className="container container--narrow">
        <SectionHeader title={t('services.whoTitle')} body={t('services.whoBody')} align="center" />
      </div>
    </section>
  );
}
