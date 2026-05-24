import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site.config';
import { sitemapRoutes } from '@/lib/sitemap-routes';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return sitemapRoutes.map((route) => ({
    url: route.path ? `${siteConfig.url}/${route.path}` : siteConfig.url,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
