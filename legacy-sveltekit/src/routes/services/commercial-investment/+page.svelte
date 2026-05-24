<script lang="ts">
	import { Building2, TrendingUp, DollarSign, BarChart3, Target, CheckCircle } from 'lucide-svelte';

	interface TocItem {
		id: string;
		label: string;
	}

	const tocItems: TocItem[] = [
		{ id: 'overview', label: 'Overview' },
		{ id: 'expertise', label: 'Investment Expertise' },
		{ id: 'opportunities', label: 'Investment Opportunities' },
		{ id: 'services', label: 'Investment Services' },
		{ id: 'considerations', label: 'Key Considerations' },
		{ id: 'cta', label: 'Plan Your Investment Strategy' }
	];
</script>

<svelte:head>
	<title>
		Las Vegas Luxury &amp; Relocation Commercial Investment Services | Dr. Janet Duffy REALTOR®
	</title>
	<meta
		name="description"
		content="Commercial investment services from Las Vegas Luxury &amp; Relocation REALTOR® Dr. Janet Duffy, helping investors analyze, acquire, and optimize commercial properties across the Las Vegas market."
	/>
	<meta
		name="keywords"
		content="Las Vegas Luxury &amp; Relocation REALTOR, commercial investment Las Vegas, commercial real estate investment, CCIM-level analysis"
	/>

	<meta
		property="og:title"
		content="Las Vegas Luxury &amp; Relocation Commercial Investment Services | Dr. Janet Duffy REALTOR®"
	/>
	<meta
		property="og:description"
		content="Cap rate, cash flow, and portfolio strategy guidance for Las Vegas commercial investors in office, industrial, and retail."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.drjanetduffy.com/services/commercial-investment" />
	<meta property="og:site_name" content="Las Vegas Luxury &amp; Relocation REALTOR" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="twitter:title"
		content="Las Vegas Luxury &amp; Relocation Commercial Investment Services | Dr. Janet Duffy REALTOR®"
	/>
	<meta
		name="twitter:description"
		content="Institutional-style investment analysis and portfolio planning for Las Vegas commercial real estate."
	/>

	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "WebPage",
			"name": "Las Vegas Luxury & Relocation Commercial Investment Services",
			"description": "Commercial investment guidance for Las Vegas, including income analysis, portfolio strategy, and market evaluation for office, industrial, and retail properties.",
			"url": "https://www.drjanetduffy.com/services/commercial-investment",
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
				Commercial Investment Services in Las Vegas
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Commercial real estate's global standard for professional achievement. Strategic commercial real estate investment guidance earned through extensive curriculum and professional experiential requirements for Las Vegas market.
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
					What Commercial Investment Expertise Do We Provide in Las Vegas?
				</h2>
				
				<p class="text-lg text-gray-700 mb-6 leading-relaxed">
					Commercial real estate investments offer opportunities for income generation, appreciation, and portfolio diversification. Las Vegas's commercial markets provide diverse investment opportunities, from office buildings to retail properties to industrial facilities. Our commercial investment services help investors identify opportunities, evaluate properties, and build successful commercial portfolios through investment analysis, income analysis, portfolio strategy, and market expertise.
				</p>

				<div class="grid md:grid-cols-2 gap-6 mb-8">
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<BarChart3 class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Investment Analysis</h3>
							<p class="text-gray-600">Comprehensive analysis of commercial investment opportunities, potential returns, and risk assessment.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<DollarSign class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Income Analysis</h3>
							<p class="text-gray-600">Detailed analysis of rental income, operating expenses, and cash flow potential for commercial properties.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<Target class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Portfolio Strategy</h3>
							<p class="text-gray-600">Strategic planning for commercial investment portfolios, diversification, and portfolio optimization.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<TrendingUp class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Market Expertise</h3>
							<p class="text-gray-600">Deep understanding of Las Vegas commercial markets, trends, and investment opportunities.</p>
						</div>
					</div>
				</div>
			</section>

			<section
				id="opportunities"
				class="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-12 scroll-mt-24"
				aria-labelledby="opportunities-heading"
			>
				<h2
					id="opportunities-heading"
					class="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
				>
					What Commercial Investment Opportunities Are Available in Las Vegas?
				</h2>
				<p class="text-lg text-gray-700 mb-8 leading-relaxed">
					Commercial investment opportunities in Las Vegas include office building investments with stable income through long-term leases, industrial property investments with good income and appreciation potential, and retail property investments with income through tenant leases. Each opportunity offers unique benefits and requires specialized investment analysis.
				</p>
				
				<div class="space-y-6">
					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Office Building Investments</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Las Vegas's office market offers investment opportunities through office buildings and business parks. Office investments can provide stable income through long-term leases and potential appreciation. We help investors evaluate office investment opportunities, assess income potential, and understand office market dynamics.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Office investments in Las Vegas range from small professional buildings to large office complexes. Properties are located throughout the valley, with concentrations in business districts. We'll help you understand office investment potential, assess risks, and evaluate properties considering both income and appreciation potential.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Industrial Property Investments</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Las Vegas's industrial market offers investment opportunities through warehouses, distribution centers, and manufacturing facilities. Industrial investments can provide good income and appreciation potential. We help investors evaluate industrial investment opportunities and understand industrial market dynamics.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Industrial investments in Las Vegas range from small warehouses to large distribution centers. Properties are located throughout the valley, with concentrations near transportation infrastructure. We'll help you understand industrial investment potential, assess risks, and evaluate properties considering both income and appreciation potential.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Retail Property Investments</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Las Vegas's retail market offers investment opportunities through shopping centers, strip malls, and standalone retail buildings. Retail investments can provide good income through tenant leases. We help investors evaluate retail investment opportunities and understand retail market dynamics.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Retail investments in Las Vegas range from small storefronts to large shopping centers. Properties are located throughout the valley, serving both local residents and tourists. We'll help you understand retail investment potential, assess risks, and evaluate properties considering both income and appreciation potential.
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
					What Commercial Investment Services Do We Provide?
				</h2>
				<p class="text-lg text-gray-700 mb-8 leading-relaxed">
					Our commercial investment services include investment property analysis evaluating income potential and returns, portfolio development with strategic planning and diversification, and market analysis evaluating market conditions and trends. These services help investors make informed decisions and build successful commercial investment portfolios in Las Vegas.
				</p>
				
				<div class="space-y-8">
					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">Investment Property Analysis</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Commercial investment properties require detailed analysis of income potential, operating expenses, and investment returns. We provide comprehensive investment analysis, evaluating all factors affecting investment potential. This includes income analysis, expense analysis, and return calculations.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Our investment analysis includes evaluating rental income, operating expenses, financing costs, and potential returns. We'll help you understand investment potential, assess risks, and evaluate properties considering both income and appreciation potential. Our goal is to help you make informed commercial investment decisions.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">Portfolio Development</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Building a successful commercial investment portfolio requires strategic planning and diversification. We help investors develop portfolio strategies, identify diversification opportunities, and manage portfolio growth. This includes understanding how different property types and locations fit into overall investment strategies.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Our portfolio development services include investment planning, diversification analysis, and portfolio management guidance. We'll help you develop investment strategies that align with your goals, assess portfolio diversification, and plan for portfolio growth. Our goal is to help you build successful commercial investment portfolios.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">Market Analysis</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Understanding commercial markets is essential for successful investments. We provide comprehensive market analysis, evaluating market conditions, trends, and investment opportunities. This includes analyzing supply and demand, rental rates, and market trends.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Our market analysis includes evaluating market conditions, trends, and investment opportunities. We'll help you understand commercial markets, assess market conditions, and identify investment opportunities. Our goal is to help you make informed investment decisions based on comprehensive market analysis.
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
					What Are Key Considerations for Commercial Investments?
				</h2>
				<p class="text-lg text-gray-700 mb-8 leading-relaxed">
					Key considerations for commercial investments include income stability through tenant quality and lease terms, location factors affecting property values and income potential, and market conditions understanding supply, demand, and market dynamics. These considerations help investors evaluate commercial investment opportunities and assess risks effectively.
				</p>
				
				<div class="space-y-6">
					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Income Stability</h3>
						<p class="text-gray-700 leading-relaxed">
							Commercial investments rely on rental income, and understanding income stability is crucial. We help investors evaluate tenant quality, lease terms, and income stability. This includes assessing tenant creditworthiness, lease duration, and income reliability.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Location Factors</h3>
						<p class="text-gray-700 leading-relaxed">
							Location significantly affects commercial property values and income potential. We help investors understand how location affects commercial properties, including accessibility, visibility, and market position. This includes evaluating location factors and their impact on property values.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Market Conditions</h3>
						<p class="text-gray-700 leading-relaxed">
							Commercial markets can change, and understanding market conditions is essential. We help investors understand current market conditions, assess market trends, and evaluate how market conditions affect investments. This includes understanding supply and demand and market dynamics.
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
					Commercial Investment Services in Las Vegas
				</h2>
				<p class="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
					Let us help you with your commercial investment needs. Contact us today to schedule a consultation.
				</p>
				<div class="flex flex-col sm:flex-row gap-4 justify-center">
					<a href="/contact" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">
						Schedule Consultation
					</a>
					<a
						href="/properties"
						class="btn-primary bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600"
					>
						View Commercial Properties
					</a>
				</div>
			</section>
		</div>
	</div>
</section>

