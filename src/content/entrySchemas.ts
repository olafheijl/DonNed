import { z } from 'zod';

const text = z.string();
const entry = <Shape extends z.ZodRawShape>(fields: Shape) => z.object({
  locale: text, title: text, ...fields,
});

export const entrySchemas = {
  publications: entry({ authors: z.array(text), date: z.coerce.date(), journal: text, doi: text.optional(), sourceUrl: z.url().optional(), downloadUrl: z.url().optional() }),
  studies: entry({ studyType: text, methodology: text }),
  projects: entry({ summary: text, status: text.optional() }),
  models: entry({ summary: text, architecture: text.optional() }),
  metrics: entry({ value: text, confidenceInterval: text.optional(), reference: text.optional() }),
  researchPartners: entry({ category: text, url: z.url().optional() }),
  technologyPartners: entry({ category: text, url: z.url().optional() }),
  news: entry({ category: text, date: z.coerce.date(), summary: text, image: text.optional() }),
};
