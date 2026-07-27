<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Schema from '$lib/components/Schema.svelte';
	import '../app.css';
	import { page } from '$app/stores';

	let { children } = $props();

	// Dynamic canonical URL based on current page (Svelte 5 runes)
	const canonicalUrl = $derived(`https://drjanduffy.com${$page.url.pathname === '/' ? '' : $page.url.pathname}`);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="author" content="Dr. Janet Duffy" />
	<meta name="geo.region" content="US-NV" />
	<meta name="geo.placename" content="Las Vegas" />
	<meta name="geo.position" content="36.1699;-115.1398" />
	<meta name="ICBM" content="36.1699, -115.1398" />

	<!-- Dynamic canonical URL per page -->
	<link rel="canonical" href={canonicalUrl} />
</svelte:head>

<!-- Global Schema.org structured data -->
<Schema />

{@render children?.()}
