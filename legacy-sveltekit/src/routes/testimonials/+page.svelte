<script lang="ts">
	import { Star, Quote } from 'lucide-svelte';

	type ClientType = 'Buyer' | 'Seller' | 'First-Time Buyer' | 'Investor' | string;

	interface Testimonial {
		quote: string;
		author: string;
		location: string;
		rating: number;
		type: ClientType;
	}

	interface TocItem {
		id: string;
		label: string;
	}

	const testimonials: Testimonial[] = [
		{
			quote: "Dr. Duffy helped us find our dream home in West Summerlin. Her expertise and attention to detail made the entire process smooth and stress-free.",
			author: "Sarah Johnson",
			location: "Las Vegas, NV",
			rating: 5,
			type: "Buyer"
		},
		{
			quote: "We sold our home above asking price thanks to Dr. Duffy's strategic marketing and negotiation skills. Highly recommend!",
			author: "Michael Chen",
			location: "Henderson, NV",
			rating: 5,
			type: "Seller"
		},
		{
			quote: "Professional, knowledgeable, and always available. Dr. Duffy is the best real estate agent in Las Vegas!",
			author: "Jennifer Martinez",
			location: "Las Vegas, NV",
			rating: 5,
			type: "Buyer"
		},
		{
			quote: "As a first-time homebuyer, I was nervous about the process. Dr. Duffy guided me through every step and made me feel confident in my decisions.",
			author: "David Thompson",
			location: "North Las Vegas, NV",
			rating: 5,
			type: "First-Time Buyer"
		},
		{
			quote: "We've worked with Dr. Duffy on multiple investment properties. Her market knowledge and negotiation skills are unmatched.",
			author: "Robert & Lisa Anderson",
			location: "Las Vegas, NV",
			rating: 5,
			type: "Investor"
		},
		{
			quote: "Dr. Duffy went above and beyond to help us find the perfect home. She truly cares about her clients and their success.",
			author: "Maria Rodriguez",
			location: "Henderson, NV",
			rating: 5,
			type: "Buyer"
		}
	];

	const tocItems: TocItem[] = [
		{ id: 'stories', label: 'Client Stories' },
		{ id: 'rating', label: 'Overall Rating' },
		{ id: 'why-reviews', label: 'Why Reviews Matter' },
		{ id: 'buyers', label: 'Buyer Experience' },
		{ id: 'sellers', label: 'Seller Experience' },
		{ id: 'investors-relocation', label: 'Investors & Relocation' },
		{ id: 'client-types', label: 'Types of Clients' },
		{ id: 'themes', label: 'Common Themes' },
		{ id: 'faq', label: 'Testimonials FAQ' }
	];
</script>

<svelte:head>
	<title>Client Testimonials | Las Vegas Luxury &amp; Relocation REALTOR | Dr. Janet Duffy</title>
	<meta name="description" content="Hear what clients say about working with Las Vegas Luxury & Relocation REALTOR Dr. Janet Duffy. Real stories from Las Vegas buyers, sellers, investors, and relocation clients." />
	
	<!-- Structured Data -->
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		"name": "Client Testimonials",
		"description": "Client testimonials and reviews for Dr. Janet Duffy",
		"url": "https://www.drjanetduffy.com/testimonials",
		"aggregateRating": {
			"@type": "AggregateRating",
			"ratingValue": "4.9",
			"reviewCount": "150"
		}
	}
	</script>
</svelte:head>

<!-- Hero Section -->
<section class="hero-section bg-gradient-to-b from-primary-50 to-white">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-7xl mx-auto py-12 md:py-16">
			<div class="grid lg:grid-cols-5 gap-10 items-center mb-4">
				<div class="lg:col-span-3 text-center lg:text-left">
					<h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
						What Our Las Vegas Real Estate Clients Say
					</h1>
					<p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
						Testimonials matter because they reveal what it actually feels like to buy or sell a home—not just the numbers on a closing statement. The stories below come from West Summerlin families, Henderson sellers, first-time buyers in North Las Vegas, and investors who trust me to protect both their time and their equity. As you read their experiences, imagine how you want your own real estate story to sound 90 days from now.
					</p>
				</div>
				<div class="lg:col-span-2">
					<figure class="overflow-hidden rounded-2xl shadow-xl border border-gray-100">
						<img
							src="/images/testimonials/happy-las-vegas-clients.jpg"
							alt="Happy Las Vegas homebuyers standing in front of their new home"
							class="h-64 w-full object-cover md:h-80"
							loading="lazy"
						/>
					</figure>
				</div>
			</div>

			<!-- On-page navigation -->
			<nav
				aria-label="Testimonials page sections"
				class="mt-10 rounded-full border border-primary-100 bg-white px-3 py-2 shadow-sm overflow-x-auto scrollbar-hide"
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
	</div>
