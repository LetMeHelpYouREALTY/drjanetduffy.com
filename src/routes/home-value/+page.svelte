<script>
import { onMount } from 'svelte';
import { browser } from '$app/environment';

let mounted = false;

onMount(() => {
  mounted = true;
});
</script>

<svelte:head>
	<title>Home Value Calculator | Dr. Jan Duffy REALTOR</title>
	<meta name="description" content="Get an instant estimate of your home's value with Dr. Jan Duffy's advanced valuation tool. Free, accurate, and based on current Las Vegas market data." />
	<meta name="keywords" content="home value, property valuation, home estimate, Las Vegas real estate, home worth" />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://drjanduffy.com/home-value" />
	<meta property="og:title" content="Home Value Calculator | Dr. Jan Duffy REALTOR" />
	<meta property="og:description" content="Get an instant estimate of your home's value with Dr. Jan Duffy's advanced valuation tool." />
	
	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://drjanduffy.com/home-value" />
	<meta property="twitter:title" content="Home Value Calculator | Dr. Jan Duffy REALTOR" />
	<meta property="twitter:description" content="Get an instant estimate of your home's value with Dr. Jan Duffy's advanced valuation tool." />
</svelte:head>

<div class="container mx-auto px-4 py-8">
	<div class="max-w-4xl mx-auto">
		<div class="text-center mb-12">
			<h1 class="text-4xl font-bold mb-4 text-gray-800">What's Your Home Worth?</h1>
			<p class="text-xl text-gray-600 mb-8">
				Get an instant, accurate estimate of your home's value using advanced market data and comparable sales in your area.
			</p>
		</div>
		
		<!-- Home Value Widget -->
		<div class="bg-white rounded-lg shadow-lg p-8 mb-12">
			{#if mounted && browser}
				<realscout-home-value 
					agent-encoded-id="QWdlbnQtMjI1MDUw">
				</realscout-home-value>
			{:else}
				<div class="animate-pulse">
					<div class="h-12 bg-gray-200 rounded mb-4"></div>
					<div class="h-12 bg-gray-200 rounded mb-4"></div>
					<div class="h-12 bg-gray-200 rounded"></div>
				</div>
				<p class="text-center text-gray-600 mt-4">Loading home value calculator...</p>
			{/if}
		</div>
		
		<!-- Information Section -->
		<div class="grid md:grid-cols-2 gap-12 mb-12">
			<div>
				<h2 class="text-2xl font-bold mb-6 text-gray-800">How Our Valuation Works</h2>
				<div class="space-y-4">
					<div>
						<h3 class="font-semibold text-gray-800">Market Analysis</h3>
						<p class="text-gray-600">We analyze recent sales of similar properties in your neighborhood and surrounding areas.</p>
					</div>
					<div>
						<h3 class="font-semibold text-gray-800">Property Details</h3>
						<p class="text-gray-600">Your home's size, age, condition, and unique features are factored into the valuation.</p>
					</div>
					<div>
						<h3 class="font-semibold text-gray-800">Current Market Trends</h3>
						<p class="text-gray-600">We consider current Las Vegas market conditions, inventory levels, and buyer demand.</p>
					</div>
					<div>
						<h3 class="font-semibold text-gray-800">Instant Results</h3>
						<p class="text-gray-600">Get your home value estimate immediately with detailed breakdown and comparable sales.</p>
					</div>
				</div>
			</div>
			
			<div>
				<h2 class="text-2xl font-bold mb-6 text-gray-800">Why Get Your Home Valued?</h2>
				<div class="space-y-4">
					<div class="flex items-start space-x-3">
						<div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
							<svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
							</svg>
						</div>
						<div>
							<h3 class="font-semibold text-gray-800">Selling Planning</h3>
							<p class="text-gray-600">Understand your home's worth before listing to set the right price and timeline.</p>
						</div>
					</div>
					<div class="flex items-start space-x-3">
						<div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
							<svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
							</svg>
						</div>
						<div>
							<h3 class="font-semibold text-gray-800">Refinancing Decisions</h3>
							<p class="text-gray-600">Make informed decisions about refinancing based on your home's current value.</p>
						</div>
					</div>
					<div class="flex items-start space-x-3">
						<div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
							<svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
							</svg>
						</div>
						<div>
							<h3 class="font-semibold text-gray-800">Investment Tracking</h3>
							<p class="text-gray-600">Monitor your home's appreciation and track your real estate investment performance.</p>
						</div>
					</div>
					<div class="flex items-start space-x-3">
						<div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
							<svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
							</svg>
						</div>
						<div>
							<h3 class="font-semibold text-gray-800">Insurance Purposes</h3>
							<p class="text-gray-600">Ensure your home insurance coverage matches your property's current value.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<!-- Market Insights -->
		<div class="bg-gray-50 rounded-lg p-8 mb-12">
			<h2 class="text-2xl font-bold mb-6 text-gray-800">Las Vegas Market Insights</h2>
			<div class="grid md:grid-cols-3 gap-8">
				<div class="text-center">
					<div class="text-3xl font-bold text-primary-600 mb-2">+8.5%</div>
					<div class="text-gray-600">Average Home Price Increase (2024)</div>
				</div>
				<div class="text-center">
					<div class="text-3xl font-bold text-primary-600 mb-2">28</div>
					<div class="text-gray-600">Days on Market (Average)</div>
				</div>
				<div class="text-center">
					<div class="text-3xl font-bold text-primary-600 mb-2">$485K</div>
					<div class="text-gray-600">Median Home Price</div>
				</div>
			</div>
		</div>
		
		<!-- CTA Section -->
		<div class="bg-primary-600 text-white rounded-lg p-8 text-center">
			<h2 class="text-2xl font-bold mb-4">Need a Professional Valuation?</h2>
			<p class="text-lg mb-6">
				While our online tool provides a great starting point, a professional appraisal or CMA (Comparative Market Analysis) can give you the most accurate valuation for your specific situation.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/contact" class="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
					Request Professional Valuation
				</a>
				<a href="tel:+17025551234" class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
					Call (702) 555-1234
				</a>
			</div>
		</div>
	</div>
</div>
