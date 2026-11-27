import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { renderToString } from 'react-dom/server';
import App from '../src/App';
import { notFound, routes } from '../src/routes';

const template = await readFile('dist/index.html', 'utf8');
const escapeHtml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');

for (const route of [...routes, notFound]) {
  const markup = renderToString(<App pathname={route.path} />);
  const html = template
    .replace(
      '<title>DonNed</title>',
      () => `<title>${escapeHtml(route.title)} | DonNed</title>`,
    )
    .replace(
      'content="[Beschrijving pagina]"',
      () => `content="${escapeHtml(route.description)}"`,
    )
    .replace('<div id="root"></div>', () => `<div id="root" data-route="${escapeHtml(route.path)}">${markup}</div>`);
  const file =
    route === notFound
      ? 'dist/404.html'
      : join('dist', route.path, 'index.html');
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, html);
}
