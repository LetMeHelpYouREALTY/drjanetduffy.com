<script>
import { onMount } from 'svelte';
import { browser } from '$app/environment';

let mounted = false;

onMount(() => {
  mounted = true;
});
</script>

<svelte:head>
	<title>Past Sales & All Listings | Dr. Jan Duffy REALTOR</title>
	<meta name="description" content="View Dr. Jan Duffy's past sales and all property listings including sold, rented, and current listings in Las Vegas." />
	<meta name="keywords" content="past sales, sold properties, Las Vegas real estate history, Dr. Jan Duffy listings" />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://drjanduffy.com/past-sales" />
	<meta property="og:title" content="Past Sales & All Listings | Dr. Jan Duffy REALTOR" />
	<meta property="og:description" content="View Dr. Jan Duffy's past sales and all property listings including sold, rented, and current listings in Las Vegas." />
	
	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://drjanduffy.com/past-sales" />
	<meta property="twitter:title" content="Past Sales & All Listings | Dr. Jan Duffy REALTOR" />
	<meta property="twitter:description" content="View Dr. Jan Duffy's past sales and all property listings including sold, rented, and current listings in Las Vegas." />
</svelte:head>

<div class="container mx-auto px-4 py-8">
	<div class="mb-8">
		<h1 class="text-4xl font-bold mb-4 text-gray-800">Past Sales & All Listings</h1>
		<p class="text-lg text-gray-600 mb-4">
			Explore Dr. Jan Duffy's complete portfolio of properties including current listings, recent sales, and rental properties.
		</p>
		<div class="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
			<p class="text-blue-800">
				<strong>Proven Track Record:</strong> This comprehensive view showcases all properties I've worked with, demonstrating my experience and success across different property types and market conditions in Las Vegas.
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
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{#each Array(12) as _}
					<div class="animate-pulse">
						<div class="bg-gray-200 h-48 rounded-t-lg"></div>
						<div class="bg-gray-100 p-4 rounded-b-lg">
							<div class="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
							<div class="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
							<div class="h-4 bg-gray-200 rounded w-2/3"></div>
						</div>
					</div>
				{/each}
			</div>
			<p class="text-center text-gray-600 mt-8">Loading all listings and past sales...</p>
		</div>
	{/if}
	
	<!-- Success Stats Section -->
	<div class="mt-16 bg-gray-50 rounded-lg p-8">
		<h2 class="text-2xl font-bold text-center mb-8 text-gray-800">My Success by the Numbers</h2>
		<div class="grid md:grid-cols-4 gap-8 text-center">
			<div>
				<div class="text-3xl font-bold text-primary-600 mb-2">150+</div>
				<div class="text-gray-600">Properties Sold</div>
			</div>
			<div>
				<div class="text-3xl font-bold text-primary-600 mb-2">$50M+</div>
				<div class="text-gray-600">Total Sales Volume</div>
			</div>
			<div>
				<div class="text-3xl font-bold text-primary-600 mb-2">98%</div>
				<div class="text-gray-600">Client Satisfaction</div>
			</div>
			<div>
				<div class="text-3xl font-bold text-primary-600 mb-2">15</div>
				<div class="text-gray-600">Years Experience</div>
			</div>
		</div>
	</div>
	
	<!-- CTA Section -->
	<div class="mt-12 bg-primary-600 text-white rounded-lg p-8 text-center">
		<h2 class="text-2xl font-bold mb-4">Ready to Be My Next Success Story?</h2>
		<p class="text-lg mb-6">
			Let me help you buy or sell your property with the same dedication and expertise that has made me successful.
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<a href="/contact" class="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
				Get Started Today
			</a>
			<a href="tel:+17025551234" class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
				Call (702) 555-1234
			</a>
		</div>
	</div>
</div>

<style>
	.realscout-wrapper {
		min-height: 600px;
		width: 100%;
	}
	
	/* Override RealScout styles for this page */
	.realscout-wrapper :global(realscout-your-listings) {
		--rs-grid-columns: 3;
		--rs-card-hover-shadow: 0 10px 20px rgba(0,0,0,0.15);
	}
</style>
