<script lang="ts">
	import { Home, Award, MapPin, Star, DollarSign, BookOpen, HelpCircle } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	interface NavLink {
		href: string;
		label: string;
	}

	const tocItems: NavLink[] = [
		{ href: '#faq', label: 'Buyer & Seller FAQs' },
		{ href: '#trust', label: 'Why Clients Trust Dr. Duffy' },
		{ href: '#resources', label: 'Digital Resources' },
		{ href: '#seller-strategy', label: 'Seller Strategy' },
		{ href: '#buyer-roadmap', label: 'Buyer Roadmap' },
		{ href: '#community-fit', label: 'Neighborhood Fit' },
		{ href: '#concierge-service', label: 'Concierge Service' },
		{ href: '#featured-properties', label: 'Featured Properties' },
		{ href: '#market-trends', label: 'Market Trends 2025' },
		{ href: '#services-resources', label: 'Services & Resources' }
	];

	const searchLinks: NavLink[] = [
		// Views
		{ href: '/listings-embedded', label: 'Grid View' },
		{ href: '/listings-list', label: 'List View' },
		{ href: '/past-sales', label: 'Past Sales' },
		// Property types
		{ href: '/property-types/single-family', label: 'Single Family' },
		{ href: '/property-types/condos', label: 'Condos' },
		{ href: '/property-types/townhomes', label: 'Townhomes' },
		{ href: '/property-types/new-construction', label: 'New Construction' },
		{ href: '/property-types/luxury-homes', label: 'Luxury Estates' },
		{ href: '/property-types/gated-communities', label: 'Gated Communities' },
		{ href: '/property-types/golf-communities', label: 'Golf Communities' },
		{ href: '/property-types/55-plus-communities', label: '55+ Communities' },
		{ href: '/property-types/foreclosures', label: 'Foreclosures' },
		{ href: '/property-types/short-sales', label: 'Short Sales' }
	];

	const servicesLinks: NavLink[] = [
		{ href: '/services', label: 'All Services' },
		{ href: '/home-value', label: 'Home Value' },
		{ href: '/buying-guide', label: 'Buying Guide' },
		{ href: '/selling-guide', label: 'Selling Guide' },
		{ href: '/first-time-buyers', label: 'First-Time Buyers' },
		{ href: '/investment-guide', label: 'Investment Guide' },
		{ href: '/relocation', label: 'Relocation' },
		{ href: '/resources', label: 'Resources' },
		{ href: '/faq', label: 'FAQ' },
		{ href: '/mortgage-calculator', label: 'Mortgage Calculator' },
		{ href: '/testimonials', label: 'Testimonials' },
		{ href: '/market-insights', label: 'Market Insights' }
	];

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Las Vegas Luxury &amp; Relocation REALTOR | Dr. Janet Duffy</title>
	<meta name="description" content="Dr. Janet Duffy - Las Vegas Luxury & Relocation REALTOR® with 15+ years experience. CRS, ABR, GRI certified. Expert in Summerlin, Skye Canyon, Henderson real estate. Buy, sell, or invest in Las Vegas homes. Call (702) 766-7668 for concierge-level service." />
	<meta name="keywords" content="Las Vegas real estate agent, Summerlin homes for sale, Skye Canyon real estate, Henderson homes, North Las Vegas properties, Centennial Hills homes, Las Vegas REALTOR, luxury homes Las Vegas, Las Vegas home buying, Las Vegas home selling, property search Las Vegas, Las Vegas relocation, executive relocation Las Vegas, military relocation Las Vegas" />
	<meta name="author" content="Dr. Janet Duffy" />
	<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
	<meta name="googlebot" content="index, follow" />
	
	<!-- Canonical URL -->
	<link rel="canonical" href="https://www.drjanetduffy.com/" />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.drjanetduffy.com/" />
	<meta property="og:title" content="Las Vegas Luxury &amp; Relocation REALTOR | Dr. Janet Duffy" />
	<meta property="og:description" content="Dr. Janet Duffy - Las Vegas Luxury & Relocation REALTOR® with 15+ years experience. CRS, ABR, GRI certified. Expert in Summerlin, Skye Canyon, Henderson real estate. Call (702) 766-7668." />
	<meta property="og:site_name" content="Las Vegas Luxury & Relocation REALTOR" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:image" content="https://www.drjanetduffy.com/favicon.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Dr. Janet Duffy - Las Vegas Luxury & Relocation REALTOR" />
	
	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content="https://www.drjanetduffy.com/" />
	<meta name="twitter:title" content="Las Vegas Luxury &amp; Relocation REALTOR | Dr. Janet Duffy" />
	<meta name="twitter:description" content="Dr. Janet Duffy - Las Vegas Luxury & Relocation REALTOR® with 15+ years experience. CRS, ABR, GRI certified. Expert in Summerlin, Skye Canyon, Henderson real estate. Call (702) 766-7668." />
	<meta name="twitter:image" content="https://www.drjanetduffy.com/favicon.png" />
	
	<!-- Structured Data - Organization -->
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "RealEstateAgent",
		"name": "Dr. Janet Duffy",
		"alternateName": "Las Vegas Luxury & Relocation REALTOR",
		"description": "Las Vegas Luxury & Relocation REALTOR with 15+ years of experience, specializing in luxury homes, executive relocation, military moves, and investment properties across Summerlin, Skye Canyon, Centennial Hills, Henderson, and North Las Vegas",
		"url": "https://www.drjanetduffy.com",
		"logo": "https://www.drjanetduffy.com/favicon.png",
		"image": "https://www.drjanetduffy.com/favicon.png",
		"telephone": "(702) 766-7668",
		"email": "info@DrJanetDuffy.com",
		"address": {
			"@type": "PostalAddress",
			"streetAddress": "1980 Festival Plaza Drive, Suite 300",
			"addressLocality": "Las Vegas",
			"addressRegion": "NV",
			"postalCode": "89135",
			"addressCountry": "US"
		},
		"geo": {
			"@type": "GeoCoordinates",
			"latitude": "36.1699",
			"longitude": "-115.1398"
		},
		"areaServed": [
			{
				"@type": "City",
				"name": "Las Vegas",
				"addressRegion": "NV"
			},
			{
				"@type": "City",
				"name": "Summerlin",
				"addressRegion": "NV"
			},
			{
				"@type": "City",
				"name": "Henderson",
				"addressRegion": "NV"
			}
		],
		"hasCredential": [
			"Licensed REALTOR in Nevada",
			"Certified Residential Specialist (CRS)",
			"Accredited Buyer's Representative (ABR)",
			"Graduate, REALTOR Institute (GRI)",
			"Luxury Home Marketing Specialist",
			"Certified Negotiation Expert (CNE)"
		],
		"sameAs": [
			"https://twitter.com/drjanetduffy",
			"https://facebook.com/drjanetduffy",
			"https://linkedin.com/in/drjanetduffy"
		]
	}
	</script>
	
	<!-- Structured Data - WebSite -->
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "WebSite",
		"name": "Las Vegas Luxury & Relocation REALTOR",
		"alternateName": "Las Vegas Luxury & Relocation | Dr. Janet Duffy REALTOR®",
		"url": "https://www.drjanetduffy.com",
		"description": "Las Vegas real estate expert specializing in Summerlin, Skye Canyon, Centennial Hills, and North Las Vegas",
		"publisher": {
			"@type": "RealEstateAgent",
			"name": "Dr. Janet Duffy"
		},
		"potentialAction": {
			"@type": "SearchAction",
			"target": {
				"@type": "EntryPoint",
				"urlTemplate": "https://www.drjanetduffy.com/properties?q={search_term_string}"
			},
			"query-input": "required name=search_term_string"
		}
	}
	</script>
	
	<!-- Structured Data - LocalBusiness -->
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		"@id": "https://www.drjanetduffy.com/#business",
		"name": "Dr. Janet Duffy Real Estate",
		"image": "https://www.drjanetduffy.com/favicon.png",
		"url": "https://www.drjanetduffy.com",
		"telephone": "(702) 766-7668",
		"priceRange": "$$",
		"address": {
			"@type": "PostalAddress",
			"streetAddress": "1980 Festival Plaza Drive, Suite 300",
			"addressLocality": "Las Vegas",
			"addressRegion": "NV",
			"postalCode": "89135",
			"addressCountry": "US"
		},
		"geo": {
			"@type": "GeoCoordinates",
			"latitude": "36.1699",
			"longitude": "-115.1398"
		},
		"openingHoursSpecification": {
			"@type": "OpeningHoursSpecification",
			"dayOfWeek": [
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday",
				"Saturday",
				"Sunday"
			],
			"opens": "09:00",
			"closes": "18:00"
		},
		"areaServed": {
			"@type": "City",
			"name": "Las Vegas",
			"addressRegion": "NV"
		}
	}
	</script>
	
	<!-- Structured Data - BreadcrumbList -->
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		"itemListElement": [
			{
				"@type": "ListItem",
				"position": 1,
				"name": "Home",
				"item": "https://www.drjanetduffy.com/"
			}
		]
	}
	</script>
	
	<!-- Structured Data - AggregateRating (for reviews) -->
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "RealEstateAgent",
		"@id": "https://www.drjanetduffy.com/#agent",
		"name": "Dr. Janet Duffy",
		"aggregateRating": {
			"@type": "AggregateRating",
			"ratingValue": "5.0",
			"reviewCount": "50",
			"bestRating": "5",
			"worstRating": "1"
		}
	}
	</script>
