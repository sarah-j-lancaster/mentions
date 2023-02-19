This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Deployed at:

[https://mentions.vercel.app/](https://mentions.vercel.app/)

## Getting Started

Create a .env file and add:
BEARER_TOKEN=XXXXXXXXXXXX

Then you can run the development server:

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
  - Make mention data consistent for twitter - BE could query twitter API for tweet content and author name
  - Add website image for photo thumbnail
  - Description auditing (most are just links with no context)
  - Pagination
  - "Match data" for highlighting in FE (algolia does it well as an example)
- Maybe link off to the mention in all cases? Ideally the card would be the clickable component but most descriptions contained links so I decided against it.
- Could use SASS to do media queries, currently decided against it as there is very minimal CSS
- Error handling for mentions call - maybe load app with error message and try again button?
