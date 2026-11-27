import { siteUrl } from '../sitePaths';
import { useEffect, useRef, useState, type CSSProperties } from 'react';

interface Partner {
  name: string;
  logo: string;
}

export default function PartnerCarousel({ partners }: { partners: readonly Partner[] }) {
  const viewport = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!viewport.current) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting));
    observer.observe(viewport.current);
    return () => observer.disconnect();
  }, []);

  if (!partners.length) return null;

  return (
    <div
      className="partner-carousel"
      ref={viewport}
      tabIndex={0}
      role="group"
      aria-label="Logo’s van samenwerkingspartners"
      data-in-view={inView}
      data-scroll-desktop={partners.length > 5}
      data-scroll-tablet={partners.length > 3}
      data-scroll-mobile={partners.length > 2}
      style={{ '--partner-count': partners.length } as CSSProperties}
    >
      <ul className="partner-track" role="list">
        {[...partners, ...partners].map(({ name, logo }, index) => {
          const duplicate = index >= partners.length;
          return (
            <li
              key={`${duplicate ? 'kopie' : 'origineel'}-${logo}`}
              className={duplicate ? 'partner-logo partner-logo-copy' : 'partner-logo'}
              aria-hidden={duplicate || undefined}
            >
              <img src={siteUrl(`/merken/${encodeURIComponent(logo)}`)} alt={duplicate ? '' : name} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
