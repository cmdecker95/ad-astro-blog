import { defineCollection, reference, z } from "astro:content";
import { format } from "date-fns";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    author: reference("authors"),
    date: z.string().transform((str) => format(new Date(str), "MMMM d, yyyy")),
    feature: z.boolean(),
    tags: z.array(z.string()),
    title: z.string(),
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
