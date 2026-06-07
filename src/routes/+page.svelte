<script>
import FAQSchema from '$lib/components/FAQSchema.svelte';
import { browser } from '$app/environment';
import { onMount } from 'svelte';

let mounted = false;

onMount(() => {
	mounted = true;
});

// FAQ data optimized for AEO (Answer Engine Optimization)
const faqs = [
	{
		question: "What areas of Las Vegas does Dr. Janet Duffy specialize in?",
		answer: "Dr. Janet Duffy specializes in West Summerlin, particularly zip codes 89138, 89144, and 89135. She has extensive expertise in luxury properties throughout the greater Las Vegas area, including Henderson and North Las Vegas."
	},
	{
		question: "How much experience does Dr. Janet Duffy have in real estate?",
		answer: "Dr. Janet Duffy has over 15 years of experience in Las Vegas real estate, with 150+ properties sold and $50M+ in total sales volume. She holds multiple professional certifications including CRS, ABR, and GRI."
	},
	{
		question: "Does Dr. Janet Duffy work with first-time home buyers?",
		answer: "Yes, Dr. Janet Duffy provides comprehensive guidance for first-time home buyers, including market analysis, financing assistance coordination, and step-by-step support throughout the entire purchase process."
	},
	{
		question: "What makes Summerlin a desirable place to live?",
		answer: "Summerlin offers master-planned communities with excellent schools, golf courses, parks, shopping at Downtown Summerlin, and proximity to Red Rock Canyon. The area is particularly popular with executives and California relocations seeking luxury lifestyle amenities."
	},
	{
		question: "How can I get a free home valuation in Las Vegas?",
		answer: "You can get a free, instant home valuation by visiting the Home Value page on this website or by calling Dr. Janet Duffy directly at 702-222-1964. She provides comprehensive market analysis using the latest comparable sales data."
	}
];

const neighborhoods = [
	{ name: "Summerlin 89138", description: "The Ridges, Red Rock Country Club" },
	{ name: "Summerlin 89144", description: "The Trails, Pueblo" },
	{ name: "Summerlin 89135", description: "The Willows, The Crossing" },
	{ name: "Henderson", description: "Green Valley, Anthem, MacDonald Ranch" },
	{ name: "Las Vegas Downtown", description: "Arts District, Symphony Park" }
];
</script>

<svelte:head>
	<title>Dr. Janet Duffy - West Summerlin Luxury Real Estate | Las Vegas REALTOR®</title>
	<meta name="description" content="Dr. Janet Duffy, luxury real estate specialist in West Summerlin Las Vegas (89138, 89144, 89135). 15+ years experience, 150+ homes sold. Call 702-222-1964 for executive relocations & luxury properties." />
	<meta name="keywords" content="West Summerlin real estate, Las Vegas luxury homes, Summerlin 89138, Summerlin 89144, Summerlin 89135, executive relocation Las Vegas, California to Nevada relocation, Dr. Janet Duffy REALTOR" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://drjanduffy.com/" />
	<meta property="og:title" content="Dr. Janet Duffy - West Summerlin Luxury Real Estate" />
	<meta property="og:description" content="Premier luxury real estate in West Summerlin. 15+ years experience, 150+ homes sold, $50M+ sales volume." />
	<meta property="og:image" content="https://drjanduffy.com/images/og-home.jpg" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Dr. Janet Duffy - West Summerlin Luxury Real Estate" />
	<meta name="twitter:description" content="Premier luxury real estate in West Summerlin. Call 702-222-1964" />

	<!-- Breadcrumb Schema -->
	<script type="application/ld+json">
		{JSON.stringify({
			"@context": "https://schema.org",
			"@type": "BreadcrumbList",
			"itemListElement": [{
				"@type": "ListItem",
				"position": 1,
				"name": "Home",
				"item": "https://drjanduffy.com/"
			}]
		})}
	</script>

	<link rel="canonical" href="https://drjanduffy.com/" />
</svelte:head>