</section>

<!-- Client Testimonials -->
<section class="section bg-white" id="stories">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-7xl mx-auto">
			<div class="mb-12 text-center">
				<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Do Las Vegas Real Estate Clients Say About Dr. Janet Duffy?</h2>
				<p class="text-lg text-gray-700 mb-6 leading-relaxed max-w-4xl mx-auto">
					Clients consistently describe their experience with Dr. Janet Duffy as calm, prepared, and relentlessly proactive. West Summerlin buyers talk about seamless multiple-offer wins, Henderson sellers emphasize above-asking results and organized timelines, and first-time buyers from across the valley highlight how every step was explained in plain language. Investors point to detailed market research and conservative, data-based guidance that protects long-term returns.
				</p>
				<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto">
					Each testimonial represents a real family, career move, or investment decision. Behind the five-star ratings are stories of late-night contract calls, early-morning showings, and careful coordination with lenders, inspectors, escrow officers, and relocation teams. When you read these reviews, you are seeing how a concierge-level process feels from the client side: steady communication, clear expectations, and results that match or exceed the original goals.
				</p>
			</div>
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
				{#each testimonials as testimonial}
					<div class="card relative">
						<div class="absolute top-4 right-4 opacity-10">
							<Quote class="w-16 h-16 text-primary-600" />
						</div>
						<div class="flex gap-1 mb-4 justify-center">
							{#each Array(testimonial.rating) as _}
								<Star class="w-5 h-5 text-yellow-500 fill-yellow-500" />
							{/each}
						</div>
						<p class="text-gray-700 mb-4 italic text-center relative z-10">"{testimonial.quote}"</p>
						<div class="border-t border-gray-200 pt-4">
							<p class="font-semibold text-gray-900 text-center">{testimonial.author}</p>
							<p class="text-sm text-gray-600 text-center">{testimonial.location}</p>
							<p class="text-xs text-primary-600 text-center mt-1 font-medium">{testimonial.type}</p>
						</div>
					</div>
				{/each}
			</div>

			<!-- Overall Rating -->
			<div class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-center text-white mb-12" id="rating">
				<div class="flex justify-center gap-1 mb-4">
					{#each Array(5) as _}
						<Star class="w-8 h-8 text-yellow-300 fill-yellow-300" />
					{/each}
				</div>
				<p class="text-3xl font-bold mb-2">4.9/5.0</p>
				<p class="text-lg text-white text-opacity-90 mb-2">Average Rating from 150+ Clients</p>
				<p class="text-sm text-white text-opacity-80 max-w-3xl mx-auto">
					This rating reflects a mix of Google reviews, brokerage surveys, and handwritten notes collected at closing. Behind the number are stories of remote relocations completed on time, delicate negotiations handled with care, and post-closing support that continues long after the keys are handed over.
				</p>
			</div>

			<!-- Why Reviews Matter -->
			<div class="mb-12" id="why-reviews">
				<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Why Do Client Reviews Matter When Choosing a Las Vegas REALTOR®?</h2>
				<p class="text-lg text-gray-700 mb-6 leading-relaxed max-w-5xl mx-auto">
					In a market as busy as Las Vegas, almost every agent can show you a highlight reel of just-sold properties. What really separates service levels is what happens in the quiet moments: the late-night phone call when inspection results arrive, the careful explanation of appraisal language, or the honest advice to walk away from a beautiful home that hides expensive problems. Client testimonials give you an unfiltered look at how those moments are handled when there is no camera rolling—whether clients felt rushed, ignored, or genuinely cared for.
				</p>
				<p class="text-lg text-gray-700 leading-relaxed max-w-5xl mx-auto">
					When you read my reviews, you will see recurring themes: calm guidance in stressful situations, detailed communication, and a focus on protecting long-term equity rather than chasing quick closings. You will also notice that clients mention specific communities—Summerlin, Skye Canyon, Henderson, North Las Vegas—which shows how often we are talking about real, hyper-local tradeoffs instead of generic slogans. These stories can help you decide if my approach matches the level of advocacy and clarity you want for your own move.
				</p>
			</div>

			<!-- Buyer Experience Section -->
			<div class="mb-12" id="buyers">
				<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">How Do Las Vegas Homebuyers Describe Their Experience?</h2>
				<p class="text-lg text-gray-700 mb-6 leading-relaxed max-w-5xl mx-auto">
					Buyers frequently mention feeling “heard and protected” throughout the process. West Summerlin families talk about how showings were organized around school and work schedules, with drive times and school options explained clearly for each neighborhood. First-time buyers in North Las Vegas remember in-depth walkthroughs where every contract line and inspection report was translated into plain language before they signed anything. Out-of-state clients describe video tours that did not hide flaws; instead, they were given complete views of traffic noise, sun exposure, and layout quirks so they could decide with confidence from afar.
				</p>
				<p class="text-lg text-gray-700 leading-relaxed max-w-5xl mx-auto">
					What stands out most in buyer testimonials is consistency. Clients talk about quick responses, thoughtful pros-and-cons lists after each showing day, and honest advice when a property looked great on the surface but raised concerns in the data or inspection. Many say they never felt rushed to “hurry up and offer” and instead were coached to wait for the right fit, even if that meant more work for me. When the right home appeared, offers were crafted with a clear strategy tailored to that specific seller and micro-market, which is why so many clients now send friends and colleagues my way.
				</p>
			</div>

			<!-- Seller Experience Section -->
			<div class="mb-12" id="sellers">
				<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">What Do Sellers Say About Working With Dr. Janet Duffy?</h2>
				<p class="text-lg text-gray-700 mb-6 leading-relaxed max-w-5xl mx-auto">
					Seller testimonials often focus on preparation and communication. Clients describe detailed pre-list walkthroughs where they received prioritized lists of updates, staging suggestions tailored to desert living, and realistic timelines to hit the market at the right moment. They talk about professional photography and video that made their homes stand out online, as well as showing schedules that respected families, pets, and remote-work realities.
				</p>
				<p class="text-lg text-gray-700 leading-relaxed max-w-5xl mx-auto">
					During negotiations, sellers highlight how they were given clear breakdowns of each offer—not just price, but financing strength, appraisal risk, repair caps, and rent-back terms. Many mention that they felt calm even when multiple offers arrived at once because they received side-by-side comparison summaries and specific recommendations instead of vague reassurance. Several reviews from retirees and downsizers mention smooth coordination between selling and purchasing, with rent-backs or extended closings that allowed them to move at a comfortable pace.
				</p>
			</div>

			<!-- Investor & Relocation Experience Section -->
			<div class="mb-12" id="investors-relocation">
				<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">How Do Investors and Relocation Clients Rate the Experience?</h2>
				<p class="text-lg text-gray-700 mb-6 leading-relaxed max-w-5xl mx-auto">
					Investors writing testimonials frequently mention conservative underwriting and detailed rent projections. They appreciate that I do not simply chase the highest advertised cap rate; instead, we review HOA rules, maintenance expectations, and neighborhood trajectories to build portfolios that can ride out market cycles. Many out-of-state investors have never seen some of their properties in person, yet feel comfortable because they receive thorough inspection reports, contractor estimates, and periodic check-ins long after closing.
				</p>
				<p class="text-lg text-gray-700 leading-relaxed max-w-5xl mx-auto">
					Relocation clients—from healthcare executives to military families—describe an experience anchored in logistics and empathy. They remember airport pickups, carefully planned “power weekends” with neighborhood tours and school visits, and clear explanations of how Las Vegas weather, commute patterns, and HOA structures differ from their previous markets. Reviews often note that stress levels dropped once there was a clear, written timeline covering everything from pre-approval to utility transfers.
				</p>
			</div>

			<!-- Types of Clients Served -->
			<div class="mb-12" id="client-types">
				<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">What Types of Clients Leave These Reviews?</h2>
				<p class="text-lg text-gray-700 mb-6 leading-relaxed max-w-5xl mx-auto">
					The voices on this page represent a cross-section of the Las Vegas Valley. You will find first-time buyers purchasing townhomes in North Las Vegas, move-up families trading into larger Summerlin homes, retirees downsizing from two-story properties in Henderson, and professionals relocating for work at major hospitals, gaming companies, and technology firms. There are also investors building rental portfolios, military families navigating PCS timelines, and long-time locals repositioning their equity after life changes such as divorce or inheritance.
				</p>
				<p class="text-lg text-gray-700 leading-relaxed max-w-5xl mx-auto">
					What they have in common is not a specific price range or property type, but a desire for thoughtful guidance rather than high-pressure sales tactics. Many clients say in their reviews that they felt comfortable asking “basic” questions, that potential risks were explained clearly, and that their unique constraints—childcare schedules, eldercare responsibilities, complex financing—were built into the plan from day one. If you recognize your own situation in any of these descriptions, there is a good chance my approach will fit you as well.
				</p>
			</div>

			<!-- Themes in Testimonials -->
			<div class="mb-12" id="themes">
				<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">What Common Themes Show Up Across Client Testimonials?</h2>
				<div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3 text-center md:text-left">Communication & Education</h3>
						<p class="text-lg text-gray-700 leading-relaxed">
							Many reviews mention frequent updates, quick responses, and clear explanations. Instead of hearing “don’t worry about it,” clients are walked through inspection results, appraisal language, and HOA documents in everyday terms. This emphasis on education helps reduce surprises and ensures that when you sign, you understand exactly what you are agreeing to—and why. Clients often say they felt more confident and less anxious because nothing was brushed aside or hidden.
						</p>
					</div>
					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3 text-center md:text-left">Strategy & Negotiation</h3>
						<p class="text-lg text-gray-700 leading-relaxed">
							Another recurring theme is strategic thinking. Buyers talk about carefully crafted offers that reflect each seller’s priorities; sellers describe pricing and marketing plans tuned to their specific neighborhood and price band. Both sides mention firm yet respectful negotiations that kept conversations productive instead of adversarial. Clients consistently report feeling that their interests were protected without burning bridges or jeopardizing the deal.
						</p>
					</div>
					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3 text-center md:text-left">Organization & Follow-Through</h3>
						<p class="text-lg text-gray-700 leading-relaxed">
							Testimonials also highlight organization: timelines mapped out in advance, reminders about key deadlines, and proactive coordination with lenders, inspectors, title companies, and HOAs. Several reviews describe situations where potential problems were spotted and resolved early because someone was paying close attention to details. Clients appreciate that they did not have to chase updates or wonder what was happening behind the scenes.
						</p>
					</div>
					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3 text-center md:text-left">Care After Closing</h3>
						<p class="text-lg text-gray-700 leading-relaxed">
							Finally, many clients mention support that continues after closing day: introductions to contractors and landscapers, help understanding tax documents, or quick answers months later when HOA letters or refinance questions arrive. These details matter because real estate decisions do not end at the closing table. The ongoing relationship is part of why so much of my business now comes from repeat clients and personal referrals.
						</p>
					</div>
				</div>
			</div>

			<!-- Testimonials FAQ -->
			<div class="mb-12" id="faq">
				<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions About Client Reviews</h2>
				<div class="max-w-5xl mx-auto space-y-6 text-gray-700 text-lg leading-relaxed">
					<div>
						<h3 class="text-xl font-semibold text-gray-900 mb-1">Are these testimonials from real Las Vegas clients?</h3>
						<p>
							Yes. The reviews on this page reflect real clients I have helped buy, sell, and invest across the Las Vegas Valley. Some began as Google or brokerage reviews; others were emails, thank-you notes, or survey responses shared with permission. Details such as names or identifying information may be slightly adjusted for privacy, but the experiences and outcomes are authentic.
						</p>
					</div>
					<div>
						<h3 class="text-xl font-semibold text-gray-900 mb-1">Can I speak with past clients before deciding to work with you?</h3>
						<p>
							In many cases, yes. Some clients are happy to serve as references for serious buyers and sellers who are considering working together. With their permission, I can connect you with people who have completed transactions similar to the one you are planning—such as relocating from out of state, selling and buying at the same time, or purchasing new construction in a master-planned community.
						</p>
					</div>
					<div>
						<h3 class="text-xl font-semibold text-gray-900 mb-1">What if my situation is more complicated than the stories I see here?</h3>
						<p>
							Many of the most complex transactions do not make it into public review platforms because clients value privacy. I frequently handle moves involving sensitive timing, health concerns, business ownership, or family dynamics that are best kept confidential. If your situation requires discretion, we can talk through the specifics in a private consultation and design a plan that respects both your goals and your need for privacy.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="section bg-gray-50">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Join Our Satisfied Clients?</h2>
			<p class="text-lg text-gray-600 mb-8 leading-relaxed">
				If these stories resonate with the kind of experience you want—clear communication, thoughtful strategy, and calm guidance—we should talk. Whether you are buying your first home, selling a long-time residence, or making a strategic investment, we can create a plan that reflects the same level of care and expertise highlighted in these reviews.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/contact" class="btn-primary">Get Started Today</a>
				<a href="/about" class="btn-secondary">Learn More About Us</a>
			</div>
		</div>
	</div>
</section>

