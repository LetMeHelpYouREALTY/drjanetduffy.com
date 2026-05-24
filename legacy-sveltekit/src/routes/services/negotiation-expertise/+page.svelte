<script lang="ts">
	import { TrendingUp, Target, Award, Handshake } from 'lucide-svelte';

	interface TocItem {
		id: string;
		label: string;
	}

	const tocItems: TocItem[] = [
		{ id: 'overview', label: 'Overview' },
		{ id: 'services', label: 'Negotiation Services' },
		{ id: 'benefits', label: 'Benefits' },
		{ id: 'cta', label: 'Work With Dr. Duffy' }
	];
</script>

<svelte:head>
	<title>
		Las Vegas Luxury &amp; Relocation Negotiation Expertise | Dr. Janet Duffy REALTOR®
	</title>
	<meta
		name="description"
		content="Negotiation expertise from Las Vegas Luxury &amp; Relocation REALTOR® Dr. Janet Duffy, helping buyers and sellers secure better prices, terms, and outcomes."
	/>

	<meta
		property="og:title"
		content="Las Vegas Luxury &amp; Relocation Negotiation Expertise | Dr. Janet Duffy REALTOR®"
	/>
	<meta
		property="og:description"
		content="Advanced, data-informed negotiation strategies tailored to Las Vegas residential and investment transactions."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.drjanetduffy.com/services/negotiation-expertise" />
	<meta property="og:site_name" content="Las Vegas Luxury &amp; Relocation REALTOR" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="twitter:title"
		content="Las Vegas Luxury &amp; Relocation Negotiation Expertise | Dr. Janet Duffy REALTOR®"
	/>
	<meta
		name="twitter:description"
		content="Offer, counter-offer, and contingency strategies designed to protect your interests in the Las Vegas market."
	/>

	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "WebPage",
			"name": "Las Vegas Luxury & Relocation Negotiation Expertise",
			"description": "Negotiation services for Las Vegas buyers and sellers, focused on pricing, terms, repairs, and contingency strategies.",
			"url": "https://www.drjanetduffy.com/services/negotiation-expertise",
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
				Expert Real Estate Negotiation Services in Las Vegas
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Advanced negotiation strategies to achieve optimal outcomes for clients
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
				What Real Estate Negotiation Services Do We Provide?
			</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl">
				Our real estate negotiation services include buyer negotiations to secure the best purchase terms, seller negotiations to maximize value, and strategic approaches tailored to Las Vegas market conditions. We negotiate purchase prices, repairs, closing costs, contingencies, and timelines to achieve optimal outcomes for our clients.
			</p>
			<div class="grid md:grid-cols-2 gap-12">
				<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
						<Target class="w-8 h-8 text-primary-600" />
					</div>
					<h3 class="text-2xl font-bold text-gray-900 mb-4">Buyer Negotiations</h3>
					<p class="text-gray-700 leading-relaxed mb-6">
						Strategic negotiation on behalf of buyers to secure the best terms:
					</p>
				<ul class="space-y-3 text-gray-700">
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Purchase price negotiation</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Repair and inspection negotiations</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Closing cost and concession strategies</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Contingency and timeline negotiations</span>
					</li>
				</ul>
			</div>

				<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
						<TrendingUp class="w-8 h-8 text-primary-600" />
					</div>
					<h3 class="text-2xl font-bold text-gray-900 mb-4">Seller Negotiations</h3>
					<p class="text-gray-700 leading-relaxed mb-6">
						Expert negotiation to maximize seller value and minimize risk:
					</p>
				<ul class="space-y-3 text-gray-700">
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Multiple offer strategies</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Counter-offer development</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Terms and condition optimization</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Protecting seller interests throughout</span>
					</li>
				</ul>
			</div>
		</div>

		<div class="mb-16" id="benefits">
			<h2 class="text-3xl font-bold text-gray-900 mb-6">
				What Are the Benefits of Expert Real Estate Negotiation?
			</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl">
				Expert real estate negotiation provides better purchase prices, optimized terms, reduced risk, and smoother transactions. Our negotiation expertise helps buyers save money and sellers maximize value while protecting your interests throughout the transaction process.
			</p>
			<div class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-white">
			<h2 class="text-3xl font-bold mb-6 text-center">Negotiation Results</h2>
			<div class="grid md:grid-cols-3 gap-8">
				<div class="text-center">
					<Award class="w-12 h-12 mx-auto mb-4 text-white opacity-90" />
					<h3 class="text-xl font-bold mb-2">Better Prices</h3>
					<p class="text-white text-opacity-90">Secure optimal pricing for clients</p>
				</div>
				<div class="text-center">
					<Handshake class="w-12 h-12 mx-auto mb-4 text-white opacity-90" />
					<h3 class="text-xl font-bold mb-2">Favorable Terms</h3>
					<p class="text-white text-opacity-90">Negotiate terms that work for you</p>
				</div>
				<div class="text-center">
					<Target class="w-12 h-12 mx-auto mb-4 text-white opacity-90" />
					<h3 class="text-xl font-bold mb-2">Successful Closings</h3>
					<p class="text-white text-opacity-90">Close deals that benefit all parties</p>
				</div>
			</div>
		</div>

		<div class="text-center" id="cta">
			<a href="/contact" class="btn-primary">Learn More</a>
		</div>
	</div>
</section>

