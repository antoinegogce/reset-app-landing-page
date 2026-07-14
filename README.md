This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Environment Variables

Create a `.env.local` file with the following variables:

```bash
# Database (SQLite)
# - Local dev: file:./data/db.sqlite
# - Docker production: overridden to file:/app/data/db.sqlite (absolute path)
#   This ensures the DB is persisted via the volume mount in docker-compose.
DATABASE_URL=file:./data/db.sqlite

# Resend (waitlist contacts + confirmation email)
RESEND_API_KEY=re_xxxxx
RESEND_FROM_EMAIL="RESET <contact@reset.app>"
RESEND_REPLY_TO=contact@reset.app

# Upstash Redis (rate limiting)
UPSTASH_REDIS_REST_URL=https://xxxxx.upstash.io
UPSTASH_REDIS_REST_TOKEN=xxxxx
```

You can get Upstash credentials for free at [console.upstash.com](https://console.upstash.com/).

`RESEND_FROM_EMAIL` must use a domain verified in the [Resend dashboard](https://resend.com/domains). Until your domain is verified, you can test with `RESET <onboarding@resend.dev>` (emails only go to the address on your Resend account).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and import your GitHub repository
2. Add the environment variables in the Vercel dashboard (Settings → Environment Variables):
   - `DATABASE_URL`
   - `RESEND_API_KEY`
   - `RESEND_FROM_EMAIL`
   - `UPSTASH_REDIS_REST_URL`
   - `UPSTASH_REDIS_REST_TOKEN`
3. Deploy!

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
