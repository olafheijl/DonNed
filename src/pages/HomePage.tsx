import PartnerCarousel from '../components/PartnerCarousel';
import HomePageHero from '../components/HomePageHero';
import PageSection from '../components/PageSection';
import VisualPlaceholder from '../components/VisualPlaceholder';
import ResearchMetrics from '../components/ResearchMetrics';
import ModelPipeline from '../components/ModelPipeline';
import ArticlePreviewGrid from '../components/ArticlePreviewGrid';
import ContactCallout from '../components/ContactCallout';
import BrandLogo from '../components/BrandLogo';
import { ui, sections, pipeline, audiences, homepagePartners } from '../content';

export default function HomePage() {
  return (
    <>
      <HomePageHero />
      <section className="partner-strip">
        <div className="shell">
          <header className="strip-heading">
            <h2>{sections.partners}</h2>
            <a className="text-link" href="/samenwerkingen/">
              Bekijk samenwerkingen <span aria-hidden="true">→</span>
            </a>
          </header>
          <PartnerCarousel partners={homepagePartners} />
        </div>
      </section>
      <PageSection title={sections.challenge} tone="mist">
        <div className="split">
          <div>
            <p className="lead">
              [Beschrijving maatschappelijke zorguitdaging]
            </p>
            <dl className="compact-stats">
              {[
                'Zorgvraag',
                'Toegang tot oogzorg',
                'Maatschappelijke impact',
              ].map((label) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>
                    <strong>[Statistiek]</strong>
                    <span>[Wetenschappelijke bron]</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <VisualPlaceholder label="[Afbeelding maatschappelijke zorguitdaging]" />
        </div>
      </PageSection>
      <PageSection
        title={sections.science}
        intro="[Beschrijving klinische validatie]"
        tone="dark"
      >
        <ResearchMetrics />
        <a className="button secondary" href="/onderzoek-validatie/">
          {ui.research}
          <span aria-hidden="true">→</span>
        </a>
      </PageSection>
      <PageSection title={sections.ai}>
        <div className="split">
          <VisualPlaceholder
            label="[Visualisatie modelarchitectuur]"
            kind="architecture"
          />
          <div>
            <p className="lead">[Beschrijving AI-model]</p>
            <a className="text-link" href="/ai-technologie/">
              {ui.technology} <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <ModelPipeline steps={pipeline} />
      </PageSection>
      <PageSection title="RetScan" tone="mist">
        <div className="split">
          <div>
            <BrandLogo product />
            <p className="lead">[Beschrijving RetScan]</p>
            <a className="button primary" href="/retscan/">
              {ui.discover}
              <span aria-hidden="true">→</span>
            </a>
          </div>
          <VisualPlaceholder
            label="[Visualisatie netvliesanalyse]"
            kind="retina"
          />
        </div>
      </PageSection>
      <PageSection
        title={sections.practice}
        intro="[Beschrijving klinische implementatie]"
      >
        <div className="editorial-grid">
          {audiences.map((label) => (
            <article key={label}>
              <VisualPlaceholder label="[Afbeelding doelgroep]" />
              <h3>{label}</h3>
              <p>[Beschrijving doelgroep]</p>
              <a className="text-link" href="/samenwerkingen/#implementatie">
                {ui.more} →
              </a>
            </article>
          ))}
        </div>
      </PageSection>
      <PageSection
        title={sections.projects}
        intro="[Introductie onderzoeksprojecten]"
        tone="mist"
      >
        <div className="split">
          <VisualPlaceholder
            label="[Visualisatie onderzoeksproject]"
            kind="graph"
          />
          <div>
            <h3>[Titel onderzoeksproject]</h3>
            <p>[Beschrijving onderzoeksproject]</p>
            <a className="text-link" href="/onderzoek-validatie/#projecten">
              {ui.research} →
            </a>
          </div>
        </div>
      </PageSection>
      <PageSection title={sections.news}>
        <ArticlePreviewGrid />
        <div className="actions">
          <a className="text-link" href="/nieuws-inzichten/">
            Bekijk nieuws & inzichten →
          </a>
          <a className="text-link" href="/onderzoek-validatie/#publicaties">
            {ui.publications} →
          </a>
        </div>
      </PageSection>
      <ContactCallout />
    </>
  );
}
