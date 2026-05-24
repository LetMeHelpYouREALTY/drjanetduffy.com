<script lang="ts">
	import { MapPin, Home, Award, TrendingUp, DollarSign, Users, CheckCircle, Clock, Building2, GraduationCap, School } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { lasVegasLocalData } from '$lib/data/las-vegas-local-data.js';

	interface PriceRange {
		min: number;
		max: number;
	}

	interface AppreciationRate {
		min: number;
		max: number;
	}

	interface SchoolInfo {
		name: string;
		rating: string;
	}

	interface CentennialHillsData {
		priceRange: PriceRange;
		appreciationRate: AppreciationRate;
		features: string[];
		schools: SchoolInfo[];
		comparison: {
			vsNorthLasVegas: {
				centennialHills: string;
			};
		};
	}

	interface NorthLasVegasData {
		priceRange: PriceRange;
		comparison: {
			vsCentennialHills: {
				northLasVegas: string;
			};
		};
	}

	interface TocItem {
		id: string;
		label: string;
	}

	let mounted = false;

	const centennialHills = lasVegasLocalData.centennialHills as CentennialHillsData;
	const northLasVegas = lasVegasLocalData.northLasVegas as NorthLasVegasData;

	const tocItems: TocItem[] = [
		{ id: 'overview', label: 'Overview' },
		{ id: 'investment', label: 'Investment Potential' },
		{ id: 'schools', label: 'Schools' },
		{ id: 'comparison', label: 'Vs. North Las Vegas' },
		{ id: 'pricing', label: 'Pricing' },
		{ id: 'properties', label: 'Available Properties' },
		{ id: 'concierge', label: 'Concierge Services' },
		{ id: 'cta', label: 'Work With Dr. Duffy' }
	];

	onMount(() => {
		mounted = true;
	});

	const formatCurrency = (amount: number): string =>
		new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
			maximumFractionDigits: 0
		}).format(amount);
</script>

<svelte:head>
	<title>Centennial Hills Luxury &amp; Relocation Real Estate | Las Vegas | Dr. Janet Duffy REALTOR®</title>
	<meta name="description" content="Explore Centennial Hills luxury and relocation real estate with Las Vegas Luxury & Relocation REALTOR Dr. Janet Duffy. Newer master-planned communities with excellent schools, strong appreciation, and great value in northwest Las Vegas." />
	<meta name="keywords" content="Centennial Hills real estate, Centennial Hills homes, Las Vegas Centennial Hills, northwest Las Vegas, A-rated schools Centennial Hills" />
	<meta name="robots" content="index, follow" />
	
	<!-- Canonical URL -->
	<link rel="canonical" href="https://www.drjanetduffy.com/communities/centennial-hills" />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.drjanetduffy.com/communities/centennial-hills" />
	<meta property="og:title" content="Centennial Hills Real Estate | Las Vegas | Dr. Janet Duffy REALTOR®" />
	<meta property="og:description" content="Explore Centennial Hills real estate. Newer master-planned communities with excellent schools, strong appreciation, and great value in northwest Las Vegas." />
	<meta property="og:site_name" content="Homes by Dr. Duffy" />
	
	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content="https://www.drjanetduffy.com/communities/centennial-hills" />
	<meta name="twitter:title" content="Centennial Hills Real Estate | Las Vegas | Dr. Janet Duffy REALTOR®" />
	<meta name="twitter:description" content="Explore Centennial Hills real estate. Newer master-planned communities with excellent schools and strong appreciation." />
	
	<!-- Structured Data -->
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "Place",
		"name": "Centennial Hills",
		"description": "Newer master-planned communities with excellent schools, strong appreciation (7-9% annually), and great value in northwest Las Vegas",
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "Las Vegas",
			"addressRegion": "NV",
			"addressCountry": "US"
		},
		"geo": {
			"@type": "GeoCoordinates",
			"latitude": "36.2800",
			"longitude": "-115.2500"
		}
	}
	</script>
</svelte:head>

