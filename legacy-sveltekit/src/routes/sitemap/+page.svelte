<script>
	import { ChevronRight, ExternalLink } from 'lucide-svelte';
	
	// Updated sitemap page with all current routes
	const pages = [
		// Main Pages
		{ url: '/', title: 'Home', description: 'Luxury Las Vegas Real Estate Expert', category: 'Main' },
		{ url: '/properties', title: 'Properties', description: 'Browse available properties', category: 'Main' },
		{ url: '/home-value', title: 'Home Value', description: 'Get your free home valuation', category: 'Services' },
		{ url: '/rentals', title: 'Rentals', description: 'Luxury rental properties', category: 'Properties' },
		{ url: '/blog', title: 'Blog', description: 'Real estate news and insights', category: 'Resources' },
		{ url: '/about', title: 'About', description: 'Learn about Dr. Janet Duffy', category: 'Main' },
		{ url: '/services', title: 'Services', description: 'Comprehensive real estate solutions', category: 'Services' },
		{ url: '/neighborhoods', title: 'Neighborhoods', description: 'Popular Las Vegas neighborhoods', category: 'Communities' },
		{ url: '/testimonials', title: 'Testimonials', description: 'Client testimonials and reviews', category: 'Main' },
		{ url: '/market-insights', title: 'Market Insights', description: 'Las Vegas real estate market statistics', category: 'Resources' },
		{ url: '/contact', title: 'Contact', description: 'Get in touch with us', category: 'Main' },
		{ url: '/faq', title: 'FAQ', description: 'Frequently asked questions', category: 'Resources' },
		{ url: '/resources', title: 'Resources', description: 'Real estate guides and resources', category: 'Resources' },
		{ url: '/first-time-buyers', title: 'First-Time Buyers', description: 'Guide for first-time homebuyers', category: 'Resources' },
		{ url: '/relocation', title: 'Relocation', description: 'Moving to Las Vegas guide', category: 'Resources' },
		{ url: '/investment-guide', title: 'Investment Guide', description: 'Real estate investment guide', category: 'Resources' },
		{ url: '/buying-guide', title: 'Buying Guide', description: 'Complete home buying guide', category: 'Resources' },
		{ url: '/selling-guide', title: 'Selling Guide', description: 'Complete home selling guide', category: 'Resources' },
		{ url: '/mortgage-calculator', title: 'Mortgage Calculator', description: 'Calculate your monthly mortgage payment', category: 'Resources' },
		{ url: '/resources/school-districts', title: 'School Districts', description: 'Las Vegas area schools and districts', category: 'Resources' },
		{ url: '/resources/moving-checklist', title: 'Moving Checklist', description: 'Complete moving timeline and tasks', category: 'Resources' },
		{ url: '/resources/home-staging', title: 'Home Staging Guide', description: 'Maximize appeal with staging tips', category: 'Resources' },
		{ url: '/resources/market-reports', title: 'Market Reports', description: 'Detailed quarterly market reports', category: 'Resources' },
		
		// Communities
		{ url: '/communities/summerlin', title: 'Summerlin Real Estate', description: 'Luxury master-planned community', category: 'Communities' },
		{ url: '/communities/henderson', title: 'Henderson Real Estate', description: 'Family-friendly community', category: 'Communities' },
		{ url: '/communities/green-valley', title: 'Green Valley Real Estate', description: 'Established Henderson community', category: 'Communities' },
		{ url: '/communities/north-las-vegas', title: 'North Las Vegas Real Estate', description: 'Affordable housing and growth', category: 'Communities' },
		{ url: '/communities/boulder-city', title: 'Boulder City Real Estate', description: 'Small town charm with Lake Mead access', category: 'Communities' },
		{ url: '/communities/seven-hills', title: 'Seven Hills Real Estate', description: 'Upscale community with custom luxury homes', category: 'Communities' },
		{ url: '/communities/southern-highlands', title: 'Southern Highlands Real Estate', description: 'Golf course living and resort amenities', category: 'Communities' },
		{ url: '/communities/mountains-edge', title: 'Mountains Edge Real Estate', description: 'Family-friendly master-planned community', category: 'Communities' },
		{ url: '/communities/anthem', title: 'Anthem Real Estate', description: 'Premier golf and country club community', category: 'Communities' },
		
		// Property Types
		{ url: '/property-types/luxury-homes', title: 'Luxury Homes', description: 'Exclusive luxury properties', category: 'Properties' },
		{ url: '/property-types/condos', title: 'Condos & Townhomes', description: 'Affordable condos and townhomes', category: 'Properties' },
		{ url: '/property-types/single-family', title: 'Single Family Homes', description: 'Spacious single family homes', category: 'Properties' },
		{ url: '/property-types/townhomes', title: 'Townhomes', description: 'Low-maintenance townhomes', category: 'Properties' },
		{ url: '/property-types/new-construction', title: 'New Construction', description: 'Brand new homes', category: 'Properties' },
		{ url: '/property-types/gated-communities', title: 'Gated Communities', description: 'Secure gated communities', category: 'Properties' },
		{ url: '/property-types/golf-communities', title: 'Golf Communities', description: 'Golf course communities', category: 'Properties' },
		{ url: '/property-types/55-plus-communities', title: '55+ Communities', description: 'Active adult communities', category: 'Properties' },
		{ url: '/property-types/foreclosures', title: 'Foreclosures', description: 'Foreclosure properties', category: 'Properties' },
		{ url: '/property-types/short-sales', title: 'Short Sales', description: 'Short sale properties', category: 'Properties' },
		
		// Property Search
		{ url: '/listings-embedded', title: 'Property Grid View', description: 'View properties in grid format', category: 'Properties' },
		{ url: '/listings-list', title: 'Property List View', description: 'View properties in list format', category: 'Properties' },
		{ url: '/past-sales', title: 'Past Sales', description: 'View past sales history', category: 'Properties' },
		
		// Major Communities (pointing to properties page with filters)
		{ url: '/properties?neighborhood=summerlin', title: 'Summerlin', description: 'Luxury homes in Summerlin', category: 'Communities' },
		{ url: '/properties?neighborhood=henderson', title: 'Henderson', description: 'Henderson real estate', category: 'Communities' },
		{ url: '/properties?neighborhood=green-valley', title: 'Green Valley', description: 'Green Valley homes', category: 'Communities' },
		{ url: '/properties?neighborhood=north-las-vegas', title: 'North Las Vegas', description: 'North Las Vegas real estate', category: 'Communities' },
		{ url: '/properties?neighborhood=boulder-city', title: 'Boulder City', description: 'Boulder City homes', category: 'Communities' },
		{ url: '/properties?neighborhood=seven-hills', title: 'Seven Hills', description: 'Seven Hills community', category: 'Communities' },
		{ url: '/properties?neighborhood=southern-highlands', title: 'Southern Highlands', description: 'Southern Highlands homes', category: 'Communities' },
		{ url: '/properties?neighborhood=mountains-edge', title: 'Mountains Edge', description: 'Mountains Edge community', category: 'Communities' },
		{ url: '/properties?neighborhood=anthem', title: 'Anthem', description: 'Anthem Country Club', category: 'Communities' },
		
				// Property Types (using query parameters)
				{ url: '/properties?type=single-family', title: 'Single Family Homes', description: 'Browse single family homes', category: 'Properties' },
				{ url: '/properties?type=condos', title: 'Condos', description: 'Browse condos and townhomes', category: 'Properties' },
				{ url: '/properties?type=townhomes', title: 'Townhomes', description: 'Browse townhomes', category: 'Properties' },
				{ url: '/properties?type=new-construction', title: 'New Construction', description: 'New home construction', category: 'Properties' },
				{ url: '/properties?type=luxury', title: 'Luxury Estates', description: 'Luxury real estate', category: 'Properties' },
				{ url: '/properties?type=gated', title: 'Gated Communities', description: 'Gated community homes', category: 'Properties' },
				{ url: '/properties?type=golf', title: 'Golf Communities', description: 'Golf course communities', category: 'Properties' },
				{ url: '/properties?type=55-plus', title: '55+ Communities', description: 'Retirement communities', category: 'Properties' },
				{ url: '/properties?type=foreclosures', title: 'Foreclosures', description: 'Foreclosure properties', category: 'Properties' },
				{ url: '/properties?type=short-sales', title: 'Short Sales', description: 'Short sale properties', category: 'Properties' },
				
				// Service Detail Pages
				{ url: '/services/buyer-representation', title: 'Buyer Representation', description: 'Expert buyer representation services', category: 'Services' },
				{ url: '/services/seller-representation', title: 'Seller Representation', description: 'Professional seller representation', category: 'Services' },
				{ url: '/services/luxury-homes', title: 'Luxury Homes', description: 'Luxury property services', category: 'Services' },
				{ url: '/services/commercial-real-estate', title: 'Commercial Real Estate', description: 'Commercial property services', category: 'Services' },
				{ url: '/services/real-estate-investing', title: 'Real Estate Investing', description: 'Investment property consulting', category: 'Services' },
				{ url: '/services/smart-home-technology', title: 'Smart Home Technology', description: 'Smart home technology expertise', category: 'Services' },
				{ url: '/services/digital-marketing', title: 'Digital Marketing', description: 'Digital marketing services', category: 'Services' },
				{ url: '/services/social-media-marketing', title: 'Social Media Marketing', description: 'Social media marketing services', category: 'Services' },
				{ url: '/services/negotiation-expertise', title: 'Negotiation Expertise', description: 'Advanced negotiation strategies', category: 'Services' },
				{ url: '/services/mortgage-guidance', title: 'Mortgage Guidance', description: 'Home financing guidance', category: 'Services' },
				// Services (using anchor links to about page)
				{ url: '/about#buying', title: 'Buying Guide', description: 'Home buying guide', category: 'Services' },
				{ url: '/about#selling', title: 'Selling Guide', description: 'Home selling guide', category: 'Services' },
				{ url: '/about#mortgage', title: 'Mortgage Calculator', description: 'Calculate your mortgage', category: 'Services' },
		
		// Legal
		{ url: '/privacy', title: 'Privacy Policy', description: 'Privacy policy and data protection', category: 'Legal' },
		{ url: '/terms', title: 'Terms of Service', description: 'Terms and conditions', category: 'Legal' }
	];
	
	const categories = ['Main', 'Properties', 'Communities', 'Services', 'Resources', 'Legal'];
