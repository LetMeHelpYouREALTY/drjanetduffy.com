<script lang="ts">
	import { MapPin, TrendingUp, DollarSign, CheckCircle, Clock, Building2, Mountain, Sparkles } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { lasVegasLocalData } from '$lib/data/las-vegas-local-data.js';

	type Currency = number;

	interface DistanceInfo {
		label: string;
		value: number;
		route?: string;
	}

	interface Builder {
		name: string;
		priceRange: {
			min: Currency;
			max: Currency;
		};
		features: string[];
	}

	interface SkyeCanyonData {
		priceRange: {
			min: Currency;
			max: Currency;
		};
		amenities: string[];
		builders: Record<string, Builder>;
		distances: {
			toStrip: DistanceInfo;
			toMountCharleston: DistanceInfo;
			toLeeCanyon: DistanceInfo;
		};
		appreciationTrends: Record<string, Currency>;
	}

	interface TocItem {
		id: string;
		label: string;
	}

	let mounted = false;

	const skyeCanyon = lasVegasLocalData.skyeCanyon as SkyeCanyonData;
	const builders: Builder[] = Object.values(skyeCanyon.builders);

	const tocItems: TocItem[] = [
		{ id: 'overview', label: 'Overview' },
		{ id: 'investment', label: 'Investment Potential' },
		{ id: 'builders', label: 'Builders' },
		{ id: 'hoa-compare', label: 'HOA Comparison' },
		{ id: 'distances', label: 'Distances' },
		{ id: 'appreciation', label: 'Appreciation Timeline' },
		{ id: 'properties', label: 'Available Properties' },
		{ id: 'concierge', label: 'Concierge Services' }
	];

	onMount(() => {
		mounted = true;
	});

	const formatCurrency = (amount: Currency): string =>
		new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
			maximumFractionDigits: 0
		}).format(amount);
</script>

<svelte:head>
	<title>Skye Canyon Real Estate | Las Vegas | Dr. Janet Duffy REALTOR®</title>
	<meta name="description" content="Explore Skye Canyon real estate. Las Vegas's newest master-planned community with modern amenities, excellent builders, and strong investment potential." />
	<meta name="keywords" content="Skye Canyon real estate, Skye Canyon homes, Las Vegas Skye Canyon, new construction Skye Canyon, Skye Canyon builders, Skye Canyon HOA" />
	<meta name="robots" content="index, follow" />
	
	<!-- Canonical URL -->
	<link rel="canonical" href="https://www.drjanetduffy.com/communities/skye-canyon" />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.drjanetduffy.com/communities/skye-canyon" />
	<meta property="og:title" content="Skye Canyon Real Estate | Las Vegas | Dr. Janet Duffy REALTOR®" />
	<meta property="og:description" content="Explore Skye Canyon real estate. Las Vegas's newest master-planned community with modern amenities, excellent builders, and strong investment potential." />
	<meta property="og:site_name" content="Homes by Dr. Duffy" />
	
	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content="https://www.drjanetduffy.com/communities/skye-canyon" />
	<meta name="twitter:title" content="Skye Canyon Real Estate | Las Vegas | Dr. Janet Duffy REALTOR®" />
	<meta name="twitter:description" content="Explore Skye Canyon real estate. Las Vegas's newest master-planned community with modern amenities and strong investment potential." />
	
	<!-- Structured Data -->
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "Place",
		"name": "Skye Canyon",
		"description": "Las Vegas's newest master-planned community with modern amenities, excellent builders, and strong investment potential",
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "Las Vegas",
			"addressRegion": "NV",
			"addressCountry": "US"
		},
		"geo": {
			"@type": "GeoCoordinates",
			"latitude": "36.2800",
			"longitude": "-115.3000"
		}
	}
	</script>
</svelte:head>

