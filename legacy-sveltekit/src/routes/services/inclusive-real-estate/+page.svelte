<script lang="ts">
	import { Users, Heart, Shield, Handshake } from 'lucide-svelte';

	interface TocItem {
		id: string;
		label: string;
	}

	const tocItems: TocItem[] = [
		{ id: 'overview', label: 'Overview' },
		{ id: 'services', label: 'Inclusive Services' },
		{ id: 'commitment', label: 'Our Commitment' },
		{ id: 'cta', label: 'Talk With Dr. Duffy' }
	];
</script>

<svelte:head>
	<title>
		Inclusive Real Estate Services | Las Vegas Luxury &amp; Relocation REALTOR®
	</title>
	<meta
		name="description"
		content="Inclusive real estate services from Las Vegas Luxury &amp; Relocation REALTOR® Dr. Janet Duffy, providing fair, culturally aware representation for all communities."
	/>

	<meta
		property="og:title"
		content="Inclusive Real Estate Services | Las Vegas Luxury &amp; Relocation REALTOR®"
	/>
	<meta
		property="og:description"
		content="Equitable, accessible real estate support for first-time buyers, underserved communities, and every client in the Las Vegas Valley."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.drjanetduffy.com/services/inclusive-real-estate" />
	<meta property="og:site_name" content="Las Vegas Luxury &amp; Relocation REALTOR" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="twitter:title"
		content="Inclusive Real Estate Services | Las Vegas Luxury &amp; Relocation REALTOR®"
	/>
	<meta
		name="twitter:description"
		content="Real estate representation grounded in fair housing principles, cultural sensitivity, and community focus."
	/>

	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "WebPage",
			"name": "Inclusive Real Estate Services",
			"description": "Inclusive real estate services for all Las Vegas communities, emphasizing fair housing, accessibility, and community support.",
			"url": "https://www.drjanetduffy.com/services/inclusive-real-estate",
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
				Inclusive Real Estate Services for All Las Vegas Clients
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Comprehensive real estate services serving all communities in Las Vegas
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
				What Inclusive Real Estate Services Do We Provide in Las Vegas?
			</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl">
				Inclusive real estate services in Las Vegas include equal service for all clients with fair and equitable representation, cultural sensitivity, accessible services, and multilingual support when needed. We also provide community commitment through first-time homebuyer assistance, affordable housing resources, support for underserved communities, and fair housing advocacy.
			</p>
			<div class="grid md:grid-cols-2 gap-12">
				<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
						<Users class="w-8 h-8 text-primary-600" />
					</div>
					<h3 class="text-2xl font-bold text-gray-900 mb-4">Equal Service for All</h3>
					<p class="text-gray-700 leading-relaxed mb-6">
						Committed to providing exceptional real estate services to everyone:
					</p>
				<ul class="space-y-3 text-gray-700">
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Fair and equitable representation</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Cultural sensitivity and understanding</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Accessible services and accommodations</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Multilingual support when needed</span>
					</li>
				</ul>
			</div>

				<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
						<Heart class="w-8 h-8 text-primary-600" />
					</div>
					<h3 class="text-2xl font-bold text-gray-900 mb-4">Community Commitment</h3>
					<p class="text-gray-700 leading-relaxed mb-6">
						Dedicated to serving diverse communities throughout Las Vegas:
					</p>
				<ul class="space-y-3 text-gray-700">
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>First-time homebuyer assistance programs</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Affordable housing resources and guidance</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Support for underserved communities</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Fair housing advocacy and education</span>
					</li>
				</ul>
			</div>
		</div>

		<div class="mb-16" id="commitment">
			<h2 class="text-3xl font-bold text-gray-900 mb-6">
				What Is Our Commitment to Inclusive Real Estate?
			</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl">
				Our commitment to inclusive real estate includes fair housing principles, equal treatment ensuring every client receives exceptional service, and community focus serving all Las Vegas communities. This commitment ensures everyone has access to professional real estate services regardless of background, income, or circumstances.
			</p>
			<div class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-white">
			<div class="grid md:grid-cols-3 gap-8">
				<div class="text-center">
					<Shield class="w-12 h-12 mx-auto mb-4 text-white opacity-90" />
					<h3 class="text-xl font-bold mb-2">Fair Housing</h3>
					<p class="text-white text-opacity-90">Committed to fair housing principles</p>
				</div>
				<div class="text-center">
					<Handshake class="w-12 h-12 mx-auto mb-4 text-white opacity-90" />
					<h3 class="text-xl font-bold mb-2">Equal Treatment</h3>
					<p class="text-white text-opacity-90">Every client receives exceptional service</p>
				</div>
				<div class="text-center">
					<Heart class="w-12 h-12 mx-auto mb-4 text-white opacity-90" />
					<h3 class="text-xl font-bold mb-2">Community Focus</h3>
					<p class="text-white text-opacity-90">Serving all Las Vegas communities</p>
				</div>
			</div>
		</div>

		<div class="text-center" id="cta">
			<a href="/contact" class="btn-primary">Get Started</a>
		</div>
	</div>
</section>

