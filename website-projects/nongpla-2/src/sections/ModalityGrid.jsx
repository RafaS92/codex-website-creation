import { useTranslation } from 'react-i18next';
import Card from '../components/Card/Card';
import SectionHeader from '../components/SectionHeader/SectionHeader';

export default function ModalityGrid() {
  const { t } = useTranslation();
  const modalities = t('services.modalities', { returnObjects: true });

  return (
    <section className="section section--sage">
      <div className="container">
        <SectionHeader title={t('services.title')} body={t('services.intro')} />
        <div className="grid grid--three">
          {modalities.map((modality) => (
            <Card key={modality.title} title={modality.title} body={modality.body} />
          ))}
        </div>
      </div>
    </section>
  );
}
