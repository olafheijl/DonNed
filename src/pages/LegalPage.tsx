import HeroSection from '../components/HeroSection';
import { pages, placeholders } from '../content';

export default function LegalPage({
  slug,
}: {
  slug: 'privacyverklaring' | 'cookiebeleid';
}) {
  const page = pages[slug];
  return <HeroSection title={page.title} intro={placeholders(page.intro)} />;
}

export const PrivacyPage = () => <LegalPage slug="privacyverklaring" />;
export const CookiesPage = () => <LegalPage slug="cookiebeleid" />;
