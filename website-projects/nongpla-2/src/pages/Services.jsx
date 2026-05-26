import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO/SEO';
import SectionHeader from '../components/SectionHeader/SectionHeader';
import ContactCTA from '../sections/ContactCTA';
import ModalityGrid from '../sections/ModalityGrid';
import WhatToExpect from '../sections/WhatToExpect';
import WhoThisIsFor from '../sections/WhoThisIsFor';

export default function Services() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <SEO title={`${t('services.title')} | ${t('site.name')}`} description={t('services.intro')} lang={i18n.language} />
      <section className="page-hero page-hero--text">
        <div className="container container--narrow">
          <SectionHeader title={t('services.title')} body={t('services.intro')} align="center" level={1} />
        </div>
      </section>
      <ModalityGrid />
      <WhoThisIsFor />
      <WhatToExpect title={t('services.expectTitle')} body={t('services.expectBody')} />
      <ContactCTA action={t('common.askSession')} />
    </>
  );
}
