import { siteUrl } from '../sitePaths';
import { useState } from 'react';
import VisualPlaceholder from '../components/VisualPlaceholder';
import ContactCallout from '../components/ContactCallout';
import ArticlePreviewGrid from '../components/ArticlePreviewGrid';
import PageSection from '../components/PageSection';
import HeroSection from '../components/HeroSection';
import { pages, placeholders, ui, newsCategories, articles } from '../content';

export default function NewsOverviewPage() {
  const page = pages['nieuws-inzichten'];
  const [category, setCategory] = useState<string | null>(null);
  const items = category
    ? articles.filter((article) => article.category === category)
    : articles;
  return (
    <>
      <HeroSection
        title={page.title}
        intro={placeholders(page.intro)}
        visual={placeholders(page.visual)}
      />
      <PageSection title="Uitgelicht artikel">
        <div className="split">
          <VisualPlaceholder label="[Afbeelding uitgelicht artikel]" />
          <div>
            <h3>{articles[0].title}</h3>
            <p>{articles[0].summary}</p>
            <a
              className="text-link"
              href={siteUrl(`/nieuws-inzichten/${articles[0].slug}/`)}
            >
              {ui.more} →
            </a>
          </div>
        </div>
      </PageSection>
      <PageSection title="Artikelen" tone="mist">
        <div className="news-list">
          <label className="filter">
            {ui.filter}{' '}
            <select
              id="nieuwsfilter"
              value={category ?? ''}
              onChange={(event) => setCategory(event.target.value)}
            >
              <option value="">{ui.all}</option>
              {newsCategories.map((category) => (
                <option key={category}>{category}</option>
              ))}
            </select>
          </label>
          <p role="status" id="filtermelding">
            {category !== null &&
              (items.length === 1
                ? '1 artikel weergegeven.'
                : `${items.length} artikelen weergegeven.`)}
          </p>
          <ArticlePreviewGrid items={items} />
        </div>
      </PageSection>
      <ContactCallout />
    </>
  );
}
