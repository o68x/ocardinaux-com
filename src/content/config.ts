import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders';

const sectionsCollection = defineCollection({
  loader: glob({pattern: "**\/[^_]*.mdoc", base: 'content/sections'}),
  schema: z.object({
    tagline: z.string().describe("The tagline of the section"),
    type: z.literal("section").default("section"),
    draft: z.boolean().default(false),
  })
})

export const collections = {
	sections: sectionsCollection,
};
