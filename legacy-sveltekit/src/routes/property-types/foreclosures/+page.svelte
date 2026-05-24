<script lang="ts">
	import { Home, AlertCircle, CheckCircle, DollarSign, TrendingUp, Key } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	interface TocItem {
		id: string;
		label: string;
	}

	const benefits: string[] = [
		'Below market prices',
		'Investment opportunities',
		'Potential for equity',
		'Quick purchase process',
		'As-is condition',
		'Cash buyers preferred',
		'Fixer-upper potential',
		'Portfolio diversification'
	];

	const tocItems: TocItem[] = [
		{ id: 'overview', label: 'Overview' },
		{ id: 'benefits', label: 'Key Benefits' },
		{ id: 'considerations', label: 'Important Considerations' },
		{ id: 'properties', label: 'Available Foreclosures' },
		{ id: 'cta', label: 'Work With Dr. Duffy' }
	];

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Foreclosure Properties | Las Vegas Luxury &amp; Relocation REALTOR | Dr. Janet Duffy</title>
	<meta name="description" content="Browse Las Vegas foreclosure properties with Las Vegas Luxury & Relocation REALTOR Dr. Janet Duffy. Find below-market homes and investment opportunities with expert guidance through complex transactions." />

	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		"name": "Las Vegas Foreclosure Properties",
		"description": "Foreclosure properties in Las Vegas offering below-market prices and investment potential.",
		"url": "https://www.drjanetduffy.com/property-types/foreclosures"
	}
	</script>
</svelte:head>

<section class="section bg-gradient-to-b from-white via-gray-50 to-white">
	<div class="container-premium">
		<!-- On-page navigation -->
		<nav
			aria-label="Foreclosure properties page sections"
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
				Find Foreclosure Properties for Sale in Las Vegas
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Below market prices and investment opportunities for qualified buyers
			</p>
		</div>

		<!-- Important Notice -->
		<div class="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-16 rounded-r-lg">
			<div class="flex items-start gap-4">
				<AlertCircle class="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
				<div>
					<h3 class="text-lg font-bold text-gray-900 mb-2">Important Information</h3>
					<p class="text-gray-700 mb-2">
						Foreclosure properties are sold "as-is" and may require repairs. These transactions can be complex and require specialized knowledge. I can help you navigate the foreclosure process and identify opportunities.
					</p>
					<p class="text-gray-700">
						<strong>Note:</strong> Many foreclosure properties require cash purchases or have strict financing requirements. Pre-approval and proof of funds are typically required.
					</p>
				</div>
			</div>
		</div>

		<!-- Stats -->
		<div class="grid md:grid-cols-4 gap-6 mb-16">
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">20-30%</div>
				<p class="text-gray-600 text-sm">Below Market</p>
			</div>
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">As-Is</div>
				<p class="text-gray-600 text-sm">Condition</p>
			</div>
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">Cash</div>
				<p class="text-gray-600 text-sm">Preferred</p>
			</div>
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">Quick</div>
				<p class="text-gray-600 text-sm">Process</p>
			</div>
		</div>

		<!-- Benefits -->
		<div class="mb-16" id="benefits">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Why Should You Consider Foreclosure Properties in Las Vegas?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				Las Vegas foreclosure properties offer below-market prices, investment opportunities, potential for equity, quick purchase process, as-is condition, cash buyer preference, fixer-upper potential, and portfolio diversification that make them attractive to investors, cash buyers, and buyers seeking value opportunities with specialized expertise.
			</p>
		</div>

		<div class="grid md:grid-cols-2 gap-12 mb-16" id="considerations">
			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
				<h3 class="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
				<ul class="space-y-4">
					{#each benefits as benefit}
						<li class="flex items-start gap-3">
							<CheckCircle class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
							<span class="text-gray-700">{benefit}</span>
						</li>
					{/each}
				</ul>
			</div>

			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
				<h3 class="text-2xl font-bold text-gray-900 mb-6">Important Considerations</h3>
				<div class="space-y-6">
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<AlertCircle class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">As-Is Property Condition</h3>
							<p class="text-gray-700">Properties are sold without warranties or repairs, requiring thorough inspection and potential renovation costs</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<DollarSign class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Financing Challenges and Requirements</h3>
							<p class="text-gray-700">Many foreclosure properties require cash purchases or specialized financing, limiting buyer options</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<TrendingUp class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Essential Due Diligence Process</h3>
							<p class="text-gray-700">Thorough inspection, title research, and property condition assessment are essential before purchase</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Properties -->
		<div class="mb-16" id="properties">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">What Foreclosure Properties Are Available in Las Vegas?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				Las Vegas foreclosure properties include single-family homes, condos, and townhomes sold as-is at below-market prices. Properties require cash purchases or specialized financing and offer investment opportunities for qualified buyers seeking value and potential equity gains.
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
				<a href="/properties?type=foreclosures" class="btn-primary">View All Foreclosure Properties</a>
			</div>
		</div>

		<!-- CTA Section -->
		<div class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-center text-white" id="cta">
			<h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Explore Foreclosure Investment Opportunities in Las Vegas?</h2>
			<p class="text-lg text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
				I can help you navigate the foreclosure process and identify investment opportunities. With deep knowledge of Las Vegas foreclosure markets, distressed properties, and specialized transaction expertise, I'll guide you through every step of your foreclosure purchase journey.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/contact" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">Contact Me</a>
				<a href="/services/distressed-properties" class="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">Distressed Property Services</a>
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


