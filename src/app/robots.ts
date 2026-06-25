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
    ],
    host: siteConfig.url,
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
