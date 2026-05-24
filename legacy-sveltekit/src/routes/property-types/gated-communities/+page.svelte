<script lang="ts">
	import { Home, Shield, Award, CheckCircle, DollarSign, Users, Lock } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	interface GatedCommunity {
		name: string;
		avgPrice: string;
		description: string;
	}

	interface TocItem {
		id: string;
		label: string;
	}

	const benefits: string[] = [
		'24/7 security',
		'Privacy and exclusivity',
		'Controlled access',
		'Enhanced property values',
		'Community amenities',
		'Peace of mind',
		'Prestigious locations',
		'Well-maintained common areas'
	];

	const communities: GatedCommunity[] = [
		{ name: 'The Ridges', avgPrice: '$1.2M+', description: 'Exclusive luxury gated community' },
		{ name: 'Red Rock Country Club', avgPrice: '$950K+', description: 'Gated golf community' },
		{ name: 'Southern Highlands', avgPrice: '$850K+', description: 'Master-planned gated community' },
		{ name: 'Seven Hills', avgPrice: '$750K+', description: 'Upscale gated neighborhood' }
	];

	const tocItems: TocItem[] = [
		{ id: 'overview', label: 'Overview' },
		{ id: 'benefits', label: 'Key Benefits' },
		{ id: 'communities', label: 'Featured Communities' },
		{ id: 'properties', label: 'Available Homes' },
		{ id: 'cta', label: 'Work With Dr. Duffy' }
	];

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Gated Communities | Las Vegas Luxury &amp; Relocation REALTOR | Dr. Janet Duffy</title>
	<meta name="description" content="Browse secure gated communities in Las Vegas with Las Vegas Luxury & Relocation REALTOR Dr. Janet Duffy. Explore homes in exclusive neighborhoods with 24/7 security, privacy, and strong property values." />

	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		"name": "Las Vegas Gated Communities",
		"description": "Homes in Las Vegas gated communities offering enhanced security, privacy, and premium lifestyles.",
		"url": "https://www.drjanetduffy.com/property-types/gated-communities"
	}
	</script>
</svelte:head>

<section class="section bg-gradient-to-b from-white via-gray-50 to-white">
	<div class="container-premium">
		<!-- On-page navigation -->
		<nav
			aria-label="Gated communities page sections"
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
				Explore Gated Communities in Las Vegas
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Secure, exclusive neighborhoods with enhanced privacy and property values
			</p>
		</div>

		<!-- Stats -->
		<div class="grid md:grid-cols-4 gap-6 mb-16">
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">$900K+</div>
				<p class="text-gray-600 text-sm">Average Price</p>
			</div>
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">24/7</div>
				<p class="text-gray-600 text-sm">Security</p>
			</div>
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">100+</div>
				<p class="text-gray-600 text-sm">Communities</p>
			</div>
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">Premium</div>
				<p class="text-gray-600 text-sm">Lifestyle</p>
			</div>
		</div>

		<!-- Benefits -->
		<div class="mb-16" id="benefits">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Why Should You Choose a Gated Community in Las Vegas?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				Las Vegas gated communities offer 24/7 security, privacy and exclusivity, controlled access, enhanced property values, community amenities, peace of mind, prestigious locations, and well-maintained common areas that make them ideal for buyers seeking security, privacy, and premium lifestyle benefits.
			</p>
		</div>

		<div class="grid md:grid-cols-2 gap-12 mb-16">
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
				<h3 class="text-2xl font-bold text-gray-900 mb-6">Security Features</h3>
				<div class="space-y-6">
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<Lock class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Controlled Access Entry</h3>
							<p class="text-gray-700">Gated entry with security personnel or keypad access ensures only authorized visitors enter</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<Shield class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Enhanced Privacy and Security</h3>
							<p class="text-gray-700">Reduced traffic and limited access to residents and guests provide enhanced privacy and security</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<Award class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Strong Property Values</h3>
							<p class="text-gray-700">Gated communities typically maintain higher property values and strong resale potential</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Featured Communities -->
		<div class="mb-16" id="communities">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Which Las Vegas Gated Communities Offer Premier Living?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				Las Vegas premier gated communities include The Ridges, Red Rock Country Club, Southern Highlands, and Seven Hills. Each community offers exclusive luxury living, 24/7 security, enhanced privacy, prestigious locations, and strong property values that attract discerning buyers seeking security and exclusivity.
			</p>
			<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
				{#each communities as community}
					<div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
						<h3 class="text-lg font-bold text-gray-900 mb-2">{community.name}</h3>
						<p class="text-primary-600 font-semibold mb-2">{community.avgPrice}</p>
						<p class="text-gray-600 text-sm">{community.description}</p>
					</div>
				{/each}
			</div>
		</div>

		<!-- Properties -->
		<div class="mb-16" id="properties">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">What Homes Are Available in Las Vegas Gated Communities?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				Las Vegas gated communities offer luxury homes, custom estates, and upscale properties featuring 24/7 security, enhanced privacy, controlled access, and strong property values. Properties range from upscale homes to multi-million dollar estates in premier gated communities throughout the Las Vegas Valley.
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
				<a href="/properties?type=gated" class="btn-primary">View All Gated Community Homes</a>
			</div>
		</div>

		<!-- CTA Section -->
		<div class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-center text-white" id="cta">
			<h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Find Your Dream Home in a Las Vegas Gated Community?</h2>
			<p class="text-lg text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
				Let me help you find your perfect home in a secure gated community. With deep knowledge of Las Vegas gated communities, security features, and luxury properties, I'll guide you through every step of your home buying journey.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/contact" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">Contact Me</a>
				<a href="/properties?type=gated" class="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">View Properties</a>
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


