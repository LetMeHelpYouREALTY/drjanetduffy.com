<script lang="ts">
	import { Search, Home, Briefcase, TrendingUp, Users, DollarSign, MapPin, Building2, Key, BarChart3, ChevronRight } from 'lucide-svelte';
	
	interface ServiceItem {
		title: string;
		url: string;
		description: string;
	}

	interface ServiceCategory {
		category: string;
		icon: typeof Home;
		items: ServiceItem[];
	}

	const services: ServiceCategory[] = [
		// Buyer Services
		{
			category: 'Buyer Services',
			icon: Home,
			items: [
				{
					title: 'Expert Buyer Representation',
					url: '/services/buyer-representation',
					description: 'Comprehensive guidance for homebuyers throughout the entire purchasing process in Las Vegas'
				},
				{
					title: 'Senior Housing Solutions',
					url: '/services/senior-housing',
					description: 'Specialized services for buyers 50+ looking to downsize, invest, or relocate in Las Vegas'
				},
				{
					title: 'Military Relocation Services',
					url: '/services/military-relocation',
					description: 'Dedicated support for military families relocating to or from Las Vegas and surrounding areas'
				}
			]
		},
		// Seller Services
		{
			category: 'Seller Services',
			icon: Briefcase,
			items: [
				{
					title: 'Professional Seller Representation',
					url: '/services/seller-representation',
					description: 'Expert strategies to maximize your home\'s value and streamline the selling process'
				},
				{
					title: 'Pricing Strategy Services',
					url: '/services/pricing-strategy',
					description: 'Accurate property pricing based on comprehensive Las Vegas market analysis'
				},
				{
					title: 'Distressed Property Solutions',
					url: '/services/distressed-properties',
					description: 'Expert guidance for short sales and foreclosure transactions in Las Vegas'
				}
			]
		},
		// Specialized Markets
		{
			category: 'Specialized Markets',
			icon: Building2,
			items: [
				{
					title: 'Luxury Homes',
					url: '/services/luxury-homes',
					description: 'Exclusive representation for luxury properties in Las Vegas\'s most prestigious communities'
				},
				{
					title: 'Resort & Second Home Properties',
					url: '/services/resort-properties',
					description: 'Specialized services for vacation homes and investment properties in Las Vegas area'
				},
				{
					title: 'Eco-Friendly Homes',
					url: '/services/eco-friendly-homes',
					description: 'Sustainable housing solutions and energy-efficient properties in Las Vegas'
				},
				{
					title: 'Smart Home Technology',
					url: '/services/smart-home-technology',
					description: 'Expertise in smart home features, privacy, and technology integration for Las Vegas properties'
				}
			]
		},
		// Commercial & Investment
		{
			category: 'Commercial & Investment',
			icon: TrendingUp,
			items: [
				{
					title: 'Commercial Real Estate',
					url: '/services/commercial-real-estate',
					description: 'Industrial and office market expertise for commercial property transactions'
				},
				{
					title: 'Commercial Investment Services',
					url: '/services/commercial-investment',
					description: 'Strategic commercial real estate investment guidance for Las Vegas market'
				},
				{
					title: 'Real Estate Investing',
					url: '/services/real-estate-investing',
					description: 'Comprehensive investment property consulting and portfolio development'
				},
				{
					title: 'Land Investment',
					url: '/services/land-investment',
					description: 'Expert land acquisition and development consulting throughout Las Vegas and surrounding areas'
				},
				{
					title: 'Property Management',
					url: '/services/property-management',
					description: 'Professional property management services for Las Vegas rental properties'
				},
				{
					title: 'Commercial Consulting',
					url: '/services/commercial-consulting',
					description: 'Objective real property advice and consulting for commercial transactions'
				}
			]
		},
		// Appraisal & Valuation
		{
			category: 'Appraisal & Valuation',
			icon: DollarSign,
			items: [
				{
					title: 'Residential Appraisal Services',
					url: '/services/residential-appraisal',
					description: 'Professional residential property valuations for Las Vegas homes'
				},
				{
					title: 'General Appraisal Services',
					url: '/services/general-appraisal',
					description: 'Comprehensive property appraisals exceeding state certification requirements'
				}
			]
		},
		// Marketing & Technology
		{
			category: 'Marketing & Technology',
			icon: BarChart3,
			items: [
				{
					title: 'Digital Marketing Services',
					url: '/services/digital-marketing',
					description: 'Advanced digital marketing strategies to maximize property visibility and generate leads'
				},
				{
					title: 'Social Media Marketing',
					url: '/services/social-media-marketing',
					description: 'Expert social media strategies for real estate promotion and client engagement'
				},
				{
					title: 'Inside Sales Services',
					url: '/services/inside-sales',
					description: 'Professional phone, email, and online sales support for real estate transactions'
				}
			]
		},
		// Specialized Services
		{
			category: 'Specialized Services',
			icon: Users,
			items: [
				{
					title: 'International Property Services',
					url: '/services/international-property',
					description: 'Global real estate expertise for international buyers and sellers in Las Vegas'
				},
				{
					title: 'Inclusive Real Estate Services',
					url: '/services/inclusive-real-estate',
					description: 'Comprehensive real estate services serving all communities in Las Vegas'
				},
				{
					title: 'Negotiation Expertise',
					url: '/services/negotiation-expertise',
					description: 'Advanced negotiation strategies to achieve optimal outcomes for clients'
				},
				{
					title: 'Mortgage Guidance',
					url: '/services/mortgage-guidance',
					description: 'Expert guidance through home financing options to improve outcomes and build relationships'
				},
				{
					title: 'Residential Specialist Services',
					url: '/services/residential-specialist',
					description: 'Comprehensive residential real estate expertise for Las Vegas homebuyers and sellers'
				},
				{
					title: 'Real Estate Education',
					url: '/services/real-estate-education',
					description: 'In-depth knowledge in legal, regulatory, technology, and sales process matters'
				}
			]
		}
	];
	
	let searchQuery = '';
	
	$: filteredServices = services.map((category) => ({
		...category,
		items: category.items.filter((item) => 
			item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			item.description.toLowerCase().includes(searchQuery.toLowerCase())
		)
	})).filter(category => category.items.length > 0);
