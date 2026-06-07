<script lang="ts">
import SEO from '$lib/components/SEO.svelte';
import { createFAQSchema, createBreadcrumbSchema } from '$lib/utils/schema';

// Hyperlocal content for GEO optimization - 2026 best practice
const breadcrumbSchema = createBreadcrumbSchema([
	{ name: 'Home', url: 'https://drjanduffy.com' },
	{ name: 'Summerlin Neighborhoods' }
]);

// FAQ optimized for AEO - answers common Summerlin questions
const faqData = [
	{
		question: 'What makes Summerlin a desirable place to live in Las Vegas?',
		answer: 'Summerlin is a master-planned community offering luxury living with top-rated schools, world-class golf courses, extensive parks and trails, upscale shopping at Downtown Summerlin, fine dining, and proximity to Red Rock Canyon. It features excellent safety, well-maintained neighborhoods, and strong property values.'
	},
	{
		question: 'What are the best zip codes in West Summerlin?',
		answer: 'The premier West Summerlin zip codes are 89138 (includes The Ridges, The Summit, Red Rock Country Club), 89144 (Summerlin West, Sun City Summerlin, Canyon Gate), and 89135 (Summerlin South, Red Rock, Mountains Edge). Each offers luxury homes with stunning views and premium amenities.'
	},
	{
		question: 'What is the average home price in Summerlin?',
		answer: 'Summerlin home prices range from approximately $400,000 for townhomes to over $5 million for luxury estates. The average single-family home in West Summerlin typically ranges from $600,000 to $1.5 million, with premium properties in The Ridges and Red Rock Country Club commanding higher prices.'
	},
	{
		question: 'Are Summerlin schools highly rated?',
		answer: 'Yes, Summerlin is known for having some of Nevada\'s top-rated schools. The area includes highly-ranked elementary, middle, and high schools within the Clark County School District, plus private school options. Schools like Palo Verde High School and various elementary schools consistently receive excellent ratings.'
	},
	{
		question: 'What amenities are available in Summerlin?',
		answer: 'Summerlin offers Downtown Summerlin (outdoor mall with 125+ shops and restaurants), Red Rock Casino Resort, over 250 parks, 150+ miles of trails, multiple golf courses, community centers, sports facilities, medical centers, and proximity to Red Rock Canyon National Conservation Area for outdoor recreation.'
	},
	{
		question: 'Is Summerlin good for California relocations?',
		answer: 'Summerlin is ideal for California relocations, especially from Southern California. It offers similar lifestyle amenities, year-round sunshine, no state income tax, lower cost of living, newer homes, excellent schools, and is just 4 hours from Los Angeles. Many California professionals and retirees choose Summerlin.'
	}
];

const faqSchema = createFAQSchema(faqData);

const placeSchema = {
	'@context': 'https://schema.org',
	'@type': 'Place',
	name: 'Summerlin, Las Vegas',
	description: 'Master-planned luxury community in West Las Vegas offering upscale living, top schools, golf courses, and Red Rock Canyon proximity',
	geo: {
		'@type': 'GeoCoordinates',
		latitude: 36.1699,
		longitude: -115.2755
	},
	containedInPlace: {
		'@type': 'City',
		name: 'Las Vegas',
		'@id': 'https://en.wikipedia.org/wiki/Las_Vegas'
	},
	amenityFeature: [
		{ '@type': 'LocationFeatureSpecification', name: 'Golf Courses' },
		{ '@type': 'LocationFeatureSpecification', name: 'Parks and Trails' },
		{ '@type': 'LocationFeatureSpecification', name: 'Shopping Centers' },
		{ '@type': 'LocationFeatureSpecification', name: 'Top-Rated Schools' },
		{ '@type': 'LocationFeatureSpecification', name: 'Medical Centers' }
	]
};

const pageSchema = {
	'@context': 'https://schema.org',
	'@graph': [breadcrumbSchema, faqSchema, placeSchema]
};

const seoData = {
	title: 'Summerlin Las Vegas Real Estate Guide | West Summerlin Homes 89138, 89144, 89135',
	description: 'Complete guide to Summerlin neighborhoods by local expert Dr. Janet Duffy. Luxury homes in The Ridges, Red Rock Country Club, Summerlin West. Top schools, amenities, and master-planned living. Call 702-222-1964.',
	keywords: 'Summerlin Las Vegas, West Summerlin homes, 89138, 89144, 89135, The Ridges, Red Rock Country Club, Summerlin neighborhoods, luxury real estate Summerlin, master-planned community',
	canonical: 'https://drjanduffy.com/summerlin',
	schema: pageSchema
};

