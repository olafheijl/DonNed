import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const text = z.string();
const collection = <Shape extends z.ZodRawShape>(folder: string, fields: Shape) => defineCollection({
  loader: glob({ base: `./src/entries/${folder}`, pattern: '**/*.{md,mdx}' }),
  schema: z.object({ locale: z.string(), title: text, ...fields }),
});

export const collections = {
  publications: collection('publications', { authors: z.array(text), date: z.coerce.date(), journal: text, doi: text.optional(), sourceUrl: z.url().optional(), downloadUrl: z.url().optional() }),
  studies: collection('studies', { studyType: text, methodology: text }),
  projects: collection('projects', { summary: text, status: text.optional() }),
  models: collection('models', { summary: text, architecture: text.optional() }),
  metrics: collection('metrics', { value: text, confidenceInterval: text.optional(), reference: text.optional() }),
  researchPartners: collection('research-partners', { category: text, url: z.url().optional() }),
  technologyPartners: collection('technology-partners', { category: text, url: z.url().optional() }),
  news: collection('news', { category: text, date: z.coerce.date(), summary: text, image: text.optional() }),
};
