<script lang="ts">
	import { Building2, TrendingUp, MapPin, DollarSign, BarChart3, CheckCircle } from 'lucide-svelte';

	interface TocItem {
		id: string;
		label: string;
	}

	const tocItems: TocItem[] = [
		{ id: 'overview', label: 'Overview' },
		{ id: 'expertise', label: 'Commercial Expertise' },
		{ id: 'markets', label: 'Markets Served' },
		{ id: 'services', label: 'Service Offerings' },
		{ id: 'considerations', label: 'Key Considerations' },
		{ id: 'cta', label: 'Start Your Commercial Search' }
	];
</script>

<svelte:head>
	<title>
		Las Vegas Luxury &amp; Relocation Commercial Real Estate Services | Dr. Janet Duffy REALTOR®
	</title>
	<meta
		name="description"
		content="Commercial real estate services from Las Vegas Luxury &amp; Relocation REALTOR® Dr. Janet Duffy, specializing in industrial, office, and retail properties across the Las Vegas Valley."
	/>
	<meta
		name="keywords"
		content="Las Vegas Luxury &amp; Relocation REALTOR, commercial real estate Las Vegas, industrial property, office space Las Vegas, commercial investments"
	/>

	<meta
		property="og:title"
		content="Las Vegas Luxury &amp; Relocation Commercial Real Estate Services | Dr. Janet Duffy REALTOR®"
	/>
	<meta
		property="og:description"
		content="Industrial, office, and retail acquisition, leasing, and investment support for businesses and investors in Las Vegas."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.drjanetduffy.com/services/commercial-real-estate" />
	<meta property="og:site_name" content="Las Vegas Luxury &amp; Relocation REALTOR" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="twitter:title"
		content="Las Vegas Luxury &amp; Relocation Commercial Real Estate Services | Dr. Janet Duffy REALTOR®"
	/>
	<meta
		name="twitter:description"
		content="Full-service commercial brokerage support across Las Vegas industrial, office, and retail submarkets."
	/>

	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "WebPage",
			"name": "Las Vegas Luxury & Relocation Commercial Real Estate Services",
			"description": "Commercial real estate services in Las Vegas, including industrial, office, and retail transactions, leasing, and investments.",
			"url": "https://www.drjanetduffy.com/services/commercial-real-estate",
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
				Commercial Real Estate Services in Las Vegas
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Commercial specialists in industrial and office markets. Top-producing professionals providing expert services for commercial property transactions, investments, and leasing in Las Vegas.
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
				id="expertise"
				class="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-12 scroll-mt-24"
				aria-labelledby="expertise-heading"
			>
				<h2
					id="expertise-heading"
					class="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
				>
					What Commercial Real Estate Expertise Do We Provide in Las Vegas?
				</h2>
				
				<p class="text-lg text-gray-700 mb-6 leading-relaxed">
					Las Vegas's commercial real estate market includes diverse property types, from industrial warehouses to office buildings to retail spaces. Commercial transactions require specialized expertise, understanding of commercial markets, and knowledge of business needs. Our commercial services help buyers, sellers, and investors navigate Las Vegas commercial markets successfully through industrial property expertise, office building services, investment analysis, and deep market knowledge.
				</p>

				<div class="grid md:grid-cols-2 gap-6 mb-8">
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<Building2 class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Industrial Properties</h3>
							<p class="text-gray-600">Expertise in industrial warehouses, distribution centers, and manufacturing facilities in Las Vegas.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<BarChart3 class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Office Buildings</h3>
							<p class="text-gray-600">Expert services for office buildings, business parks, and professional spaces throughout Las Vegas.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<DollarSign class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Investment Analysis</h3>
							<p class="text-gray-600">Comprehensive analysis of commercial investment opportunities and potential returns.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<TrendingUp class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Market Knowledge</h3>
							<p class="text-gray-600">Deep understanding of Las Vegas commercial markets, trends, and property values.</p>
						</div>
					</div>
				</div>
			</section>

			<section
				id="markets"
				class="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-12 scroll-mt-24"
				aria-labelledby="markets-heading"
			>
				<h2
					id="markets-heading"
					class="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
				>
					Which Las Vegas Commercial Markets Do We Serve?
				</h2>
				<p class="text-lg text-gray-700 mb-8 leading-relaxed">
					We serve all Las Vegas commercial markets including the industrial market with warehouses and distribution centers, the office market with buildings and business parks, and the retail market with shopping centers and storefronts. Each market has unique characteristics, property values, and investment potential that we understand and leverage for our clients.
				</p>
				
				<div class="space-y-6">
					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Industrial Market</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Las Vegas's industrial market includes warehouses, distribution centers, and manufacturing facilities. The area's strategic location, transportation infrastructure, and business-friendly environment make it attractive for industrial operations. Industrial properties range from small warehouses to large distribution centers, serving various business needs.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Industrial properties in Las Vegas are located throughout the valley, with concentrations in North Las Vegas, Henderson, and areas near the airport. Properties typically range from small warehouses to large distribution centers, with prices varying based on size, location, and features. We help buyers and sellers understand industrial markets, property values, and investment potential.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Office Market</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Las Vegas's office market includes everything from single-tenant buildings to large office complexes. The market serves diverse business needs, from professional services to corporate headquarters. Office properties are located throughout Las Vegas, with concentrations in business districts and commercial areas.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Office properties in Las Vegas range from small professional buildings to large office complexes. Properties are located in various areas, including downtown Las Vegas, Summerlin, Henderson, and other business districts. We help buyers and sellers understand office markets, property values, and leasing potential.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Retail Market</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Las Vegas's retail market includes shopping centers, strip malls, and standalone retail buildings. The area's tourism industry and growing population create strong demand for retail space. Retail properties are located throughout Las Vegas, serving both local residents and tourists.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Retail properties in Las Vegas range from small storefronts to large shopping centers. Properties are located in various areas, including tourist zones, residential neighborhoods, and commercial districts. We help buyers and sellers understand retail markets, property values, and leasing potential.
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
					What Commercial Real Estate Services Do We Provide?
				</h2>
				<p class="text-lg text-gray-700 mb-8 leading-relaxed">
					Our commercial real estate services include commercial property sales with property evaluation and transaction management, commercial leasing with lease negotiations and property management, and investment analysis evaluating income potential and returns. These comprehensive services cover all aspects of commercial real estate transactions in Las Vegas.
				</p>
				
				<div class="space-y-8">
					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">Commercial Property Sales</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							We help buyers and sellers navigate commercial property sales, from property evaluation to transaction management. Commercial sales require specialized expertise, understanding of commercial markets, and knowledge of business needs. We provide comprehensive services covering all aspects of commercial transactions.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Our commercial sales services include property evaluation, market analysis, buyer identification, and transaction management. We understand commercial property values, market conditions, and buyer needs. We'll help you navigate commercial transactions successfully, whether you're buying or selling commercial properties.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">Commercial Leasing</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							We help property owners and tenants navigate commercial leasing, from lease negotiations to property management. Commercial leases are complex documents requiring specialized expertise. We provide comprehensive leasing services covering all aspects of commercial leases.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Our commercial leasing services include lease negotiations, property evaluation, and lease management. We understand commercial lease terms, market rates, and tenant needs. We'll help you negotiate favorable lease terms and manage commercial leases effectively.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">Investment Analysis</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Commercial properties can offer excellent investment opportunities through rental income and appreciation. We help investors analyze commercial investment opportunities, understand potential returns, and evaluate properties as investments. This includes assessing rental income, operating expenses, and return on investment.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Our investment analysis services include property evaluation, market analysis, and financial modeling. We'll help you understand commercial investment potential, assess risks, and evaluate properties considering both income and appreciation potential. Our goal is to help you make informed investment decisions in commercial markets.
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
					What Are Key Considerations for Commercial Properties?
				</h2>
				<p class="text-lg text-gray-700 mb-8 leading-relaxed">
					Key considerations for commercial properties include location and accessibility affecting value and usability, zoning and regulations determining permitted uses, and income potential through rental income and operating expenses. Understanding these factors helps buyers, sellers, and investors make informed decisions about commercial properties in Las Vegas.
				</p>
				
				<div class="space-y-6">
					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Location & Accessibility</h3>
						<p class="text-gray-700 leading-relaxed">
							Location is crucial for commercial properties, affecting both value and usability. We help buyers and sellers understand how location affects commercial property values, accessibility, and business potential. This includes evaluating transportation access, visibility, and proximity to customers or suppliers.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Zoning & Regulations</h3>
						<p class="text-gray-700 leading-relaxed">
							Commercial properties are subject to zoning regulations and business requirements. We help buyers understand zoning, permitted uses, and regulatory requirements. This includes evaluating zoning compliance and understanding how regulations affect property use and value.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Income Potential</h3>
						<p class="text-gray-700 leading-relaxed">
							Commercial properties often generate rental income, and understanding income potential is crucial for investors. We help investors analyze rental income potential, operating expenses, and return on investment. This includes evaluating lease terms, tenant quality, and income stability.
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
					Commercial Real Estate Services in Las Vegas
				</h2>
				<p class="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
					Let us help you with your commercial real estate needs. Contact us today to schedule a consultation.
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

