import { siteUrl } from '../sitePaths';
import Button from './Button';
import { useEffect, useState, type FormEvent } from 'react';
import { ui } from '../content';

export default function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState('');
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: Record<string, string> = {};
    const fields = event.currentTarget.querySelectorAll<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >('input, select, textarea');
    let firstInvalid: (typeof fields)[number] | undefined;

    for (const field of fields) {
      const error =
        field.required && !field.value.trim()
          ? ui.required
          : field.validity.typeMismatch
            ? ui.emailError
            : '';
      if (error) {
        nextErrors[field.name] = error;
        firstInvalid ??= field;
      }
    }

    setErrors(nextErrors);
    setStatus(firstInvalid ? '' : ui.demo);
    firstInvalid?.focus();
  }

  return (
    <form
      className="contact-form"
      noValidate
      onSubmit={submit}
      aria-describedby="formulier-info"
    >
      <p id="formulier-info">
        Vul alle velden in, behalve het optionele telefoonnummer.
      </p>
      <div className="field-grid">
        {['name', 'organization', 'email', 'phone'].map((name, i) => (
          <label key={name}>
            {ui.fields[i]}
            <input
              name={name}
              type={i === 2 ? 'email' : i === 3 ? 'tel' : 'text'}
              required={i !== 3}
              autoComplete={['name', 'organization', 'email', 'tel'][i]}
              aria-invalid={!!errors[name] || undefined}
              aria-describedby={`${name}-melding`}
            />
            <span className="field-error" id={`${name}-melding`}>
              {errors[name]}
            </span>
          </label>
        ))}
      </div>
      <label>
        {ui.fields[4]}
        <select
          name="subject"
          required
          aria-invalid={!!errors.subject || undefined}
          aria-describedby="subject-melding"
        >
          <option value="">Kies een onderwerp</option>
          {ui.subjects.map((subject) => (
            <option key={subject}>{subject}</option>
          ))}
        </select>
        <span className="field-error" id="subject-melding">
          {errors.subject}
        </span>
      </label>
      <label>
        {ui.fields[5]}
        <textarea
          name="message"
          rows={6}
          required
          aria-invalid={!!errors.message || undefined}
          aria-describedby="message-melding"
        ></textarea>
        <span className="field-error" id="message-melding">
          {errors.message}
        </span>
      </label>
      <p>
        <a className="text-link" href={siteUrl('/privacyverklaring/')}>
          Bekijk de privacyverklaring
        </a>
      </p>
      <Button type="submit" disabled={!ready}>{ui.send}</Button>
      <p role="status" className="form-status">
        {status}
      </p>
    </form>
  );
}
