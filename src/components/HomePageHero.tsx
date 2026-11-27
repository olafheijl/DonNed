import Button from './Button';
import VisualPlaceholder from './VisualPlaceholder';
import { homeFundusImage, ui } from '../content';

export default function HomePageHero() {
  return (
    <section className="home-hero">
      <div className="shell home-hero-layout">
        <div className="home-hero-copy">
          <h1>Medische AI voor netvliesanalyse</h1>
          <p>Bij DonNed onderzoeken, ontwikkelen en valideren we AI-modellen die netvliesbeelden analyseren. Met RetScan brengen we dat onderzoek samen in technologie voor oogscreening.</p>
          <div className="actions">
            <Button href="/contact/">{ui.meet}</Button>
            <a className="text-link" href="/retscan/">{ui.discover}</a>
          </div>
          <p className="home-hero-topic">
            Onderzoek · Medische AI · Klinische validatie
          </p>
        </div>
        {homeFundusImage ? (
          <img
            className="home-hero-photo"
            src={homeFundusImage}
            alt="Fundusfoto van het netvlies"
            width={502}
            height={497}
            fetchPriority="high"
          />
        ) : (
          <VisualPlaceholder label="[Afbeelding netvliesanalyse]" kind="retina" />
        )}
      </div>
    </section>
  );
}
