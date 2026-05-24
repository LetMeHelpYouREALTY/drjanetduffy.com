<script lang="ts">
	import { MapPin, Home, Award, CheckCircle, DollarSign, Users, TrendingUp, Building2 } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { lasVegasLocalData } from '$lib/data/las-vegas-local-data.js';

	interface PriceRange {
		min: number;
		max: number;
	}

	interface ComparisonCopy {
		northLasVegas: string;
	}

	interface NorthLasVegasData {
		priceRange: PriceRange;
		features: string[];
		comparison: {
			vsCentennialHills: ComparisonCopy;
		};
	}

	interface CentennialHillsData {
		priceRange: PriceRange;
		comparison: {
			vsNorthLasVegas: {
				centennialHills: string;
			};
		};
	}

	interface TocItem {
		id: string;
		label: string;
	}

	let mounted = false;

	const northLasVegas = lasVegasLocalData.northLasVegas as NorthLasVegasData;
	const centennialHills = lasVegasLocalData.centennialHills as CentennialHillsData;

	const features: string[] = [
		'More house for your money',
		'Many no-HOA neighborhoods',
		'Larger lots (up to half-acre)',
		'Growing area with new development',
		'VA loan-friendly options',
		'Affordable housing',
		'Great schools',
		'Strong job market'
	];

	const tocItems: TocItem[] = [
		{ id: 'overview', label: 'Overview' },
		{ id: 'benefits', label: 'Key Benefits' },
		{ id: 'comparison', label: 'Vs. Centennial Hills' },
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
	<title>North Las Vegas Luxury &amp; Relocation Real Estate | Dr. Janet Duffy REALTOR®</title>
	<meta name="description" content="Explore North Las Vegas real estate. Affordable housing, growing economy, and new developments in this family-friendly Las Vegas area community." />
	<meta name="keywords" content="North Las Vegas real estate, North Las Vegas homes, affordable Las Vegas homes, no HOA Las Vegas, larger lots Las Vegas" />
	<meta name="robots" content="index, follow" />
	
	<!-- Canonical URL -->
	<link rel="canonical" href="https://www.drjanetduffy.com/communities/north-las-vegas" />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.drjanetduffy.com/communities/north-las-vegas" />
	<meta property="og:title" content="North Las Vegas Luxury &amp; Relocation Real Estate | Dr. Janet Duffy REALTOR®" />
	<meta property="og:description" content="Explore North Las Vegas real estate. Affordable housing, growing economy, and new developments in this family-friendly Las Vegas area community." />
	<meta property="og:site_name" content="Las Vegas Luxury & Relocation REALTOR" />
	
	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content="https://www.drjanetduffy.com/communities/north-las-vegas" />
	<meta name="twitter:title" content="North Las Vegas Luxury &amp; Relocation Real Estate | Dr. Janet Duffy REALTOR®" />
	<meta name="twitter:description" content="Explore North Las Vegas real estate. Affordable housing, growing economy, and new developments." />
	
	<!-- Structured Data -->
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "Place",
		"name": "North Las Vegas",
		"description": "Affordable housing, growing economy, and new developments in this family-friendly Las Vegas area community",
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "North Las Vegas",
			"addressRegion": "NV",
			"addressCountry": "US"
		},
		"geo": {
			"@type": "GeoCoordinates",
			"latitude": "36.1989",
			"longitude": "-115.1175"
		}
	}
	</script>
</svelte:head>

