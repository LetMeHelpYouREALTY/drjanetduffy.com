<script lang="ts">
import SEO from '$lib/components/SEO.svelte';
import { createFAQSchema, createBreadcrumbSchema } from '$lib/utils/schema';

// FAQ data optimized for AEO (Answer Engine Optimization)
const faqs = [
	{
		question: 'What areas does Dr. Janet Duffy specialize in?',
		answer: 'Dr. Janet Duffy specializes in West Summerlin luxury properties, particularly in zip codes 89138, 89144, and 89135. She has extensive expertise in executive relocations and helping California buyers relocate to Las Vegas.'
	},
	{
		question: 'How much experience does Dr. Janet Duffy have in real estate?',
		answer: 'Dr. Janet Duffy has over 15 years of experience in the Las Vegas real estate market, with 150+ properties sold and over $50 million in total sales volume.'
	},
	{
		question: 'What services does Dr. Janet Duffy offer?',
		answer: 'Dr. Janet Duffy offers comprehensive real estate services including luxury home sales, buyer representation, investment property consulting, relocation assistance, market analysis, negotiation services, and property management guidance.'
	},
	{
		question: 'How can I contact Dr. Janet Duffy?',
		answer: 'You can reach Dr. Janet Duffy by phone at 702-222-1964 or by email at drduffy@bhhsnv.com. She is available 7 days a week and typically responds within 24 hours.'
	},
	{
		question: 'What makes West Summerlin a desirable location?',
		answer: 'West Summerlin offers luxury living with master-planned communities, top-rated schools, world-class golf courses, upscale shopping and dining, and proximity to Red Rock Canyon. It\'s ideal for executives and families seeking a high-quality lifestyle in Las Vegas.'
	},
	{
		question: 'Does Dr. Janet Duffy work with first-time homebuyers?',
		answer: 'Yes, Dr. Janet Duffy works with buyers at all experience levels, from first-time homebuyers to seasoned investors. She provides personalized guidance tailored to each client\'s unique needs and goals.'
	}
];

const faqSchema = createFAQSchema(faqs);
const breadcrumbSchema = createBreadcrumbSchema([
	{ name: 'Home', url: 'https://drjanduffy.com' }
]);

const pageSchema = {
	'@context': 'https://schema.org',
	'@graph': [breadcrumbSchema, faqSchema]
};

const seoData = {
	title: 'Dr. Janet Duffy, REALTOR® | Luxury Las Vegas & West Summerlin Real Estate Expert',
	description: 'Expert Las Vegas REALTOR® specializing in West Summerlin luxury properties (89138, 89144, 89135). 15+ years experience, 150+ homes sold, executive relocations, California buyer specialist. Call 702-222-1964.',
	keywords: 'Dr. Janet Duffy, Las Vegas REALTOR, West Summerlin real estate, luxury homes Las Vegas, Summerlin properties, executive relocation, California to Nevada, 89138, 89144, 89135, Berkshire Hathaway Nevada',
	canonical: 'https://drjanduffy.com',
	schema: pageSchema
};
</script>

<SEO {...seoData} />

<!-- Hero Section -->
<section class="bg-gradient-to-r from-vegas-gold-50 to-vegas-blue-50 py-20">
	<div class="container mx-auto px-4">
		<div class="max-w-4xl mx-auto text-center">
			<h1 class="text-5xl md:text-6xl font-bold mb-6 text-vegas-deep-900">
				Your West Summerlin Real Estate Expert
			</h1>
			<p class="text-xl md:text-2xl mb-8 text-vegas-deep-700">
				Luxury Las Vegas homes, executive relocations, and California buyer specialists
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/contact" class="bg-vegas-gold-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-vegas-gold-700 transition-colors">
					Get Your Free Consultation
				</a>
				<a href="tel:+17022221964" class="bg-white text-vegas-gold-600 border-2 border-vegas-gold-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-vegas-gold-50 transition-colors">
					Call 702-222-1964
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Value Proposition -->
<section class="py-16 bg-white">
	<div class="container mx-auto px-4">
		<div class="max-w-6xl mx-auto">
			<h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-vegas-deep-900">
				Why Choose Dr. Janet Duffy?
			</h2>
			<div class="grid md:grid-cols-3 gap-8">
				<div class="text-center p-6">
					<div class="text-5xl mb-4">🏆</div>
					<h3 class="text-2xl font-semibold mb-3 text-vegas-deep-900">15+ Years Experience</h3>
					<p class="text-vegas-deep-700">
						Over 150 properties sold with $50M+ in total sales volume. Proven track record in the Las Vegas luxury market.
					</p>
				</div>
				<div class="text-center p-6">
					<div class="text-5xl mb-4">📍</div>
					<h3 class="text-2xl font-semibold mb-3 text-vegas-deep-900">West Summerlin Specialist</h3>
					<p class="text-vegas-deep-700">
						Deep expertise in zip codes 89138, 89144, and 89135. Know every neighborhood, school, and community amenity.
					</p>
				</div>
				<div class="text-center p-6">
					<div class="text-5xl mb-4">✈️</div>
					<h3 class="text-2xl font-semibold mb-3 text-vegas-deep-900">Relocation Expert</h3>
					<p class="text-vegas-deep-700">
						Specialized service for executives and California buyers relocating to Nevada. Make your move seamless.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Service Areas -->
<section class="py-16 bg-vegas-deep-50">
	<div class="container mx-auto px-4">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-3xl md:text-4xl font-bold text-center mb-8 text-vegas-deep-900">
				Serving Las Vegas & Summerlin Communities
			</h2>
			<p class="text-lg text-center mb-12 text-vegas-deep-700">
				Specializing in luxury properties across West Summerlin's most desirable neighborhoods
			</p>
			<div class="grid md:grid-cols-3 gap-6">
				<div class="bg-white p-6 rounded-lg shadow-md">
					<h3 class="text-xl font-semibold mb-3 text-vegas-gold-700">Zip Code 89138</h3>
					<p class="text-vegas-deep-600">The Ridges, The Summit, Red Rock Country Club</p>
				</div>
				<div class="bg-white p-6 rounded-lg shadow-md">
					<h3 class="text-xl font-semibold mb-3 text-vegas-gold-700">Zip Code 89144</h3>
					<p class="text-vegas-deep-600">Summerlin West, Sun City Summerlin, Canyon Gate</p>
				</div>
				<div class="bg-white p-6 rounded-lg shadow-md">
					<h3 class="text-xl font-semibold mb-3 text-vegas-gold-700">Zip Code 89135</h3>
					<p class="text-vegas-deep-600">Summerlin South, Red Rock, Mountain's Edge</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- FAQ Section for AEO Optimization -->
<section class="py-16 bg-white">
	<div class="container mx-auto px-4">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-vegas-deep-900">
				Frequently Asked Questions
			</h2>
			<div class="space-y-6">
				{#each faqs as faq}
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
				Ready to Find Your Dream Home in Las Vegas?
			</h2>
			<p class="text-xl mb-8">
				Whether you're buying, selling, or relocating to Las Vegas, Dr. Janet Duffy provides expert guidance every step of the way.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/contact" class="bg-white text-vegas-gold-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
					Schedule Free Consultation
				</a>
				<a href="/properties" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-vegas-gold-600 transition-colors">
					View Properties
				</a>
			</div>
		</div>
	</div>
</section>
