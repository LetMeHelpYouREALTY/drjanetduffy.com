<script lang="ts">
	import { DollarSign, FileText, TrendingDown, CheckCircle } from 'lucide-svelte';

	interface TocItem {
		id: string;
		label: string;
	}

	const tocItems: TocItem[] = [
		{ id: 'overview', label: 'Overview' },
		{ id: 'options', label: 'Loan Types & Options' },
		{ id: 'process', label: 'Pre-Approval & Process' },
		{ id: 'benefits', label: 'Benefits' },
		{ id: 'cta', label: 'Get Mortgage Guidance' }
	];
</script>

<svelte:head>
	<title>
		Las Vegas Luxury &amp; Relocation Mortgage Guidance | Dr. Janet Duffy REALTOR®
	</title>
	<meta
		name="description"
		content="Mortgage guidance from Las Vegas Luxury &amp; Relocation REALTOR® Dr. Janet Duffy, helping buyers compare loan types, improve approval odds, and secure better terms."
	/>

	<meta
		property="og:title"
		content="Las Vegas Luxury &amp; Relocation Mortgage Guidance | Dr. Janet Duffy REALTOR®"
	/>
	<meta
		property="og:description"
		content="Clear, concierge-style guidance on Las Vegas mortgage options, pre-approval, and financing strategy."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.drjanetduffy.com/services/mortgage-guidance" />
	<meta property="og:site_name" content="Las Vegas Luxury &amp; Relocation REALTOR" />

	<meta name="twitter:card" content="summary_large_image" />
  
	<meta
		name="twitter:title"
		content="Las Vegas Luxury &amp; Relocation Mortgage Guidance | Dr. Janet Duffy REALTOR®"
	/>
	<meta
		name="twitter:description"
		content="Support for first-time, move-up, luxury, and relocating buyers as they navigate Las Vegas home financing."
	/>

	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "WebPage",
			"name": "Las Vegas Luxury & Relocation Mortgage Guidance",
			"description": "Mortgage guidance services for Las Vegas homebuyers, including loan comparisons, pre-approval support, and credit improvement strategies.",
			"url": "https://www.drjanetduffy.com/services/mortgage-guidance",
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
				Expert Mortgage Guidance for Las Vegas Homebuyers
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Expert guidance through home financing options to improve outcomes and build relationships
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

		<div class="mb-16" id="options">
			<h2 class="text-3xl font-bold text-gray-900 mb-6">
				What Mortgage Loan Types and Options Are Available for Las Vegas Homebuyers?
			</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl">
				Las Vegas homebuyers have access to multiple mortgage loan types including conventional loans, FHA programs, VA loans for military families, USDA rural development loans, and jumbo loans for luxury properties. Understanding these options helps you choose the best financing solution for your situation.
			</p>
			<div class="grid md:grid-cols-2 gap-12">
				<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
						<FileText class="w-8 h-8 text-primary-600" />
					</div>
					<h3 class="text-2xl font-bold text-gray-900 mb-4">Loan Types & Options</h3>
					<p class="text-gray-700 leading-relaxed mb-6">
						Understanding different mortgage options available:
					</p>
				<ul class="space-y-3 text-gray-700">
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Conventional loans and FHA programs</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>VA loans for military families</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>USDA rural development loans</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Jumbo loans for luxury properties</span>
					</li>
				</ul>
			</div>

				<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
						<DollarSign class="w-8 h-8 text-primary-600" />
					</div>
					<h3 class="text-2xl font-bold text-gray-900 mb-4">Pre-Approval & Process</h3>
					<p class="text-gray-700 leading-relaxed mb-6">
						Guidance through the mortgage application process:
					</p>
				<ul class="space-y-3 text-gray-700">
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Pre-approval and pre-qualification</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Credit score improvement strategies</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Down payment assistance programs</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Closing cost estimation and planning</span>
					</li>
				</ul>
			</div>
		</div>

		<div class="mb-16" id="benefits">
			<h2 class="text-3xl font-bold text-gray-900 mb-6">
				What Are the Benefits of Professional Mortgage Guidance?
			</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl">
				Professional mortgage guidance provides better rates, smoother processes, and expert advice throughout your home financing journey. Working with a mortgage expert helps you understand your options, improve your credit if needed, and secure the best possible terms for your Las Vegas home purchase.
			</p>
			<div class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-white">
			<div class="grid md:grid-cols-3 gap-8">
				<div class="text-center">
					<TrendingDown class="w-12 h-12 mx-auto mb-4 text-white opacity-90" />
					<h3 class="text-xl font-bold mb-2">Better Rates</h3>
					<p class="text-white text-opacity-90">Find the best mortgage rates available</p>
				</div>
				<div class="text-center">
					<CheckCircle class="w-12 h-12 mx-auto mb-4 text-white opacity-90" />
					<h3 class="text-xl font-bold mb-2">Smooth Process</h3>
					<p class="text-white text-opacity-90">Navigate financing with confidence</p>
				</div>
				<div class="text-center">
					<FileText class="w-12 h-12 mx-auto mb-4 text-white opacity-90" />
					<h3 class="text-xl font-bold mb-2">Expert Advice</h3>
					<p class="text-white text-opacity-90">Professional guidance every step</p>
				</div>
			</div>
		</div>

		<div class="text-center" id="cta">
			<a href="/contact" class="btn-primary">Get Started</a>
		</div>
	</div>
</section>

