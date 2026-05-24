<script lang="ts">
	import { HelpCircle, ChevronDown } from 'lucide-svelte';

	interface FAQQuestion {
		q: string;
		a: string;
	}

	interface FAQCategory {
		category: string;
		questions: FAQQuestion[];
	}
	
	const faqs: FAQCategory[] = [
		{
			category: 'Buying a Home',
			questions: [
				{
					q: 'How do I get started with buying a home in Las Vegas?',
					a: `The best first step is a conversation about your goals, timeline, and budget, followed by a strong pre-approval from a local lender who understands Las Vegas underwriting. From there, we translate your wish list into a short list of communities—such as Summerlin, Skye Canyon, Henderson, or North Las Vegas—based on commute, schools, and lifestyle. I will set up custom searches, send you curated property dossiers, and coordinate showings or detailed video tours so you can move forward confidently.`
				},
				{
					q: 'What should I look for when viewing properties?',
					a: `In Las Vegas it is important to evaluate not just the interior of the home but also elevation, sun exposure, HOA requirements, and proximity to major roads. We will look closely at roof, HVAC, pool equipment, and windows because desert conditions can accelerate wear on systems. I will help you compare each property’s true cost of ownership—including utilities, HOA fees, and likely maintenance—so you can choose the home that fits your lifestyle and long-term budget.`
				},
				{
					q: 'How long does it take to buy a home?',
					a: `Most financed purchases in Las Vegas close within 30–35 days once we are under contract; cash deals can wrap in as little as 10–15 days if title is clear. The largest variables are your readiness (pre-approval, down payment funds, decision makers aligned) and how quickly we can complete inspections and appraisal. I map the entire process on a timeline so you know exactly what is happening each week and where we have flexibility or deadlines.`
				},
				{
					q: 'Do I need a real estate agent to buy a home?',
					a: `You are not legally required to use an agent, but in a fast-moving market like Las Vegas it is highly advisable. A dedicated buyer’s agent protects your interests, explains local customs (such as how HOAs, transfer fees, and short contingency periods work), and spots red flags that online photos never show. I negotiate on your behalf, coordinate inspections and repairs, and help you avoid costly mistakes that can appear months or years after closing.`
				}
			]
		},
		{
			category: 'Selling a Home',
			questions: [
				{
					q: 'How do you determine my home\'s value?',
					a: `I prepare a comprehensive market analysis that compares your property to recent sales, active listings, and expired listings in your micro-neighborhood. In Las Vegas we also factor in elevation, views, pool presence, updates, and where your home sits within its master-planned community or HOA. You will see a pricing range backed by data plus a strategy recommendation for hitting the market at the sweet spot that attracts strong offers without leaving money on the table.`
				},
				{
					q: 'What should I do to prepare my home for sale?',
					a: `Preparation is powerful. We usually start with decluttering, deep cleaning, neutralizing paint where needed, refreshing desert landscaping, and addressing obvious repairs so buyers focus on value—not to-do lists. I will walk your home with a staging and photography lens, prioritize which improvements actually move the needle in your price range, and connect you with vendors who can help if you prefer a turnkey approach.`
				},
				{
					q: 'How long will it take to sell my home?',
					a: `In today’s Las Vegas market, well-prepared and correctly priced homes often secure strong activity within the first 7–10 days and go under contract within 19–30 days. Luxury properties or unique homes may take longer depending on buyer pool, price point, and seasonality. I will give you realistic expectations up front based on current absorption rates in your specific neighborhood and price band.`
				},
				{
					q: 'What are the costs of selling a home?',
					a: `Typical seller costs include brokerage fees, title and escrow fees, transfer taxes, HOA resale packages, and any repairs or concessions negotiated with the buyer. If we choose to invest in staging, pre-inspections, or targeted marketing campaigns, those will be discussed and approved in advance. Before we list, I provide a detailed net sheet so you can see your projected proceeds at several price and offer-scenario points.`
				}
			]
		},
		{
			category: 'Financing & Mortgages',
			questions: [
				{
					q: 'How much do I need for a down payment?',
					a: `Down payments vary by loan type: many conventional buyers aim for 20% to avoid mortgage insurance, but there are solid options at 3–10% down depending on your credit and debt profile. FHA loans may allow as little as 3.5% down, and VA loans can offer 0% down for qualified veterans and active-duty service members. I can introduce you to trusted local lenders who will explain how each option impacts your payment, closing costs, and competitiveness in the Las Vegas market.`
				},
				{
					q: 'What credit score do I need to buy a home?',
					a: `Minimum scores depend on loan type: many FHA programs start at 580+, while conventional lenders often look for 620+ with stronger pricing and terms available at 700–740 and above. Even if your score is lower today, a good lender can map out a 3–12 month plan to improve it through targeted actions—not guesswork. When we talk, I will help you understand which score tiers matter most for your price range and how to position yourself for the best possible rate.`
				},
				{
					q: 'Should I get pre-approved before house hunting?',
					a: `Yes—pre-approval is essential in our market. It tells sellers that you are financially vetted, helps us focus on homes that truly fit your budget, and allows us to move quickly when the right property appears. In competitive neighborhoods, strong local pre-approvals can be the deciding factor between your offer and another buyer’s, so I only recommend lenders who communicate clearly, meet deadlines, and have earned listing agents’ trust.`
				}
			]
		},
		{
			category: 'Las Vegas Market',
			questions: [
				{
					q: 'What are the best neighborhoods in Las Vegas?',
					a: `“Best” depends on your lifestyle, budget, and commute. Many buyers gravitate toward Summerlin for its villages, schools, trails, and proximity to Red Rock; others choose Henderson or Green Valley for views, established neighborhoods, and access to the 215 Beltway. Luxury clients may focus on The Ridges, MacDonald Highlands, or Seven Hills, while value-seeking buyers often explore North Las Vegas or Centennial Hills for larger lots and newer construction. I will help you compare neighborhoods using data and on-the-ground experience so we can find the right fit for you.`
				},
				{
					q: 'Is Las Vegas a good place to invest in real estate?',
					a: `Las Vegas continues to attract investors because of strong rental demand, a diverse employment base, and prices that remain competitive compared to coastal markets. Certain submarkets—near major hospitals, employment centers, and freeways—offer particularly attractive rent-to-price ratios and long-term appreciation potential. I provide neighborhood-level data, rent estimates, and hold-period analysis so you can decide whether a specific property truly supports your investment goals instead of relying on headlines alone.`
				},
				{
					q: 'What\'s the current Las Vegas real estate market like?',
					a: `The Las Vegas market is dynamic and varies by price bracket and community. In many areas, well-priced homes still sell quickly with multiple offers, while over-priced or poorly presented listings sit longer and require price adjustments. Median prices, days on market, and inventory levels shift month to month, so I maintain a Market Insights page and provide customized updates for your specific neighborhood and budget. During our consultation, we will review fresh numbers rather than relying on outdated averages.`
				}
			]
		},
		{
			category: 'Las Vegas-Specific Questions',
			questions: [
				{
					q: 'Do I need a pool in Las Vegas?',
					a: `You do not need a pool to enjoy Las Vegas, but many buyers consider it a quality-of-life upgrade—especially in homes over $500K where roughly two-thirds include pools. A well-maintained pool can add 5–10% to resale value and offers 7–8 months of comfortable use each year. Ongoing costs such as service ($150–$200 per month), utilities, and occasional repairs should be part of your budget conversation, and I can connect you with trusted pool inspectors so you know exactly what you are buying.`
				},
				{
					q: 'What are property taxes like in Summerlin?',
					a: `Clark County’s base property tax rate is roughly 0.74% of assessed value, which is significantly lower than many coastal states. For a $650K Summerlin home, you might expect around $4,800 per year in taxes, with some neighborhoods adding modest special improvement district fees of $200–$500 annually. When we evaluate homes, we will review actual tax records and HOA fees together so you can compare total carrying costs by community rather than just looking at list price.`
				},
				{
					q: 'How do I keep my garage cool in Las Vegas summers?',
					a: `In peak summer months, uninsulated garages can easily reach 120–140°F. Many homeowners combat this with a combination of insulated garage doors, attic or wall insulation, radiant barriers, and powered ventilation fans. For people who use the garage as a workshop or gym, a ductless mini-split unit ($2,000–$4,000 installed in many cases) can make the space usable year-round. During inspections, we pay attention to how the garage is built so you know what upgrades might be helpful after closing.`
				},
				{
					q: 'Should I buy a home on a golf course in Las Vegas?',
					a: `Golf-course homes can command 15–25% premiums because of views, privacy, and prestige, but they are not the right fit for everyone. You will enjoy open fairway vistas and fewer direct neighbors, yet you should also consider early-morning maintenance noise, potential errant golf balls, and HOA or course rules that may limit backyard modifications or fencing. When we tour golf communities, I will point out cart-path locations, tee-box proximity, and sun orientation so you can weigh the lifestyle benefits against the tradeoffs.`
				},
				{
					q: 'When is the best time to move to Las Vegas?',
					a: `There is no single “perfect” month, but patterns do exist. October through April typically offer comfortable moving weather and a good balance of inventory and motivated sellers, with October and November often bringing strong opportunities before the holiday slowdown. Summer months (May–September) can be hotter and less comfortable for touring, yet they sometimes deliver better pricing as casual buyers pause. Ultimately, the best time is when your personal and financial timelines align—and I can help you adjust strategy to the season we are in.`
				}
			]
		},
		{
			category: 'Working With Me',
			questions: [
				{
					q: 'What makes you different from other real estate agents?',
					a: `With 15+ years of experience, 150+ properties sold, and over $50M in closed volume, I bring both deep local knowledge and a calm, process-driven approach to every transaction. Clients often highlight my ability to anticipate issues before they become problems, explain complex topics in plain English, and negotiate firmly without creating unnecessary conflict. I also operate as a concierge, coordinating lenders, inspectors, contractors, and escrow so you can focus on big decisions rather than logistics.`
				},
				{
					q: 'How do you communicate with clients?',
					a: `I adapt my communication style to your preferences—phone, text, email, Zoom, or a combination of all four. You can expect proactive updates at key milestones (showings, offers, inspections, appraisal, loan approval, and closing) rather than having to chase information. Many clients appreciate my habit of sending short recap emails or video messages summarizing what happened, what is next, and any decisions we need to make together.`
				},
				{
					q: 'Do you work with first-time buyers?',
					a: `Absolutely—I love working with first-time buyers. We will spend extra time on education: breaking down financing options, reviewing contracts line by line, and discussing what to expect from inspections, appraisals, and HOAs. My goal is for you to feel empowered rather than overwhelmed, so you will always know why we are taking a particular step and how it protects you.`
				},
				{
					q: 'What areas do you serve?',
					a: `I serve the entire Las Vegas Valley, including Summerlin, Skye Canyon, Centennial Hills, Henderson, Green Valley, North Las Vegas, and surrounding communities throughout Clark County. Because I study each micro-market closely, I can tell you how pricing, HOA structures, school options, and commute patterns differ from one area to another. If you are considering a community I do not believe in, I will explain why and suggest alternatives that better fit your goals.`
				}
			]
		}
	];
	
	let openCategory: number | null = null;
	let openQuestion: string | null = null;
	
	function toggleCategory(categoryIndex: number) {
		openCategory = openCategory === categoryIndex ? null : categoryIndex;
	}
	
	function toggleQuestion(categoryIndex: number, questionIndex: number) {
		const key = `${categoryIndex}-${questionIndex}`;
		openQuestion = openQuestion === key ? null : key;
	}
