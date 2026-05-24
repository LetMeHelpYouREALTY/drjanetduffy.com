<script lang="ts">
	import { Globe, Home, TrendingUp, Users, MapPin, DollarSign } from 'lucide-svelte';

	interface TocItem {
		id: string;
		label: string;
	}

	const tocItems: TocItem[] = [
		{ id: 'overview', label: 'Overview' },
		{ id: 'serve-clients', label: 'Serving International Clients' },
		{ id: 'buyer-services', label: 'Buyer Services' },
		{ id: 'attractions', label: 'Las Vegas Attractions' },
		{ id: 'considerations', label: 'Key Considerations' },
		{ id: 'cta', label: 'Plan Your Cross-Border Move' }
	];
</script>

<svelte:head>
	<title>
		International Property Services in Las Vegas | Las Vegas Luxury &amp; Relocation REALTOR®
	</title>
	<meta
		name="description"
		content="International property services from Las Vegas Luxury &amp; Relocation REALTOR® Dr. Janet Duffy, guiding global buyers and investors through cross-border Las Vegas transactions."
	/>
	<meta
		name="keywords"
		content="Las Vegas Luxury &amp; Relocation REALTOR, international real estate Las Vegas, foreign buyers, global property services"
	/>

	<meta
		property="og:title"
		content="International Property Services in Las Vegas | Las Vegas Luxury &amp; Relocation REALTOR®"
	/>
	<meta
		property="og:description"
		content="Cross-border real estate support for international buyers, investors, and second-home owners in Las Vegas."
	/>
	<meta property="og:type" content="website" />
	<meta
		property="og:url"
		content="https://www.drjanetduffy.com/services/international-property"
	/>
	<meta property="og:site_name" content="Las Vegas Luxury &amp; Relocation REALTOR" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="twitter:title"
		content="International Property Services in Las Vegas | Las Vegas Luxury &amp; Relocation REALTOR®"
	/>
	<meta
		name="twitter:description"
		content="End-to-end support for international buyers, including financing, remote tours, and cross-border transaction management."
	/>

	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "WebPage",
			"name": "International Property Services in Las Vegas",
			"description": "International property services for foreign buyers and investors in Las Vegas, including financing guidance, remote search, and transaction coordination.",
			"url": "https://www.drjanetduffy.com/services/international-property",
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
				International Property Services in Las Vegas
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Global real estate expertise for international buyers and sellers. The knowledge, research, network, and tools to globalize your business and serve international clients in Las Vegas.
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

		<section
				id="serve-clients"
				class="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-12 scroll-mt-24"
				aria-labelledby="serve-clients-heading"
			>
				<h2
					id="serve-clients-heading"
					class="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
				>
					How Do We Serve International Clients in Las Vegas?
				</h2>
				
				<p class="text-lg text-gray-700 mb-6 leading-relaxed">
					Las Vegas attracts international buyers and investors from around the world, seeking everything from vacation homes to investment properties. International transactions require specialized expertise, understanding of cross-border regulations, and knowledge of international buyer needs. Our services help international clients navigate Las Vegas real estate successfully through cross-border expertise, international financing guidance, cultural understanding, and comprehensive remote services.
				</p>

				<div class="grid md:grid-cols-2 gap-6 mb-8">
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<Globe class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Cross-Border Expertise</h3>
							<p class="text-gray-600">Understanding international regulations, financing, and transaction requirements for foreign buyers.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<DollarSign class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">International Financing</h3>
							<p class="text-gray-600">Expertise in financing options for international buyers and understanding of international banking requirements.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<Users class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Cultural Understanding</h3>
							<p class="text-gray-600">Sensitivity to cultural differences and understanding of international buyer preferences and expectations.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<MapPin class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Remote Services</h3>
							<p class="text-gray-600">Comprehensive remote services for international clients who cannot visit Las Vegas in person.</p>
						</div>
					</div>
				</div>
			</section>

			<section
				id="buyer-services"
				class="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-12 scroll-mt-24"
				aria-labelledby="buyer-services-heading"
			>
				<h2
					id="buyer-services-heading"
					class="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
				>
					What International Buyer Services Do We Provide?
				</h2>
				<p class="text-lg text-gray-700 mb-8 leading-relaxed">
					Our international buyer services include understanding international buyer needs and preferences, financing guidance for foreign buyers, remote property search capabilities for clients who cannot visit frequently, and transaction management coordinating across time zones. These comprehensive services address the unique needs of international buyers in Las Vegas.
				</p>
				
				<div class="space-y-8">
					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">Understanding International Buyer Needs</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							International buyers often have different priorities, timelines, and expectations than domestic buyers. We help international clients understand the Las Vegas market, identify properties that match their needs, and navigate the purchase process. This includes understanding international buyer preferences, investment goals, and lifestyle requirements.
						</p>
						<p class="text-gray-700 leading-relaxed">
							We'll help you understand Las Vegas neighborhoods, property types, and market conditions from an international perspective. We'll discuss investment potential, rental markets, and property management options. We'll also help you understand Las Vegas's lifestyle, amenities, and what makes it attractive to international buyers. Our goal is to help you make informed decisions about Las Vegas real estate.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">Financing for International Buyers</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							International buyers face unique financing challenges, and understanding options is crucial. We help international clients understand financing options, work with lenders experienced in international transactions, and navigate financing requirements. This includes understanding down payment requirements, documentation needs, and financing timelines.
						</p>
						<p class="text-gray-700 leading-relaxed">
							We'll help you understand financing options for international buyers, including requirements for down payments, documentation, and credit history. We'll work with lenders experienced in international transactions who understand the unique requirements of foreign buyers. We'll also help you understand alternative financing options and how to structure transactions to meet your needs.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">Remote Property Search</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Many international buyers cannot visit Las Vegas frequently, requiring comprehensive remote search services. We provide detailed property information, virtual tours, video consultations, and remote property evaluation services. This allows international buyers to make informed decisions without frequent travel.
						</p>
						<p class="text-gray-700 leading-relaxed">
							We'll conduct virtual property tours, provide detailed property reports, and help you evaluate properties remotely. We'll coordinate with local inspectors and professionals to ensure you have comprehensive information. We'll also help you understand neighborhoods through video tours and detailed market information. Our goal is to make remote property search as effective as in-person visits.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">Transaction Management</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							International transactions require careful coordination, especially when buyers are in different time zones. We manage all aspects of transactions, coordinate with international clients, and ensure smooth closings. This includes handling time zone differences, international communications, and transaction logistics.
						</p>
						<p class="text-gray-700 leading-relaxed">
							We'll coordinate all aspects of your transaction, managing communications across time zones and ensuring all parties stay informed. We'll handle documentation, coordinate with lenders and title companies, and ensure closings proceed smoothly. Our goal is to make international transactions as seamless as possible, despite geographic and time zone challenges.
						</p>
					</div>
				</div>
			</section>

			<section
				id="attractions"
				class="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-12 scroll-mt-24"
				aria-labelledby="attractions-heading"
			>
				<h2
					id="attractions-heading"
					class="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
				>
					What Las Vegas Attractions Appeal to International Buyers?
				</h2>
				<p class="text-lg text-gray-700 mb-8 leading-relaxed">
					Las Vegas attractions for international buyers include investment opportunities with strong rental markets and growth potential, lifestyle appeal with world-class entertainment and amenities, and accessibility through international airport and direct flights. These attractions make Las Vegas highly attractive to international buyers seeking vacation homes or investment properties.
				</p>
				
				<div class="space-y-6">
					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Investment Opportunities</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Las Vegas offers excellent real estate investment opportunities, with strong rental markets and growth potential. International investors are attracted to Las Vegas's stable market, rental income potential, and property appreciation. We help international investors understand investment opportunities, evaluate properties, and structure investments.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Las Vegas's tourism industry creates strong demand for rental properties, making it attractive to international investors. We'll help you understand rental markets, investment potential, and property management options. We'll also help you understand tax implications, financing options, and how to structure investments for optimal returns.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Lifestyle Appeal</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Las Vegas offers world-class entertainment, dining, and amenities that appeal to international buyers seeking lifestyle properties. From luxury communities to resort-style living, Las Vegas provides diverse options for international buyers. We help international clients understand Las Vegas's lifestyle and identify properties that match their preferences.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Las Vegas's entertainment, dining, and cultural amenities create a unique lifestyle that appeals to many international buyers. We'll help you understand Las Vegas's lifestyle, identify neighborhoods that match your preferences, and find properties that provide the lifestyle you're seeking. Our goal is to help you find a property that enhances your Las Vegas experience.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Accessibility</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Las Vegas's international airport and accessibility make it convenient for international buyers. Direct flights from major international cities and easy access to the city make Las Vegas attractive to international buyers. We help international clients understand accessibility and plan visits and transactions accordingly.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Las Vegas's accessibility makes it convenient for international buyers to visit, manage properties, and enjoy their investments. We'll help you understand travel options, plan visits, and coordinate transactions to accommodate international travel. Our goal is to make Las Vegas real estate accessible and convenient for international clients.
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
					What Are Key Considerations for International Buyers?
				</h2>
				<p class="text-lg text-gray-700 mb-8 leading-relaxed">
					Key considerations for international buyers include tax implications in both the United States and home countries, property management requirements for international owners, and legal considerations requiring specialized expertise. Understanding these factors helps international buyers navigate Las Vegas real estate successfully and ensure compliance with all regulations.
				</p>
				
				<div class="space-y-6">
					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Tax Implications</h3>
						<p class="text-gray-700 leading-relaxed">
							International property ownership has tax implications in both the United States and buyers' home countries. We help international buyers understand tax considerations and coordinate with tax professionals to ensure compliance. This includes understanding property taxes, income taxes, and international tax treaties.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Property Management</h3>
						<p class="text-gray-700 leading-relaxed">
							International buyers often require professional property management for their Las Vegas properties. We help international buyers understand property management options, costs, and services. This includes understanding management companies, rental management, and maintenance services.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Legal Considerations</h3>
						<p class="text-gray-700 leading-relaxed">
							International property transactions involve legal considerations that require specialized expertise. We help international buyers understand legal requirements, work with attorneys experienced in international transactions, and ensure compliance with all regulations.
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
					International Property Services in Las Vegas
				</h2>
				<p class="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
					Let us help you with your international real estate needs in Las Vegas. Contact us today to schedule a consultation.
				</p>
				<div class="flex flex-col sm:flex-row gap-4 justify-center">
					<a href="/contact" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">
						Schedule Consultation
					</a>
					<a href="/properties" class="btn-primary bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600">
						View Available Properties
					</a>
				</div>
		</section>
	</div>
</section>

