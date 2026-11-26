import type { ComponentType } from 'react';
import AboutDonNedPage from './pages/AboutDonNedPage';
import CollaborationsPage from './pages/CollaborationsPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import { CookiesPage, PrivacyPage } from './pages/LegalPage';
import NewsArticlePage from './pages/NewsArticlePage';
import NewsOverviewPage from './pages/NewsOverviewPage';
import NotFoundPage from './pages/NotFoundPage';
import ResearchPage from './pages/ResearchPage';
import RetScanPage from './pages/RetScanPage';
import TechnologyPage from './pages/TechnologyPage';
import { articles, pages, placeholders } from './content';

type Route = {
  path: string;
  title: string;
  description: string;
  Page: ComponentType;
};

const pageComponents = {
  retscan: RetScanPage,
  'ai-technologie': TechnologyPage,
  'onderzoek-validatie': ResearchPage,
  samenwerkingen: CollaborationsPage,
  'nieuws-inzichten': NewsOverviewPage,
  'over-donned': AboutDonNedPage,
  contact: ContactPage,
  privacyverklaring: PrivacyPage,
  cookiebeleid: CookiesPage,
} satisfies Record<keyof typeof pages, ComponentType>;

export const notFound: Route = {
  path: '/404.html',
  title: 'Pagina niet gevonden',
  description: '[Beschrijving pagina]',
  Page: NotFoundPage,
};

export const routes: Route[] = [
  {
    path: '/',
    title: 'Home',
    description: '[Introductietekst DonNed]',
    Page: HomePage,
  },
  ...(Object.keys(pageComponents) as Array<keyof typeof pages>).map((slug) => ({
    path: `/${slug}/`,
    title: pages[slug].title,
    description: placeholders(pages[slug].intro),
    Page: pageComponents[slug],
  })),
  ...articles.map((article) => ({
    path: `/nieuws-inzichten/${article.slug}/`,
    title: article.title,
    description: article.summary,
    Page: () => <NewsArticlePage article={article} />,
  })),
];

export function getRoute(path: string) {
  const normalized = path.endsWith('/') ? path : path + '/';
  return routes.find((route) => route.path === normalized) ?? notFound;
}