<!-- Hero Section -->
<section class="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
	<div class="container mx-auto px-4">
		<div class="max-w-4xl mx-auto text-center">
			<h1 class="text-5xl font-bold mb-6">West Summerlin Luxury Real Estate Expert</h1>
			<p class="text-2xl mb-8 text-primary-100">
				Dr. Janet Duffy, REALTOR® - Your trusted partner for luxury homes in Summerlin 89138, 89144, 89135
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/properties" class="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
					Browse Properties
				</a>
				<a href="/home-value" class="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary-600 transition-colors">
					Get Home Value
				</a>
				<a href="tel:+17022221964" class="bg-primary-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-800 transition-colors">
					Call 702-222-1964
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Stats Section -->
<section class="py-16 bg-gray-50">
	<div class="container mx-auto px-4">
		<div class="grid md:grid-cols-4 gap-8 text-center">
			<div>
				<div class="text-4xl font-bold text-primary-600 mb-2">15+</div>
				<div class="text-gray-600">Years Experience</div>
			</div>
			<div>
				<div class="text-4xl font-bold text-primary-600 mb-2">150+</div>
				<div class="text-gray-600">Properties Sold</div>
			</div>
			<div>
				<div class="text-4xl font-bold text-primary-600 mb-2">$50M+</div>
				<div class="text-gray-600">Sales Volume</div>
			</div>
			<div>
				<div class="text-4xl font-bold text-primary-600 mb-2">98%</div>
				<div class="text-gray-600">Client Satisfaction</div>
			</div>
		</div>
	</div>
</section>

<!-- Neighborhood Expertise -->
<section class="py-16">
	<div class="container mx-auto px-4">
		<h2 class="text-4xl font-bold text-center mb-12 text-gray-800">Summerlin Neighborhood Expertise</h2>
		<div class="max-w-5xl mx-auto">
			<div class="grid md:grid-cols-3 gap-8">
				{#each neighborhoods as neighborhood}
					<div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
						<h3 class="text-xl font-bold mb-3 text-primary-600">{neighborhood.name}</h3>
						<p class="text-gray-600">{neighborhood.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- Services -->
<section class="py-16 bg-gray-50">
	<div class="container mx-auto px-4">
		<h2 class="text-4xl font-bold text-center mb-12 text-gray-800">Comprehensive Real Estate Services</h2>
		<div class="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
			<div class="bg-white rounded-lg p-6 shadow-lg">
				<h3 class="text-xl font-bold mb-4 text-primary-600">For Buyers</h3>
				<ul class="space-y-2 text-gray-600">
					<li>✓ Luxury Property Search</li>
					<li>✓ Executive Relocation Services</li>
					<li>✓ California to Nevada Relocation</li>
					<li>✓ Investment Property Analysis</li>
					<li>✓ First-Time Buyer Guidance</li>
				</ul>
			</div>
			<div class="bg-white rounded-lg p-6 shadow-lg">
				<h3 class="text-xl font-bold mb-4 text-primary-600">For Sellers</h3>
				<ul class="space-y-2 text-gray-600">
					<li>✓ Premium Marketing Strategy</li>
					<li>✓ Professional Photography & Staging</li>
					<li>✓ Competitive Market Analysis</li>
					<li>✓ Expert Pricing Strategy</li>
					<li>✓ Skilled Negotiation</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- Property Search Widget -->
<section class="py-16">
	<div class="container mx-auto px-4">
		<div class="max-w-4xl mx-auto text-center mb-8">
			<h2 class="text-4xl font-bold mb-4 text-gray-800">Find Your Dream Home in Las Vegas</h2>
			<p class="text-xl text-gray-600">
				Search MLS listings updated daily across Summerlin, Henderson, and greater Las Vegas
			</p>
		</div>

		{#if mounted && browser}
			<div class="realscout-wrapper max-w-4xl mx-auto">
				<realscout-simple-search
					agent-encoded-id="QWdlbnQtMjI1MDUw">
				</realscout-simple-search>
			</div>
		{:else}
			<div class="max-w-4xl mx-auto animate-pulse">
				<div class="h-16 bg-gray-200 rounded-lg"></div>
			</div>
		{/if}
	</div>
</section>

<!-- FAQ Section for AEO -->
<section class="py-16 bg-gray-50">
	<div class="container mx-auto px-4">
		<div class="max-w-4xl mx-auto">
			<FAQSchema {faqs} />
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-16 bg-primary-600 text-white">
	<div class="container mx-auto px-4">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="text-3xl font-bold mb-4">Ready to Make Your Move?</h2>
			<p class="text-xl mb-8">
				Whether buying or selling luxury real estate in West Summerlin, I'm here to guide you every step of the way.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/contact" class="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
					Schedule Consultation
				</a>
				<a href="tel:+17022221964" class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
					Call 702-222-1964
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	.realscout-wrapper {
		min-height: 80px;
	}
</style>
