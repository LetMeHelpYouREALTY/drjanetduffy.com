<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<!-- Global Schema.org for Organization -->
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "Organization",
		"name": "Dr. Janet Duffy - Berkshire Hathaway Nevada Properties",
		"alternateName": "Dr. Jan Duffy REALTOR",
		"url": "https://drjanduffy.com",
		"logo": "https://drjanduffy.com/favicon.png",
		"contactPoint": {
			"@type": "ContactPoint",
			"telephone": "+1-702-222-1964",
			"contactType": "Customer Service",
			"email": "drduffy@bhhsnv.com",
			"areaServed": "US",
			"availableLanguage": ["English"]
		},
		"sameAs": [
			"https://drjanduffy.com"
		],
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "Las Vegas",
			"addressRegion": "NV",
			"addressCountry": "US"
		}
	}
	</script>

	<!-- Global WebSite Schema -->
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "WebSite",
		"name": "Dr. Janet Duffy - West Summerlin Real Estate",
		"url": "https://drjanduffy.com",
		"potentialAction": {
			"@type": "SearchAction",
			"target": {
				"@type": "EntryPoint",
				"urlTemplate": "https://drjanduffy.com/properties?search={search_term_string}"
			},
			"query-input": "required name=search_term_string"
		}
	}
	</script>
</svelte:head>

<div class="min-h-screen flex flex-col">
	<Header />
	<main class="flex-grow">
		{@render children?.()}
	</main>
	<Footer />
</div>
