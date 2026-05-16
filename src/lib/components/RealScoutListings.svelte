<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import PalmsListingCard from './PalmsListingCard.svelte';

	let mounted = $state(false);

	interface Props {
		priceMin?: string;
		priceMax?: string;
		title?: string;
		subtitle?: string;
	}

	let { priceMin = '500000', priceMax = '600000', title, subtitle }: Props = $props();

	onMount(() => {
		mounted = true;
	});
</script>

{#if title || subtitle}
	<div class="text-center mb-8">
		{#if title}
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
		{/if}
		{#if subtitle}
			<p class="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
		{/if}
	</div>
{/if}

{#if mounted && browser}
	{#if priceMax}
		<realscout-office-listings
			agent-encoded-id="QWdlbnQtMjI1MDUw"
			sort-order="NEWEST"
			listing-status="For Sale"
			property-types=",SFR"
			price-min={priceMin}
			price-max={priceMax}
		></realscout-office-listings>
	{:else}
		<realscout-office-listings
			agent-encoded-id="QWdlbnQtMjI1MDUw"
			sort-order="NEWEST"
			listing-status="For Sale"
			property-types=",SFR"
			price-min={priceMin}
		></realscout-office-listings>
	{/if}
	<PalmsListingCard />
{:else}
	<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
		{#each Array(6) as _}
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
	<p class="text-center text-gray-600 mt-8 text-lg">Loading property listings...</p>
{/if}

