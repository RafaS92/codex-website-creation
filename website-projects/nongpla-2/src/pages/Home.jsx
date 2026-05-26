import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO/SEO';
import AboutPreview from '../sections/AboutPreview';
import ContactCTA from '../sections/ContactCTA';
import Hero from '../sections/Hero';
import NaturalSetting from '../sections/NaturalSetting';
import PhilosophyBlock from '../sections/PhilosophyBlock';
import ServicePathways from '../sections/ServicePathways';
import WhatToExpect from '../sections/WhatToExpect';

export default function Home() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <SEO title={t('meta.title')} description={t('meta.description')} lang={i18n.language} />
      <Hero />
      <PhilosophyBlock />
      <ServicePathways />
      <NaturalSetting />
      <AboutPreview />
      <WhatToExpect />
      <ContactCTA />
    </>
  );
}
