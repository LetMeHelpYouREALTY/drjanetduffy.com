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
		{ id: 'listings', label: 'Grid Listings' },
		{ id: 'features', label: 'Grid Features' },
		{ id: 'comparison', label: 'View Comparison' }
	];

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Property Listings - Grid View | Dr. Janet Duffy REALTOR®</title>
	<meta name="description" content="Browse Las Vegas property listings with our grid view. See active, pending, and sold properties in a visual grid format." />
	<meta name="keywords" content="Las Vegas listings, property search, grid view, real estate listings" />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.drjanetduffy.com/listings-embedded" />
	<meta property="og:title" content="Property Listings - Grid View | Dr. Janet Duffy REALTOR®" />
	<meta property="og:description" content="Browse Las Vegas property listings with our grid view." />
	
	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://www.drjanetduffy.com/listings-embedded" />
	<meta property="twitter:title" content="Property Listings - Grid View" />
	<meta property="twitter:description" content="Browse Las Vegas property listings with our grid view." />

	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		"name": "Las Vegas Property Listings - Grid View",
		"description": "Grid view of Las Vegas property listings including active, pending, and sold properties.",
		"url": "https://www.drjanetduffy.com/listings-embedded"
	}
	</script>
</svelte:head>

<section class="section relative bg-gradient-to-b from-white to-slate-50">
	<div class="container-premium">
		<!-- On-page navigation -->
		<nav
			aria-label="Grid listings page sections"
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
			<h1 class="font-display text-5xl md:text-6xl font-bold mb-6 text-gray-900" style="letter-spacing: -0.03em;">Las Vegas Property Listings in Grid View</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
				Explore our properties using a visual grid format. This view shows active, pending, and sold properties for easy browsing.
			</p>
			<div class="bg-gradient-to-r from-primary-50 to-blue-50 border-l-4 border-primary-600 rounded-xl p-6 max-w-3xl mx-auto">
				<p class="text-gray-800 text-lg">
					<strong class="text-primary-700">Different Perspective:</strong> This alternative presentation gives you another way to browse and discover properties, with enhanced filtering and sorting options.
				</p>
			</div>
		</div>
	
		{#if mounted && browser}
			<div
				id="listings"
				class="realscout-listings office" 
				data-rep="drjanduffy" 
				data-status="active,pending,sold" 
				data-view="grid__view"
			>
			</div>
		{:else}
			<div class="loading-skeleton" id="listings">
				<div class="grid-premium md:grid-cols-2 lg:grid-cols-3 gap-8">
					{#each Array(9) as _}
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
				<p class="text-center text-gray-600 mt-12 text-lg">Loading property listings...</p>
			</div>
		{/if}
		
		<!-- Features Section -->
		<div class="mt-16 grid-premium md:grid-cols-3 gap-8" id="features">
			<div class="text-center bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-8 shadow-lg border border-gray-100">
				<div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl mb-4 shadow-md">
					<span class="text-3xl">📊</span>
				</div>
				<h3 class="font-display text-xl font-bold mb-3 text-gray-900">Grid View</h3>
				<p class="text-gray-700">Browse properties in an organized grid layout for easy comparison and selection.</p>
			</div>
			
			<div class="text-center bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-8 shadow-lg border border-gray-100">
				<div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl mb-4 shadow-md">
					<span class="text-3xl">🔍</span>
				</div>
				<h3 class="font-display text-xl font-bold mb-3 text-gray-900">Advanced Filtering</h3>
				<p class="text-gray-700">Filter by status, price range, property type, and more to find exactly what you're looking for.</p>
			</div>
			
			<div class="text-center bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-8 shadow-lg border border-gray-100">
				<div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl mb-4 shadow-md">
					<span class="text-3xl">📈</span>
				</div>
				<h3 class="font-display text-xl font-bold mb-3 text-gray-900">Complete History</h3>
				<p class="text-gray-700">View active, pending, and sold properties to see the complete market picture.</p>
			</div>
		</div>
		
		<!-- Comparison Section -->
		<div class="mt-16 bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-xl border border-gray-100" id="comparison">
			<h2 class="font-display text-3xl font-bold mb-6 text-center text-gray-900" style="letter-spacing: -0.02em;">How Can You Choose Your Preferred Property View?</h2>
			<p class="text-gray-700 mb-8 text-center leading-relaxed max-w-3xl mx-auto">
				Choose your preferred property view including web components view for modern interactive interface with advanced search, or embedded grid view for classic grid layout with comprehensive status filtering. Each view provides unique benefits to help you browse and discover Las Vegas properties effectively.
			</p>
			<div class="grid-premium md:grid-cols-2 gap-8">
				<div class="bg-white rounded-xl p-8 shadow-md">
					<h3 class="font-display text-xl font-bold mb-4 text-primary-600">Web Components View</h3>
					<ul class="space-y-3 mb-6">
						<li class="flex items-center gap-3">
						<CheckCircle class="w-5 h-5 text-green-600 flex-shrink-0" />
							<span class="text-gray-700">Modern, interactive interface</span>
						</li>
						<li class="flex items-center gap-3">
						<CheckCircle class="w-5 h-5 text-green-600 flex-shrink-0" />
							<span class="text-gray-700">Advanced search capabilities</span>
						</li>
						<li class="flex items-center gap-3">
						<CheckCircle class="w-5 h-5 text-green-600 flex-shrink-0" />
							<span class="text-gray-700">Mobile-optimized design</span>
						</li>
					</ul>
					<a href="/properties" class="inline-flex items-center gap-2 text-primary-600 font-bold hover:text-primary-700 hover:gap-3 transition-all duration-300">
						View Web Components Version <span class="text-xl">→</span>
					</a>
				</div>
				
				<div class="bg-white rounded-xl p-8 shadow-md border-2 border-primary-600">
					<h3 class="font-display text-xl font-bold mb-4 text-primary-600">Embedded Grid View</h3>
					<ul class="space-y-3 mb-6">
						<li class="flex items-center gap-3">
						<CheckCircle class="w-5 h-5 text-green-600 flex-shrink-0" />
							<span class="text-gray-700">Classic grid layout</span>
						</li>
						<li class="flex items-center gap-3">
						<CheckCircle class="w-5 h-5 text-green-600 flex-shrink-0" />
							<span class="text-gray-700">Familiar interface</span>
						</li>
						<li class="flex items-center gap-3">
						<CheckCircle class="w-5 h-5 text-green-600 flex-shrink-0" />
							<span class="text-gray-700">Comprehensive status filtering</span>
						</li>
					</ul>
					<span class="inline-flex items-center gap-2 text-primary-600 font-bold">
						<span class="w-2 h-2 bg-primary-600 rounded-full animate-pulse"></span>
						Current View
					</span>
				</div>
			</div>
		</div>
	</div>
</section>
