<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { Grid3x3, List, TrendingUp } from 'lucide-svelte';

	interface TocItem {
		href: string;
		label: string;
	}

	let mounted = false;

	onMount(() => {
		mounted = true;
	});

	// Canonical URL always points to base /properties page (without query parameters)
	// This tells search engines that all query parameter variations are the same page
	const canonicalUrl = 'https://www.drjanetduffy.com/properties';

	const tocItems: TocItem[] = [
		{ href: '#available-properties', label: 'Available Properties' },
		{ href: '#views', label: 'Grid, List & Past Sales' },
		{ href: '#search-strategy', label: 'Search Strategy' },
		{ href: '#neighborhoods', label: 'Neighborhood Fit' },
		{ href: '#financing', label: 'Financing & Offers' },
		{ href: '#data-confidence', label: 'Data Confidence' },
		{ href: '#relocation', label: 'Relocation Support' },
		{ href: '#investors', label: 'Investors & Second Homes' },
		{ href: '#sellers', label: 'Listing Experiences' },
		{ href: '#faq', label: 'Buyer FAQs' }
	];
</script>

<svelte:head>
	<title>Las Vegas Homes for Sale | Las Vegas Luxury &amp; Relocation REALTOR | Dr. Janet Duffy</title>
	<meta name="description" content="Browse all available Las Vegas homes for sale with Las Vegas Luxury & Relocation REALTOR Dr. Janet Duffy. View updated MLS listings, compare neighborhoods, and schedule private tours." />
	<meta name="keywords" content="Las Vegas homes for sale, property listings, MLS, real estate, Dr. Janet Duffy" />
	
	<!-- Canonical URL - always points to base /properties page -->
	<link rel="canonical" href={canonicalUrl} />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.drjanetduffy.com/properties" />
	<meta property="og:title" content="Las Vegas Homes for Sale | Dr. Janet Duffy REALTOR®" />
	<meta property="og:description" content="Browse all available Las Vegas homes for sale. Updated listings from the MLS." />
	
	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://www.drjanetduffy.com/properties" />
	<meta property="twitter:title" content="Las Vegas Homes for Sale | Dr. Janet Duffy REALTOR®" />
	<meta property="twitter:description" content="Browse all available Las Vegas homes for sale. Updated listings from the MLS." />
	
	<!-- Structured Data -->
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		"name": "Las Vegas Homes for Sale",
		"description": "Las Vegas Luxury & Relocation REALTOR curated collection of Las Vegas homes and properties for sale.",
		"url": "https://www.drjanetduffy.com/properties",
		"isPartOf": {
			"@type": "WebSite",
			"name": "Las Vegas Luxury & Relocation REALTOR | Dr. Janet Duffy",
			"url": "https://www.drjanetduffy.com"
		},
		"mainEntity": {
			"@type": "ItemList",
			"name": "Las Vegas Real Estate Listings",
			"itemListOrder": "https://schema.org/ItemListOrderDescending",
			"numberOfItems": 0
		}
	}
	</script>
</svelte:head>

