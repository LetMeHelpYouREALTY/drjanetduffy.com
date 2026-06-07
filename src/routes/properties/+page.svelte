<script lang="ts">
import { onMount } from 'svelte';
import { browser } from '$app/environment';
import SEO from '$lib/components/SEO.svelte';
import { createBreadcrumbSchema } from '$lib/utils/schema';

let mounted = false;

onMount(() => {
  mounted = true;
});

// Breadcrumb and ItemList schema for properties
const breadcrumbSchema = createBreadcrumbSchema([
	{ name: 'Home', url: 'https://drjanduffy.com' },
	{ name: 'Properties for Sale' }
]);

const itemListSchema = {
	'@context': 'https://schema.org',
	'@type': 'ItemList',
	name: 'Las Vegas Properties for Sale by Dr. Janet Duffy',
	description: 'Current luxury and residential properties available in Las Vegas, Summerlin, and Henderson',
	numberOfItems: 0
};

const pageSchema = {
	'@context': 'https://schema.org',
	'@graph': [breadcrumbSchema, itemListSchema]
};

const seoData = {
	title: 'Las Vegas Luxury Homes for Sale | West Summerlin Properties | Dr. Janet Duffy',
	description: 'Browse luxury Las Vegas homes for sale in West Summerlin (89138, 89144, 89135). Updated MLS listings, virtual tours, and expert guidance from Dr. Janet Duffy. Contact: 702-222-1964.',
	keywords: 'Las Vegas homes for sale, West Summerlin properties, luxury homes Las Vegas, MLS listings, real estate 89138, 89144, 89135, Dr. Janet Duffy',
	canonical: 'https://drjanduffy.com/properties',
	schema: pageSchema
};
</script>

<SEO {...seoData} />

<div class="container mx-auto px-4 py-8">
	<div class="mb-8">
		<h1 class="text-4xl font-bold mb-4 text-gray-800">Las Vegas Properties for Sale</h1>
		<p class="text-lg text-gray-600">
			Showing all active listings. Use the filters below to narrow your search.
		</p>
	</div>
	
	{#if mounted && browser}
		<div class="realscout-wrapper">
			<realscout-office-listings 
				agent-encoded-id="QWdlbnQtMjI1MDUw"
				sort-order="STATUS_AND_SIGNIFICANT_CHANGE"
				listing-status="For Sale"
				property-types="SFR,MF,TC">
			</realscout-office-listings>
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
			<p class="text-center text-gray-600 mt-8">Loading property listings...</p>
		</div>
	{/if}
</div>

<style>
	.realscout-wrapper {
		min-height: 600px;
		width: 100%;
	}
	
	/* Override RealScout styles for this page */
	.realscout-wrapper :global(realscout-office-listings) {
		--rs-grid-columns: 3;
		--rs-card-hover-shadow: 0 10px 20px rgba(0,0,0,0.15);
	}
</style>
