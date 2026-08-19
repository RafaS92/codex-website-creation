import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const purposes = [
  ['seminar', 'Jikiden Reiki seminar'],
  ['therapy', 'Therapy session'],
  ['guidance', 'Help choosing a therapy'],
  ['general', 'General inquiry'],
]

export default function ContactForm() {
  const [searchParams] = useSearchParams()
  const initialPurpose = useMemo(() => {
    const requested = searchParams.get('purpose')
    return purposes.some(([value]) => value === requested) ? requested : 'seminar'
  }, [searchParams])
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})

  function handleSubmit(event) {
    event.preventDefault()
    const values = Object.fromEntries(new FormData(event.currentTarget))
    const nextErrors = {}
    if (!values.name?.trim()) nextErrors.name = 'Please enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(values.email || '')) nextErrors.email = 'Please enter a valid email address.'
    if (!values.message?.trim()) nextErrors.message = 'Please share a short message.'
    if (!values.consent) nextErrors.consent = 'Please confirm that Studio IKI may use these details to reply.'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) {
      setStatus('error')
      requestAnimationFrame(() => document.getElementById('form-error-summary')?.focus())
      return
    }
    setStatus('not-configured')
  }

  return (
    <form className="contact-form card" noValidate onSubmit={handleSubmit}>
      <h2>How may we support you?</h2>
      {status === 'error' && <div id="form-error-summary" className="form-alert" role="alert" tabIndex="-1">Please review the highlighted fields.</div>}
      {status === 'not-configured' && (
        <div className="form-alert form-alert--info" role="status">
          Online sending is not connected yet. Please email <a href="mailto:nongnapatr@gmail.com">nongnapatr@gmail.com</a> while this is being configured.
        </div>
      )}
      <fieldset>
        <legend>Inquiry purpose</legend>
        <div className="choice-grid">
          {purposes.map(([value, label]) => (
            <label key={value}><input type="radio" name="purpose" value={value} defaultChecked={value === initialPurpose} /> <span>{label}</span></label>
          ))}
        </div>
      </fieldset>
      <div className="field">
        <label htmlFor="name">Full name</label>
        <input id="name" name="name" autoComplete="name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} />
        {errors.name && <span id="name-error" className="field-error">{errors.name}</span>}
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} />
        {errors.email && <span id="email-error" className="field-error">{errors.email}</span>}
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="6" aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} />
        {errors.message && <span id="message-error" className="field-error">{errors.message}</span>}
      </div>
      <div className="field field--check">
        <label><input type="checkbox" name="consent" aria-invalid={Boolean(errors.consent)} aria-describedby={errors.consent ? 'consent-error' : undefined} /> <span>I agree that Studio IKI may use my details to respond to this inquiry.</span></label>
        {errors.consent && <span id="consent-error" className="field-error">{errors.consent}</span>}
      </div>
      <button className="button button--primary" type="submit">Send Inquiry</button>
    </form>
  )
}
