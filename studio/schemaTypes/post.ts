import { defineField, defineType } from "sanity"

/**
 * A blog post.
 *
 * A post goes live when it is *published* here: publishing fires the webhook
 * that rebuilds and redeploys the site (see docs/blog.md). Drafts never leave
 * the Studio.
 */
export const post = defineType({
  name: "post",
  title: "Post",
  type: "document",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "seo", title: "Search & social" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      group: "content",
      validation: (Rule) => Rule.required().max(120),
      description:
        "Shown at the top of the post and in search results. Google displays roughly the first 60 characters in full.",
    }),

    defineField({
      name: "slug",
      title: "URL slug",
      type: "slug",
      group: "content",
      validation: (Rule) => Rule.required(),
      description:
        "The last part of the address: lorenzodefrancesco.it/blog/this-bit. Generate it from the title. Do NOT change it after publishing — anyone who saved or linked the old URL lands on a 404.",
      options: {
        source: "title",
        maxLength: 80,
        // Sanity's default slugifier leaves accented letters alone, which turn
        // into unreadable escapes in a URL. Normalise first, then strip.
        slugify: (input) =>
          input
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "")
            .slice(0, 80),
      },
    }),

    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      group: "content",
      validation: (Rule) => Rule.required().min(50).max(300),
      description:
        "Two lines on what the post argues. Used in the index, in search results and when the link is shared on LinkedIn — write it for someone who has not opened the page yet.",
    }),

    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      group: "content",
      validation: (Rule) => Rule.required(),
      initialValue: () => new Date().toISOString(),
      description:
        "Sets the order of posts in the index. Note this is not scheduling: a post goes live when you hit Publish, even with a future date.",
      options: { dateFormat: "YYYY-MM-DD", timeFormat: "HH:mm" },
    }),

    defineField({
      name: "updatedAt",
      title: "Updated at",
      type: "datetime",
      group: "content",
      description:
        "Only fill this in for a substantive revision of an already published post: the page then shows 'Updated ...' and Google knows the content was revised. Leave empty for a typo fix.",
      options: { dateFormat: "YYYY-MM-DD", timeFormat: "HH:mm" },
    }),

    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      group: "content",
      of: [{ type: "reference", to: [{ type: "category" }] }],
      validation: (Rule) => Rule.unique().max(3),
      description:
        "One or two, three at most. Each category gets its own archive page; the first two also show on the index card.",
    }),

    defineField({
      name: "coverImage",
      title: "Cover image",
      type: "image",
      group: "content",
      options: { hotspot: true },
      description:
        "Appears at the top of the post, in the index card and in social previews. Landscape, at least 1600px on the long edge. Use the hotspot to mark what must survive cropping.",
      fields: [
        {
          name: "alt",
          title: "Alt text",
          type: "string",
          description: "What the image shows, for screen readers.",
        },
        {
          name: "caption",
          title: "Caption",
          type: "string",
          description: "Shown under the image, e.g. the source. Optional.",
        },
      ],
    }),

    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
      group: "content",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "seo",
      title: "Search & social",
      type: "object",
      group: "seo",
      description:
        "Only worth touching when needed: left empty, the post's own title and excerpt are used, which is almost always right.",
      options: { collapsible: true, collapsed: false },
      fields: [
        {
          name: "metaTitle",
          title: "Search title",
          type: "string",
          validation: (Rule) => Rule.max(70),
          description:
            "For when the post title reads well but nobody searches for it. Put the phrasing people actually type here.",
        },
        {
          name: "metaDescription",
          title: "Search description",
          type: "text",
          rows: 2,
          validation: (Rule) => Rule.max(200),
        },
        {
          name: "noIndex",
          title: "Hide from search engines",
          type: "boolean",
          initialValue: false,
          description:
            "The post stays reachable for anyone with the link, but asks Google not to index it.",
        },
      ],
    }),
  ],

  orderings: [
    {
      title: "Published, newest first",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
    {
      title: "Title A-Z",
      name: "titleAsc",
      by: [{ field: "title", direction: "asc" }],
    },
  ],

  preview: {
    select: {
      title: "title",
      publishedAt: "publishedAt",
      media: "coverImage",
      category: "categories.0.title",
    },
    prepare: ({ title, publishedAt, media, category }) => {
      const date = publishedAt
        ? new Date(publishedAt).toISOString().slice(0, 10)
        : "no date"
      return {
        title,
        subtitle: category ? `${date} · ${category}` : date,
        media,
      }
    },
  },
})
