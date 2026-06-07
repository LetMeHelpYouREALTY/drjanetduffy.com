<script>
	import SEO from '$lib/components/SEO.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	// FAQ data optimized for AEO (Answer Engine Optimization)
	// Each answer is 40-60 words for optimal AI citation
	const faqs = [
		{
			question: 'Who is Dr. Jan Duffy?',
			answer:
				'Dr. Jan Duffy is a licensed REALTOR® in Las Vegas, Nevada, with over 15 years of experience. She specializes in luxury homes, investment properties, and first-time buyers across Las Vegas, Henderson, and Summerlin. She holds certifications including CRS, ABR, and GRI.'
		},
		{
			question: 'What areas does Dr. Jan Duffy serve?',
			answer:
				'Dr. Jan Duffy serves the entire Las Vegas metropolitan area, including Las Vegas, Henderson, North Las Vegas, Summerlin, and surrounding communities. She has extensive knowledge of local neighborhoods, schools, and market trends throughout Clark County, Nevada.'
		},
		{
			question: 'How do I contact Dr. Jan Duffy?',
			answer:
				'You can contact Dr. Jan Duffy by phone at (702) 555-1234 or email at janet.duffy@bhhsnv.com. She is available 7 days a week from 8 AM to 8 PM. You can also submit an inquiry through the contact form on this website.'
		},
		{
			question: 'What services does Dr. Jan Duffy offer?',
			answer:
				'Dr. Jan Duffy offers comprehensive real estate services including residential sales and purchases, luxury home specialization, first-time buyer guidance, investment property consulting, market analysis, negotiation, property management, and relocation services throughout Las Vegas.'
		},
		{
			question: 'What is the Las Vegas real estate market like in 2026?',
			answer:
				'The Las Vegas real estate market in 2026 remains competitive with steady appreciation. Median home prices hover around $450,000. Inventory is improving, buyer demand is strong, and interest rates have stabilized. Luxury properties and investment opportunities continue to attract buyers nationwide.'
		},
		{
			question: 'How long does it take to buy a home in Las Vegas?',
			answer:
				'The typical home purchase in Las Vegas takes 30-45 days from offer acceptance to closing. This includes inspections, appraisals, loan approval, and final walkthrough. Cash purchases can close in as little as 7-14 days. Dr. Jan Duffy expedites the process efficiently.'
		},
		{
			question: 'What are closing costs for buying a home in Las Vegas?',
			answer:
				'Buyers in Las Vegas typically pay 2-5% of the purchase price in closing costs. This includes loan origination fees, appraisal, title insurance, escrow fees, and recording fees. Sellers typically pay 5-6% in real estate commissions. Costs vary by transaction type.'
		},
		{
			question: 'Should I buy or rent in Las Vegas?',
			answer:
				'Buying is often more cost-effective than renting in Las Vegas if you plan to stay 3+ years. Current median rent is $2,100/month while typical mortgage payments are $2,400/month, but buyers build equity. Dr. Jan Duffy provides personalized financial analysis for your situation.'
		}
	];

	const services = [
		{
			title: 'Luxury Home Sales',
			description:
				'Specialized marketing and representation for high-end properties throughout Las Vegas, Henderson, and Summerlin.',
			icon: '🏡'
		},
		{
			title: 'First-Time Buyers',
			description:
				'Patient guidance through every step of the home buying process, from pre-approval to closing.',
			icon: '🔑'
		},
		{
			title: 'Investment Properties',
			description:
				'Expert analysis of rental markets, cash flow projections, and property management solutions.',
			icon: '📈'
		},
		{
			title: 'Relocation Services',
			description:
				'Comprehensive support for families and professionals moving to Las Vegas from other states.',
			icon: '🚚'
		}
	];

	const neighborhoods = [
		{
			name: 'Summerlin',
			description: 'Master-planned community with parks, golf, and top-rated schools',
			medianPrice: '$625,000'
		},
		{
			name: 'Henderson',
			description: 'Family-friendly city with excellent amenities and safety ratings',
			medianPrice: '$485,000'
		},
		{
			name: 'Las Vegas Downtown',
			description: 'Urban living with arts district, dining, and entertainment',
			medianPrice: '$380,000'
		},
		{
			name: 'North Las Vegas',
			description: 'Affordable homes with new construction and growth potential',
			medianPrice: '$350,000'
		}
	];
</script>

<SEO
	title="Dr. Jan Duffy - Las Vegas Real Estate Agent | Luxury Homes & Properties"
	description="Dr. Jan Duffy is a top Las Vegas REALTOR® with 15+ years of experience. Specializing in luxury homes, investment properties, and first-time buyers in Las Vegas, Henderson, and Summerlin. Call (702) 555-1234."
	keywords="Las Vegas real estate agent, Las Vegas REALTOR, luxury homes Las Vegas, Henderson real estate, Summerlin homes, Las Vegas property, Nevada real estate, homes for sale Las Vegas, Las Vegas real estate market"
	url="https://drjanduffy.com"
	{faqs}
