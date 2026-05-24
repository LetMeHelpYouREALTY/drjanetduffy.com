<script lang="ts">
	import { MapPin, Home, Award, CheckCircle, DollarSign, Users, TrendingUp } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	interface TocItem {
		id: string;
		label: string;
	}

	const features: string[] = [
		'Upscale community',
		'Custom luxury homes',
		'Scenic mountain views',
		'Gated neighborhoods',
		'Private amenities',
		'Exclusive location',
		'Strong property values',
		'Prestigious lifestyle'
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
	<title>Seven Hills Luxury &amp; Relocation Real Estate | Henderson | Dr. Janet Duffy REALTOR®</title>
	<meta name="description" content="Explore Seven Hills luxury and relocation real estate with Las Vegas Luxury & Relocation REALTOR Dr. Janet Duffy. Discover custom luxury homes, mountain views, and gated communities in Henderson." />

	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "Place",
		"name": "Seven Hills, Henderson, Nevada",
		"description": "Exclusive luxury community in Henderson with custom homes, mountain views, and gated neighborhoods.",
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "Henderson",
			"addressRegion": "NV",
			"postalCode": "89052",
			"addressCountry": "US"
		}
	}
	</script>
</svelte:head>

<section class="section bg-gradient-to-b from-white via-gray-50 to-white">
	<div class="container-premium">
		<!-- On-page navigation -->
		<nav
			aria-label="Seven Hills page sections"
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
				Discover Luxury Homes in Seven Hills, Las Vegas
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Upscale community with custom luxury homes, scenic mountain views, and prestigious lifestyle
			</p>
		</div>

		<!-- Hero Stats -->
		<div class="grid md:grid-cols-4 gap-6 mb-16">
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">$750K</div>
				<p class="text-gray-600 text-sm">Average Home Price</p>
			</div>
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">Custom</div>
				<p class="text-gray-600 text-sm">Luxury Homes</p>
			</div>
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">Gated</div>
				<p class="text-gray-600 text-sm">Neighborhoods</p>
			</div>
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">89113</div>
				<p class="text-gray-600 text-sm">Zip Code</p>
			</div>
		</div>

		<!-- About Seven Hills -->
		<div class="mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">What Makes Seven Hills an Exclusive Luxury Community?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				Seven Hills is an exclusive upscale community located in Henderson, known for its custom-built luxury homes and stunning mountain views. The community offers a prestigious lifestyle with gated neighborhoods, private amenities, custom architecture, high-end finishes, and panoramic views that attract discerning buyers seeking privacy, luxury, and exclusivity.
			</p>
		</div>

		<div class="grid md:grid-cols-2 gap-12 mb-16" id="benefits">
			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
				<h3 class="text-2xl font-bold text-gray-900 mb-6">Community Overview</h3>
				<p class="text-gray-700 leading-relaxed mb-4">
					Seven Hills features custom architecture, high-end finishes, and spacious lots with panoramic views of the Las Vegas Valley and surrounding mountains. The community's meticulously maintained properties and exclusive location create a prestigious living environment.
				</p>
				<p class="text-gray-700 leading-relaxed mb-6">
					The well-established neighborhood attracts discerning buyers seeking privacy, luxury, and exclusivity. Gated neighborhoods and private amenities ensure residents enjoy a secure, upscale lifestyle in one of Henderson's most desirable communities.
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
							<Award class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Custom Luxury Homes</h3>
							<p class="text-gray-700">Custom-built homes with premium finishes, high-end features, and spacious lots</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<TrendingUp class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Strong Property Values</h3>
							<p class="text-gray-700">Consistent appreciation and maintained property values make Seven Hills an excellent investment</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<MapPin class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Prime Henderson Location</h3>
							<p class="text-gray-700">Convenient access to Las Vegas and Henderson amenities while maintaining exclusivity</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Properties -->
		<div class="mb-16" id="properties">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">What Properties Are Available in Seven Hills?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				Seven Hills offers exclusive luxury properties including custom-built homes, estate properties, and upscale residences. Properties feature custom architecture, high-end finishes, spacious lots, and panoramic mountain views within gated neighborhoods.
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
				<a href="/properties?neighborhood=seven-hills" class="btn-primary">View All Seven Hills Properties</a>
			</div>
		</div>

		<!-- CTA Section -->
		<div class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-center text-white" id="cta">
			<h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Find Your Dream Luxury Home in Seven Hills?</h2>
			<p class="text-lg text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
				Let me help you find your perfect luxury home in Seven Hills. With deep knowledge of this exclusive Henderson community, custom properties, and luxury market, I'll guide you through every step of your home buying journey.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/contact" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">Contact Me</a>
				<a href="/properties?neighborhood=seven-hills" class="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">View Properties</a>
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


