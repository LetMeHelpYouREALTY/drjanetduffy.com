<script lang="ts">
	import { TrendingUp, DollarSign, Home, BarChart3, Target, CheckCircle } from 'lucide-svelte';

	interface TocItem {
		id: string;
		label: string;
	}

	const tocItems: TocItem[] = [
		{ id: 'overview', label: 'Overview' },
		{ id: 'opportunities', label: 'Investment Opportunities' },
		{ id: 'markets', label: 'Best Markets' },
		{ id: 'services', label: 'Investment Services' },
		{ id: 'considerations', label: 'Key Considerations' },
		{ id: 'cta', label: 'Plan Your Strategy' }
	];
</script>

<svelte:head>
	<title>
		Las Vegas Luxury &amp; Relocation Real Estate Investing Services | Dr. Janet Duffy REALTOR®
	</title>
	<meta
		name="description"
		content="Las Vegas Luxury &amp; Relocation REALTOR® Dr. Janet Duffy provides data-driven real estate investing services, from rental portfolios to fix-and-flip and 1031 exchange strategies across the Las Vegas Valley."
	/>
	<meta
		name="keywords"
		content="Las Vegas Luxury &amp; Relocation REALTOR, real estate investing Las Vegas, investment properties Las Vegas, rental portfolios, fix and flip, 1031 exchange"
	/>

	<meta
		property="og:title"
		content="Las Vegas Luxury &amp; Relocation Real Estate Investing Services | Dr. Janet Duffy REALTOR®"
	/>
	<meta
		property="og:description"
		content="Strategic real estate investing guidance for Las Vegas rental, flip, and portfolio investors with concierge-level analysis and support."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.drjanetduffy.com/services/real-estate-investing" />
	<meta property="og:site_name" content="Las Vegas Luxury &amp; Relocation REALTOR" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="twitter:title"
		content="Las Vegas Luxury &amp; Relocation Real Estate Investing Services | Dr. Janet Duffy REALTOR®"
	/>
	<meta
		name="twitter:description"
		content="Cap rate, cash flow, and long-term portfolio strategy support for Las Vegas real estate investors."
	/>

	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "WebPage",
			"name": "Las Vegas Luxury & Relocation Real Estate Investing Services",
			"description": "Real estate investing services from Las Vegas Luxury & Relocation REALTOR Dr. Janet Duffy, focused on rental properties, fix-and-flip, and long-term portfolio strategies in the Las Vegas Valley.",
			"url": "https://www.drjanetduffy.com/services/real-estate-investing",
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
				Real Estate Investing Services in Las Vegas
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Master working with investors and those establishing themselves as real estate investors. Comprehensive investment property consulting and portfolio development services for Las Vegas real estate investors.
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
				id="opportunities"
				class="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-12 scroll-mt-24"
				aria-labelledby="opportunities-heading"
			>
				<h2
					id="opportunities-heading"
					class="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
				>
					What Las Vegas Real Estate Investment Opportunities Are Available?
				</h2>
				
				<p class="text-lg text-gray-700 mb-6 leading-relaxed">
					Las Vegas offers excellent real estate investment opportunities, from rental properties to fix-and-flip projects to commercial investments. The area's growing population, strong rental demand, and diverse property markets create numerous investment possibilities. Our investment services help investors identify opportunities, evaluate properties, and build successful portfolios through rental property guidance, fix-and-flip strategies, portfolio development, and investment analysis.
				</p>

				<div class="grid md:grid-cols-2 gap-6 mb-8">
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<Home class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Rental Properties</h3>
							<p class="text-gray-600">Expert guidance for purchasing and managing rental properties in Las Vegas's strong rental markets.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<TrendingUp class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Fix & Flip</h3>
							<p class="text-gray-600">Strategic advice for fix-and-flip projects, identifying properties with renovation potential.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<BarChart3 class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Portfolio Development</h3>
							<p class="text-gray-600">Comprehensive strategies for building and managing real estate investment portfolios.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<DollarSign class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Investment Analysis</h3>
							<p class="text-gray-600">Detailed analysis of investment opportunities, potential returns, and risk assessment.</p>
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
					Which Investment Property Markets in Las Vegas Offer the Best Returns?
				</h2>
				<p class="text-lg text-gray-700 mb-8 leading-relaxed">
					Las Vegas investment property markets include strong rental markets in Summerlin and Henderson, fix-and-flip opportunities in North Las Vegas, and commercial investment options throughout the valley. Each market offers unique opportunities and return potential based on property type, location, and investment strategy.
				</p>
				
				<div class="space-y-6">
					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Rental Property Markets</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Las Vegas's strong rental markets offer excellent opportunities for investors seeking rental income. Areas like North Las Vegas, Henderson, and various Las Vegas neighborhoods provide good rental yields and strong tenant demand. We help investors identify rental property opportunities, evaluate income potential, and understand rental markets.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Rental properties in Las Vegas typically offer good cash flow potential, with strong demand from both local residents and seasonal workers. Properties range from single-family homes to multi-unit buildings, offering options for various investment strategies. We'll help you understand rental markets, evaluate properties, and assess income potential.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Fix-and-Flip Opportunities</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Las Vegas offers numerous fix-and-flip opportunities, with properties needing updates or repairs available throughout the valley. Areas with older housing stock or properties needing renovation can provide excellent returns for investors willing to invest in improvements. We help investors identify fix-and-flip opportunities and evaluate renovation potential.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Fix-and-flip properties require careful evaluation of renovation costs, market values, and profit potential. We'll help you identify properties with renovation potential, estimate improvement costs, and assess profit potential. Our goal is to help you find fix-and-flip opportunities that provide good returns while managing risks.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Commercial Investment Opportunities</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Las Vegas's commercial markets offer investment opportunities through office buildings, retail properties, and industrial facilities. Commercial investments can provide stable income and long-term appreciation. We help investors understand commercial investment opportunities and evaluate properties as investments.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Commercial investments require different analysis than residential properties, considering factors like lease terms, tenant quality, and income stability. We'll help you understand commercial investment potential, assess risks, and evaluate properties considering both income and appreciation potential.
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
					Our Investment Services
				</h2>
				
				<div class="space-y-8">
					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">Investment Property Identification</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							We help investors identify investment property opportunities that match their goals, budget, and risk tolerance. This includes evaluating different property types, locations, and investment strategies. We'll help you understand various investment approaches and identify properties that align with your investment goals.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Our investment property identification services include market analysis, property evaluation, and opportunity assessment. We'll help you understand different investment strategies, from buy-and-hold rentals to fix-and-flip projects to commercial investments. Our goal is to help you identify investment opportunities that match your goals and provide good returns.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">Financial Analysis</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Investment properties require detailed financial analysis to assess potential returns and risks. We help investors analyze cash flow, return on investment, and long-term potential. This includes evaluating rental income, operating expenses, financing costs, and potential appreciation.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Our financial analysis includes cash flow projections, return calculations, and risk assessment. We'll help you understand investment returns, assess risks, and evaluate properties considering both income and appreciation potential. Our goal is to help you make informed investment decisions based on comprehensive financial analysis.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">Portfolio Strategy</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Building a successful real estate investment portfolio requires strategic planning and diversification. We help investors develop portfolio strategies, identify diversification opportunities, and manage portfolio growth. This includes understanding how different property types and locations fit into overall investment strategies.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Our portfolio strategy services include investment planning, diversification analysis, and portfolio management guidance. We'll help you develop investment strategies that align with your goals, assess portfolio diversification, and plan for portfolio growth. Our goal is to help you build successful real estate investment portfolios.
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
					Investment Considerations
				</h2>
				
				<div class="space-y-6">
					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Cash Flow Analysis</h3>
						<p class="text-gray-700 leading-relaxed">
							Understanding cash flow is crucial for investment properties. We help investors analyze rental income, operating expenses, financing costs, and net cash flow. This includes evaluating cash flow stability and potential for improvement.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Property Management</h3>
						<p class="text-gray-700 leading-relaxed">
							Investment properties often require professional management, especially for out-of-town investors. We help investors understand property management options, costs, and services. This includes evaluating management companies and understanding management requirements.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Tax Considerations</h3>
						<p class="text-gray-700 leading-relaxed">
							Real estate investments have significant tax implications, including deductions, depreciation, and capital gains. We help investors understand tax considerations and coordinate with tax professionals to maximize tax benefits.
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
					Real Estate Investment Services in Las Vegas
				</h2>
				<p class="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
					Let us help you with your real estate investment needs. Contact us today to schedule a consultation.
				</p>
				<div class="flex flex-col sm:flex-row gap-4 justify-center">
					<a href="/contact" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">
						Schedule Consultation
					</a>
					<a
						href="/properties"
						class="btn-primary bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600"
					>
						View Investment Properties
					</a>
				</div>
			</section>
		</div>
	</div>
</section>

