<script lang="ts">
	import { Home, Leaf, TrendingUp, CheckCircle, Sun, Droplet } from 'lucide-svelte';

	interface TocItem {
		id: string;
		label: string;
	}

	const tocItems: TocItem[] = [
		{ id: 'overview', label: 'Overview' },
		{ id: 'options', label: 'Sustainable Options' },
		{ id: 'solar', label: 'Solar Energy' },
		{ id: 'water', label: 'Water Efficiency' },
		{ id: 'energy', label: 'Energy Efficiency' },
		{ id: 'benefits', label: 'Benefits' },
		{ id: 'cta', label: 'Explore Eco-Friendly Homes' }
	];
</script>

<svelte:head>
	<title>
		Eco-Friendly Homes in Las Vegas | Las Vegas Luxury &amp; Relocation REALTOR®
	</title>
	<meta
		name="description"
		content="Eco-friendly and energy-efficient home services from Las Vegas Luxury &amp; Relocation REALTOR® Dr. Janet Duffy, specializing in solar, water-wise, and sustainable properties."
	/>
	<meta
		name="keywords"
		content="Las Vegas Luxury &amp; Relocation REALTOR, eco-friendly homes Las Vegas, sustainable real estate, solar homes Las Vegas, green homes"
	/>

	<meta
		property="og:title"
		content="Eco-Friendly Homes in Las Vegas | Las Vegas Luxury &amp; Relocation REALTOR®"
	/>
	<meta
		property="og:description"
		content="Guidance on buying and selling solar, water-efficient, and energy-smart homes tailored to Las Vegas’s desert climate."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.drjanetduffy.com/services/eco-friendly-homes" />
	<meta property="og:site_name" content="Las Vegas Luxury &amp; Relocation REALTOR" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="twitter:title"
		content="Eco-Friendly Homes in Las Vegas | Las Vegas Luxury &amp; Relocation REALTOR®"
	/>
	<meta
		name="twitter:description"
		content="Sustainable housing strategies that lower utility bills and increase appeal for eco-minded Las Vegas buyers."
	/>

	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "WebPage",
			"name": "Eco-Friendly Homes in Las Vegas",
			"description": "Eco-friendly and sustainable housing services focused on solar, water-efficient, and energy-efficient homes in Las Vegas.",
			"url": "https://www.drjanetduffy.com/services/eco-friendly-homes",
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
				Eco-Friendly Homes in Las Vegas
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Differentiate your business by mastering sustainable housing, appealing to eco-minded buyers and boosting property value potential. Expert services for energy-efficient and environmentally conscious properties in Las Vegas.
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
				id="options"
				class="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-12 scroll-mt-24"
				aria-labelledby="options-heading"
			>
				<h2
					id="options-heading"
					class="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
				>
					What Sustainable Housing Options Are Available in Las Vegas?
				</h2>
				
				<p class="text-lg text-gray-700 mb-6 leading-relaxed">
					Las Vegas's desert climate creates unique opportunities and challenges for sustainable housing. From solar energy systems to water-efficient landscaping, eco-friendly features can significantly reduce utility costs while appealing to environmentally conscious buyers. Our services help buyers and sellers understand and maximize the value of sustainable features through solar energy expertise, water efficiency understanding, energy efficiency knowledge, and value enhancement strategies.
				</p>

				<div class="grid md:grid-cols-2 gap-6 mb-8">
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<Sun class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Solar Energy Systems</h3>
							<p class="text-gray-600">Expertise in solar-powered homes and understanding solar system value and benefits in Las Vegas.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<Droplet class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Water Efficiency</h3>
							<p class="text-gray-600">Understanding desert landscaping, water-efficient systems, and sustainable water use in Las Vegas homes.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<Leaf class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Energy Efficiency</h3>
							<p class="text-gray-600">Expertise in energy-efficient features, insulation, and HVAC systems for Las Vegas's climate.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<TrendingUp class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Value Enhancement</h3>
							<p class="text-gray-600">Understanding how sustainable features affect property values and appeal to buyers.</p>
						</div>
					</div>
				</div>
			</section>

			<section
				id="solar"
				class="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-12 scroll-mt-24"
				aria-labelledby="solar-heading"
			>
				<h2
					id="solar-heading"
					class="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
				>
					How Does Solar Energy Work in Las Vegas Homes?
				</h2>
				
				<p class="text-lg text-gray-700 mb-8 leading-relaxed">
					Las Vegas's abundant sunshine makes solar energy particularly valuable. Solar-powered homes can significantly reduce or eliminate electricity costs, making them highly attractive to buyers. Understanding solar systems, their value, and how they affect property values is essential for both buyers and sellers. We provide solar system evaluation and help you understand solar property value in the Las Vegas market.
				</p>

				<div class="space-y-6">
					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Solar System Evaluation</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							We help buyers and sellers understand solar systems, including system size, age, condition, and energy production. We'll evaluate whether systems are owned or leased, understand warranty coverage, and assess system value. This includes understanding net metering, energy credits, and how solar systems affect utility costs.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Solar systems can add significant value to Las Vegas properties, but understanding system details is crucial. We'll help you understand system capacity, expected energy production, and how systems affect property values. We'll also help you understand solar leases, purchase options, and how different solar arrangements affect property transactions.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Solar Property Value</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Solar systems can significantly increase property values, but understanding this value requires market knowledge. We help sellers understand how solar systems affect property values and help buyers evaluate solar properties. This includes understanding energy savings, system value, and market appeal of solar features.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Solar-powered homes often command premium prices in Las Vegas, reflecting energy savings and environmental appeal. We'll help you understand how solar systems affect property values, what buyers value in solar properties, and how to position solar features in marketing. Our goal is to help you maximize the value of solar features.
						</p>
					</div>
				</div>
			</section>

			<section
				id="water"
				class="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-12 scroll-mt-24"
				aria-labelledby="water-heading"
			>
				<h2
					id="water-heading"
					class="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
				>
					How Important Is Water Efficiency in Las Vegas Homes?
				</h2>
				<p class="text-lg text-gray-700 mb-8 leading-relaxed">
					Water efficiency is crucial in Las Vegas's desert climate. Desert landscaping and water-efficient systems significantly reduce water use and maintenance costs while creating beautiful outdoor spaces. Understanding water efficiency features helps buyers reduce utility costs and sellers highlight valuable property features.
				</p>
				
				<div class="space-y-6">
					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Desert Landscaping</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Desert landscaping, or xeriscaping, is essential for sustainable living in Las Vegas. Water-efficient landscaping significantly reduces water use and maintenance while creating beautiful outdoor spaces. We help buyers and sellers understand desert landscaping, its benefits, and how it affects property values.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Desert landscaping has become increasingly popular in Las Vegas, reflecting both water conservation and aesthetic preferences. We'll help you understand desert landscaping options, maintenance requirements, and how landscaping affects property appeal and values. Well-designed desert landscaping can enhance property values while reducing water costs.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Water-Efficient Systems</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Water-efficient appliances, fixtures, and irrigation systems can significantly reduce water use in Las Vegas homes. We help buyers understand water-efficient features and help sellers highlight these features. This includes understanding low-flow fixtures, efficient irrigation, and water-saving appliances.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Water efficiency is increasingly important in Las Vegas, and water-efficient features can appeal to environmentally conscious buyers. We'll help you understand water-efficient features, their benefits, and how they affect property values. Water-efficient homes can reduce utility costs while appealing to buyers who value sustainability.
						</p>
					</div>
				</div>
			</section>

			<section
				id="energy"
				class="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-12 scroll-mt-24"
				aria-labelledby="energy-heading"
			>
				<h2
					id="energy-heading"
					class="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
				>
					What Energy Efficiency Features Should Las Vegas Homebuyers Look For?
				</h2>
				<p class="text-lg text-gray-700 mb-8 leading-relaxed">
					Energy efficiency features for Las Vegas homes include efficient HVAC systems crucial for hot climates, proper insulation and energy-efficient windows to reduce cooling costs, and energy-efficient appliances to reduce utility costs. These features significantly reduce utility expenses while appealing to environmentally conscious buyers.
				</p>
				
				<div class="space-y-6">
					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">HVAC Systems</h3>
						<p class="text-gray-700 leading-relaxed">
							Efficient HVAC systems are crucial in Las Vegas's hot climate. Energy-efficient air conditioning can significantly reduce utility costs while maintaining comfort. We help buyers understand HVAC efficiency ratings and help sellers highlight efficient systems. This includes understanding SEER ratings, system age, and efficiency features.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Insulation & Windows</h3>
						<p class="text-gray-700 leading-relaxed">
							Proper insulation and energy-efficient windows can significantly reduce cooling costs in Las Vegas. We help buyers understand insulation and window efficiency and help sellers highlight these features. This includes understanding R-values, window ratings, and how these features affect energy costs.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Energy-Efficient Appliances</h3>
						<p class="text-gray-700 leading-relaxed">
							Energy-efficient appliances can reduce utility costs while appealing to environmentally conscious buyers. We help buyers understand appliance efficiency and help sellers highlight efficient appliances. This includes understanding Energy Star ratings and how efficient appliances affect property values.
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
					What Are the Benefits of Eco-Friendly Homes?
				</h2>
				<p class="text-lg text-gray-700 mb-8 leading-relaxed">
					Benefits of eco-friendly homes include reduced utility costs through energy-efficient and solar-powered systems, environmental benefits reducing impact while providing sustainable living, increased property value appealing to environmentally conscious buyers, and market appeal as eco-friendly features attract growing numbers of buyers in Las Vegas.
				</p>
				
				<div class="grid md:grid-cols-2 gap-6">
					<div class="flex items-start gap-4">
						<CheckCircle class="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Reduced Utility Costs</h3>
							<p class="text-gray-700">Energy-efficient and solar-powered homes can significantly reduce or eliminate utility costs, providing long-term savings.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<CheckCircle class="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Environmental Benefits</h3>
							<p class="text-gray-700">Eco-friendly homes reduce environmental impact while providing comfortable, sustainable living.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<CheckCircle class="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Increased Property Value</h3>
							<p class="text-gray-700">Sustainable features can increase property values and appeal to environmentally conscious buyers.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<CheckCircle class="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Market Appeal</h3>
							<p class="text-gray-700">Eco-friendly features appeal to growing numbers of environmentally conscious buyers in Las Vegas.</p>
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
					Eco-Friendly Home Services in Las Vegas
				</h2>
				<p class="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
					Let us help you with eco-friendly and sustainable properties. Contact us today to schedule a consultation.
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

