<script lang="ts">
	import { Home, Users, CheckCircle, MapPin, Heart, TrendingUp } from 'lucide-svelte';
	import { PhotoGallery } from '$lib';
	import { seniorLivingJoy } from '$lib/data/photo-galleries';

	interface TocItem {
		id: string;
		label: string;
	}

	const tocItems: TocItem[] = [
		{ id: 'overview', label: 'Overview' },
		{ id: 'options', label: 'Housing Options' },
		{ id: 'communities', label: 'Premier Communities' },
		{ id: 'services', label: 'Specialized Services' },
		{ id: 'considerations', label: 'Key Considerations' },
		{ id: 'cta', label: 'Find Your Retirement Home' }
	];
</script>

<svelte:head>
	<title>
		Las Vegas Luxury &amp; Relocation Senior Housing Solutions | Dr. Janet Duffy REALTOR®
	</title>
	<meta
		name="description"
		content="Senior housing and 55+ real estate services from Las Vegas Luxury &amp; Relocation REALTOR® Dr. Janet Duffy, specializing in downsizing, active adult communities, and retirement moves."
	/>
	<meta
		name="keywords"
		content="Las Vegas Luxury &amp; Relocation REALTOR, senior housing Las Vegas, 55+ communities, retirement homes Las Vegas, downsizing"
	/>

	<meta
		property="og:title"
		content="Las Vegas Luxury &amp; Relocation Senior Housing Solutions | Dr. Janet Duffy REALTOR®"
	/>
	<meta
		property="og:description"
		content="Guidance for buyers 50+ navigating Sun City, Del Webb, Henderson, and luxury retirement communities in Las Vegas."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.drjanetduffy.com/services/senior-housing" />
	<meta property="og:site_name" content="Las Vegas Luxury &amp; Relocation REALTOR" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="twitter:title"
		content="Las Vegas Luxury &amp; Relocation Senior Housing Solutions | Dr. Janet Duffy REALTOR®"
	/>
	<meta
		name="twitter:description"
		content="Downsizing, community selection, and relocation support tailored to active adults and retirees moving to Las Vegas."
	/>

	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "WebPage",
			"name": "Las Vegas Luxury & Relocation Senior Housing Solutions",
			"description": "Senior housing services for buyers 50+ in Las Vegas, including 55+ communities, downsizing, and relocation guidance.",
			"url": "https://www.drjanetduffy.com/services/senior-housing",
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
				Senior Housing Solutions in Las Vegas
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Specialized real estate services for buyers 50+ looking to downsize, invest smartly, or relocate to Las Vegas. Expert guidance through retirement communities, age-restricted housing, and lifestyle-focused neighborhoods.
			</p>
		</div>

		<div class="mb-12">
			<PhotoGallery
				title="Life in Las Vegas 55+ Communities"
				subtitle="Beyond floor plans and HOA fees, the right senior housing choice comes down to everyday joy, friendships, and feeling at home."
				photos={seniorLivingJoy}
			/>
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
				id="options"
				class="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-12 scroll-mt-24"
				aria-labelledby="options-heading"
			>
				<h2
					id="options-heading"
					class="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
				>
					What Senior Housing Options Are Available in Las Vegas?
				</h2>
				
				<p class="text-lg text-gray-700 mb-6 leading-relaxed">
					Las Vegas offers exceptional options for buyers 50 and older, from active adult communities to age-restricted neighborhoods and lifestyle-focused developments. Our specialized services help you navigate these unique markets through age-restricted community exploration, active adult living options, downsizing solutions, and strategic investment property advice.
				</p>

				<div class="grid md:grid-cols-2 gap-6 mb-8">
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<Home class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Age-Restricted Communities</h3>
							<p class="text-gray-600">We help you explore 55+ communities with resort-style amenities, low-maintenance living, and active social environments.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<Users class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Active Adult Living</h3>
							<p class="text-gray-600">Discover communities designed for active lifestyles with golf courses, fitness centers, and social activities.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<Heart class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Downsizing Solutions</h3>
							<p class="text-gray-600">Expert guidance for transitioning to smaller, more manageable homes that fit your current lifestyle.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<TrendingUp class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Investment Properties</h3>
							<p class="text-gray-600">Strategic advice for real estate investments that can supplement retirement income.</p>
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
					Which Premier Senior Communities Are Available in Las Vegas?
				</h2>
				
				<p class="text-lg text-gray-700 mb-8 leading-relaxed">
					Las Vegas and surrounding areas feature numerous communities specifically designed for active adults and retirees including Sun City communities in Summerlin and Anthem, Del Webb communities with resort-style amenities, Henderson active adult communities, and luxury retirement options in The Ridges and Red Rock Country Club. These communities offer low-maintenance living, resort-style amenities, and vibrant social environments.
				</p>

				<div class="space-y-6">
					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Sun City Communities</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Sun City Summerlin and Sun City Anthem represent two of Las Vegas's premier active adult communities. These age-restricted developments offer extensive amenities including golf courses, recreation centers, swimming pools, and numerous clubs and activities. Properties range from single-family homes to condos, all designed for low-maintenance living.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Sun City Summerlin, located in the heart of Summerlin, features over 7,700 homes and extensive amenities including three golf courses, multiple recreation centers, and over 100 clubs and organizations. Properties typically range from $300,000 to over $1 million, offering options for various budgets. The community's active lifestyle, combined with Summerlin's excellent location, makes it highly desirable for retirees seeking an active retirement.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Del Webb Communities</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Del Webb communities in Las Vegas, including Del Webb at Lake Las Vegas and other locations, offer resort-style living for active adults. These communities feature state-of-the-art amenities, beautiful clubhouses, and extensive social programming designed to keep residents active and engaged.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Del Webb communities typically offer single-family homes with modern floor plans designed for active lifestyles. Many homes feature single-level living, energy-efficient features, and low-maintenance landscaping. The communities' extensive amenities, including fitness centers, pools, and social spaces, create a resort-like atmosphere perfect for enjoying retirement.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Henderson Active Adult Communities</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Henderson offers numerous active adult communities, many of which are age-restricted or age-targeted. These communities provide excellent value, beautiful amenities, and convenient access to shopping, dining, and healthcare facilities. Henderson's lower property taxes and excellent city services make it particularly attractive to retirees.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Communities like Solera at Anthem and others in the Green Valley area offer active adult living with golf courses, recreation centers, and vibrant social environments. Properties in these communities typically range from $400,000 to $1.5 million, offering excellent value compared to similar communities in other markets. Henderson's proximity to Las Vegas while maintaining a more relaxed atmosphere appeals to many retirees.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Luxury Retirement Options</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							For retirees seeking luxury living, Las Vegas offers upscale communities like The Ridges, Red Rock Country Club, and Anthem Country Club. While not exclusively age-restricted, these communities attract many retirees seeking luxury amenities, beautiful homes, and active lifestyles.
						</p>
						<p class="text-gray-700 leading-relaxed">
							These luxury communities offer world-class golf courses, clubhouses, and amenities that rival high-end resorts. Properties typically range from $1 million to over $10 million, featuring custom homes, premium finishes, and stunning views. The communities' active social scenes, combined with luxury amenities, create an ideal environment for retirees who want to enjoy their retirement in style.
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
					What Specialized Senior Housing Services Do We Provide?
				</h2>
				<p class="text-lg text-gray-700 mb-8 leading-relaxed">
					Our specialized senior housing services include downsizing consultation to help you transition to smaller homes, community evaluation to understand rules and amenities, financial planning integration to fit home purchases into retirement plans, and relocation services for retirees moving to Las Vegas. These comprehensive services address the unique needs of buyers 50 and older.
				</p>
				
				<div class="space-y-8">
					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">Downsizing Consultation</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Downsizing represents a significant life transition, and we provide comprehensive guidance throughout the process. We help you evaluate your current home, determine your space needs, and identify properties that match your lifestyle. Our downsizing services include helping you understand what to look for in a smaller home, how to maximize space, and what features are most important for your retirement years.
						</p>
						<p class="text-gray-700 leading-relaxed">
							We work with you to understand your priorities—whether that's single-level living, low-maintenance landscaping, proximity to amenities, or specific community features. We'll help you evaluate different floor plans, understand HOA fees and what they cover, and assess how different communities match your lifestyle preferences. Our goal is to help you find a home that enhances your retirement rather than limiting it.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">Community Evaluation</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Age-restricted and active adult communities each have unique characteristics, rules, and amenities. We help you understand community rules, HOA fees, amenities, and social environments to ensure you find a community that matches your lifestyle and preferences.
						</p>
						<p class="text-gray-700 leading-relaxed">
							We evaluate everything from community financial health to social activities and resident demographics. We'll help you understand age restrictions, guest policies, pet rules, and other important community guidelines. We also assess the quality and maintenance of amenities, the strength of the HOA, and the overall community atmosphere to ensure you're making an informed decision.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">Financial Planning Integration</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Real estate decisions in retirement require careful financial consideration. We work with you to understand how your home purchase fits into your overall retirement plan, including considerations like property taxes, HOA fees, maintenance costs, and potential resale value.
						</p>
						<p class="text-gray-700 leading-relaxed">
							We help you evaluate the total cost of ownership, including not just the purchase price but ongoing expenses like HOA fees, property taxes, insurance, and maintenance. We'll discuss how different communities and property types affect your monthly expenses and help you understand the financial implications of various options. Our goal is to help you make a decision that supports your long-term financial security.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">Relocation Services</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							For retirees relocating to Las Vegas, we provide comprehensive relocation services including neighborhood orientation, local service provider recommendations, and assistance understanding Las Vegas's unique characteristics.
						</p>
						<p class="text-gray-700 leading-relaxed">
							We help you understand Las Vegas's climate, healthcare facilities, transportation options, and lifestyle amenities. We'll provide recommendations for healthcare providers, service providers, and local businesses that can help you settle into your new community. Our goal is to make your relocation as smooth as possible, helping you quickly feel at home in Las Vegas.
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
					What Are Key Considerations for Senior Homebuyers?
				</h2>
				<p class="text-lg text-gray-700 mb-8 leading-relaxed">
					Key considerations for senior homebuyers include single-level living for accessibility and convenience, low-maintenance features to reduce upkeep responsibilities, healthcare access proximity to quality medical facilities, and social opportunities through active adult communities. Understanding these factors helps senior buyers find homes that enhance their retirement lifestyle.
				</p>
				
				<div class="space-y-6">
					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Single-Level Living</h3>
						<p class="text-gray-700 leading-relaxed">
							Many senior homebuyers prioritize single-level living to avoid stairs and ensure accessibility. Las Vegas offers numerous single-story homes and communities, from ranch-style homes in established neighborhoods to modern single-level designs in new communities. We help you identify properties that offer the accessibility and convenience you need.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Low-Maintenance Features</h3>
						<p class="text-gray-700 leading-relaxed">
							Retirement often means less time and energy for home maintenance. We help you find properties with low-maintenance features like desert landscaping, energy-efficient systems, and newer construction that requires less upkeep. Many active adult communities include exterior maintenance in HOA fees, further reducing your maintenance responsibilities.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Healthcare Access</h3>
						<p class="text-gray-700 leading-relaxed">
							Proximity to quality healthcare facilities becomes increasingly important in retirement. Las Vegas offers excellent healthcare options, and we help you understand healthcare access from different neighborhoods. We'll discuss hospitals, medical centers, and specialty care facilities to ensure your new home provides convenient access to the healthcare services you need.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Social Opportunities</h3>
						<p class="text-gray-700 leading-relaxed">
							Active adult communities offer extensive social opportunities through clubs, activities, and community events. We help you understand the social environment of different communities, from golf-focused communities to those emphasizing arts, fitness, or social activities. Finding a community with social opportunities that match your interests is crucial for an enjoyable retirement.
						</p>
					</div>
				</div>
			</section>

			<div
				id="cta"
				class="bg-primary-600 rounded-2xl p-8 md:p-12 text-center text-white scroll-mt-24"
			>
				<h2 class="text-3xl md:text-4xl font-bold mb-4">Find Your Perfect Retirement Home in Las Vegas</h2>
				<p class="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
					Let us help you navigate Las Vegas's senior housing market and find the perfect home for your retirement years. Contact us today to schedule a consultation.
				</p>
				<div class="flex flex-col sm:flex-row gap-4 justify-center">
					<a href="/contact" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">
						Schedule Consultation
					</a>
					<a href="/properties" class="btn-primary bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600">
						View Available Properties
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

