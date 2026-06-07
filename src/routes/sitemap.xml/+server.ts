export async function GET() {
	const baseUrl = 'https://drjanduffy.com';
	const today = new Date().toISOString().split('T')[0];

	const pages = [
		{ url: '', changefreq: 'daily', priority: '1.0', lastmod: today },
		{ url: '/about', changefreq: 'monthly', priority: '0.8', lastmod: today },
		{ url: '/contact', changefreq: 'monthly', priority: '0.9', lastmod: today },
		{ url: '/properties', changefreq: 'daily', priority: '0.9', lastmod: today },
		{ url: '/home-value', changefreq: 'weekly', priority: '0.8', lastmod: today },
		{ url: '/rentals', changefreq: 'daily', priority: '0.7', lastmod: today },
		{ url: '/past-sales', changefreq: 'weekly', priority: '0.6', lastmod: today },
		{ url: '/listings-list', changefreq: 'daily', priority: '0.7', lastmod: today },
		{ url: '/listings-embedded', changefreq: 'daily', priority: '0.7', lastmod: today },
		{ url: '/quotes', changefreq: 'monthly', priority: '0.5', lastmod: today },
		{ url: '/privacy', changefreq: 'yearly', priority: '0.3', lastmod: today },
		{ url: '/terms', changefreq: 'yearly', priority: '0.3', lastmod: today }
	];

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${pages.map(page => `	<url>
		<loc>${baseUrl}${page.url}</loc>
		<lastmod>${page.lastmod}</lastmod>
		<changefreq>${page.changefreq}</changefreq>
		<priority>${page.priority}</priority>
	</url>`).join('\n')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
}
