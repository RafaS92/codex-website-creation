import { useTranslation } from 'react-i18next';
import FAQAccordion from '../components/FAQAccordion/FAQAccordion';
import SEO from '../components/SEO/SEO';
import SectionHeader from '../components/SectionHeader/SectionHeader';
import ContactCTA from '../sections/ContactCTA';

export default function FAQ() {
  const { t, i18n } = useTranslation();
  const groups = t('faq.groups', { returnObjects: true });

  return (
    <>
      <SEO title={`${t('faq.title')} | ${t('site.name')}`} description={t('faq.intro')} lang={i18n.language} />
      <section className="page-hero page-hero--text">
        <div className="container container--narrow">
          <SectionHeader title={t('faq.title')} body={t('faq.intro')} align="center" level={1} />
        </div>
      </section>
      <section className="section">
        <div className="container faq-page">
          {groups.map((group) => (
            <div className="faq-page__group" key={group.title} data-aos="fade-up">
              <h2>{group.title}</h2>
              <FAQAccordion items={group.items} />
            </div>
          ))}
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
