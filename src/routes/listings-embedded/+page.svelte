<script>
import { onMount } from 'svelte';
import { browser } from '$app/environment';

let mounted = false;

onMount(() => {
  mounted = true;
});
</script>

<svelte:head>
	<title>Property Listings - Alternative View | Dr. Jan Duffy REALTOR</title>
	<meta name="description" content="Browse Las Vegas property listings with our alternative presentation view. See active, pending, and sold properties in a different format." />
	<meta name="keywords" content="Las Vegas listings, property search, alternative view, real estate listings" />
</svelte:head>

<div class="container mx-auto px-4 py-8">
	<div class="mb-8">
		<h1 class="text-4xl font-bold mb-4 text-gray-800">Property Listings - Alternative View</h1>
		<p class="text-lg text-gray-600 mb-4">
			Explore our properties using a different presentation style. This view shows active, pending, and sold properties in a grid format.
		</p>
		<div class="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
			<p class="text-blue-800">
				<strong>Different Perspective:</strong> This alternative presentation gives you another way to browse and discover properties, with enhanced filtering and sorting options.
			</p>
		</div>
	</div>
	
	{#if mounted && browser}
		<div class="realscout-listings office" 
			 data-rep="drjanduffy" 
			 data-status="active,pending,sold" 
			 data-view="grid__view">
		</div>
	{:else}
		<div class="loading-skeleton">
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{#each Array(9) as _}
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
			<p class="text-center text-gray-600 mt-8">Loading alternative listing view...</p>
		</div>
	{/if}
	
	<!-- Features Section -->
	<div class="mt-16 grid md:grid-cols-3 gap-8">
		<div class="text-center">
			<h3 class="text-xl font-semibold mb-2">Grid View</h3>
			<p class="text-gray-600">Browse properties in an organized grid layout for easy comparison and selection.</p>
		</div>
		
		<div class="text-center">
			<h3 class="text-xl font-semibold mb-2">Advanced Filtering</h3>
			<p class="text-gray-600">Filter by status, price range, property type, and more to find exactly what you're looking for.</p>
		</div>
		
		<div class="text-center">
			<h3 class="text-xl font-semibold mb-2">Complete History</h3>
			<p class="text-gray-600">View active, pending, and sold properties to see the complete market picture.</p>
		</div>
	</div>
	
	<!-- Comparison Section -->
	<div class="mt-16 bg-gray-50 rounded-lg p-8">
		<h2 class="text-2xl font-bold mb-6 text-gray-800">Choose Your Preferred View</h2>
		<div class="grid md:grid-cols-2 gap-8">
			<div>
				<h3 class="text-lg font-semibold mb-4 text-primary-600">Web Components View</h3>
				<ul class="space-y-2 text-gray-600">
					<li class="flex items-center">
						<svg class="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
						</svg>
						Modern, interactive interface
					</li>
					<li class="flex items-center">
						<svg class="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
						</svg>
						Advanced search capabilities
					</li>
					<li class="flex items-center">
						<svg class="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
						</svg>
						Mobile-optimized design
					</li>
				</ul>
				<div class="mt-4">
					<a href="/properties" class="text-primary-600 hover:text-primary-700 font-semibold">
						View Web Components Version →
					</a>
				</div>
			</div>
			
			<div>
				<h3 class="text-lg font-semibold mb-4 text-primary-600">Embedded Grid View</h3>
				<ul class="space-y-2 text-gray-600">
					<li class="flex items-center">
						<svg class="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
						</svg>
						Classic grid layout
					</li>
					<li class="flex items-center">
						<svg class="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
						</svg>
						Familiar interface
					</li>
					<li class="flex items-center">
						<svg class="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
						</svg>
						Comprehensive status filtering
					</li>
				</ul>
				<div class="mt-4">
					<span class="text-primary-600 font-semibold">Current View</span>
				</div>
			</div>
		</div>
	</div>
</div>
