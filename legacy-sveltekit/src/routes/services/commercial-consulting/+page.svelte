<script lang="ts">
	import { Building2, TrendingUp, BarChart3, CheckCircle, Users, DollarSign } from 'lucide-svelte';

	interface TocItem {
		id: string;
		label: string;
	}

	const tocItems: TocItem[] = [
		{ id: 'overview', label: 'Overview' },
		{ id: 'expertise', label: 'Consulting Expertise' },
		{ id: 'services', label: 'Consulting Services' },
		{ id: 'types', label: 'Property Types' },
		{ id: 'benefits', label: 'Benefits' },
		{ id: 'cta', label: 'Schedule Consulting' }
	];
</script>

<svelte:head>
	<title>
		Las Vegas Luxury &amp; Relocation Commercial Consulting | Dr. Janet Duffy REALTOR®
	</title>
	<meta
		name="description"
		content="Objective commercial real estate consulting from Las Vegas Luxury &amp; Relocation REALTOR® Dr. Janet Duffy, covering market analysis, property evaluation, and development strategy."
	/>
	<meta
		name="keywords"
		content="Las Vegas Luxury &amp; Relocation REALTOR, commercial consulting Las Vegas, commercial property advice, real estate consulting"
	/>

	<meta
		property="og:title"
		content="Las Vegas Luxury &amp; Relocation Commercial Consulting | Dr. Janet Duffy REALTOR®"
	/>
	<meta
		property="og:description"
		content="Independent, data-driven commercial property and land consulting for Las Vegas buyers, sellers, and investors."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.drjanetduffy.com/services/commercial-consulting" />
	<meta property="og:site_name" content="Las Vegas Luxury &amp; Relocation REALTOR" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="twitter:title"
		content="Las Vegas Luxury &amp; Relocation Commercial Consulting | Dr. Janet Duffy REALTOR®"
	/>
	<meta
		name="twitter:description"
		content="Market, income, and development consulting for Las Vegas commercial properties and land."
	/>

	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "WebPage",
			"name": "Las Vegas Luxury & Relocation Commercial Consulting",
			"description": "Commercial consulting services for Las Vegas real estate, including market analysis, property evaluation, investment strategy, and development planning.",
			"url": "https://www.drjanetduffy.com/services/commercial-consulting",
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
				Commercial Consulting Services in Las Vegas
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Objective real property advice and consulting for commercial transactions. An organization of commercial property experts providing seasoned, objective advice on real property and land-related matters in Las Vegas.
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
					What Commercial Property Consulting Expertise Do We Provide?
				</h2>
				
				<p class="text-lg text-gray-700 mb-6 leading-relaxed">
					Commercial real estate transactions require specialized expertise and objective advice. Commercial properties involve complex considerations, from zoning to income potential to development rights. Our commercial consulting services provide objective, expert advice through market analysis, property evaluation, investment strategy, and unbiased advice focused on client interests.
				</p>

				<div class="grid md:grid-cols-2 gap-6 mb-8">
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<BarChart3 class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Market Analysis</h3>
							<p class="text-gray-600">Comprehensive analysis of commercial markets, property values, and investment potential.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<Building2 class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Property Evaluation</h3>
							<p class="text-gray-600">Expert evaluation of commercial properties, considering all factors affecting value and potential.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<TrendingUp class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Investment Strategy</h3>
							<p class="text-gray-600">Strategic advice for commercial investments, portfolio development, and investment optimization.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<Users class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Objective Advice</h3>
							<p class="text-gray-600">Unbiased, objective advice focused on client interests and optimal outcomes.</p>
						</div>
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
					What Commercial Consulting Services Do We Provide?
				</h2>
				<p class="text-lg text-gray-700 mb-8 leading-relaxed">
					Our commercial consulting services include property analysis and valuation evaluating all factors affecting value, investment consulting with strategic planning and analysis, development consulting for planning and regulatory navigation, and transaction consulting for complex commercial transactions. These services provide objective, expert advice for all commercial real estate needs.
				</p>
				
				<div class="space-y-8">
					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">Property Analysis & Valuation</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Commercial property analysis requires understanding multiple factors, from location to income potential to development rights. We provide comprehensive property analysis, evaluating all factors affecting value and potential. This includes market analysis, income analysis, and development potential evaluation.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Our property analysis includes evaluating location, zoning, utilities, access, income potential, and development rights. We'll help you understand how these factors affect property values and potential. We'll also assess market conditions, comparable sales, and investment potential to provide comprehensive property evaluation.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">Investment Consulting</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Commercial investments require strategic planning and analysis. We help investors develop investment strategies, evaluate opportunities, and optimize portfolios. This includes analyzing investment potential, assessing risks, and developing strategies for portfolio growth.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Our investment consulting includes market analysis, property evaluation, and investment strategy development. We'll help you understand commercial investment potential, assess risks, and develop strategies that align with your goals. Our goal is to help you make informed investment decisions and build successful commercial portfolios.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">Development Consulting</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Commercial development requires expertise in planning, zoning, and development processes. We help developers understand development requirements, navigate regulatory processes, and plan successful developments. This includes site analysis, development planning, and regulatory navigation.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Our development consulting includes site evaluation, development planning, and regulatory guidance. We'll help you understand development requirements, assess development feasibility, and navigate regulatory processes. Our goal is to help you plan and execute successful commercial developments.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">Transaction Consulting</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Commercial transactions involve complex negotiations and considerations. We provide consulting services for commercial transactions, helping buyers and sellers navigate negotiations, due diligence, and closing processes. This includes transaction strategy, negotiation support, and transaction management.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Our transaction consulting includes transaction strategy development, negotiation support, and transaction management. We'll help you understand transaction considerations, develop negotiation strategies, and navigate complex commercial transactions. Our goal is to help you achieve optimal outcomes in commercial transactions.
						</p>
					</div>
				</div>
			</section>

			<section
				id="types"
				class="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-12 scroll-mt-24"
				aria-labelledby="types-heading"
			>
				<h2
					id="types-heading"
					class="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
				>
					Which Commercial Property Types Do We Consult On in Las Vegas?
				</h2>
				<p class="text-lg text-gray-700 mb-8 leading-relaxed">
					We provide consulting services for all commercial property types in Las Vegas including office buildings from single-tenant to large complexes, industrial properties including warehouses and distribution centers, and retail properties from storefronts to shopping centers. Each property type requires specialized consulting expertise that we provide.
				</p>
				
				<div class="space-y-6">
					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Office Buildings</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Las Vegas's office market includes diverse properties, from single-tenant buildings to large office complexes. Office properties require understanding of tenant needs, market conditions, and property values. We help buyers, sellers, and investors understand office markets and make informed decisions.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Office properties in Las Vegas are located throughout the valley, with concentrations in business districts and commercial areas. Properties range from small professional buildings to large office complexes, with values varying based on location, condition, and income potential. We'll help you understand office markets and evaluate office properties.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Industrial Properties</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Las Vegas's industrial market includes warehouses, distribution centers, and manufacturing facilities. Industrial properties require understanding of business needs, location factors, and property values. We help buyers, sellers, and investors understand industrial markets and evaluate industrial properties.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Industrial properties in Las Vegas are located throughout the valley, with concentrations near transportation infrastructure. Properties range from small warehouses to large distribution centers, with values varying based on size, location, and features. We'll help you understand industrial markets and evaluate industrial properties.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Retail Properties</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Las Vegas's retail market includes shopping centers, strip malls, and standalone retail buildings. Retail properties require understanding of location, visibility, and tenant mix. We help buyers, sellers, and investors understand retail markets and evaluate retail properties.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Retail properties in Las Vegas are located throughout the valley, serving both local residents and tourists. Properties range from small storefronts to large shopping centers, with values varying based on location, visibility, and income potential. We'll help you understand retail markets and evaluate retail properties.
						</p>
					</div>
				</div>
			</section>

			<section
				id="benefits"
				class="bg-gradient-to-br from-primary-50 to-white rounded-2xl shadow-lg p-8 md:p-10 mb-12 scroll-mt-24"
				aria-labelledby="benefits-heading"
			>
				<h2
					id="benefits-heading"
					class="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
				>
					What Are the Benefits of Commercial Consulting?
				</h2>
				<p class="text-lg text-gray-700 mb-8 leading-relaxed">
					Commercial consulting benefits include expert analysis of properties, markets, and investment opportunities, objective advice focused on client interests, comprehensive risk assessment to understand and manage investment risks, and strategic planning to achieve commercial real estate goals. These benefits help clients make informed decisions and optimize outcomes.
				</p>
				
				<div class="grid md:grid-cols-2 gap-6">
					<div class="flex items-start gap-4">
						<CheckCircle class="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Expert Analysis</h3>
							<p class="text-gray-700">Comprehensive analysis of commercial properties, markets, and investment opportunities.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<CheckCircle class="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Objective Advice</h3>
							<p class="text-gray-700">Unbiased, objective advice focused on client interests and optimal outcomes.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<CheckCircle class="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Risk Assessment</h3>
							<p class="text-gray-700">Comprehensive risk assessment to help clients understand and manage investment risks.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<CheckCircle class="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Strategic Planning</h3>
							<p class="text-gray-700">Strategic planning to help clients achieve their commercial real estate goals.</p>
						</div>
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
					Commercial Consulting Services in Las Vegas
				</h2>
				<p class="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
					Let us provide objective, expert advice for your commercial real estate needs. Contact us today to schedule a consultation.
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