<section class="section bg-gradient-to-b from-white via-gray-50 to-white">
	<div class="container-premium">
		<!-- On-page navigation -->
		<nav
			aria-label="Centennial Hills page sections"
			class="mb-10 rounded-full border border-gray-200 bg-white/80 backdrop-blur px-3 py-2 shadow-sm overflow-x-auto scrollbar-hide"
		>
			<ul class="flex items-center gap-2 text-sm whitespace-nowrap">
				{#each tocItems as item}
					<li>
						<a
							href={`#${item.id}`}
							class="inline-flex items-center rounded-full px-3 py-1.5 text-gray-600 hover:text-primary-700 hover:bg-primary-50 transition-colors no-underline"
						>
							{item.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<div class="text-center mb-16" id="overview">
			<h1 class="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900">
				Find Your Dream Home in Centennial Hills, Las Vegas
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
				Newer master-planned communities with excellent schools, strong appreciation (7-9% annually), and great value in northwest Las Vegas. Centennial Hills offers newer construction, master-planned amenities, top-rated schools, and close proximity to shopping and dining.
			</p>
		</div>

		<!-- Hero Stats -->
		<div class="grid md:grid-cols-4 gap-6 mb-16">
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">{formatCurrency(centennialHills.priceRange.min)}</div>
				<p class="text-gray-600 text-sm">Starting Price</p>
			</div>
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">{centennialHills.appreciationRate.min}-{centennialHills.appreciationRate.max}%</div>
				<p class="text-gray-600 text-sm">Annual Appreciation</p>
			</div>
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">A</div>
				<p class="text-gray-600 text-sm">School Rating</p>
			</div>
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">2000+</div>
				<p class="text-gray-600 text-sm">Year Built</p>
			</div>
		</div>

		<!-- About Centennial Hills -->
		<div class="mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">What Makes Centennial Hills a Great Las Vegas Community?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				Centennial Hills features newer master-planned communities with amenities and HOAs, offering excellent schools, strong appreciation (7-9% annually), and great value in northwest Las Vegas. Most homes were built after 2000, featuring modern designs, master-planned amenities, top-rated schools, and close proximity to shopping and dining.
			</p>
		</div>

		<div class="grid md:grid-cols-2 gap-12 mb-16" id="investment">
			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
				<h3 class="text-2xl font-bold text-gray-900 mb-6">Community Overview</h3>
				<p class="text-gray-700 leading-relaxed mb-4">
					Centennial Hills features newer construction (most built after 2000), master-planned communities with parks and trails, strong appreciation (7-9% annually), excellent schools, and close proximity to shopping and dining. The area offers great value for Las Vegas homebuyers seeking newer homes with modern amenities.
				</p>
				<ul class="space-y-3">
					{#each centennialHills.features as feature}
						<li class="flex items-start gap-3">
							<CheckCircle class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
							<span class="text-gray-700">{feature}</span>
						</li>
					{/each}
				</ul>
			</div>

			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
				<h3 class="text-2xl font-bold text-gray-900 mb-6">Investment Potential</h3>
				<div class="space-y-6">
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<TrendingUp class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Strong Appreciation</h3>
							<p class="text-gray-700">7-9% annual appreciation rate makes Centennial Hills an excellent long-term investment</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<GraduationCap class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Top-Rated Schools</h3>
							<p class="text-gray-700">A-rated schools including Decker Elementary and Escobedo Middle School</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<Home class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Newer Construction</h3>
							<p class="text-gray-700">Most homes built after 2000 with modern designs and energy-efficient features</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Schools -->
		<div class="mb-16" id="schools">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">What Schools Serve Centennial Hills?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				Centennial Hills is served by top-rated schools including Decker Elementary (A-rated) and Escobedo Middle School (A-rated), providing excellent educational opportunities for families. These schools offer comprehensive programs, modern facilities, and strong academic performance.
			</p>
			<div class="grid md:grid-cols-2 gap-6">
				{#each centennialHills.schools as school}
					<div class="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
						<div class="flex items-start gap-4">
							<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
								<School class="w-6 h-6 text-primary-600" />
							</div>
							<div>
								<h3 class="text-xl font-bold text-gray-900 mb-2">{school.name}</h3>
								<div class="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-3">
									<Award class="w-4 h-4" />
									{school.rating} Rating
								</div>
								<p class="text-gray-700">Excellent academic programs and modern facilities serving Centennial Hills families</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Comparison with North Las Vegas -->
		<div class="mb-16" id="comparison">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Centennial Hills vs. North Las Vegas: Which Is Right for You?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				Centennial Hills offers master-planned communities with amenities and HOAs, while North Las Vegas provides more affordable options with larger lots and no-HOA neighborhoods. Understanding the differences helps you choose the right community for your lifestyle and budget.
			</p>
			<div class="grid md:grid-cols-2 gap-8">
				<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-8 shadow-lg border border-gray-100">
					<h3 class="text-2xl font-bold text-gray-900 mb-4">Centennial Hills</h3>
					<p class="text-gray-700 mb-4">{centennialHills.comparison.vsNorthLasVegas.centennialHills}</p>
					<div class="text-2xl font-bold text-primary-600 mb-2">{formatCurrency(centennialHills.priceRange.min)} - {formatCurrency(centennialHills.priceRange.max)}</div>
					<p class="text-gray-600 text-sm mb-4">Price Range</p>
					<ul class="space-y-2">
						<li class="flex items-start gap-2">
							<CheckCircle class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
							<span class="text-gray-700">Master-planned with amenities</span>
						</li>
						<li class="flex items-start gap-2">
							<CheckCircle class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
							<span class="text-gray-700">A-rated schools</span>
						</li>
						<li class="flex items-start gap-2">
							<CheckCircle class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
							<span class="text-gray-700">7-9% annual appreciation</span>
						</li>
						<li class="flex items-start gap-2">
							<CheckCircle class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
							<span class="text-gray-700">Newer construction (2000+)</span>
						</li>
					</ul>
				</div>
				<div class="bg-gradient-to-br from-white to-blue-50/30 rounded-2xl p-8 shadow-lg border border-gray-100">
					<h3 class="text-2xl font-bold text-gray-900 mb-4">North Las Vegas</h3>
					<p class="text-gray-700 mb-4">{northLasVegas.comparison.vsCentennialHills.northLasVegas}</p>
					<div class="text-2xl font-bold text-blue-600 mb-2">{formatCurrency(northLasVegas.priceRange.min)} - {formatCurrency(northLasVegas.priceRange.max)}</div>
					<p class="text-gray-600 text-sm mb-4">Price Range</p>
					<ul class="space-y-2">
						<li class="flex items-start gap-2">
							<CheckCircle class="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
							<span class="text-gray-700">More affordable options</span>
						</li>
						<li class="flex items-start gap-2">
							<CheckCircle class="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
							<span class="text-gray-700">Larger lots (up to half-acre)</span>
						</li>
						<li class="flex items-start gap-2">
							<CheckCircle class="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
							<span class="text-gray-700">Many no-HOA neighborhoods</span>
						</li>
						<li class="flex items-start gap-2">
							<CheckCircle class="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
							<span class="text-gray-700">Growing area with new development</span>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<!-- Pricing -->
		<div class="mb-16" id="pricing">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">How Much Do Homes Cost in Centennial Hills?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				Centennial Hills home prices range from $475,000 to $650,000, offering excellent value for newer construction homes with master-planned amenities. Factors affecting prices include proximity to schools, lot size, home age, and specific community amenities.
			</p>
			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-8 shadow-lg border border-gray-100">
				<h3 class="text-2xl font-bold text-gray-900 mb-6">Current Centennial Hills Pricing (November 2025)</h3>
				<div class="grid md:grid-cols-3 gap-6">
					<div class="bg-white rounded-lg p-6 text-center">
						<div class="text-sm text-gray-600 mb-2">Starting Price</div>
						<div class="text-2xl font-bold text-primary-600">{formatCurrency(centennialHills.priceRange.min)}</div>
					</div>
					<div class="bg-white rounded-lg p-6 text-center">
						<div class="text-sm text-gray-600 mb-2">Average Price</div>
						<div class="text-2xl font-bold text-primary-600">{formatCurrency((centennialHills.priceRange.min + centennialHills.priceRange.max) / 2)}</div>
					</div>
					<div class="bg-white rounded-lg p-6 text-center">
						<div class="text-sm text-gray-600 mb-2">Maximum Price</div>
						<div class="text-2xl font-bold text-primary-600">{formatCurrency(centennialHills.priceRange.max)}</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Properties in Centennial Hills -->
		<div class="mb-16" id="properties">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">What Properties Are Available in Centennial Hills?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				Centennial Hills offers newer single-family homes, townhomes, and condos in master-planned communities. Properties feature modern designs, energy-efficient construction, master-planned amenities, and access to top-rated schools.
			</p>
			{#if mounted && browser}
				<div class="realscout-wrapper">
					<realscout-office-listings 
						agent-encoded-id="QWdlbnQtMjI1MDUw"
						sort-order="STATUS_AND_SIGNIFICANT_CHANGE"
						listing-status="For Sale"
						property-types="SFR,MF,TC"
						max-results="6">
					</realscout-office-listings>
				</div>
			{:else}
				<div class="loading-skeleton">
					<div class="grid md:grid-cols-3 gap-6">
						{#each Array(3) as _}
							<div class="animate-pulse bg-white rounded-2xl shadow-lg overflow-hidden">
								<div class="bg-gray-200 h-64"></div>
								<div class="p-6 space-y-4">
									<div class="h-6 bg-gray-200 rounded w-3/4"></div>
									<div class="h-5 bg-gray-200 rounded w-1/2"></div>
								</div>
							</div>
						{/each}
					</div>
				</div>
			{/if}
			<div class="text-center mt-8">
				<a href="/properties?neighborhood=centennial-hills" class="btn-primary">View All Centennial Hills Properties</a>
			</div>
		</div>

		<!-- Concierge Services -->
		<div class="mb-16" id="concierge">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">How Does Dr. Janet Duffy's Concierge Service Help Centennial Hills Buyers?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				My concierge service includes personalized neighborhood tours showing parks, schools, shopping, and hidden gems locals love. I review all HOA documents before you buy, explaining restrictions and fees clearly. My service includes tracking every Centennial Hills sale to provide real-time market analysis and investment insights.
			</p>
			<div class="grid md:grid-cols-3 gap-6">
				<div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
					<Building2 class="w-8 h-8 text-primary-600 mb-4" />
					<h3 class="text-lg font-bold text-gray-900 mb-2">HOA Document Review</h3>
					<p class="text-gray-600 text-sm">Review all HOA documents before you buy, explaining restrictions and fees clearly</p>
				</div>
				<div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
					<MapPin class="w-8 h-8 text-primary-600 mb-4" />
					<h3 class="text-lg font-bold text-gray-900 mb-2">Community Tours</h3>
					<p class="text-gray-600 text-sm">Personalized tours showing parks, schools, shopping, and hidden gems locals love</p>
				</div>
				<div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
					<TrendingUp class="w-8 h-8 text-primary-600 mb-4" />
					<h3 class="text-lg font-bold text-gray-900 mb-2">Market Analysis</h3>
					<p class="text-gray-600 text-sm">Track every Centennial Hills sale and provide real-time market analysis and investment insights</p>
				</div>
			</div>
		</div>

		<!-- CTA Section -->
		<div class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-center text-white" id="cta">
			<h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Dream Home in Centennial Hills?</h2>
			<p class="text-lg text-white text-opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed">
				Let me help you find your perfect home in Centennial Hills. With deep knowledge of every community, every school, and every neighborhood intimately, I'll guide you through every step of your home buying journey. I provide detailed tours showing parks, schools, shopping, and hidden gems locals love.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/contact" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">Contact Me</a>
				<a href="/properties?neighborhood=centennial-hills" class="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">View Properties</a>
			</div>
		</div>
	</div>
</section>

<style>
	.realscout-wrapper {
		min-height: 400px;
		width: 100%;
		contain: layout style paint;
		position: relative;
	}
	
	.loading-skeleton {
		min-height: 400px;
		width: 100%;
	}
</style>

