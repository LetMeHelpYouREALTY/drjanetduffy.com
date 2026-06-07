# SEO, GEO, and AEO Optimization - 2026 Best Practices

## Implementation Summary

This document outlines the comprehensive SEO optimization implemented for drjanduffy.com based on 2026 best practices for Search Engine Optimization (SEO), Generative Engine Optimization (GEO), and Answer Engine Optimization (AEO).

## Key Changes Implemented

### 1. Schema.org Structured Data (JSON-LD)

**Files Created:**
- `src/lib/components/Schema.svelte` - Global schema component
- `src/lib/components/FAQSchema.svelte` - FAQ schema component

**Schema Types Implemented:**
- ✅ **Person** - Dr. Janet Duffy profile with RealEstateAgent type
- ✅ **Organization** - Business entity with LocalBusiness type
- ✅ **RealEstateAgent** - Professional credentials and service areas
- ✅ **FAQPage** - Structured Q&A for AI extraction (AEO optimization)
- ✅ **WebSite** - Site-level schema with search action
- ✅ **BreadcrumbList** - Navigation context
- ✅ **ContactPage** - Contact information structured data

**Why This Matters:**
- JSON-LD is Google's preferred format (2026 standard)
- Enables rich snippets in search results
- 20-30% increase in click-through rates
- Critical for AI-powered search engines to cite your content

### 2. Geographic/Neighborhood-Level Optimization

**Research Finding:** 72% of real estate queries reference specific neighborhoods, not cities.

**Implementation:**
- Optimized for **Summerlin zip codes**: 89138, 89144, 89135
- Added neighborhood-specific keywords throughout content
- Included "West Summerlin" in titles and descriptions
- Created neighborhood expertise sections

**Service Area Structured Data:**
```json
"areaServed": [
  {"@type": "PostalAddress", "postalCode": "89138"},
  {"@type": "PostalAddress", "postalCode": "89144"},
  {"@type": "PostalAddress", "postalCode": "89135"}
]
```

### 3. Answer Engine Optimization (AEO)

**Strategy:** Structure content so AI engines cite it as authoritative source.

**Implementation:**
- Added FAQ sections on key pages (Home, About, Home Value)
- Structured FAQs with FAQPage schema markup
- Clear question-and-answer format
- Direct, concise answers optimized for AI extraction

**Research-Backed Benefits:**
- Structured pages earn 2.8x citation lift vs unstructured
- FAQ schema maps directly to how users query AI engines
- Positions site for ChatGPT, Claude, Perplexity, and other AI citations

### 4. Enhanced Meta Tags & SEO Elements

**Updated on All Pages:**
- Comprehensive title tags with keywords and location
- Meta descriptions optimized for 155-160 characters
- Open Graph tags for social media sharing
- Twitter Card tags
- Canonical URLs
- Geographic meta tags (geo.region, geo.placename, ICBM)

**Example Title Tag Structure:**
```html
<title>Dr. Janet Duffy - West Summerlin Luxury Real Estate | Las Vegas REALTOR®</title>
```

### 5. AI Crawler Permissions (robots.txt)

**Critical for GEO:** Allow AI/LLM crawlers to index content.

**Allowed Crawlers:**
- GPTBot (ChatGPT)
- Claude-Web (Anthropic)
- anthropic-ai
- PerplexityBot
- CCBot (Common Crawl)
- Applebot
- All traditional search engines

**Why This Matters:**
- 70%+ of users now use AI tools for real estate research
- GEO gets you **named in the answer**, not just ranked in results
- Traditional SEO = ranking on a list; GEO = being the answer

### 6. Dynamic XML Sitemap

**File:** `src/routes/sitemap.xml/+server.js`

**Features:**
- Auto-generated from route structure
- Proper priority weighting (1.0 for home, down to 0.3 for legal pages)
- Change frequency indicators
- Daily updates for property listings
- Submitted to search engines via robots.txt

### 7. E-E-A-T Signals

**Experience, Expertise, Authoritativeness, Trustworthiness:**

**Implemented:**
- Professional credentials displayed (CRS, ABR, GRI)
- 15+ years experience highlighted
- 150+ properties sold, $50M+ volume
- Client testimonials with specific details
- Berkshire Hathaway affiliation
- Contact information prominently displayed

### 8. Page-Specific Optimizations

#### Homepage (`/`)
- Hero section with primary keywords
- Neighborhood expertise section
- Stats/achievements for credibility
- FAQ section for AEO
- Direct property search integration

#### About Page (`/about`)
- ProfilePage schema
- Professional certifications
- Achievement metrics
- FAQ about qualifications
- E-E-A-T signals throughout

