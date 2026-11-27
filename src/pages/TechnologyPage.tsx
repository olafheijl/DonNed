import ContactCallout from '../components/ContactCallout';
import ImageComparison from '../components/ImageComparison';
import ResearchMetrics from '../components/ResearchMetrics';
import ModelPipeline from '../components/ModelPipeline';
import PageSection from '../components/PageSection';
import HeroSection from '../components/HeroSection';
import PageTopics from '../components/PageTopics';
import { pages, placeholders, pipeline } from '../content';

export default function TechnologyPage() {
  const page = pages['ai-technologie'];
  return (
    <>
      <HeroSection
        title={page.title}
        intro={placeholders(page.intro)}
        visual={placeholders(page.visual)}
        kind="architecture"
      />
      <PageSection
        title="Modelontwikkeling"
        intro="[Beschrijving modelontwikkeling]"
      >
        <ModelPipeline steps={pipeline} />
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
      <PageTopics title="Technologische verdieping" items={page.modules} />
      <ContactCallout />
    </>
  );
}
