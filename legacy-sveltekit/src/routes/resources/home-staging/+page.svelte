<script>
	import { Home, CheckCircle, Camera, Sparkles, TrendingUp, DollarSign } from 'lucide-svelte';
	
	const stagingTips = [
		{
			category: 'Curb Appeal',
			icon: Home,
			tips: [
				'Power wash exterior and walkways',
				'Fresh paint on front door',
				'Landscaping and lawn maintenance',
				'Clean windows and gutters',
				'Add potted plants or flowers'
			]
		},
		{
			category: 'Interior Staging',
			icon: Sparkles,
			tips: [
				'Declutter and remove personal items',
				'Deep clean throughout',
				'Neutral paint colors',
				'Rearrange furniture for flow',
				'Add fresh flowers or plants'
			]
		},
		{
			category: 'Kitchen & Bathrooms',
			icon: Camera,
			tips: [
				'Clean all surfaces thoroughly',
				'Remove countertop clutter',
				'Update hardware if needed',
				'Fresh towels and linens',
				'Fix any leaks or issues'
			]
		},
		{
			category: 'Lighting & Ambiance',
			icon: Sparkles,
			tips: [
				'Maximize natural light',
				'Update light bulbs to bright white',
				'Open curtains and blinds',
				'Add lamps for warmth',
				'Ensure all lights work'
			]
		}
	];
	
	const stagingBenefits = [
		{ stat: '73%', description: 'Faster sale with staging' },
		{ stat: '10-20%', description: 'Higher sale price potential' },
		{ stat: '90%', description: 'Buyers prefer staged homes' },
		{ stat: '23 Days', description: 'Average time on market reduction' }
	];
</script>

<svelte:head>
	<title>Home Staging Guide | Las Vegas | Dr. Janet Duffy REALTOR®</title>
	<meta name="description" content="Complete home staging guide for selling your Las Vegas home. Tips to maximize appeal and sale price with professional staging." />
</svelte:head>

<section class="section bg-gradient-to-b from-white via-gray-50 to-white">
	<div class="container-premium">
		<div class="text-center mb-16">
			<h1 class="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900">
				Complete Home Staging Guide for Las Vegas Sellers
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Maximize your home's appeal and sale price with professional staging tips
			</p>
		</div>

		<!-- Staging Benefits -->
		<div class="grid md:grid-cols-4 gap-6 mb-16">
			{#each stagingBenefits as benefit}
				<div class="bg-white rounded-xl p-6 shadow-lg text-center">
					<div class="text-3xl font-bold text-primary-600 mb-2">{benefit.stat}</div>
					<p class="text-gray-600 text-sm">{benefit.description}</p>
				</div>
			{/each}
		</div>

		<!-- Staging Tips by Category -->
		<div class="mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">What Are the Essential Home Staging Tips for Las Vegas Sellers?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				Essential home staging tips for Las Vegas sellers include curb appeal improvements, interior staging with decluttering and neutral colors, kitchen and bathroom updates, and lighting enhancements that maximize home appeal, increase sale price potential, and reduce time on market.
			</p>
		</div>

		<div class="space-y-8 mb-16">
			{#each stagingTips as category}
				<div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
					<div class="flex items-center gap-4 mb-6">
						<div class="flex-shrink-0 w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center">
							<svelte:component this={category.icon} class="w-8 h-8 text-primary-600" />
						</div>
						<h3 class="text-2xl font-bold text-gray-900">{category.category}</h3>
					</div>
					<ul class="grid md:grid-cols-2 gap-3">
						{#each category.tips as tip}
							<li class="flex items-start gap-3">
								<CheckCircle class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
								<span class="text-gray-700">{tip}</span>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>

		<!-- ROI Section -->
		<div class="mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">What Is the Return on Investment for Home Staging in Las Vegas?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				Home staging ROI in Las Vegas shows professional staging typically costs 1-3% of home value but can increase sale price by 10-20%, meaning staging often pays for itself and generates additional profit. For example, a $500K home with $10K staging investment could sell for $550K, resulting in a $40K net gain.
			</p>
		</div>

		<div class="grid md:grid-cols-2 gap-12 mb-16">
			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
				<h3 class="text-2xl font-bold text-gray-900 mb-6">Staging ROI Analysis</h3>
				<p class="text-gray-700 leading-relaxed mb-4">
					Professional staging typically costs 1-3% of the home's value but can increase sale price by 10-20%. This means staging often pays for itself and then some.
				</p>
				<div class="mt-6 p-4 bg-primary-100 rounded-lg">
					<p class="text-sm text-gray-700">
						<strong>Example:</strong> A $500K home with $10K staging investment could sell for $550K (10% increase), resulting in a $40K net gain.
					</p>
				</div>
			</div>

			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
				<h3 class="text-2xl font-bold text-gray-900 mb-6">Professional vs. DIY Staging</h3>
				<div class="space-y-4">
					<div>
						<h3 class="font-bold text-gray-900 mb-2">Professional Staging</h3>
						<ul class="text-sm text-gray-700 space-y-1">
							<li>• Expert design and placement</li>
							<li>• Access to professional furniture</li>
							<li>• Higher sale price potential</li>
							<li>• Less stress for seller</li>
						</ul>
					</div>
					<div>
						<h3 class="font-bold text-gray-900 mb-2">DIY Staging</h3>
						<ul class="text-sm text-gray-700 space-y-1">
							<li>• Lower upfront cost</li>
							<li>• Personal touch</li>
							<li>• Requires time and effort</li>
							<li>• May need professional consultation</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<!-- CTA Section -->
		<div class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-center text-white">
			<h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Stage Your Las Vegas Home for Maximum Sale Price?</h2>
			<p class="text-lg text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
				I can provide staging recommendations and connect you with professional stagers to maximize your sale price. With deep knowledge of Las Vegas home staging, market appeal, and seller strategies, I'll guide you through every step of preparing your home for sale.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/contact" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">Get Staging Advice</a>
				<a href="/services/seller-representation" class="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">Seller Services</a>
			</div>
		</div>
	</div>
</section>

