<script lang="ts">
	import { FileText, Award, CheckCircle, DollarSign } from 'lucide-svelte';

	interface TocItem {
		id: string;
		label: string;
	}

	const tocItems: TocItem[] = [
		{ id: 'overview', label: 'Overview' },
		{ id: 'services', label: 'Appraisal Services' },
		{ id: 'benefits', label: 'Benefits' },
		{ id: 'cta', label: 'Request Appraisal' }
	];
</script>

<svelte:head>
	<title>
		Las Vegas Luxury &amp; Relocation General Appraisal Services | Dr. Janet Duffy REALTOR®
	</title>
	<meta
		name="description"
		content="General appraisal services for Las Vegas residential, commercial, and land properties from Las Vegas Luxury &amp; Relocation REALTOR® Dr. Janet Duffy."
	/>

	<meta
		property="og:title"
		content="Las Vegas Luxury &amp; Relocation General Appraisal Services | Dr. Janet Duffy REALTOR®"
	/>
	<meta
		property="og:description"
		content="Comprehensive property appraisals that exceed state certification standards for Las Vegas homes, land, and commercial assets."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.drjanetduffy.com/services/general-appraisal" />
	<meta property="og:site_name" content="Las Vegas Luxury &amp; Relocation REALTOR" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="twitter:title"
		content="Las Vegas Luxury &amp; Relocation General Appraisal Services | Dr. Janet Duffy REALTOR®"
	/>
	<meta
		name="twitter:description"
		content="Professional, lender-friendly appraisal reports for Las Vegas residential, commercial, and land properties."
	/>

	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "WebPage",
			"name": "Las Vegas Luxury & Relocation General Appraisal Services",
			"description": "General appraisal services for Las Vegas properties, delivering USPAP-compliant valuations for residential, commercial, and land assets.",
			"url": "https://www.drjanetduffy.com/services/general-appraisal",
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
				Professional General Appraisal Services in Las Vegas
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Comprehensive property appraisals exceeding state certification requirements
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
				What General Appraisal Services Are Available for Las Vegas Properties?
			</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl">
				General appraisal services for Las Vegas properties include residential property appraisals, commercial property valuations, land and development appraisals, and specialized property assessments. These comprehensive appraisals exceed state certification requirements and provide accurate valuations for various property types throughout the Las Vegas area.
			</p>
			<div class="grid md:grid-cols-2 gap-12">
				<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
						<FileText class="w-8 h-8 text-primary-600" />
					</div>
					<h3 class="text-2xl font-bold text-gray-900 mb-4">Appraisal Types</h3>
					<p class="text-gray-700 leading-relaxed mb-6">
						Comprehensive appraisal services for various property types:
					</p>
				<ul class="space-y-3 text-gray-700">
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Residential property appraisals</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Commercial property valuations</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Land and development appraisals</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Specialized property assessments</span>
					</li>
				</ul>
			</div>

				<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
						<Award class="w-8 h-8 text-primary-600" />
					</div>
					<h3 class="text-2xl font-bold text-gray-900 mb-4">Certification & Standards</h3>
					<p class="text-gray-700 leading-relaxed mb-6">
						Appraisals that meet and exceed professional standards:
					</p>
				<ul class="space-y-3 text-gray-700">
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>USPAP compliant appraisals</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>State-certified appraisers</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Detailed market analysis and comparables</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Comprehensive documentation and reports</span>
					</li>
				</ul>
			</div>
		</div>

		<div class="mb-16" id="benefits">
			<h2 class="text-3xl font-bold text-gray-900 mb-6">
				What Are the Benefits of Professional General Appraisals?
			</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl">
				Professional general appraisals provide accurate valuations through professional, unbiased property assessment, lender acceptance with appraisals accepted by all major lenders, and detailed reports with comprehensive documentation for your records. These benefits ensure you receive reliable property valuations that meet all professional standards.
			</p>
			<div class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-white">
			<div class="grid md:grid-cols-3 gap-8">
				<div class="text-center">
					<DollarSign class="w-12 h-12 mx-auto mb-4 text-white opacity-90" />
					<h3 class="text-xl font-bold mb-2">Accurate Valuation</h3>
					<p class="text-white text-opacity-90">Professional, unbiased property assessment</p>
				</div>
				<div class="text-center">
					<CheckCircle class="w-12 h-12 mx-auto mb-4 text-white opacity-90" />
					<h3 class="text-xl font-bold mb-2">Lender Acceptance</h3>
					<p class="text-white text-opacity-90">Appraisals accepted by all major lenders</p>
				</div>
				<div class="text-center">
					<FileText class="w-12 h-12 mx-auto mb-4 text-white opacity-90" />
					<h3 class="text-xl font-bold mb-2">Detailed Reports</h3>
					<p class="text-white text-opacity-90">Comprehensive documentation for your records</p>
				</div>
			</div>
		</div>

		<div class="text-center" id="cta">
			<a href="/contact" class="btn-primary">Request Appraisal</a>
		</div>
	</div>
</section>

