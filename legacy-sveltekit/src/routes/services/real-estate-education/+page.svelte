<script lang="ts">
	import { BookOpen, GraduationCap, Users, Lightbulb } from 'lucide-svelte';

	interface TocItem {
		id: string;
		label: string;
	}

	const tocItems: TocItem[] = [
		{ id: 'overview', label: 'Overview' },
		{ id: 'services', label: 'Education Services' },
		{ id: 'benefits', label: 'Benefits' },
		{ id: 'cta', label: 'Learn With Dr. Duffy' }
	];
</script>

<svelte:head>
	<title>
		Las Vegas Luxury &amp; Relocation Real Estate Education | Dr. Janet Duffy REALTOR®
	</title>
	<meta
		name="description"
		content="Real estate education and training from Las Vegas Luxury &amp; Relocation REALTOR® Dr. Janet Duffy, covering legal, regulatory, technology, and sales process best practices."
	/>

	<meta
		property="og:title"
		content="Las Vegas Luxury &amp; Relocation Real Estate Education | Dr. Janet Duffy REALTOR®"
	/>
	<meta
		property="og:description"
		content="Professional real estate education on Nevada law, fair housing, contracts, and modern real estate technology."
	/>
	<meta property="og:type" content="website" />
	<meta
		property="og:url"
		content="https://www.drjanetduffy.com/services/real-estate-education"
	/>
	<meta property="og:site_name" content="Las Vegas Luxury &amp; Relocation REALTOR" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="twitter:title"
		content="Las Vegas Luxury &amp; Relocation Real Estate Education | Dr. Janet Duffy REALTOR®"
	/>
	<meta
		name="twitter:description"
		content="In-depth training for agents and clients on legal, regulatory, and technology topics in Las Vegas real estate."
	/>

	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "WebPage",
			"name": "Las Vegas Luxury & Relocation Real Estate Education",
			"description": "Education and training services from Las Vegas Luxury & Relocation REALTOR Dr. Janet Duffy on legal, regulatory, technology, and sales processes.",
			"url": "https://www.drjanetduffy.com/services/real-estate-education",
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
				Expert Real Estate Education & Training Services
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				In-depth knowledge in legal, regulatory, technology, and sales process matters
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
				What Real Estate Education Services Do We Provide?
			</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl">
				Real estate education services include legal and regulatory training covering Nevada real estate laws, fair housing compliance, contract law, and disclosure requirements. We also provide technology and process education covering MLS systems, digital transaction management, virtual tours, and CRM systems to stay current with industry best practices.
			</p>
			<div class="grid md:grid-cols-2 gap-12">
				<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
						<BookOpen class="w-8 h-8 text-primary-600" />
					</div>
					<h3 class="text-2xl font-bold text-gray-900 mb-4">Legal & Regulatory</h3>
					<p class="text-gray-700 leading-relaxed mb-6">
						Comprehensive understanding of real estate law and regulations:
					</p>
				<ul class="space-y-3 text-gray-700">
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Nevada real estate laws and regulations</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Fair housing compliance and requirements</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Contract law and transaction documentation</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Disclosure requirements and obligations</span>
					</li>
				</ul>
			</div>

				<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
						<Lightbulb class="w-8 h-8 text-primary-600" />
					</div>
					<h3 class="text-2xl font-bold text-gray-900 mb-4">Technology & Process</h3>
					<p class="text-gray-700 leading-relaxed mb-6">
						Expertise in modern real estate technology and processes:
					</p>
				<ul class="space-y-3 text-gray-700">
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>MLS systems and property databases</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Digital transaction management</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Virtual tours and marketing technology</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>CRM and lead management systems</span>
					</li>
				</ul>
			</div>
		</div>

		<div class="mb-16" id="benefits">
			<h2 class="text-3xl font-bold text-gray-900 mb-6">
				What Are the Benefits of Real Estate Education?
			</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl">
				Real estate education benefits include expert knowledge to stay current with industry best practices, client education to empower clients with knowledge, and continuous learning for ongoing professional development. These benefits ensure you provide the highest quality service and stay ahead of industry changes.
			</p>
			<div class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-white">
			<div class="grid md:grid-cols-3 gap-8">
				<div class="text-center">
					<GraduationCap class="w-12 h-12 mx-auto mb-4 text-white opacity-90" />
					<h3 class="text-xl font-bold mb-2">Expert Knowledge</h3>
					<p class="text-white text-opacity-90">Stay current with industry best practices</p>
				</div>
				<div class="text-center">
					<Users class="w-12 h-12 mx-auto mb-4 text-white opacity-90" />
					<h3 class="text-xl font-bold mb-2">Client Education</h3>
					<p class="text-white text-opacity-90">Empower clients with knowledge</p>
				</div>
				<div class="text-center">
					<BookOpen class="w-12 h-12 mx-auto mb-4 text-white opacity-90" />
					<h3 class="text-xl font-bold mb-2">Continuous Learning</h3>
					<p class="text-white text-opacity-90">Ongoing professional development</p>
				</div>
			</div>
		</div>

		<div class="text-center" id="cta">
			<a href="/contact" class="btn-primary">Learn More</a>
		</div>
	</div>
</section>

