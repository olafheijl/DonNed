import ContactCallout from '../components/ContactCallout';
import ImageComparison from '../components/ImageComparison';
import ResearchMetrics from '../components/ResearchMetrics';
import ModelPipeline from '../components/ModelPipeline';
import PageSection from '../components/PageSection';
import HeroSection from '../components/HeroSection';
import PageTopics from '../components/PageTopics';
import { pages, placeholders, ui } from '../content';

export default function RetScanPage() {
  const page = pages['retscan'];
  return (
    <>
      <HeroSection
        title={page.title}
        intro={placeholders(page.intro)}
        visual={placeholders(page.visual)}
        kind="retina"
        product
      />
      <PageSection
        title="Werking van RetScan"
        intro="[Beschrijving werking RetScan]"
      >
        <ModelPipeline
          steps={[
            'Netvliesbeeld',
            'Beeldvoorbewerking',
            'AI-analyse',
            'Interpretatie',
          ]}
        />
      </PageSection>
      <PageSection
        title="Verklaarbare AI"
        intro="[Beschrijving verklaarbare AI]"
        tone="mist"
      >
        <ImageComparison />
      </PageSection>
      <PageSection
        title="Wetenschappelijke resultaten"
        intro="[Beschrijving wetenschappelijke resultaten]"
        tone="dark"
      >
        <ResearchMetrics />
      </PageSection>
      <PageTopics title="Technologie en toepassing" items={page.modules} />
      <PageSection title="Veelgestelde vragen" tone="mist">
        <details className="faq">
          <summary>[Veelgestelde vraag over RetScan]</summary>
          <p>[Antwoord op veelgestelde vraag]</p>
        </details>
        <div className="actions">
          <a className="text-link" href="/onderzoek-validatie/">
            {ui.research} →
          </a>
          <a className="text-link" href="/contact/">
            Vraag een demonstratie aan →
          </a>
        </div>
      </PageSection>
      <ContactCallout />
    </>
  );
}
