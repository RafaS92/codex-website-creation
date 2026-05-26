import { useTranslation } from 'react-i18next';
import Button from '../components/Button/Button';
import SEO from '../components/SEO/SEO';

export default function NotFound() {
  const { t, i18n } = useTranslation();

  return (
    <section className="page-hero page-hero--text">
      <SEO title={`Page not found | ${t('site.name')}`} description={t('meta.description')} lang={i18n.language} />
      <div className="container container--narrow">
        <h1>Page not found</h1>
        <p>{t('common.contactIntro')}</p>
        <Button to="/">{t('nav.home')}</Button>
      </div>
    </section>
  );
}
