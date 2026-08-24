import { defineArrayMember, defineType } from "sanity"

/**
 * The body of a post.
 *
 * Portable Text, not HTML. Blocks (paragraphs, headings, lists, images) are
 * composed here, and the site decides how they become markup, in exactly one
 * place (src/components/blog/ArticleBody.tsx). Practical upshot: no tag typed
 * into the CMS reaches the page, and restyling the blog never means rewriting
 * posts.
 *
 * Every type declared here needs a counterpart in that serializer — adding one
 * on only one side makes it invisible.
 */
export const blockContent = defineType({
  name: "blockContent",
  title: "Content",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      // No H1: the article title is the page's only h1. Jumping from H2 to H4
      // confuses screen readers, so the ladder has no missing rungs.
      styles: [
        { title: "Paragraph", value: "normal" },
        { title: "Section heading (H2)", value: "h2" },
        { title: "Subheading (H3)", value: "h3" },
        { title: "Sub-subheading (H4)", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [
        { title: "Bulleted list", value: "bullet" },
        { title: "Numbered list", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Bold", value: "strong" },
          { title: "Italic", value: "em" },
          { title: "Underline", value: "underline" },
          { title: "Code", value: "code" },
        ],
        annotations: [
          {
            name: "link",
            title: "External link",
            type: "object",
            fields: [
              {
                name: "href",
                title: "URL",
                type: "url",
                validation: (Rule) =>
                  Rule.required().uri({
                    // mailto and tel are needed for contact links; without this
                    // line Sanity rejects them as invalid.
                    scheme: ["http", "https", "mailto", "tel"],
                  }),
              },
              {
                name: "blank",
                title: "Open in a new tab",
                type: "boolean",
                initialValue: true,
              },
            ],
          },
          {
            name: "internalLink",
            title: "Link to another post",
            type: "object",
            fields: [
              {
                name: "reference",
                title: "Post",
                type: "reference",
                to: [{ type: "post" }],
                validation: (Rule) => Rule.required(),
              },
            ],
          },
        ],
      },
    }),

    defineArrayMember({
      type: "image",
      title: "Image",
      // `hotspot` picks the point that survives cropping: index cards crop to
      // 1:1 and would otherwise cut to the centre even when the subject is not.
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt text",
          type: "string",
          description:
            "What the image shows, for screen readers and search engines. Leave empty if purely decorative.",
        },
        {
          name: "caption",
          title: "Caption",
          type: "string",
          description: "Shown under the image. Optional.",
        },
      ],
    }),

    defineArrayMember({
      name: "callout",
      title: "Callout",
      type: "object",
      description: "A note or a warning, set apart from the main argument.",
      fields: [
        {
          name: "tone",
          title: "Tone",
          type: "string",
          options: {
            list: [
              { title: "Note", value: "note" },
              { title: "Warning", value: "warning" },
            ],
            layout: "radio",
          },
          initialValue: "note",
        },
        {
          name: "text",
          title: "Text",
          type: "text",
          rows: 3,
          validation: (Rule) => Rule.required(),
        },
      ],
      preview: { select: { title: "text", subtitle: "tone" } },
    }),

    defineArrayMember({
      name: "code",
      title: "Code block",
      type: "object",
      fields: [
        {
          name: "language",
          title: "Language",
          type: "string",
          description: "Optional, e.g. typescript, json, bash.",
        },
        {
          name: "code",
          title: "Code",
          type: "text",
          rows: 10,
          validation: (Rule) => Rule.required(),
        },
      ],
      preview: { select: { title: "code", subtitle: "language" } },
    }),

    defineArrayMember({
      name: "divider",
      title: "Divider",
      type: "object",
      // A Sanity object needs at least one field. A divider has nothing to
      // configure, so this one exists only to satisfy the schema and stays
      // hidden in the editor.
      fields: [{ name: "unused", type: "string", hidden: true }],
      preview: { prepare: () => ({ title: "— divider —" }) },
    }),
  ],
})
