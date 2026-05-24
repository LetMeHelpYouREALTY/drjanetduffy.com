<script lang="ts">
	import { Home, Award, TrendingUp, MapPin, Key, Star } from 'lucide-svelte';

	interface TocItem {
		id: string;
		label: string;
	}

	const tocItems: TocItem[] = [
		{ id: 'overview', label: 'Overview' },
		{ id: 'expertise', label: 'Luxury Expertise' },
		{ id: 'communities', label: 'Luxury Communities' },
		{ id: 'buying', label: 'Buying Services' },
		{ id: 'selling', label: 'Selling Services' },
		{ id: 'features', label: 'Key Luxury Features' },
		{ id: 'cta', label: 'Work With Dr. Duffy' }
	];
</script>

<svelte:head>
	<title>
		Las Vegas Luxury &amp; Relocation Luxury Home Services | Dr. Janet Duffy REALTOR®
	</title>
	<meta
		name="description"
		content="Luxury home services from Las Vegas Luxury &amp; Relocation REALTOR® Dr. Janet Duffy, specializing in The Ridges, MacDonald Highlands, Red Rock Country Club, Anthem, Seven Hills, and other premier communities."
	/>
	<meta
		name="keywords"
		content="Las Vegas Luxury &amp; Relocation REALTOR, luxury homes Las Vegas, luxury real estate agent, The Ridges Las Vegas, MacDonald Highlands, Red Rock Country Club, Anthem Country Club, Seven Hills"
	/>

	<meta
		property="og:title"
		content="Las Vegas Luxury &amp; Relocation Luxury Home Services | Dr. Janet Duffy REALTOR®"
	/>
	<meta
		property="og:description"
		content="Concierge-level luxury real estate services for high-end buyers and sellers across Las Vegas’s most prestigious communities."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.drjanetduffy.com/services/luxury-homes" />
	<meta property="og:site_name" content="Las Vegas Luxury &amp; Relocation REALTOR" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="twitter:title"
		content="Las Vegas Luxury &amp; Relocation Luxury Home Services | Dr. Janet Duffy REALTOR®"
	/>
	<meta
		name="twitter:description"
		content="Discreet, data-driven luxury home buying and selling services tailored to Las Vegas’s top-tier communities."
	/>

	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "WebPage",
			"name": "Las Vegas Luxury & Relocation Luxury Home Services",
			"description": "Luxury home buying and selling services from Las Vegas Luxury & Relocation REALTOR Dr. Janet Duffy in The Ridges, MacDonald Highlands, Red Rock Country Club, Anthem, Seven Hills, and other premier communities.",
			"url": "https://www.drjanetduffy.com/services/luxury-homes",
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
				Luxury Real Estate Services for Las Vegas Properties
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Exclusive representation for luxury properties in Las Vegas's most prestigious communities. Expert services for luxury homebuyers and sellers in The Ridges, Red Rock Country Club, Anthem, and other premier neighborhoods.
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
					What Luxury Real Estate Expertise Do We Provide in Las Vegas?
				</h2>
				
				<p class="text-lg text-gray-700 mb-6 leading-relaxed">
					Luxury real estate in Las Vegas represents a distinct market with unique characteristics, buyer expectations, and transaction requirements. Our luxury home services are designed specifically for high-end properties, providing expertise, discretion, and attention to detail through exclusive property access, premium marketing, privacy protection, and deep market knowledge. My concierge service includes specialized representation for luxury communities like The Ridges ($2M-$8M), MacDonald Highlands ($1M-$5M), Red Rock Country Club ($950K-$3M), and The Summit ($1.5M-$5M), with deep understanding of golf course premiums (15-25%), mountain view premiums (20-30%), and luxury market dynamics.
				</p>

				<div class="grid md:grid-cols-2 gap-6 mb-8">
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<Award class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Exclusive Properties</h3>
							<p class="text-gray-600">Access to off-market luxury listings and exclusive properties not available to the general public.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<Star class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Premium Marketing</h3>
							<p class="text-gray-600">High-end marketing including professional photography, virtual tours, and targeted luxury buyer outreach.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<Key class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Discretion & Privacy</h3>
							<p class="text-gray-600">Complete discretion and privacy protection for high-profile clients and sensitive transactions.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<TrendingUp class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Market Expertise</h3>
							<p class="text-gray-600">Deep understanding of Las Vegas luxury markets, pricing trends, and buyer demographics.</p>
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
					Which Las Vegas Luxury Communities Do We Serve?
				</h2>
				
				<p class="text-lg text-gray-700 mb-8 leading-relaxed">
					Las Vegas offers several world-class luxury communities, each with unique characteristics, amenities, and appeal. Understanding these communities is essential for luxury homebuyers and sellers. We provide expert representation in The Ridges, Red Rock Country Club, Anthem, Seven Hills, and other premier luxury neighborhoods.
				</p>

				<div class="space-y-6">
					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">The Ridges</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							The Ridges represents the pinnacle of Las Vegas luxury living, featuring custom estates with breathtaking Red Rock Canyon views. This exclusive gated community offers world-class amenities including a private golf course, clubhouse, and extensive trail systems. Properties in The Ridges typically range from $1.5 million to over $10 million, featuring custom architecture, premium finishes, and expansive lots.
						</p>
						<p class="text-gray-700 leading-relaxed">
							The Ridges' strict architectural guidelines ensure quality and consistency, while the community's private amenities create a resort-like atmosphere. Homes in The Ridges often feature mountain views, custom pools, outdoor living spaces, and luxury finishes throughout. The community's exclusivity, combined with its natural setting and world-class amenities, makes it one of Las Vegas's most desirable luxury addresses.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Red Rock Country Club</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Red Rock Country Club offers luxury living with championship golf and stunning mountain views. This gated community features custom homes, a private golf course, and extensive amenities. Properties typically range from $1 million to over $5 million, offering excellent value in the luxury market.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Red Rock Country Club's golf course, designed by Arnold Palmer, provides a world-class golfing experience, while the community's amenities and location make it highly desirable. Homes in this community often feature golf course or mountain views, custom architecture, and luxury finishes. The community's active social scene and resort-style amenities create an ideal environment for luxury living.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Anthem Country Club</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Anthem Country Club in Henderson offers luxury living with championship golf and extensive amenities. This master-planned community features luxury homes, a private golf course, multiple pools, and extensive recreational facilities. Properties typically range from $600,000 to over $3 million, offering luxury living at various price points.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Anthem's championship golf course, designed by Hale Irwin, provides a world-class golfing experience, while the community's extensive amenities create a resort-like atmosphere. Homes in Anthem often feature golf course or mountain views, modern floor plans, and luxury finishes. The community's location in Henderson provides excellent value while maintaining luxury standards.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">MacDonald Highlands</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							MacDonald Highlands offers luxury living with stunning city and mountain views. This exclusive community features custom estates, a private golf course, and extensive amenities. Properties typically range from $1 million to over $5 million, featuring custom architecture and premium finishes.
						</p>
						<p class="text-gray-700 leading-relaxed">
							MacDonald Highlands' elevated location provides stunning views of the Las Vegas Valley, while the community's private amenities create an exclusive atmosphere. Homes in this community often feature expansive lots, custom pools, outdoor living spaces, and luxury finishes throughout. The community's exclusivity and views make it highly desirable for luxury buyers.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Seven Hills</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Seven Hills offers luxury living in Henderson with stunning views and extensive amenities. This gated community features luxury homes, a private golf course, and resort-style amenities. Properties typically range from $800,000 to over $3 million, offering luxury living with excellent value.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Seven Hills' championship golf course, designed by Arnold Palmer, provides a world-class golfing experience, while the community's amenities and location make it highly desirable. Homes in this community often feature golf course or mountain views, modern floor plans, and luxury finishes. The community's active social scene and resort-style amenities create an ideal environment for luxury living.
						</p>
					</div>
				</div>
			</section>

			<section
				id="buying"
				class="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-12 scroll-mt-24"
				aria-labelledby="buying-heading"
			>
				<h2
					id="buying-heading"
					class="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
				>
					Luxury Home Buying Services
				</h2>
				
				<div class="space-y-8">
					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">Exclusive Property Access</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Luxury properties often sell through exclusive networks before reaching public listings. We provide access to off-market luxury properties and exclusive listings through our network of luxury real estate professionals. This gives you access to properties not available to the general public.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Our connections with luxury real estate professionals, developers, and property owners provide access to exclusive opportunities. We'll help you identify off-market properties that match your criteria and negotiate access to these exclusive listings. This network access is particularly valuable in luxury markets where many properties sell privately.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">Comprehensive Property Evaluation</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Luxury properties require detailed evaluation beyond standard inspections. We help you assess property condition, quality of construction, luxury features, and value. This includes evaluating premium finishes, architectural quality, and unique features that affect luxury property values.
						</p>
						<p class="text-gray-700 leading-relaxed">
							We'll help you understand luxury property values, assess construction quality, and evaluate premium features. We'll coordinate with specialized inspectors who understand luxury properties and can assess high-end systems, finishes, and features. Our goal is to ensure you understand exactly what you're purchasing and that it represents fair value.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">Discreet Representation</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Luxury transactions often require complete discretion and privacy. We provide confidential representation, protecting your privacy throughout the transaction process. This includes private showings, confidential negotiations, and discretion in all communications.
						</p>
						<p class="text-gray-700 leading-relaxed">
							We understand that luxury buyers often value privacy and discretion. We'll conduct all business with complete confidentiality, ensuring your privacy is protected throughout the transaction. This includes private showings, confidential negotiations, and discretion in marketing and communications.
						</p>
					</div>
				</div>
			</section>

			<section
				id="selling"
				class="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-12 scroll-mt-24"
				aria-labelledby="selling-heading"
			>
				<h2
					id="selling-heading"
					class="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
				>
					Luxury Home Selling Services
				</h2>
				
				<div class="space-y-8">
					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">Premium Marketing</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Luxury properties require sophisticated marketing to reach the right buyer audience. We develop comprehensive marketing campaigns including professional photography, virtual tours, luxury print materials, and targeted marketing to high-net-worth buyers. Our marketing strategies are designed to showcase your property's unique features and reach qualified luxury buyers.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Our luxury marketing includes professional photography that captures your property's best features, virtual tours that allow buyers to explore your property in detail, and comprehensive online and print marketing. We also use targeted marketing to reach potential buyers who might be interested in your specific property type or location. Our goal is to present your property in its best light and reach the right buyer audience.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">Strategic Pricing</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Luxury property pricing requires specialized expertise, as comparable sales are often limited and properties have unique features. We conduct comprehensive market analysis, evaluate comparable luxury sales, and develop pricing strategies that maximize value while attracting qualified buyers.
						</p>
						<p class="text-gray-700 leading-relaxed">
							We'll analyze luxury market trends, evaluate comparable sales, and assess your property's unique features to determine optimal pricing. Luxury markets often have longer marketing times, and we'll help you understand pricing strategies that balance maximizing value with attracting qualified buyers. Our goal is to price your property to achieve the best possible outcome.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">Exclusive Network Marketing</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Luxury properties often sell through exclusive networks of luxury real estate professionals. We market your property through these exclusive networks, reaching qualified buyers who might not see public listings. This network marketing is particularly effective for unique or high-value properties.
						</p>
						<p class="text-gray-700 leading-relaxed">
							We'll market your property through our network of luxury real estate professionals, reaching buyers who are actively seeking luxury properties. This network marketing often results in faster sales and better prices, as it reaches qualified buyers who are serious about purchasing luxury properties. Our connections in the luxury market help ensure your property reaches the right audience.
						</p>
					</div>
				</div>
			</section>

			<section
				id="features"
				class="bg-gradient-to-br from-primary-50 to-white rounded-2xl shadow-lg p-8 md:p-10 mb-12 scroll-mt-24"
				aria-labelledby="features-heading"
			>
				<h2
					id="features-heading"
					class="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
				>
					Luxury Property Features &amp; Considerations
				</h2>
				
				<div class="space-y-6">
					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Premium Finishes & Features</h3>
						<p class="text-gray-700 leading-relaxed">
							Luxury properties feature premium finishes, high-end appliances, and custom features that set them apart. We help you understand and evaluate these features, assess their quality, and understand how they affect property value. This includes everything from custom cabinetry to high-end appliances to unique architectural features.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Views & Location</h3>
						<p class="text-gray-700 leading-relaxed">
							Views and location significantly impact luxury property values. Mountain views, golf course views, and city views can dramatically affect property values in Las Vegas. We help you understand how views and location affect value and position properties accordingly.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Privacy & Security</h3>
						<p class="text-gray-700 leading-relaxed">
							Luxury buyers often prioritize privacy and security. Gated communities, private lots, and security features are important considerations. We help you understand how these features affect value and appeal to luxury buyers.
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
					Luxury Real Estate Services in Las Vegas
				</h2>
				<p class="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
					Let us help you with your luxury real estate needs. Contact us today to schedule a confidential consultation.
				</p>
				<div class="flex flex-col sm:flex-row gap-4 justify-center">
					<a href="/contact" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">
						Schedule Consultation
					</a>
					<a
						href="/properties"
						class="btn-primary bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600"
					>
						View Luxury Properties
					</a>
				</div>
			</section>
		</div>
	</div>
</section>

