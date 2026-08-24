# Personal Website

The purpose of this project is to develop a personal website with SEO with composable features.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Before running the development server, install the packages by typing on your terminal:

```bash
npm install
# or
yarn install
```

In order to run the development server, type on your terminal:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Storybook

In order to run storybook, type on your terminal:

```bash
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006) with your browser to see the result.

## Blog

Posts live in a headless CMS (Sanity) and become static pages at build time. The
authoring Studio is hosted at
[lorenzodefrancesco.sanity.studio](https://lorenzodefrancesco.sanity.studio) and
lives in `studio/` as a separate project with its own dependencies.

Setup, the rebuild webhook, and notes for writing: **[docs/blog.md](docs/blog.md)**.

To work on the blog locally without the CMS:

```bash
BLOG_FIXTURES=1 pnpm dev
```

## Troubleshooting

If storybook dies not run, type on your terminal:

```bash
export NODE_OPTIONS=--openssl-legacy-provider
npm run storybook
```
