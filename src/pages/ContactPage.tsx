import PageSection from '../components/PageSection';
import HeroSection from '../components/HeroSection';
import ContactForm from '../components/ContactForm';
import { pages, placeholders, ui } from '../content';

export default function ContactPage() {
  const page = pages['contact'];
  return (
    <>
      <HeroSection title={page.title} intro={placeholders(page.intro)} />
      <PageSection title={ui.contact}>
        <div className="contact-layout">
          <ContactForm />
          <aside>
            <h3>Contactgegevens</h3>
            <p>[Zakelijk e-mailadres]</p>
            <p>[Telefoonnummer]</p>
          </aside>
        </div>
      </PageSection>
    </>
  );
}
