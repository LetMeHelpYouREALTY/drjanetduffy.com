<script lang="ts">
	import { BarChart3, Target, TrendingUp, Search } from 'lucide-svelte';

	interface TocItem {
		id: string;
		label: string;
	}

	const tocItems: TocItem[] = [
		{ id: 'overview', label: 'Overview' },
		{ id: 'services', label: 'Digital Services' },
		{ id: 'results', label: 'Results' },
		{ id: 'cta', label: 'Optimize Your Marketing' }
	];
</script>

<svelte:head>
	<title>
		Las Vegas Luxury &amp; Relocation Digital Marketing Services | Dr. Janet Duffy REALTOR®
	</title>
	<meta
		name="description"
		content="Digital marketing services from Las Vegas Luxury &amp; Relocation REALTOR® Dr. Janet Duffy, combining SEO, PPC, email, and social campaigns to generate more qualified real estate leads."
	/>

	<meta
		property="og:title"
		content="Las Vegas Luxury &amp; Relocation Digital Marketing Services | Dr. Janet Duffy REALTOR®"
	/>
	<meta
		property="og:description"
		content="Advanced digital marketing strategies that increase visibility, shorten days on market, and attract higher-quality Las Vegas buyers."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.drjanetduffy.com/services/digital-marketing" />
	<meta property="og:site_name" content="Las Vegas Luxury &amp; Relocation REALTOR" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="twitter:title"
		content="Las Vegas Luxury &amp; Relocation Digital Marketing Services | Dr. Janet Duffy REALTOR®"
	/>
	<meta
		name="twitter:description"
		content="High-converting digital campaigns for Las Vegas listings and lead funnels, built for today’s buyers."
	/>

	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "WebPage",
			"name": "Las Vegas Luxury & Relocation Digital Marketing Services",
			"description": "Digital marketing services for Las Vegas real estate, including SEO, PPC, social media campaigns, and lead generation strategies.",
			"url": "https://www.drjanetduffy.com/services/digital-marketing",
			"about": {
				"@type": "RealEstateAgent",
				"name": "Dr. Janet Duffy",
				"areaServed": "Las Vegas, Nevada"
			}
		}
	</script>
</svelte:head>

<section class="section bg-gradient-to-b from-white via-gray-50 to-white">
	<div class="container-premium">
		<div class="text-center mb-10" id="overview">
			<h1 class="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900">
				Advanced Digital Marketing for Las Vegas Real Estate
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Advanced digital marketing strategies to maximize property visibility and generate leads
			</p>
		</div>

		<!-- On-page navigation -->
		<nav
			aria-label="On this page"
			class="mb-10 rounded-full border border-gray-200 bg-white px-3 py-2 shadow-sm overflow-x-auto scrollbar-hide"
		>
			<ul class="flex items-center gap-2 text-sm whitespace-nowrap">
				{#each tocItems as item}
					<li>
						<a
							href={`#${item.id}`}
							class="inline-flex items-center rounded-full px-3 py-1.5 text-gray-700 hover:text-primary-700 hover:bg-primary-50 transition-colors no-underline"
						>
							{item.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<div class="mb-16" id="services">
			<h2 class="text-3xl font-bold text-gray-900 mb-6">
				What Digital Marketing Services Are Available for Las Vegas Real Estate?
			</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl">
				Digital marketing services for Las Vegas real estate include SEO and online presence optimization, lead generation campaigns, and comprehensive marketing strategies. These services maximize property visibility, attract qualified buyers, and generate leads through search engine optimization, pay-per-click advertising, email marketing, and social media campaigns.
			</p>
			<div class="grid md:grid-cols-2 gap-12">
				<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
						<Search class="w-8 h-8 text-primary-600" />
					</div>
					<h3 class="text-2xl font-bold text-gray-900 mb-4">SEO & Online Presence</h3>
					<p class="text-gray-700 leading-relaxed mb-6">
						Comprehensive search engine optimization and online marketing strategies:
					</p>
				<ul class="space-y-3 text-gray-700">
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Property listing optimization</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Local SEO and Google Business optimization</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Content marketing and blog strategy</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Website performance and conversion optimization</span>
					</li>
				</ul>
			</div>

				<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
						<Target class="w-8 h-8 text-primary-600" />
					</div>
					<h3 class="text-2xl font-bold text-gray-900 mb-4">Lead Generation</h3>
					<p class="text-gray-700 leading-relaxed mb-6">
						Targeted digital marketing campaigns to attract qualified buyers and sellers:
					</p>
				<ul class="space-y-3 text-gray-700">
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Pay-per-click (PPC) advertising campaigns</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Email marketing and automation</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Retargeting and conversion tracking</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Analytics and performance measurement</span>
					</li>
				</ul>
			</div>
		</div>

		<div class="mb-16" id="results">
			<h2 class="text-3xl font-bold text-gray-900 mb-6">
				What Results Can You Expect from Digital Marketing?
			</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl">
				Digital marketing results include increased visibility to reach more potential buyers online, faster sales through reduced time on market, and quality leads from serious, qualified buyers. Effective digital marketing strategies maximize your property's exposure and generate consistent interest from motivated buyers.
			</p>
			<div class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-white">
			<div class="grid md:grid-cols-3 gap-8">
				<div class="text-center">
					<BarChart3 class="w-12 h-12 mx-auto mb-4 text-white opacity-90" />
					<h3 class="text-xl font-bold mb-2">Increased Visibility</h3>
					<p class="text-white text-opacity-90">Reach more potential buyers online</p>
				</div>
				<div class="text-center">
					<TrendingUp class="w-12 h-12 mx-auto mb-4 text-white opacity-90" />
					<h3 class="text-xl font-bold mb-2">Faster Sales</h3>
					<p class="text-white text-opacity-90">Reduce time on market with effective marketing</p>
				</div>
				<div class="text-center">
					<Target class="w-12 h-12 mx-auto mb-4 text-white opacity-90" />
					<h3 class="text-xl font-bold mb-2">Quality Leads</h3>
					<p class="text-white text-opacity-90">Attract serious, qualified buyers</p>
				</div>
			</div>
		</div>

		<div class="text-center" id="cta">
			<a href="/contact" class="btn-primary">Learn More</a>
		</div>
	</div>
</section>