<section class="section relative bg-gradient-to-b from-white to-slate-50">
	<div class="container-premium">
		<div class="grid lg:grid-cols-5 gap-10 items-center mb-10">
			<div class="lg:col-span-3 text-center lg:text-left">
				<h1 class="font-display text-5xl md:text-6xl font-bold mb-6 text-gray-900 tracking-tight">
					Las Vegas Homes &amp; Properties for Sale
				</h1>
				<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent lg:mx-0 mx-auto mb-6"></div>
				<p class="text-xl text-gray-600 max-w-4xl mx-auto lg:mx-0 leading-relaxed">
					Welcome to your command center for every actively marketed home, condo, townhome, and luxury estate across the Las Vegas Valley. Think of this page as both an MLS window and a concierge briefing: listings refresh in real time, while the guidance below translates raw data into actionable advice. Whether you are relocating from the coast, upsizing within Summerlin, investing in Skye Canyon, or shopping for a view property in MacDonald Highlands, you will find curated strategies, neighborhood breakdowns, financing updates, investor insights, and answers to the questions I hear most often in 2025. Bookmark it, return frequently, and share it with anyone partnering on your move.
				</p>
			</div>
			<div class="lg:col-span-2">
				<figure class="overflow-hidden rounded-2xl shadow-xl border border-gray-100">
					<img
						src="/images/properties/las-vegas-homes-grid.jpg"
						alt="A grid of Las Vegas homes with pools and desert landscaping"
						class="h-64 w-full object-cover md:h-80"
						loading="lazy"
					/>
				</figure>
			</div>
		</div>

		<div class="mb-10 text-center">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Las Vegas Homes and Properties Are Available for Sale?</h2>
			<p class="text-lg text-gray-700 mb-6 leading-relaxed max-w-5xl mx-auto">
				Our Marketplace includes everything from $350K lock-and-leave condos in Downtown Las Vegas to $5M custom estates in The Summit. You will see single-story ranches in North Las Vegas, multi-gen floor plans in Skye Hills, brand-new townhomes near the medical district, and golf-front masterpieces overlooking Bear’s Best. Each listing feeds directly from the MLS, so price adjustments, pending statuses, and back-on-market surprises appear here the moment agents update them. Save your favorites, request alerts, or ask me for off-market opportunities that fit your criteria before they ever debut publicly.
			</p>
			<p class="text-lg text-gray-700 leading-relaxed max-w-5xl mx-auto">
				Not sure where to start? Scroll through the featured grid below, then explore the question-based sections that follow. They outline my methodology for aligning budget, lifestyle, and long-term equity goals with the right neighborhoods, builders, and financing tools. When you are ready to tour, I will organize efficient routes, secure access to guard-gated communities, and provide detailed comparison sheets so each property review feels clear—not chaotic.
			</p>
		</div>

		<!-- On-page navigation summary -->
		<nav class="mb-10 border-t border-gray-200 pt-6">
			<div class="flex items-center justify-between mb-3">
				<p class="text-sm font-semibold text-gray-700 uppercase tracking-wide">On this page</p>
			</div>
			<div class="flex gap-3 overflow-x-auto scrollbar-hide py-1">
				{#each tocItems as item}
					<a
						href={item.href}
						class="flex-shrink-0 px-4 py-2 rounded-full border border-gray-200 bg-white text-xs sm:text-sm font-medium text-gray-700 hover:text-primary-600 hover:border-primary-300 hover:bg-primary-50 transition-colors whitespace-nowrap"
					>
						{item.label}
					</a>
				{/each}
			</div>
		</nav>
	
		{#if mounted && browser}
			<div class="realscout-wrapper">
				<realscout-office-listings 
					agent-encoded-id="QWdlbnQtMjI1MDUw"
					sort-order="STATUS_AND_SIGNIFICANT_CHANGE"
					listing-status="For Sale"
					property-types="SFR,MF,TC">
				</realscout-office-listings>
			</div>
		{:else}
			<div class="loading-skeleton">
				<div class="grid-premium md:grid-cols-2 lg:grid-cols-3 gap-8">
					{#each Array(9) as _}
						<div class="animate-pulse bg-white rounded-2xl shadow-lg overflow-hidden">
							<div class="bg-gray-200 h-64"></div>
							<div class="p-6 space-y-4">
								<div class="h-6 bg-gray-200 rounded w-3/4"></div>
								<div class="h-5 bg-gray-200 rounded w-1/2"></div>
								<div class="h-4 bg-gray-200 rounded w-2/3"></div>
							</div>
						</div>
					{/each}
				</div>
				<p class="text-center text-gray-600 mt-12 text-lg">Loading property listings...</p>
			</div>
		{/if}

		<div class="mt-10 bg-primary-50 border border-primary-100 rounded-2xl p-6 md:p-8 text-center md:text-left flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8">
			<div class="flex-1">
				<h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Need Help Narrowing the Options?</h2>
				<p class="text-gray-700 text-base md:text-lg">
					If you are relocating, comparing luxury communities, or trying to decode MLS data, connect with your Las Vegas Luxury &amp; Relocation REALTOR® for a quick strategy call. We can turn this listings feed into a focused short list tailored to your timeline, budget, and lifestyle.
				</p>
			</div>
			<div class="flex flex-col sm:flex-row gap-3">
				<a href="/contact" class="btn-primary">Schedule a Call</a>
				<a href="/relocation" class="btn-secondary">Plan a Relocation</a>
			</div>
		</div>

	</div>
</section>

<!-- Property Views -->
<section id="views" class="section bg-white">
	<div class="container-premium">
		<div class="text-center mb-10">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How Can You Explore Las Vegas Properties in Different Views?</h2>
			<p class="text-lg text-gray-700 mb-6 leading-relaxed max-w-4xl mx-auto">
				Choose the browsing experience that fits your decision style. Visual movers love the immersive grid experience, detail-oriented analysts prefer the list layout with sortable metrics, and data-driven buyers reference past sales to understand appreciation and pricing leverage. Toggle between all three without losing saved searches or notes.
			</p>
		</div>
		<div class="grid-premium md:grid-cols-3 gap-8">
			<a href="/listings-embedded" class="group relative bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
				<div class="text-center">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
						<Grid3x3 class="w-8 h-8 text-white" />
					</div>
					<h3 class="font-display text-xl font-bold mb-2 text-gray-900">Grid View</h3>
					<p class="text-gray-600 text-sm">Swipe-friendly cards optimized for tablets and phones.</p>
				</div>
			</a>
			<a href="/listings-list" class="group relative bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
				<div class="text-center">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
						<List class="w-8 h-8 text-white" />
					</div>
					<h3 class="font-display text-xl font-bold mb-2 text-gray-900">List View</h3>
					<p class="text-gray-600 text-sm">Sort by price, days on market, or lot size with a click.</p>
				</div>
			</a>
			<a href="/past-sales" class="group relative bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
				<div class="text-center">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
						<TrendingUp class="w-8 h-8 text-white" />
					</div>
					<h3 class="font-display text-xl font-bold mb-2 text-gray-900">Past Sales</h3>
					<p class="text-gray-600 text-sm">Review closed comps and learn what buyers actually paid.</p>
				</div>
			</a>
		</div>
	</div>
</section>

<!-- Search Strategy -->
<section id="search-strategy" class="section bg-gray-50">
	<div class="container-premium">
		<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">How Do We Personalize Your Las Vegas Property Search Strategy?</h2>
		<p class="text-lg text-gray-700 leading-relaxed mb-6 max-w-5xl mx-auto">
			A successful search starts with clarity. During our kickoff session we identify your top priorities—budget, timing, commute, school preferences, outdoor hobbies, energy efficiency goals, or investment targets. I translate those into a “must/want” matrix that keeps us focused when choices feel overwhelming. From there we combine MLS data, private office exclusives, builder priority lists, and my own pocket inventory to deliver a curated feed rather than a generic firehose of links.
		</p>
		<p class="text-lg text-gray-700 leading-relaxed mb-6 max-w-5xl mx-auto">
			You will receive property dossiers that summarize HOA dues, utility histories, rental restrictions, and neighborhood vibe so you can compare apples to apples. Touring days are mapped with logistical precision—no zigzagging across the valley—and include time for neighborhood drives, coffee stop scouting, and quick grocery or medical facility checks. If you are remote, I conduct high-definition video tours with neighborhood commentary, decibel readings, and drone footage when needed.
		</p>
		<p class="text-lg text-gray-700 leading-relaxed max-w-5xl mx-auto">
			Finally, we automate updates by price band, architectural style, or builder stage so you see new opportunities the second they surface. You will never miss a price reduction or a just-listed floor plan that matches your blueprint.
		</p>
	</div>
</section>

<!-- Neighborhoods -->
<section id="neighborhoods" class="section bg-white">
	<div class="container-premium">
		<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Which Las Vegas Neighborhoods Align With Different Lifestyles?</h2>
		<p class="text-lg text-gray-700 leading-relaxed mb-6 max-w-5xl mx-auto">
			Each master-planned community offers a distinct rhythm. Summerlin delivers ten villages with top-tier schools, extensive trail networks, and luxury shopping at Downtown Summerlin. Skye Canyon blends modern architecture with access to Mount Charleston adventures, while Henderson’s MacDonald Highlands and Anthem cater to view seekers and private-club enthusiasts. North Las Vegas and Centennial Hills attract buyers needing larger lots, RV parking, and proximity to Creech or the Speedway. Downtown and Arts District condos place you near culinary hotspots and the medical corridor.
		</p>
		<p class="text-lg text-gray-700 leading-relaxed mb-6 max-w-5xl mx-auto">
			I help you compare more than just price: we evaluate elevation (and therefore temperature), HOA governance styles, upcoming commercial development, service provider reputation, and resale velocity. You will know which streets have direct Red Rock views, which cul-de-sacs stay shaded in the afternoon, and which neighborhoods impose rental caps or design approvals. By the time you choose your short list, you can clearly articulate why one community feels better than the next.
		</p>
		<p class="text-lg text-gray-700 leading-relaxed max-w-5xl mx-auto">
			Already own in Las Vegas? The same neighborhood intelligence ensures we market your home to the buyer profile most likely to pay a premium, whether that’s relocation executives, medical professionals, or investors chasing strong cap rates.
		</p>
	</div>
</section>

<!-- Financing -->
<section id="financing" class="section bg-gray-50">
	<div class="container-premium">
		<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">What Financing and Offer Structures Win in 2025?</h2>
		<p class="text-lg text-gray-700 leading-relaxed mb-6 max-w-5xl mx-auto">
			Interest rates may fluctuate, but strategic financing keeps you competitive. I partner with lenders who offer extended rate locks, 2-1 buydowns, jumbo products with 10% down, physician loans, and DSCR investor programs. Before we write an offer you will see payment scenarios for your top homes plus estimated cash-to-close that includes transfer taxes, title fees, and HOA reserves. This eliminates surprises and positions you to act decisively when the right property appears.
		</p>
		<p class="text-lg text-gray-700 leading-relaxed mb-6 max-w-5xl mx-auto">
			Offer structures vary by neighborhood. In Summerlin villages with multiple bids we lean on appraisal gaps, inspection caps, or escalation clauses. In areas with longer days on market we focus on seller concessions, rate buydowns, or contingent timelines that allow you to sell first. Investors often use portfolio loans or all-cash offers with delayed financing to outmaneuver institutional buyers. Every tactic is benchmarked against live absorption statistics and seller motivation so you never overpay.
		</p>
		<p class="text-lg text-gray-700 leading-relaxed max-w-5xl mx-auto">
			Sellers also benefit because I pre-qualify buyers, verify funds, and confirm lender performance history before recommending an offer. That diligence reduces fall-through risk and protects your moving plans.
		</p>
	</div>
</section>

<!-- Data Confidence -->
<section id="data-confidence" class="section bg-white">
	<div class="container-premium">
		<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">How Do We Use Data to Keep You Confident From Offer to Close?</h2>
		<p class="text-lg text-gray-700 leading-relaxed mb-6 max-w-5xl mx-auto">
			Data is only useful when it is digestible. I provide weekly market scorecards that cover new listings, contract counts, price reductions, and absorption rates by ZIP code and price bracket. You will see how your target home compares to the top 10 active competitors and the last five sales. Color-coded charts flag opportunities (motivated sellers, stale listings) and risks (overpriced flips, pending litigation, special assessments).
		</p>
		<p class="text-lg text-gray-700 leading-relaxed mb-6 max-w-5xl mx-auto">
			During escrow, I track each contingency deadline inside a shared timeline so everyone—lender, title, inspectors, contractors—knows when deliverables are due. If an appraisal or inspection triggers negotiations, we use comps, contractor bids, and cost-benefit summaries to reach a resolution quickly. Investors receive rent forecasts, expense models, and sensitivity analyses so they can validate returns even when rents or rates shift.
		</p>
		<p class="text-lg text-gray-700 leading-relaxed max-w-5xl mx-auto">
			The result is peace of mind. You will never wonder “Is this normal?” because the data will show exactly where we stand versus the market.
		</p>
	</div>
</section>

<!-- Relocation -->
<section id="relocation" class="section bg-gray-50">
	<div class="container-premium">
		<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">What Support Do Remote and Relocating Buyers Receive?</h2>
		<p class="text-lg text-gray-700 leading-relaxed mb-6 max-w-5xl mx-auto">
			Relocation is a high-stakes puzzle. I coordinate with corporate mobility teams, military PCS offices, and third-party relocation firms to keep reimbursements on track. We conduct in-depth video consultations, ship community guidebooks to your current address, and schedule immersive “Power Weekends” that include targeted tours, school visits, and meetings with trusted lenders or tax advisors. Between trips you receive narrated video tours, drone flyovers, and ambient sound recordings so you can evaluate noise levels, traffic flow, and natural light.
		</p>
		<p class="text-lg text-gray-700 leading-relaxed mb-6 max-w-5xl mx-auto">
			Once under contract, I act as your local project manager. I attend inspections, FaceTime you from design appointments, and coordinate vendors so punch lists are complete before you arrive. Need temporary housing, vehicle shipping, or school registration help? My relocation partners handle the details while I keep the real estate side calm and predictable.
		</p>
		<p class="text-lg text-gray-700 leading-relaxed max-w-5xl mx-auto">
			Many clients close remotely, so we leverage mobile notaries, secure document portals, and video walkthroughs before funding. You land in Las Vegas with utilities connected, smart-home apps transferred, and grocery delivery scheduled.
		</p>
	</div>
</section>

<!-- Investors -->
<section id="investors" class="section bg-white">
	<div class="container-premium">
		<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">How Can Investors and Second-Home Buyers Maximize Returns?</h2>
		<p class="text-lg text-gray-700 leading-relaxed mb-6 max-w-5xl mx-auto">
			Investors benefit from a different lens. I identify submarkets with strong rent-to-price ratios (currently North Las Vegas, Centennial Hills, select portions of Henderson) and highlight HOAs that welcome long-term rentals. For furnished executive rentals, we focus on proximity to hospitals, corporate campuses, or Allegiant Stadium. Luxury second-home buyers receive guidance on STR regulations, insurance considerations, and property management introductions so you can enjoy the home without logistical stress.
		</p>
		<p class="text-lg text-gray-700 leading-relaxed mb-6 max-w-5xl mx-auto">
			You will see cash-flow models, appreciation forecasts, and exit strategies for each property. Need 1031 coordination or portfolio analysis? I work directly with CPAs and accommodators to schedule closings, identify replacement properties, and document timelines. I also monitor new construction incentives that boost investor ROI—such as seller-funded rate buydowns or prepaid HOA dues.
		</p>
		<p class="text-lg text-gray-700 leading-relaxed max-w-5xl mx-auto">
			For second-home owners, concierge services include stocking the pantry before you arrive, coordinating home watch visits, and connecting you with golf, fitness, or social memberships that match your interests.
		</p>
	</div>
</section>

<!-- Sellers -->
<section id="sellers" class="section bg-gray-50">
	<div class="container-premium">
		<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">What Listing Experiences Are Available for Sellers Ready to Move Up or Downsize?</h2>
		<p class="text-lg text-gray-700 leading-relaxed mb-6 max-w-5xl mx-auto">
			Sellers using this page often want to preview their next purchase while preparing to list. I offer tiered listing experiences ranging from essential marketing packages to ultra-premium concierge launches. Every plan includes pricing strategy backed by live comps, professional staging or merchandising, magazine-quality photo/video, social ad campaigns, and agent-to-agent promotion. Premium launches add twilight shoots, influencer collaborations, and lifestyle films that showcase the dream your home delivers.
		</p>
		<p class="text-lg text-gray-700 leading-relaxed mb-6 max-w-5xl mx-auto">
			Because we already outlined your next-home criteria, we synchronize timelines using rent-backs, bridge loans, or delayed possession so you are never homeless between closings. Weekly seller reports highlight showing feedback, digital engagement, and competitive inventory so you can adjust strategy with confidence. When offers arrive, we evaluate not just price but also lender strength, earnest money, contingencies, and buyer motivation.
		</p>
		<p class="text-lg text-gray-700 leading-relaxed max-w-5xl mx-auto">
			If you need repairs or design updates to command top dollar, my vetted vendors step in quickly. Many provide pay-at-closing options so you can transform first and pay later.
		</p>
	</div>
</section>

<!-- FAQ -->
<section id="faq" class="section bg-white">
	<div class="container-premium">
		<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">What Questions Do Buyers Ask Before Scheduling Showings?</h2>
		<p class="text-lg text-gray-700 leading-relaxed mb-8 text-center max-w-4xl mx-auto">
			Below are a few of the most common questions I answer each week. Use them as a quick primer and reach out when you are ready for deeper guidance.
		</p>
		<div class="space-y-6">
			<div class="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
				<h3 class="text-2xl font-bold text-gray-900 mb-3">How quickly do I need to tour a new listing?</h3>
				<p class="text-gray-700 leading-relaxed">
					In hot price bands (sub-$700K single-family or renovated townhomes) you should plan to tour within 24-48 hours. I set up instant alerts and can preview a property on your behalf if you are unavailable. Higher-end homes usually allow a slightly longer decision window, but the best-priced listings still move within the first week.
				</p>
			</div>
			<div class="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
				<h3 class="text-2xl font-bold text-gray-900 mb-3">Can I buy before I sell my current home?</h3>
				<p class="text-gray-700 leading-relaxed">
					Yes. Bridge-loan products, HELOCs, and delayed-contingency agreements allow you to write non-contingent offers while we prep your existing home for market. We map both transactions on one calendar so you know exactly when funds, movers, and cleaners are scheduled.
				</p>
			</div>
			<div class="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
				<h3 class="text-2xl font-bold text-gray-900 mb-3">Do new construction homes cost more than resale?</h3>
				<p class="text-gray-700 leading-relaxed">
					Not always. Builders often offer incentives—rate buydowns, closing cost credits, appliance packages—that narrow the gap. However, you should factor in lot premiums, backyard completion, and window coverings. I compare total cost of ownership (including energy usage and HOA fees) so you can make a fair choice.
				</p>
			</div>
			<div class="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
				<h3 class="text-2xl font-bold text-gray-900 mb-3">What happens if the appraisal comes in low?</h3>
				<p class="text-gray-700 leading-relaxed">
					We have options: renegotiate price, split the difference, request a reconsideration with stronger comps, or cover the gap if the home is worth it long-term. Because I analyze comps before we offer, surprises are rare, but I am ready with data and strategy if they occur.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- CTA -->
<section class="section bg-gradient-to-r from-primary-600 via-primary-500 to-primary-700 text-white">
	<div class="container-premium text-center">
		<h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Tour the Best Homes in Las Vegas?</h2>
		<p class="text-lg max-w-3xl mx-auto mb-8 text-white/90">
			Let’s create a property plan that fits your lifestyle, protects your budget, and gets you into the right home on the right timeline. I’m available for in-person consultations, video strategy sessions, or quick discovery calls.
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<a href="/contact" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">Schedule a Strategy Session</a>
			<a href="/home-value" class="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">Plan the Sale of Your Current Home</a>
		</div>
	</div>
</section>

<style>
	.realscout-wrapper {
		min-height: 600px;
		width: 100%;
		contain: layout style paint;
		position: relative;
	}
	
	.loading-skeleton {
		min-height: 600px;
		width: 100%;
	}
	
	/* Override RealScout styles for this page */
	.realscout-wrapper :global(realscout-office-listings) {
		--rs-grid-columns: 3;
		--rs-card-hover-shadow: 0 10px 20px rgba(0,0,0,0.15);
	}
</style>
