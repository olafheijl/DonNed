import { siteUrl } from '../sitePaths';
import Button from '../components/Button';

export default function NotFoundPage() {
  return (
    <>
      <section className="section shell">
        <h1>Pagina niet gevonden</h1>
        <p>Controleer het adres of ga terug naar de homepage.</p>
        <Button href={siteUrl('/')}>
          Naar de homepage
        </Button>
      </section>
    </>
  );
}
