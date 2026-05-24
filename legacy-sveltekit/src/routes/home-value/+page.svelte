<script>
import { onMount } from 'svelte';
import { browser } from '$app/environment';
import { CheckCircle, BarChart3, Home, TrendingUp } from 'lucide-svelte';

let mounted = false;

onMount(() => {
  mounted = true;
});
</script>

<svelte:head>
	<title>Home Value Calculator | Dr. Janet Duffy REALTOR®</title>
	<meta name="description" content="Get an instant estimate of your home's value with Dr. Janet Duffy's advanced valuation tool. Free, accurate, and based on current Las Vegas market data." />
	<meta name="keywords" content="home value, property valuation, home estimate, Las Vegas real estate, home worth" />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.drjanetduffy.com/home-value" />
	<meta property="og:title" content="Home Value Calculator | Dr. Janet Duffy REALTOR®" />
	<meta property="og:description" content="Get an instant estimate of your home's value with Dr. Janet Duffy's advanced valuation tool." />
	
	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://www.drjanetduffy.com/home-value" />
	<meta property="twitter:title" content="Home Value Calculator | Dr. Janet Duffy REALTOR®" />
	<meta property="twitter:description" content="Get an instant estimate of your home's value with Dr. Janet Duffy's advanced valuation tool." />
	
	<!-- Structured Data -->
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "WebApplication",
		"name": "Home Value Calculator",
		"description": "Get an instant estimate of your home's value",
		"url": "https://www.drjanetduffy.com/home-value",
		"applicationCategory": "RealEstateApplication",
		"offers": {
			"@type": "Offer",
			"price": "0",
			"priceCurrency": "USD"
		}
	}
	</script>
</svelte:head>

