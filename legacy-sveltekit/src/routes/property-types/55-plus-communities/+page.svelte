<script lang="ts">
	import { Home, Award, CheckCircle, DollarSign, Users, Heart } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	interface TocItem {
		id: string;
		label: string;
	}

	const benefits: string[] = [
		'Age-restricted community',
		'Active adult lifestyle',
		'Low maintenance living',
		'Social activities and clubs',
		'Recreation centers',
		'Age-appropriate amenities',
		'Quiet neighborhoods',
		'Affordable pricing'
	];

	const tocItems: TocItem[] = [
		{ id: 'overview', label: 'Overview' },
		{ id: 'benefits', label: 'Key Benefits' },
		{ id: 'community-features', label: 'Community Features' },
		{ id: 'properties', label: 'Available Homes' },
		{ id: 'cta', label: 'Work With Dr. Duffy' }
	];

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>55+ Active Adult Communities | Las Vegas Luxury &amp; Relocation REALTOR | Dr. Janet Duffy</title>
	<meta name="description" content="Browse Las Vegas 55+ active adult communities with Las Vegas Luxury & Relocation REALTOR Dr. Janet Duffy. Discover low-maintenance homes, recreation centers, and vibrant social lifestyles for active adults and retirees." />

	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		"name": "Las Vegas 55+ Active Adult Communities",
		"description": "Homes in Las Vegas 55+ age-restricted communities offering active adult lifestyles and low-maintenance living.",
		"url": "https://www.drjanetduffy.com/property-types/55-plus-communities"
	}
	</script>
</svelte:head>

<section class="section bg-gradient-to-b from-white via-gray-50 to-white">
	<div class="container-premium">
		<!-- On-page navigation -->
		<nav
			aria-label="55+ communities page sections"
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
				Find 55+ Active Adult Communities in Las Vegas
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Age-restricted communities with low maintenance living and active lifestyle amenities
			</p>
		</div>

		<!-- Stats -->
		<div class="grid md:grid-cols-4 gap-6 mb-16">
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">$450K</div>
				<p class="text-gray-600 text-sm">Average Price</p>
			</div>
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">55+</div>
				<p class="text-gray-600 text-sm">Age Restriction</p>
			</div>
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">20+</div>
				<p class="text-gray-600 text-sm">Communities</p>
			</div>
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">Active</div>
				<p class="text-gray-600 text-sm">Lifestyle</p>
			</div>
		</div>

		<!-- Benefits -->
		<div class="mb-16" id="benefits">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Why Should You Choose a 55+ Community in Las Vegas?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				Las Vegas 55+ active adult communities offer age-restricted living, active adult lifestyle, low-maintenance living, social activities and clubs, recreation centers, age-appropriate amenities, quiet neighborhoods, and affordable pricing that make them ideal for retirees, empty nesters, and active adults seeking community, convenience, and lifestyle benefits.
			</p>
		</div>

		<div class="grid md:grid-cols-2 gap-12 mb-16" id="community-features">
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
				<h3 class="text-2xl font-bold text-gray-900 mb-6">Community Features</h3>
				<div class="space-y-6">
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<Users class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Active Social Activities</h3>
							<p class="text-gray-700">Clubs, events, and activities designed specifically for active adults create vibrant community connections</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<Heart class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Comprehensive Recreation Centers</h3>
							<p class="text-gray-700">Fitness centers, pools, pickleball courts, and more provide endless opportunities for active living</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<Home class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Low-Maintenance Living</h3>
							<p class="text-gray-700">HOA handles landscaping and exterior maintenance, allowing residents to enjoy life without yard work</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Properties -->
		<div class="mb-16" id="properties">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">What Homes Are Available in Las Vegas 55+ Communities?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				Las Vegas 55+ communities offer single-family homes, condos, and townhomes featuring low-maintenance living, age-appropriate amenities, active adult lifestyle, and affordable pricing. Properties range from affordable starter homes to upscale residences in premier active adult communities throughout the Las Vegas Valley.
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
				<a href="/properties?type=55-plus" class="btn-primary">View All 55+ Community Homes</a>
			</div>
		</div>

		<!-- CTA Section -->
		<div class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-center text-white" id="cta">
			<h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Find Your Perfect 55+ Active Adult Community Home in Las Vegas?</h2>
			<p class="text-lg text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
				Let me help you find your perfect active adult community home. With deep knowledge of Las Vegas 55+ communities, active adult lifestyle, and senior housing options, I'll guide you through every step of your home buying journey.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/contact" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">Contact Me</a>
				<a href="/services/senior-housing" class="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">Senior Housing Services</a>
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


