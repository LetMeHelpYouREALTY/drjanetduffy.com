<script>
	import { BookOpen, FileText, Calculator, TrendingUp, Home, DollarSign, MapPin, Users, Key, BarChart3, GraduationCap } from 'lucide-svelte';
	
	const resources = [
		{
			category: 'Buying Resources',
			icon: Home,
			items: [
				{
					title: 'First-Time Buyer Guide',
					description: 'Complete guide for first-time homebuyers',
					url: '/first-time-buyers',
					icon: Key
				},
				{
					title: 'Buyer Representation',
					description: 'Expert buyer representation services',
					url: '/services/buyer-representation',
					icon: Users
				},
				{
					title: 'Mortgage Guidance',
					description: 'Understanding financing options',
					url: '/services/mortgage-guidance',
					icon: DollarSign
				}
			]
		},
		{
			category: 'Selling Resources',
			icon: DollarSign,
			items: [
				{
					title: 'Home Value Calculator',
					description: 'Get an instant estimate of your home\'s value',
					url: '/home-value',
					icon: Calculator
				},
				{
					title: 'Seller Representation',
					description: 'Professional seller representation services',
					url: '/services/seller-representation',
					icon: TrendingUp
				},
				{
					title: 'Pricing Strategy',
					description: 'Expert pricing strategies for sellers',
					url: '/services/pricing-strategy',
					icon: BarChart3
				}
			]
		},
		{
			category: 'Market Information',
			icon: TrendingUp,
			items: [
				{
					title: 'Market Insights',
					description: 'Current Las Vegas market statistics',
					url: '/market-insights',
					icon: BarChart3
				},
				{
					title: 'Market Reports',
					description: 'Detailed quarterly market reports',
					url: '/resources/market-reports',
					icon: BarChart3
				},
				{
					title: 'Neighborhoods',
					description: 'Explore Las Vegas neighborhoods',
					url: '/neighborhoods',
					icon: MapPin
				},
				{
					title: 'Past Sales',
					description: 'View recent sales and market trends',
					url: '/past-sales',
					icon: FileText
				}
			]
		},
		{
			category: 'Selling Resources',
			icon: DollarSign,
			items: [
				{
					title: 'Home Staging Guide',
					description: 'Maximize appeal with staging tips',
					url: '/resources/home-staging',
					icon: Home
				},
				{
					title: 'Selling Guide',
					description: 'Complete home selling guide',
					url: '/selling-guide',
					icon: FileText
				}
			]
		},
		{
			category: 'Moving & Relocation',
			icon: Users,
			items: [
				{
					title: 'Moving Checklist',
					description: 'Complete moving timeline and tasks',
					url: '/resources/moving-checklist',
					icon: FileText
				},
				{
					title: 'Relocation Guide',
					description: 'Moving to Las Vegas guide',
					url: '/relocation',
					icon: MapPin
				}
			]
		},
		{
			category: 'Education',
			icon: GraduationCap,
			items: [
				{
					title: 'School Districts',
					description: 'Las Vegas area schools and districts',
					url: '/resources/school-districts',
					icon: GraduationCap
				}
			]
		},
		{
			category: 'Investment Resources',
			icon: TrendingUp,
			items: [
				{
					title: 'Investment Guide',
					description: 'Complete guide to real estate investing',
					url: '/investment-guide',
					icon: BookOpen
				},
				{
					title: 'Real Estate Investing',
					description: 'Investment property consulting',
					url: '/services/real-estate-investing',
					icon: TrendingUp
				},
				{
					title: 'Property Management',
					description: 'Professional property management services',
					url: '/services/property-management',
					icon: Home
				}
			]
		}
	];
</script>

<svelte:head>
	<title>Las Vegas Luxury &amp; Relocation Resources | Dr. Janet Duffy REALTOR®</title>
	<meta name="description" content="Las Vegas Luxury & Relocation resources including buying and selling guides, market insights, relocation checklists, and investment information." />
</svelte:head>

