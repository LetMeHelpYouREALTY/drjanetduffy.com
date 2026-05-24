<script lang="ts">
	import { Home, AlertCircle, CheckCircle, DollarSign, TrendingUp, FileText } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	interface TocItem {
		id: string;
		label: string;
	}

	const benefits: string[] = [
		'Below market prices',
		'Negotiated with lender',
		'Potential savings',
		'Investment opportunities',
		'Less competition',
		'Longer timeline',
		'Lender approval required',
		'Professional guidance needed'
	];

	const tocItems: TocItem[] = [
		{ id: 'overview', label: 'Overview' },
		{ id: 'benefits', label: 'Key Benefits' },
		{ id: 'process', label: 'Short Sale Process' },
		{ id: 'properties', label: 'Available Short Sales' },
		{ id: 'cta', label: 'Work With Dr. Duffy' }
	];

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Short Sale Properties | Las Vegas Luxury &amp; Relocation REALTOR | Dr. Janet Duffy</title>
	<meta name="description" content="Browse Las Vegas short sale properties with Las Vegas Luxury & Relocation REALTOR Dr. Janet Duffy. Access below-market homes that require lender approval with expert guidance through complex negotiations." />

	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		"name": "Las Vegas Short Sale Properties",
		"description": "Short sale properties in Las Vegas sold below mortgage balance with lender approval.",
		"url": "https://www.drjanetduffy.com/property-types/short-sales"
	}
	</script>
</svelte:head>

<section class="section bg-gradient-to-b from-white via-gray-50 to-white">
	<div class="container-premium">
		<!-- On-page navigation -->
		<nav
			aria-label="Short sale properties page sections"
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
				Explore Short Sale Properties in Las Vegas
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Below market prices with lender approval, requiring specialized expertise
			</p>
		</div>

		<!-- Important Notice -->
		<div class="bg-blue-50 border-l-4 border-blue-400 p-6 mb-16 rounded-r-lg">
			<div class="flex items-start gap-4">
				<AlertCircle class="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
				<div>
					<h3 class="text-lg font-bold text-gray-900 mb-2">Understanding Short Sales</h3>
					<p class="text-gray-700 mb-2">
						A short sale occurs when a property is sold for less than the amount owed on the mortgage. The sale requires lender approval and can be a complex process. These transactions typically take longer than traditional sales but can offer significant savings for buyers.
					</p>
					<p class="text-gray-700">
						<strong>Important:</strong> Short sales require patience and expertise. The lender must approve the sale price, which can take 60-90 days or longer. Working with an experienced agent is essential.
					</p>
				</div>
			</div>
		</div>

		<!-- Stats -->
		<div class="grid md:grid-cols-4 gap-6 mb-16">
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">15-25%</div>
				<p class="text-gray-600 text-sm">Below Market</p>
			</div>
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">60-90</div>
				<p class="text-gray-600 text-sm">Days Process</p>
			</div>
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">Lender</div>
				<p class="text-gray-600 text-sm">Approval Required</p>
			</div>
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">Complex</div>
				<p class="text-gray-600 text-sm">Transaction</p>
			</div>
		</div>

		<!-- Benefits -->
		<div class="mb-16" id="benefits">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Why Should You Consider Short Sale Properties in Las Vegas?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				Las Vegas short sale properties offer below-market prices, negotiated deals with lenders, potential savings, investment opportunities, less competition, longer timeline, lender approval requirements, and professional guidance needs that make them attractive to patient buyers and investors seeking value with specialized expertise.
			</p>
		</div>

		<div class="grid md:grid-cols-2 gap-12 mb-16" id="process">
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
				<h3 class="text-2xl font-bold text-gray-900 mb-6">The Short Sale Process</h3>
				<div class="space-y-6">
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<FileText class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Step 1: Offer Submission and Documentation</h3>
							<p class="text-gray-700">Submit offer to seller with required documentation, who then presents complete package to lender for review</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<AlertCircle class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Step 2: Lender Review and Financial Hardship Evaluation</h3>
							<p class="text-gray-700">Lender evaluates offer, seller's financial hardship documentation, and property value to determine approval</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<TrendingUp class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Step 3: Lender Approval and Closing Process</h3>
							<p class="text-gray-700">Once lender approves short sale, proceed to closing process which typically takes 30-45 days after approval</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Properties -->
		<div class="mb-16" id="properties">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">What Short Sale Properties Are Available in Las Vegas?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				Las Vegas short sale properties include single-family homes, condos, and townhomes sold below mortgage balance with lender approval. Properties offer below-market prices but require longer timelines, lender approval, and specialized expertise to navigate the complex transaction process.
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
				<a href="/properties?type=short-sales" class="btn-primary">View All Short Sale Properties</a>
			</div>
		</div>

		<!-- CTA Section -->
		<div class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-center text-white" id="cta">
			<h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Explore Short Sale Opportunities in Las Vegas?</h2>
			<p class="text-lg text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
				I have extensive experience navigating short sales and can help you through the process. With deep knowledge of Las Vegas short sale markets, lender negotiations, and distressed property transactions, I'll guide you through every step of your short sale purchase journey.
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


