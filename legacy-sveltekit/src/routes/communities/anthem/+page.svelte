<script lang="ts">
	import { MapPin, Home, Award, CheckCircle, DollarSign, Users, Flag } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	interface TocItem {
		id: string;
		label: string;
	}

	const features: string[] = [
		'Master-planned community',
		'Golf course living',
		'Country club amenities',
		'Gated neighborhoods',
		'Top-rated schools',
		'Resort-style facilities',
		'Active lifestyle',
		'Strong community'
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
	<title>Anthem Luxury &amp; Relocation Real Estate | Henderson | Dr. Janet Duffy REALTOR®</title>
	<meta name="description" content="Explore Anthem luxury and relocation real estate in Henderson with Las Vegas Luxury & Relocation REALTOR Dr. Janet Duffy. Discover golf course homes, country club estates, and gated communities." />

	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "Place",
		"name": "Anthem, Henderson, Nevada",
		"description": "Master-planned golf and country club community in Henderson with luxury homes, gated neighborhoods, and resort-style amenities.",
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "Henderson",
			"addressRegion": "NV",
			"postalCode": "89044",
			"addressCountry": "US"
		}
	}
	</script>
</svelte:head>

<section class="section bg-gradient-to-b from-white via-gray-50 to-white">
	<div class="container-premium">
		<!-- On-page navigation -->
		<nav
			aria-label="Anthem page sections"
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
				Find Luxury Homes in Anthem, Henderson, Nevada
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Master-planned community with golf course living, country club amenities, and resort-style facilities
			</p>
		</div>

		<!-- Hero Stats -->
		<div class="grid md:grid-cols-4 gap-6 mb-16">
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">$800K</div>
				<p class="text-gray-600 text-sm">Average Home Price</p>
			</div>
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">5,000</div>
				<p class="text-gray-600 text-sm">Acres</p>
			</div>
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">Golf</div>
				<p class="text-gray-600 text-sm">Country Club</p>
			</div>
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">89044</div>
				<p class="text-gray-600 text-sm">Zip Code</p>
			</div>
		</div>

		<!-- About Anthem -->
		<div class="mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">What Makes Anthem a Premier Henderson Golf Community?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				Anthem is a premier master-planned community located in Henderson, offering luxury living with world-class golf and country club amenities. The community spans over 5,000 acres and features championship golf courses, gated neighborhoods, resort-style facilities, luxury homes, custom estates, and an active lifestyle with numerous amenities and social activities.
			</p>
		</div>

		<div class="grid md:grid-cols-2 gap-12 mb-16" id="benefits">
			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
				<h3 class="text-2xl font-bold text-gray-900 mb-6">Community Overview</h3>
				<p class="text-gray-700 leading-relaxed mb-4">
					Anthem features championship golf courses, gated neighborhoods, and resort-style facilities within a beautifully maintained and secure environment. Residents enjoy access to Anthem Country Club, multiple parks, community centers, and walking trails.
				</p>
				<p class="text-gray-700 leading-relaxed mb-6">
					The area features a mix of luxury homes, custom estates, and upscale townhomes, all designed to complement the community's golf course lifestyle. Anthem offers an active lifestyle with numerous amenities and social activities that create a vibrant, resort-style living experience.
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
							<Flag class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Championship Golf Course Living</h3>
							<p class="text-gray-700">Championship golf courses and exclusive Anthem Country Club amenities create a premier golf lifestyle</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<Award class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Luxury Homes and Estates</h3>
							<p class="text-gray-700">Upscale homes, custom estates, and premium finishes within gated neighborhoods</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<Users class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Active Resort-Style Lifestyle</h3>
							<p class="text-gray-700">Resort-style amenities, community activities, parks, and social events provide an active lifestyle</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Properties -->
		<div class="mb-16" id="properties">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">What Properties Are Available in Anthem?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				Anthem offers luxury properties including custom estates, upscale homes, and premium townhomes. Properties feature golf course views, resort-style amenities, and premium finishes within gated neighborhoods and a master-planned environment with country club access.
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
				<a href="/properties?neighborhood=anthem" class="btn-primary">View All Anthem Properties</a>
			</div>
		</div>

		<!-- CTA Section -->
		<div class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-center text-white" id="cta">
			<h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Find Your Dream Home in Anthem?</h2>
			<p class="text-lg text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
				Let me help you find your perfect home in this premier Henderson community. With deep knowledge of Anthem's golf course lifestyle, luxury properties, and country club amenities, I'll guide you through every step of your home buying journey.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/contact" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">Contact Me</a>
				<a href="/properties?neighborhood=anthem" class="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">View Properties</a>
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


