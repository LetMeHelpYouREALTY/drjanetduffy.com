<script>
import { onMount } from 'svelte';
import { browser } from '$app/environment';

let mounted = false;

onMount(() => {
  mounted = true;
});
</script>

<svelte:head>
	<title>Rental Properties | Dr. Jan Duffy REALTOR</title>
	<meta name="description" content="Find rental properties in Las Vegas with Dr. Jan Duffy. Browse available rentals, apartments, and homes for rent in the Las Vegas area." />
	<meta name="keywords" content="Las Vegas rentals, rental properties, apartments for rent, homes for rent, rental listings" />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://drjanduffy.com/rentals" />
	<meta property="og:title" content="Rental Properties | Dr. Jan Duffy REALTOR" />
	<meta property="og:description" content="Find rental properties in Las Vegas with Dr. Jan Duffy. Browse available rentals, apartments, and homes for rent." />
	
	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://drjanduffy.com/rentals" />
	<meta property="twitter:title" content="Rental Properties | Dr. Jan Duffy REALTOR" />
	<meta property="twitter:description" content="Find rental properties in Las Vegas with Dr. Jan Duffy. Browse available rentals, apartments, and homes for rent." />
</svelte:head>

<div class="container mx-auto px-4 py-8">
	<div class="mb-8">
		<h1 class="text-4xl font-bold mb-4 text-gray-800">Las Vegas Rental Properties</h1>
		<p class="text-lg text-gray-600 mb-4">
			Discover the perfect rental property in Las Vegas. From luxury apartments to single-family homes, find your ideal rental with Dr. Jan Duffy's expert guidance.
		</p>
		<div class="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
			<p class="text-blue-800">
				<strong>Rental Expertise:</strong> Whether you're looking for a short-term rental, long-term lease, or investment property, I can help you find the perfect rental solution in Las Vegas.
			</p>
		</div>
	</div>
	
	<!-- Rental Search -->
	<div class="mb-8 bg-white rounded-lg shadow-lg p-6">
		<h2 class="text-xl font-semibold mb-4 text-gray-800">Search Rental Properties</h2>
		<div class="grid md:grid-cols-2 gap-6">
			<div>
				<h3 class="text-lg font-medium mb-3 text-gray-700">Advanced Rental Search</h3>
				<div class="realscout-search advanced" 
					 data-rep="drjanduffy" 
					 data-button-color="#c41e3a" 
					 data-button-font="#FFFFFF" 
					 data-background-color="#f8f9fa">
				</div>
			</div>
			<div>
				<h3 class="text-lg font-medium mb-3 text-gray-700">Quick Search</h3>
				<div class="realscout-search simple" 
					 data-rep="drjanduffy" 
					 data-button-color="#c41e3a" 
					 data-button-font="#FFFFFF" 
					 data-background-color="#f8f9fa">
				</div>
			</div>
		</div>
	</div>
	
	<!-- Rental Listings -->
	<div class="mb-8">
		<h2 class="text-2xl font-semibold mb-6 text-gray-800">Available Rental Properties</h2>
		{#if mounted && browser}
			<div class="realscout-listings office" 
				 data-rep="drjanduffy" 
				 data-status="active" 
				 data-view="list__view">
			</div>
		{:else}
			<div class="loading-skeleton">
				<div class="space-y-4">
					{#each Array(8) as _}
						<div class="animate-pulse bg-white rounded-lg shadow p-6">
							<div class="flex md:flex-row flex-col gap-4">
								<div class="md:w-1/3">
									<div class="bg-gray-200 h-48 rounded-lg"></div>
								</div>
								<div class="md:w-2/3 space-y-3">
									<div class="h-6 bg-gray-200 rounded w-3/4"></div>
									<div class="h-4 bg-gray-200 rounded w-1/2"></div>
									<div class="h-4 bg-gray-200 rounded w-2/3"></div>
									<div class="h-4 bg-gray-200 rounded w-1/3"></div>
								</div>
							</div>
						</div>
					{/each}
				</div>
				<p class="text-center text-gray-600 mt-8">Loading rental properties...</p>
			</div>
		{/if}
	</div>
	
	<!-- Rental Information -->
	<div class="grid md:grid-cols-2 gap-8 mb-12">
		<div class="bg-gray-50 rounded-lg p-6">
			<h3 class="text-xl font-semibold mb-4 text-gray-800">Rental Process</h3>
			<div class="space-y-4">
				<div>
					<h4 class="font-semibold text-gray-800">Property Search</h4>
					<p class="text-gray-600">Browse available rentals and schedule viewings</p>
				</div>
				<div>
					<h4 class="font-semibold text-gray-800">Application Process</h4>
					<p class="text-gray-600">Complete rental application and provide documentation</p>
				</div>
				<div>
					<h4 class="font-semibold text-gray-800">Lease Signing</h4>
					<p class="text-gray-600">Review lease terms and complete move-in process</p>
				</div>
			</div>
		</div>
		
		<div class="bg-gray-50 rounded-lg p-6">
			<h3 class="text-xl font-semibold mb-4 text-gray-800">Rental Requirements</h3>
			<ul class="space-y-3">
				<li class="flex items-start">
					<svg class="w-5 h-5 text-green-600 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
						<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
					</svg>
					<span class="text-gray-600">Proof of income (3x monthly rent)</span>
				</li>
				<li class="flex items-start">
					<svg class="w-5 h-5 text-green-600 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
						<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
					</svg>
					<span class="text-gray-600">Credit check and background screening</span>
				</li>
				<li class="flex items-start">
					<svg class="w-5 h-5 text-green-600 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
						<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
					</svg>
					<span class="text-gray-600">Security deposit (typically 1-2 months rent)</span>
				</li>
				<li class="flex items-start">
					<svg class="w-5 h-5 text-green-600 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
						<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
					</svg>
					<span class="text-gray-600">Valid government-issued ID</span>
				</li>
				<li class="flex items-start">
					<svg class="w-5 h-5 text-green-600 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
						<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
					</svg>
					<span class="text-gray-600">References from previous landlords</span>
				</li>
			</ul>
		</div>
	</div>
	
	<!-- Rental Market Stats -->
	<div class="bg-primary-600 text-white rounded-lg p-8 mb-12">
		<h2 class="text-2xl font-bold mb-6">Las Vegas Rental Market Overview</h2>
		<div class="grid md:grid-cols-4 gap-8">
			<div class="text-center">
				<div class="text-3xl font-bold mb-2">$1,850</div>
				<div class="text-primary-200">Average Rent (1BR)</div>
			</div>
			<div class="text-center">
				<div class="text-3xl font-bold mb-2">$2,400</div>
				<div class="text-primary-200">Average Rent (2BR)</div>
			</div>
			<div class="text-center">
				<div class="text-3xl font-bold mb-2">$3,200</div>
				<div class="text-primary-200">Average Rent (3BR)</div>
			</div>
			<div class="text-center">
				<div class="text-3xl font-bold mb-2">95%</div>
				<div class="text-primary-200">Occupancy Rate</div>
			</div>
		</div>
	</div>
	
	<!-- CTA Section -->
	<div class="bg-gray-50 rounded-lg p-8 text-center">
		<h2 class="text-2xl font-bold mb-4 text-gray-800">Ready to Find Your Perfect Rental?</h2>
		<p class="text-lg text-gray-600 mb-6">
			Let me help you navigate the Las Vegas rental market and find the perfect property for your needs and budget.
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<a href="/contact" class="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
				Start Your Rental Search
			</a>
			<a href="tel:+17025551234" class="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors">
				Call (702) 555-1234
			</a>
		</div>
	</div>
</div>