<section class="section bg-gradient-to-b from-white via-gray-50 to-white">
	<div class="container-premium">
		<!-- On-page navigation -->
		<nav
			aria-label="North Las Vegas page sections"
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
				Discover Affordable Homes in North Las Vegas
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
				More affordable options with larger lots and homes without HOA restrictions. North Las Vegas offers more house for your money, many no-HOA neighborhoods, larger lots (up to half-acre), and a growing area with new development perfect for first-time buyers and investors.
			</p>
		</div>

		<!-- Hero Stats -->
		<div class="grid md:grid-cols-4 gap-6 mb-16">
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">{formatCurrency(northLasVegas.priceRange.min)}</div>
				<p class="text-gray-600 text-sm">Starting Price</p>
			</div>
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">No HOA</div>
				<p class="text-gray-600 text-sm">Many Options</p>
			</div>
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">Half-Acre</div>
				<p class="text-gray-600 text-sm">Larger Lots</p>
			</div>
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">Growing</div>
				<p class="text-gray-600 text-sm">Development</p>
			</div>
		</div>

		<!-- About North Las Vegas -->
		<div class="mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">What Makes North Las Vegas an Affordable Home Buying Opportunity?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				North Las Vegas offers more affordable options with larger lots and homes without HOA restrictions, making it ideal for buyers seeking more house for their money. With many no-HOA neighborhoods, larger lots (up to half-acre), and a growing area with new development, North Las Vegas provides excellent value for first-time buyers, growing families, and investors seeking affordable housing in the Las Vegas area.
			</p>
		</div>

		<div class="grid md:grid-cols-2 gap-12 mb-16" id="benefits">
			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
				<h3 class="text-2xl font-bold text-gray-900 mb-6">Community Overview</h3>
				<p class="text-gray-700 leading-relaxed mb-4">
					North Las Vegas features new master-planned communities, excellent schools, and numerous parks and recreational facilities. With ongoing development and infrastructure improvements, the area represents excellent value for homebuyers and investors seeking affordable housing in the Las Vegas area.
				</p>
				<p class="text-gray-700 leading-relaxed mb-6">
					The city's rapid growth has created opportunities for new construction, established neighborhoods, and diverse housing options that appeal to first-time buyers, growing families, and investors seeking value and growth potential.
				</p>
				<ul class="space-y-3">
					{#each features as feature}
						<li class="flex items-start gap-3">
							<CheckCircle class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
							<span class="text-gray-700">{feature}</span>
						</li>
					{/each}
				</ul>
			</div>

			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
				<h3 class="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
				<div class="space-y-6">
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<DollarSign class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Affordable Housing Options</h3>
							<p class="text-gray-700">Lower home prices compared to Las Vegas and Henderson, making homeownership accessible</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<TrendingUp class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Strong Growth Potential</h3>
							<p class="text-gray-700">Rapid development and increasing property values create excellent investment opportunities</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<Users class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Family-Friendly Environment</h3>
							<p class="text-gray-700">Great schools, parks, safe neighborhoods, and community amenities for families</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Comparison with Centennial Hills -->
		<div class="mb-16" id="comparison">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">North Las Vegas vs. Centennial Hills: Which Is Right for You?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				North Las Vegas offers more affordable options with larger lots and no-HOA neighborhoods, while Centennial Hills provides master-planned communities with amenities and newer construction. Understanding the differences helps you choose the right community for your lifestyle and budget.
			</p>
			<div class="grid md:grid-cols-2 gap-8">
				<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-8 shadow-lg border border-gray-100">
					<h3 class="text-2xl font-bold text-gray-900 mb-4">North Las Vegas</h3>
					<p class="text-gray-700 mb-4">{northLasVegas.comparison.vsCentennialHills.northLasVegas}</p>
					<div class="text-2xl font-bold text-primary-600 mb-2">{formatCurrency(northLasVegas.priceRange.min)} - {formatCurrency(northLasVegas.priceRange.max)}</div>
					<p class="text-gray-600 text-sm mb-4">Price Range</p>
					<ul class="space-y-2">
						{#each northLasVegas.features.slice(0, 4) as feature}
							<li class="flex items-start gap-2">
								<CheckCircle class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
								<span class="text-gray-700">{feature}</span>
							</li>
						{/each}
					</ul>
				</div>
				<div class="bg-gradient-to-br from-white to-blue-50/30 rounded-2xl p-8 shadow-lg border border-gray-100">
					<h3 class="text-2xl font-bold text-gray-900 mb-4">Centennial Hills</h3>
					<p class="text-gray-700 mb-4">{centennialHills.comparison.vsNorthLasVegas.centennialHills}</p>
					<div class="text-2xl font-bold text-blue-600 mb-2">{formatCurrency(centennialHills.priceRange.min)} - {formatCurrency(centennialHills.priceRange.max)}</div>
					<p class="text-gray-600 text-sm mb-4">Price Range</p>
					<ul class="space-y-2">
						<li class="flex items-start gap-2">
							<CheckCircle class="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
							<span class="text-gray-700">Master-planned with amenities</span>
						</li>
						<li class="flex items-start gap-2">
							<CheckCircle class="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
							<span class="text-gray-700">A-rated schools</span>
						</li>
						<li class="flex items-start gap-2">
							<CheckCircle class="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
							<span class="text-gray-700">7-9% annual appreciation</span>
						</li>
						<li class="flex items-start gap-2">
							<CheckCircle class="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
							<span class="text-gray-700">Newer construction (2000+)</span>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<!-- Properties -->
		<div class="mb-16" id="properties">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">What Properties Are Available in North Las Vegas?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				North Las Vegas offers diverse property types including new construction homes, established single-family homes, townhomes, and condos. Properties provide excellent value with affordable pricing ({formatCurrency(northLasVegas.priceRange.min)} - {formatCurrency(northLasVegas.priceRange.max)}), many no-HOA options, larger lots (up to half-acre), and access to growing neighborhoods with strong investment potential.
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
				<a href="/properties?neighborhood=north-las-vegas" class="btn-primary">View All North Las Vegas Properties</a>
			</div>
		</div>

		<!-- Concierge Services -->
		<div class="mb-16" id="concierge">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">How Does Dr. Janet Duffy's Concierge Service Help North Las Vegas Buyers?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				My concierge service includes personalized neighborhood tours showing parks, schools, shopping, and hidden gems locals love. I help identify no-HOA neighborhoods, larger lot options, and VA loan-friendly properties. My service includes tracking every North Las Vegas sale to provide real-time market analysis and investment insights.
			</p>
			<div class="grid md:grid-cols-3 gap-6">
				<div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
					<Building2 class="w-8 h-8 text-primary-600 mb-4" />
					<h3 class="text-lg font-bold text-gray-900 mb-2">No-HOA Options</h3>
					<p class="text-gray-600 text-sm">Identify neighborhoods without HOA restrictions and larger lot options</p>
				</div>
				<div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
					<MapPin class="w-8 h-8 text-primary-600 mb-4" />
					<h3 class="text-lg font-bold text-gray-900 mb-2">Community Tours</h3>
					<p class="text-gray-600 text-sm">Personalized tours showing parks, schools, shopping, and hidden gems locals love</p>
				</div>
				<div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
					<TrendingUp class="w-8 h-8 text-primary-600 mb-4" />
					<h3 class="text-lg font-bold text-gray-900 mb-2">Market Analysis</h3>
					<p class="text-gray-600 text-sm">Track every North Las Vegas sale and provide real-time market analysis and investment insights</p>
				</div>
			</div>
		</div>

		<!-- CTA Section -->
		<div class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-center text-white" id="cta">
			<h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Dream Home in North Las Vegas?</h2>
			<p class="text-lg text-white text-opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed">
				Let me help you find your perfect home in North Las Vegas. With deep knowledge of every neighborhood, every no-HOA option, and every development intimately, I'll guide you through every step of your home buying journey. I provide detailed tours showing parks, schools, shopping, and hidden gems locals love.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/contact" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">Contact Me</a>
				<a href="/properties?neighborhood=north-las-vegas" class="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">View Properties</a>
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

