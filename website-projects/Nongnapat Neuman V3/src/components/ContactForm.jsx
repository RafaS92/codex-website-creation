import Button from './Button.jsx';

export default function ContactForm({ compact = false }) {
  const onSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    form.reset();
    form.querySelector('[data-form-status]').textContent = 'Thank you. This demo form is ready to connect to your preferred inbox or CRM.';
  };

  return (
    <form className={`contact-form ${compact ? 'contact-form--compact' : ''}`} onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor={compact ? 'name-compact' : 'name'}>Name</label>
        <input id={compact ? 'name-compact' : 'name'} name="name" type="text" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor={compact ? 'email-compact' : 'email'}>Email</label>
        <input id={compact ? 'email-compact' : 'email'} name="email" type="email" autoComplete="email" required />
      </div>
      <div className="field">
        <label htmlFor={compact ? 'interest-compact' : 'interest'}>Inquiry Type</label>
        <select id={compact ? 'interest-compact' : 'interest'} name="interest">
          <option>Private session</option>
          <option>Retreats & workshops</option>
          <option>Reiki training</option>
          <option>General question</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor={compact ? 'message-compact' : 'message'}>Message</label>
        <textarea id={compact ? 'message-compact' : 'message'} name="message" rows="5" required />
      </div>
      <Button type="submit" className="contact-form__submit">Send Inquiry</Button>
      <p className="form-status" role="status" data-form-status />
    </form>
  );
}
