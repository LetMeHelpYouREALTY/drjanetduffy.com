<script lang="ts">
	import { Home, MapPin, CheckCircle, Users, TrendingUp, Phone } from 'lucide-svelte';

	interface TocItem {
		id: string;
		label: string;
	}

	const tocItems: TocItem[] = [
		{ id: 'overview', label: 'Overview' },
		{ id: 'neighborhoods', label: 'Neighborhoods We Serve' },
		{ id: 'process', label: 'Buying Process' },
		{ id: 'benefits', label: 'Benefits of Representation' },
		{ id: 'faq', label: 'Buyer FAQ' },
		{ id: 'cta', label: 'Work With Dr. Duffy' }
	];
</script>

<svelte:head>
	<title>
		Las Vegas Luxury &amp; Relocation Buyer Representation Services | Dr. Janet Duffy REALTOR®
	</title>
	<meta
		name="description"
		content="Work with Las Vegas Luxury &amp; Relocation REALTOR® Dr. Janet Duffy for concierge-level buyer representation across Summerlin, Henderson, Skye Canyon, Centennial Hills, and the greater Las Vegas Valley."
	/>
	<meta
		name="keywords"
		content="Las Vegas Luxury &amp; Relocation REALTOR, buyer representation Las Vegas, home buying services, Las Vegas real estate agent, buyer's agent, first time homebuyer Las Vegas"
	/>

	<meta
		property="og:title"
		content="Las Vegas Luxury &amp; Relocation Buyer Representation Services | Dr. Janet Duffy REALTOR®"
	/>
	<meta
		property="og:description"
		content="Concierge-level buyer representation for Las Vegas luxury, relocation, and first-time home purchases with Dr. Janet Duffy."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.drjanetduffy.com/services/buyer-representation" />
	<meta property="og:site_name" content="Las Vegas Luxury &amp; Relocation REALTOR" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="twitter:title"
		content="Las Vegas Luxury &amp; Relocation Buyer Representation Services | Dr. Janet Duffy REALTOR®"
	/>
	<meta
		name="twitter:description"
		content="Guided, data-driven buyer representation for luxury, relocation, and first-time buyers across the Las Vegas Valley."
	/>

	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "WebPage",
			"name": "Las Vegas Luxury & Relocation Buyer Representation Services",
			"description": "Concierge-level buyer representation services from Las Vegas Luxury & Relocation REALTOR Dr. Janet Duffy, serving Summerlin, Henderson, Skye Canyon, Centennial Hills, and the greater Las Vegas Valley.",
			"url": "https://www.drjanetduffy.com/services/buyer-representation",
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
		<!-- Hero Section -->
		<div class="text-center mb-8 sm:mb-10" id="overview">
			<h1 class="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900">
				Expert Buyer Representation Services in Las Vegas
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Comprehensive guidance for homebuyers throughout the entire purchasing process. From first-time buyers to luxury property investors, we provide expert representation tailored to the Las Vegas market.
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

		<!-- Main Content -->
		<div class="max-w-4xl mx-auto">
			<!-- How We Help Section -->
			<section
				id="how-we-help"
				class="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-12 scroll-mt-24"
				aria-labelledby="how-we-help-heading"
			>
				<h2
					id="how-we-help-heading"
					class="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
				>
					How Do We Help Las Vegas Homebuyers Find Their Perfect Home?
				</h2>
				
				<p class="text-lg text-gray-700 mb-6 leading-relaxed">
					Navigating the Las Vegas real estate market requires expertise, local knowledge, and dedicated representation. Our buyer representation services protect your interests, save you time and money, and ensure you find the perfect home in the right neighborhood through comprehensive property search, neighborhood expertise, market analysis, and transaction management. My concierge service includes coordinating pool inspections in Summerlin, managing HOA documents across multiple master-planned communities, and providing personalized neighborhood tours showing parks, schools, shopping, and hidden gems locals love.
				</p>

				<div class="grid md:grid-cols-2 gap-6 mb-8">
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<Home class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Property Search & Selection</h3>
							<p class="text-gray-600">We leverage our extensive knowledge of Las Vegas neighborhoods to help you find properties that match your lifestyle, budget, and investment goals.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<MapPin class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Neighborhood Expertise</h3>
							<p class="text-gray-600">From master-planned communities like Summerlin, Skye Canyon, and Centennial Hills to luxury enclaves like The Ridges, we provide insights into every Las Vegas neighborhood. I provide detailed tours of each village, showing you insider spots like best walking trails, hidden parks, and optimal streets for views.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<TrendingUp class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Market Analysis</h3>
							<p class="text-gray-600">We analyze comparable sales, market trends, and property values to help you make informed decisions in the Las Vegas market.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<CheckCircle class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Transaction Management</h3>
							<p class="text-gray-600">We handle all aspects of the transaction, from offer preparation to closing, ensuring a smooth process every step of the way.</p>
						</div>
					</div>
				</div>
			</section>

			<!-- Neighborhoods We Serve -->
			<section
				id="neighborhoods"
				class="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-12 scroll-mt-24"
				aria-labelledby="neighborhoods-heading"
			>
				<h2
					id="neighborhoods-heading"
					class="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
				>
					Which Las Vegas Neighborhoods Do We Serve?
				</h2>
				
				<p class="text-lg text-gray-700 mb-8 leading-relaxed">
					Las Vegas offers diverse neighborhoods, each with unique character and appeal. Our buyer representation services extend across the entire Las Vegas Valley, from master-planned communities like Summerlin to established neighborhoods like Green Valley and luxury enclaves like The Ridges.
				</p>

				<div class="space-y-6">
					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">West Summerlin & Summerlin</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Summerlin stands as one of Las Vegas's premier master-planned communities, offering exceptional amenities, top-rated schools, and beautiful parks. West Summerlin, in particular, features newer construction, modern floor plans, and proximity to Red Rock Canyon. We help buyers navigate this competitive market, from family-friendly neighborhoods with community pools to luxury estates with mountain views.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Properties in Summerlin range from starter homes in the $300,000s to luxury estates exceeding $2 million. The area's strong HOA management, extensive trail systems, and proximity to shopping and dining make it ideal for families and professionals alike. We understand the nuances of each Summerlin village and can guide you to the perfect community within this expansive development.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">The Ridges & Red Rock Country Club</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							For buyers seeking luxury living with breathtaking views, The Ridges and Red Rock Country Club represent the pinnacle of Las Vegas real estate. These gated communities feature custom estates, world-class golf courses, and unparalleled privacy. We specialize in representing buyers in these exclusive neighborhoods, where properties often feature expansive lots, premium finishes, and stunning Red Rock Canyon vistas.
						</p>
						<p class="text-gray-700 leading-relaxed">
							The Ridges offers some of Las Vegas's most prestigious addresses, with homes ranging from $1.5 million to over $10 million. The community's strict architectural guidelines ensure quality and consistency, while the private golf course and clubhouse provide resort-style amenities. We help luxury buyers navigate these high-stakes transactions with discretion and expertise.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Henderson & Green Valley</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Henderson offers a family-friendly alternative to Las Vegas, with excellent schools, lower crime rates, and a strong sense of community. Green Valley, one of Henderson's most established neighborhoods, features mature landscaping, well-maintained homes, and convenient access to shopping and dining. We help buyers find everything from starter homes to luxury properties in this desirable area.
						</p>
						<p class="text-gray-700 leading-relaxed">
							The Green Valley area includes master-planned communities like Green Valley Ranch, which offers resort-style amenities including pools, parks, and walking trails. Properties range from condos and townhomes in the $200,000s to luxury homes exceeding $1 million. We understand the unique characteristics of each Henderson neighborhood and can match buyers with communities that align with their lifestyle and budget.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Anthem & Seven Hills</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Anthem Country Club and Seven Hills represent premier gated communities in Henderson, offering luxury living with exceptional amenities. These communities feature golf courses, clubhouses, and meticulously maintained common areas. We help buyers navigate these exclusive neighborhoods, where properties often include premium upgrades and resort-style features.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Anthem offers a range of housing options from luxury single-family homes to custom estates, with prices typically starting around $600,000 and reaching into the millions. The community's championship golf course, multiple pools, and extensive amenities create a resort-like atmosphere. Seven Hills provides similar luxury amenities with homes featuring mountain and city views, making both communities highly desirable for buyers seeking upscale living.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">North Las Vegas & Centennial Hills</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							North Las Vegas and Centennial Hills offer excellent value for buyers seeking newer construction and more affordable options. These areas feature master-planned communities with modern amenities, good schools, and convenient access to employment centers. We help buyers find quality homes in these growing neighborhoods.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Centennial Hills, in particular, has seen significant development in recent years, with new construction homes offering modern floor plans and energy-efficient features. Properties in this area typically range from $300,000 to $800,000, providing excellent value for first-time buyers and growing families. The area's proximity to the Las Vegas Motor Speedway and growing commercial development makes it an attractive option for many buyers.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Boulder City & Surrounding Areas</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							For buyers seeking a quieter lifestyle away from the Las Vegas Strip, Boulder City offers small-town charm with easy access to Lake Mead and outdoor recreation. This historic community features well-maintained homes, tree-lined streets, and a strong sense of community. We help buyers explore this unique market, where properties often include larger lots and unique character.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Boulder City's real estate market includes everything from historic homes to newer construction, with prices typically ranging from $300,000 to over $1 million. The community's proximity to Lake Mead, Hoover Dam, and outdoor recreation makes it ideal for buyers who value nature and outdoor activities. We understand the unique aspects of Boulder City's market and can help buyers find properties that match their lifestyle preferences.
						</p>
					</div>
				</div>
			</section>

			<!-- Our Process -->
			<section
				id="process"
				class="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-12 scroll-mt-24"
				aria-labelledby="process-heading"
			>
				<h2
					id="process-heading"
					class="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
				>
					What Is Our Comprehensive Buyer Representation Process?
				</h2>
				
				<p class="text-lg text-gray-700 mb-8 leading-relaxed">
					Our buyer representation process protects your interests and ensures a successful home purchase. We work with you from initial consultation through closing and beyond, providing expert guidance at every stage including needs assessment, property search, market analysis, offer preparation, due diligence, and closing coordination.
				</p>

				<div class="space-y-8">
					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">Initial Consultation & Needs Assessment</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							We begin with a comprehensive consultation to understand your needs, preferences, budget, and timeline. This includes discussing your lifestyle requirements, desired neighborhoods, must-have features, and financial considerations. We'll help you get pre-approved for financing if needed and establish realistic expectations for the Las Vegas market.
						</p>
						<p class="text-gray-700 leading-relaxed">
							During this phase, we also educate you about the Las Vegas real estate market, including current trends, pricing patterns, and neighborhood characteristics. We'll discuss the different types of properties available, from single-family homes to condos and townhomes, and help you determine which best fits your needs and budget.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">Property Search & Market Analysis</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							We leverage our extensive knowledge of the Las Vegas market and access to comprehensive listing databases to identify properties that match your criteria. We don't just send you listings—we analyze each property's value, condition, location, and potential issues before scheduling showings.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Our market analysis includes reviewing comparable sales, assessing property condition, evaluating neighborhood trends, and identifying potential concerns. We'll help you understand the true value of each property and how it compares to similar homes in the area. This analysis is crucial in the competitive Las Vegas market, where properties can receive multiple offers.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">Property Showings & Evaluation</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							We accompany you to property showings, providing expert insights about each home's condition, features, and value. We'll point out potential issues, highlight positive features, and help you evaluate how each property meets your needs. Our goal is to help you make informed decisions without feeling rushed or pressured.
						</p>
						<p class="text-gray-700 leading-relaxed">
							During showings, we assess everything from structural integrity to neighborhood characteristics. We'll help you evaluate the property's condition, potential maintenance needs, and how it compares to other homes you've seen. We also provide insights about the neighborhood, including schools, amenities, traffic patterns, and future development plans that might affect property values.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">Offer Preparation & Negotiation</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							When you find the right property, we prepare a comprehensive offer strategy based on market analysis, property condition, and your specific situation. We handle all negotiations on your behalf, working to secure the best possible terms while protecting your interests.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Our negotiation strategy considers multiple factors, including comparable sales, property condition, market conditions, and seller motivation. We'll help you structure your offer to be competitive while including appropriate contingencies to protect your interests. In Las Vegas's competitive market, we understand how to craft offers that stand out while maintaining your financial protection.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">Due Diligence & Inspections</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Once your offer is accepted, we coordinate all due diligence activities, including home inspections, appraisals, and title reviews. We help you understand inspection reports, negotiate repairs or credits when needed, and ensure all contingencies are properly addressed.
						</p>
						<p class="text-gray-700 leading-relaxed">
							We work with trusted local inspectors, appraisers, and other professionals to ensure thorough due diligence. In Las Vegas, we're particularly attentive to issues like foundation settling, HVAC systems (critical in our desert climate), and water damage. We'll help you understand which issues are typical for the area and which require attention, and we'll negotiate on your behalf to address any significant concerns.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">Closing & Beyond</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							We manage the closing process, ensuring all paperwork is complete and accurate. We'll be present at closing to answer questions and ensure everything proceeds smoothly. After closing, we remain available to help with any questions or concerns about your new home.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Our relationship with clients extends beyond closing. We provide recommendations for local service providers, help you understand your new neighborhood, and remain available for any real estate questions you might have in the future. We're committed to building long-term relationships with our clients, and many of our past buyers become repeat clients or refer friends and family.
						</p>
					</div>
				</div>
			</section>

			<!-- Benefits Section -->
			<section
				id="benefits"
				class="bg-gradient-to-br from-primary-50 to-white rounded-2xl shadow-lg p-8 md:p-10 mb-12 scroll-mt-24"
				aria-labelledby="benefits-heading"
			>
				<h2
					id="benefits-heading"
					class="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
				>
					What Are the Benefits of Professional Buyer Representation?
				</h2>
				<p class="text-lg text-gray-700 mb-8 leading-relaxed">
					Professional buyer representation provides expert market knowledge, time savings, cost savings, protection of your interests, access to off-market properties, and stress reduction. These benefits ensure you make informed decisions and get the best deal on your Las Vegas home purchase.
				</p>
				
				<div class="grid md:grid-cols-2 gap-6">
					<div class="flex items-start gap-4">
						<CheckCircle class="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Expert Market Knowledge</h3>
							<p class="text-gray-700">Our deep understanding of Las Vegas neighborhoods, market trends, and property values helps you make informed decisions.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<CheckCircle class="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Time Savings</h3>
							<p class="text-gray-700">We handle property searches, scheduling, negotiations, and paperwork, saving you countless hours.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<CheckCircle class="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Cost Savings</h3>
							<p class="text-gray-700">Our negotiation expertise often results in better prices and terms, potentially saving you thousands of dollars.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<CheckCircle class="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Protection of Your Interests</h3>
							<p class="text-gray-700">We work exclusively for you, ensuring your interests are protected throughout the entire transaction.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<CheckCircle class="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Access to Off-Market Properties</h3>
							<p class="text-gray-700">Our network provides access to properties not yet listed publicly, giving you additional options.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<CheckCircle class="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Stress Reduction</h3>
							<p class="text-gray-700">We handle the complexities of real estate transactions, allowing you to focus on finding your perfect home.</p>
						</div>
					</div>
				</div>
			</section>

			<!-- FAQ Section -->
			<section
				id="faq"
				class="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-12 scroll-mt-24"
				aria-labelledby="faq-heading"
			>
				<h2
					id="faq-heading"
					class="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
				>
					Frequently Asked Questions About Buyer Representation
				</h2>
				<div class="space-y-6">
					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Do I Pay for Buyer Representation Services?</h3>
						<p class="text-gray-700 leading-relaxed">
							No, buyer representation services are typically free to buyers. The seller pays the commission, which is split between the buyer's agent and seller's agent. This means you receive expert representation at no cost while the seller covers the fees.
						</p>
					</div>
					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">What's the Difference Between a Buyer's Agent and a Seller's Agent?</h3>
						<p class="text-gray-700 leading-relaxed">
							A buyer's agent represents your interests exclusively, providing market analysis, negotiation expertise, and guidance throughout the purchase. A seller's agent represents the seller's interests. Working with a buyer's agent ensures you have someone advocating for your best interests throughout the transaction.
						</p>
					</div>
					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">When Should I Start Working with a Buyer's Agent?</h3>
						<p class="text-gray-700 leading-relaxed">
							Start working with a buyer's agent as soon as you're considering buying a home. Early engagement allows us to help you get pre-approved, understand the market, and identify properties before they're widely advertised. The earlier you engage, the better we can serve your needs.
						</p>
					</div>
				</div>
			</section>

			<!-- CTA Section -->
			<section
				id="cta"
				class="bg-primary-600 rounded-2xl p-8 md:p-12 text-center text-white scroll-mt-24"
				aria-labelledby="cta-heading"
			>
				<h2
					id="cta-heading"
					class="text-3xl md:text-4xl font-bold mb-4"
				>
					Ready to Find Your Las Vegas Home?
				</h2>
				<p class="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
					Let us represent you in your home search. Contact us today to schedule a consultation and discover how we can help you find the perfect property in Las Vegas.
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

