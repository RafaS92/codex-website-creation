import { useTranslation } from 'react-i18next';
import SectionHeader from '../components/SectionHeader/SectionHeader';

export default function WhatToExpect({ title, body, items }) {
  const { t } = useTranslation();
  const fallbackItems = t('home.expectItems', { returnObjects: true });

  return (
    <section className="section expectation">
      <div className="container">
        <SectionHeader title={title || t('home.expectTitle')} body={body} align="center" />
        <div className="expectation__list">
          {(items || fallbackItems).map((item, index) => (
            <div className="expectation__item" key={item} data-aos="fade-up" data-aos-delay={index * 80}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