</svelte:head>

<!-- Critical CSS: Inline above-the-fold styles -->
<style>
	/* Critical above-the-fold styles to prevent FOUC */
	.hero-section {
		min-height: 100vh;
	}
	.container {
		width: 100%;
		margin-left: auto;
		margin-right: auto;
	}
	
	/* Remove any phone icons */
	a[href^="tel:"]::before,
	a[href^="tel:"]::after {
		display: none !important;
		content: none !important;
	}
	
	/* Hide phone icon images - be very specific to catch all variations */
	img[alt*="phone" i],
	img[alt*="telephone" i],
	img[src*="phone" i],
	img[src*="telephone" i],
	svg[class*="phone" i],
	/* Hide any background images with phone in the URL */
	[style*="phone" i],
	[style*="telephone" i],
	/* Hide images in the hero section placeholder area that might be phone icons */
	.hero-section .relative img,
	.hero-section .relative [style*="background-image" i] {
		display: none !important;
		background-image: none !important;
		visibility: hidden !important;
		opacity: 0 !important;
		height: 0 !important;
		width: 0 !important;
	}
	
	/* RealScout wrapper styles */
	.realscout-wrapper {
		min-height: 400px;
		width: 100%;
		contain: layout style paint;
		position: relative;
	}
	
	/* Ensure loading skeleton matches RealScout dimensions */
	.loading-skeleton {
		min-height: 400px;
		width: 100%;
	}
	
	/* Override RealScout styles for homepage */
	.realscout-wrapper :global(realscout-office-listings) {
		--rs-grid-columns: 3;
		--rs-card-hover-shadow: 0 10px 20px rgba(0,0,0,0.15);
	}
	
	/* Style RealScout search widget */
	:global(realscout-advanced-search) {
		width: 100%;
	}
</style>

<!-- Hero Section - Full Width with Image Overlay -->
<section class="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
	<!-- Background Image with Overlay -->
	<div class="absolute inset-0 bg-gradient-to-tr from-primary-700 via-primary-800 to-primary-900">
		<div class="absolute inset-0 bg-black/40"></div>
		<!-- Placeholder for hero image - can be replaced with actual image -->
		<div class="absolute inset-0 bg-gradient-to-br from-primary-600/20 via-primary-700/30 to-primary-900/40"></div>
	</div>
	
	<!-- Content -->
	<div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
		<div class="max-w-4xl mx-auto">
			<h1 class="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
				The Las Vegas Real Estate <span class="text-gold-400" style="font-family: 'Playfair Display', serif; font-style: italic;">Experts</span>
			</h1>
			<p class="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
				Your dedicated Las Vegas real estate professional providing comprehensive, personalized service across the valley's most desirable communities.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/get-started" class="inline-flex items-center justify-center px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-bold text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
					Get Started
				</a>
				<a href="/contact" class="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white/20 transition-all duration-300">
					Schedule a Consultation
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Trust Indicators Bar -->
<section class="bg-white border-b border-gray-200">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-7xl mx-auto py-6">
			<div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
				<div>
					<div class="text-3xl md:text-4xl font-bold text-primary-700 mb-1">15+</div>
					<div class="text-sm text-gray-600">Years Experience</div>
				</div>
				<div>
					<div class="text-3xl md:text-4xl font-bold text-primary-700 mb-1">CRS</div>
					<div class="text-sm text-gray-600">Certified Specialist</div>
				</div>
				<div>
					<div class="text-3xl md:text-4xl font-bold text-primary-700 mb-1">ABR</div>
					<div class="text-sm text-gray-600">Buyer Representative</div>
				</div>
				<div>
					<div class="text-3xl md:text-4xl font-bold text-primary-700 mb-1">GRI</div>
					<div class="text-sm text-gray-600">Graduate REALTOR</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Property Search Form -->
