import { useTranslation } from 'react-i18next';
import Card from '../components/Card/Card';
import SectionHeader from '../components/SectionHeader/SectionHeader';

export default function ServicePathways() {
  const { t } = useTranslation();
  const pathways = t('pathways', { returnObjects: true });

  return (
    <section className="section section--sage">
      <div className="container">
        <SectionHeader title={t('home.pathwaysTitle')} />
        <div className="grid grid--three">
          {pathways.map((pathway) => (
            <Card key={pathway.title} {...pathway} />
          ))}
        </div>
      </div>
    </section>
  );
}
