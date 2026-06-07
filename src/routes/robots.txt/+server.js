/**
 * Dynamic robots.txt Generator
 * SEO best practice: Properly configured robots.txt with sitemap reference
 */

export const prerender = true;

export async function GET() {
	const robotsTxt = `# Dr. Jan Duffy Real Estate - Robots.txt
# Updated: 2026

User-agent: *
Allow: /

# Sitemaps
Sitemap: https://drjanduffy.com/sitemap.xml

# Crawl Delay (optional, helps with server load)
Crawl-delay: 1

# Disallow admin and API routes
Disallow: /api/

# Allow all real estate content for maximum SEO visibility
Allow: /properties
Allow: /listings-list
Allow: /listings-embedded
Allow: /about
Allow: /contact
Allow: /home-value
Allow: /past-sales
Allow: /rentals

# Google-specific
User-agent: Googlebot
Allow: /

# Bing-specific
User-agent: Bingbot
Allow: /

# AI Search Engines (for AEO optimization)
User-agent: ChatGPT-User
Allow: /

User-agent: GPTBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: Google-Extended
Allow: /
`;

	return new Response(robotsTxt, {
		headers: {
			'Content-Type': 'text/plain',
			'Cache-Control': 'max-age=0, s-maxage=86400'
		}
	});
}
