<script lang="ts">
	import { MapPin, Home, Award, TrendingUp, DollarSign, Users, Camera, CheckCircle, Clock, Building2, GraduationCap } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { lasVegasLocalData } from '$lib/data/las-vegas-local-data.js';
	
	let mounted = false;
	
	onMount(() => {
		mounted = true;
	});
	
	const features: string[] = [
		'Master-planned community',
		'World-class golf courses',
		'Top-rated schools',
		'Parks and trails',
		'Shopping centers',
		'Community centers',
		'Gated communities available',
		'Luxury amenities'
	];
	
	const villages = Object.values(lasVegasLocalData.summerlin.villages);
	
	function formatCurrency(amount: number) {
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
			maximumFractionDigits: 0
		}).format(amount);
	}
</script>

<svelte:head>
	<title>Summerlin Real Estate | Las Vegas | Dr. Janet Duffy REALTOR®</title>
	<meta name="description" content="Explore Summerlin real estate. Master-planned community with luxury homes, golf courses, top schools, and world-class amenities in Las Vegas." />
	<meta name="keywords" content="Summerlin real estate, Summerlin homes, Las Vegas Summerlin, Summerlin villages, Summerlin HOA, Summerlin golf courses, luxury homes Summerlin" />
	<meta name="robots" content="index, follow" />
	
	<!-- Canonical URL -->
	<link rel="canonical" href="https://www.drjanetduffy.com/communities/summerlin" />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.drjanetduffy.com/communities/summerlin" />
	<meta property="og:title" content="Summerlin Real Estate | Las Vegas | Dr. Janet Duffy REALTOR®" />
	<meta property="og:description" content="Explore Summerlin real estate. Master-planned community with luxury homes, golf courses, top schools, and world-class amenities in Las Vegas." />
	<meta property="og:site_name" content="Las Vegas Luxury & Relocation REALTOR" />
	
	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content="https://www.drjanetduffy.com/communities/summerlin" />
	<meta name="twitter:title" content="Summerlin Real Estate | Las Vegas | Dr. Janet Duffy REALTOR®" />
	<meta name="twitter:description" content="Explore Summerlin real estate. Master-planned community with luxury homes, golf courses, top schools, and world-class amenities." />
	
	<!-- Structured Data -->
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "Place",
		"name": "Summerlin",
		"description": "Las Vegas's premier master-planned community with luxury homes, golf courses, top schools, and world-class amenities",
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "Las Vegas",
			"addressRegion": "NV",
			"addressCountry": "US"
		},
		"geo": {
			"@type": "GeoCoordinates",
			"latitude": "36.1699",
			"longitude": "-115.1398"
		},
		"containsPlace": {
			"@type": "Place",
			"name": "Summerlin Villages"
		}
	}
	</script>
</svelte:head>

