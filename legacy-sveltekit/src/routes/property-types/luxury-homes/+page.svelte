<script lang="ts">
	import { Home, Award, TrendingUp, Key, CheckCircle, Camera, Shield } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	interface LuxuryArea {
		name: string;
		avgPrice: string;
		description: string;
	}

	interface TocItem {
		id: string;
		label: string;
	}

	let mounted = false;

	const luxuryFeatures: string[] = [
		'High-end finishes and materials',
		'Premium locations and views',
		'Custom architecture and design',
		'Resort-style amenities',
		'Gated communities',
		'Privacy and security',
		'Smart home technology',
		'Professional landscaping'
	];

	const luxuryAreas: LuxuryArea[] = [
		{ name: 'The Ridges', avgPrice: '$2M-$8M', description: 'Exclusive guard-gated community with Jack Nicklaus golf' },
		{ name: 'MacDonald Highlands', avgPrice: '$1M-$5M', description: 'City views and DragonRidge Country Club' },
		{ name: 'Red Rock Country Club', avgPrice: '$950K-$3M', description: 'Luxury golf community with mountain views' },
		{ name: 'The Summit', avgPrice: '$1.5M-$5M', description: 'Guard-gated luxury community' },
		{ name: 'Seven Hills', avgPrice: '$750K-$2M', description: 'Custom homes with scenic views' }
	];

	const tocItems: TocItem[] = [
		{ id: 'overview', label: 'Overview' },
		{ id: 'features', label: 'Premium Features' },
		{ id: 'why-invest', label: 'Why Invest' },
		{ id: 'areas', label: 'Luxury Communities' },
		{ id: 'properties', label: 'Available Properties' },
		{ id: 'cta', label: 'Work With Dr. Duffy' }
	];

	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Luxury Homes for Sale | Las Vegas Luxury &amp; Relocation REALTOR | Dr. Janet Duffy</title>
	<meta name="description" content="Browse Las Vegas luxury homes with Las Vegas Luxury & Relocation REALTOR Dr. Janet Duffy. Explore exclusive properties in The Ridges, MacDonald Highlands, Southern Highlands, Seven Hills, and other premier communities." />

	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		"name": "Las Vegas Luxury Homes for Sale",
		"description": "Exclusive luxury homes and estates in Las Vegas's most prestigious communities.",
		"url": "https://www.drjanetduffy.com/property-types/luxury-homes"
	}
	</script>
</svelte:head>

<section class="section bg-gradient-to-b from-white via-gray-50 to-white">
	<div class="container-premium">
		<!-- On-page navigation -->
		<nav
			aria-label="Luxury homes page sections"
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
				Discover Luxury Homes for Sale in Las Vegas
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Exclusive luxury properties in Las Vegas's most prestigious communities
			</p>
		</div>

		<!-- Luxury Stats -->
		<div class="grid md:grid-cols-4 gap-6 mb-16">
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">$1M+</div>
				<p class="text-gray-600 text-sm">Starting Price Range</p>
			</div>
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">5000+</div>
				<p class="text-gray-600 text-sm">Sq. Ft. Average</p>
			</div>
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">4+</div>
				<p class="text-gray-600 text-sm">Bedrooms</p>
			</div>
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">Gated</div>
				<p class="text-gray-600 text-sm">Communities</p>
			</div>
		</div>

		<!-- Luxury Features -->
		<div class="mb-16" id="features">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">What Features Define Las Vegas Luxury Homes?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				Las Vegas luxury homes feature high-end finishes and materials, premium locations with stunning views, custom architecture and design, resort-style amenities, gated communities, privacy and security features, smart home technology, and professional landscaping that create an exceptional living experience.
			</p>
		</div>

		<div class="grid md:grid-cols-2 gap-12 mb-16">
			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
				<h3 class="text-2xl font-bold text-gray-900 mb-6">Premium Features</h3>
				<ul class="space-y-4">
					{#each luxuryFeatures as feature}
						<li class="flex items-start gap-3">
							<CheckCircle class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
							<span class="text-gray-700">{feature}</span>
						</li>
					{/each}
				</ul>
			</div>

			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
				<h3 class="text-2xl font-bold text-gray-900 mb-6">Investment Benefits</h3>
				<div class="space-y-6">
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<TrendingUp class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Strong Property Appreciation</h3>
							<p class="text-gray-700">Luxury properties maintain and increase value over time, providing excellent long-term investment returns</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<Shield class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Enhanced Privacy and Security</h3>
							<p class="text-gray-700">Gated communities and exclusive locations provide privacy, security, and peace of mind</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<Award class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Premium Resort-Style Lifestyle</h3>
							<p class="text-gray-700">Resort-style amenities and world-class facilities create an unparalleled living experience</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Why Invest in Luxury -->
		<div class="mb-16" id="why-invest">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Why Should You Invest in Las Vegas Luxury Real Estate?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				Las Vegas luxury real estate offers strong property appreciation, enhanced privacy and security, and a premium resort-style lifestyle. These benefits combine with exclusive locations, gated communities, and world-class amenities to create exceptional long-term investment value and unparalleled living experiences.
			</p>
		</div>

		<!-- Luxury Areas -->
		<div class="mb-16" id="areas">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Which Las Vegas Communities Offer Premier Luxury Homes?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				Las Vegas premier luxury communities include The Ridges, Red Rock Country Club, Southern Highlands, and Seven Hills. Each community offers exclusive gated neighborhoods, custom luxury homes, resort-style amenities, and prestigious lifestyles that attract discerning buyers seeking privacy, luxury, and exclusivity.
			</p>
			<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
				{#each luxuryAreas as area}
					<div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
						<h3 class="text-lg font-bold text-gray-900 mb-2">{area.name}</h3>
						<p class="text-primary-600 font-semibold mb-2">{area.avgPrice}</p>
						<p class="text-gray-600 text-sm">{area.description}</p>
					</div>
				{/each}
			</div>
		</div>

		<!-- Luxury Properties -->
		<div class="mb-16" id="properties">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">What Luxury Properties Are Available in Las Vegas?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				Las Vegas luxury properties include custom estates, upscale homes, and premium residences featuring high-end finishes, premium locations, custom architecture, resort-style amenities, and gated community access. Properties range from $750K to multi-million dollar estates in premier communities.
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
				<a href="/properties?type=luxury" class="btn-primary">View All Luxury Properties</a>
			</div>
		</div>

		<!-- CTA Section -->
		<div class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-center text-white" id="cta">
			<h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Find Your Dream Luxury Home in Las Vegas?</h2>
			<p class="text-lg text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
				Let me help you find your perfect luxury home in Las Vegas. With deep knowledge of luxury markets, premier communities, and exclusive properties, I'll guide you through every step of your luxury home buying journey.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/contact" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">Contact Me</a>
				<a href="/services/luxury-homes" class="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">Luxury Services</a>
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


