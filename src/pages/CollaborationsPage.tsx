import { siteUrl } from '../sitePaths';
import VisualPlaceholder from '../components/VisualPlaceholder';
import ContactCallout from '../components/ContactCallout';
import PageSection from '../components/PageSection';
import HeroSection from '../components/HeroSection';
import { pages, placeholders, ui, partnerGroups } from '../content';

export default function CollaborationsPage() {
  const page = pages['samenwerkingen'];
  return (
    <>
      <HeroSection
        title={page.title}
        intro={placeholders(page.intro)}
        visual={placeholders(page.visual)}
      />
      {partnerGroups.map(([group, categories], index) => (
        <PageSection
          key={group}
          id={index ? 'implementatie' : 'wetenschap'}
          title={group}
          intro={
            index
              ? '[Beschrijving implementatiepartners]'
              : '[Beschrijving onderzoekspartners]'
          }
          tone={index ? 'mist' : 'white'}
        >
          <div className="editorial-grid">
            {categories.map((name) => (
              <article key={name}>
                <h3>{name}</h3>
                <VisualPlaceholder label="[Logo samenwerkingspartner]" />
                <p>[Beschrijving samenwerking]</p>
              </article>
            ))}
          </div>
          <a className="text-link" href={siteUrl('/contact/')}>
            {ui.collaborate} →
          </a>
        </PageSection>
      ))}
      <ContactCallout />
    </>
  );
}
