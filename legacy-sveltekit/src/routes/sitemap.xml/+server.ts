import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

const siteUrl = 'https://www.drjanetduffy.com'; // Update with your actual domain

const routes = [
	// Main Pages
	{ url: '', priority: '1.0', changefreq: 'weekly' },
	{ url: 'get-started', priority: '0.9', changefreq: 'weekly' },
	{ url: 'properties', priority: '0.9', changefreq: 'daily' },
	{ url: 'home-value', priority: '0.8', changefreq: 'monthly' },
	{ url: 'rentals', priority: '0.8', changefreq: 'weekly' },
	{ url: 'blog', priority: '0.7', changefreq: 'weekly' },
	{ url: 'about', priority: '0.6', changefreq: 'monthly' },
	{ url: 'services', priority: '0.8', changefreq: 'monthly' },
	{ url: 'neighborhoods', priority: '0.7', changefreq: 'monthly' },
	{ url: 'testimonials', priority: '0.7', changefreq: 'monthly' },
	{ url: 'market-insights', priority: '0.7', changefreq: 'weekly' },
	{ url: 'contact', priority: '0.7', changefreq: 'monthly' },
	{ url: 'faq', priority: '0.6', changefreq: 'monthly' },
	{ url: 'resources', priority: '0.7', changefreq: 'monthly' },
	{ url: 'first-time-buyers', priority: '0.7', changefreq: 'monthly' },
	{ url: 'relocation', priority: '0.7', changefreq: 'monthly' },
	{ url: 'investment-guide', priority: '0.7', changefreq: 'monthly' },
	{ url: 'buying-guide', priority: '0.7', changefreq: 'monthly' },
	{ url: 'selling-guide', priority: '0.7', changefreq: 'monthly' },
	{ url: 'mortgage-calculator', priority: '0.6', changefreq: 'monthly' },
	{ url: 'resources/school-districts', priority: '0.7', changefreq: 'monthly' },
	{ url: 'resources/moving-checklist', priority: '0.6', changefreq: 'monthly' },
	{ url: 'resources/home-staging', priority: '0.7', changefreq: 'monthly' },
	{ url: 'resources/market-reports', priority: '0.8', changefreq: 'weekly' },
	{ url: 'resources/rent-vs-buy', priority: '0.6', changefreq: 'monthly' },
	{ url: 'resources/closing-costs-calculator', priority: '0.6', changefreq: 'monthly' },
	{ url: 'resources/home-inspection-guide', priority: '0.7', changefreq: 'monthly' },
	{ url: 'resources/real-estate-glossary', priority: '0.6', changefreq: 'monthly' },
	
	// Community Pages
	{ url: 'communities/summerlin', priority: '0.9', changefreq: 'weekly' },
	{ url: 'communities/skye-canyon', priority: '0.9', changefreq: 'weekly' },
	{ url: 'communities/centennial-hills', priority: '0.9', changefreq: 'weekly' },
	{ url: 'communities/henderson', priority: '0.8', changefreq: 'weekly' },
	{ url: 'communities/green-valley', priority: '0.8', changefreq: 'weekly' },
	{ url: 'communities/north-las-vegas', priority: '0.8', changefreq: 'weekly' },
	{ url: 'communities/boulder-city', priority: '0.8', changefreq: 'weekly' },
	{ url: 'communities/seven-hills', priority: '0.8', changefreq: 'weekly' },
	{ url: 'communities/southern-highlands', priority: '0.8', changefreq: 'weekly' },
	{ url: 'communities/mountains-edge', priority: '0.8', changefreq: 'weekly' },
	{ url: 'communities/anthem', priority: '0.8', changefreq: 'weekly' },
	
	// Property Type Pages
	{ url: 'property-types/luxury-homes', priority: '0.8', changefreq: 'weekly' },
	{ url: 'property-types/condos', priority: '0.8', changefreq: 'weekly' },
	{ url: 'property-types/single-family', priority: '0.8', changefreq: 'weekly' },
	{ url: 'property-types/townhomes', priority: '0.8', changefreq: 'weekly' },
	{ url: 'property-types/new-construction', priority: '0.8', changefreq: 'weekly' },
	{ url: 'property-types/gated-communities', priority: '0.8', changefreq: 'weekly' },
	{ url: 'property-types/golf-communities', priority: '0.8', changefreq: 'weekly' },
	{ url: 'property-types/55-plus-communities', priority: '0.8', changefreq: 'weekly' },
	{ url: 'property-types/foreclosures', priority: '0.7', changefreq: 'weekly' },
	{ url: 'property-types/short-sales', priority: '0.7', changefreq: 'weekly' },
	
	// Property Search Pages
	{ url: 'listings-embedded', priority: '0.8', changefreq: 'daily' },
	{ url: 'listings-list', priority: '0.8', changefreq: 'daily' },
	{ url: 'past-sales', priority: '0.7', changefreq: 'weekly' },
	
	// Community Pages - Major Areas (removed non-existent pages, kept in sitemap for future)
	// Note: These pages don't exist yet, so they're commented out to prevent 404 errors
	// { url: 'communities/summerlin', priority: '0.8', changefreq: 'monthly' },
	// { url: 'communities/henderson', priority: '0.8', changefreq: 'monthly' },
	// { url: 'communities/green-valley', priority: '0.7', changefreq: 'monthly' },
	// { url: 'communities/north-las-vegas', priority: '0.7', changefreq: 'monthly' },
	// { url: 'communities/boulder-city', priority: '0.6', changefreq: 'monthly' },
	// { url: 'communities/seven-hills', priority: '0.6', changefreq: 'monthly' },
	// { url: 'communities/southern-highlands', priority: '0.6', changefreq: 'monthly' },
	// { url: 'communities/mountains-edge', priority: '0.6', changefreq: 'monthly' },
	// { url: 'communities/anthem', priority: '0.6', changefreq: 'monthly' },
	// Additional community pages (commented out until pages are created)
	// { url: 'communities/skye-canyon', priority: '0.6', changefreq: 'monthly' },
	// { url: 'communities/green-valley-ranch', priority: '0.6', changefreq: 'monthly' },
	// { url: 'communities/aliante', priority: '0.5', changefreq: 'monthly' },
	// { url: 'communities/desert-shores', priority: '0.5', changefreq: 'monthly' },
	// { url: 'communities/eldorado', priority: '0.5', changefreq: 'monthly' },
	// { url: 'communities/inspirada', priority: '0.5', changefreq: 'monthly' },
	// { url: 'communities/nevada-trails', priority: '0.5', changefreq: 'monthly' },
	// { url: 'communities/peccole-ranch', priority: '0.5', changefreq: 'monthly' },
	// { url: 'communities/providence', priority: '0.5', changefreq: 'monthly' },
	// { url: 'communities/rhodes-ranch', priority: '0.5', changefreq: 'monthly' },
	// { url: 'communities/silverado-ranch', priority: '0.5', changefreq: 'monthly' },
	// { url: 'communities/spring-valley', priority: '0.5', changefreq: 'monthly' },
	// { url: 'communities/the-lakes', priority: '0.5', changefreq: 'monthly' },
	// { url: 'communities/tuscany-village', priority: '0.5', changefreq: 'monthly' },
	// { url: 'communities/westwood', priority: '0.5', changefreq: 'monthly' },
	// { url: 'communities/the-palisades', priority: '0.5', changefreq: 'monthly' },
	
            // Property Type Pages - Removed non-existent pages, use query parameters on /properties instead
            
	// Service Pages (main services page already listed above)
	{ url: 'services/buyer-representation', priority: '0.7', changefreq: 'monthly' },
	{ url: 'services/senior-housing', priority: '0.7', changefreq: 'monthly' },
	{ url: 'services/military-relocation', priority: '0.7', changefreq: 'monthly' },
	{ url: 'services/seller-representation', priority: '0.7', changefreq: 'monthly' },
	{ url: 'services/pricing-strategy', priority: '0.7', changefreq: 'monthly' },
	{ url: 'services/distressed-properties', priority: '0.7', changefreq: 'monthly' },
	{ url: 'services/luxury-homes', priority: '0.7', changefreq: 'monthly' },
	{ url: 'services/resort-properties', priority: '0.7', changefreq: 'monthly' },
	{ url: 'services/eco-friendly-homes', priority: '0.7', changefreq: 'monthly' },
	{ url: 'services/international-property', priority: '0.7', changefreq: 'monthly' },
	{ url: 'services/residential-specialist', priority: '0.7', changefreq: 'monthly' },
	{ url: 'services/commercial-real-estate', priority: '0.7', changefreq: 'monthly' },
	{ url: 'services/commercial-investment', priority: '0.7', changefreq: 'monthly' },
	{ url: 'services/commercial-consulting', priority: '0.7', changefreq: 'monthly' },
	{ url: 'services/residential-appraisal', priority: '0.7', changefreq: 'monthly' },
	{ url: 'services/property-management', priority: '0.7', changefreq: 'monthly' },
	{ url: 'services/real-estate-investing', priority: '0.7', changefreq: 'monthly' },
	{ url: 'services/land-investment', priority: '0.7', changefreq: 'monthly' },
	{ url: 'services/smart-home-technology', priority: '0.7', changefreq: 'monthly' },
	{ url: 'services/digital-marketing', priority: '0.7', changefreq: 'monthly' },
	{ url: 'services/social-media-marketing', priority: '0.7', changefreq: 'monthly' },
	{ url: 'services/inside-sales', priority: '0.7', changefreq: 'monthly' },
	{ url: 'services/general-appraisal', priority: '0.7', changefreq: 'monthly' },
	{ url: 'services/inclusive-real-estate', priority: '0.7', changefreq: 'monthly' },
	{ url: 'services/negotiation-expertise', priority: '0.7', changefreq: 'monthly' },
	{ url: 'services/mortgage-guidance', priority: '0.7', changefreq: 'monthly' },
	{ url: 'services/real-estate-education', priority: '0.7', changefreq: 'monthly' },
	
	// Legal/Info Pages
	{ url: 'privacy', priority: '0.3', changefreq: 'yearly' },
	{ url: 'terms', priority: '0.3', changefreq: 'yearly' },
	{ url: 'quotes', priority: '0.4', changefreq: 'monthly' },
	{ url: 'sitemap', priority: '0.5', changefreq: 'monthly' }
];

export const GET: RequestHandler = async () => {
	const lastmod = new Date().toISOString().split('T')[0];
	
	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${routes.map(route => `  <url>
    <loc>${siteUrl}/${route.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'public, max-age=3600'
		}
	});
};

