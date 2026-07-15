import { useEffect } from 'react';
import Button from '../components/Button';

export default function NotFoundPage() {
  useEffect(() => { document.title = 'Page not found | Nongnapat Neuman'; }, []);
  return (
    <section className="not-found" aria-labelledby="not-found-title">
      <p className="eyebrow">404 · A quiet pause</p>
      <h1 id="not-found-title">This path does not lead anywhere yet.</h1>
      <p>Return to the beginning or start a conversation.</p>
      <div><Button to="/">Return home</Button><Button to="/contact" variant="secondary">Inquire</Button></div>
    </section>
  );
}