</script>

<svelte:head>
	<title>Sitemap | Dr. Janet Duffy, REALTOR® | Luxury Las Vegas Real Estate</title>
	<meta name="description" content="Complete site map for Dr. Janet Duffy, REALTOR® luxury Las Vegas real estate website. Browse all pages including properties, communities, services, and resources for buying and selling homes in Las Vegas, Summerlin, Henderson, and surrounding areas." />
	<meta name="keywords" content="sitemap, Las Vegas real estate, property listings, Summerlin homes, Henderson real estate, Dr. Janet Duffy" />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://www.drjanetduffy.com/sitemap" />
	
	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.drjanetduffy.com/sitemap" />
	<meta property="og:title" content="Sitemap | Dr. Janet Duffy, REALTOR®" />
	<meta property="og:description" content="Complete site map for Dr. Janet Duffy, REALTOR® luxury Las Vegas real estate website." />
	
	<!-- Structured Data -->
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "WebPage",
		"name": "Sitemap",
		"description": "Complete site map for Dr. Janet Duffy, REALTOR® luxury Las Vegas real estate website",
		"url": "https://www.drjanetduffy.com/sitemap",
		"inLanguage": "en-US",
		"isPartOf": {
			"@type": "WebSite",
			"name": "Dr. Janet Duffy, REALTOR®",
			"url": "https://www.drjanetduffy.com"
		}
	}
	</script>
