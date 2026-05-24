# SvelteKit → Next.js 15 migration

## Completed

1. **Git remote** — `origin` → `git@github.com:LetMeHelpYouREALTY/drjanetduffy.com.git`
2. **Fresh clone** — `C:\Users\geneb\Projects\drjanetduffy.com` on branch `feat/nextjs-migration`
3. **Next.js App Router** — 92 static routes, production build passing

## Structure

| Path | Purpose |
|------|---------|
| `src/app/` | Next.js routes |
| `src/components/` | React layout, RealScout, forms |
| `src/config/site.config.ts` | NAP, RealScout agent ID, GBP-aligned data |
| `src/lib/schema.ts` | Global JSON-LD |
| `legacy-sveltekit/` | Archived SvelteKit source (reference only) |
| `scripts/generate-pages.mjs` | Regenerates inner pages from legacy `+page.svelte` metadata |

## Commands

```bash
npm run dev          # local dev
npm run build        # generate pages + vercel build equivalent
npm run generate:pages
```

## Deploy (Vercel)

- Framework: **Next.js**
- Build command: `npm run build`
- Output: default (`.next`)
- Use **DNS only** (gray cloud) on Cloudflare — do not orange-cloud proxy to Vercel

## Follow-up (content parity)

Migrated inner pages use SEO metadata + lead copy from legacy files. Long-form Svelte markup can be ported page-by-page into dedicated `page.tsx` files or MDX under `src/content/`.

Priority ports: `/communities/summerlin`, `/properties`, `/home-value`, `/faq` (full legacy HTML).

## CRM / lead capture (no HTML forms)

| Source | CRM |
|--------|-----|
| **RealScout** (search, saves, alerts) | Follow Up Boss via RealScout + Zapier |
| **Calendly** (all scheduling) | Follow Up Boss via Calendly native integration |

Contact forms are **removed**. `/api/contact` returns `410` with Calendly URL. See `calendly-no-contact-forms.mdc` in Cursor rules.
