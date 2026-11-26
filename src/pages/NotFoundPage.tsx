import SiteLayout from '../layouts/SiteLayout';

export default function NotFoundPage() {
  return (
    <>
      <section className="section shell">
        <h1>Pagina niet gevonden</h1>
        <p>Controleer het adres of ga terug naar de homepage.</p>
        <a className="button primary" href="/">
          Naar de homepage →
        </a>
      </section>
    </>
  );
}
