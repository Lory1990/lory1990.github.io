import { defineCliConfig } from "sanity/cli"

// `sanity deploy` publishes the Studio to lorenzodefrancesco.sanity.studio.
// That is where posts get written — the site itself is a static export and
// ships no admin surface at all.
export default defineCliConfig({
  api: {
    projectId: "ez2cd1aj",
    dataset: "production",
  },
  // The hostname is claimed on the first deploy.
  studioHost: "lorenzodefrancesco",
  deployment: {
    // The deployed Studio application. Without it every `sanity deploy` stops
    // to ask which application to update.
    appId: "mo0mpfr7pcm3pkt98l4yrjoo",
    // Let the Studio pull Sanity's own updates, so nobody has to remember to
    // redeploy it for a patch release.
    autoUpdates: true,
  },
})
