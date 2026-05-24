<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { CheckCircle } from 'lucide-svelte';

	interface TocItem {
		id: string;
		label: string;
	}

	const tocItems: TocItem[] = [
		{ id: 'overview', label: 'Overview' },
		{ id: 'search', label: 'Search Options' },
		{ id: 'listings', label: 'List Listings' },
		{ id: 'comparison', label: 'View Comparison' },
		{ id: 'features', label: 'List View Benefits' }
	];

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Property Listings - List View | Dr. Janet Duffy REALTOR®</title>
	<meta name="description" content="Browse Las Vegas property listings in a detailed list format. See active, pending, and sold properties with comprehensive details." />
	<meta name="keywords" content="Las Vegas listings, property list, real estate listings, detailed view" />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.drjanetduffy.com/listings-list" />
	<meta property="og:title" content="Property Listings - List View | Dr. Janet Duffy REALTOR®" />
	<meta property="og:description" content="Browse Las Vegas property listings in a detailed list format." />
	
	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://www.drjanetduffy.com/listings-list" />
	<meta property="twitter:title" content="Property Listings - List View" />
	<meta property="twitter:description" content="Browse Las Vegas property listings in a detailed list format." />

	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		"name": "Las Vegas Property Listings - List View",
		"description": "List view of Las Vegas property listings including active, pending, and sold properties with detailed information.",
		"url": "https://www.drjanetduffy.com/listings-list"
	}
	</script>
</svelte:head>