<section class="section bg-gradient-to-b from-white via-gray-50 to-white">
	<div class="container-premium">
		<!-- On-page navigation -->
		<nav
			aria-label="Skye Canyon page sections"
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
				Find Your Dream Home in Skye Canyon, Las Vegas
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
				Las Vegas's newest master-planned community with modern amenities, excellent builders, and strong investment potential. Skye Canyon offers 40% lower HOA fees than comparable Summerlin homes, new schools with latest technology, and easy access to Mount Charleston and Lee Canyon.
			</p>
		</div>

		<!-- Hero Image + Stats -->
		<div class="grid md:grid-cols-4 gap-6 mb-16 items-center">
			<div class="md:col-span-2">
				<figure class="overflow-hidden rounded-2xl shadow-xl border border-gray-100">
					<img
						src="/images/communities/skye-canyon-hero.jpg"
						alt="Skye Canyon homes with mountain backdrop and community park"
						class="h-64 w-full object-cover md:h-80"
						loading="lazy"
					/>
				</figure>
			</div>
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">{formatCurrency(skyeCanyon.priceRange.min)}</div>
				<p class="text-gray-600 text-sm">Starting Price</p>
			</div>
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">40%</div>
				<p class="text-gray-600 text-sm">Lower HOA vs Summerlin</p>
			</div>
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">5</div>
				<p class="text-gray-600 text-sm">Premium Builders</p>
			</div>
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">30</div>
				<p class="text-gray-600 text-sm">Min to Mount Charleston</p>
			</div>
		</div>

		<!-- About Skye Canyon -->
		<div class="mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">What Makes Skye Canyon Las Vegas's Best New Community?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				Skye Canyon is Las Vegas's newest master-planned community, offering modern amenities, excellent builders, and strong investment potential. With 40% lower HOA fees than comparable Summerlin homes, new schools with latest technology, and easy access to Mount Charleston and Lee Canyon, Skye Canyon represents exceptional value for Las Vegas homebuyers seeking new construction and modern living.
			</p>
		</div>

		<div class="grid md:grid-cols-2 gap-12 mb-16" id="investment">
			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
				<h3 class="text-2xl font-bold text-gray-900 mb-6">Community Overview</h3>
				<p class="text-gray-700 leading-relaxed mb-4">
					Skye Canyon features master-planned development with modern amenities including Skye Center, a 10-acre park with events and fitness facilities. The community offers new schools with latest technology, growing value as the community develops, and easy access to outdoor recreation at Mount Charleston and Lee Canyon.
				</p>
				<ul class="space-y-3">
					{#each skyeCanyon.amenities as amenity}
						<li class="flex items-start gap-3">
							<CheckCircle class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
							<span class="text-gray-700">{amenity}</span>
						</li>
					{/each}
				</ul>
			</div>

			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
				<h3 class="text-2xl font-bold text-gray-900 mb-6">Investment Potential</h3>
				<div class="space-y-6">
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<TrendingUp class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Strong Appreciation</h3>
							<p class="text-gray-700">Homes have appreciated from $380K (2020) to $525K (2025), with projected values reaching $600K by 2027</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<DollarSign class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Lower HOA Fees</h3>
							<p class="text-gray-700">40% lower HOA fees than comparable Summerlin homes, saving $1,200-$2,400 annually</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<Sparkles class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Phase 2 Development</h3>
							<p class="text-gray-700">Phase 2 launching in 2026 will add 5,000 more homes, driving continued appreciation</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Builder Comparison -->
		<div class="mb-16" id="builders">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Which Builder Should You Choose in Skye Canyon?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				Skye Canyon features five premium builders: Richmond American (best value), Century Communities (most affordable), Lennar (Everything's Included®), Toll Brothers (luxury finishes), and Christopher Homes (semi-custom). Each builder offers unique features, pricing, and customization options to match different budgets and preferences.
			</p>
			<div class="space-y-6">
				{#each builders as builder}
					<div class="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
						<div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
							<div class="flex-1">
								<h3 class="text-2xl font-bold text-gray-900 mb-3">{builder.name}</h3>
								<p class="text-primary-600 font-semibold text-lg mb-4">{formatCurrency(builder.priceRange.min)} - {formatCurrency(builder.priceRange.max)}</p>
								<ul class="space-y-2">
									{#each builder.features as feature}
										<li class="flex items-start gap-2">
											<CheckCircle class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
											<span class="text-gray-700">{feature}</span>
										</li>
									{/each}
								</ul>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- HOA Comparison -->
		<div class="mb-16" id="hoa-compare">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">How Do Skye Canyon HOA Fees Compare to Summerlin?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				Skye Canyon HOA fees range from $90-$150/month, which is 40% lower than comparable Summerlin homes ($150-$500/month). This represents annual savings of $1,200-$2,400, making Skye Canyon an excellent value proposition for Las Vegas homebuyers seeking master-planned community amenities at lower costs.
			</p>
			<div class="grid md:grid-cols-2 gap-8">
				<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-8 shadow-lg border border-gray-100">
					<h3 class="text-2xl font-bold text-gray-900 mb-4">Skye Canyon HOA</h3>
					<div class="text-4xl font-bold text-primary-600 mb-2">$90-$150/month</div>
					<p class="text-gray-700 mb-4">Lower fees with modern amenities</p>
					<ul class="space-y-2">
						<li class="flex items-start gap-2">
							<CheckCircle class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
							<span class="text-gray-700">Skye Center park and events</span>
						</li>
						<li class="flex items-start gap-2">
							<CheckCircle class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
							<span class="text-gray-700">New schools with latest technology</span>
						</li>
						<li class="flex items-start gap-2">
							<CheckCircle class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
							<span class="text-gray-700">Growing community amenities</span>
						</li>
					</ul>
				</div>
				<div class="bg-gradient-to-br from-white to-blue-50/30 rounded-2xl p-8 shadow-lg border border-gray-100">
					<h3 class="text-2xl font-bold text-gray-900 mb-4">Summerlin HOA</h3>
					<div class="text-4xl font-bold text-blue-600 mb-2">$150-$500/month</div>
					<p class="text-gray-700 mb-4">Established community with extensive amenities</p>
					<ul class="space-y-2">
						<li class="flex items-start gap-2">
							<CheckCircle class="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
							<span class="text-gray-700">150+ miles of trails</span>
						</li>
						<li class="flex items-start gap-2">
							<CheckCircle class="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
							<span class="text-gray-700">40+ parks and community centers</span>
						</li>
						<li class="flex items-start gap-2">
							<CheckCircle class="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
							<span class="text-gray-700">Downtown Summerlin shopping</span>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<!-- Distance Information -->
		<div class="mb-16" id="distances">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">How Far Is Skye Canyon from Key Las Vegas Locations?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				Skye Canyon is 20 minutes from the Las Vegas Strip via US-95, 30 minutes to Mount Charleston for outdoor recreation, and 35 minutes to Lee Canyon for skiing and hiking. The community offers easy access to both city amenities and mountain recreation, making it ideal for active lifestyles.
			</p>
			<div class="grid md:grid-cols-3 gap-6">
				<div class="bg-white rounded-xl p-6 shadow-lg text-center">
					<Clock class="w-8 h-8 text-primary-600 mx-auto mb-3" />
					<div class="text-2xl font-bold text-gray-900 mb-1">{skyeCanyon.distances.toStrip.value} min</div>
					<p class="text-gray-600 text-sm">To Strip (via US-95)</p>
				</div>
				<div class="bg-white rounded-xl p-6 shadow-lg text-center">
					<Mountain class="w-8 h-8 text-primary-600 mx-auto mb-3" />
					<div class="text-2xl font-bold text-gray-900 mb-1">{skyeCanyon.distances.toMountCharleston.value} min</div>
					<p class="text-gray-600 text-sm">To Mount Charleston</p>
				</div>
				<div class="bg-white rounded-xl p-6 shadow-lg text-center">
					<Mountain class="w-8 h-8 text-primary-600 mx-auto mb-3" />
					<div class="text-2xl font-bold text-gray-900 mb-1">{skyeCanyon.distances.toLeeCanyon.value} min</div>
					<p class="text-gray-600 text-sm">To Lee Canyon</p>
				</div>
			</div>
		</div>

		<!-- Appreciation Trends -->
		<div class="mb-16" id="appreciation">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">What Is Skye Canyon's Investment Potential?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				Skye Canyon homes have shown strong appreciation, increasing from $380K (2020) to $525K (2025), with projected values reaching $600K by 2027. Phase 2 development launching in 2026 will add 5,000 more homes, driving continued appreciation and community growth.
			</p>
			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-8 shadow-lg border border-gray-100">
				<h3 class="text-2xl font-bold text-gray-900 mb-6">Skye Canyon Appreciation Timeline</h3>
				<div class="grid md:grid-cols-4 gap-6">
					<div class="bg-white rounded-lg p-6 text-center">
						<div class="text-sm text-gray-600 mb-2">2020</div>
						<div class="text-2xl font-bold text-primary-600">{formatCurrency(skyeCanyon.appreciationTrends['2020'])}</div>
					</div>
					<div class="bg-white rounded-lg p-6 text-center">
						<div class="text-sm text-gray-600 mb-2">2023</div>
						<div class="text-2xl font-bold text-primary-600">{formatCurrency(skyeCanyon.appreciationTrends['2023'])}</div>
					</div>
					<div class="bg-white rounded-lg p-6 text-center">
						<div class="text-sm text-gray-600 mb-2">2025</div>
						<div class="text-2xl font-bold text-primary-600">{formatCurrency(skyeCanyon.appreciationTrends['2025'])}</div>
					</div>
					<div class="bg-white rounded-lg p-6 text-center">
						<div class="text-sm text-gray-600 mb-2">2027 (Projected)</div>
						<div class="text-2xl font-bold text-primary-600">{formatCurrency(skyeCanyon.appreciationTrends['2027'])}</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Properties in Skye Canyon -->
		<div class="mb-16" id="properties">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">What Properties Are Available in Skye Canyon?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				Skye Canyon offers new construction homes from five premium builders, ranging from $425,000 to $1.5 million. Properties feature modern designs, energy-efficient construction, smart home technology, and access to Skye Center amenities and new schools.
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
				<a href="/properties?neighborhood=skye-canyon" class="btn-primary">View All Skye Canyon Properties</a>
			</div>
		</div>

		<!-- Concierge Services -->
		<div class="mb-16" id="concierge">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">How Does Dr. Janet Duffy's Concierge Service Help Skye Canyon Buyers?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				My concierge service includes builder relationship benefits, helping you navigate new construction contracts, design center selections, and builder warranties. I provide personalized tours of Skye Canyon, showing you Skye Center amenities, new schools, and Phase 2 development plans. My service includes tracking every Skye Canyon sale to provide real-time market analysis and investment insights.
			</p>
			<div class="grid md:grid-cols-3 gap-6">
				<div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
					<Building2 class="w-8 h-8 text-primary-600 mb-4" />
					<h3 class="text-lg font-bold text-gray-900 mb-2">Builder Relationships</h3>
					<p class="text-gray-600 text-sm">Navigate new construction contracts, design center selections, and builder warranties with expert guidance</p>
				</div>
				<div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
					<MapPin class="w-8 h-8 text-primary-600 mb-4" />
					<h3 class="text-lg font-bold text-gray-900 mb-2">Community Tours</h3>
					<p class="text-gray-600 text-sm">Personalized tours showing Skye Center amenities, new schools, and Phase 2 development plans</p>
				</div>
				<div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
					<TrendingUp class="w-8 h-8 text-primary-600 mb-4" />
					<h3 class="text-lg font-bold text-gray-900 mb-2">Investment Analysis</h3>
					<p class="text-gray-600 text-sm">Track every Skye Canyon sale and provide real-time market analysis and investment insights</p>
				</div>
			</div>
		</div>

		<!-- CTA Section -->
		<div class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-center text-white">
			<h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Dream Home in Skye Canyon?</h2>
			<p class="text-lg text-white text-opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed">
				Let me help you find your perfect new construction home in Skye Canyon. With deep knowledge of every builder, every phase, and every neighborhood intimately, I'll guide you through every step of your home buying journey. I provide detailed tours showing Skye Center amenities, new schools, and Phase 2 development plans.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/contact" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">Contact Me</a>
				<a href="/properties?neighborhood=skye-canyon" class="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">View Properties</a>
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

