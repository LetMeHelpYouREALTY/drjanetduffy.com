<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Schema from '$lib/components/Schema.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="author" content="Dr. Janet Duffy" />
	<meta name="geo.region" content="US-NV" />
	<meta name="geo.placename" content="Las Vegas" />
	<meta name="geo.position" content="36.1699;-115.1398" />
	<meta name="ICBM" content="36.1699, -115.1398" />

	<!-- Canonical URL will be set per page -->
	<link rel="canonical" href="https://drjanduffy.com" />
</svelte:head>

<!-- Global Schema.org structured data -->
<Schema />

{@render children?.()}
