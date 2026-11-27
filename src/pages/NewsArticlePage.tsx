import PageSection from '../components/PageSection';
import VisualPlaceholder from '../components/VisualPlaceholder';
import ArticlePreviewGrid from '../components/ArticlePreviewGrid';
import { articles } from '../content';

export default function NewsArticlePage({
  article,
}: {
  article: (typeof articles)[number];
}) {
  return (
    <>
      <article className="section shell story">
        <a className="text-link" href="/nieuws-inzichten/">
          ← Naar nieuws & inzichten
        </a>
        <p className="meta">
          {article.category} · {article.date}
        </p>
        <h1>{article.title}</h1>
        <p className="lead">{article.summary}</p>
        <VisualPlaceholder label={article.image} />
        <p>{article.body}</p>
      </article>
      <PageSection title="Gerelateerde artikelen" tone="mist">
        <ArticlePreviewGrid
          items={articles.filter((item) => item.slug !== article.slug)}
        />
      </PageSection>
    </>
  );
}
