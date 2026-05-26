import { useTranslation } from 'react-i18next';
import ContactForm from '../components/ContactForm/ContactForm';
import SEO from '../components/SEO/SEO';
import SectionHeader from '../components/SectionHeader/SectionHeader';

export default function Contact() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <SEO title={`${t('contact.title')} | ${t('site.name')}`} description={t('common.contactIntro')} lang={i18n.language} />
      <section className="page-hero contact-page">
        <div className="container contact-page__grid">
          <div>
            <SectionHeader title={t('contact.title')} body={t('common.contactIntro')} level={1} />
            <div className="contact-options">
              <a href="mailto:hello@example.com">{t('site.email')}</a>
              <a href="https://wa.me/" target="_blank" rel="noreferrer">
                {t('site.whatsapp')}
              </a>
              <p>{t('site.location')}</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