<section class="section bg-gradient-to-b from-white via-gray-50 to-white">
	<div class="container-premium">
		<div class="text-center mb-16">
			<h1 class="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900">
				Las Vegas Real Estate Guides & Resources
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Comprehensive guides, tools, and information to help you navigate Las Vegas real estate
			</p>
		</div>

		<div class="mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">What Real Estate Resources Are Available for Las Vegas Buyers and Sellers?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				Las Vegas real estate resources include comprehensive buying guides, selling guides, market insights, investment information, moving checklists, school district information, calculators, and expert services that help buyers, sellers, and investors navigate the Las Vegas real estate market with confidence and success.
			</p>
		</div>

		<div class="space-y-16">
			{#each resources as resource}
				<div>
					<div class="mb-6">
						<div class="flex items-center gap-4 mb-4">
							<svelte:component this={resource.icon} class="w-8 h-8 text-primary-600" />
							<h2 class="text-3xl font-bold text-gray-900">{resource.category}</h2>
						</div>
						{#if resource.category === 'Buying Resources'}
							<p class="text-gray-700 leading-relaxed max-w-3xl">
								Essential resources for homebuyers including first-time buyer guides, buyer representation services, and mortgage guidance to help you successfully purchase your Las Vegas home.
							</p>
						{:else if resource.category === 'Selling Resources'}
							<p class="text-gray-700 leading-relaxed max-w-3xl">
								Comprehensive selling resources including home value calculators, seller representation services, pricing strategies, and home staging guides to maximize your home's value and appeal.
							</p>
						{:else if resource.category === 'Market Information'}
							<p class="text-gray-700 leading-relaxed max-w-3xl">
								Current market information including market insights, detailed quarterly reports, neighborhood guides, and past sales data to help you understand Las Vegas real estate trends.
							</p>
						{:else if resource.category === 'Moving & Relocation'}
							<p class="text-gray-700 leading-relaxed max-w-3xl">
								Moving and relocation resources including comprehensive moving checklists and relocation guides to help you smoothly transition to Las Vegas.
							</p>
						{:else if resource.category === 'Education'}
							<p class="text-gray-700 leading-relaxed max-w-3xl">
								Educational resources including school district information and top-rated schools to help families find the best educational opportunities in Las Vegas.
							</p>
						{:else if resource.category === 'Investment Resources'}
							<p class="text-gray-700 leading-relaxed max-w-3xl">
								Investment resources including comprehensive investment guides, real estate investing services, and property management services for investors seeking Las Vegas opportunities.
							</p>
						{/if}
					</div>
					
					<div class="grid md:grid-cols-3 gap-6">
						{#each resource.items as item}
							<a
								href={item.url}
								class="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-primary-300 transform hover:-translate-y-1"
							>
								<div class="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-4 group-hover:bg-primary-200 transition-colors">
									<svelte:component this={item.icon} class="w-6 h-6 text-primary-600" />
								</div>
								<h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
									{item.title}
								</h3>
								<p class="text-gray-600 text-sm mb-4">
									{item.description}
								</p>
								<span class="text-primary-600 font-semibold text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
									Learn More →
								</span>
							</a>
						{/each}
					</div>
				</div>
			{/each}
		</div>

		<!-- Additional Resources -->
		<div class="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-white">
			<h2 class="text-3xl md:text-4xl font-bold mb-4 text-center">Need Additional Real Estate Help and Support?</h2>
			<p class="text-lg text-white text-opacity-90 mb-8 max-w-3xl mx-auto text-center">
				Access frequently asked questions, read client testimonials, and contact me directly for personalized assistance with your Las Vegas real estate needs.
			</p>
			<div class="grid md:grid-cols-3 gap-8">
				<div class="text-center">
					<FileText class="w-12 h-12 mx-auto mb-4 text-white opacity-90" />
					<h3 class="text-xl font-bold mb-2">FAQ</h3>
					<p class="text-white text-opacity-90 mb-4">Find answers to common questions</p>
					<a href="/faq" class="text-white underline font-semibold">Visit FAQ →</a>
				</div>
				<div class="text-center">
					<Users class="w-12 h-12 mx-auto mb-4 text-white opacity-90" />
					<h3 class="text-xl font-bold mb-2">Testimonials</h3>
					<p class="text-white text-opacity-90 mb-4">Read client success stories</p>
					<a href="/testimonials" class="text-white underline font-semibold">View Testimonials →</a>
				</div>
				<div class="text-center">
					<MapPin class="w-12 h-12 mx-auto mb-4 text-white opacity-90" />
					<h3 class="text-xl font-bold mb-2">Contact</h3>
					<p class="text-white text-opacity-90 mb-4">Get personalized assistance</p>
					<a href="/contact" class="text-white underline font-semibold">Contact Me →</a>
				</div>
			</div>
		</div>
	</div>
</section>