</script>

<svelte:head>
	<title>Las Vegas Luxury &amp; Relocation Real Estate Services | Dr. Janet Duffy</title>
	<meta name="description" content="Las Vegas Luxury & Relocation REALTOR services including buyer and seller representation, luxury homes, relocation support, commercial real estate, and investment guidance." />
	<meta name="keywords" content="Las Vegas real estate services, buyer representation, seller services, luxury homes Las Vegas, commercial real estate, property management" />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.drjanetduffy.com/services" />
	<meta property="og:title" content="Las Vegas Luxury &amp; Relocation Real Estate Services | Dr. Janet Duffy" />
	<meta property="og:description" content="Concierge-level real estate services for Las Vegas luxury buyers, sellers, relocation clients, and investors." />
	
	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://www.drjanetduffy.com/services" />
	<meta property="twitter:title" content="Las Vegas Luxury &amp; Relocation Real Estate Services | Dr. Janet Duffy" />
	<meta property="twitter:description" content="Las Vegas Luxury & Relocation REALTOR services for buyers, sellers, relocation clients, and investors." />

	<!-- Structured Data - Service overview -->
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "WebPage",
		"name": "Las Vegas Luxury & Relocation Real Estate Services",
		"description": "Concierge-level real estate services for Las Vegas luxury buyers, sellers, relocation clients, and investors.",
		"url": "https://www.drjanetduffy.com/services"
	}
	</script>
</svelte:head>

