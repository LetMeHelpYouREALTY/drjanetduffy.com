<script lang="ts">
	import { Home, MapPin, TrendingUp, Key, Umbrella, DollarSign } from 'lucide-svelte';

	interface TocItem {
		id: string;
		label: string;
	}

	const tocItems: TocItem[] = [
		{ id: 'overview', label: 'Overview' },
		{ id: 'markets', label: 'Resort Markets' },
		{ id: 'communities', label: 'Premier Communities' },
		{ id: 'services', label: 'Resort Services' },
		{ id: 'considerations', label: 'Key Considerations' },
		{ id: 'cta', label: 'Plan Your Resort Strategy' }
	];
</script>

<svelte:head>
	<title>
		Las Vegas Luxury &amp; Relocation Resort &amp; Second Home Services | Dr. Janet Duffy REALTOR®
	</title>
	<meta
		name="description"
		content="Resort and second home services from Las Vegas Luxury &amp; Relocation REALTOR® Dr. Janet Duffy, focused on Lake Las Vegas, golf communities, and view properties for vacation and investment use."
	/>
	<meta
		name="keywords"
		content="Las Vegas Luxury &amp; Relocation REALTOR, resort properties Las Vegas, second homes Las Vegas, Lake Las Vegas, golf community second homes"
	/>

	<meta
		property="og:title"
		content="Las Vegas Luxury &amp; Relocation Resort &amp; Second Home Services | Dr. Janet Duffy REALTOR®"
	/>
	<meta
		property="og:description"
		content="Strategic guidance on buying, renting, and managing resort and second homes in Las Vegas’s premier communities."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.drjanetduffy.com/services/resort-properties" />
	<meta property="og:site_name" content="Las Vegas Luxury &amp; Relocation REALTOR" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="twitter:title"
		content="Las Vegas Luxury &amp; Relocation Resort &amp; Second Home Services | Dr. Janet Duffy REALTOR®"
	/>
	<meta
		name="twitter:description"
		content="Vacation, second home, and resort investment strategies tailored to Lake Las Vegas, golf communities, and view properties."
	/>

	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "WebPage",
			"name": "Las Vegas Luxury & Relocation Resort & Second Home Services",
			"description": "Resort and second home real estate services for Lake Las Vegas, golf course communities, and view properties in the Las Vegas area.",
			"url": "https://www.drjanetduffy.com/services/resort-properties",
			"about": {
				"@type": "RealEstateAgent",
				"name": "Dr. Janet Duffy",
				"areaServed": "Las Vegas, Nevada"
			}
		}
	</script>
</svelte:head>

