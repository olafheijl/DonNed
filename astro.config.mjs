import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

export default defineConfig({
  i18n: { defaultLocale: 'nl', locales: ['nl'] },
  vite: { plugins: [tailwind()] },
  trailingSlash: 'always',
});