<section class="section bg-gradient-to-b from-white via-gray-50 to-white">
	<div class="container-premium">
		<!-- Hero / Header -->
		<div class="grid md:grid-cols-2 gap-10 lg:gap-16 items-center mb-10 sm:mb-12">
			<div class="text-center md:text-left">
				<h1 class="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900">
					Las Vegas Luxury &amp; Relocation Real Estate Services
				</h1>
				<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto md:mx-0 mb-6"></div>
				<p class="text-xl text-gray-600 max-w-3xl mx-auto md:mx-0 leading-relaxed">
					This page is your concierge-style menu of every way I can support your Las Vegas real estate goals. Instead of generic checklists, you will find clear explanations of how I represent buyers, protect sellers, advise investors, and guide relocation clients across Summerlin, Skye Canyon, Henderson, North Las Vegas, and beyond. Use the sections below to decide where to begin, then reach out so we can design a service plan around your timeline, comfort level, and next best step.
				</p>
			</div>
			<div class="relative">
				<img
					src="/images/services/las-vegas-real-estate-services.jpg"
					alt="Las Vegas real estate services consultation with city skyline in the background"
					class="w-full h-64 md:h-80 object-cover rounded-2xl shadow-xl"
					loading="lazy"
				/>
				<div class="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent rounded-2xl"></div>
				<p class="absolute bottom-4 left-4 text-white text-sm font-medium">
					Concierge-level real estate services across the Las Vegas Valley
				</p>
			</div>
		</div>

		<!-- Our Services Overview -->
		<div id="overview" class="mb-12 sm:mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
				What Types of Real Estate Services Do You Offer in Las Vegas?
			</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				I offer a full suite of services for Las Vegas homebuyers, sellers, investors, and relocation clients—from your first online search to closing and beyond. Below you will see how I support purchases, listings, luxury moves, rentals, commercial deals, and specialty situations such as divorce, military orders, and senior transitions. Each service can stand alone or be combined into a custom plan that fits your life, budget, and preferred pace.
			</p>
			<div class="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
				<div class="card text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4 group-hover:bg-primary-200 group-hover:scale-110 transition-all">
						<Home class="w-8 h-8 text-primary-600" />
					</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">Buying</h3>
					<p class="text-gray-600 text-sm">Expert guidance to find your perfect home</p>
				</div>

				<div class="card text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4 group-hover:bg-primary-200 group-hover:scale-110 transition-all">
						<DollarSign class="w-8 h-8 text-primary-600" />
					</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">Selling</h3>
					<p class="text-gray-600 text-sm">Maximize your home's value and sell faster</p>
				</div>

				<div class="card text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4 group-hover:bg-primary-200 group-hover:scale-110 transition-all">
						<Building2 class="w-8 h-8 text-primary-600" />
					</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">Rentals</h3>
					<p class="text-gray-600 text-sm">Find the perfect rental property</p>
				</div>

				<div class="card text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4 group-hover:bg-primary-200 group-hover:scale-110 transition-all">
						<TrendingUp class="w-8 h-8 text-primary-600" />
					</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">Investments</h3>
					<p class="text-gray-600 text-sm">Strategic real estate investment advice</p>
				</div>
			</div>
		</div>

		<!-- On-page navigation for service sections -->
		<div class="max-w-4xl mx-auto mb-10">
			<nav class="border-t border-gray-200 pt-5">
				<p class="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3 text-center">
					On this page
				</p>
				<div class="flex flex-wrap justify-center gap-3">
					<a href="#overview" class="px-4 py-2 rounded-full border border-gray-200 bg-white text-xs sm:text-sm font-medium text-gray-700 hover:text-primary-600 hover:border-primary-300 hover:bg-primary-50 transition-colors">
						Overview
					</a>
					<a href="#concierge-service" class="px-4 py-2 rounded-full border border-gray-200 bg-white text-xs sm:text-sm font-medium text-gray-700 hover:text-primary-600 hover:border-primary-300 hover:bg-primary-50 transition-colors">
						Concierge Service
					</a>
					<a href="#buyer-relocation" class="px-4 py-2 rounded-full border border-gray-200 bg-white text-xs sm:text-sm font-medium text-gray-700 hover:text-primary-600 hover:border-primary-300 hover:bg-primary-50 transition-colors">
						Buyers &amp; Relocation
					</a>
					<a href="#seller-services" class="px-4 py-2 rounded-full border border-gray-200 bg-white text-xs sm:text-sm font-medium text-gray-700 hover:text-primary-600 hover:border-primary-300 hover:bg-primary-50 transition-colors">
						Seller Services
					</a>
					<a href="#investment-services" class="px-4 py-2 rounded-full border border-gray-200 bg-white text-xs sm:text-sm font-medium text-gray-700 hover:text-primary-600 hover:border-primary-300 hover:bg-primary-50 transition-colors">
						Investors &amp; Commercial
					</a>
					<a href="#specialized-services" class="px-4 py-2 rounded-full border border-gray-200 bg-white text-xs sm:text-sm font-medium text-gray-700 hover:text-primary-600 hover:border-primary-300 hover:bg-primary-50 transition-colors">
						Senior &amp; Military
					</a>
					<a href="#edge" class="px-4 py-2 rounded-full border border-gray-200 bg-white text-xs sm:text-sm font-medium text-gray-700 hover:text-primary-600 hover:border-primary-300 hover:bg-primary-50 transition-colors">
						Your Edge
					</a>
					<a href="#search-services" class="px-4 py-2 rounded-full border border-gray-200 bg-white text-xs sm:text-sm font-medium text-gray-700 hover:text-primary-600 hover:border-primary-300 hover:bg-primary-50 transition-colors">
						Search Services
					</a>
				</div>
			</nav>
		</div>

		<!-- How Does My Concierge Real Estate Service Work? -->
		<div id="concierge-service" class="mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
				How Does My Concierge Las Vegas Real Estate Service Actually Work?
			</h2>
			<p class="text-lg text-gray-700 mb-6 leading-relaxed max-w-4xl mx-auto text-center">
				Concierge service means you are never left to figure out the next step alone. From our first conversation, I map out the entire process for you—search, showings, offers, inspections, appraisals, repairs, and closing—so you always know what is happening and why. Instead of juggling multiple contacts, you work with one point person who coordinates lenders, inspectors, title, HOA, and contractors on your behalf.
			</p>
			<p class="text-lg text-gray-700 mb-6 leading-relaxed max-w-4xl mx-auto text-center">
				Every client receives a customized communication plan based on their preference: weekly check-ins, same-day text updates on key milestones, or detailed email recaps that you can share with family or advisors. Behind the scenes, I am tracking deadlines, spotting potential issues early, and advocating for you in every conversation so that surprises are minimized and your stress level stays manageable from offer to closing.
			</p>
		</div>

		<!-- Buyer & Relocation Services -->
		<div id="buyer-relocation" class="mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
				What Services Do You Offer Las Vegas Home Buyers and Relocation Clients?
			</h2>
			<p class="text-lg text-gray-700 mb-6 leading-relaxed max-w-5xl mx-auto text-center">
				For buyers and relocation clients, I go far beyond opening doors and sending listings. We start with a strategy session to define your timeline, budget, must-haves, and non-negotiables such as schools, commute, or proximity to hospitals, bases, and corporate campuses. From there, I build a curated search that focuses on specific Las Vegas communities—Summerlin, Skye Canyon, Henderson, Green Valley, North Las Vegas, and more—along with neighborhood-level pros, cons, and appreciation trends.
			</p>
			<p class="text-lg text-gray-700 mb-6 leading-relaxed max-w-5xl mx-auto text-center">
				When you are ready to tour, I plan efficient routes, provide printed or digital packets with community data, and point out details you might otherwise miss: HOA rules, builder quality differences, sun exposure, noise considerations, and future development plans. If you are buying from out of state, we can complete much of this process via video tours, screen-share map reviews, and secure e-signatures. Explore dedicated pages such as <a href="/services/buyer-representation" class="text-primary-600 font-semibold hover:underline">Buyer Representation</a>, <a href="/services/relocation" class="text-primary-600 font-semibold hover:underline">Relocation Services</a>, and <a href="/services/military-relocation" class="text-primary-600 font-semibold hover:underline">Military Relocation</a> to see exactly how I support your move.
			</p>
		</div>

		<!-- Seller, Pricing & Marketing Services -->
		<div id="seller-services" class="mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
				How Do You Help Las Vegas Home Sellers Maximize Their Results?
			</h2>
			<p class="text-lg text-gray-700 mb-6 leading-relaxed max-w-5xl mx-auto text-center">
				For sellers, my focus is on protecting your equity while minimizing disruption to your daily life. We begin with a deep pricing consultation that includes recent comparable sales, absorption rates, buyer demand by price band, and any seasonal or event-driven trends that may affect timing. I then provide a prioritized prep plan—decluttering, staging, minor repairs, curb appeal—and connect you with trusted vendors if needed so you are not managing the process alone.
			</p>
			<p class="text-lg text-gray-700 mb-6 leading-relaxed max-w-5xl mx-auto text-center">
				Once your home is ready, I deploy a tailored marketing strategy that can include professional photography, video, floor plans, social media campaigns, paid digital ads, and targeted outreach to buyers and agents most likely to be a match. During showings and negotiations, you receive honest feedback, clear explanations of each offer, and data-backed guidance on which terms will likely lead to a smooth closing. Visit <a href="/services/seller-representation" class="text-primary-600 font-semibold hover:underline">Seller Representation</a>, <a href="/services/pricing-strategy" class="text-primary-600 font-semibold hover:underline">Pricing Strategy</a>, and <a href="/services/digital-marketing" class="text-primary-600 font-semibold hover:underline">Digital Marketing</a> to dive deeper into these services.
			</p>
		</div>

		<!-- Investment, Commercial & Property Management -->
		<div id="investment-services" class="mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
				What Specialized Services Do You Provide for Investors and Commercial Clients?
			</h2>
			<p class="text-lg text-gray-700 mb-6 leading-relaxed max-w-5xl mx-auto text-center">
				Investors and commercial clients need more than neighborhood descriptions—they need numbers and strategy. I help you evaluate cap rates, projected cash flow, tenant demand, vacancy risks, and exit options across residential rentals, small multifamily, and select commercial properties in the Las Vegas Valley. We review not only current performance but also future factors such as infrastructure projects, employer growth, and zoning considerations that could influence long-term value.
			</p>
			<p class="text-lg text-gray-700 mb-6 leading-relaxed max-w-5xl mx-auto text-center">
				When it is time to purchase, sell, or reposition an asset, I coordinate with your CPA, attorney, and property manager so that your real estate decisions support your broader financial plan. For owners who prefer a more hands-off approach, I can connect you with vetted property management solutions and help set up reporting structures that keep you informed without burying you in day-to-day details. Learn more on <a href="/services/real-estate-investing" class="text-primary-600 font-semibold hover:underline">Real Estate Investing</a>, <a href="/services/commercial-real-estate" class="text-primary-600 font-semibold hover:underline">Commercial Real Estate</a>, and <a href="/services/property-management" class="text-primary-600 font-semibold hover:underline">Property Management</a>.
			</p>
		</div>

		<!-- Senior, Military & Inclusive Services -->
		<div id="specialized-services" class="mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
				How Do You Support Seniors, Military Families, and Inclusive Real Estate Needs?
			</h2>
			<p class="text-lg text-gray-700 mb-6 leading-relaxed max-w-5xl mx-auto text-center">
				Certain life stages and circumstances require extra care, patience, and discretion. For seniors and their families, I help evaluate downsizing options, accessibility needs, proximity to healthcare, and whether it makes more sense to sell, rent, or hold a long-time residence. For military families, I plan around PCS orders, tight timelines, and the realities of buying or selling from a distance, often coordinating everything from virtual tours to on-the-ground logistics while you are still out of state.
			</p>
			<p class="text-lg text-gray-700 mb-6 leading-relaxed max-w-5xl mx-auto text-center">
				Above all, my practice is intentionally inclusive. I am committed to fair housing principles and to creating a welcoming, judgment-free environment for clients of every background, identity, and family structure. Whether you are navigating a divorce, co-buying with friends, purchasing as an investor couple, or exploring multi-generational living, you will receive the same level of respect, clarity, and advocacy. Explore <a href="/services/senior-housing" class="text-primary-600 font-semibold hover:underline">Senior Housing</a>, <a href="/services/military-relocation" class="text-primary-600 font-semibold hover:underline">Military Relocation</a>, and <a href="/services/inclusive-real-estate" class="text-primary-600 font-semibold hover:underline">Inclusive Real Estate</a> for more details.
			</p>
		</div>

		<!-- Technology, Education & Negotiation -->
		<div id="edge" class="mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
				How Do Technology, Education, and Negotiation Give You an Edge?
			</h2>
			<p class="text-lg text-gray-700 mb-6 leading-relaxed max-w-5xl mx-auto text-center">
				Three pillars support every service I offer: smart technology, ongoing education, and strong negotiation. I use modern tools for search, digital signatures, document management, and market analysis so you spend less time chasing paperwork and more time making informed decisions. At the same time, I invest heavily in continuing education around contracts, lending changes, technology, and local regulations so that my guidance reflects the latest rules and opportunities in the Las Vegas market.
			</p>
			<p class="text-lg text-gray-700 mb-6 leading-relaxed max-w-5xl mx-auto text-center">
				When it is time to negotiate, I combine data, experience, and emotional intelligence to advocate effectively while keeping the tone professional and solutions-focused. That might mean knowing when to push for repairs versus credits, how to position your offer in a multiple-offer situation, or how to keep a deal together when an appraisal, inspection, or timeline surprise appears. Pages such as <a href="/services/negotiation-expertise" class="text-primary-600 font-semibold hover:underline">Negotiation Expertise</a>, <a href="/services/real-estate-education" class="text-primary-600 font-semibold hover:underline">Real Estate Education</a>, and <a href="/services/smart-home-technology" class="text-primary-600 font-semibold hover:underline">Smart Home Technology</a> explain how these tools and skills show up in real transactions.
			</p>
		</div>
		
		<!-- Search Bar -->
		<div id="search-services" class="max-w-2xl mx-auto mb-12">
			<div class="relative">
				<Search class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
				<input
					type="text"
					placeholder="Search services..."
					bind:value={searchQuery}
					class="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900 placeholder-gray-400 transition-all"
					aria-label="Search services"
				/>
			</div>
		</div>
		
		<!-- Services by Category -->
		<div class="space-y-16">
			{#each filteredServices as category}
				<div>
					<div class="flex items-center gap-3 mb-8">
						<svelte:component this={category.icon} class="w-5 h-5 text-primary-600" />
						<h2 class="text-3xl md:text-4xl font-bold text-gray-900">{category.category}</h2>
					</div>
					
					<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{#each category.items as service}
							<a
								href={service.url}
								class="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-primary-300 transform hover:-translate-y-1"
							>
								<h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
									{service.title}
								</h3>
								<p class="text-gray-600 leading-relaxed mb-4">
									{service.description}
								</p>
								<span class="text-primary-600 font-semibold text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
									Learn More
									<ChevronRight class="w-4 h-4" />
								</span>
							</a>
						{/each}
					</div>
				</div>
			{/each}
		</div>
		
		<!-- CTA Section -->
		<div class="mt-16 text-center bg-primary-600 rounded-2xl p-8 md:p-12 text-white">
			<h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
			<p class="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
				Whether you're buying, selling, or investing in Las Vegas real estate, we're here to help you achieve your goals.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/contact" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">
					Schedule Consultation
				</a>
				<a href="/properties" class="btn-primary bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600">
					View Properties
				</a>
			</div>
		</div>
	</div>
</section>