<section class="section bg-gradient-to-b from-white via-gray-50 to-white">
	<div class="container-premium">
		<div class="text-center mb-8 sm:mb-10" id="overview">
			<h1 class="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900">
				Resort & Second Home Properties in Las Vegas
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Specialized services for vacation homes and investment properties. Tap into lucrative vacation and investment markets by mastering resort-property sales strategies and client targeting in Las Vegas and surrounding areas.
			</p>
		</div>

		<!-- On-page navigation -->
		<nav
			aria-label="On this page"
			class="mb-10 rounded-full border border-gray-200 bg-white px-3 py-2 shadow-sm overflow-x-auto scrollbar-hide"
		>
			<ul class="flex items-center gap-2 text-sm whitespace-nowrap">
				{#each tocItems as item}
					<li>
						<a
							href={`#${item.id}`}
							class="inline-flex items-center rounded-full px-3 py-1.5 text-gray-700 hover:text-primary-700 hover:bg-primary-50 transition-colors no-underline"
						>
							{item.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<div class="max-w-4xl mx-auto">
			<section
				id="markets"
				class="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-12 scroll-mt-24"
				aria-labelledby="markets-heading"
			>
				<h2
					id="markets-heading"
					class="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
				>
					What Resort &amp; Second Home Markets Are Available in Las Vegas?
				</h2>
				
				<p class="text-lg text-gray-700 mb-6 leading-relaxed">
					Las Vegas offers exceptional opportunities for second home buyers and investors seeking resort-style living and vacation properties. From Lake Las Vegas to golf course communities, the area provides diverse options through vacation property guidance, investment opportunity analysis, resort community expertise, and rental potential understanding.
				</p>

				<div class="grid md:grid-cols-2 gap-6 mb-8">
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<Umbrella class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Vacation Properties</h3>
							<p class="text-gray-600">Expert guidance for purchasing vacation homes in Las Vegas's resort communities and recreational areas.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<DollarSign class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Investment Opportunities</h3>
							<p class="text-gray-600">Strategic advice for real estate investments in resort and vacation markets.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<Home class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Resort Communities</h3>
							<p class="text-gray-600">Knowledge of Las Vegas resort communities and their unique characteristics and amenities.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<TrendingUp class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Rental Potential</h3>
							<p class="text-gray-600">Understanding rental markets and income potential for vacation and second home properties.</p>
						</div>
					</div>
				</div>
			</section>

			<section
				id="communities"
				class="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-12 scroll-mt-24"
				aria-labelledby="communities-heading"
			>
				<h2
					id="communities-heading"
					class="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
				>
					Which Premier Resort Communities Are Available in Las Vegas?
				</h2>
				<p class="text-lg text-gray-700 mb-8 leading-relaxed">
					Premier resort communities in Las Vegas include Lake Las Vegas with a man-made lake and championship golf, golf course communities like Red Rock Country Club and Anthem Country Club, and mountain and view properties in The Ridges and MacDonald Highlands. Each community offers unique resort-style amenities and second home opportunities.
				</p>
				
				<div class="space-y-6">
					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Lake Las Vegas</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Lake Las Vegas offers a unique resort experience with a man-made lake, championship golf courses, and luxury amenities. This master-planned community features resort-style living with water activities, golf, and extensive recreational facilities. Properties range from condos to luxury estates, offering options for various budgets and lifestyles.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Lake Las Vegas properties offer excellent potential for both vacation use and rental income. The area's resort amenities, including the lake, golf courses, and hotels, create strong demand for vacation rentals. We help buyers understand the rental market, HOA regulations, and investment potential in this unique resort community.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Golf Course Communities</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Las Vegas offers numerous golf course communities that serve as ideal second home destinations. Communities like Red Rock Country Club, Anthem Country Club, and others provide resort-style amenities, championship golf, and luxury living. These communities attract second home buyers seeking recreational amenities and resort-style living.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Golf course communities offer excellent second home options, combining luxury living with recreational amenities. Properties in these communities often feature golf course views, access to club amenities, and resort-style facilities. We help buyers understand community rules, rental restrictions, and investment potential in golf course communities.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Mountain & View Properties</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Properties with mountain or city views offer excellent second home opportunities, providing stunning vistas and recreational access. Areas like The Ridges, MacDonald Highlands, and mountain-adjacent communities offer properties with views and access to outdoor recreation, making them ideal for second homes.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Mountain and view properties provide unique second home opportunities, combining natural beauty with luxury living. These properties often feature outdoor living spaces, views, and access to hiking and recreation. We help buyers understand view property values, maintenance considerations, and investment potential in these unique locations.
						</p>
					</div>
				</div>
			</section>

			<section
				id="services"
				class="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-12 scroll-mt-24"
				aria-labelledby="services-heading"
			>
				<h2
					id="services-heading"
					class="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
				>
					What Resort Property Services Do We Provide?
				</h2>
				<p class="text-lg text-gray-700 mb-8 leading-relaxed">
					Our resort property services include vacation home purchasing guidance for vacation use and financing, investment property analysis evaluating rental income potential, and resort community expertise understanding rules and rental restrictions. These services help buyers find perfect resort or second home properties in Las Vegas.
				</p>
				
				<div class="space-y-8">
					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">Vacation Home Purchasing</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Purchasing a vacation home requires different considerations than primary residences. We help you understand vacation home markets, evaluate properties for vacation use, and navigate unique financing and tax considerations. This includes understanding rental potential, maintenance requirements, and vacation home management.
						</p>
						<p class="text-gray-700 leading-relaxed">
							We'll help you identify properties that work well for vacation use, understand rental markets and potential, and evaluate properties considering both personal use and investment potential. We'll discuss financing options for second homes, tax considerations, and property management options. Our goal is to help you find a vacation home that meets your needs while providing good value and potential.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">Investment Property Analysis</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Resort and vacation properties can offer excellent investment opportunities through rental income and appreciation. We help you analyze investment potential, understand rental markets, and evaluate properties as investments. This includes assessing rental income potential, operating expenses, and return on investment.
						</p>
						<p class="text-gray-700 leading-relaxed">
							We'll help you understand rental markets in resort areas, assess rental income potential, and evaluate properties considering both rental income and appreciation potential. We'll discuss property management options, operating expenses, and tax implications of investment properties. Our goal is to help you make informed investment decisions in resort and vacation markets.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">Resort Community Expertise</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Resort communities have unique characteristics, rules, and considerations. We help you understand community rules, rental restrictions, HOA regulations, and resort amenities. This includes understanding how communities manage vacation rentals, what amenities are available, and how community rules affect property use.
						</p>
						<p class="text-gray-700 leading-relaxed">
							We'll help you understand resort community characteristics, including rental restrictions, HOA rules, and community amenities. We'll discuss how these factors affect property use, rental potential, and property values. Our goal is to help you understand resort communities and find properties that match your needs and goals.
						</p>
					</div>
				</div>
			</section>

			<section
				id="considerations"
				class="bg-gradient-to-br from-primary-50 to-white rounded-2xl shadow-lg p-8 md:p-10 mb-12 scroll-mt-24"
				aria-labelledby="considerations-heading"
			>
				<h2
					id="considerations-heading"
					class="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
				>
					What Are Key Considerations for Resort Properties?
				</h2>
				<p class="text-lg text-gray-700 mb-8 leading-relaxed">
					Key considerations for resort properties include rental restrictions affecting investment potential, property management requirements for vacation properties, and seasonal considerations understanding demand patterns throughout the year. Understanding these factors helps buyers make informed decisions about resort and second home properties in Las Vegas.
				</p>
				
				<div class="space-y-6">
					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Rental Restrictions</h3>
						<p class="text-gray-700 leading-relaxed">
							Many resort communities have restrictions on short-term rentals, which can affect investment potential. We help you understand rental restrictions, how they're enforced, and how they affect property values and investment potential. Understanding these restrictions is crucial for investment property purchases.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Property Management</h3>
						<p class="text-gray-700 leading-relaxed">
							Vacation and resort properties often require professional management, especially if used for rentals. We help you understand property management options, costs, and services available in Las Vegas resort areas. Professional management can be essential for successful vacation property ownership.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Seasonal Considerations</h3>
						<p class="text-gray-700 leading-relaxed">
							Las Vegas has year-round appeal, but understanding seasonal patterns can affect vacation property decisions. We help you understand seasonal demand patterns, how they affect rental income, and how to maximize property use throughout the year.
						</p>
					</div>
				</div>
			</section>

			<section
				id="cta"
				class="bg-primary-600 rounded-2xl p-8 md:p-12 text-center text-white scroll-mt-24"
				aria-labelledby="cta-heading"
			>
				<h2
					id="cta-heading"
					class="text-3xl md:text-4xl font-bold mb-4"
				>
					Resort &amp; Second Home Services in Las Vegas
				</h2>
				<p class="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
					Let us help you find the perfect resort or second home property. Contact us today to schedule a consultation.
				</p>
				<div class="flex flex-col sm:flex-row gap-4 justify-center">
					<a href="/contact" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">
						Schedule Consultation
					</a>
					<a
						href="/properties"
						class="btn-primary bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600"
					>
						View Available Properties
					</a>
				</div>
			</section>
		</div>
	</div>
</section>
