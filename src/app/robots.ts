import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site.config';
import { AEO_AI_CRAWLER_ALLOWLIST } from '@/lib/aeo-robots-allowlist';

export default function robots(): MetadataRoute.Robots {
  const aiCrawlerRules = AEO_AI_CRAWLER_ALLOWLIST.map((userAgent) => ({
    userAgent,
    allow: '/',
  }));

  return {
    rules: [
      ...aiCrawlerRules,
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/google'],
      },
      // AI crawlers for GEO/AEO optimization (2026)
      {
        userAgent: ['GPTBot', 'ChatGPT-User'],
        allow: '/',
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      {
        userAgent: ['PerplexityBot', 'Perplexity-AI'],
        allow: '/',
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
      },
      {
        userAgent: 'anthropic-ai',
        allow: '/',
      },
      {
        userAgent: 'Gemini',
        allow: '/',
      },
    ],
    host: siteConfig.url,
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
