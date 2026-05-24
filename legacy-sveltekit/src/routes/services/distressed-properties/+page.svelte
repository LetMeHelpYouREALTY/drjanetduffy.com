<script lang="ts">
	import { Home, AlertTriangle, DollarSign, CheckCircle, FileText, TrendingUp } from 'lucide-svelte';

	interface TocItem {
		id: string;
		label: string;
	}

	const tocItems: TocItem[] = [
		{ id: 'overview', label: 'Overview' },
		{ id: 'about', label: 'About Distressed Properties' },
		{ id: 'short-sales', label: 'Short Sale Services' },
		{ id: 'foreclosures', label: 'Foreclosure & REO' },
		{ id: 'markets', label: 'Markets & Opportunities' },
		{ id: 'considerations', label: 'Key Considerations' },
		{ id: 'cta', label: 'Discuss Your Situation' }
	];
</script>

<svelte:head>
	<title>
		Las Vegas Luxury &amp; Relocation Distressed Property Solutions | Dr. Janet Duffy REALTOR®
	</title>
	<meta
		name="description"
		content="Distressed property guidance from Las Vegas Luxury &amp; Relocation REALTOR® Dr. Janet Duffy, specializing in short sales, foreclosures, and REO opportunities for buyers, sellers, and investors."
	/>
	<meta
		name="keywords"
		content="Las Vegas Luxury &amp; Relocation REALTOR, short sale Las Vegas, foreclosure Las Vegas, distressed properties, REO homes"
	/>

	<meta
		property="og:title"
		content="Las Vegas Luxury &amp; Relocation Distressed Property Solutions | Dr. Janet Duffy REALTOR®"
	/>
	<meta
		property="og:description"
		content="Navigate short sales and foreclosures in Las Vegas with expert strategy, lender negotiation, and risk management."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.drjanetduffy.com/services/distressed-properties" />
	<meta property="og:site_name" content="Las Vegas Luxury &amp; Relocation REALTOR" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="twitter:title"
		content="Las Vegas Luxury &amp; Relocation Distressed Property Solutions | Dr. Janet Duffy REALTOR®"
	/>
	<meta
		name="twitter:description"
		content="Specialized support for short sales, foreclosures, and distressed investment opportunities in the Las Vegas Valley."
	/>

	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "WebPage",
			"name": "Las Vegas Luxury & Relocation Distressed Property Solutions",
			"description": "Distressed property services for short sales, foreclosures, and REO purchases in Las Vegas, helping owners and investors manage risk and opportunity.",
			"url": "https://www.drjanetduffy.com/services/distressed-properties",
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
				Distressed Property Solutions in Las Vegas
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Expert guidance for short sales and foreclosure transactions. Turn distressed properties into opportunities, guiding buyers and sellers through complex sales in Las Vegas and surrounding areas.
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
				id="about"
				class="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-12 scroll-mt-24"
				aria-labelledby="about-heading"
			>
				<h2
					id="about-heading"
					class="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
				>
					What Should You Know About Distressed Properties in Las Vegas?
				</h2>
				
				<p class="text-lg text-gray-700 mb-6 leading-relaxed">
					Distressed properties, including short sales and foreclosures, present unique opportunities and challenges in the Las Vegas market. These transactions require specialized expertise, understanding of lender processes, and knowledge of complex regulations. Our services help both buyers and sellers navigate these challenging situations through short sale expertise, foreclosure guidance, investment opportunity identification, and comprehensive risk management.
				</p>

				<div class="grid md:grid-cols-2 gap-6 mb-8">
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<FileText class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Short Sale Expertise</h3>
							<p class="text-gray-600">Comprehensive guidance for sellers navigating short sales, including lender negotiations and documentation.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<Home class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Foreclosure Guidance</h3>
							<p class="text-gray-600">Expert assistance for buyers and sellers dealing with foreclosure situations and REO properties.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<DollarSign class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Investment Opportunities</h3>
							<p class="text-gray-600">Identifying and evaluating distressed property investment opportunities in Las Vegas.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<AlertTriangle class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Risk Management</h3>
							<p class="text-gray-600">Understanding and managing risks associated with distressed property transactions.</p>
						</div>
					</div>
				</div>
			</section>

			<section
				id="short-sales"
				class="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-12 scroll-mt-24"
				aria-labelledby="short-sales-heading"
			>
				<h2
					id="short-sales-heading"
					class="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
				>
					What Short Sale Services Do We Provide for Las Vegas Sellers?
				</h2>
				
				<p class="text-lg text-gray-700 mb-8 leading-relaxed">
					Short sales occur when a property's sale price is less than the outstanding mortgage balance. These transactions require lender approval and involve complex negotiations and documentation. Our short sale services help sellers navigate this challenging process through eligibility assessment, lender negotiation, documentation management, and buyer coordination to minimize financial impact.
				</p>

				<div class="space-y-8">
					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">Short Sale Eligibility Assessment</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Not all properties qualify for short sales, and understanding eligibility is the first step. We help you assess your situation, understand lender requirements, and determine whether a short sale is the right option. This includes evaluating your financial hardship, property value, and mortgage situation.
						</p>
						<p class="text-gray-700 leading-relaxed">
							We'll help you understand lender requirements for short sales, which typically include demonstrating financial hardship, showing the property's value is less than the mortgage balance, and providing comprehensive financial documentation. We'll assess your specific situation and help you understand whether you qualify and what the process will involve.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">Lender Negotiation</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Short sales require extensive negotiation with lenders, who must approve the sale price and terms. We handle all lender communications, submit required documentation, and negotiate on your behalf to secure approval. This process can be lengthy and complex, requiring persistence and expertise.
						</p>
						<p class="text-gray-700 leading-relaxed">
							We'll prepare and submit all required documentation, including financial statements, hardship letters, property valuations, and purchase offers. We'll maintain communication with lenders throughout the process, respond to requests for additional information, and negotiate terms that work for all parties. Our experience with Las Vegas lenders helps streamline this process.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">Documentation Management</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Short sales require extensive documentation, and proper preparation is essential for approval. We help you gather and organize all required documents, ensure accuracy, and submit complete packages to lenders. Missing or incorrect documentation can delay or derail short sale approvals.
						</p>
						<p class="text-gray-700 leading-relaxed">
							We'll help you prepare all required documentation, including tax returns, bank statements, pay stubs, hardship letters, and property information. We'll ensure documentation is complete and accurate before submission, and we'll help you respond to any lender requests for additional information. Our goal is to make the documentation process as smooth as possible.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">Buyer Coordination</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Short sales require finding qualified buyers willing to wait for lender approval, which can take months. We help identify and work with buyers who understand the short sale process and are committed to seeing it through. We'll manage buyer expectations and coordinate throughout the approval process.
						</p>
						<p class="text-gray-700 leading-relaxed">
							We'll help you find buyers who understand short sales and are prepared for the extended timeline. We'll manage buyer communications, coordinate showings, and ensure buyers remain committed throughout the approval process. Our experience helps identify serious buyers who won't abandon the transaction during the lengthy approval process.
						</p>
					</div>
				</div>
			</section>

			<section
				id="foreclosures"
				class="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-12 scroll-mt-24"
				aria-labelledby="foreclosures-heading"
			>
				<h2
					id="foreclosures-heading"
					class="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
				>
					What Foreclosure and REO Property Services Do We Provide?
				</h2>
				<p class="text-lg text-gray-700 mb-8 leading-relaxed">
					Our foreclosure and REO property services include REO property purchases helping buyers identify and purchase bank-owned homes, foreclosure prevention guidance for homeowners facing foreclosure, and investment property evaluation for distressed property opportunities. These services help both buyers and sellers navigate foreclosure situations successfully.
				</p>
				
				<div class="space-y-8">
					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">REO Property Purchases</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							REO (Real Estate Owned) properties are bank-owned homes that have completed the foreclosure process. These properties can offer excellent value but require specialized knowledge to purchase successfully. We help buyers identify REO opportunities, understand the purchase process, and navigate bank requirements.
						</p>
						<p class="text-gray-700 leading-relaxed">
							REO properties in Las Vegas can be found throughout the valley, from starter homes in North Las Vegas to luxury properties in various neighborhoods. We'll help you identify REO opportunities that match your criteria, understand bank requirements and processes, and successfully complete purchases. REO properties often require cash or strong financing, and we'll help you understand and meet these requirements.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">Foreclosure Prevention</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							For homeowners facing foreclosure, we provide guidance on options including loan modifications, short sales, and other alternatives. We help you understand your options, work with lenders, and take action to prevent foreclosure when possible.
						</p>
						<p class="text-gray-700 leading-relaxed">
							We'll help you understand all available options, including loan modifications, repayment plans, and short sales. We'll work with you to assess your situation, communicate with lenders, and pursue the best option for your circumstances. Our goal is to help you avoid foreclosure when possible and minimize financial impact when it's not.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">Investment Property Evaluation</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Distressed properties can offer excellent investment opportunities, but they require careful evaluation. We help investors assess distressed property opportunities, understand renovation needs, and evaluate potential returns. This includes property inspections, cost estimates, and market analysis.
						</p>
						<p class="text-gray-700 leading-relaxed">
							We'll help you evaluate distressed properties as investments, including assessing condition, estimating renovation costs, and analyzing potential returns. We'll help you understand market values, rental potential, and resale opportunities. Our goal is to help you identify profitable investment opportunities while understanding and managing risks.
						</p>
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
					Which Distressed Property Markets Exist in Las Vegas?
				</h2>
				<p class="text-lg text-gray-700 mb-8 leading-relaxed">
					Distressed property markets in Las Vegas include North Las Vegas opportunities with higher rates of distressed properties, and established neighborhood opportunities in Henderson and parts of Las Vegas. Each market offers unique opportunities for buyers and investors willing to invest in properties that need work.
				</p>
				
				<div class="space-y-6">
					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">North Las Vegas Opportunities</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							North Las Vegas has historically had higher rates of distressed properties, creating opportunities for both buyers and investors. The area offers good value and growth potential, making it attractive for those willing to invest in properties that need work.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Distressed properties in North Las Vegas often include newer construction homes that may need cosmetic updates or minor repairs. The area's growth and development make these properties attractive investments, and we'll help you identify opportunities that match your goals and budget.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Established Neighborhood Opportunities</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Even established neighborhoods like Henderson and parts of Las Vegas can have distressed property opportunities. These properties often offer excellent locations with homes that need updates or repairs, creating value opportunities for buyers and investors.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Distressed properties in established neighborhoods can offer excellent value, combining good locations with properties that need work. We'll help you identify these opportunities, assess renovation needs, and evaluate potential returns. These properties can be particularly attractive for buyers looking for good locations at below-market prices.
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
					What Are Key Considerations for Distressed Properties?
				</h2>
				<p class="text-lg text-gray-700 mb-8 leading-relaxed">
					Key considerations for distressed properties include extended timelines with short sales taking months for lender approval, property condition as properties are often sold as-is, and financing considerations with specific lender requirements. Understanding these factors helps buyers and sellers navigate distressed property transactions successfully.
				</p>
				
				<div class="space-y-6">
					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Extended Timelines</h3>
						<p class="text-gray-700 leading-relaxed">
							Distressed property transactions typically take longer than standard sales. Short sales can take months for lender approval, and REO purchases may have extended closing timelines. We help you understand and prepare for these extended timelines.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Property Condition</h3>
						<p class="text-gray-700 leading-relaxed">
							Distressed properties are often sold as-is, meaning buyers accept properties in their current condition. We help you understand property condition, assess repair needs, and factor these into purchase decisions and pricing.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Financing Considerations</h3>
						<p class="text-gray-700 leading-relaxed">
							Distressed properties may have financing challenges, and some lenders have specific requirements for these transactions. We help you understand financing options and requirements for distressed property purchases.
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
					Expert Distressed Property Services in Las Vegas
				</h2>
				<p class="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
					Let us help you navigate distressed property transactions. Contact us today to schedule a consultation and discuss your situation.
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
	</div>
</section>

