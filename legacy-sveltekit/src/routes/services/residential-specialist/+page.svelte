<script lang="ts">
	import { Home, TrendingUp, CheckCircle, MapPin, Users, Award } from 'lucide-svelte';

	interface TocItem {
		id: string;
		label: string;
	}

	const tocItems: TocItem[] = [
		{ id: 'overview', label: 'Overview' },
		{ id: 'services', label: 'Residential Services' },
		{ id: 'markets', label: 'Markets Served' },
		{ id: 'details', label: 'Service Details' },
		{ id: 'benefits', label: 'Benefits' },
		{ id: 'cta', label: 'Work With Dr. Duffy' }
	];
</script>

<svelte:head>
	<title>
		Las Vegas Luxury &amp; Relocation Residential Specialist | Dr. Janet Duffy REALTOR®
	</title>
	<meta
		name="description"
		content="Residential specialist services from Las Vegas Luxury &amp; Relocation REALTOR® Dr. Janet Duffy, guiding homebuyers and sellers through every step of the Las Vegas residential market."
	/>
	<meta
		name="keywords"
		content="Las Vegas Luxury &amp; Relocation REALTOR, residential real estate Las Vegas, home specialist, residential agent Las Vegas"
	/>

	<meta
		property="og:title"
		content="Las Vegas Luxury &amp; Relocation Residential Specialist | Dr. Janet Duffy REALTOR®"
	/>
	<meta
		property="og:description"
		content="End-to-end residential expertise for Las Vegas buyers and sellers, from pricing and marketing to negotiation and closing."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.drjanetduffy.com/services/residential-specialist" />
	<meta property="og:site_name" content="Las Vegas Luxury &amp; Relocation REALTOR" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="twitter:title"
		content="Las Vegas Luxury &amp; Relocation Residential Specialist | Dr. Janet Duffy REALTOR®"
	/>
	<meta
		name="twitter:description"
		content="Comprehensive residential real estate support across starter, family, and luxury markets in the Las Vegas Valley."
	/>

	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "WebPage",
			"name": "Las Vegas Luxury & Relocation Residential Specialist Services",
			"description": "Residential specialist services for Las Vegas buyers and sellers, covering market analysis, negotiation, transaction management, and client education.",
			"url": "https://www.drjanetduffy.com/services/residential-specialist",
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
				Residential Specialist Services in Las Vegas
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Comprehensive residential real estate expertise for Las Vegas homebuyers and sellers. The highest level of residential real estate service, covering all aspects of home buying and selling.
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
				id="services"
				class="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-12 scroll-mt-24"
				aria-labelledby="services-heading"
			>
				<h2
					id="services-heading"
					class="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
				>
					What Comprehensive Residential Real Estate Services Do We Provide?
				</h2>
				
				<p class="text-lg text-gray-700 mb-6 leading-relaxed">
					Residential real estate transactions require expertise across multiple areas, from market analysis to negotiation to transaction management. Our residential specialist services provide comprehensive expertise covering all aspects of home buying and selling through market expertise, transaction management, negotiation excellence, and dedicated client service tailored to each client's unique needs.
				</p>

				<div class="grid md:grid-cols-2 gap-6 mb-8">
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<Home class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Market Expertise</h3>
							<p class="text-gray-600">Deep understanding of Las Vegas residential markets, neighborhoods, and property values.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<TrendingUp class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Transaction Management</h3>
							<p class="text-gray-600">Complete oversight of residential transactions from initial consultation through closing.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<Award class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Negotiation Excellence</h3>
							<p class="text-gray-600">Expert negotiation skills to achieve optimal outcomes for residential clients.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<Users class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Client Service</h3>
							<p class="text-gray-600">Dedicated service tailored to each client's unique needs and goals.</p>
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
					Which Residential Markets Do We Serve Throughout Las Vegas?
				</h2>
				
				<p class="text-lg text-gray-700 mb-8 leading-relaxed">
					Las Vegas offers diverse residential markets including starter home markets in North Las Vegas and Centennial Hills, family home markets in Summerlin and Henderson, and luxury residential markets in The Ridges and Red Rock Country Club. Our residential specialist services cover all market segments throughout the Las Vegas Valley, each with unique characteristics and buyer demographics.
				</p>

				<div class="space-y-6">
					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Starter Home Markets</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Las Vegas offers excellent options for first-time buyers, with affordable homes in growing communities like North Las Vegas, Centennial Hills, and newer developments. These markets provide good value, newer construction, and family-friendly amenities. We help first-time buyers navigate these markets, understand financing options, and find homes that match their budgets and needs.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Starter home markets in Las Vegas typically feature newer construction, modern floor plans, and good value. Properties in these areas often range from $250,000 to $500,000, offering excellent opportunities for first-time buyers. We'll help you understand these markets, identify properties that match your criteria, and navigate the purchase process successfully.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Family Home Markets</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Family-oriented neighborhoods like Summerlin, Henderson, and Green Valley offer excellent schools, community amenities, and family-friendly environments. These markets attract families seeking quality neighborhoods, good schools, and community amenities. We help families find homes in these desirable areas, understanding what makes each neighborhood attractive to families.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Family home markets in Las Vegas typically feature established neighborhoods, good schools, and community amenities. Properties in these areas often range from $400,000 to $1 million, offering options for various family budgets. We'll help you understand these markets, identify neighborhoods that match your family's needs, and find homes that provide the lifestyle you're seeking.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Luxury Residential Markets</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Luxury residential markets in communities like The Ridges, Red Rock Country Club, and Anthem offer premium properties with luxury amenities and features. These markets attract buyers seeking luxury living, premium finishes, and exclusive communities. We help luxury buyers navigate these markets, understand luxury property values, and find homes that match their expectations.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Luxury residential markets in Las Vegas typically feature custom homes, premium finishes, and exclusive communities. Properties in these areas often range from $1 million to over $10 million, offering luxury living at various price points. We'll help you understand these markets, identify properties that match your criteria, and navigate luxury transactions successfully.
						</p>
					</div>
				</div>
			</section>

			<section
				id="details"
				class="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-12 scroll-mt-24"
				aria-labelledby="details-heading"
			>
				<h2
					id="details-heading"
					class="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
				>
					What Residential Specialist Services Are Included?
				</h2>
				<p class="text-lg text-gray-700 mb-8 leading-relaxed">
					Our residential specialist services include comprehensive market analysis evaluating comparable sales and trends, expert negotiation achieving optimal outcomes, complete transaction management coordinating all aspects from contract to closing, and client education empowering clients with knowledge throughout the process. These services ensure successful residential transactions in Las Vegas.
				</p>
				
				<div class="space-y-8">
					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">Comprehensive Market Analysis</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							We provide comprehensive market analysis for residential properties, evaluating comparable sales, market trends, and property values. Our analysis helps buyers and sellers understand market conditions, property values, and pricing strategies. This includes detailed neighborhood analysis, comparable sales evaluation, and market trend assessment.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Our market analysis goes beyond simple price comparisons, evaluating property condition, features, location, and market trends. We'll help you understand how your property compares to others in the market, what factors affect values, and how to position properties for optimal results. Our goal is to provide the market knowledge needed for successful residential transactions.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">Expert Negotiation</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Residential transactions require expert negotiation to achieve optimal outcomes. We negotiate on behalf of clients, working to secure the best possible terms while protecting client interests. This includes price negotiation, terms negotiation, and handling counter-offers and contingencies.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Our negotiation expertise helps clients achieve better outcomes in residential transactions. We'll negotiate price, terms, repairs, and all aspects of transactions to protect your interests and achieve your goals. We understand Las Vegas market conditions and how to negotiate effectively in different market environments.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">Transaction Management</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Residential transactions involve numerous steps, from contract execution through closing. We manage all aspects of transactions, coordinating inspections, appraisals, repairs, and closing activities. This ensures smooth transactions and timely closings.
						</p>
						<p class="text-gray-700 leading-relaxed">
							We'll coordinate all parties involved in your transaction, including buyers, sellers, agents, inspectors, appraisers, lenders, and title companies. We'll keep you informed throughout the process and ensure all deadlines are met. Our goal is to ensure smooth transactions that close on time and with minimal stress.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">Client Education</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							We believe in educating clients throughout the residential real estate process. We help clients understand market conditions, property values, transaction processes, and all aspects of buying and selling. This education empowers clients to make informed decisions.
						</p>
						<p class="text-gray-700 leading-relaxed">
							We'll explain all aspects of your transaction, from market conditions to contract terms to closing processes. We'll answer your questions, provide guidance, and ensure you understand every step. Our goal is to empower you with the knowledge needed for successful residential transactions.
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
					What Are the Benefits of Residential Specialist Services?
				</h2>
				<p class="text-lg text-gray-700 mb-8 leading-relaxed">
					Benefits of residential specialist services include comprehensive market knowledge of Las Vegas residential markets and property values, transaction expertise managing all aspects ensuring smooth processes, expert negotiation skills achieving optimal outcomes and protecting client interests, and dedicated client focus tailoring service to each client's unique needs and goals.
				</p>
				
				<div class="grid md:grid-cols-2 gap-6">
					<div class="flex items-start gap-4">
						<CheckCircle class="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Market Knowledge</h3>
							<p class="text-gray-700">Comprehensive understanding of Las Vegas residential markets, neighborhoods, and property values.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<CheckCircle class="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Transaction Expertise</h3>
							<p class="text-gray-700">Expert management of all aspects of residential transactions, ensuring smooth processes.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<CheckCircle class="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Negotiation Skills</h3>
							<p class="text-gray-700">Expert negotiation to achieve optimal outcomes and protect client interests.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<CheckCircle class="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Client Focus</h3>
							<p class="text-gray-700">Dedicated service tailored to each client's unique needs and goals.</p>
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
					Residential Specialist Services in Las Vegas
				</h2>
				<p class="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
					Let us help you with your residential real estate needs. Contact us today to schedule a consultation.
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

