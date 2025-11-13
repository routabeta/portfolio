import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders';

const projects = defineCollection({
loader: glob({ pattern: "*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tech: z.array(z.string()).optional(),
    slug: z.string(),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
    demoLink: z.string().optional(),
    repoLink: z.string().optional()
  }),
});

export const collections = { projects };


    
    

