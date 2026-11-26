import { createRoot, hydrateRoot } from 'react-dom/client';
import '@fontsource-variable/manrope';
import '@fontsource-variable/inter';
import './styles/base.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/homepage-hero.css';
import App from './App';
import { getRoute } from './routes';
import { locale } from './content';

const pathname = window.location.pathname;
const root = document.getElementById('root');
if (!root) throw new Error('React root is missing');
const app = <App pathname={pathname} />;

if (root.dataset.route === getRoute(pathname).path) {
  hydrateRoot(root, app);
} else {
  const route = getRoute(pathname);
  document.documentElement.lang = locale;
  document.title = `${route.title} | DonNed`;
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute('content', route.description);
  createRoot(root).render(app);
}
