<script>
import { onMount } from 'svelte';
import { browser } from '$app/environment';

let mounted = false;

onMount(() => {
  mounted = true;
});
</script>

<svelte:head>
	<title>Past Sales & All Listings | Dr. Janet Duffy REALTOR®</title>
	<meta name="description" content="View Dr. Janet Duffy's past sales and all property listings including sold, rented, and current listings in Las Vegas." />
	<meta name="keywords" content="past sales, sold properties, Las Vegas real estate history, Dr. Janet Duffy listings" />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.drjanetduffy.com/past-sales" />
	<meta property="og:title" content="Past Sales & All Listings | Dr. Janet Duffy REALTOR®" />
	<meta property="og:description" content="View Dr. Janet Duffy's past sales and all property listings including sold, rented, and current listings in Las Vegas." />
	
	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://www.drjanetduffy.com/past-sales" />
	<meta property="twitter:title" content="Past Sales & All Listings | Dr. Janet Duffy REALTOR®" />
	<meta property="twitter:description" content="View Dr. Janet Duffy's past sales and all property listings in Las Vegas." />
</svelte:head>

<section class="section relative" style="background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);">
	<div class="container-premium">
		<div class="text-center mb-16">
			<h1 class="font-display text-5xl md:text-6xl font-bold mb-6 text-gray-900" style="letter-spacing: -0.03em;">View Past Sales & All Las Vegas Listings</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
				Explore Dr. Janet Duffy's complete portfolio of properties including current listings, recent sales, and rental properties.
			</p>
			<div class="bg-gradient-to-r from-primary-50 to-blue-50 border-l-4 border-primary-600 rounded-xl p-6 max-w-3xl mx-auto">
				<p class="text-gray-800 text-lg">
					<strong class="text-primary-700">Proven Track Record:</strong> This comprehensive view showcases all properties I've worked with, demonstrating my experience and success across different property types and market conditions in Las Vegas.
				</p>
			</div>
		</div>
	
		{#if mounted && browser}
			<div class="realscout-wrapper">
				<realscout-your-listings 
					agent-encoded-id="QWdlbnQtMjI1MDUw"
					sort-order="STATUS_AND_SIGNIFICANT_CHANGE"
					listing-status="For Sale,For Rent,In Contract,Sold,Rented"
					property-types="SFR,MF,TC,LAL,MOBILE,OTHER">
				</realscout-your-listings>
			</div>
		{:else}
			<div class="loading-skeleton">
				<div class="grid-premium md:grid-cols-2 lg:grid-cols-3 gap-8">
					{#each Array(12) as _}
						<div class="animate-pulse bg-white rounded-2xl shadow-lg overflow-hidden">
							<div class="bg-gray-200 h-64"></div>
							<div class="p-6 space-y-4">
								<div class="h-6 bg-gray-200 rounded w-3/4"></div>
								<div class="h-5 bg-gray-200 rounded w-1/2"></div>
								<div class="h-4 bg-gray-200 rounded w-2/3"></div>
							</div>
						</div>
					{/each}
				</div>
				<p class="text-center text-gray-600 mt-12 text-lg">Loading all listings and past sales...</p>
			</div>
		{/if}
		
		<!-- Success Stats Section -->
		<div class="mt-16 bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-xl border border-gray-100">
			<div class="text-center mb-12">
				<h2 class="font-display text-4xl font-bold mb-6 text-gray-900" style="letter-spacing: -0.02em;">What Are Dr. Janet Duffy's Success Statistics?</h2>
				<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-4"></div>
				<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto">
					Dr. Janet Duffy's success statistics include 150+ properties sold, $50M+ in total sales volume, 98% client satisfaction rate, and 15 years of Las Vegas real estate experience. These numbers demonstrate proven results, exceptional service, and deep market expertise that help buyers, sellers, and investors achieve their real estate goals.
				</p>
			</div>
			<div class="grid-premium md:grid-cols-4 gap-8">
				<div class="text-center bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
					<div class="text-5xl font-display font-bold text-primary-600 mb-4">150+</div>
					<div class="text-gray-700 font-semibold text-lg">Properties Sold</div>
				</div>
				<div class="text-center bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
					<div class="text-5xl font-display font-bold text-primary-600 mb-4">$50M+</div>
					<div class="text-gray-700 font-semibold text-lg">Total Sales Volume</div>
				</div>
				<div class="text-center bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
					<div class="text-5xl font-display font-bold text-primary-600 mb-4">98%</div>
					<div class="text-gray-700 font-semibold text-lg">Client Satisfaction</div>
				</div>
				<div class="text-center bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
					<div class="text-5xl font-display font-bold text-primary-600 mb-4">15</div>
					<div class="text-gray-700 font-semibold text-lg">Years Experience</div>
				</div>
			</div>
		</div>
		
		<!-- CTA Section -->
		<div class="mt-16 relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white rounded-2xl p-12 shadow-2xl">
			<div class="absolute inset-0 overflow-hidden">
				<div class="absolute top-1/4 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
				<div class="absolute bottom-1/4 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 1.5s;"></div>
			</div>
			<div class="relative z-10 text-center">
				<h2 class="font-display text-4xl md:text-5xl font-bold mb-6 text-white" style="text-shadow: 0 4px 20px rgba(0,0,0,0.3); letter-spacing: -0.02em;">Ready to Be Dr. Janet Duffy's Next Success Story?</h2>
				<p class="text-xl mb-10 text-white/95 max-w-2xl mx-auto leading-relaxed" style="text-shadow: 0 2px 10px rgba(0,0,0,0.2);">
					Let me help you buy or sell your property with the same dedication and expertise that has made me successful. With 150+ properties sold, $50M+ in sales volume, and 98% client satisfaction, I'll guide you through every step of your Las Vegas real estate transaction with proven results and exceptional service.
				</p>
				<div class="flex flex-col sm:flex-row gap-6 justify-center">
					<a href="/contact" class="group relative overflow-hidden bg-white text-primary-700 px-10 py-5 rounded-xl font-bold text-lg shadow-2xl hover:shadow-white/30 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
						<span class="relative z-10">Get Started Today</span>
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

<style>
	.realscout-wrapper {
		min-height: 600px;
		width: 100%;
		contain: layout style paint;
		position: relative;
	}
	
	.loading-skeleton {
		min-height: 600px;
		width: 100%;
	}
	
	/* Override RealScout styles for this page */
	.realscout-wrapper :global(realscout-your-listings) {
		--rs-grid-columns: 3;
		--rs-card-hover-shadow: 0 10px 20px rgba(0,0,0,0.15);
	}
</style>
