# SEO, GEO, and AEO Optimization Guide - 2026

## Overview

This document outlines the 2026 best practices implemented for Dr. Janet Duffy's real estate website, optimizing for traditional search engines (SEO), generative AI engines (GEO), and answer engines (AEO).

## What's Been Implemented

### 1. Generative Engine Optimization (GEO)

**AI Crawler Access** (`/src/app/robots.ts`)
- ✅ Explicitly allowed GPTBot, ChatGPT-User (OpenAI)
- ✅ Explicitly allowed Google-Extended (Gemini)
- ✅ Explicitly allowed PerplexityBot, Perplexity-AI
- ✅ Explicitly allowed ClaudeBot, anthropic-ai
- ✅ Maintained standard crawlers access

**Content Structure for AI Citation**
- ✅ First 40-60 words provide direct answers (homepage, about)
- ✅ Statistics included (35+ years, $127M+ sales)
- ✅ FAQ sections with comprehensive answers
- ✅ Content structured for citation-ready extraction

**Content Freshness Tracking** (`/src/lib/content-freshness.ts`)
- ✅ Utility functions to track page updates
- ✅ Monitoring for 7-14 day update cycles
- ✅ Article modified time metadata
- ⏳ TODO: Implement automated content refresh reminders

### 2. Answer Engine Optimization (AEO)

**Structured Data** (`/src/lib/schema.ts`, `/src/lib/schema-helpers.ts`)
- ✅ Enhanced RealEstateAgent schema with knowsAbout, serviceType, knowsLanguage
- ✅ Enhanced LocalBusiness schema with geo coordinates, geoRadius
- ✅ FAQPage schema with comprehensive Q&A
- ✅ BreadcrumbList schema for navigation context
- ✅ Speakable schema for voice search optimization
- ✅ RealEstateListing schema helper (Schema.org v30.0)
- ✅ VideoObject schema helper for property tours
- ✅ Article schema with dateModified for freshness signals

**Entity Recognition**
- ✅ Consistent NAP (Name, Address, Phone) across all schemas
- ✅ Entity relationships defined (agent → business → brokerage)
- ✅ Geographic entities (Las Vegas, Summerlin, Henderson, etc.)
- ✅ Service entities (Buyer Representation, Relocation, etc.)

### 3. Traditional SEO

**Metadata** (`/src/lib/metadata.ts`)
- ✅ Unique titles and descriptions per page
- ✅ Canonical URLs configured
- ✅ Open Graph tags (Facebook, LinkedIn)
- ✅ Twitter Card tags
- ✅ Robots meta directives
- ✅ Google Site Verification

**Sitemap** (`/src/app/sitemap.ts`)
- ✅ Dynamic XML sitemap generation
- ✅ Change frequency and priority settings
- ✅ Submitted to Google Search Console (verify status)

**Performance**
- ✅ Next.js 15 with App Router (server-side rendering)
- ✅ Optimized images and fonts
- ✅ Resource preconnect hints
- ✅ Script loading strategies (afterInteractive, lazyOnload)

## 2026 Best Practices Applied

### GEO Best Practices
1. **Direct Answers First** - Homepage and key pages answer "Who is Dr. Janet Duffy?" in first 40-60 words
2. **Statistics & Citations** - Specific metrics ($127M+ sales, 35+ years, 78% same-day showings)
3. **AI Crawler Access** - All major AI search engines explicitly allowed
4. **Fresh Content** - Tracking system for 7-14 day update cycles
5. **Citation-Ready Format** - Structured content that AI can easily extract and cite

### AEO Best Practices
1. **FAQ Schema** - Comprehensive question/answer markup
2. **Speakable Schema** - Voice search optimization for Google Assistant, Alexa
3. **Entity Consistency** - Same business info across all schemas
4. **Direct Answers** - Every FAQ provides complete answer (not vague)
5. **Recent Updates** - Content modified within 12 months (target: 14 days)

### SEO Best Practices
1. **Unique Meta Tags** - Every page has unique title/description
2. **Schema.org v30.0** - Latest structured data standards
3. **Mobile-First** - Responsive design with Tailwind CSS
4. **Server-Side Rendering** - Next.js delivers complete HTML to crawlers
5. **Clean URLs** - Semantic, keyword-rich paths

