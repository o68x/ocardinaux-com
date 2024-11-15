import { defineCollection, z } from "astro:content";
import { glob, file } from 'astro/loaders';

const sectionsCollection = defineCollection({
  loader: glob({pattern: "**\/[^_]*.mdoc", base: 'content/sections'}),
  schema: z.object({
    tagline: z.string().describe("The tagline of the section"),
    type: z.union([
      z.literal("section"),
      z.literal("footer"),
    ]).default("section"),
    draft: z.boolean().default(false),
  })
});

const screenshotsCollection = defineCollection({
  loader: file("content/screenshots/screenshots.json"),
  schema: ({ image }) =>z.object({
    id: z.string(),
    src: image(),
    url: z.string(),
    alt: z.string().optional(),
    backside: z.string(),
  })
})

export const collections = {
	sections: sectionsCollection,
  screenshots: screenshotsCollection,
};
