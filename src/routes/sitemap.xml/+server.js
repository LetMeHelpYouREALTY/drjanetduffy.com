/**
 * Dynamic sitemap generation for drjanduffy.com
 * Updated for 2026 SEO best practices with proper priority and changefreq
 */

export async function GET() {
	const baseUrl = 'https://drjanduffy.com';

	// Define all pages with their SEO metadata
	const pages = [
		{ url: '', priority: '1.0', changefreq: 'weekly' }, // Homepage
		{ url: '/about', priority: '0.9', changefreq: 'monthly' },
		{ url: '/contact', priority: '0.9', changefreq: 'monthly' },
		{ url: '/properties', priority: '0.9', changefreq: 'daily' },
		{ url: '/home-value', priority: '0.8', changefreq: 'weekly' },
		{ url: '/rentals', priority: '0.7', changefreq: 'daily' },
		{ url: '/past-sales', priority: '0.7', changefreq: 'weekly' },
		{ url: '/listings-list', priority: '0.6', changefreq: 'daily' },
		{ url: '/listings-embedded', priority: '0.6', changefreq: 'daily' },
		{ url: '/privacy', priority: '0.3', changefreq: 'yearly' },
		{ url: '/terms', priority: '0.3', changefreq: 'yearly' }
	];

	const lastmod = new Date().toISOString().split('T')[0];

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=3600, s-maxage=3600'
		}
	});
}