<section class="section relative bg-gradient-to-b from-white to-slate-50">
	<div class="container-premium">
		<!-- On-page navigation -->
		<nav
			aria-label="List listings page sections"
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
			<h1 class="font-display text-5xl md:text-6xl font-bold mb-6 text-gray-900" style="letter-spacing: -0.03em;">Las Vegas Property Listings in List View</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
				Browse properties in a detailed list format that provides more information at a glance. Perfect for comparing multiple properties side by side.
			</p>
			<div class="bg-gradient-to-r from-green-50 to-primary-50 border-l-4 border-primary-600 rounded-xl p-6 max-w-3xl mx-auto">
				<p class="text-gray-800 text-lg">
					<strong class="text-primary-700">Detailed View:</strong> This list format shows more property details in each row, making it easier to compare features, prices, and locations.
				</p>
			</div>
		</div>
	
		<!-- Search Options -->
		<div class="mb-16 bg-white rounded-2xl shadow-xl p-10 border border-gray-100" id="search">
			<h2 class="font-display text-3xl font-bold mb-6 text-center text-gray-900" style="letter-spacing: -0.02em;">How Can You Search for Las Vegas Properties in List View?</h2>
			<p class="text-gray-700 mb-8 text-center leading-relaxed max-w-3xl mx-auto">
				Search for Las Vegas properties in list view using advanced search with detailed filters for location, price, bedrooms, and amenities, or simple search for quick results. Both search options help you find properties that match your needs and display results in a detailed list format for easy comparison.
			</p>
			<div class="grid-premium md:grid-cols-2 gap-8">
				<div class="bg-gradient-to-br from-primary-50/50 to-white rounded-xl p-6">
					<h3 class="font-display text-xl font-bold mb-4 text-gray-900">Advanced Search</h3>
					<div class="realscout-search advanced" 
						 data-rep="drjanduffy" 
						 data-button-color="#0284c7" 
						 data-button-font="#FFFFFF" 
						 data-background-color="#f8f9fa">
					</div>
				</div>
				<div class="bg-gradient-to-br from-primary-50/50 to-white rounded-xl p-6">
					<h3 class="font-display text-xl font-bold mb-4 text-gray-900">Simple Search</h3>
					<div class="realscout-search simple" 
						 data-rep="drjanduffy" 
						 data-button-color="#0284c7" 
						 data-button-font="#FFFFFF" 
						 data-background-color="#f8f9fa">
					</div>
				</div>
			</div>
		</div>
		
		<!-- Listings -->
		<div class="mb-16" id="listings">
			<div class="text-center mb-12">
				<h2 class="font-display text-4xl font-bold mb-6 text-gray-900" style="letter-spacing: -0.02em;">What Properties Are Available in List View?</h2>
				<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-4"></div>
				<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto">
					Properties available in list view include active listings, pending properties, and sold properties across Las Vegas. The list view format provides detailed information per property including price, location, bedrooms, bathrooms, square footage, and status, making it easy to compare multiple properties side by side.
				</p>
			</div>
			{#if mounted && browser}
				<div class="realscout-listings agent" 
					 data-rep="drjanduffy" 
					 data-status="active,pending,sold" 
					 data-view="list__view">
				</div>
			{:else}
				<div class="loading-skeleton">
					<div class="space-y-6">
						{#each Array(6) as _}
							<div class="animate-pulse bg-white rounded-2xl shadow-lg p-6">
								<div class="flex md:flex-row flex-col gap-6">
									<div class="md:w-1/3">
										<div class="bg-gray-200 h-64 rounded-xl"></div>
									</div>
									<div class="md:w-2/3 space-y-4">
										<div class="h-6 bg-gray-200 rounded w-3/4"></div>
										<div class="h-5 bg-gray-200 rounded w-1/2"></div>
										<div class="h-4 bg-gray-200 rounded w-2/3"></div>
										<div class="h-4 bg-gray-200 rounded w-1/3"></div>
									</div>
								</div>
							</div>
						{/each}
					</div>
					<p class="text-center text-gray-600 mt-12 text-lg">Loading list view...</p>
				</div>
			{/if}
		</div>
		
		<!-- View Comparison -->
		<div class="mb-16 bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-xl border border-gray-100" id="comparison">
			<h2 class="font-display text-3xl font-bold mb-6 text-center text-gray-900" style="letter-spacing: -0.02em;">How Can You Choose Your Preferred Property View?</h2>
			<p class="text-gray-700 mb-8 text-center leading-relaxed max-w-3xl mx-auto">
				Choose your preferred property view including grid view for visual browsing with property cards, list view for detailed comparison with comprehensive information, or web components view for modern interactive interface. Each view provides unique benefits to help you find and compare Las Vegas properties effectively.
			</p>
			<div class="grid-premium md:grid-cols-3 gap-8">
				<div class="text-center bg-white rounded-xl p-8 shadow-md">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl mb-4 shadow-md">
						<span class="text-3xl">📊</span>
					</div>
					<h3 class="font-display text-xl font-bold mb-3 text-gray-900">Grid View</h3>
					<p class="text-gray-700 mb-4">Visual cards with images and key details</p>
					<a href="/listings-embedded" class="inline-flex items-center gap-2 text-primary-600 font-bold hover:text-primary-700 hover:gap-3 transition-all duration-300">
						View Grid Version <span class="text-xl">→</span>
					</a>
				</div>
				
				<div class="text-center bg-white rounded-xl p-8 shadow-md border-2 border-primary-600">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl mb-4 shadow-md">
						<span class="text-3xl">📋</span>
					</div>
					<h3 class="font-display text-xl font-bold mb-3 text-gray-900">List View</h3>
					<p class="text-gray-700 mb-4">Detailed rows with comprehensive information</p>
					<span class="inline-flex items-center gap-2 text-primary-600 font-bold">
						<span class="w-2 h-2 bg-primary-600 rounded-full animate-pulse"></span>
						Current View
					</span>
				</div>
				
				<div class="text-center bg-white rounded-xl p-8 shadow-md">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl mb-4 shadow-md">
						<span class="text-3xl">💻</span>
					</div>
					<h3 class="font-display text-xl font-bold mb-3 text-gray-900">Web Components</h3>
					<p class="text-gray-700 mb-4">Modern interactive interface</p>
					<a href="/properties" class="inline-flex items-center gap-2 text-primary-600 font-bold hover:text-primary-700 hover:gap-3 transition-all duration-300">
						View Web Components <span class="text-xl">→</span>
					</a>
				</div>
			</div>
		</div>
		
		<!-- Features of List View -->
		<div class="grid-premium md:grid-cols-2 gap-12" id="features">
			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
				<h3 class="font-display text-2xl font-bold mb-6 text-gray-900">Benefits of List View</h3>
				<ul class="space-y-4">
					<li class="flex items-start gap-4">
						<CheckCircle class="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
						<span class="text-gray-700 leading-relaxed">More detailed information per property</span>
					</li>
					<li class="flex items-start gap-4">
						<CheckCircle class="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
						<span class="text-gray-700 leading-relaxed">Easy to scan and compare multiple properties</span>
					</li>
					<li class="flex items-start gap-4">
						<CheckCircle class="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
						<span class="text-gray-700 leading-relaxed">Compact layout shows more properties per page</span>
					</li>
					<li class="flex items-start gap-4">
						<CheckCircle class="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
						<span class="text-gray-700 leading-relaxed">Perfect for mobile and tablet viewing</span>
					</li>
				</ul>
			</div>
			
			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
				<h3 class="font-display text-2xl font-bold mb-6 text-gray-900">Quick Actions</h3>
				<div class="space-y-4">
					<a href="/contact" class="block bg-primary-600 text-white px-6 py-4 rounded-xl text-center font-bold text-lg shadow-md hover:bg-primary-700 hover:shadow-lg transition-all duration-300 hover:scale-105">
						Schedule a Showing
					</a>
					<a href="tel:+17027667668" class="block border-2 border-primary-600 text-primary-600 px-6 py-4 rounded-xl text-center font-bold text-lg hover:bg-primary-600 hover:text-white transition-all duration-300 hover:scale-105">
						Call (702) 766-7668
					</a>
					<a href="/home-value" class="block bg-gray-100 text-gray-800 px-6 py-4 rounded-xl text-center font-bold text-lg hover:bg-gray-200 transition-all duration-300 hover:scale-105">
						Get Home Value Estimate
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
