import { defineField, defineType } from "sanity"

/**
 * A blog category.
 *
 * Every category with at least one published post gets an archive page
 * (/blog/category/...). Empty categories generate nothing: an archive with no
 * posts on it is a page with no content.
 *
 * Keep them few and stable. Categories exist to orient a reader, not to label
 * every nuance — that is what headings inside a post are for.
 */
export const category = defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required().max(50),
      description:
        "As it reads on the site, e.g. 'Architecture'. Singular or plural, as long as it matches the others.",
    }),

    defineField({
      name: "slug",
      title: "URL slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      description:
        "The last part of the archive address: /blog/category/this-bit. Do not change it after publishing.",
      options: {
        source: "title",
        maxLength: 60,
        slugify: (input) =>
          input
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "")
            .slice(0, 60),
      },
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.max(300),
      description:
        "A line or two at the top of the archive, saying what belongs in this category. Left empty, the site generates a vaguer one.",
    }),
  ],

  preview: { select: { title: "title", subtitle: "description" } },
})
