import { useState } from 'react';
import { inquiryOptions } from '../content/site';

const initialValues = { name: '', email: '', interest: '', message: '' };

export default function ContactForm({ compact = false, title = 'Send an Inquiry' }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');

  const update = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
    setStatus('');
  };

  const submit = (event) => {
    event.preventDefault();
    const nextErrors = {};
    if (!values.name.trim()) nextErrors.name = 'Please enter your name.';
    if (!/^\S+@\S+\.\S+$/.test(values.email)) nextErrors.email = 'Please enter a valid email address.';
    if (!values.interest) nextErrors.interest = 'Please choose an area of interest.';
    if (!compact && !values.message.trim()) nextErrors.message = 'Please share a short message.';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatus('Please review the highlighted fields.');
      return;
    }
    setStatus('Thank you. Your inquiry has been prepared; direct online delivery will be enabled when the practice contact endpoint is confirmed.');
  };

  return (
    <form className={`contact-form${compact ? ' contact-form--compact' : ''}`} onSubmit={submit} noValidate id="inquiry-form">
      <div className="contact-form__heading">
        <p className="eyebrow">A quiet first step</p>
        <h2>{title}</h2>
        {!compact && <p>Share what brings you here. You can take the next step at your own pace.</p>}
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor={`${compact ? 'compact-' : ''}name`}>Your name</label>
          <input id={`${compact ? 'compact-' : ''}name`} name="name" autoComplete="name" value={values.name} onChange={update} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? `${compact ? 'compact-' : ''}name-error` : undefined} />
          {errors.name && <span className="field__error" id={`${compact ? 'compact-' : ''}name-error`}>{errors.name}</span>}
        </div>
        <div className="field">
          <label htmlFor={`${compact ? 'compact-' : ''}email`}>Email address</label>
          <input id={`${compact ? 'compact-' : ''}email`} name="email" type="email" autoComplete="email" value={values.email} onChange={update} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? `${compact ? 'compact-' : ''}email-error` : undefined} />
          {errors.email && <span className="field__error" id={`${compact ? 'compact-' : ''}email-error`}>{errors.email}</span>}
        </div>
      </div>

      <div className="field">
        <label htmlFor={`${compact ? 'compact-' : ''}interest`}>I am interested in</label>
        <select id={`${compact ? 'compact-' : ''}interest`} name="interest" value={values.interest} onChange={update} aria-invalid={Boolean(errors.interest)} aria-describedby={errors.interest ? `${compact ? 'compact-' : ''}interest-error` : undefined}>
          <option value="">Choose an option</option>
          {inquiryOptions.map((option) => <option value={option} key={option}>{option}</option>)}
        </select>
        {errors.interest && <span className="field__error" id={`${compact ? 'compact-' : ''}interest-error`}>{errors.interest}</span>}
      </div>

      {!compact && (
        <div className="field">
          <label htmlFor="message">Your message</label>
          <textarea id="message" name="message" rows="4" value={values.message} onChange={update} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} />
          {errors.message && <span className="field__error" id="message-error">{errors.message}</span>}
        </div>
      )}
      {compact && <input type="hidden" name="message" value="Homepage inquiry" />}

      <button className="button button--primary contact-form__submit" type="submit">Send inquiry <span aria-hidden="true">↗</span></button>
      <p className="contact-form__status" role="status" aria-live="polite">{status}</p>
    </form>
  );
}
