import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import { visionTool } from "@sanity/vision"
import { schemaTypes } from "./schemaTypes"

/**
 * The Studio, i.e. the authoring app.
 *
 * It is a separate application from the site: it lives on
 * lorenzodefrancesco.sanity.studio, keeps its dependencies in
 * studio/package.json, and never enters the Next.js static export. The site
 * reads content from Sanity's API during `next build` and knows nothing about
 * this panel.
 */
export default defineConfig({
  name: "default",
  title: "Blog - Lorenzo De Francesco",

  projectId: "ez2cd1aj",
  dataset: "production",

  plugins: [
    structureTool(),
    // GROQ console, for checking a query before it goes into the site.
    visionTool({ defaultApiVersion: "2025-02-19" }),
  ],

  schema: {
    types: schemaTypes,
  },
})
