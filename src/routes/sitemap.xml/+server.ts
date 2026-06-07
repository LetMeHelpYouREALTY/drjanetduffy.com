/**
 * Dynamic XML Sitemap Generator
 * 2026 SEO best practices - helps search engines and AI crawlers discover content
 */

import type { RequestHandler } from './$types';

const site = 'https://drjanduffy.com';

// Define all pages with priority and change frequency
const pages = [
	{ url: '', priority: 1.0, changefreq: 'weekly' }, // Homepage
	{ url: '/about', priority: 0.8, changefreq: 'monthly' },
	{ url: '/contact', priority: 0.9, changefreq: 'monthly' },
	{ url: '/properties', priority: 0.9, changefreq: 'daily' },
	{ url: '/summerlin', priority: 0.9, changefreq: 'monthly' }, // Neighborhood guide for local SEO
	{ url: '/past-sales', priority: 0.7, changefreq: 'weekly' },
	{ url: '/rentals', priority: 0.7, changefreq: 'weekly' },
	{ url: '/home-value', priority: 0.8, changefreq: 'monthly' },
	{ url: '/listings-list', priority: 0.8, changefreq: 'daily' },
	{ url: '/listings-embedded', priority: 0.7, changefreq: 'daily' },
	{ url: '/privacy', priority: 0.3, changefreq: 'yearly' },
	{ url: '/terms', priority: 0.3, changefreq: 'yearly' }
];

export const GET: RequestHandler = async () => {
	const lastmod = new Date().toISOString().split('T')[0]; // Current date in YYYY-MM-DD format

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${pages
	.map(
		(page) => `  <url>
    <loc>${site}${page.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=3600, s-maxage=3600'
		}
	});
};
