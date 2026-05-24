<script lang="ts">
	import { Share2, Users, MessageCircle, TrendingUp } from 'lucide-svelte';

	interface TocItem {
		id: string;
		label: string;
	}

	const tocItems: TocItem[] = [
		{ id: 'overview', label: 'Overview' },
		{ id: 'services', label: 'Social Media Services' },
		{ id: 'benefits', label: 'Benefits' },
		{ id: 'cta', label: 'Boost Your Social Presence' }
	];
</script>

<svelte:head>
	<title>
		Social Media Marketing Services | Las Vegas Luxury &amp; Relocation REALTOR®
	</title>
	<meta
		name="description"
		content="Social media marketing services from Las Vegas Luxury &amp; Relocation REALTOR® Dr. Janet Duffy, showcasing listings and expertise across Facebook, Instagram, LinkedIn, YouTube, and more."
	/>

	<meta
		property="og:title"
		content="Social Media Marketing Services | Las Vegas Luxury &amp; Relocation REALTOR®"
	/>
	<meta
		property="og:description"
		content="Story-driven social media campaigns that highlight Las Vegas properties, client wins, and neighborhood insights."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.drjanetduffy.com/services/social-media-marketing" />
	<meta property="og:site_name" content="Las Vegas Luxury &amp; Relocation REALTOR" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="twitter:title"
		content="Social Media Marketing Services | Las Vegas Luxury &amp; Relocation REALTOR®"
	/>
	<meta
		name="twitter:description"
		content="Platform-specific content and engagement strategies designed to attract and nurture real estate clients online."
	/>

	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "WebPage",
			"name": "Social Media Marketing Services",
			"description": "Social media marketing services for Las Vegas real estate, including platform strategy, content creation, and audience engagement.",
			"url": "https://www.drjanetduffy.com/services/social-media-marketing",
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
				Expert Social Media Marketing for Las Vegas Real Estate
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Expert social media strategies for real estate promotion and client engagement
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
				What Social Media Marketing Services Are Available for Las Vegas Real Estate?
			</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl">
				Social media marketing services for Las Vegas real estate include platform strategy across Facebook, Instagram, LinkedIn, YouTube, and Twitter, plus content creation and engagement strategies. These services build your brand, connect with potential clients, and showcase properties to a wider audience through engaging content and strategic platform presence.
			</p>
			<div class="grid md:grid-cols-2 gap-12">
				<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
						<Share2 class="w-8 h-8 text-primary-600" />
					</div>
					<h3 class="text-2xl font-bold text-gray-900 mb-4">Platform Strategy</h3>
					<p class="text-gray-700 leading-relaxed mb-6">
						Comprehensive social media presence across key platforms:
					</p>
				<ul class="space-y-3 text-gray-700">
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Facebook and Instagram property showcases</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>LinkedIn professional networking</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>YouTube virtual tours and property videos</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Twitter/X real-time market updates</span>
					</li>
				</ul>
			</div>

				<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
						<Users class="w-8 h-8 text-primary-600" />
					</div>
					<h3 class="text-2xl font-bold text-gray-900 mb-4">Content & Engagement</h3>
					<p class="text-gray-700 leading-relaxed mb-6">
						Engaging content that builds relationships and drives action:
					</p>
				<ul class="space-y-3 text-gray-700">
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Property photography and virtual tours</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Market insights and neighborhood spotlights</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Client testimonials and success stories</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Community engagement and local events</span>
					</li>
				</ul>
			</div>
		</div>

		<div class="mb-16" id="benefits">
			<h2 class="text-3xl font-bold text-gray-900 mb-6">
				What Are the Benefits of Social Media Marketing for Real Estate?
			</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl">
				Social media marketing benefits include direct communication with potential clients, brand building to establish your real estate expertise, and viral potential to reach beyond your immediate network. These benefits help you connect with buyers and sellers, showcase properties, and build lasting relationships in the Las Vegas real estate market.
			</p>
			<div class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-white">
			<div class="grid md:grid-cols-3 gap-8">
				<div class="text-center">
					<MessageCircle class="w-12 h-12 mx-auto mb-4 text-white opacity-90" />
					<h3 class="text-xl font-bold mb-2">Direct Communication</h3>
					<p class="text-white text-opacity-90">Connect directly with potential clients</p>
				</div>
				<div class="text-center">
					<TrendingUp class="w-12 h-12 mx-auto mb-4 text-white opacity-90" />
					<h3 class="text-xl font-bold mb-2">Brand Building</h3>
					<p class="text-white text-opacity-90">Establish your real estate expertise</p>
				</div>
				<div class="text-center">
					<Share2 class="w-12 h-12 mx-auto mb-4 text-white opacity-90" />
					<h3 class="text-xl font-bold mb-2">Viral Potential</h3>
					<p class="text-white text-opacity-90">Reach beyond your immediate network</p>
				</div>
			</div>
		</div>

		<div class="text-center" id="cta">
			<a href="/contact" class="btn-primary">Get Started</a>
		</div>
	</div>
</section>