</script>

<svelte:head>
	<title>Las Vegas Luxury &amp; Relocation FAQ | Dr. Janet Duffy REALTOR®</title>
	<meta
		name="description"
		content="Las Vegas Luxury & Relocation FAQ answering common questions about buying, selling, investing, and relocating with a concierge-level REALTOR®."
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.drjanetduffy.com/faq" />
	<meta property="og:title" content="Las Vegas Luxury &amp; Relocation FAQ | Dr. Janet Duffy REALTOR®" />
	<meta
		property="og:description"
		content="Get expert answers to common Las Vegas Luxury & Relocation questions about buying, selling, investing, and moving to Las Vegas."
	/>

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://www.drjanetduffy.com/faq" />
	<meta property="twitter:title" content="Las Vegas Luxury &amp; Relocation FAQ | Dr. Janet Duffy REALTOR®" />
	<meta
		property="twitter:description"
		content="Las Vegas Luxury & Relocation REALTOR® answering your key questions about the Las Vegas market, neighborhoods, and the buying and selling process."
	/>

	<!-- Structured Data - FAQPage -->
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": [
			{
				"@type": "Question",
				"name": "How do I get started with buying a home in Las Vegas?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "The best first step is a conversation about your goals, timeline, and budget, followed by a strong pre-approval from a local lender who understands Las Vegas underwriting. From there, we translate your wish list into a short list of communities based on commute, schools, and lifestyle, and set up curated searches and showings or video tours."
				}
			},
			{
				"@type": "Question",
				"name": "How long does it take to buy a home in Las Vegas?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "Most financed purchases in Las Vegas close within 30–35 days once under contract; cash deals can wrap in as little as 10–15 days if title is clear. Readiness and how quickly inspections and appraisal are completed are the biggest variables."
				}
			},
			{
				"@type": "Question",
				"name": "Is Las Vegas a good place to invest in real estate?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "Las Vegas continues to attract investors because of strong rental demand, a diverse employment base, and competitive prices versus coastal markets. Submarkets near major hospitals, employment centers, and freeways often offer attractive rent-to-price ratios and long-term appreciation potential."
				}
			}
		]
	}
	</script>
