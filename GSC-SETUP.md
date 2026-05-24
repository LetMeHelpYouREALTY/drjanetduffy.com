# Google Search Console setup — drjanetduffy.com

Use the **URL-prefix** or **Domain** property for `https://www.drjanetduffy.com` (recommended: URL prefix `https://www.drjanetduffy.com/`).

## 1. Verify ownership (HTML meta tag)

1. Open [Google Search Console](https://search.google.com/search-console).
2. Add property: `https://www.drjanetduffy.com/`.
3. Choose **HTML tag** verification.
4. Copy the `content="..."` value (not the full tag).
5. In **Vercel** → Project → Settings → Environment Variables, add:

   | Name | Value | Environments |
   |------|--------|----------------|
   | `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | `your-code-from-google` | Production (and Preview if you test there) |

6. Redeploy production.
7. View source on the homepage — confirm  
   `<meta name="google-site-verification" content="your-code" />`.
8. Click **Verify** in Search Console.

The old route `/google[verification_code]` is **noindex** and not in the sitemap. Verification is on every page via the root layout.

## 2. Submit sitemap

1. Search Console → **Sitemaps**.
2. Submit: `https://www.drjanetduffy.com/sitemap.xml`
3. Confirm status **Success** after the next crawl.

`robots.txt` (from `src/app/robots.ts`) already references this sitemap.

## 3. Canonical host (www + HTTPS)

- **Primary URL:** `https://www.drjanetduffy.com`
- Apex `drjanetduffy.com` redirects to www (308 in `vercel.json` + middleware).
- All page canonicals use `https://www.drjanetduffy.com/...`.

In Search Console, **Page indexing → Redirect error**: after deploy, click **Validate fix** if you still see apex/http examples.

**Vercel:** Domains → primary = `www.drjanetduffy.com`.  
**Cloudflare:** DNS only (gray cloud); no extra forwarding rules on apex/www.

## 4. Request indexing (priority URLs)

URL Inspection → test each → **Request indexing** (sparingly):

- `https://www.drjanetduffy.com/`
- `https://www.drjanetduffy.com/properties`
- `https://www.drjanetduffy.com/contact`
- `https://www.drjanetduffy.com/property-types/luxury-homes`
- `https://www.drjanetduffy.com/home-value`

## 5. Rich results / structured data

The site outputs JSON-LD on every page (`RealEstateAgent`, `LocalBusiness`, `WebSite`).

1. Test: [Rich Results Test](https://search.google.com/test/rich-results) with the homepage URL.
2. Fix any errors before requesting review in Search Console → **Enhancements**.

Homepage FAQ uses `FAQPage` schema in `src/app/page.tsx`.

## 6. Google Analytics (already wired)

Measurement ID: `G-CPD9RR8GTX` (in root layout). Link the GA4 property to Search Console (Admin → Search Console links).

## 7. Optional: better social preview image

Replace or add `public/og-image.jpg` (1200×630) and set `ogImage: '/og-image.jpg'` in `src/config/site.config.ts`.  
Until then, `favicon.png` is used for Open Graph.

## 8. Weekly checks

| Report | Action |
|--------|--------|
| Page indexing | Fix 404s, redirect errors, noindex mistakes |
| Sitemaps | Keep `sitemap.xml` success |
| Core Web Vitals | Monitor mobile LCP/CLS |
| HTTPS | All URLs should be HTTPS www |
| Manual actions | None expected |

## Code map

| File | Role |
|------|------|
| `src/lib/metadata.ts` | Canonical, OG/Twitter, verification |
| `src/app/robots.ts` | Crawl rules + sitemap URL |
| `src/app/sitemap.ts` | XML sitemap |
| `src/lib/sitemap-routes.ts` | Indexable paths |
| `src/lib/sitemap-exclusions.ts` | Paths omitted from sitemap |
| `src/lib/schema.ts` | Global JSON-LD |
| `vercel.json` | Apex → www 308 |
