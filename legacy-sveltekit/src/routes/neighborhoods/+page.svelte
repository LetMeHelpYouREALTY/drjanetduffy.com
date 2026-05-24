<script>
	import { MapPin, DollarSign, Award } from 'lucide-svelte';
	
	const neighborhoods = [
		{
			name: 'West Summerlin',
			description: 'Master-planned community with luxury homes and world-class amenities',
			features: ['Golf Courses', 'Parks & Trails', 'Shopping Centers', 'Top-Rated Schools'],
			avgPrice: '$850K',
			zipCode: '89138',
			href: '/properties?neighborhood=west-summerlin'
		},
		{
			name: 'The Ridges',
			description: 'Exclusive gated community with stunning mountain views',
			features: ['Gated Security', 'Mountain Views', 'Luxury Estates', 'Private Amenities'],
			avgPrice: '$1.2M',
			zipCode: '89144',
			href: '/properties?neighborhood=the-ridges'
		},
		{
			name: 'Red Rock Country Club',
			description: 'Luxury golf community with resort-style living',
			features: ['Championship Golf', 'Resort Amenities', 'Fine Dining', 'Spa & Fitness'],
			avgPrice: '$950K',
			zipCode: '89135',
			href: '/properties?neighborhood=red-rock'
		},
		{
			name: 'Henderson',
			description: 'Family-friendly community with excellent schools and parks',
			features: ['Excellent Schools', 'Family Parks', 'Safe Neighborhoods', 'Growing Economy'],
			avgPrice: '$550K',
			zipCode: '89014',
			href: '/properties?neighborhood=henderson'
		},
		{
			name: 'Green Valley',
			description: 'Established community with mature trees and established neighborhoods',
			features: ['Mature Trees', 'Established Area', 'Community Centers', 'Great Location'],
			avgPrice: '$600K',
			zipCode: '89014',
			href: '/properties?neighborhood=green-valley'
		},
		{
			name: 'Seven Hills',
			description: 'Upscale community with custom homes and scenic views',
			features: ['Custom Homes', 'Scenic Views', 'Upscale Living', 'Private Estates'],
			avgPrice: '$750K',
			zipCode: '89113',
			href: '/properties?neighborhood=seven-hills'
		}
	];
</script>

<svelte:head>
	<title>Popular Neighborhoods in Las Vegas | Dr. Janet Duffy REALTOR®</title>
	<meta name="description" content="Discover the best places to live in Las Vegas. Explore popular neighborhoods including West Summerlin, The Ridges, Red Rock Country Club, Henderson, Green Valley, and Seven Hills." />
	
	<!-- Structured Data -->
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		"name": "Popular Neighborhoods in Las Vegas",
		"description": "Discover the best places to live in Las Vegas",
		"url": "https://www.drjanetduffy.com/neighborhoods"
	}
	</script>
</svelte:head>

<!-- Hero Section -->
<section class="hero-section bg-gradient-to-b from-primary-50 to-white">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-7xl mx-auto py-12 md:py-16">
			<div class="text-center mb-8">
				<h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
					Explore the Best Las Vegas Neighborhoods to Live
				</h1>
				<p class="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
					Discover the best places to live in Las Vegas
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Neighborhoods Grid -->
<section class="section bg-white">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-7xl mx-auto">
			<div class="mb-12 text-center">
				<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Are the Best Las Vegas Neighborhoods to Live In?</h2>
				<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto">
					The best Las Vegas neighborhoods to live in include West Summerlin with luxury homes and world-class amenities, The Ridges with exclusive gated communities and mountain views, Red Rock Country Club with resort-style living, Henderson with family-friendly communities and excellent schools, Green Valley with established neighborhoods, and Seven Hills with upscale custom homes and scenic views.
				</p>
			</div>
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
				{#each neighborhoods as neighborhood}
					<div class="card hover:shadow-xl transition-all duration-300">
						<div class="flex items-start justify-between mb-4">
							<div class="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg">
								<MapPin class="w-6 h-6 text-primary-600" />
							</div>
							<span class="text-sm font-semibold text-primary-600">{neighborhood.zipCode}</span>
						</div>
						<h3 class="text-xl font-bold text-gray-900 mb-2">{neighborhood.name}</h3>
						<p class="text-gray-600 mb-4">{neighborhood.description}</p>
						<div class="mb-4">
							<div class="flex items-center gap-2 mb-2">
								<DollarSign class="w-4 h-4 text-gray-500" />
								<span class="text-sm font-semibold text-gray-900">Avg. Price: {neighborhood.avgPrice}</span>
							</div>
							<ul class="space-y-1 mb-4">
								{#each neighborhood.features.slice(0, 3) as feature}
									<li class="flex items-center gap-2 text-sm text-gray-600">
										<Award class="w-3 h-3 text-primary-500" />
										{feature}
									</li>
								{/each}
							</ul>
						</div>
						<a href={neighborhood.href} class="link-primary font-semibold inline-flex items-center gap-2">
							View Properties →
						</a>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="section bg-primary-600 text-white">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Explore Las Vegas Neighborhoods and Find Your Perfect Community?</h2>
			<p class="text-lg text-white text-opacity-90 mb-8">Let Dr. Janet Duffy help you find the perfect community for your lifestyle. With deep knowledge of Las Vegas neighborhoods, local amenities, schools, and market conditions, I'll guide you to the ideal area that matches your needs and preferences.</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/contact" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">Schedule a Tour</a>
				<a href="/properties" class="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">View All Properties</a>
			</div>
		</div>
	</div>
</section>