<section class="section relative" style="background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);">
	<div class="container-premium">
		<div class="text-center mb-16">
			<h1 class="font-display text-5xl md:text-6xl font-bold mb-6 text-gray-900" style="letter-spacing: -0.03em;">Discover What Your Las Vegas Home Is Worth</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Get an instant, accurate estimate of your home's value using advanced market data and comparable sales in your area.
			</p>
		</div>
		
		<!-- Home Value Widget -->
		<div class="bg-white rounded-2xl shadow-xl p-10 mb-16 border border-gray-100">
			{#if mounted && browser}
				<realscout-home-value 
					agent-encoded-id="QWdlbnQtMjI1MDUw">
				</realscout-home-value>
			{:else}
				<div class="animate-pulse space-y-4">
					<div class="h-14 bg-gray-200 rounded-xl"></div>
					<div class="h-14 bg-gray-200 rounded-xl"></div>
					<div class="h-14 bg-gray-200 rounded-xl"></div>
				</div>
				<p class="text-center text-gray-600 mt-6 text-lg">Loading home value calculator...</p>
			{/if}
		</div>
		
		<!-- Information Section -->
		<div class="grid-premium md:grid-cols-2 gap-12 mb-16">
			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
				<h2 class="font-display text-3xl font-bold mb-6 text-gray-900" style="letter-spacing: -0.02em;">How Does Our Las Vegas Home Valuation Work?</h2>
				<p class="text-gray-700 mb-8 leading-relaxed">
					Our Las Vegas home valuation works by analyzing recent sales of similar properties in your neighborhood, factoring in your home's size, age, condition, and unique features, considering current market trends and inventory levels, and providing instant results with detailed breakdown and comparable sales data.
				</p>
				<div class="space-y-6">
					<div class="flex items-start gap-4">
					<div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-md">
						<BarChart3 class="w-5 h-5 text-white" />
					</div>
					<div>
						<h3 class="font-display text-xl font-bold mb-2 text-gray-900">Market Analysis</h3>
						<p class="text-gray-700 leading-relaxed">We analyze recent sales of similar properties in your neighborhood and surrounding areas.</p>
					</div>
				</div>
				<div class="flex items-start gap-4">
					<div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-md">
						<Home class="w-5 h-5 text-white" />
					</div>
					<div>
						<h3 class="font-display text-xl font-bold mb-2 text-gray-900">Property Details</h3>
						<p class="text-gray-700 leading-relaxed">Your home's size, age, condition, and unique features are factored into the valuation.</p>
					</div>
				</div>
				<div class="flex items-start gap-4">
					<div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-md">
						<TrendingUp class="w-5 h-5 text-white" />
					</div>
						<div>
							<h3 class="font-display text-xl font-bold mb-2 text-gray-900">Current Market Trends</h3>
							<p class="text-gray-700 leading-relaxed">We consider current Las Vegas market conditions, inventory levels, and buyer demand.</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-md">
							<span class="text-2xl">⚡</span>
						</div>
						<div>
							<h3 class="font-display text-xl font-bold mb-2 text-gray-900">Instant Results</h3>
							<p class="text-gray-700 leading-relaxed">Get your home value estimate immediately with detailed breakdown and comparable sales.</p>
						</div>
					</div>
				</div>
			</div>
			
			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
				<h2 class="font-display text-3xl font-bold mb-6 text-gray-900" style="letter-spacing: -0.02em;">Why Should You Get Your Las Vegas Home Valued?</h2>
				<p class="text-gray-700 mb-8 leading-relaxed">
					Get your Las Vegas home valued for selling planning to set the right price and timeline, refinancing decisions based on current value, investment tracking to monitor appreciation, and insurance purposes to ensure coverage matches property value, helping you make informed decisions about your real estate investment.
				</p>
				<div class="space-y-6">
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
							<CheckCircle class="w-5 h-5 text-green-600" />
						</div>
						<div>
							<h3 class="font-display text-xl font-bold mb-2 text-gray-900">Selling Planning</h3>
							<p class="text-gray-700 leading-relaxed">Understand your home's worth before listing to set the right price and timeline.</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
							<CheckCircle class="w-5 h-5 text-green-600" />
						</div>
						<div>
							<h3 class="font-display text-xl font-bold mb-2 text-gray-900">Refinancing Decisions</h3>
							<p class="text-gray-700 leading-relaxed">Make informed decisions about refinancing based on your home's current value.</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
							<CheckCircle class="w-5 h-5 text-green-600" />
						</div>
						<div>
							<h3 class="font-display text-xl font-bold mb-2 text-gray-900">Investment Tracking</h3>
							<p class="text-gray-700 leading-relaxed">Monitor your home's appreciation and track your real estate investment performance.</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
							<CheckCircle class="w-5 h-5 text-green-600" />
						</div>
						<div>
							<h3 class="font-display text-xl font-bold mb-2 text-gray-900">Insurance Purposes</h3>
							<p class="text-gray-700 leading-relaxed">Ensure your home insurance coverage matches your property's current value.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<!-- Market Insights -->
		<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 mb-16 shadow-lg border border-gray-100">
			<h2 class="font-display text-3xl font-bold mb-6 text-center text-gray-900" style="letter-spacing: -0.02em;">What Are the Current Las Vegas Market Insights?</h2>
			<p class="text-gray-700 mb-8 text-center leading-relaxed max-w-3xl mx-auto">
				Current Las Vegas market insights show 8.5% average home price increase in 2024, average 28 days on market indicating fast-moving market, and $485K median home price that reflects strong market fundamentals and continued growth potential throughout the Las Vegas Valley.
			</p>
			<div class="grid-premium md:grid-cols-3 gap-8">
				<div class="text-center bg-white rounded-xl p-8 shadow-md">
					<div class="text-5xl font-display font-bold text-primary-600 mb-3">+8.5%</div>
					<div class="text-gray-700 font-semibold">Average Home Price Increase (2024)</div>
				</div>
				<div class="text-center bg-white rounded-xl p-8 shadow-md">
					<div class="text-5xl font-display font-bold text-primary-600 mb-3">28</div>
					<div class="text-gray-700 font-semibold">Days on Market (Average)</div>
				</div>
				<div class="text-center bg-white rounded-xl p-8 shadow-md">
					<div class="text-5xl font-display font-bold text-primary-600 mb-3">$485K</div>
					<div class="text-gray-700 font-semibold">Median Home Price</div>
				</div>
			</div>
		</div>
		
		<!-- CTA Section -->
		<div class="relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white rounded-3xl p-12 text-center shadow-2xl">
			<div class="absolute inset-0 overflow-hidden">
				<div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
				<div class="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
			</div>
			<div class="relative z-10">
				<h2 class="font-display text-4xl md:text-5xl font-bold mb-6 text-white" style="text-shadow: 0 2px 10px rgba(0,0,0,0.2);">Ready to Get Your Professional Las Vegas Home Valuation?</h2>
				<p class="text-xl mb-8 text-white/95 max-w-2xl mx-auto">
					While our online tool provides a great starting point, a professional appraisal or CMA (Comparative Market Analysis) can give you the most accurate valuation for your specific situation. With deep knowledge of Las Vegas market conditions, neighborhood trends, and property values, I'll provide comprehensive valuation services to help you make informed real estate decisions.
				</p>
				<div class="flex flex-col sm:flex-row gap-6 justify-center">
					<a href="/contact" class="group relative overflow-hidden bg-white text-primary-700 px-10 py-5 rounded-xl font-bold text-lg shadow-2xl hover:shadow-white/30 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
						<span class="relative z-10">Request Professional Valuation</span>
						<div class="absolute inset-0 bg-gradient-to-r from-primary-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
					</a>
					<a href="tel:+17027667668" class="group relative overflow-hidden bg-transparent text-white border-2 border-white/50 px-10 py-5 rounded-xl font-bold text-lg backdrop-blur-sm hover:bg-white hover:text-primary-700 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
						<span class="relative z-10">Call (702) 766-7668</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
