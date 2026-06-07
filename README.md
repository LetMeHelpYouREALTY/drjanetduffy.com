# Dr. Janet Duffy Real Estate Website

Las Vegas luxury and relocation real estate website for Dr. Janet Duffy, REALTOR® with Berkshire Hathaway HomeServices Nevada Properties.

**Built with**: Next.js 15, React 19, TypeScript, Tailwind CSS  
**License**: S.0197614.LLC  
**Website**: https://www.drjanetduffy.com

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📊 SEO/GEO/AEO Optimization (2026)

This site is optimized for:
- **SEO** (Search Engine Optimization) - Traditional search engines
- **GEO** (Generative Engine Optimization) - AI search (ChatGPT, Perplexity, Gemini)
- **AEO** (Answer Engine Optimization) - Featured snippets, voice search

### Key Features

✅ **AI Crawler Access** - GPTBot, ChatGPT-User, Google-Extended, PerplexityBot, ClaudeBot  
✅ **Schema.org v30.0** - RealEstateAgent, LocalBusiness, RealEstateListing, FAQPage, BreadcrumbList  
✅ **Content Freshness** - 7-14 day update tracking for optimal AI citation rates  
✅ **Direct Answers** - First 40-60 words answer primary queries (GEO best practice)  
✅ **Speakable Schema** - Voice search optimization  
✅ **Statistics & Citations** - Data-driven content (35+ years, $127M+ sales)  

See [docs/SEO-GEO-AEO-2026.md](./docs/SEO-GEO-AEO-2026.md) for complete documentation.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage with enhanced GEO/AEO
│   ├── about/             # About page
│   ├── communities/       # Location pages (Henderson, Summerlin, etc.)
│   ├── contact/           # Contact page
│   ├── robots.ts          # Robots.txt with AI crawler access
│   └── sitemap.ts         # Dynamic XML sitemap
├── components/            # React components
├── lib/
│   ├── metadata.ts        # SEO metadata helpers
│   ├── schema.ts          # Global Schema.org JSON-LD
│   ├── schema-helpers.ts  # Schema generators (FAQ, Breadcrumb, Video)
│   ├── geo-metadata.ts    # Location-specific SEO/GEO helpers
│   └── content-freshness.ts # Content update tracking
├── config/
│   └── site.config.ts     # Site configuration (NAP, branding)
└── types/                 # TypeScript types
```

## 🎯 Key Pages

- **Homepage** (`/`) - Direct-answer format, FAQ schema, statistics
- **About** (`/about`) - Agent profile, credentials, experience
- **Communities** (`/communities/*`) - Location pages with Place schema
- **Properties** (`/properties`) - MLS listings via RealScout
- **Contact** (`/contact`) - Contact form with API endpoint

## 🔧 Development

### Environment Variables

Create `.env.local`:

```bash
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your_verification_code
```

### Content Freshness

GEO research shows content updated every 7-14 days gets 4x higher AI citation rates.

Check which pages need updates:

```typescript
import { getPagesNeedingUpdate } from '@/lib/content-freshness';
const needsUpdate = getPagesNeedingUpdate();
console.log('Pages needing refresh:', needsUpdate);
```

### Testing SEO/Schemas

- **Rich Results Test**: https://search.google.com/test/rich-results
- **Schema Validator**: https://validator.schema.org/
- **PageSpeed Insights**: Test performance and Core Web Vitals
- **AI Engine Tests**: Test in ChatGPT, Perplexity, Google AI Overviews

## 📈 Metrics to Track

### GEO Metrics
- Mention Rate (% of AI answers mentioning brand)
- Citation Rate (% with clickable URL)
- Position (where brand appears in answer)

### AEO Metrics
- Featured Snippets count
- Voice search appearances
- FAQ rich results

### Traditional SEO
- Organic traffic (Google Analytics)
- Keyword rankings
- Core Web Vitals (LCP, FID, CLS)
- Backlinks

## 🏗️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI**: React 19, Tailwind CSS 4
- **Language**: TypeScript
- **Fonts**: Inter, Playfair Display (Google Fonts)
- **Analytics**: Google Analytics 4
- **MLS Integration**: RealScout widgets
- **Scheduling**: Calendly embed
- **Deployment**: Vercel (recommended)

## 📚 Documentation

- [SEO/GEO/AEO Guide](./docs/SEO-GEO-AEO-2026.md) - Complete 2026 best practices
- [Schema Helpers](./src/lib/schema-helpers.ts) - JSON-LD schema generators
- [Metadata Helpers](./src/lib/metadata.ts) - Page metadata utilities
- [GEO Metadata](./src/lib/geo-metadata.ts) - Location-based optimization

## 🌐 External Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Schema.org Real Estate](https://schema.org/RealEstateAgent)
- [GEO Best Practices 2026](https://www.gen-optima.com/geo/generative-engine-optimization-best-practices-2026/)
- [AEO Complete Guide](https://www.frase.io/blog/what-is-answer-engine-optimization-the-complete-guide-to-getting-cited-by-ai)

## 📝 License

© 2026 Dr. Janet Duffy Real Estate. All rights reserved.

**Real Estate License**: S.0197614.LLC  
**Brokerage**: Berkshire Hathaway HomeServices Nevada Properties