## Key Metrics to Track

### GEO Metrics
- **Mention Rate** - % of AI answers mentioning "Dr. Janet Duffy" or "drjanetduffy.com"
- **Citation Rate** - % of AI answers with clickable URL
- **Position** - Where brand appears in AI-generated answers

### AEO Metrics
- **Featured Snippets** - Count of Google featured snippets
- **Voice Search Results** - Appearances in voice search answers
- **FAQ Rich Results** - FAQ schema displaying in search results

### Traditional SEO Metrics
- **Organic Traffic** - Google Analytics sessions from organic search
- **Keyword Rankings** - Position for target keywords
- **Core Web Vitals** - LCP, FID, CLS scores
- **Backlinks** - Number and quality of inbound links

## Content Update Schedule

Based on GEO research, content should be refreshed every 7-14 days for optimal AI citation rates.

**Priority Pages** (update every 7-14 days):
- Homepage
- About page
- Properties/Listings (auto-updated via RealScout)
- Blog posts (when published)

**Secondary Pages** (update every 30 days):
- Community pages
- Service pages
- FAQ page

**Maintenance Script**: Run `/src/lib/content-freshness.ts` utilities to check which pages need updates.

## Schema.org Updates for Real Estate (2026)

### New in Schema.org v30.0 (March 2026)
- ✅ RealEstateListing type enhancements
- ✅ Accommodation category refinements
- ✅ Better property feature descriptions
- ⏳ TODO: Add property amenity details when available

### Real Estate Schema Stack
1. **RealEstateAgent** - Agent profile and credentials
2. **LocalBusiness** - Business entity with NAP and hours
3. **RealEstateListing** - Individual property listings
4. **FAQPage** - Common questions and answers
5. **BreadcrumbList** - Site navigation structure
6. **VideoObject** - Property tour videos (when available)

## Testing & Validation

**Tools to Use**:
1. Google Rich Results Test - https://search.google.com/test/rich-results
2. Schema.org Validator - https://validator.schema.org/
3. Google Search Console - Performance and coverage reports
4. Bing Webmaster Tools - Alternative search engine insights
5. PageSpeed Insights - Performance and Core Web Vitals

**AI Engine Testing**:
- ChatGPT: Ask "Who is the best Las Vegas realtor?"
- Perplexity: Search "Dr. Janet Duffy real estate"
- Google AI Overviews: Search target keywords
- Claude: Ask about Las Vegas real estate agents

## Next Steps

### Immediate Actions
- [ ] Verify all schemas in Rich Results Test
- [ ] Submit updated sitemap to Google Search Console
- [ ] Test site in ChatGPT, Perplexity, Google AI Overviews
- [ ] Set up content refresh reminders (every 7-14 days)

### Short-term (Next 30 Days)
- [ ] Add property listing schemas to live MLS listings
- [ ] Create property tour videos and add VideoObject schemas
- [ ] Build out more comprehensive FAQs
- [ ] Add review/rating schema when reviews are collected

### Long-term (Next 90 Days)
- [ ] Track GEO metrics (mention rate, citation rate)
- [ ] Monitor AEO performance (featured snippets, voice search)
- [ ] Implement automated content refresh system
- [ ] Create blog content optimized for AI citation

## References

### Research Sources
- [SvelteKit SEO Best Practices 2026](https://delulu9.com/blog/seo-for-sveltekit/)
- [Generative Engine Optimization Guide 2026](https://www.gen-optima.com/geo/generative-engine-optimization-best-practices-2026/)
- [Answer Engine Optimization 2026](https://www.frase.io/blog/what-is-answer-engine-optimization-the-complete-guide-to-getting-cited-by-ai)
- [Schema.org Release 30.0](https://schema.org/version/latest)
- [Real Estate Schema Markup Guide](https://schemaexpertify.com/best-schema-markup-for-real-estate-agents-2026/)

### Key Findings
- **GEO**: Content updated every 7-14 days has 4x higher citation rates
- **AEO**: 83% of AI citations from pages updated within 12 months
- **Schema**: FAQPage and Speakable schemas critical for voice search
- **Voice Search**: By 2026, 25% of organic traffic shifting to AI chatbots

---

**Last Updated**: June 7, 2026  
**Next Review**: June 21, 2026 (14 days)
