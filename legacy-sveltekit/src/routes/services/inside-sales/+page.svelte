<script lang="ts">
	import { Phone, Mail, MessageSquare, Clock } from 'lucide-svelte';

	interface TocItem {
		id: string;
		label: string;
	}

	const tocItems: TocItem[] = [
		{ id: 'overview', label: 'Overview' },
		{ id: 'services', label: 'Inside Sales Services' },
		{ id: 'benefits', label: 'Benefits' },
		{ id: 'cta', label: 'Leverage Inside Sales' }
	];
</script>

<svelte:head>
	<title>
		Inside Sales Services | Las Vegas Luxury &amp; Relocation REALTOR®
	</title>
	<meta
		name="description"
		content="Inside sales support from Las Vegas Luxury &amp; Relocation REALTOR® Dr. Janet Duffy, covering calls, email, chat, and CRM follow-up for real estate clients."
	/>

	<meta
		property="og:title"
		content="Inside Sales Services | Las Vegas Luxury &amp; Relocation REALTOR®"
	/>
	<meta
		property="og:description"
		content="Professional follow-up, appointment setting, and digital communication to keep Las Vegas buyers and sellers engaged."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.drjanetduffy.com/services/inside-sales" />
	<meta property="og:site_name" content="Las Vegas Luxury &amp; Relocation REALTOR" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="twitter:title"
		content="Inside Sales Services | Las Vegas Luxury &amp; Relocation REALTOR®"
	/>
	<meta
		name="twitter:description"
		content="Systematic, friendly inside sales support that ensures no Las Vegas lead falls through the cracks."
	/>

	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "WebPage",
			"name": "Inside Sales Services",
			"description": "Inside sales services for Las Vegas real estate, providing phone, email, and online support for lead nurturing and client communication.",
			"url": "https://www.drjanetduffy.com/services/inside-sales",
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
				Professional Inside Sales Services for Real Estate
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Professional phone, email, and online sales support for real estate transactions
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
				What Inside Sales Services Are Available for Las Vegas Real Estate?
			</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl">
				Inside sales services for Las Vegas real estate include phone support for lead qualification and appointment scheduling, plus email and online support for digital communication and CRM management. These services provide 24/7 availability, quick response times, and professional communication to support your real estate transactions.
			</p>
			<div class="grid md:grid-cols-2 gap-12">
				<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
						<Phone class="w-8 h-8 text-primary-600" />
					</div>
					<h3 class="text-2xl font-bold text-gray-900 mb-4">Phone Support</h3>
					<p class="text-gray-700 leading-relaxed mb-6">
						Professional phone-based sales and support services:
					</p>
				<ul class="space-y-3 text-gray-700">
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Lead qualification and follow-up calls</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Appointment scheduling and confirmation</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Client consultation and needs assessment</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Transaction support and coordination</span>
					</li>
				</ul>
			</div>

				<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
						<Mail class="w-8 h-8 text-primary-600" />
					</div>
					<h3 class="text-2xl font-bold text-gray-900 mb-4">Email & Online Support</h3>
					<p class="text-gray-700 leading-relaxed mb-6">
						Comprehensive digital communication and sales support:
					</p>
				<ul class="space-y-3 text-gray-700">
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Email marketing campaigns and follow-ups</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Online chat and instant messaging support</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Document preparation and digital signatures</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>CRM management and lead tracking</span>
					</li>
				</ul>
			</div>
		</div>

		<div class="mb-16" id="benefits">
			<h2 class="text-3xl font-bold text-gray-900 mb-6">
				What Are the Benefits of Inside Sales Services?
			</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl">
				Inside sales services provide 24/7 availability to always be available for your clients, quick response times for immediate follow-up on inquiries, and professional service for consistent, high-quality communication. These benefits ensure you never miss an opportunity and maintain excellent client relationships throughout the transaction process.
			</p>
			<div class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-white">
			<div class="grid md:grid-cols-3 gap-8">
				<div class="text-center">
					<Clock class="w-12 h-12 mx-auto mb-4 text-white opacity-90" />
					<h3 class="text-xl font-bold mb-2">24/7 Availability</h3>
					<p class="text-white text-opacity-90">Always available for your clients</p>
				</div>
				<div class="text-center">
					<MessageSquare class="w-12 h-12 mx-auto mb-4 text-white opacity-90" />
					<h3 class="text-xl font-bold mb-2">Quick Response</h3>
					<p class="text-white text-opacity-90">Immediate follow-up on inquiries</p>
				</div>
				<div class="text-center">
					<Phone class="w-12 h-12 mx-auto mb-4 text-white opacity-90" />
					<h3 class="text-xl font-bold mb-2">Professional Service</h3>
					<p class="text-white text-opacity-90">Consistent, high-quality communication</p>
				</div>
			</div>
		</div>

		<div class="text-center" id="cta">
			<a href="/contact" class="btn-primary">Learn More</a>
		</div>
	</div>
</section>

