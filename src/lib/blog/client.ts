/**
 * Read access to the headless CMS (Sanity), over plain HTTP.
 *
 * No @sanity/client: the site is a static export, so these queries only ever
 * run during `next build`, and all they need is anonymous GROQ reads against a
 * public dataset. A hand-rolled GET is less code and no dependency.
 *
 * Host is `api.sanity.io`, not `apicdn.sanity.io`. The CDN can lag a
 * publication by a few seconds, and the build is kicked off by a webhook fired
 * at the moment of publication — through the CDN we would risk shipping the
 * previous version of the post that was just published.
 *
 * Failures throw instead of returning an empty list. A build that "succeeds"
 * with zero posts would silently delete every published article from the
 * deployed site; a red build leaves what is online untouched.
 */

// Project id and dataset are not secrets: both appear in plain text in every
// image URL served from Sanity's CDN. They live in the code, and the env vars
// exist only to point somewhere else (a test dataset, say) without editing it.
const DEFAULT_PROJECT_ID = "ez2cd1aj"
const DEFAULT_DATASET = "production"

const PROJECT_ID =
  (process.env.SANITY_PROJECT_ID ?? "").trim() || DEFAULT_PROJECT_ID
const DATASET = (process.env.SANITY_DATASET ?? "").trim() || DEFAULT_DATASET

// Pinned API date, so a future GROQ change cannot silently alter results.
const API_VERSION = "2025-02-19"

export const CMS = { projectId: PROJECT_ID, dataset: DATASET }

/**
 * Kill switch: with SANITY_PROJECT_ID=off the blog behaves like a blog with no
 * posts yet instead of failing the build. Useful to build offline.
 */
export function isCmsConfigured(): boolean {
  return PROJECT_ID.length > 0 && PROJECT_ID !== "off"
}

interface QueryResponse<T> {
  result: T
  ms: number
}

export async function query<T>(
  groq: string,
  params: Record<string, string | number | string[]> = {}
): Promise<T> {
  if (!isCmsConfigured()) {
    throw new Error(
      "CMS is switched off (SANITY_PROJECT_ID=off): call isCmsConfigured() before querying."
    )
  }

  const url = new URL(
    `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/query/${DATASET}`
  )
  url.searchParams.set("query", groq)
  // Published documents only. On a public dataset drafts are readable
  // anonymously too, and a draft must never reach the site.
  url.searchParams.set("perspective", "published")
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(`$${key}`, JSON.stringify(value))
  }

  const response = await fetch(url, {
    // Cached for seconds, not forever. The identical queries a build issues
    // (index, each post, the feed) still collapse into one request, but the
    // entry expires long before the next build: `force-cache` used to sit
    // here, which stores the response in .next/cache with a one-year TTL, and
    // since CI restores that directory between runs every rebuild triggered by
    // a publish re-served the content of the first build.
    //
    // `no-store` is not an option: it opts the route out of static rendering,
    // which `output: "export"` rejects.
    next: { revalidate: 5 },
    headers: { Accept: "application/json" },
  })

  if (!response.ok) {
    const detail = await response.text().catch(() => "")
    throw new Error(
      `CMS query failed (HTTP ${response.status}) on dataset "${DATASET}": ${detail.slice(0, 500)}`
    )
  }

  const payload = (await response.json()) as QueryResponse<T>
  return payload.result
}
