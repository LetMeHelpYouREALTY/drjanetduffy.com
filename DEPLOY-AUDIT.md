# Deploy audit — drjanetduffy.com

**Last updated:** 2026-05-24

## Git push → Vercel auto-deploy

| Check | Result |
|-------|--------|
| `origin` remote | `https://github.com/LetMeHelpYouREALTY/drjanetduffy.com.git` (HTTPS — push works) |
| Latest branch push | `feat/nextjs-migration` @ `f545773` (on GitHub) |
| GitHub repo webhooks (REST) | Empty array — Vercel uses **GitHub App**, not classic repo hooks |
| Vercel Git link (before fix) | **Disconnected** — pushes did not trigger builds |
| Vercel Git link (after fix) | `vercel git connect` → **Connected** to LetMeHelpYouREALTY/drjanetduffy.com |
| Deployments after `f545773` push | **None** (integration was broken at push time) |
| Production deploy age | **8+ days** — SvelteKit @ `276dd0a` on `main` |
| Vercel framework preset | **Next.js** (`vercel.json` + project settings; confirmed via `vercel project inspect`) |

### Production vs preview

- **Production** deploys only from the Vercel **Production Branch** (currently `main`).
- Pushes to `feat/nextjs-migration` should create **Preview** deployments once Git is connected and framework/build succeed.

## Fixes applied (2026-05-24)

1. **HTTPS remote** — avoids SSH permission denied for `genekellyboyle`.
2. **`vercel link`** + **`vercel git connect`** — reconnects project `prj_Ljxs6641byaocxP2m980CRt3xcNM` to the correct GitHub repo.

## Production go-live (2026-05-24)

- **`main`** fast-forwarded to `32ba81a` (Next.js 15.5.18) and pushed — should trigger a **Production** Vercel deploy.
- **Build config** in repo root `vercel.json`:
  - `"framework": "nextjs"`
  - `"buildCommand": "npm run build"`
  - `"installCommand": "npm install"`

## Optional dashboard checks

1. [Build settings](https://vercel.com/janet-duffys-projects/drjanetduffy.com/settings/general) — Framework should show **Next.js** (not SvelteKit).
2. Set Production env if missing: `NEXT_PUBLIC_CALENDLY_APPOINTMENT_URL`, etc. (see `.env.example`).

## Verify auto-deploy after reconnect

```bash
# After any push, within ~2 min:
vercel list drjanetduffy.com --scope janet-duffys-projects
```

Expect a new row with the commit SHA and branch name.

## Emergency CLI production deploy

```bash
cd C:\Users\geneb\Projects\drjanetduffy.com
git checkout feat/nextjs-migration
vercel link --project drjanetduffy.com --scope janet-duffys-projects --yes
vercel --prod
```

## Google Search Console — Redirect error (fixed 2026-05-24)

**Cause:** Duplicate apex → www rules in `next.config.ts` and `vercel.json` produced **307** hop(s) on `https://drjanetduffy.com/*` and multi-step chains from `http://drjanetduffy.com/`.

**Fix:**
- Single **308** redirect in `vercel.json` (`statusCode: 308` → `https://www.drjanetduffy.com/:path*`)
- Removed `redirects()` from `next.config.ts`
- Added `src/middleware.ts` as a 308 failsafe for bare `drjanetduffy.com`
- Removed root layout `canonical: '/'` (pages keep full www canonical URLs)
- Removed static `public/robots.txt` (use `src/app/robots.ts` only)

**After deploy — in Search Console:**
1. URL Inspection → test `https://www.drjanetduffy.com/property-types/luxury-homes` → should be **200**, indexed.
2. Validate fix on the **Redirect error** report.
3. Request indexing for key URLs if needed.

**Vercel dashboard:** [Domains](https://vercel.com/janet-duffys-projects/drjanetduffy.com/settings/domains) — set **www.drjanetduffy.com** as primary; `drjanetduffy.com` should redirect to www (not serve duplicate content).

## URLs

- Production: https://www.drjanetduffy.com (still old Svelte until new prod deploy)
- Vercel project: https://vercel.com/janet-duffys-projects/drjanetduffy.com
- Branch on GitHub: https://github.com/LetMeHelpYouREALTY/drjanetduffy.com/tree/feat/nextjs-migration
