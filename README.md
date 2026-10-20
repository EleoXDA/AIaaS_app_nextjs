# GenAIaaS (archived)

> **Archived learning project, not maintained.** I built this in August 2023 by following Code With Antonio's "Build a SaaS AI Platform with Next.js 13" tutorial (July 2023). It does not run as written any more: OpenAI retired DALL-E 2, which the image tool uses, and is shutting down `gpt-3.5-turbo`, which the chat and code tools use, on 23 October 2026. The old Vercel deployment no longer works, and there is no live demo.

![image](https://github.com/EleoXDA/AIaaS_app_nextjs/assets/27622683/a95f38c3-946a-482e-9fff-948bdbfd5c2b)

![image](https://github.com/EleoXDA/AIaaS_app_nextjs/assets/27622683/ee69e8ba-21fd-4944-8334-7bd2e1670ba9)

## What it is

A Next.js 13 (App Router) dashboard with five generators:

- conversation and code, through OpenAI
- image, through OpenAI
- music and video, through Replicate

Sign-in goes through Clerk. Each user gets 25 free generations, counted in a MySQL database through Prisma, and a Stripe subscription (EUR 20 a month) removes the limit.

## What I changed from the tutorial

Branding, EUR pricing, the 25-generation free limit, the landing page layout (including removing the placeholder testimonials) and a few layout fixes. The rest follows the tutorial.

## What the database stores

Only the Clerk user ID with its usage count and timestamps, and the Stripe customer, subscription and price IDs with the end of the current billing period. Names, emails and phone numbers are not stored in the app's database: Clerk holds them, and checkout passes the user's email to Stripe. The pages also load the Crisp support chat widget.

## Known problems

- **Video never worked.** `app/api/video/route.ts` ignores the prompt and always sends "An astronaut riding a horse", and the video page renders the result in an audio player.
- **Retired models.** The image tool calls OpenAI's default image model, DALL-E 2, which is shut down. The chat and code tools call `gpt-3.5-turbo`, which OpenAI shuts down on 23 October 2026.
- **Free limit.** The counter is read and then written back, so parallel requests can go past 25.
- **Stripe webhook.**
  - Cancellations are never synced.
  - A retried checkout event fails on the unique user ID.
- **Outdated dependencies.** Next.js 13.4 and Clerk v4 are from 2023 and have known security advisories.

## Running it locally

You need Node.js, a MySQL database, and accounts with Clerk, OpenAI, Replicate and Stripe. Set these environment variables:

- `DATABASE_URL`
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY`
- `OPENAI_API_KEY`
- `REPLICATE_API_TOKEN`
- `STRIPE_API_KEY` and `STRIPE_WEBHOOK_SECRET`
- `NEXT_PUBLIC_HOST`

Then run:

```
npm install
npx prisma db push
npm run dev
```

Expect the image tool to fail, and the chat and code tools to fail from 23 October 2026.
