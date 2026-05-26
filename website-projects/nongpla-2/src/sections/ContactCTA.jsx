import { useTranslation } from 'react-i18next';
import Button from '../components/Button/Button';

export default function ContactCTA({ title, body, action }) {
  const { t } = useTranslation();

  return (
    <section className="contact-cta" data-aos="fade-up">
      <div>
        <p className="eyebrow">{t('nav.cta')}</p>
        <h2>{title || t('contact.title')}</h2>
        <p>{body || t('common.contactIntro')}</p>
      </div>
      <Button to="/contact">{action || t('nav.cta')}</Button>
    </section>
  );
}
