import ContactCallout from '../components/ContactCallout';
import HeroSection from '../components/HeroSection';
import PageTopics from '../components/PageTopics';
import { pages, placeholders } from '../content';

export default function AboutDonNedPage() {
  const page = pages['over-donned'];
  return (
    <>
      <HeroSection
        title={page.title}
        intro={placeholders(page.intro)}
        visual={placeholders(page.visual)}
      />
      <PageTopics title="Digitaal Oognetwerk Nederland" items={page.modules} />
      <ContactCallout />
    </>
  );
}