</svelte:head>

<section class="section bg-gradient-to-b from-white via-gray-50 to-white">
	<div class="container-premium">
		<div class="text-center mb-16">
			<h1 class="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900">
				Las Vegas Real Estate Questions Answered
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				This FAQ is a living playbook built from real conversations with buyers, sellers, investors, and relocation clients across the Las Vegas Valley. Instead of generic national advice, you will find answers grounded in our desert market—Summerlin master plans, Skye Canyon new construction, Henderson view homes, North Las Vegas investment zones, and everything in between. Use these questions to get oriented, then reach out when you are ready for advice tailored to your exact timeline, price range, and neighborhood short list.
			</p>
		</div>

		<!-- How to Use This FAQ -->
		<div class="max-w-4xl mx-auto mb-10 space-y-4">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">How Should You Use This Las Vegas Real Estate FAQ?</h2>
			<p class="text-lg text-gray-700 leading-relaxed">
				The fastest way to use this page is to start with the section that matches where you are today. If you are thinking about buying, begin with the “Buying a Home” and “Financing & Mortgages” categories. If you are preparing to sell, focus on the “Selling a Home” and “Las Vegas Market” sections. Relocation clients and investors often jump straight to “Las Vegas-Specific Questions” and then circle back to financing once they have a feel for neighborhoods and price points.
			</p>
			<p class="text-lg text-gray-700 leading-relaxed">
				Remember that every answer here is a starting point, not the final word. Market conditions, your income profile, and your risk tolerance can make the “right” strategy look different from one person to the next. As you read, jot down anything that surprises you or feels unclear—those are perfect topics for our first call or video consultation. Together we can translate these general guidelines into a detailed plan for your specific move or investment.
			</p>
		</div>

		<!-- What Topics Are Covered -->
		<div class="max-w-4xl mx-auto mb-12 space-y-4">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">What Types of Questions Are Answered on This Page?</h2>
			<p class="text-lg text-gray-700 leading-relaxed">
				This FAQ covers the full lifecycle of a Las Vegas real estate transaction. You will find questions about how to get started, how long things really take, and what to expect from inspections, appraisals, and HOA reviews. There are also sections dedicated to local nuances: whether you truly need a pool, how to think about Summerlin property taxes and HOA fees, how to keep garages cooler in 110°F summers, and when it makes sense to pay premiums for golf-course or mountain-view lots.
			</p>
			<p class="text-lg text-gray-700 leading-relaxed">
				Finally, the “Working With Me” category explains what it is like to have a concierge-level agent managing your move. You will learn how I communicate, which areas I serve, and how I support first-time buyers, move-up sellers, and seasoned investors differently. If you do not see your exact question listed, use the contact links at the bottom—I am happy to answer it directly and may even add it to a future update of this page.
			</p>
		</div>

		<!-- On-page navigation for FAQ categories -->
		<div class="max-w-4xl mx-auto mb-10">
			<nav class="border-t border-gray-200 pt-5">
				<p class="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3 text-center">
					On this page
				</p>
				<div class="flex flex-wrap justify-center gap-3">
					{#each faqs as category, index}
						<a
							href={"#category-" + index}
							class="px-4 py-2 rounded-full border border-gray-200 bg-white text-xs sm:text-sm font-medium text-gray-700 hover:text-primary-600 hover:border-primary-300 hover:bg-primary-50 transition-colors whitespace-nowrap"
						>
							{category.category}
						</a>
					{/each}
				</div>
			</nav>
		</div>

		<!-- Biggest Mistakes Section -->
		<div class="max-w-4xl mx-auto mb-12 space-y-4">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">What Are the Biggest Mistakes Buyers and Sellers Make in Las Vegas?</h2>
			<p class="text-lg text-gray-700 leading-relaxed">
				Many first-time Las Vegas buyers make the mistake of focusing only on list price while overlooking HOA layers, property taxes, and long-term utility costs in our desert climate. Others rush into new construction without an advocate, assuming the builder’s sales office represents them, and later discover limitations on backyard use, rental rules, or view protections they did not fully understand. On the selling side, a common error is either over-pricing based on outdated headlines or under-pricing out of fear, instead of using fresh data for their specific micro-neighborhood.
			</p>
			<p class="text-lg text-gray-700 leading-relaxed">
				Another frequent mistake is trying to time the market perfectly instead of aligning decisions with real-life milestones such as job changes, family needs, or health considerations. Buyers may sit on the sidelines waiting for a “perfect” interest rate while rents rise and suitable inventory passes by; sellers may delay listing until they feel completely ready, only to find that their preferred window for schools or relocation is compressed. Throughout this FAQ, I call out these decision points so you can move strategically rather than reactively—and so we can design a plan that respects both the numbers and your quality of life.
			</p>
		</div>

		<!-- HOAs, Master Plans & Fees -->
		<div class="max-w-4xl mx-auto mb-12 space-y-4">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">How Do HOAs, Master Plans, and Fees Work Together in Las Vegas?</h2>
			<p class="text-lg text-gray-700 leading-relaxed">
				Las Vegas is known for its master-planned communities—Summerlin, Skye Canyon, Green Valley, and others—where you may encounter more than one HOA layer. For example, a Summerlin property can be subject to a master association, a village association, and sometimes a sub-association if the neighborhood is gated or attached. Each layer can carry separate fees, rules, and architectural guidelines, which is why it is critical to review the full HOA stack rather than just the number on the listing.
			</p>
			<p class="text-lg text-gray-700 leading-relaxed">
				As we evaluate homes, we look beyond monthly dues to understand what those fees actually cover: landscaping, pools, security, event programming, reserves, and special improvement districts. I walk you through CC&Rs, rules and regulations, and recent meeting minutes when available so we can spot red flags such as pending assessments or chronic maintenance issues. This page includes several HOA-related questions in the “Las Vegas-Specific Questions” and “Working With Me” sections, and during a consultation we can dig into documents for specific properties you are considering.
			</p>
		</div>

		<!-- Out-of-State Buyers & Relocation -->
		<div class="max-w-4xl mx-auto mb-12 space-y-4">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">What Should Out-of-State Buyers Know Before Moving to Las Vegas?</h2>
			<p class="text-lg text-gray-700 leading-relaxed">
				Out-of-state buyers often underestimate how different Las Vegas can feel from their current market. Our climate influences everything from roofing materials and landscaping choices to how you use outdoor spaces nine months of the year. Commute patterns revolve around major freeways like the 215, 95, and 15, with micro-differences in traffic depending on whether you work on or off the Strip. School districts, charter options, and private-school commutes can also shape which side of the valley makes the most sense for your family.
			</p>
			<p class="text-lg text-gray-700 leading-relaxed">
				Before you commit to a specific neighborhood, I recommend a structured discovery process: map reviews, drive-time checks at your typical commute hours, and honest conversations about lifestyle priorities such as walkability, views, and access to hiking or golf. Many relocation clients use this FAQ as a starting point, then schedule a virtual consultation where we layer in current market data and community-specific pros and cons. The goal is not to sell you on Las Vegas, but to help you decide which version of Las Vegas fits you best—and whether buying now or renting first is the smarter move.
			</p>
		</div>

		<div class="max-w-4xl mx-auto space-y-6">
			{#each faqs as category, categoryIndex}
				<div
					id={"category-" + categoryIndex}
					class="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
				>
					<button
						on:click={() => toggleCategory(categoryIndex)}
						class="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
					>
						<div class="flex items-center gap-4">
							<HelpCircle class="w-6 h-6 text-primary-600" />
							<h2 class="text-2xl font-bold text-gray-900">{category.category}</h2>
						</div>
						<ChevronDown class="w-5 h-5 text-gray-500 transition-transform {openCategory === categoryIndex ? 'rotate-180' : ''}" />
					</button>
					
					{#if openCategory === categoryIndex}
						<div class="px-6 pb-6 space-y-4">
							{#each category.questions as question, questionIndex}
								<div class="border-t border-gray-200 pt-4">
									<button
										on:click={() => toggleQuestion(categoryIndex, questionIndex)}
										class="w-full flex items-start justify-between text-left gap-4"
									>
										<h3 class="text-lg font-semibold text-gray-900 flex-1">{question.q}</h3>
										<ChevronDown class="w-5 h-5 text-gray-400 flex-shrink-0 mt-1 transition-transform {openQuestion === `${categoryIndex}-${questionIndex}` ? 'rotate-180' : ''}" />
									</button>
									{#if openQuestion === `${categoryIndex}-${questionIndex}`}
										<p class="text-gray-700 mt-3 leading-relaxed pl-0">{question.a}</p>
									{/if}
								</div>
							{/each}
						</div>
					{/if}
				</div>
			{/each}
		</div>

		<div class="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-center text-white">
			<h2 class="text-3xl md:text-4xl font-bold mb-4">Still Have Questions About Las Vegas Real Estate?</h2>
			<p class="text-lg text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
				I'm here to help! Contact me directly for personalized answers to your specific real estate questions. With 15+ years of Las Vegas real estate experience, I'll provide expert guidance on buying, selling, financing, market conditions, and working with me to help you achieve your real estate goals.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/contact" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">Contact Me</a>
				<a href="tel:+17027667668" class="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">Call (702) 766-7668</a>
			</div>
		</div>
	</div>
</section>

