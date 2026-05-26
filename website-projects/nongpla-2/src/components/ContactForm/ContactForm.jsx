import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../Button/Button';

export default function ContactForm() {
  const { t } = useTranslation();
  const options = t('contact.options', { returnObjects: true });
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        {t('contact.name')}
        <input name="name" type="text" required />
      </label>
      <label>
        {t('contact.email')}
        <input name="contact" type="text" required />
      </label>
      <label>
        {t('contact.interest')}
        <select name="interest" defaultValue={options[0]}>
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>
      <label>
        {t('contact.message')}
        <textarea name="message" rows="5" required />
      </label>
      <Button type="submit">{t('contact.submit')}</Button>
      {sent && (
        <p className="contact-form__success" role="status">
          {t('contact.success')}
        </p>
      )}
    </form>
  );
}
