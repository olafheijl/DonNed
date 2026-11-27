import Button from './Button';
import VisualPlaceholder from './VisualPlaceholder';
import BrandLogo from './BrandLogo';
import { ui } from '../content';
interface Props {
  title: string;
  intro: string;
  visual?: string;
  image?: string;
  product?: boolean;
  kind?: 'retina' | 'architecture' | 'graph' | 'frame';
}

export default function HeroSection({
  title,
  intro,
  visual,
  image,
  product = false,
  kind = 'frame',
}: Props) {
  return (
    <section className="hero">
      <div
        className={
          visual || image ? 'shell hero-inner split' : 'shell hero-inner'
        }
      >
        <div>
          {product && <BrandLogo product />}
          <h1>{title}</h1>
          <p>{intro}</p>
          {product && (
            <div className="actions">
              <Button href="/contact/">
                {ui.meet}
              </Button>
            </div>
          )}
        </div>
        {image ? (
          <img
            className="hero-photo"
            src={image}
            alt="Fundusfoto van het netvlies"
          />
        ) : (
          visual && <VisualPlaceholder label={visual} kind={kind} />
        )}
      </div>
    </section>
  );
}
