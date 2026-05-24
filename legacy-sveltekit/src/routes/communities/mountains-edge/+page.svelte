<script lang="ts">
	import { MapPin, Home, Award, CheckCircle, DollarSign, Users, Mountain } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	interface TocItem {
		id: string;
		label: string;
	}

	const features: string[] = [
		'Master-planned community',
		'Family-friendly',
		'Parks and trails',
		'Top-rated schools',
		'Community centers',
		'Affordable pricing',
		'Growing area',
		'Great location'
	];

	const tocItems: TocItem[] = [
		{ id: 'overview', label: 'Overview' },
		{ id: 'benefits', label: 'Key Benefits' },
		{ id: 'properties', label: 'Available Properties' },
		{ id: 'cta', label: 'Work With Dr. Duffy' }
	];

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Mountains Edge Family &amp; Relocation Real Estate | Las Vegas | Dr. Janet Duffy REALTOR®</title>
	<meta name="description" content="Explore Mountains Edge family and relocation real estate with Las Vegas Luxury & Relocation REALTOR Dr. Janet Duffy. Discover affordable, family-friendly homes with parks, trails, and great schools in southwest Las Vegas." />

	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "Place",
		"name": "Mountains Edge, Las Vegas, Nevada",
		"description": "Master-planned community in southwest Las Vegas with family-friendly neighborhoods, parks, trails, and affordable homes.",
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "Las Vegas",
			"addressRegion": "NV",
			"addressCountry": "US"
		}
	}
	</script>
</svelte:head>

<section class="section bg-gradient-to-b from-white via-gray-50 to-white">
	<div class="container-premium">
		<!-- On-page navigation -->
		<nav
			aria-label="Mountains Edge page sections"
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
				Find Family-Friendly Homes in Mountains Edge
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Master-planned community with family-friendly atmosphere, parks, trails, and affordable housing
			</p>
		</div>

		<!-- Hero Stats -->
		<div class="grid md:grid-cols-4 gap-6 mb-16">
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">$500K</div>
				<p class="text-gray-600 text-sm">Average Home Price</p>
			</div>
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">3,500</div>
				<p class="text-gray-600 text-sm">Acres</p>
			</div>
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">Family</div>
				<p class="text-gray-600 text-sm">Friendly</p>
			</div>
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">Growing</div>
				<p class="text-gray-600 text-sm">Community</p>
			</div>
		</div>

		<!-- About Mountains Edge -->
		<div class="mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">What Makes Mountains Edge a Great Family-Friendly Community?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				Mountains Edge is a master-planned community located in southwest Las Vegas, offering affordable housing and a family-friendly atmosphere. The community spans over 3,500 acres and features numerous parks, walking trails, excellent schools, safe neighborhoods, and convenient access to shopping, dining, and employment centers that appeal to first-time buyers, growing families, and investors.
			</p>
		</div>

		<div class="grid md:grid-cols-2 gap-12 mb-16" id="benefits">
			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
				<h3 class="text-2xl font-bold text-gray-900 mb-6">Community Overview</h3>
				<p class="text-gray-700 leading-relaxed mb-4">
					Mountains Edge features numerous parks, walking trails, and community amenities within a master-planned environment designed for families. The area is known for its excellent schools, safe neighborhoods, and convenient access to shopping, dining, and employment centers.
				</p>
				<p class="text-gray-700 leading-relaxed mb-6">
					With new construction and established neighborhoods, Mountains Edge appeals to first-time buyers, growing families, and investors seeking value. The community's affordable pricing and family-friendly atmosphere create an ideal environment for raising children.
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
							<p class="text-gray-700">Great value with affordable home prices making homeownership accessible to first-time buyers</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<Award class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Top-Rated Schools</h3>
							<p class="text-gray-700">Excellent schools serving the community with high academic performance and comprehensive programs</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<Mountain class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Extensive Outdoor Recreation</h3>
							<p class="text-gray-700">Parks, walking trails, and recreational facilities provide endless opportunities for active families</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Properties -->
		<div class="mb-16" id="properties">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">What Properties Are Available in Mountains Edge?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				Mountains Edge offers diverse property types including new construction homes, established single-family homes, townhomes, and condos. Properties provide excellent value with affordable pricing, family-friendly features, and access to parks, trails, and excellent schools.
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
				<a href="/properties?neighborhood=mountains-edge" class="btn-primary">View All Mountains Edge Properties</a>
			</div>
		</div>

		<!-- CTA Section -->
		<div class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-center text-white" id="cta">
			<h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Find Your Dream Home in Mountains Edge?</h2>
			<p class="text-lg text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
				Let me help you find your perfect home in this family-friendly community. With deep knowledge of Mountains Edge's neighborhoods, schools, and affordable housing options, I'll guide you through every step of your home buying journey.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/contact" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">Contact Me</a>
				<a href="/properties?neighborhood=mountains-edge" class="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">View Properties</a>
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


