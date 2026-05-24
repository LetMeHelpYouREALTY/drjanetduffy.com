<script lang="ts">
	import { Home, Shield, Smartphone, Wifi } from 'lucide-svelte';

	interface TocItem {
		id: string;
		label: string;
	}

	const tocItems: TocItem[] = [
		{ id: 'overview', label: 'Overview' },
		{ id: 'features', label: 'Smart Features' },
		{ id: 'privacy', label: 'Privacy & Security' },
		{ id: 'services', label: 'How We Help' },
		{ id: 'cta', label: 'Plan Your Smart Home Move' }
	];
</script>

<svelte:head>
	<title>
		Smart Home Technology Services | Las Vegas Luxury &amp; Relocation REALTOR®
	</title>
	<meta
		name="description"
		content="Smart home technology guidance from Las Vegas Luxury &amp; Relocation REALTOR® Dr. Janet Duffy, helping buyers evaluate features, privacy, and long-term value."
	/>

	<meta
		property="og:title"
		content="Smart Home Technology Services | Las Vegas Luxury &amp; Relocation REALTOR®"
	/>
	<meta
		property="og:description"
		content="Evaluate smart thermostats, security, automation, and privacy considerations when buying or selling in Las Vegas."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.drjanetduffy.com/services/smart-home-technology" />
	<meta property="og:site_name" content="Las Vegas Luxury &amp; Relocation REALTOR" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="twitter:title"
		content="Smart Home Technology Services | Las Vegas Luxury &amp; Relocation REALTOR®"
	/>
	<meta
		name="twitter:description"
		content="Tech-focused guidance for Las Vegas buyers comparing smart home features, security, and resale value."
	/>

	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "WebPage",
			"name": "Smart Home Technology Services",
			"description": "Smart home technology services helping Las Vegas buyers and sellers evaluate features, integration, and privacy.",
			"url": "https://www.drjanetduffy.com/services/smart-home-technology",
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
				Smart Home Technology Services for Las Vegas Properties
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Expertise in smart home features, privacy, and technology integration for Las Vegas properties
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

		<div class="mb-16" id="features">
			<h2 class="text-3xl font-bold text-gray-900 mb-6">
				What Smart Home Features Should Las Vegas Homebuyers Look For?
			</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl">
				Today's homebuyers increasingly value smart home technology. Las Vegas properties with smart home features often sell faster and for higher prices. I help you understand and evaluate smart home features including smart thermostats, automated lighting, security systems, voice-activated controls, and energy monitoring systems.
			</p>
			<div class="grid md:grid-cols-2 gap-12">
				<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
						<Smartphone class="w-8 h-8 text-primary-600" />
					</div>
					<h3 class="text-2xl font-bold text-gray-900 mb-4">Smart Home Features</h3>
					<p class="text-gray-700 leading-relaxed mb-6">
						Today's homebuyers increasingly value smart home technology. I help you understand and evaluate smart home features including:
					</p>
				<ul class="space-y-3 text-gray-700">
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Smart thermostats and HVAC systems</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Automated lighting and security systems</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Voice-activated assistants and controls</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Smart appliances and energy monitoring</span>
					</li>
				</ul>
			</div>

				<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
						<Shield class="w-8 h-8 text-primary-600" />
					</div>
					<h3 class="text-2xl font-bold text-gray-900 mb-4">Privacy & Security</h3>
					<p class="text-gray-700 leading-relaxed mb-6">
						Understanding privacy implications and security considerations is crucial when evaluating smart home technology:
					</p>
				<ul class="space-y-3 text-gray-700">
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Data privacy and device security</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Network security and encryption</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Device compatibility and integration</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Future-proofing your investment</span>
					</li>
				</ul>
			</div>
		</div>

		<div class="mb-16" id="services">
			<h2 class="text-3xl font-bold text-gray-900 mb-6">
				How Can I Help You with Smart Home Technology?
			</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl">
				I provide buyer guidance to evaluate smart home features when viewing properties, technology assessment to understand existing systems, and privacy consultation to navigate security considerations. My expertise helps you make informed decisions about smart home technology in Las Vegas properties.
			</p>
			<div class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-white">
			<div class="grid md:grid-cols-3 gap-8">
				<div class="text-center">
					<Home class="w-12 h-12 mx-auto mb-4 text-white opacity-90" />
					<h3 class="text-xl font-bold mb-2">Buyer Guidance</h3>
					<p class="text-white text-opacity-90">Evaluate smart home features when viewing properties</p>
				</div>
				<div class="text-center">
					<Wifi class="w-12 h-12 mx-auto mb-4 text-white opacity-90" />
					<h3 class="text-xl font-bold mb-2">Technology Assessment</h3>
					<p class="text-white text-opacity-90">Understand the value and functionality of existing systems</p>
				</div>
				<div class="text-center">
					<Shield class="w-12 h-12 mx-auto mb-4 text-white opacity-90" />
					<h3 class="text-xl font-bold mb-2">Privacy Consultation</h3>
					<p class="text-white text-opacity-90">Navigate privacy and security considerations</p>
				</div>
			</div>
		</div>

		<div class="text-center" id="cta">
			<a href="/contact" class="btn-primary">Get Started</a>
		</div>
	</div>
</section>