<section class="bg-gray-50 py-16 md:py-24">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-5xl mx-auto">
				<div class="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100" style="min-height: 200px;">
					{#if mounted && browser}
						<realscout-advanced-search 
							agent-encoded-id="QWdlbnQtMjI1MDUw">
						</realscout-advanced-search>
					{:else}
						<div class="flex items-center justify-center py-12">
							<div class="text-center">
								<div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mb-4"></div>
								<p class="text-sm text-gray-600">
									Loading advanced property search...
								</p>
							</div>
						</div>
					{/if}
				</div>

				<!-- Quick links to views & property types -->
				<div class="mt-6 bg-gray-50 border border-gray-100 rounded-2xl p-4 md:p-5">
					<p class="text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
						Browse by view or property type
					</p>
					<div class="flex flex-wrap gap-2">
						{#each searchLinks as link}
							<a
								href={link.href}
								class="px-3 py-1.5 rounded-full border border-gray-200 bg-white text-xs sm:text-sm text-gray-700 hover:text-primary-600 hover:border-primary-300 hover:bg-primary-50 transition-colors whitespace-nowrap"
							>
								{link.label}
							</a>
						{/each}
					</div>
				</div>
			</div>

			<!-- On-page navigation summary -->
			<nav class="mt-10 border-t border-gray-200 pt-6">
				<div class="flex items-center justify-between mb-3">
					<p class="text-sm font-semibold text-gray-700 uppercase tracking-wide">On this page</p>
				</div>
				<div class="flex gap-3 overflow-x-auto scrollbar-hide py-1">
					{#each tocItems as item}
						<a
							href={item.href}
							class="flex-shrink-0 px-4 py-2 rounded-full border border-gray-200 bg-white text-xs sm:text-sm font-medium text-gray-700 hover:text-primary-600 hover:border-primary-300 hover:bg-primary-50 transition-colors whitespace-nowrap"
						>
							{item.label}
						</a>
					{/each}
				</div>
			</nav>
		</div>
</section>

<!-- Family-Owned & Operated Section -->
<section class="bg-white py-16 md:py-24">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-7xl mx-auto">
			<div class="grid md:grid-cols-2 gap-12 items-center">
				<div>
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
						<Home class="w-8 h-8 text-primary-700" />
					</div>
					<h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Family-Owned &amp; Operated</h2>
					<p class="text-lg text-gray-700 leading-relaxed mb-6">
						Since 2010, Dr. Janet Duffy has been dedicated to ensuring that integrity and excellence are at the forefront of every real estate transaction. With over 15 years of experience in the Las Vegas market, we bring unparalleled expertise to help you achieve your real estate goals.
					</p>
					<p class="text-lg text-gray-700 leading-relaxed">
						Our mission is to use our expertise to make every client's real estate investment an excellent and profitable endeavor, whether you're buying your first home, selling a luxury estate, or building an investment portfolio.
					</p>
				</div>
				<div class="relative">
					<div class="rounded-2xl overflow-hidden shadow-2xl">
						<img
							src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=600&fit=crop"
							alt="Dr. Janet Duffy and team members in professional setting"
							class="w-full h-auto object-cover"
							loading="lazy"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Build Wealth Section -->
<section class="relative bg-gradient-to-r from-primary-800 via-primary-700 to-primary-900 py-16 md:py-24 overflow-hidden">
	<div class="absolute inset-0 opacity-10">
		<div class="absolute inset-0" style="background-image: url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop'); background-size: cover; background-position: center;"></div>
	</div>
	<div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-7xl mx-auto">
			<div class="grid md:grid-cols-2 gap-12 items-center">
				<div>
					<h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
						Build Wealth with <span class="text-gold-400" style="font-family: 'Playfair Display', serif; font-style: italic;">Dr. Janet Duffy</span>
					</h2>
					<p class="text-xl text-white/90 leading-relaxed">
						Our Las Vegas real estate philosophy prioritizes a comprehensive approach, ensuring our clients benefit from the highest possible returns. Whether you're buying your first home, selling a luxury estate, or building an investment portfolio, we provide expert guidance to maximize your investment potential.
					</p>
				</div>
				<div class="relative">
					<div class="rounded-2xl overflow-hidden shadow-2xl">
						<img
							src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop"
							alt="Modern Las Vegas homes and neighborhoods"
							class="w-full h-auto object-cover"
							loading="lazy"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Why Choose Section -->
<section class="bg-white py-16 md:py-24 relative">
	<div class="absolute inset-0 opacity-5">
		<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
			<Award class="w-96 h-96 text-primary-600" />
		</div>
	</div>
	<div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-7xl mx-auto text-center">
			<h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose Dr. Janet Duffy?</h2>
			<p class="text-lg text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
				Your real estate investment deserves the best care, guidance, and expertise. As a leading Las Vegas REALTOR®, let Dr. Janet Duffy be your guide to protect your investment and empower you to achieve your goals.
			</p>
			<div class="grid md:grid-cols-3 gap-8 mb-12">
				<div class="text-center">
					<div class="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-6">
						<DollarSign class="w-10 h-10 text-primary-700" />
					</div>
					<h3 class="text-2xl font-bold text-gray-900 mb-4">Time Savings</h3>
					<p class="text-gray-700 leading-relaxed">
						We handle property searches, market analysis, negotiations, and all transaction details so you can focus on what matters most to you.
					</p>
				</div>
				<div class="text-center">
					<div class="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-6">
						<Award class="w-10 h-10 text-primary-700" />
					</div>
					<h3 class="text-2xl font-bold text-gray-900 mb-4">Risk Reduction</h3>
					<p class="text-gray-700 leading-relaxed">
						Real estate transactions can be complex. With our expertise, you'll never have to worry about keeping up with regulations—we handle it for you.
					</p>
				</div>
				<div class="text-center">
					<div class="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-6">
						<Star class="w-10 h-10 text-primary-700" />
					</div>
					<h3 class="text-2xl font-bold text-gray-900 mb-4">Performance Driven</h3>
					<p class="text-gray-700 leading-relaxed">
						Our success is tied directly to yours. We're committed to acting in your best interest and achieving exceptional results.
					</p>
				</div>
			</div>
			<a href="/about" class="inline-flex items-center justify-center px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-bold text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
				Learn More
			</a>
		</div>
	</div>
</section>

<!-- Services Section - Split Layout -->
<section class="bg-white py-16 md:py-24">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-7xl mx-auto">
			<!-- Acquisitions & Sales -->
			<div class="grid md:grid-cols-2 gap-12 items-center mb-20">
				<div class="relative order-2 md:order-1">
					<div class="rounded-2xl overflow-hidden shadow-2xl">
						<img
							src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop"
							alt="Happy family with house keys in front of Las Vegas home"
							class="w-full h-auto object-cover"
							loading="lazy"
						/>
					</div>
				</div>
				<div class="order-1 md:order-2 relative">
					<div class="absolute -right-8 -top-8 opacity-10">
						<Home class="w-48 h-48 text-primary-600" />
					</div>
					<h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Acquisitions &amp; Sales</h2>
					<p class="text-lg text-gray-700 leading-relaxed mb-6">
						Buying or selling a home in Las Vegas can be complicated. We're here to help you navigate the entire process, from finding the perfect property to closing the deal. Our team will assist in building your specific criteria and guide you through every step of the acquisition or sale process.
					</p>
					<a href="/properties" class="inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors">
						Learn More
					</a>
				</div>
			</div>
			
			<!-- Full-Service Real Estate -->
			<div class="relative bg-gradient-to-r from-primary-800 via-primary-700 to-primary-900 rounded-3xl p-12 md:p-16 overflow-hidden">
				<div class="absolute inset-0 opacity-10">
					<div class="absolute inset-0" style="background-image: url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop'); background-size: cover; background-position: center;"></div>
				</div>
				<div class="relative z-10 grid md:grid-cols-2 gap-12 items-center">
					<div>
						<h2 class="text-4xl md:text-5xl font-bold text-white mb-6">Full-Service Real Estate</h2>
						<p class="text-xl text-white/90 leading-relaxed mb-6">
							From property search to closing and beyond, we take the burden of real estate transactions off your hands so you can spend more time focusing on your goals. Our comprehensive service includes market analysis, negotiation, transaction management, and ongoing support.
						</p>
						<a href="/services" class="inline-flex items-center justify-center px-6 py-3 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-lg transition-colors">
							Learn More
						</a>
					</div>
					<div class="relative">
						<div class="rounded-2xl overflow-hidden shadow-2xl">
							<img
								src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop"
								alt="Modern Las Vegas suburban homes with green lawns"
								class="w-full h-auto object-cover"
								loading="lazy"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Where We Serve Section -->
<section class="bg-white py-16 md:py-24 relative">
	<div class="absolute inset-0 opacity-5">
		<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
			<MapPin class="w-96 h-96 text-primary-600" />
		</div>
	</div>
	<div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-7xl mx-auto text-center">
			<h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
				Where We <span class="text-gold-500" style="font-family: 'Playfair Display', serif; font-style: italic;">Serve</span>
			</h2>
			<p class="text-lg text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
				Dr. Janet Duffy proudly serves clients across all of Las Vegas, providing expert real estate solutions tailored to each community's unique needs. With over 15 years of experience, we help property owners and buyers maximize their investments while ensuring a seamless experience.
			</p>
			<div class="grid md:grid-cols-2 gap-8 mb-12">
				<div class="bg-gray-50 rounded-2xl p-8">
					<div class="aspect-video bg-primary-100 rounded-lg mb-4 flex items-center justify-center">
						<MapPin class="w-24 h-24 text-primary-600" />
					</div>
					<h3 class="text-2xl font-bold text-gray-900 mb-2">Las Vegas Valley</h3>
					<p class="text-gray-700">Serving all communities across the greater Las Vegas metropolitan area</p>
				</div>
				<div class="bg-gray-50 rounded-2xl p-8">
					<div class="aspect-video bg-primary-100 rounded-lg mb-4 flex items-center justify-center">
						<MapPin class="w-24 h-24 text-primary-600" />
					</div>
					<h3 class="text-2xl font-bold text-gray-900 mb-2">Premium Communities</h3>
					<p class="text-gray-700">Specializing in Summerlin, Skye Canyon, Henderson, and North Las Vegas</p>
				</div>
			</div>
			<a href="/neighborhoods" class="inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors">
				Learn More
			</a>
		</div>
	</div>
</section>

<!-- Experience Excellence Section -->
<section class="bg-white py-16 md:py-24">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-7xl mx-auto">
			<div class="grid md:grid-cols-2 gap-12 items-start mb-16">
				<div class="flex items-center justify-center">
					<div class="w-48 h-48 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full flex items-center justify-center shadow-2xl">
						<div class="text-center text-white">
							<div class="text-3xl font-bold mb-2">BEST OF</div>
							<div class="text-2xl font-bold mb-2">LAS VEGAS</div>
							<div class="text-xl">2024</div>
						</div>
					</div>
				</div>
				<div>
					<h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
						Experience Excellence. <span class="text-gold-500" style="font-family: 'Playfair Display', serif; font-style: italic;">Since 2010</span>
					</h2>
					<p class="text-lg text-gray-700 leading-relaxed mb-6">
						With a legacy of personal investment in Las Vegas real estate dating back to 2010, Dr. Janet Duffy brings unparalleled expertise to help you achieve real estate success. Our commitment to excellence has earned recognition as one of Las Vegas's top real estate professionals.
					</p>
				</div>
			</div>
			
			<!-- Testimonials Grid -->
			<div class="grid md:grid-cols-3 gap-8 mb-12">
				<div class="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
					<div class="flex items-center gap-1 mb-4">
						{#each Array(5) as _}
							<Star class="w-5 h-5 fill-gold-400 text-gold-400" />
						{/each}
					</div>
					<p class="text-gray-700 mb-4 leading-relaxed">
						"Dr. Janet Duffy made our relocation to Las Vegas seamless. Her knowledge of the Summerlin area and attention to detail throughout the entire process was exceptional."
					</p>
					<div class="flex items-center gap-2">
						<div class="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
							<span class="text-primary-700 font-bold">SM</span>
						</div>
						<div>
							<div class="font-semibold text-gray-900">Sarah M.</div>
							<div class="text-sm text-gray-600">Google Review</div>
						</div>
					</div>
				</div>
				<div class="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
					<div class="flex items-center gap-1 mb-4">
						{#each Array(5) as _}
							<Star class="w-5 h-5 fill-gold-400 text-gold-400" />
						{/each}
					</div>
					<p class="text-gray-700 mb-4 leading-relaxed">
						"Working with Dr. Duffy was an amazing experience. Her knowledge and guidance throughout the process were invaluable, helping me confidently navigate each step."
					</p>
					<div class="flex items-center gap-2">
						<div class="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
							<span class="text-primary-700 font-bold">NB</span>
						</div>
						<div>
							<div class="font-semibold text-gray-900">Nathaniel B.</div>
							<div class="text-sm text-gray-600">Google Review</div>
						</div>
					</div>
				</div>
				<div class="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
					<div class="flex items-center gap-1 mb-4">
						{#each Array(5) as _}
							<Star class="w-5 h-5 fill-gold-400 text-gold-400" />
						{/each}
					</div>
					<p class="text-gray-700 mb-4 leading-relaxed">
						"I've worked with Dr. Duffy for many years. She is trustworthy and gets the job done. She does it all and does it well. Highly recommend!"
					</p>
					<div class="flex items-center gap-2">
						<div class="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
							<span class="text-primary-700 font-bold">LL</span>
						</div>
						<div>
							<div class="font-semibold text-gray-900">Liam L.</div>
							<div class="text-sm text-gray-600">Google Review</div>
						</div>
					</div>
				</div>
			</div>
			<div class="text-center">
				<a href="/testimonials" class="inline-flex items-center justify-center px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-bold text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
					Read More
				</a>
			</div>
		</div>
	</div>
</section>

<!-- FAQ Section -->
<section id="faq" class="section bg-gray-50">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-5xl mx-auto">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">What Questions Do Las Vegas Buyers and Sellers Ask Most Often?</h2>
			<p class="text-lg text-gray-700 leading-relaxed mb-8 text-center">
				Every conversation introduces new variables, yet these core questions appear in almost every strategy call. Use the answers below as a starting point, then reach out so we can tailor guidance to your timeline, budget, and lifestyle.
			</p>
			<div class="space-y-6">
				<div class="bg-white rounded-2xl shadow-lg p-6">
					<h3 class="text-2xl font-bold text-gray-900 mb-3">How long does it really take to buy a home in Las Vegas?</h3>
					<p class="text-gray-700 leading-relaxed">
						Most financed purchases close in 30-35 days once we are under contract. Cash deals can wrap in 10-15 days if title is clear. The variable is pre-offer preparation—clients who complete underwriting in advance, review HOA budgets, and tour multiple communities up front often secure their home within 45 days of contacting me. I provide weekly timelines so you always know what is expected next.
					</p>
				</div>
				<div class="bg-white rounded-2xl shadow-lg p-6">
					<h3 class="text-2xl font-bold text-gray-900 mb-3">What incentives are builders offering right now?</h3>
					<p class="text-gray-700 leading-relaxed">
						Builder incentives change monthly, but current trends include rate buydowns, $10K-$30K design-center credits, and free backyard packages on spec homes that have been standing for 60+ days. I maintain relationships with sales managers across Toll Brothers, Pulte, Richmond American, Lennar, and Tri Pointe, allowing my clients to access unpublished incentives or cancellations before they are marketed publicly.
					</p>
				</div>
				<div class="bg-white rounded-2xl shadow-lg p-6">
					<h3 class="text-2xl font-bold text-gray-900 mb-3">Do sellers still need to stage in a low-inventory market?</h3>
					<p class="text-gray-700 leading-relaxed">
						Yes—professionally staged homes capture more traffic within the first 72 hours and typically sell with at least one backup offer. Staging highlights architectural features, disguises furniture wear, and makes photos scroll-stopping for remote buyers. I cover the consultation, manage the install, and coordinate removal so the process feels effortless.
					</p>
				</div>
				<div class="bg-white rounded-2xl shadow-lg p-6">
					<h3 class="text-2xl font-bold text-gray-900 mb-3">How do we compete if we need to sell before we buy?</h3>
					<p class="text-gray-700 leading-relaxed">
						We can deploy bridge-loan products, rent-back agreements, or contingent offers supported by proof of funds and aggressive listing timelines. I map both transactions on a single calendar, coordinate simultaneous closings, and negotiate temporary occupancy so you never feel rushed out of one property while searching for the next.
					</p>
				</div>
			</div>

			<div class="mt-10 text-center">
				<a href="/faq" class="btn-secondary">
					View Full Las Vegas Luxury &amp; Relocation FAQ
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Trust Section -->
<section id="trust" class="section bg-white">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-5xl mx-auto">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Why Do Executives, Military Families, and Investors Trust Dr. Janet Duffy?</h2>
			<p class="text-lg text-gray-700 leading-relaxed mb-6">
				My business is built on referrals from people whose livelihoods depend on accuracy—healthcare executives relocating to Summerlin Hospital, Nellis Air Force families needing fast closing timelines, and entrepreneurs seeking 1031 exchange opportunities. They value transparent communication, clear metrics, and the ability to adapt quickly when corporate timelines shift. I am known for responding within hours, not days, and for presenting solutions rather than problems whenever an appraisal, inspection, or lending issue surfaces.
			</p>
			<p class="text-lg text-gray-700 leading-relaxed mb-6">
				Testimonials highlight the same themes: proactive planning, calm negotiation style, and an uncanny ability to connect clients with vetted service providers—from estate planners and tax strategists to pool resurfacing crews and desert landscapers. I track every vendor’s performance and rotate as needed so you only work with professionals who deliver excellence. After closing, I check in quarterly to ensure warranties are registered, tax records are accurate, and investment assumptions still hold.
			</p>
			<p class="text-lg text-gray-700 leading-relaxed">
				Trust is also reinforced by credentials: CRS, ABR, GRI, Luxury Home Marketing Specialist, and Certified Negotiation Expert. Education matters because it keeps me sharp on contract law, risk mitigation, and marketing innovation. Pair that with deep local roots and you have an advisor who treats your goals with the same care I apply to my own portfolio.
			</p>
		</div>
	</div>
</section>

<!-- Resource Support -->
<section id="resources" class="section bg-gray-50">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-5xl mx-auto">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Which Digital Resources Keep You Confident Between Showings and Closings?</h2>
			<p class="text-lg text-gray-700 leading-relaxed mb-6">
				Clients stay calm when information is easy to access. I provide a personalized dashboard that houses lender quotes, inspection summaries, title commitments, and contingency deadlines. You can message me directly in the portal, upload receipts, or download HOA docs without digging through email threads. Weekly market snapshots summarize interest-rate trends, new inventory, and comparable closings so you always know whether to accelerate or pause.
			</p>
			<p class="text-lg text-gray-700 leading-relaxed mb-6">
				Prefer a more conversational approach? I record Loom videos after every major milestone to explain what happened, what is next, and which documents need signatures. Relocating clients share those videos with spouses, financial advisors, or relocation reps to keep everyone aligned. Investors receive quarterly rent projections and maintenance schedules, while luxury buyers get curated lifestyle guides covering private clubs, social memberships, and concierge services.
			</p>
			<p class="text-lg text-gray-700 leading-relaxed">
				This digital backbone supplements, not replaces, human connection. You can still call, text, or meet in person, but you will never wonder where a contract lives or whether an earnest-money extension was filed. Empowered clients make faster decisions, negotiate with confidence, and ultimately enjoy the process more.
			</p>
		</div>
	</div>
</section>

<!-- Seller Strategy -->
<section id="seller-strategy" class="section bg-white">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-5xl mx-auto">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">How Do We Position Your Las Vegas Home for Multiple Offers and Record Equity?</h2>
			<p class="text-lg text-gray-700 leading-relaxed mb-6">
				Selling in 2025 requires precise storytelling. I start with a pre-list appraisal-style analysis that measures your home against the top five closed comps plus active competitors so we can price within 1.5% of the sweet spot that triggers showings. Then we deploy my “seven-day shine” program: day one repairs and paint touch-ups, day two landscaping refresh, day three deep clean, day four designer staging or merchandising, day five cinematic photography, day six social teasers, and day seven MLS launch with reverse prospecting to buyer agents who already have clients in your price band.
			</p>
			<p class="text-lg text-gray-700 leading-relaxed mb-6">
				Marketing collaterals include 4K video tours, interactive floor plans, lifestyle reels for Instagram and LinkedIn, and geo-targeted email blasts to relocation partners across California and the Pacific Northwest. Because many buyers shop remotely, I create “live-in guides” that explain utility costs, SMART home integrations, community fee schedules, and local hotspots within a ten-minute drive. These micro-guides reduce buyer hesitation and inspire sight-unseen offers with higher earnest money.
			</p>
			<p class="text-lg text-gray-700 leading-relaxed">
				During negotiations, I focus on net proceeds rather than brag-worthy list-to-sale ratios. We evaluate every offer for appraisal risk, repair caps, backup buyer strength, and timeline certainty. If it benefits you, I craft rent-back agreements so you can shop for your next home without feeling rushed. My sellers regularly close with fewer contingencies and stronger terms because the process is engineered for clarity, not chaos.
			</p>
			<div class="mt-6 text-center">
				<a href="/selling-guide" class="btn-secondary">
					View the Full Selling Guide
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Buyer Roadmap -->
<section id="buyer-roadmap" class="section bg-gray-50">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-5xl mx-auto">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">How Does Our Buyer Roadmap Turn a Desert Dream Into Keys in Hand?</h2>
			<p class="text-lg text-gray-700 leading-relaxed mb-6">
				My buyer roadmap unfolds in five phases: discovery, touring, offer crafting, due diligence, and smooth closing. During discovery we build a decision matrix that ranks must-haves (lot size, school zoning, commute) against nice-to-haves (three-car garage, casita, backyard kitchen). Touring days are optimized to show a blend of MLS listings, private office exclusives, and builder VIP releases so you understand the full spectrum of options before writing an offer. I summarize each home in a shared dashboard with pros, cons, and estimated maintenance costs, making recap conversations fast and factual.
			</p>
			<p class="text-lg text-gray-700 leading-relaxed mb-6">
				When it is time to submit an offer, I analyze absorption metrics and seller motivation to calibrate price, earnest money, appraisal gaps, and post-occupancy terms. Need to compete with multiple offers? We lean on escalation clauses, inspection waivers with pre-inspection data, or direct conversations with listing agents who already know my track record. Prefer a value play? I identify homes that have crossed the 21-day mark and craft concession-based strategies that trim your cash-to-close.
			</p>
			<p class="text-lg text-gray-700 leading-relaxed">
				Once under contract, weekly check-ins keep you informed about appraisal scheduling, title reports, and loan milestones. I coordinate contractors for specialized inspections—think irrigation audits, solar transfers, or commercial-grade appliance checks—while you review digital records from anywhere. By the time we reach the signing table, you understand every line item and feel confident that nothing slipped through the cracks.
			</p>
			<div class="mt-6 text-center">
				<a href="/buying-guide" class="btn-secondary">
					View the Full Buying Guide
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Community Fit Section -->
<section id="community-fit" class="section bg-white">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-6xl mx-auto">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Which Las Vegas Neighborhood Fits Your Lifestyle and Long-Term Goals?</h2>
			<p class="text-lg text-gray-700 leading-relaxed mb-6">
				Matching you with the right master plan is part science, part storytelling. We begin by evaluating commute expectations, school preferences, climate preferences (yes, Summerlin is three to five degrees cooler than Inspirada), and HOA appetite. Next, I layer in micro-level factors: trail access for morning runners, dedicated pickleball courts, dog parks, guard-gated security, or proximity to the future Brightline station. The result is a short list of villages—from The Canyons and The Vistas to Skye Hills and Tule Springs—that align with your lifestyle instead of forcing you to compromise.
			</p>
			<p class="text-lg text-gray-700 leading-relaxed mb-6">
				To make the comparison intuitive, I prepare neighborhood scorecards that outline price ranges, appreciation history, HOA structures, and typical lot sizes. For example, The Ridges commands a 20-30% premium for Jack Nicklaus golf frontage, while Skye Canyon’s Innovation series attracts outdoor enthusiasts who crave quick escapes to Mount Charleston. I also show you “insider” nuances: which Summerlin streets enjoy unobstructed Red Rock sunsets, where the newest charter campuses are opening, and how traffic patterns shift once Formula 1 events or major conventions arrive. With this level of detail, you can confidently choose the village that will feel like home for years to come.
			</p>
			<p class="text-lg text-gray-700 leading-relaxed">
				Already own in Las Vegas? I deliver the same neighborhood intelligence to sellers. Understanding who is most likely to buy your home—move-up locals, California tax refugees, or remote workers—allows us to tailor marketing narratives that resonate. We emphasize the backyard orientation that captures afternoon shade, the dual offices that support hybrid work, or the upgraded insulation that keeps garages cooler than 100°F. Neighborhood storytelling is the difference between listing data and an emotional connection that inspires premium offers.
			</p>
			<div class="mt-6 text-center">
				<a href="/neighborhoods" class="btn-secondary">
					Explore All Neighborhood Guides
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Concierge Service Overview -->
<section id="concierge-service" class="section bg-white">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-5xl mx-auto">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">How Does Dr. Janet Duffy Deliver Concierge-Level Real Estate Service Across Las Vegas?</h2>
			<p class="text-lg text-gray-700 leading-relaxed mb-6">
				Concierge real estate means every stage of your move is orchestrated for you. I begin with a two-part strategy session: first we define your lifestyle, commute, school, and recreation goals; then we map those goals to precisely researched neighborhoods stretching from Downtown Summerlin to Lake Las Vegas. You receive curated property dossiers that summarize HOA costs, recent comparables, solar ownership status, and walkability scores so you can compare homes at a glance. When you are ready to tour, I stage efficient routes that minimize backtracking and highlight hidden amenities such as community gardens, private trailheads, or residents-only fitness clubs.
			</p>
			<p class="text-lg text-gray-700 leading-relaxed mb-6">
				Once you fall in love with a property, concierge service shifts into logistical overdrive. I coordinate same-day lender introductions, schedule inspectors familiar with desert-specific systems, and pre-negotiate repairs with trusted vendors before surprises derail timelines. Sellers benefit from white-glove listing preparation that covers landscapers, pool techs, staging pros, and cinematographers. Every update is summarized in shared dashboards and voice notes so relocating executives, military families, and investors can make decisions from any time zone. Concierge is not a buzzword—it is a promise that I will anticipate the next three tasks before you even think to ask.
			</p>
			<p class="text-lg text-gray-700 leading-relaxed">
				The final piece is advocacy. I maintain ongoing relationships with builders, HOA boards, and escrow officers, which means your file never stalls on someone’s desk. Whether you are pursuing a $350K townhome or a $3M custom estate, you receive the same proactive communication, luxury-level marketing, and negotiation rigor. My role is to remove friction so you can focus on picturing your life in the desert—not on paperwork pileups or unanswered calls.
			</p>
			<div class="mt-6 text-center">
				<a href="/services" class="btn-secondary">
					View All Luxury &amp; Relocation Services
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Agent Credentials & Trust Section -->
<section class="section bg-gradient-to-br from-primary-50 via-white to-primary-50">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-6xl mx-auto">
			<div class="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200">
				<div class="text-center mb-8">
					<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Licensed REALTOR® with Proven Expertise</h2>
					<p class="text-lg text-gray-600 max-w-3xl mx-auto">
						Dr. Janet Duffy brings 15+ years of Las Vegas real estate experience with top industry certifications
					</p>
				</div>
				<div class="grid md:grid-cols-3 gap-6 mb-8">
					<div class="text-center p-6 bg-gray-50 rounded-xl">
						<div class="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full mb-4">
							<Award class="w-5 h-5 text-primary-600" />
						</div>
						<h3 class="text-xl font-bold text-gray-900 mb-2">CRS Certified</h3>
						<p class="text-sm text-gray-600">Certified Residential Specialist - Top 3% of Realtors Nationwide</p>
					</div>
					<div class="text-center p-6 bg-gray-50 rounded-xl">
						<div class="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full mb-4">
							<Star class="w-5 h-5 text-primary-600" />
						</div>
						<h3 class="text-xl font-bold text-gray-900 mb-2">ABR Accredited</h3>
						<p class="text-sm text-gray-600">Accredited Buyer's Representative - Expert Buyer Representation</p>
					</div>
					<div class="text-center p-6 bg-gray-50 rounded-xl">
						<div class="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full mb-4">
							<BookOpen class="w-5 h-5 text-primary-600" />
						</div>
						<h3 class="text-xl font-bold text-gray-900 mb-2">GRI Graduate</h3>
						<p class="text-sm text-gray-600">Graduate REALTOR Institute - Advanced Real Estate Education</p>
					</div>
				</div>
				<div class="text-center">
					<a href="/about" class="btn-primary">Learn More About Dr. Duffy</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Featured Properties -->
<section id="featured-properties" class="section bg-white">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-7xl mx-auto">
			<div class="text-center mb-12">
				<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Featured Las Vegas Properties Are Available?</h2>
				<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto">
					Featured Las Vegas properties include hand-picked premium homes, luxury estates, single-family homes, condos, and townhomes across Summerlin, Skye Canyon, Centennial Hills, Henderson, and other premier communities. These properties feature exceptional value, prime locations, and quality amenities that make them stand out in the Las Vegas real estate market. Browse Las Vegas's most sought-after luxury homes, single-family residences, modern townhomes, and lock-and-leave condos across Summerlin, Skye Canyon, Centennial Hills, and other planned communities.
				</p>
				<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto">
					Every showcase lineup refreshes weekly to highlight price improvements, designer remodels, and new-construction releases before they flood the open market. Expect to see golf-front estates in The Ridges, Sky-View lots in Skye Canyon, half-acre ranches in North Las Vegas, and smartly renovated bungalows near the Las Vegas Medical District. Each featured property includes context that algorithms miss—sunset orientation, pet restrictions, door-to-strip commute times, and anticipated HOA capital projects—so you can evaluate livability as well as aesthetics. Use the gallery below to bookmark favorites, then reach out for private video tours or in-person experiences tailored to your schedule.
				</p>
			</div>

			{#if mounted && browser}
				<div class="realscout-wrapper" style="min-height: 400px;">
					<realscout-office-listings 
						agent-encoded-id="QWdlbnQtMjI1MDUw"
						sort-order="STATUS_AND_SIGNIFICANT_CHANGE"
						listing-status="For Sale"
						property-types="SFR,MF,TC"
						max-results="6">
					</realscout-office-listings>
				</div>
			{:else}
				<div class="loading-skeleton" style="min-height: 400px;">
					<div class="grid md:grid-cols-3 gap-6">
						{#each Array(3) as _}
							<div class="animate-pulse bg-white rounded-2xl shadow-lg overflow-hidden">
								<div class="bg-gray-200 h-64"></div>
								<div class="p-6 space-y-4">
									<div class="h-6 bg-gray-200 rounded w-3/4"></div>
									<div class="h-5 bg-gray-200 rounded w-1/2"></div>
									<div class="h-4 bg-gray-200 rounded w-2/3"></div>
								</div>
							</div>
						{/each}
					</div>
					<p class="text-center text-gray-600 mt-8 text-lg">Loading featured properties...</p>
				</div>
			{/if}
			
			<div class="text-center mt-8">
				<a href="/properties" class="btn-primary">View All Properties</a>
			</div>
		</div>
	</div>
</section>

<!-- Local Market Stats -->
<section class="section bg-gradient-to-br from-primary-600 to-primary-700 text-white">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-6xl mx-auto">
			<div class="text-center mb-12">
				<h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Las Vegas Real Estate Market Overview</h2>
				<p class="text-lg text-white/90 max-w-3xl mx-auto">
					Current market insights to help you make informed decisions
				</p>
			</div>
			<div class="grid md:grid-cols-3 gap-6">
				<div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
					<div class="text-3xl md:text-4xl font-bold text-white mb-2">7,200</div>
					<div class="text-white/90 text-sm md:text-base">Active Listings Valley-Wide</div>
					<div class="text-white/70 text-xs mt-2">Down 14% from last spring</div>
				</div>
				<div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
					<div class="text-3xl md:text-4xl font-bold text-white mb-2">28</div>
					<div class="text-white/90 text-sm md:text-base">Avg Days on Market</div>
					<div class="text-white/70 text-xs mt-2">Properties under $900K</div>
				</div>
				<div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
					<div class="text-3xl md:text-4xl font-bold text-white mb-2">5.9-6.4%</div>
					<div class="text-white/90 text-sm md:text-base">Mortgage Rates</div>
					<div class="text-white/70 text-xs mt-2">Current range (Q1 2025)</div>
				</div>
			</div>
			<div class="text-center mt-8">
				<a href="/market-insights" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">
					View Detailed Market Insights
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Market Trends -->
<section id="market-trends" class="section bg-gray-50">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-6xl mx-auto">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">What Market Trends Should Las Vegas Buyers and Sellers Watch in 2025?</h2>
			<p class="text-lg text-gray-700 leading-relaxed mb-6">
				Las Vegas continues to balance migration-fueled demand with limited inventory. As of Q1 2025, we are tracking 7,200 active listings valley-wide—down 14% from last spring—while average days on market sits at 28 for properties under $900K and 42 for luxury inventory. Mortgage rates hovering between 5.9% and 6.4% have nudged some buyers to wait, yet well-prepared clients still secure homes with modest seller credits and rate buydowns. I keep you updated with weekly MLS absorption reports segmented by price band, so you can decide when to act versus when to negotiate aggressively.
			</p>
			<p class="text-lg text-gray-700 leading-relaxed mb-6">
				Summerlin, Skye Canyon, and Henderson master plans remain appreciation leaders because of school rankings, amenity packages, and access to the 215 Beltway. Meanwhile, North Las Vegas and Centennial Hills attract cash-flow investors thanks to larger lot sizes, VA-friendly builders, and rental yields exceeding 6.2%. Sellers should note that properly staged homes with modernized desert landscaping still command 3-5% premiums even when overall appreciation cools. That is why my listing prep checklist includes water-smart plant palettes, garage insulation updates, and pre-list pool inspections that eliminate buyer objections before they shrink your proceeds.
			</p>
			<p class="text-lg text-gray-700 leading-relaxed">
				Finally, remote-work relocations from California, Arizona, and the Mountain West continue to reshape our market. These buyers often tour virtually before their first flight, so digital storytelling matters. I produce narrated walkthroughs, neighborhood drive videos, and data-backed comparisons that answer the questions they would ask in person. Whether you are upsizing locally or investing from afar, you gain a clear playbook that aligns with the realities of inventory, incentives, and seasonal demand cycles.
			</p>
			<div class="mt-6 text-center">
				<a href="/market-insights" class="btn-secondary">
					View Detailed Market Insights
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Quick Links to Other Sections -->
<section id="services-resources" class="section bg-gray-50">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-7xl mx-auto">
			<div class="text-center mb-12">
				<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Services and Resources Are Available for Your Las Vegas Real Estate Journey?</h2>
				<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto">
					Services and resources available for your Las Vegas real estate journey include expert buyer and seller representation, comprehensive guides for buying and selling, neighborhood exploration tools, client testimonials, buying and selling guides, helpful resources, and frequently asked questions that provide everything you need to successfully navigate Las Vegas real estate transactions. My concierge service includes HOA document coordination across master-planned communities, pool inspection coordination, desert-specific home considerations, and personalized neighborhood tours showing parks, schools, shopping, and hidden gems locals love.
				</p>
				<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto">
					Think of this page as your control center. Each tile below unlocks deeper content—step-by-step guides, relocation checklists, closing-cost calculators, and neighborhood cheat sheets that explain why a $900K home appreciates faster in The Paseos than in Mountains Edge. I refreshed every resource in 2025 to reflect the newest water authority regulations, energy incentives, and resort-corridor developments so you are reading current intel, not outdated blog posts. Bookmark the sections you need now, then return whenever new questions pop up during inspections, appraisal gaps, or lease-back negotiations.
				</p>

				<div class="mt-6 bg-white border border-gray-100 rounded-2xl p-4 md:p-5">
					<p class="text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
						Quick access to key services & guides
					</p>
					<div class="flex flex-wrap gap-2 justify-center">
						{#each servicesLinks as link}
							<a
								href={link.href}
								class="px-3 py-1.5 rounded-full border border-gray-200 bg-white text-xs sm:text-sm text-gray-700 hover:text-primary-600 hover:border-primary-300 hover:bg-primary-50 transition-colors whitespace-nowrap"
							>
								{link.label}
							</a>
						{/each}
					</div>
				</div>
			</div>
			
			<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
				<a href="/about" class="card text-center hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 group">
					<div class="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full mb-4 group-hover:bg-primary-200 group-hover:scale-110 transition-all">
						<Award class="w-5 h-5 text-primary-600" />
					</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">Why Choose Us</h3>
					<p class="text-gray-600 text-sm">Experience the difference</p>
				</a>

				<a href="/services" class="card text-center hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 group">
					<div class="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full mb-4 group-hover:bg-primary-200 group-hover:scale-110 transition-all">
						<Home class="w-5 h-5 text-primary-600" />
					</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">Our Services</h3>
					<p class="text-gray-600 text-sm">Comprehensive solutions</p>
				</a>

				<a href="/neighborhoods" class="card text-center hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 group">
					<div class="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full mb-4 group-hover:bg-primary-200 group-hover:scale-110 transition-all">
						<MapPin class="w-5 h-5 text-primary-600" />
					</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">Neighborhoods</h3>
					<p class="text-gray-600 text-sm">Explore Las Vegas</p>
				</a>

				<a href="/testimonials" class="card text-center hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 group">
					<div class="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full mb-4 group-hover:bg-primary-200 group-hover:scale-110 transition-all">
						<Star class="w-5 h-5 text-primary-600" />
					</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">Testimonials</h3>
					<p class="text-gray-600 text-sm">Client success stories</p>
				</a>
			</div>
			
			<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
				<a href="/buying-guide" class="card text-center hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 group">
					<div class="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full mb-4 group-hover:bg-primary-200 group-hover:scale-110 transition-all">
						<Home class="w-5 h-5 text-primary-600" />
					</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">Buying Guide</h3>
					<p class="text-gray-600 text-sm">Step-by-step home buying</p>
				</a>

				<a href="/selling-guide" class="card text-center hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 group">
					<div class="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full mb-4 group-hover:bg-primary-200 group-hover:scale-110 transition-all">
						<DollarSign class="w-5 h-5 text-primary-600" />
					</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">Selling Guide</h3>
					<p class="text-gray-600 text-sm">Maximize your sale price</p>
				</a>

				<a href="/resources" class="card text-center hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 group">
					<div class="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full mb-4 group-hover:bg-primary-200 group-hover:scale-110 transition-all">
						<BookOpen class="w-5 h-5 text-primary-600" />
					</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">Resources</h3>
					<p class="text-gray-600 text-sm">Guides and tools</p>
				</a>

				<a href="/faq" class="card text-center hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 group">
					<div class="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full mb-4 group-hover:bg-primary-200 group-hover:scale-110 transition-all">
						<HelpCircle class="w-5 h-5 text-primary-600" />
					</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">FAQ</h3>
					<p class="text-gray-600 text-sm">Common questions</p>
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Start Investing CTA Section -->
<section class="relative bg-gradient-to-r from-primary-800 via-primary-700 to-primary-900 py-20 md:py-28 overflow-hidden">
	<div class="absolute inset-0 opacity-10">
		<div class="absolute inset-0" style="background-image: url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop'); background-size: cover; background-position: center;"></div>
	</div>
	<div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
		<div class="max-w-4xl mx-auto">
			<div class="inline-flex items-center justify-center w-16 h-16 bg-gold-500 rounded-full mb-6">
				<Home class="w-8 h-8 text-white" />
			</div>
			<h2 class="text-4xl md:text-6xl font-bold text-white mb-6">
				Start <span class="text-gold-400" style="font-family: 'Playfair Display', serif; font-style: italic;">Investing</span> with Dr. Janet Duffy
			</h2>
			<p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
				Ready to take the next step? Contact us today to secure the future of your real estate investment and maximize its potential.
			</p>
			<a href="/contact" class="inline-flex items-center justify-center px-10 py-5 bg-gold-500 hover:bg-gold-600 text-white font-bold text-xl rounded-lg shadow-2xl hover:shadow-gold-500/50 transition-all duration-300 hover:scale-105">
				Contact Us Today
			</a>
		</div>
	</div>
</section>
