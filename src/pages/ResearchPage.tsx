import VisualPlaceholder from '../components/VisualPlaceholder';
import ContactCallout from '../components/ContactCallout';
import ResearchMetrics from '../components/ResearchMetrics';
import PageSection from '../components/PageSection';
import HeroSection from '../components/HeroSection';
import PageTopics from '../components/PageTopics';
import { pages, placeholders, publications } from '../content';

export default function ResearchPage() {
  const page = pages['onderzoek-validatie'];
  return (
    <>
      <HeroSection
        title={page.title}
        intro={placeholders(page.intro)}
        visual={placeholders(page.visual)}
        kind="graph"
      />
      <PageSection
        title="Wetenschappelijke resultaten"
        intro="[Beschrijving wetenschappelijke resultaten]"
        tone="dark"
      >
        <ResearchMetrics />
      </PageSection>
      <PageTopics
        title="Klinische studies en methodologie"
        items={page.modules}
      />
      <PageSection
        id="publicaties"
        title="Wetenschappelijke publicaties"
        tone="mist"
      >
        {publications.map((publication) => (
          <article key={publication.title} className="publication">
            <h3>{publication.title}</h3>
            <p>
              {publication.authors} · {publication.date} · {publication.journal}
            </p>
            <dl>
              <div>
                <dt>DOI</dt>
                <dd>{publication.doi}</dd>
              </div>
              <div>
                <dt>Bron</dt>
                <dd>
                  {publication.sourceUrl ? (
                    <a href={publication.sourceUrl}>
                      {publication.sourceLabel}
                    </a>
                  ) : (
                    publication.sourceLabel
                  )}
                </dd>
              </div>
              <div>
                <dt>Download</dt>
                <dd>
                  {publication.downloadUrl ? (
                    <a href={publication.downloadUrl}>
                      {publication.downloadLabel}
                    </a>
                  ) : (
                    publication.downloadLabel
                  )}
                </dd>
              </div>
            </dl>
          </article>
        ))}
      </PageSection>
      <PageSection
        id="projecten"
        title="Lopende onderzoeksprojecten"
        intro="[Introductie onderzoeksprojecten]"
      >
        <div className="split">
          <VisualPlaceholder
            label="[Visualisatie onderzoeksproject]"
            kind="graph"
          />
          <div>
            <h3>[Titel onderzoeksproject]</h3>
            <p>[Beschrijving onderzoeksproject]</p>
          </div>
        </div>
      </PageSection>
      <ContactCallout />
    </>
  );
}
