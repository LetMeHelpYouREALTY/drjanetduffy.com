<script lang="ts">
	import { DollarSign, TrendingUp, BarChart3, Target, CheckCircle, Home } from 'lucide-svelte';

	interface TocItem {
		id: string;
		label: string;
	}

	const tocItems: TocItem[] = [
		{ id: 'overview', label: 'Overview' },
		{ id: 'why-pricing', label: 'Why Pricing Matters' },
		{ id: 'analysis-process', label: 'Analysis Process' },
		{ id: 'market-strategies', label: 'Market Strategies' },
		{ id: 'benefits', label: 'Benefits' },
		{ id: 'cta', label: 'Get Pricing Help' }
	];
</script>

<svelte:head>
	<title>
		Las Vegas Luxury &amp; Relocation Pricing Strategy Services | Dr. Janet Duffy REALTOR®
	</title>
	<meta
		name="description"
		content="Las Vegas Luxury &amp; Relocation REALTOR® Dr. Janet Duffy provides data-driven pricing strategy for homes in Summerlin, Henderson, Green Valley, North Las Vegas, and the greater Las Vegas Valley."
	/>
	<meta
		name="keywords"
		content="Las Vegas Luxury &amp; Relocation REALTOR, home pricing Las Vegas, property valuation, pricing strategy, accurate home pricing, listing strategy"
	/>

	<meta
		property="og:title"
		content="Las Vegas Luxury &amp; Relocation Pricing Strategy Services | Dr. Janet Duffy REALTOR®"
	/>
	<meta
		property="og:description"
		content="Accurate, market-backed pricing strategies to help Las Vegas sellers list with confidence and maximize value."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.drjanetduffy.com/services/pricing-strategy" />
	<meta property="og:site_name" content="Las Vegas Luxury &amp; Relocation REALTOR" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="twitter:title"
		content="Las Vegas Luxury &amp; Relocation Pricing Strategy Services | Dr. Janet Duffy REALTOR®"
	/>
	<meta
		name="twitter:description"
		content="Comprehensive pricing analysis for Las Vegas homes, aligning list price with current market conditions."
	/>

	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "WebPage",
			"name": "Las Vegas Luxury & Relocation Pricing Strategy Services",
			"description": "Pricing strategy services from Las Vegas Luxury & Relocation REALTOR Dr. Janet Duffy, focused on accurate, data-driven home valuations across the Las Vegas Valley.",
			"url": "https://www.drjanetduffy.com/services/pricing-strategy",
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
				Pricing Strategy Services in Las Vegas
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Accurate property pricing based on comprehensive Las Vegas market analysis. Price properties correctly, strengthen client trust, and negotiate with confidence in every transaction.
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
				id="why-pricing"
				class="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-12 scroll-mt-24"
				aria-labelledby="why-pricing-heading"
			>
				<h2
					id="why-pricing-heading"
					class="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
				>
					Why Is Accurate Pricing Critical in Las Vegas Real Estate?
				</h2>
				
				<p class="text-lg text-gray-700 mb-6 leading-relaxed">
					Pricing is the single most important factor in successful real estate transactions. In Las Vegas's dynamic market, accurate pricing requires deep market knowledge, comprehensive analysis, and understanding of local trends. Our pricing strategy services help you price properties correctly through market analysis, neighborhood expertise, trend analysis, and value optimization.
				</p>

				<div class="grid md:grid-cols-2 gap-6 mb-8">
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<Target class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Market Analysis</h3>
							<p class="text-gray-600">Comprehensive analysis of comparable sales, active listings, and market trends to determine accurate property values.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<BarChart3 class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Neighborhood Expertise</h3>
							<p class="text-gray-600">Deep knowledge of Las Vegas neighborhoods and how location affects property values.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<TrendingUp class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Trend Analysis</h3>
							<p class="text-gray-600">Understanding market trends and how they impact property values in different Las Vegas areas.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<DollarSign class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Value Optimization</h3>
							<p class="text-gray-600">Strategies to maximize property value through pricing and positioning in the market.</p>
						</div>
					</div>
				</div>
			</section>

			<section
				id="analysis-process"
				class="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-12 scroll-mt-24"
				aria-labelledby="analysis-process-heading"
			>
				<h2
					id="analysis-process-heading"
					class="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
				>
					What Is Our Comprehensive Pricing Analysis Process?
				</h2>
				<p class="text-lg text-gray-700 mb-8 leading-relaxed">
					Our comprehensive pricing analysis process includes comparable sales analysis, active listing evaluation, market trend assessment, and property condition analysis. This multi-faceted approach ensures accurate pricing that reflects current market conditions and maximizes your property's value potential.
				</p>
				
				<div class="space-y-8">
					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">Comparable Sales Analysis</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							We analyze recent sales of similar properties in your neighborhood, considering factors like size, condition, features, and location. In Las Vegas, we understand how different neighborhoods, even within the same area, can have significantly different values. We'll identify the most relevant comparable sales and adjust for differences to determine your property's value.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Our comparable sales analysis goes beyond simple price per square foot. We consider property condition, upgrades, lot size, views, and other factors that affect value. In Las Vegas, factors like mountain views, golf course access, and proximity to amenities can significantly impact value. We'll help you understand how these factors apply to your specific property and neighborhood.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">Active Listing Evaluation</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Understanding the competition is crucial for accurate pricing. We evaluate active listings similar to your property, assessing their pricing, condition, and marketing strategies. This helps us understand where your property fits in the current market and how to position it competitively.
						</p>
						<p class="text-gray-700 leading-relaxed">
							We'll analyze competing properties to understand what buyers are seeing in your price range. This includes evaluating property condition, features, and marketing presentation. We'll help you understand how your property compares and what pricing strategy will make it competitive while maximizing value. In Las Vegas's competitive market, understanding competition is essential for successful pricing.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">Market Trend Analysis</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Las Vegas real estate markets can change quickly, and understanding current trends is essential for accurate pricing. We analyze market trends including inventory levels, days on market, price trends, and buyer activity. This helps us understand whether the market is favoring buyers or sellers and how that affects pricing strategies.
						</p>
						<p class="text-gray-700 leading-relaxed">
							We'll help you understand current market conditions and how they affect your pricing strategy. In a seller's market, properties might command premium prices, while buyer's markets require more competitive pricing. We'll also discuss how market conditions might change during your selling timeline and how to adjust your strategy accordingly.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">Property-Specific Factors</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Every property has unique characteristics that affect its value. We evaluate your property's specific features, condition, location, and other factors to determine how they impact value. This includes everything from upgrades and renovations to lot characteristics and neighborhood amenities.
						</p>
						<p class="text-gray-700 leading-relaxed">
							In Las Vegas, factors like pool, views, energy efficiency, and modern upgrades can significantly affect value. We'll help you understand which features add the most value in your specific market and how to position these features in pricing and marketing. We'll also identify any factors that might negatively impact value and discuss strategies to address them.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">Neighborhood Value Analysis</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Location significantly impacts property value, and Las Vegas neighborhoods vary widely in desirability and pricing. We analyze your specific neighborhood's characteristics, including schools, amenities, crime rates, and future development plans. This helps us understand how location affects your property's value.
						</p>
						<p class="text-gray-700 leading-relaxed">
							We'll help you understand your neighborhood's position in the Las Vegas market and how it compares to similar areas. This includes analyzing neighborhood trends, understanding what makes your area desirable, and identifying any factors that might affect future values. In Las Vegas, neighborhood desirability can vary significantly even within the same general area, and we'll help you understand where your property fits.
						</p>
					</div>
				</div>
			</section>

			<section
				id="market-strategies"
				class="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-12 scroll-mt-24"
				aria-labelledby="market-strategies-heading"
			>
				<h2
					id="market-strategies-heading"
					class="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
				>
					Pricing Strategies for Different Las Vegas Markets
				</h2>
				
				<div class="space-y-6">
					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Luxury Market Pricing</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Luxury properties in areas like The Ridges, Red Rock Country Club, and Anthem require specialized pricing strategies. These markets have fewer comparable sales, and pricing must consider unique features, exclusivity, and buyer demographics. We understand how to price luxury properties to attract qualified buyers while maximizing value.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Luxury markets often require different pricing approaches, including consideration of unique features, views, and exclusivity. We'll help you understand how luxury properties are valued in Las Vegas and develop pricing strategies that attract the right buyer audience. Luxury buyers often have different priorities and timelines, and our pricing strategies reflect this understanding.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Family Market Pricing</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Family-oriented neighborhoods like Summerlin, Henderson, and Green Valley have strong buyer demand and consistent pricing patterns. We understand what families value in these markets and how to price properties to appeal to family buyers while maximizing value.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Family markets prioritize factors like schools, safety, and community amenities. We'll help you understand how these factors affect pricing in your specific neighborhood and position your property to appeal to family buyers. Properties in family-oriented neighborhoods often have consistent demand, and we'll help you price competitively while maximizing value.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Value Market Pricing</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Areas like North Las Vegas and newer communities offer excellent value and appeal to first-time buyers and value-conscious purchasers. Pricing in these markets requires understanding value propositions and positioning properties competitively.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Value markets prioritize affordability and features. We'll help you understand how to price properties in these markets to attract value-conscious buyers while ensuring fair market value. Properties in value markets often appeal to first-time buyers and investors, and we'll help you position your property to attract these buyer types.
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
					Benefits of Professional Pricing Strategy
				</h2>
				
				<div class="grid md:grid-cols-2 gap-6">
					<div class="flex items-start gap-4">
						<CheckCircle class="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Accurate Valuations</h3>
							<p class="text-gray-700">Comprehensive analysis ensures accurate property valuations based on current market conditions.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<CheckCircle class="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Faster Sales</h3>
							<p class="text-gray-700">Correctly priced properties sell faster, reducing time on market and associated costs.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<CheckCircle class="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Maximum Value</h3>
							<p class="text-gray-700">Strategic pricing helps maximize property value while remaining competitive in the market.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<CheckCircle class="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Negotiation Confidence</h3>
							<p class="text-gray-700">Accurate pricing provides confidence in negotiations, whether buying or selling.</p>
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
					Get Accurate Property Pricing in Las Vegas
				</h2>
				<p class="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
					Let us help you price your property accurately and competitively. Contact us today to schedule a comprehensive pricing analysis.
				</p>
				<div class="flex flex-col sm:flex-row gap-4 justify-center">
					<a href="/contact" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">
						Schedule Consultation
					</a>
					<a
						href="/home-value"
						class="btn-primary bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600"
					>
						Get Home Value Estimate
					</a>
				</div>
			</section>
		</div>
	</div>
</section>

