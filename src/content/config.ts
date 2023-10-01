import { defineCollection, reference, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    author: reference("authors"),
    date: z.string(),
    featured: z.boolean(),
    tags: z.array(z.string()).optional(),
  }),
});

const authors = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    portfolio: z.string().url(),
  }),
});

export const collections = { posts, authors };
