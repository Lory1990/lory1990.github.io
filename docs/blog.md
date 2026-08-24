# The blog: how it works and how to switch it on

The site is a static export (`output: "export"` in `next.config.ts`): what ends
up on GitHub Pages is HTML, CSS, JS and images. Nothing runs there, so no CMS
can run on the site itself.

So the blog works like this:

```
Write on lorenzodefrancesco.sanity.studio  (Sanity Studio, hosted)
        │  hit Publish
        ▼
Sanity webhook  →  GitHub repository_dispatch (sanity-publish)
        ▼
GitHub Actions: pnpm build   (reads posts from Sanity's API)
        ▼
GitHub Pages  →  lorenzodefrancesco.it/blog/...   static HTML
```

The CMS is headless: it only serves content over an API, and pages are generated
at build time. What goes online is HTML and CSS like the rest of the site — no
JavaScript needed to read a post, no calls to the CMS from a reader's browser.

**The consequence that matters:** a post published in the Studio appears online
when the build finishes, not immediately. In practice a couple of minutes.

## Project coordinates

| | |
|---|---|
| Sanity organisation | `o5wpf39s3` |
| Project ID | `ez2cd1aj` |
| Dataset | `production` (public, anonymous read) |
| Hosted Studio | https://lorenzodefrancesco.sanity.studio |
| Project settings | https://www.sanity.io/manage/project/ez2cd1aj |

Project ID and dataset are not secrets — both appear in plain text in every
image URL served from Sanity's CDN — so they live in the code
(`src/lib/blog/client.ts`) rather than in GitHub secrets. The `SANITY_PROJECT_ID`
and `SANITY_DATASET` env vars exist only to point somewhere else without editing
it; `SANITY_PROJECT_ID=off` builds the site with no blog at all.

## Switching it on

### 1. Publish the Studio

The Studio is the only part with an admin UI, and Sanity hosts it for free. From
`studio/`:

```bash
cd studio
npm install
npm run deploy      # claims lorenzodefrancesco.sanity.studio and publishes
```

The first `npm run deploy` asks you to authenticate (`npx sanity login`). After
that it only needs rerunning when the schema in `studio/schemaTypes/` changes —
the Studio pulls Sanity's own updates by itself.

To work on the schema locally: `npm run dev` (Studio on http://localhost:3333,
pointed at the production dataset, so content edits are real) and
`npm run validate` to check the schema.

> The Studio deliberately keeps its own `package.json` and `npm` lockfile: it is
> a separate app, and its dependencies must not end up in the site's `pnpm`
> install or its bundle.

### 2. The webhook that rebuilds the site

**a) GitHub token.** At https://github.com/settings/personal-access-tokens create
a fine-grained token with:

- Repository access: only `Lory1990/lory1990.github.io`
- Permissions → Repository → **Contents: Read and write**
  (this is what enables `repository_dispatch`)
- Expiry: the longest you can accept. **When it expires the blog stops
  self-updating** — manual runs and pushes still deploy.

**b) Sanity webhook.** At
https://www.sanity.io/manage/project/ez2cd1aj/api/webhooks → *Create webhook*:

| Field | Value |
|---|---|
| Name | `Rebuild the site` |
| URL | `https://api.github.com/repos/Lory1990/lory1990.github.io/dispatches` |
| Dataset | `production` |
| Trigger on | Create, Update, Delete |
| Filter | `_type == "post" \|\| _type == "category"` |
| Projection | `{"event_type": "sanity-publish"}` |
| Status | Enabled |
| HTTP method | `POST` |
| API version | `v2025-02-19` |
| Headers | `Authorization: Bearer <token from step a>`<br>`Accept: application/vnd.github+json` |

*Projection* is the request body: `event_type` must be exactly
`sanity-publish`, the type declared in `.github/workflows/build-deploy.yml`.

**c) Check it.** Publish a test post and look at two things: the webhook's
*Attempt log* (expect `204`) and a new run appearing in
https://github.com/Lory1990/lory1990.github.io/actions.

If the webhook is missing or broken the site still updates on every push to
`main`, and the *Github Page Deploy* workflow can be run by hand.

## Writing a post

1. https://lorenzodefrancesco.sanity.studio → **Post** → Create.
2. Title, then generate the URL slug from it.
3. Excerpt: two lines for someone who has not opened the page. It is what shows
   in the index, in search results and in a LinkedIn preview.
4. Categories: one or two.
5. Cover: landscape, at least 1600px on the long edge, with alt text.
6. Body. Section headings start at "Section heading (H2)" — the h1 is already
   the post title.
7. Publish.

Two things worth knowing:

- **Never change a slug after publishing.** A live URL is one someone may have
  saved or linked; changing it breaks that. Titles can always be fixed, slugs
  cannot.
- **The published date does not schedule anything.** It only sets the order in
  the index. A post goes live when you hit Publish, future date or not — and a
  future-dated post that is never published never appears by itself.

To pull a post: Unpublish in the Studio. The next build removes the page from
the site and from the sitemap.

## How it is put together

```
src/lib/blog/
  client.ts     GROQ over HTTP to Sanity's API (no SDK)
  queries.ts    the queries: the only place that knows the CMS schema
  types.ts      the shape content takes for the rest of the app
  index.ts      the API pages use (getPosts, getPost, ...)
  image.ts      URLs and srcsets from Sanity's image CDN
  seo.ts        social images and the data structured data needs
  fixtures.ts   fake posts for local development
src/components/blog/
  ArticleBody.tsx   Portable Text to HTML: the markup is decided here
  BlogImage.tsx     <img> with a srcset from the CDN
  PostCard.tsx      index preview
  NoPosts.tsx       empty state
src/data/blog.ts    BlogPosting / CollectionPage graphs, tied to person.ts by @id
src/app/blog/
  page.tsx                  /blog
  [slug]/page.tsx           /blog/post-name
  category/[slug]/page.tsx  /blog/category/category-name
  rss.xml/route.ts          /blog/rss.xml
studio/                     the CMS: separate project, never part of the site
```

Pages import from `src/lib/blog` and nothing deeper: they know neither GROQ nor
Sanity. Article typography lives in `src/app/globals.css` under `.article`,
because that markup comes from a serializer and cannot carry Tailwind utilities
element by element.

`/blog` is also wired into `src/data/site.ts`: the nav entry, and the
`contactFormRules` entries — without those the shared `ContactSection` renders
nothing on blog pages.

### Local development without the CMS

```bash
BLOG_FIXTURES=1 pnpm dev
```

Renders the blog with two fake posts (`src/lib/blog/fixtures.ts`), handy for
working on layout and styles. The variable is never set in CI, so it cannot
reach production.

### Three decisions worth not undoing

**A failed CMS query fails the build.** `src/lib/blog/client.ts` throws instead
of returning an empty list. A build that "succeeds" with zero posts — a network
blip, an expired token, a wrong dataset — would publish a site with every
article silently deleted. A red build leaves what is online untouched.

**Queries hit `api.sanity.io`, not `apicdn.sanity.io`.** The CDN can lag a
publication by a few seconds, and the build starts at the moment of publication:
through the CDN we would risk shipping the previous version of the post that was
just published.

**There is a reserved `no-posts-yet` page.** With `output: "export"` Next.js
aborts the build if a dynamic route generates no page at all, which is exactly
the state of `/blog/[slug]` and `/blog/category/[slug]` while the CMS is empty.
That page is `noindex`, excluded from the sitemap and linked from nowhere, and it
stops being generated as soon as a real post exists.
