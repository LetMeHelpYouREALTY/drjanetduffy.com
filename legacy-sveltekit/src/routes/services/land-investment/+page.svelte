<script lang="ts">
	import { MapPin, TrendingUp, DollarSign, CheckCircle, Home, BarChart3 } from 'lucide-svelte';

	interface TocItem {
		id: string;
		label: string;
	}

	const tocItems: TocItem[] = [
		{ id: 'overview', label: 'Overview' },
		{ id: 'opportunities', label: 'Investment Opportunities' },
		{ id: 'markets', label: 'Land Markets' },
		{ id: 'services', label: 'Land Services' },
		{ id: 'considerations', label: 'Key Considerations' },
		{ id: 'cta', label: 'Discuss Land Strategy' }
	];
</script>

<svelte:head>
	<title>
		Land Investment Services in Las Vegas | Las Vegas Luxury &amp; Relocation REALTOR®
	</title>
	<meta
		name="description"
		content="Land investment and development services from Las Vegas Luxury &amp; Relocation REALTOR® Dr. Janet Duffy, supporting residential, commercial, and rural land strategies."
	/>
	<meta
		name="keywords"
		content="Las Vegas Luxury &amp; Relocation REALTOR, land investment Las Vegas, land for sale Las Vegas, land development"
	/>

	<meta
		property="og:title"
		content="Land Investment Services in Las Vegas | Las Vegas Luxury &amp; Relocation REALTOR®"
	/>
	<meta
		property="og:description"
		content="Strategic guidance for acquiring, entitling, and developing land across the Las Vegas Valley."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.drjanetduffy.com/services/land-investment" />
	<meta property="og:site_name" content="Las Vegas Luxury &amp; Relocation REALTOR" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="twitter:title"
		content="Land Investment Services in Las Vegas | Las Vegas Luxury &amp; Relocation REALTOR®"
	/>
	<meta
		name="twitter:description"
		content="Land value, zoning, and infrastructure analysis tailored to Las Vegas builders and investors."
	/>

	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "WebPage",
			"name": "Land Investment Services in Las Vegas",
			"description": "Land investment services for Las Vegas, including evaluation, development planning, and investment analysis for residential, commercial, and rural parcels.",
			"url": "https://www.drjanetduffy.com/services/land-investment",
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
				Land Investment Services in Las Vegas
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Become an expert in all areas of land real estate. Expert land acquisition and development consulting throughout Las Vegas and surrounding areas, helping investors and developers navigate land transactions successfully.
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
					What Land Investment Opportunities Are Available in Las Vegas?
				</h2>
				
				<p class="text-lg text-gray-700 mb-6 leading-relaxed">
					Las Vegas and surrounding areas offer diverse land investment opportunities, from residential development sites to commercial land to agricultural properties. Land investments require specialized expertise, understanding of development processes, and knowledge of regulatory requirements. Our land investment services help investors and developers navigate land transactions successfully through residential development guidance, commercial land services, investment analysis, and expert value assessment.
				</p>

				<div class="grid md:grid-cols-2 gap-6 mb-8">
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<MapPin class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Residential Development</h3>
							<p class="text-gray-600">Expert guidance for residential land development, from site selection to development planning.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<BarChart3 class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Commercial Land</h3>
							<p class="text-gray-600">Expert services for commercial land acquisition and development opportunities.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<TrendingUp class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Investment Analysis</h3>
							<p class="text-gray-600">Comprehensive analysis of land investment opportunities and development potential.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<DollarSign class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Value Assessment</h3>
							<p class="text-gray-600">Expert evaluation of land values, considering location, development potential, and market conditions.</p>
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
					Which Land Markets Exist Throughout Las Vegas?
				</h2>
				<p class="text-lg text-gray-700 mb-8 leading-relaxed">
					Land markets throughout Las Vegas include residential development land in expanding areas like North Las Vegas and Henderson, commercial development land for retail, office, and industrial uses, and rural and agricultural land in surrounding areas. Each market offers unique investment opportunities and requires specialized evaluation expertise.
				</p>
				
				<div class="space-y-6">
					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Residential Development Land</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Las Vegas's growth creates demand for residential development land, particularly in expanding areas like North Las Vegas, Henderson, and surrounding communities. Residential development land ranges from small lots to large parcels suitable for master-planned communities. We help developers identify development opportunities and evaluate land for residential development.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Residential development land requires evaluation of zoning, utilities, access, and development potential. We'll help you understand development requirements, assess development costs, and evaluate land for residential development potential. Our goal is to help you identify land that offers good development opportunities.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Commercial Development Land</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Commercial development land is available throughout Las Vegas, from retail sites to office developments to industrial properties. Commercial land values vary significantly based on location, zoning, and development potential. We help investors and developers identify commercial land opportunities and evaluate development potential.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Commercial land requires evaluation of location, zoning, access, and market demand. We'll help you understand commercial development requirements, assess development potential, and evaluate land for commercial use. Our goal is to help you identify commercial land that offers good development opportunities.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Rural & Agricultural Land</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Las Vegas's surrounding areas include rural and agricultural land, offering opportunities for various uses. Rural land can be used for agriculture, recreation, or future development. We help investors understand rural land opportunities and evaluate land for various uses.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Rural land requires evaluation of water rights, access, zoning, and potential uses. We'll help you understand rural land characteristics, assess development potential, and evaluate land for various uses. Our goal is to help you identify rural land that matches your investment goals.
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
					What Land Investment Services Do We Provide?
				</h2>
				<p class="text-lg text-gray-700 mb-8 leading-relaxed">
					Our land investment services include land evaluation assessing location, zoning, utilities, and development potential, development planning guidance for site design and regulatory approvals, and investment analysis evaluating potential returns and development costs. These comprehensive services help investors and developers make informed land investment decisions in Las Vegas.
				</p>
				
				<div class="space-y-8">
					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">Land Evaluation</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Land evaluation requires understanding location, zoning, utilities, access, and development potential. We help investors and developers evaluate land, assess development potential, and understand land values. This includes evaluating zoning, utilities, access, and market conditions.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Our land evaluation services include site analysis, zoning review, utility assessment, and development potential evaluation. We'll help you understand land characteristics, assess development requirements, and evaluate land values. Our goal is to help you make informed land investment decisions.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">Development Planning</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Land development requires careful planning, from site design to regulatory approvals. We help developers understand development processes, navigate regulatory requirements, and plan successful developments. This includes understanding zoning, permits, utilities, and development costs.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Our development planning services include site planning guidance, regulatory navigation, and development cost estimation. We'll help you understand development requirements, assess development feasibility, and plan successful developments. Our goal is to help you navigate development processes successfully.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">Investment Analysis</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Land investments require analysis of potential returns, development costs, and market conditions. We help investors analyze land investment opportunities, assess development potential, and evaluate returns. This includes evaluating land values, development costs, and potential appreciation.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Our investment analysis includes land value assessment, development cost estimation, and return analysis. We'll help you understand land investment potential, assess risks, and evaluate returns. Our goal is to help you make informed land investment decisions.
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
					What Are Key Considerations for Land Investments?
				</h2>
				<p class="text-lg text-gray-700 mb-8 leading-relaxed">
					Key considerations for land investments include zoning and development rights determining permitted uses and development potential, utilities and infrastructure access significantly affecting land values, and market conditions understanding how trends and economic factors affect land investment potential. Understanding these factors helps investors evaluate land opportunities effectively.
				</p>
				
				<div class="space-y-6">
					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Zoning & Development Rights</h3>
						<p class="text-gray-700 leading-relaxed">
							Understanding zoning and development rights is crucial for land investments. We help investors understand zoning regulations, permitted uses, and development potential. This includes evaluating zoning compliance and understanding how zoning affects land values and development potential.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Utilities & Infrastructure</h3>
						<p class="text-gray-700 leading-relaxed">
							Access to utilities and infrastructure significantly affects land values and development potential. We help investors understand utility availability, infrastructure access, and development requirements. This includes evaluating utility costs and infrastructure needs.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Market Conditions</h3>
						<p class="text-gray-700 leading-relaxed">
							Land values are affected by market conditions, development trends, and economic factors. We help investors understand land market conditions, assess market trends, and evaluate land values. This includes understanding how market conditions affect land investment potential.
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
					Land Investment Services in Las Vegas
				</h2>
				<p class="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
					Let us help you with your land investment needs. Contact us today to schedule a consultation.
				</p>
				<div class="flex flex-col sm:flex-row gap-4 justify-center">
					<a href="/contact" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">
						Schedule Consultation
					</a>
					<a href="/properties" class="btn-primary bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600">
						View Available Land
					</a>
				</div>
			</section>
		</div>
	</div>
</section>

