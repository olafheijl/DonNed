import { siteUrl } from '../sitePaths';
import VisualPlaceholder from './VisualPlaceholder';
import { articles, ui } from '../content';
interface Props {
  items?: typeof articles;
}

export default function ArticlePreviewGrid({ items = articles }: Props) {
  return (
    <div className="article-grid">
      {items.map((article) => (
        <article key={article.slug} data-category={article.category}>
          <a
            className="article-image"
            href={siteUrl(`/nieuws-inzichten/${article.slug}/`)}
            aria-label={`${ui.more} · ${article.category}`}
          >
            <VisualPlaceholder label={article.image} />
          </a>
          <p className="meta">
            {article.category} · {article.date}
          </p>
          <h3>
            <a href={siteUrl(`/nieuws-inzichten/${article.slug}/`)}>{article.title}</a>
          </h3>
          <p>{article.summary}</p>
          <a className="text-link" href={siteUrl(`/nieuws-inzichten/${article.slug}/`)}>
            {ui.more} <span aria-hidden="true">→</span>
          </a>
        </article>
      ))}
    </div>
  );
}