<section class="section bg-gradient-to-b from-white via-gray-50 to-white">
	<div class="container-premium">
		<div class="text-center mb-10">
			<h1 class="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900">
				Find Your Dream Home in Summerlin, Las Vegas
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Las Vegas's premier master-planned community with luxury homes, world-class amenities, and an exceptional lifestyle.
			</p>
		</div>
		
		<!-- On-page navigation for Summerlin content -->
		<div class="max-w-4xl mx-auto mb-12">
			<nav class="border-t border-gray-200 pt-5">
				<p class="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3 text-center">
					On this page
				</p>
				<div class="flex flex-wrap justify-center gap-3">
					<a href="#overview" class="px-4 py-2 rounded-full border border-gray-200 bg-white text-xs sm:text-sm font-medium text-gray-700 hover:text-primary-600 hover:border-primary-300 hover:bg-primary-50 transition-colors">
						Overview
					</a>
					<a href="#villages" class="px-4 py-2 rounded-full border border-gray-200 bg-white text-xs sm:text-sm font-medium text-gray-700 hover:text-primary-600 hover:border-primary-300 hover:bg-primary-50 transition-colors">
						Villages
					</a>
					<a href="#hoa" class="px-4 py-2 rounded-full border border-gray-200 bg-white text-xs sm:text-sm font-medium text-gray-700 hover:text-primary-600 hover:border-primary-300 hover:bg-primary-50 transition-colors">
						HOA &amp; Fees
					</a>
					<a href="#distances" class="px-4 py-2 rounded-full border border-gray-200 bg-white text-xs sm:text-sm font-medium text-gray-700 hover:text-primary-600 hover:border-primary-300 hover:bg-primary-50 transition-colors">
						Distances
					</a>
					<a href="#pricing" class="px-4 py-2 rounded-full border border-gray-200 bg-white text-xs sm:text-sm font-medium text-gray-700 hover:text-primary-600 hover:border-primary-300 hover:bg-primary-50 transition-colors">
						Pricing
					</a>
					<a href="#properties" class="px-4 py-2 rounded-full border border-gray-200 bg-white text-xs sm:text-sm font-medium text-gray-700 hover:text-primary-600 hover:border-primary-300 hover:bg-primary-50 transition-colors">
						Available Homes
					</a>
					<a href="#concierge" class="px-4 py-2 rounded-full border border-gray-200 bg-white text-xs sm:text-sm font-medium text-gray-700 hover:text-primary-600 hover:border-primary-300 hover:bg-primary-50 transition-colors">
						Concierge Service
					</a>
					<a href="#cta" class="px-4 py-2 rounded-full border border-gray-200 bg-white text-xs sm:text-sm font-medium text-gray-700 hover:text-primary-600 hover:border-primary-300 hover:bg-primary-50 transition-colors">
						Start Your Summerlin Search
					</a>
				</div>
			</nav>
		</div>

		<!-- Hero Image + Stats -->
		<div class="grid lg:grid-cols-4 gap-6 mb-16 items-center">
			<div class="lg:col-span-2">
				<figure class="overflow-hidden rounded-2xl shadow-xl border border-gray-100">
					<img
						src="/images/communities/summerlin-hero.jpg"
						alt="Summerlin homes with Red Rock Canyon views and tree-lined streets"
						class="h-64 w-full object-cover md:h-80"
						loading="lazy"
					/>
				</figure>
			</div>
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">$850K</div>
				<p class="text-gray-600 text-sm">Average Home Price</p>
			</div>
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">22K+</div>
				<p class="text-gray-600 text-sm">Acres</p>
			</div>
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">150+</div>
				<p class="text-gray-600 text-sm">Parks & Trails</p>
			</div>
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">10</div>
				<p class="text-gray-600 text-sm">Golf Courses</p>
			</div>
		</div>

		<!-- About Summerlin -->
		<div id="overview" class="mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">What Makes Summerlin Las Vegas's Premier Community?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				Summerlin is Las Vegas's premier master-planned community, spanning over 22,500 acres in the western Las Vegas Valley. Developed by The Howard Hughes Corporation, Summerlin offers a unique blend of luxury living, world-class amenities, and natural beauty through multiple villages, top-rated schools, extensive parks and trails, championship golf courses, and premier shopping.
			</p>
		</div>

		<div class="grid md:grid-cols-2 gap-12 mb-16">
			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
				<h3 class="text-2xl font-bold text-gray-900 mb-6">Community Overview</h3>
				<p class="text-gray-700 leading-relaxed mb-4">
					Summerlin features multiple villages, each with its own character and amenities, from upscale gated communities to family-friendly neighborhoods. The community represents the pinnacle of Las Vegas living with carefully planned development, exceptional amenities, and strong property values.
				</p>
				<p class="text-gray-700 leading-relaxed mb-6">
					With over 22,500 acres of master-planned development, Summerlin offers diverse housing options from luxury estates to family homes, all within a beautifully maintained environment with extensive parks, trails, and community facilities.
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
							<h3 class="text-xl font-bold text-gray-900 mb-2">Top-Rated Schools</h3>
							<p class="text-gray-700">Excellent public and private schools serving the community with high academic performance and comprehensive programs</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<TrendingUp class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Strong Investment Potential</h3>
							<p class="text-gray-700">Consistent appreciation and strong resale values make Summerlin properties excellent long-term investments</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<Users class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Active Lifestyle Opportunities</h3>
							<p class="text-gray-700">Parks, trails, recreation centers, and community events provide endless opportunities for active living</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Summerlin Villages -->
		<div id="villages" class="mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Which Summerlin Village Should You Choose?</h2>
			<p class="text-lg text-gray-700 mb-4 leading-relaxed max-w-4xl mx-auto text-center">
				Choose your Summerlin village based on budget, lifestyle, and priorities: The Paseos for affordability, The Willows for families, The Trails for outdoor enthusiasts, The Canyons for views and golf, and The Ridges or The Summit for ultra-luxury living. Each village offers its own mix of price points, amenities, and HOA structures, so matching your daily routine to the right village is crucial.
			</p>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				I provide detailed tours of each village, showing you insider spots like the best walking trails, hidden pocket parks, and optimal streets for Red Rock and Strip views. During our tour days we discuss commute patterns, school options, and how each village feels at different times of day so you can confidently choose where to plant roots.
			</p>

			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
				{#each villages as village}
					<div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
						<h3 class="text-lg font-bold text-gray-900 mb-2">{village.name}</h3>
						<p class="text-primary-600 font-semibold mb-2">{formatCurrency(village.priceRange.min)} - {formatCurrency(village.priceRange.max)}</p>
						<p class="text-gray-700 text-sm mb-3 leading-relaxed">{village.description}</p>
						<div class="space-y-2 text-xs text-gray-600">
							<p><strong>HOA:</strong> ${village.hoaFee.min}-${village.hoaFee.max}/month</p>
							{#if village.schools}
								<p><strong>Schools:</strong> {village.schools.join(', ')}</p>
							{/if}
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- HOA Structure -->
		<div id="hoa" class="mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">What Are Summerlin HOA Fees and Rules?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				Summerlin has two HOA layers: a master association (currently $160/year) plus village-level HOA fees that typically range from $150–$500/month. Combined, that means most Summerlin homeowners invest roughly $1,800–$6,000 per year into the community, which covers trails, parks, events, and in some villages select utilities or landscaping. Understanding this structure—and the rules that come with it—is essential before you write an offer.
			</p>
			<div class="grid md:grid-cols-2 gap-8">
				<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-8 shadow-lg border border-gray-100">
					<h3 class="text-2xl font-bold text-gray-900 mb-6">Master Association ($160/year)</h3>
					<ul class="space-y-3">
						{#each lasVegasLocalData.summerlin.masterHOA.includes as item}
							<li class="flex items-start gap-3">
								<CheckCircle class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
								<span class="text-gray-700">{item}</span>
							</li>
						{/each}
					</ul>
				</div>
				<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-8 shadow-lg border border-gray-100">
					<h3 class="text-2xl font-bold text-gray-900 mb-6">Village HOA Rules</h3>
					<ul class="space-y-3">
						{#each lasVegasLocalData.summerlin.hoaRules as rule}
							<li class="flex items-start gap-3">
								<CheckCircle class="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
								<span class="text-gray-700">{rule}</span>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>

		<!-- Distance Information -->
		<div id="distances" class="mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">How Far Is Summerlin from the Las Vegas Strip?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				Summerlin is 10-20 minutes from the Strip depending on your village, with Red Rock Casino just 5 minutes away and Downtown Summerlin providing local entertainment without Strip traffic. Most Summerlin residents rarely visit the Strip because Downtown Summerlin has 125+ shops and restaurants, Red Rock Casino offers gaming and entertainment, and Las Vegas Ballpark hosts sports and concerts.
			</p>
			<div class="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
				<div class="bg-white rounded-xl p-6 shadow-lg text-center">
					<Clock class="w-8 h-8 text-primary-600 mx-auto mb-3" />
					<div class="text-2xl font-bold text-gray-900 mb-1">{lasVegasLocalData.summerlin.distances.toStrip.min}-{lasVegasLocalData.summerlin.distances.toStrip.max} min</div>
					<p class="text-gray-600 text-sm">To Strip</p>
				</div>
				<div class="bg-white rounded-xl p-6 shadow-lg text-center">
					<Clock class="w-8 h-8 text-primary-600 mx-auto mb-3" />
					<div class="text-2xl font-bold text-gray-900 mb-1">{lasVegasLocalData.summerlin.distances.toAirport.min}-{lasVegasLocalData.summerlin.distances.toAirport.max} min</div>
					<p class="text-gray-600 text-sm">To Airport</p>
				</div>
				<div class="bg-white rounded-xl p-6 shadow-lg text-center">
					<Clock class="w-8 h-8 text-primary-600 mx-auto mb-3" />
					<div class="text-2xl font-bold text-gray-900 mb-1">{lasVegasLocalData.summerlin.distances.toRedRockCasino.min}-{lasVegasLocalData.summerlin.distances.toRedRockCasino.max} min</div>
					<p class="text-gray-600 text-sm">To Red Rock Casino</p>
				</div>
				<div class="bg-white rounded-xl p-6 shadow-lg text-center">
					<Clock class="w-8 h-8 text-primary-600 mx-auto mb-3" />
					<div class="text-2xl font-bold text-gray-900 mb-1">{lasVegasLocalData.summerlin.distances.toDowntownSummerlin.min}-{lasVegasLocalData.summerlin.distances.toDowntownSummerlin.max} min</div>
					<p class="text-gray-600 text-sm">To Downtown Summerlin</p>
				</div>
				<div class="bg-white rounded-xl p-6 shadow-lg text-center">
					<Clock class="w-8 h-8 text-primary-600 mx-auto mb-3" />
					<div class="text-2xl font-bold text-gray-900 mb-1">{lasVegasLocalData.summerlin.distances.toDowntownLV.min}-{lasVegasLocalData.summerlin.distances.toDowntownLV.max} min</div>
					<p class="text-gray-600 text-sm">To Downtown LV</p>
				</div>
			</div>
		</div>

		<!-- Pricing by Village -->
		<div id="pricing" class="mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">How Much Do Homes Cost in Summerlin?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				Summerlin home prices range from $400,000 for condos to $5+ million for custom estates, with most single-family homes between $650,000 and $1.2 million depending on village and proximity to Red Rock Canyon. Factors affecting Summerlin prices include Downtown Summerlin proximity (10-15% premium), mountain/Strip views (20-30% premium), golf course lots (15-25% premium), and age of home (newer villages command higher prices).
			</p>
			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-8 shadow-lg border border-gray-100">
				<h3 class="text-2xl font-bold text-gray-900 mb-6">Current Summerlin Pricing by Village (November 2025)</h3>
				<div class="space-y-4">
					{#each villages as village}
						<div class="bg-white rounded-lg p-6 border border-gray-100">
							<div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
								<div>
									<h4 class="text-xl font-bold text-gray-900 mb-2">{village.name}</h4>
									<p class="text-gray-700">{village.description}</p>
									{#if village.features}
										<ul class="mt-2 space-y-1">
											{#each village.features as feature}
												<li class="text-sm text-gray-600">• {feature}</li>
											{/each}
										</ul>
									{/if}
								</div>
								<div class="text-right">
									<div class="text-2xl font-bold text-primary-600 mb-1">{formatCurrency(village.priceRange.min)} - {formatCurrency(village.priceRange.max)}</div>
									<p class="text-sm text-gray-600">HOA: ${village.hoaFee.min}-${village.hoaFee.max}/month</p>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>

		<!-- Properties in Summerlin -->
		<div id="properties" class="mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">What Properties Are Available in Summerlin?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				Summerlin offers diverse property types including luxury estates, single-family homes, townhomes, and condos. Properties range from affordable family homes to multi-million dollar estates, all within master-planned communities with exceptional amenities.
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
				<a href="/properties?neighborhood=summerlin" class="btn-primary">View All Summerlin Properties</a>
			</div>
		</div>

		<!-- Concierge Services -->
		<div id="concierge" class="mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">How Does Dr. Janet Duffy's Concierge Service Help Summerlin Buyers?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				My concierge service includes personalized neighborhood tours showing parks, schools, shopping, and hidden gems locals love. I review all HOA documents before you buy, explaining restrictions and fees clearly. My service includes HOA application assistance, architectural review coordination, and tracking every Summerlin sale to provide real-time market analysis for your specific villages of interest.
			</p>
			<div class="grid md:grid-cols-3 gap-6">
				<div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
					<Building2 class="w-8 h-8 text-primary-600 mb-4" />
					<h3 class="text-lg font-bold text-gray-900 mb-2">HOA Document Review</h3>
					<p class="text-gray-600 text-sm">Review all HOA documents before you buy, explaining restrictions and fees clearly</p>
				</div>
				<div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
					<MapPin class="w-8 h-8 text-primary-600 mb-4" />
					<h3 class="text-lg font-bold text-gray-900 mb-2">Personalized Village Tours</h3>
					<p class="text-gray-600 text-sm">Detailed tours of each village showing insider spots like best walking trails and hidden parks</p>
				</div>
				<div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
					<TrendingUp class="w-8 h-8 text-primary-600 mb-4" />
					<h3 class="text-lg font-bold text-gray-900 mb-2">Real-Time Market Analysis</h3>
					<p class="text-gray-600 text-sm">Track every Summerlin sale and provide custom reports for your specific villages of interest</p>
				</div>
			</div>
		</div>

		<!-- CTA Section -->
		<div id="cta" class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-center text-white">
			<h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Dream Home in Summerlin?</h2>
			<p class="text-lg text-white text-opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed">
				Let me help you find your perfect home in Summerlin. With deep knowledge of every HOA, every builder, and every neighborhood intimately, I'll guide you through every step of your home buying journey. I provide detailed tours of each village, showing you insider spots like best walking trails, hidden parks, and optimal streets for views.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/contact" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">Contact Me</a>
				<a href="/properties?neighborhood=summerlin" class="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">View Properties</a>
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

