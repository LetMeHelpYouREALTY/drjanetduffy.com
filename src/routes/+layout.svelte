<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { createRealEstateAgentSchema } from '$lib/utils/schema';

	let { children } = $props();

	// Global RealEstateAgent schema for SEO/GEO/AEO optimization
	const agentSchema = createRealEstateAgentSchema();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />

	<!-- Global RealEstateAgent Schema - 2026 Best Practice -->
	<script type="application/ld+json">
		{JSON.stringify(agentSchema, null, 2)}
	</script>

	<!-- Preconnect to important domains for performance -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
</svelte:head>

{@render children?.()}
