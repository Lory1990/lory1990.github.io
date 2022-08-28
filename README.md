# Personal Website

The purpose of this project is to develop a personal website with SEO with composable features.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

In order to run the development server, type on your terminal:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Structure

### Style
Almost all the style is managed by the [Material UI](https://mui.com/) package and the relative [`sx prop`](https://mui.com/system/getting-started/overview/) (More infomation about the usage of `sx prop` [here](https://mui.com/system/getting-started/usage/#why-use-mui-system)).

Whenever the `sx prop` is not able to _do the job_, alternatives such as [`makeStyles(...)`](https://mui.com/system/styles/basics/#hook-api), [`styled(...)(...)`](https://mui.com/system/styles/basics/#styled-components-api) (even tough they're deprecated) or plain CSS have been used.