const neighborhoods = [
	{
		name: 'The Ridges',
		zip: '89138',
		priceRange: '$1M - $10M+',
		description: 'Ultra-luxury gated community with custom estates, golf course views, and stunning Red Rock Canyon vistas.',
		highlights: ['Guard-gated', 'Golf course', 'Custom homes', 'Mountain views']
	},
	{
		name: 'Red Rock Country Club',
		zip: '89138',
		priceRange: '$600K - $3M',
		description: 'Prestigious golf community featuring Arnold Palmer-designed courses and Mediterranean-style luxury homes.',
		highlights: ['Two golf courses', 'Country club amenities', 'Gated security', 'Resort-style living']
	},
	{
		name: 'The Summit',
		zip: '89138',
		priceRange: '$800K - $4M',
		description: 'Exclusive hillside community with panoramic city and mountain views in a guard-gated setting.',
		highlights: ['Guard-gated', 'City views', 'Hillside estates', 'Privacy']
	},
	{
		name: 'Summerlin West',
		zip: '89144',
		priceRange: '$400K - $1.5M',
		description: 'Diverse neighborhoods with family-friendly amenities, parks, and proximity to Downtown Summerlin.',
		highlights: ['Family-friendly', 'Parks and trails', 'Shopping nearby', 'Top schools']
	},
	{
		name: 'Sun City Summerlin',
		zip: '89144',
		priceRange: '$300K - $800K',
		description: 'Active adult 55+ community with resort-style amenities, golf, and social activities.',
		highlights: ['Age 55+', 'Golf courses', 'Community centers', 'Active lifestyle']
	},
	{
		name: 'Summerlin South',
		zip: '89135',
		priceRange: '$450K - $1.2M',
		description: 'Growing area with newer construction, modern amenities, and excellent schools.',
		highlights: ['New construction', 'Modern homes', 'Parks', 'Growing community']
	}
];
</script>

<SEO {...seoData} />

<!-- Hero Section -->
<section class="bg-gradient-to-r from-vegas-blue-100 to-vegas-gold-50 py-16">
	<div class="container mx-auto px-4">
		<div class="max-w-4xl mx-auto text-center">
			<h1 class="text-4xl md:text-5xl font-bold mb-6 text-vegas-deep-900">
				Summerlin Las Vegas Real Estate Guide
			</h1>
			<p class="text-xl mb-8 text-vegas-deep-700">
				Discover luxury living in West Summerlin's most prestigious neighborhoods
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/contact" class="bg-vegas-gold-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-vegas-gold-700 transition-colors">
					Schedule Neighborhood Tour
				</a>
				<a href="/properties" class="bg-white text-vegas-gold-600 border-2 border-vegas-gold-600 px-8 py-3 rounded-lg font-semibold hover:bg-vegas-gold-50 transition-colors">
					View Summerlin Homes
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Introduction -->
<section class="py-12 bg-white">
	<div class="container mx-auto px-4">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-3xl font-bold mb-6 text-vegas-deep-900">Why Choose Summerlin?</h2>
			<div class="prose prose-lg max-w-none text-vegas-deep-700">
				<p>
					Summerlin is Las Vegas's premier master-planned community, offering an exceptional quality of life that attracts executives, professionals, and families from across the country, especially California. As a West Summerlin specialist with over 15 years of experience, Dr. Janet Duffy helps clients discover the perfect neighborhood match in this 22,500-acre oasis.
				</p>
				<p class="mt-4">
					What sets Summerlin apart is its thoughtful planning: lush landscaping, extensive trail systems, top-rated schools, world-class golf, and proximity to Red Rock Canyon. Whether you're seeking a luxury estate in The Ridges, a family home in Summerlin West, or an active adult community in Sun City, Summerlin delivers an unmatched lifestyle.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Neighborhoods -->
<section class="py-12 bg-vegas-deep-50">
	<div class="container mx-auto px-4">
		<div class="max-w-6xl mx-auto">
			<h2 class="text-3xl font-bold text-center mb-12 text-vegas-deep-900">
				Featured Summerlin Neighborhoods
			</h2>
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each neighborhoods as neighborhood}
					<div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
						<div class="bg-gradient-to-r from-vegas-gold-600 to-vegas-gold-700 text-white p-4">
							<h3 class="text-2xl font-bold">{neighborhood.name}</h3>
							<p class="text-sm opacity-90">Zip Code: {neighborhood.zip}</p>
						</div>
						<div class="p-6">
							<p class="text-lg font-semibold mb-3 text-vegas-gold-700">{neighborhood.priceRange}</p>
							<p class="text-vegas-deep-700 mb-4">{neighborhood.description}</p>
							<div class="space-y-2">
								{#each neighborhood.highlights as highlight}
									<div class="flex items-center text-sm text-vegas-deep-600">
										<span class="mr-2">✓</span>
										<span>{highlight}</span>
									</div>
								{/each}
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- FAQ Section for AEO -->
<section class="py-12 bg-white">
	<div class="container mx-auto px-4">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-3xl font-bold text-center mb-12 text-vegas-deep-900">
				Summerlin Frequently Asked Questions
			</h2>
			<div class="space-y-6">
				{#each faqData as faq}
					<div class="bg-vegas-deep-50 p-6 rounded-lg">
						<h3 class="text-xl font-semibold mb-3 text-vegas-deep-900">{faq.question}</h3>
						<p class="text-vegas-deep-700">{faq.answer}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-16 bg-gradient-to-r from-vegas-gold-600 to-vegas-gold-700 text-white">
	<div class="container mx-auto px-4">
		<div class="max-w-3xl mx-auto text-center">
			<h2 class="text-3xl md:text-4xl font-bold mb-6">
				Ready to Explore Summerlin?
			</h2>
			<p class="text-xl mb-8">
				Let Dr. Janet Duffy, your West Summerlin expert, guide you to the perfect neighborhood and home.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/contact" class="bg-white text-vegas-gold-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
					Contact Dr. Duffy
				</a>
				<a href="tel:+17022221964" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-vegas-gold-600 transition-colors">
					Call 702-222-1964
				</a>
			</div>
		</div>
	</div>
</section>
