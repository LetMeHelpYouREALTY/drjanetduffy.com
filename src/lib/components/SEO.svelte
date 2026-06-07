<script lang="ts">
/**
 * SEO Component - 2026 best practices for real estate websites
 * Optimized for SEO, GEO (Generative Engine Optimization), and AEO (Answer Engine Optimization)
 */

interface Props {
	title: string;
	description: string;
	keywords?: string;
	canonical?: string;
	ogType?: 'website' | 'article' | 'profile';
	ogImage?: string;
	schema?: any;
	noindex?: boolean;
}

let {
	title,
	description,
	keywords = '',
	canonical = '',
	ogType = 'website',
	ogImage = 'https://drjanduffy.com/og-image.jpg',
	schema = null,
	noindex = false
}: Props = $props();

const fullTitle = title.includes('Dr. Janet Duffy') ? title : `${title} | Dr. Janet Duffy, REALTOR®`;
const siteUrl = 'https://drjanduffy.com';
const fullCanonical = canonical || (typeof window !== 'undefined' ? window.location.href : siteUrl);
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>{fullTitle}</title>
	<meta name="title" content={fullTitle} />
	<meta name="description" content={description} />
	{#if keywords}
		<meta name="keywords" content={keywords} />
	{/if}
	{#if noindex}
		<meta name="robots" content="noindex, nofollow" />
	{:else}
		<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
	{/if}

	<!-- Canonical URL -->
	{#if canonical}
		<link rel="canonical" href={canonical} />
	{/if}

	<!-- Open Graph / Facebook - Essential for social sharing and AI crawlers -->
	<meta property="og:type" content={ogType} />
	<meta property="og:url" content={fullCanonical} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:site_name" content="Dr. Janet Duffy, REALTOR®" />
	<meta property="og:locale" content="en_US" />

	<!-- Twitter Card - Enhanced visibility -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={fullCanonical} />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImage} />

	<!-- Additional SEO Meta Tags -->
	<meta name="author" content="Dr. Janet Duffy" />
	<meta name="geo.region" content="US-NV" />
	<meta name="geo.placename" content="Las Vegas" />
	<meta name="geo.position" content="36.1699;-115.1398" />
	<meta name="ICBM" content="36.1699, -115.1398" />

	<!-- Mobile Optimization -->
	<meta name="theme-color" content="#f59e0b" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="default" />

	<!-- Schema.org JSON-LD - Critical for AEO -->
	{#if schema}
		<script type="application/ld+json">
			{JSON.stringify(schema, null, 2)}
		</script>
	{/if}
</svelte:head>