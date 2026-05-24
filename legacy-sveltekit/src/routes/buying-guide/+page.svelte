<script lang="ts">
	import { Home, CheckCircle, FileText, Key, Shield, TrendingUp, DollarSign } from 'lucide-svelte';

	interface TocItem {
		id: string;
		label: string;
	}

	const tocItems: TocItem[] = [
		{ id: 'process', label: 'Buying Steps' },
		{ id: 'financing', label: 'Financing Options' },
		{ id: 'costs', label: 'Buyer Costs' },
		{ id: 'summerlin', label: 'Summerlin & HOAs' },
		{ id: 'desert', label: 'Desert Considerations' },
		{ id: 'faq', label: 'Buyer FAQ' },
		{ id: 'cta', label: 'Work With Dr. Duffy' }
	];
</script>

<svelte:head>
	<title>
		Las Vegas Luxury &amp; Relocation Home Buying Guide | Dr. Janet Duffy REALTOR®
	</title>
	<meta
		name="description"
		content="Step-by-step Las Vegas home buying guide from Las Vegas Luxury &amp; Relocation REALTOR® Dr. Janet Duffy, covering financing, neighborhoods, HOAs, inspections, and closing."
	/>

	<meta
		property="og:title"
		content="Las Vegas Luxury &amp; Relocation Home Buying Guide | Dr. Janet Duffy REALTOR®"
	/>
	<meta
		property="og:description"
		content="Learn how to buy a home in Las Vegas with clear steps, local insights, and expert guidance from Dr. Janet Duffy."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.drjanetduffy.com/buying-guide" />
	<meta property="og:site_name" content="Las Vegas Luxury &amp; Relocation REALTOR" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="twitter:title"
		content="Las Vegas Luxury &amp; Relocation Home Buying Guide | Dr. Janet Duffy REALTOR®"
	/>
	<meta
		name="twitter:description"
		content="A practical Las Vegas home buying roadmap with financing, HOA, and desert-living tips."
	/>

	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "WebPage",
			"name": "Las Vegas Luxury & Relocation Home Buying Guide",
			"description": "A comprehensive home buying guide for Las Vegas, including financing options, HOA insights, and desert-specific considerations.",
			"url": "https://www.drjanetduffy.com/buying-guide",
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
				Complete Guide to Buying a Home in Las Vegas
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Your step-by-step guide to buying a home in Las Vegas
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

		<!-- Buying Process Steps -->
		<div class="mb-16" id="process">
			<h2 class="text-3xl font-bold text-gray-900 mb-6">How Does the Home Buying Process Work in Las Vegas?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl">
				Buying a home in Las Vegas involves five key steps: getting pre-approved, finding your home, making an offer, completing inspections, and closing. Each step requires careful planning and expert guidance to ensure a successful purchase in our competitive market.
			</p>
			<div class="space-y-8">
				<div class="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
					<div class="flex items-start gap-6">
						<div class="flex-shrink-0 w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
							<span class="text-2xl font-bold text-primary-600">1</span>
						</div>
						<div class="flex-1">
							<h3 class="text-2xl font-bold text-gray-900 mb-3">Get Pre-Approved for Your Mortgage</h3>
							<p class="text-gray-700 leading-relaxed mb-4">
								Before you start looking at homes, get pre-approved for a mortgage. This helps you understand your budget, shows sellers you're serious, and speeds up the process once you find a home.
							</p>
							<ul class="space-y-2 text-gray-700">
								<li class="flex items-start gap-2">
									<CheckCircle class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
									<span>Gather financial documents (pay stubs, tax returns, bank statements)</span>
								</li>
								<li class="flex items-start gap-2">
									<CheckCircle class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
									<span>Check your credit score and address any issues</span>
								</li>
								<li class="flex items-start gap-2">
									<CheckCircle class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
									<span>Compare loan options and rates from multiple lenders</span>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div class="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
					<div class="flex items-start gap-6">
						<div class="flex-shrink-0 w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
							<span class="text-2xl font-bold text-primary-600">2</span>
						</div>
						<div class="flex-1">
							<h3 class="text-2xl font-bold text-gray-900 mb-3">Find Your Perfect Las Vegas Home</h3>
							<p class="text-gray-700 leading-relaxed mb-4">
								Work with me to identify your needs, preferred neighborhoods, and must-have features. I'll help you search properties, schedule viewings, and evaluate each home.
							</p>
							<ul class="space-y-2 text-gray-700">
								<li class="flex items-start gap-2">
									<CheckCircle class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
									<span>Define your priorities (location, size, features, budget)</span>
								</li>
								<li class="flex items-start gap-2">
									<CheckCircle class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
									<span>Tour properties and take detailed notes</span>
								</li>
								<li class="flex items-start gap-2">
									<CheckCircle class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
									<span>Compare properties and narrow down your choices</span>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div class="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
					<div class="flex items-start gap-6">
						<div class="flex-shrink-0 w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
							<span class="text-2xl font-bold text-primary-600">3</span>
						</div>
						<div class="flex-1">
							<h3 class="text-2xl font-bold text-gray-900 mb-3">Make a Competitive Offer</h3>
							<p class="text-gray-700 leading-relaxed mb-4">
								Once you find the right home, I'll help you craft a competitive offer based on market analysis, comparable sales, and your budget. We'll negotiate terms to get you the best deal.
							</p>
							<ul class="space-y-2 text-gray-700">
								<li class="flex items-start gap-2">
									<CheckCircle class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
									<span>Review comparable sales and market conditions</span>
								</li>
								<li class="flex items-start gap-2">
									<CheckCircle class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
									<span>Determine your offer price and terms</span>
								</li>
								<li class="flex items-start gap-2">
									<CheckCircle class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
									<span>Include contingencies (inspection, financing, appraisal)</span>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div class="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
					<div class="flex items-start gap-6">
						<div class="flex-shrink-0 w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
							<span class="text-2xl font-bold text-primary-600">4</span>
						</div>
						<div class="flex-1">
							<h3 class="text-2xl font-bold text-gray-900 mb-3">Complete Home Inspection & Appraisal</h3>
							<p class="text-gray-700 leading-relaxed mb-4">
								After your offer is accepted, schedule a professional home inspection and appraisal. I'll help you understand the results and negotiate any necessary repairs or price adjustments.
							</p>
							<ul class="space-y-2 text-gray-700">
								<li class="flex items-start gap-2">
									<CheckCircle class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
									<span>Hire a qualified home inspector</span>
								</li>
								<li class="flex items-start gap-2">
									<CheckCircle class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
									<span>Review inspection report and identify issues</span>
								</li>
								<li class="flex items-start gap-2">
									<CheckCircle class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
									<span>Negotiate repairs or credits with seller</span>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div class="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
					<div class="flex items-start gap-6">
						<div class="flex-shrink-0 w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
							<span class="text-2xl font-bold text-primary-600">5</span>
						</div>
						<div class="flex-1">
							<h3 class="text-2xl font-bold text-gray-900 mb-3">Close on Your New Las Vegas Home</h3>
							<p class="text-gray-700 leading-relaxed mb-4">
								Finalize your financing, complete final walkthrough, and close on your new home. I'll coordinate with all parties to ensure a smooth closing process.
							</p>
							<ul class="space-y-2 text-gray-700">
								<li class="flex items-start gap-2">
									<CheckCircle class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
									<span>Finalize mortgage and secure homeowners insurance</span>
								</li>
								<li class="flex items-start gap-2">
									<CheckCircle class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
									<span>Complete final walkthrough before closing</span>
								</li>
								<li class="flex items-start gap-2">
									<CheckCircle class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
									<span>Sign closing documents and receive keys</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Financing Options -->
		<div class="mb-16" id="financing">
			<h2 class="text-3xl font-bold text-gray-900 mb-6">What Financing Options Are Available for Las Vegas Homebuyers?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl">
				Las Vegas homebuyers have access to multiple financing options including conventional loans, FHA loans, VA loans, and USDA loans. Each option has different down payment requirements, credit score thresholds, and benefits tailored to different buyer situations.
			</p>
			<div class="grid md:grid-cols-2 gap-12">
				<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
					<h3 class="text-xl font-bold text-gray-900 mb-2">Conventional Loans</h3>
					<p class="text-gray-700 mb-4">Typically require 20% down payment, best rates for qualified buyers with strong credit scores above 740.</p>
					
					<h3 class="text-xl font-bold text-gray-900 mb-2 mt-6">FHA Loans</h3>
					<p class="text-gray-700 mb-4">3.5% down payment, great for first-time buyers with lower credit scores (minimum 580). Includes mortgage insurance.</p>
					
					<h3 class="text-xl font-bold text-gray-900 mb-2 mt-6">VA Loans</h3>
					<p class="text-gray-700 mb-4">0% down payment for qualified veterans and active military. No private mortgage insurance required.</p>
					
					<h3 class="text-xl font-bold text-gray-900 mb-2 mt-6">USDA Loans</h3>
					<p class="text-gray-700">0% down payment for rural and suburban properties. Income limits apply based on area median income.</p>
				</div>

				<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
					<h3 class="text-xl font-bold text-gray-900 mb-4">Loan Comparison Guide</h3>
					<p class="text-gray-700 mb-4">Compare loan types to find the best fit for your financial situation. Consider down payment requirements, credit score thresholds, and long-term costs when choosing your mortgage.</p>
					<p class="text-gray-700">I can help you understand which loan type offers the best terms for your specific situation and connect you with trusted lenders who specialize in Las Vegas real estate.</p>
				</div>
			</div>
		</div>

		<!-- Costs Section -->
		<div class="mb-16" id="costs">
			<h2 class="text-3xl font-bold text-gray-900 mb-6">What Costs Should Las Vegas Homebuyers Budget For?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl">
				Beyond the purchase price, Las Vegas homebuyers should budget for down payments, closing costs, inspections, and moving expenses. These costs typically range from 3-25% of the home's purchase price depending on your loan type and property value.
			</p>
			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100 max-w-3xl">
				<ul class="space-y-4">
					<li class="flex items-start gap-3">
						<DollarSign class="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
						<div>
							<h3 class="font-bold text-gray-900 mb-1">Down Payment</h3>
							<p class="text-gray-700">Varies by loan type (0-20% of purchase price). Conventional loans typically require 20%, while FHA requires 3.5% and VA/USDA offer 0% down options.</p>
						</div>
					</li>
					<li class="flex items-start gap-3">
						<DollarSign class="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
						<div>
							<h3 class="font-bold text-gray-900 mb-1">Closing Costs</h3>
							<p class="text-gray-700">Typically 2-5% of purchase price (loan fees, title insurance, escrow fees, recording fees). In Las Vegas, closing costs average $6,000-$12,000 for a $300,000 home.</p>
						</div>
					</li>
					<li class="flex items-start gap-3">
						<DollarSign class="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
						<div>
							<h3 class="font-bold text-gray-900 mb-1">Home Inspection</h3>
							<p class="text-gray-700">Usually $300-500 for a standard inspection, $500-800 for larger homes. Additional inspections (pest, pool, HVAC) may cost $100-300 each.</p>
						</div>
					</li>
					<li class="flex items-start gap-3">
						<DollarSign class="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
						<div>
							<h3 class="font-bold text-gray-900 mb-1">Moving Expenses</h3>
							<p class="text-gray-700">Budget $1,000-$3,000 for moving costs, utility deposits ($200-500), and initial repairs or improvements. First-time buyers should also budget for furniture and appliances.</p>
						</div>
					</li>
				</ul>
			</div>
		</div>

		<!-- Summerlin-Specific Buyer's Guide -->
		<div class="mb-16" id="summerlin">
			<h2 class="text-3xl font-bold text-gray-900 mb-6">What Should Summerlin Buyers Know About Village Selection and HOA Documents?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl">
				Buying in Summerlin requires understanding village selection, HOA structure (master association $160/year plus village fees $150-$500/month), and HOA document review. My concierge service includes personalized village tours, HOA document review before you buy, and explaining restrictions and fees clearly to help you make informed decisions.
			</p>
			<div class="grid md:grid-cols-2 gap-8">
				<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-8 shadow-lg border border-gray-100">
					<h3 class="text-2xl font-bold text-gray-900 mb-4">Village Selection Guidance</h3>
					<p class="text-gray-700 mb-4 leading-relaxed">
						Choose your Summerlin village based on budget, lifestyle, and priorities: The Paseos for affordability ($425K-$575K), Willows for families with top schools, Trails for outdoor enthusiasts, Canyons for views, and Ridges or Summit for luxury living.
					</p>
					<ul class="space-y-2 text-gray-700">
						<li class="flex items-start gap-2">
							<CheckCircle class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
							<span>Consider proximity to Downtown Summerlin (10-15% premium)</span>
						</li>
						<li class="flex items-start gap-2">
							<CheckCircle class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
							<span>Evaluate mountain/Strip views (20-30% premium)</span>
						</li>
						<li class="flex items-start gap-2">
							<CheckCircle class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
							<span>Assess golf course lots (15-25% premium)</span>
						</li>
					</ul>
				</div>
				<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-8 shadow-lg border border-gray-100">
					<h3 class="text-2xl font-bold text-gray-900 mb-4">HOA Document Review Process</h3>
					<p class="text-gray-700 mb-4 leading-relaxed">
						Summerlin has two HOA layers: master association ($160/year) plus village fees ($150-$500/month). I review all HOA documents before you buy, explaining restrictions (RV/boat parking, landscaping requirements, home color palettes, solar panel guidelines, pet restrictions) and fees clearly.
					</p>
					<ul class="space-y-2 text-gray-700">
						<li class="flex items-start gap-2">
							<CheckCircle class="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
							<span>Review master association and village HOA documents</span>
						</li>
						<li class="flex items-start gap-2">
							<CheckCircle class="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
							<span>Understand total HOA costs ($1,800-$6,000 annually)</span>
						</li>
						<li class="flex items-start gap-2">
							<CheckCircle class="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
							<span>Identify any restrictions that affect your lifestyle</span>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<!-- Desert Home Inspection Considerations -->
		<div class="mb-16" id="desert">
			<h2 class="text-3xl font-bold text-gray-900 mb-6">What Desert-Specific Considerations Should Las Vegas Homebuyers Know?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl">
				Las Vegas desert living requires special considerations including pool inspections, garage heat mitigation, energy efficiency, and landscaping restrictions. Understanding these desert-specific factors helps you make informed decisions and avoid costly surprises.
			</p>
			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-8 shadow-lg border border-gray-100">
				<div class="grid md:grid-cols-2 gap-6">
					<div>
						<h3 class="text-xl font-bold text-gray-900 mb-3">Pool Inspections</h3>
						<p class="text-gray-700 mb-3 leading-relaxed">
							Pools add 5-10% to home value and provide 7-8 months of use annually. Over 65% of homes over $500K have pools. Pool maintenance costs $150-$200/month, but many buyers consider pools essential for Las Vegas living.
						</p>
						<ul class="space-y-2 text-gray-700 text-sm">
							<li>• Inspect pool equipment and plumbing</li>
							<li>• Check for leaks and structural issues</li>
							<li>• Review pool maintenance history</li>
						</ul>
					</div>
					<div>
						<h3 class="text-xl font-bold text-gray-900 mb-3">Garage Heat Solutions</h3>
						<p class="text-gray-700 mb-3 leading-relaxed">
							Garages can reach 120-140°F in summer. Solutions include insulation, ventilation fans, or mini-split AC units ($2,000-$4,000 installed). Many homeowners use insulated garage doors and fans to manage heat.
						</p>
						<ul class="space-y-2 text-gray-700 text-sm">
							<li>• Check garage insulation and ventilation</li>
							<li>• Consider mini-split AC for comfort</li>
							<li>• Evaluate energy efficiency</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<!-- FAQ Section -->
		<div class="mb-16" id="faq">
			<h2 class="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions About Buying a Home in Las Vegas</h2>
			<div class="space-y-6">
				<div class="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
					<h3 class="text-2xl font-bold text-gray-900 mb-3">How Long Does It Take to Buy a Home in Las Vegas?</h3>
					<p class="text-gray-700 leading-relaxed">
						The typical home buying process in Las Vegas takes 30-60 days from offer acceptance to closing. This timeline includes inspection periods (usually 10-14 days), appraisal (7-10 days), loan processing (21-30 days), and final walkthrough. Competitive markets may require faster timelines, while complex transactions can take longer.
					</p>
				</div>
				<div class="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
					<h3 class="text-2xl font-bold text-gray-900 mb-3">What Credit Score Do I Need to Buy a Home in Las Vegas?</h3>
					<p class="text-gray-700 leading-relaxed">
						Credit score requirements vary by loan type: conventional loans typically require 620+, FHA loans accept 580+ (or 500+ with 10% down), VA loans have no minimum but lenders prefer 620+, and USDA loans require 640+. Higher scores qualify for better interest rates and lower down payments.
					</p>
				</div>
				<div class="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
					<h3 class="text-2xl font-bold text-gray-900 mb-3">Should I Work with a Buyer's Agent in Las Vegas?</h3>
					<p class="text-gray-700 leading-relaxed">
						Yes, working with a buyer's agent provides expert market knowledge, negotiation expertise, and protection of your interests. Buyer's agents help navigate Las Vegas's competitive market, identify off-market properties, and ensure you get the best deal. Their services are typically free to buyers as sellers pay commissions.
					</p>
				</div>
			</div>
		</div>

		<!-- CTA Section -->
		<div
			id="cta"
			class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-center text-white"
		>
			<h2 class="text-3xl font-bold mb-4">Ready to Start Your Home Buying Journey?</h2>
			<p class="text-lg text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
				Let me guide you through every step of buying your Las Vegas home
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/contact" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">Get Started</a>
				<a href="/services/buyer-representation" class="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">Buyer Services</a>
			</div>
		</div>
	</div>
</section>