#### Home Value Page (`/home-value`)
- Service-specific FAQs
- Clear value proposition
- Trust signals
- CTA optimization

#### Contact Page (`/contact`)
- ContactPage schema
- Multiple contact methods
- Office hours structured data
- Geographic information

## Performance Expectations

Based on 2026 research and best practices:

### SEO Metrics
- **20-30% increase** in organic click-through rates (schema markup)
- **Improved rankings** for neighborhood-specific keywords
- **Rich snippets** in search results

### GEO/AEO Metrics
- **2.8x citation lift** from structured data
- **AI-powered search visibility** across ChatGPT, Claude, Perplexity
- **Featured in AI-generated answers** for Las Vegas real estate queries

### User Experience
- **Faster indexing** by search engines
- **Better social media previews** (Open Graph)
- **Clear information architecture** for both humans and AI

## Technical Implementation

### Schema Component Architecture

**Centralized Approach:**
```svelte
<!-- Global schema in +layout.svelte -->
<Schema />

<!-- Page-specific FAQs -->
<FAQSchema {faqs} />
```

**Benefits:**
- DRY (Don't Repeat Yourself) principle
- Consistent schema across all pages
- Easy updates and maintenance
- Type-safe with proper validation

### Mobile-First & Performance

- Lightweight schema components
- No render-blocking scripts
- JSON-LD loads in `<head>` without impacting performance
- Responsive design maintained

## Ongoing Maintenance

### Monthly Tasks
1. Update FAQ content based on user queries
2. Review schema markup for accuracy
3. Monitor Google Search Console for errors
4. Update service areas if expanding

### Quarterly Tasks
1. Review and update market statistics
2. Add new neighborhoods/areas served
3. Audit structured data with Google Rich Results Test
4. Update testimonials and achievements

### Annual Tasks
1. Major content refresh
2. Schema.org version updates
3. Comprehensive SEO audit
4. Competitor analysis

## Tools for Validation

1. **Google Rich Results Test:** https://search.google.com/test/rich-results
2. **Schema.org Validator:** https://validator.schema.org/
3. **Google Search Console:** Monitor structured data errors
4. **Bing Webmaster Tools:** Track Bing indexing
5. **Screaming Frog:** Technical SEO audit

## Sources & Research

### SEO Best Practices
- [Real Estate SEO Guide 2026](https://www.sierrainteractive.com/insights/blog/real-estate-seo/)
- [Schema Markup for Real Estate](https://eseospace.com/blog/schema-markup-for-real-estate-websites/)
- [Real Estate Schema Guide](https://jefflenney.com/real-estate/schema-markup-guide/)

### GEO (Generative Engine Optimization)
- [Real Estate SEO & GEO 2026](https://lseo.com/blog/search-engine-optimization/real-estate-seo/real-estate-seo-geo-a-real-estate-companys-guide-to-seo-and-geo-in-2026/)
- [GEO for Real Estate Agents](https://homebot.ai/blog/geo-real-estate-agents-ai-search)
- [Top Real Estate GEO Agencies](https://firstpagesage.com/seo-blog/the-top-real-estate-geo-aeo-agencies/)

### AEO (Answer Engine Optimization)
- [Answer Engine Optimization Guide 2026](https://cxl.com/blog/answer-engine-optimization-aeo-the-comprehensive-guide/)
- [Complete AEO Guide](https://www.frase.io/blog/what-is-answer-engine-optimization-the-complete-guide-to-getting-cited-by-ai)
- [AEO Trends 2026](https://blog.hubspot.com/marketing/answer-engine-optimization-trends)

### Schema.org Updates
- [Schema.org Release Notes](https://schema.org/docs/releases.html)
- [RealEstateAgent Schema](https://schema.org/RealEstateAgent)
- [RealEstateListing Schema](https://schema.org/RealEstateListing)

## Conclusion

This implementation represents a comprehensive approach to modern SEO that goes beyond traditional search engine optimization to include optimization for AI-powered search engines and answer engines. By structuring content properly and following 2026 best practices, drjanduffy.com is positioned to:

1. **Rank higher** in traditional search results
2. **Get cited** by AI engines like ChatGPT and Claude
3. **Appear in rich results** with enhanced search listings
4. **Capture neighborhood-specific traffic** (72% of real estate queries)
5. **Build authority** through E-E-A-T signals

The foundation is now in place for ongoing SEO success in the evolving search landscape of 2026 and beyond.

---

**Last Updated:** June 7, 2026
**Implemented By:** Claude Code Agent
**Schema.org Version:** 30.0 (March 2026)
