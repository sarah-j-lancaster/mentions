This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Tests

```bash
npm run test

```

## Future optimisations:

- Data is not what I was expecting based off designs, mostly requires backend updates
  - Make mention data consistent for twitter
  - Add website image for photo
  - Description auditing (doesn't seem right in most cases)
  - Pagination
- Maybe link off to the mention in all cases? Ideally the card would be the clickable component but most descriptions contained links so I decided against it.
- Could use SASS to do media queries, currently decided against it as there is minimal styling