</svelte:head>

<section class="section">
	<div class="container-premium">
		<div class="text-center mb-12">
			<h1 class="font-display text-4xl md:text-5xl font-bold mb-4 text-gray-900">Las Vegas Real Estate Website Sitemap</h1>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
				Navigate through all pages and sections of our luxury Las Vegas real estate website. Find properties, communities, services, and resources to help you buy or sell your home in Las Vegas, Summerlin, Henderson, and surrounding areas.
			</p>
			<div class="bg-primary-50 rounded-xl p-6 max-w-2xl mx-auto">
				<p class="text-gray-700 text-sm leading-relaxed">
					<strong>About This Sitemap:</strong> This page provides a comprehensive overview of all pages on our website. Use it to quickly find information about Las Vegas real estate, property listings, community guides, buying and selling services, and more. For search engines, we also provide an <a href="/sitemap.xml" class="text-primary-600 hover:text-primary-700 font-semibold underline">XML sitemap</a>.
				</p>
			</div>
		</div>
		
		{#each categories as category}
			<div class="mb-12">
				<h2 class="text-2xl font-display font-bold mb-6 text-gray-900 border-b border-gray-200 pb-2">
					{category}
				</h2>
				<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{#each pages.filter(p => p.category === category) as page}
						<a 
							href={page.url}
							class="group relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
						>
							<h3 class="text-lg font-display font-bold mb-2 text-gray-900 group-hover:text-primary-600 transition-colors">
								{page.title}
							</h3>
							{#if page.description}
								<p class="text-sm text-gray-600 mb-2">
									{page.description}
								</p>
							{/if}
							<p class="text-xs text-gray-500 font-mono">
								{page.url}
							</p>
							<div class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
								<ChevronRight class="w-4 h-4 text-primary-600" />
							</div>
						</a>
					{/each}
				</div>
			</div>
		{/each}
		
		<!-- Additional Information Section -->
		<div class="mt-16 grid md:grid-cols-2 gap-8">
			<div class="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 border border-primary-100">
				<h2 class="text-2xl font-display font-bold mb-4 text-gray-900">Quick Navigation</h2>
				<p class="text-gray-700 mb-6">
					Use this sitemap to quickly find what you're looking for. Whether you're searching for properties, exploring Las Vegas communities, or learning about our real estate services, everything is organized by category for easy navigation.
				</p>
				<ul class="space-y-3 text-gray-700">
					<li class="flex items-start gap-2">
						<span class="text-primary-600 font-bold">•</span>
						<span><strong>Main Pages:</strong> Home, Properties, About, Contact, and Blog</span>
					</li>
					<li class="flex items-start gap-2">
						<span class="text-primary-600 font-bold">•</span>
						<span><strong>Properties:</strong> Browse listings, view past sales, and explore property types</span>
					</li>
					<li class="flex items-start gap-2">
						<span class="text-primary-600 font-bold">•</span>
						<span><strong>Communities:</strong> Discover neighborhoods throughout Las Vegas Valley</span>
					</li>
					<li class="flex items-start gap-2">
						<span class="text-primary-600 font-bold">•</span>
						<span><strong>Services:</strong> Home valuations, buying guides, selling guides, and more</span>
					</li>
				</ul>
			</div>
			
			<div class="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100">
				<h2 class="text-2xl font-display font-bold mb-4 text-gray-900">XML Sitemap for Search Engines</h2>
				<p class="text-gray-700 mb-6">
					For search engines and developers, we provide a machine-readable XML sitemap that helps search engines discover and index all pages on our website efficiently.
				</p>
				<a 
					href="/sitemap.xml" 
					class="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg"
				>
					View XML Sitemap
					<ExternalLink class="w-4 h-4" />
				</a>
			</div>
		</div>
		
		<!-- SEO Content Section -->
		<div class="mt-16 bg-white rounded-2xl p-8 border border-gray-200">
			<h2 class="text-2xl font-display font-bold mb-6 text-gray-900">About Our Las Vegas Real Estate Website</h2>
			<div class="prose prose-lg max-w-none text-gray-700">
				<p class="mb-4">
					Dr. Janet Duffy, REALTOR® specializes in luxury Las Vegas real estate, serving buyers, sellers, and investors throughout the Las Vegas Valley. Our comprehensive website provides access to property listings, community information, real estate services, and valuable resources for anyone interested in Las Vegas real estate.
				</p>
				<h3 class="text-xl font-bold text-gray-900 mt-6 mb-4">Property Search and Listings</h3>
				<p class="mb-4">
					Browse our extensive collection of Las Vegas homes for sale, including single-family homes, condos, townhomes, luxury estates, and new construction. Use our advanced search tools to filter by neighborhood, property type, price range, and more. View properties in grid or list format, and explore past sales to understand market trends.
				</p>
				<h3 class="text-xl font-bold text-gray-900 mt-6 mb-4">Las Vegas Communities</h3>
				<p class="mb-4">
					Explore premier Las Vegas communities including Summerlin, Henderson, Green Valley, North Las Vegas, Boulder City, Seven Hills, Southern Highlands, Mountains Edge, and Anthem. Each community offers unique amenities, lifestyle options, and real estate opportunities.
				</p>
				<h3 class="text-xl font-bold text-gray-900 mt-6 mb-4">Real Estate Services</h3>
				<p class="mb-4">
					Whether you're buying or selling, we offer comprehensive real estate services including home valuations, buying guides, selling guides, mortgage calculators, and expert consultation. Our team provides personalized service tailored to your unique real estate needs.
				</p>
				<h3 class="text-xl font-bold text-gray-900 mt-6 mb-4">Resources and Information</h3>
				<p class="mb-4">
					Stay informed with our real estate blog featuring market insights, community spotlights, buying and selling tips, and Las Vegas real estate news. Access testimonials from satisfied clients and learn why Dr. Janet Duffy is the trusted choice for Las Vegas real estate.
				</p>
			</div>
		</div>
		
		<!-- Contact CTA -->
		<div class="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-center text-white">
			<h2 class="text-3xl font-display font-bold mb-4">Ready to Start Your Real Estate Journey?</h2>
			<p class="text-xl mb-6 text-primary-100">
				Contact Dr. Janet Duffy, REALTOR® for expert guidance on buying or selling your Las Vegas home.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/contact" class="bg-white text-primary-600 hover:bg-gray-100 font-bold px-8 py-3 rounded-lg transition-colors shadow-lg">
					Contact Us
				</a>
				<a href="/properties" class="bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary-600 font-bold px-8 py-3 rounded-lg transition-colors">
					View Properties
				</a>
			</div>
		</div>
	</div>
</section>
