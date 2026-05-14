import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    /** Controls sort order in the works grid (lower = earlier) */
    order: z.number(),
    /** Path to the hero/thumbnail image, relative to /public */
    heroImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
    /** Key/value pairs shown in the project hero (Tool, Location, Year, etc.) */
    meta: z.array(z.object({ label: z.string(), value: z.string() })).optional(),
    /** Additional images shown in the gallery section below the body */
    gallery: z.array(z.object({ src: z.string(), alt: z.string() })).optional(),
  }),
});

const jeeps = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/jeeps' }),
  schema: z.object({
    /** Path to the image, relative to /public */
    image: z.string(),
    caption: z.string().optional(),
    date: z.coerce.date().optional(),
  }),
});

export const collections = { projects, jeeps };
