<script lang="ts">
	interface TocItem {
		id: string;
		label: string;
	}

	const pageTitle = 'Las Vegas Luxury & Relocation Real Estate Blog | Dr. Janet Duffy';
	const pageDescription =
		'Stay up-to-date with the latest Las Vegas real estate news, market trends, and community insights.';

	const tocItems: TocItem[] = [
		{ id: 'overview', label: 'Overview' },
		{ id: 'market', label: 'Market Insights' },
		{ id: 'neighborhoods', label: 'Neighborhood Guides' },
		{ id: 'investors', label: 'Investor Strategy' },
		{ id: 'relocation', label: 'Relocation Tips' }
	];
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={pageDescription} />
	<meta
		name="keywords"
		content="Las Vegas real estate blog, Las Vegas market trends, real estate news, Las Vegas community insights, property market updates"
	/>
	<meta name="robots" content="index, follow" />

	<link rel="canonical" href="https://www.drjanetduffy.com/blog" />

	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.drjanetduffy.com/blog" />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={pageDescription} />
	<meta property="og:site_name" content="Las Vegas Luxury & Relocation REALTOR" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content="https://www.drjanetduffy.com/blog" />
	<meta name="twitter:title" content={pageTitle} />
  
	<meta name="twitter:description" content={pageDescription} />

	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Blog",
			"name": "Las Vegas Luxury & Relocation Real Estate Blog",
			"description": "Stay up-to-date with Las Vegas luxury and relocation real estate news, market trends, and community insights",
			"url": "https://www.drjanetduffy.com/blog",
			"publisher": {
				"@type": "RealEstateAgent",
				"name": "Dr. Janet Duffy"
			}
		}
	</script>
</svelte:head>

<div class="container mx-auto px-4 py-10 max-w-6xl">
	<div class="mb-8" id="overview">
		<h1 class="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
			Las Vegas Real Estate News &amp; Market Insights
		</h1>
		<p class="text-gray-600 text-lg leading-relaxed max-w-3xl mb-6">
			This blog will soon display curated Las Vegas real estate articles, neighborhood guides, and market
			updates. While we complete the live feed integration, you can still reach out directly for personalized
			insights on Summerlin, Skye Canyon, Henderson, North Las Vegas, and other key communities.
		</p>

		<!-- On-page navigation -->
		<nav
			aria-label="Blog sections"
			class="mt-4 rounded-full border border-gray-200 bg-white px-3 py-2 shadow-sm overflow-x-auto scrollbar-hide"
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
	</div>

	<section id="market" class="mb-10">
		<h2 class="text-2xl sm:text-3xl font-bold mb-3 text-gray-900">Market Insights &amp; Data Briefs</h2>
		<p class="text-gray-700 leading-relaxed max-w-3xl">
			Coming soon: monthly breakdowns of median prices, days on market, inventory levels, and absorption rates
			across Summerlin, Skye Canyon, Henderson, North Las Vegas, and other key submarkets. Until the live feed
			is launched, you can visit the
			<a href="/market-insights" class="text-primary-600 font-semibold hover:underline">Market Insights</a>
			page or request a custom data brief tailored to your price band and neighborhoods of interest.
		</p>
	</section>

	<section id="neighborhoods" class="mb-10">
		<h2 class="text-2xl sm:text-3xl font-bold mb-3 text-gray-900">Neighborhood Guides &amp; Lifestyle Stories</h2>
		<p class="text-gray-700 leading-relaxed max-w-3xl">
			Future posts will dive deeper into life inside Las Vegas master plans—everything from school options and
			trail systems to HOA nuances and commute patterns. In the meantime, you can explore the existing
			<a href="/neighborhoods" class="text-primary-600 font-semibold hover:underline">Neighborhoods</a>
			section for detailed written guides on Summerlin, Skye Canyon, Henderson, North Las Vegas, and more.
		</p>
	</section>

	<section id="investors" class="mb-10">
		<h2 class="text-2xl sm:text-3xl font-bold mb-3 text-gray-900">Investor Strategy &amp; Case Studies</h2>
		<p class="text-gray-700 leading-relaxed max-w-3xl">
			Planned content here will cover cap rates, cash-on-cash returns, and real-life examples of portfolio
			strategies in Las Vegas. For now, the
			<a href="/investment-guide" class="text-primary-600 font-semibold hover:underline">Investment Guide</a>
			outlines core frameworks for evaluating rentals, fix-and-flips, and 1031 exchanges using current Las Vegas
			data.
		</p>
	</section>

	<section id="relocation" class="mb-10">
		<h2 class="text-2xl sm:text-3xl font-bold mb-3 text-gray-900">Relocation Tips &amp; Checklists</h2>
		<p class="text-gray-700 leading-relaxed max-w-3xl">
			Articles in this section will focus on timelines, school research, and lifestyle tradeoffs for clients
			relocating from California, the Midwest, and the East Coast. Until then, the
			<a href="/relocation" class="text-primary-600 font-semibold hover:underline">Relocation</a>
			page and
			<a href="/moving-checklist" class="text-primary-600 font-semibold hover:underline">Moving Checklist</a>
			provide a detailed, step-by-step roadmap for planning your move.
		</p>
	</section>

	<section class="mb-6">
		<p class="text-gray-700 leading-relaxed max-w-3xl">
			If you would like recent articles or market briefs sent to you directly, use the
			<a href="/contact" class="text-primary-600 font-semibold hover:underline">contact page</a>
			to request a custom update for your price range and preferred neighborhoods.
		</p>
	</section>
</div>