/>

<Header />

<main>
	<!-- Hero Section - AEO Optimized -->
	<section class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
		<div class="container mx-auto px-4">
			<div class="max-w-4xl mx-auto text-center">
				<h1 class="text-5xl font-bold mb-6">
					Dr. Jan Duffy - Las Vegas Real Estate Expert
				</h1>
				<!-- AEO-optimized introductory statement (under 60 words) -->
				<p class="text-xl mb-8 leading-relaxed">
					Trusted Las Vegas REALTOR® with 15+ years of experience helping clients buy, sell, and invest
					in properties across Las Vegas, Henderson, and Summerlin. Certified Residential Specialist
					(CRS) and Luxury Home Marketing Specialist serving Nevada since 2009.
				</p>
				<div class="flex flex-col sm:flex-row gap-4 justify-center">
					<a
						href="/contact"
						class="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
					>
						Get Free Home Valuation
					</a>
					<a
						href="tel:+17025551234"
						class="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
					>
						Call (702) 555-1234
					</a>
				</div>
			</div>
		</div>
	</section>

	<!-- Stats Section - E-E-A-T Signals -->
	<section class="py-16 bg-gray-50">
		<div class="container mx-auto px-4">
			<div class="grid md:grid-cols-4 gap-8 text-center">
				<div>
					<div class="text-4xl font-bold text-blue-600 mb-2">150+</div>
					<div class="text-gray-700">Properties Sold</div>
				</div>
				<div>
					<div class="text-4xl font-bold text-blue-600 mb-2">$50M+</div>
					<div class="text-gray-700">Total Sales Volume</div>
				</div>
				<div>
					<div class="text-4xl font-bold text-blue-600 mb-2">15+</div>
					<div class="text-gray-700">Years Experience</div>
				</div>
				<div>
					<div class="text-4xl font-bold text-blue-600 mb-2">98%</div>
					<div class="text-gray-700">Client Satisfaction</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Services Section -->
	<section class="py-16">
		<div class="container mx-auto px-4">
			<h2 class="text-4xl font-bold text-center mb-4 text-gray-800">
				Real Estate Services in Las Vegas
			</h2>
			<p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
				Comprehensive real estate services tailored to your unique needs, whether you're buying your
				first home, selling a luxury property, or building an investment portfolio in Las Vegas.
			</p>
			<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
				{#each services as service}
					<div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
						<div class="text-4xl mb-4">{service.icon}</div>
						<h3 class="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
						<p class="text-gray-600">{service.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Neighborhoods Section - Local SEO / GEO -->
	<section class="py-16 bg-gray-50">
		<div class="container mx-auto px-4">
			<h2 class="text-4xl font-bold text-center mb-4 text-gray-800">
				Las Vegas Neighborhoods We Serve
			</h2>
			<p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
				Dr. Jan Duffy has extensive knowledge of Las Vegas neighborhoods, from luxury communities to
				affordable family areas. Find your perfect location in the Las Vegas metro area.
			</p>
			<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
				{#each neighborhoods as neighborhood}
					<div class="bg-white rounded-lg shadow-md p-6">
						<h3 class="text-xl font-bold mb-2 text-blue-600">{neighborhood.name}</h3>
						<p class="text-gray-600 mb-4 text-sm">{neighborhood.description}</p>
						<div class="text-lg font-semibold text-gray-800">
							Median: {neighborhood.medianPrice}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- FAQ Section - Optimized for AEO -->
	<section class="py-16">
		<div class="container mx-auto px-4 max-w-4xl">
			<h2 class="text-4xl font-bold text-center mb-4 text-gray-800">
				Frequently Asked Questions
			</h2>
			<p class="text-center text-gray-600 mb-12">
				Common questions about working with Dr. Jan Duffy and the Las Vegas real estate market.
			</p>
			<div class="space-y-6">
				{#each faqs as faq}
					<div class="bg-white rounded-lg shadow-md p-6">
						<h3 class="text-xl font-bold mb-3 text-gray-800">{faq.question}</h3>
						<p class="text-gray-700 leading-relaxed">{faq.answer}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="py-16 bg-blue-600 text-white">
		<div class="container mx-auto px-4 text-center">
			<h2 class="text-4xl font-bold mb-6">Ready to Start Your Real Estate Journey?</h2>
			<p class="text-xl mb-8 max-w-2xl mx-auto">
				Whether you're buying, selling, or investing in Las Vegas real estate, Dr. Jan Duffy provides
				the expertise and personalized service you deserve. Contact us today for a free consultation.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a
					href="/contact"
					class="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
				>
					Schedule a Consultation
				</a>
				<a
					href="/home-value"
					class="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
				>
					Get Your Home's Value
				</a>
			</div>
		</div>
	</section>
</main>

<Footer />

<style>
	:global(body) {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			sans-serif;
	}
</style>
