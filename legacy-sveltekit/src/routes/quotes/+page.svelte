<script>
	const motivationalQuotes = [
		{
			quote: "The only place success comes before work is in the dictionary.",
			author: "Vince Lombardi",
			title: "Former Football Coach",
			category: "Mindset",
			description: "A reminder that there's no shortcut to results. The grind may feel thankless now, but the payoff is coming."
		},
		{
			quote: "Your past doesn't define you. It prepares you.",
			author: "Darren Hardy",
			title: "Author & Former Publisher of SUCCESS Magazine",
			category: "Mindset",
			description: "That expired listing, failed offer, or demanding client? It's not baggage — it's training. You're stronger now because of it."
		},
		{
			quote: "The highest levels of success don't come from more grinding. They come from more alignment.",
			author: "Brett Jennings",
			title: "Founder of Real Estate Experts",
			category: "Strategy",
			description: "Hustle is important, but direction matters more. Work that aligns with your values and strengths leads to better results."
		},
		{
			quote: "Success is walking from failure to failure with no loss of enthusiasm.",
			author: "Winston Churchill",
			title: "Former British Prime Minister",
			category: "Persistence",
			description: "Wins are fleeting, losses are temporary. What really matters is your capacity to keep showing up with purpose."
		},
		{
			quote: "Don't wait to buy real estate. Buy real estate and wait.",
			author: "Will Rogers",
			title: "Actor and Social Commentator",
			category: "Investment",
			description: "A reminder to think long term — not just in your career, but in how you coach clients and newer agents."
		},
		{
			quote: "To be successful in real estate, you must always and consistently put your clients' best interests first.",
			author: "Anthony Hitt",
			title: "Real Estate Executive & CEO of Engel & Völkers Americas",
			category: "Client Service",
			description: "True leadership — on a team or with clients — is built on service. Put people first, and success follows."
		},
		{
			quote: "In the middle of difficulty lies opportunity.",
			author: "Albert Einstein",
			title: "Theoretical Physicist",
			category: "Opportunity",
			description: "When deals fall apart or markets slow down, your mindset determines whether you see obstacles or openings."
		},
		{
			quote: "Make a customer, not a sale.",
			author: "Katherine Barchetti",
			title: "Retail Expert",
			category: "Client Service",
			description: "This reframes real estate as a relationship-driven business, not a transaction game."
		},
		{
			quote: "Buy land; they're not making it anymore.",
			author: "Mark Twain",
			title: "Writer and Humorist",
			category: "Investment",
			description: "A witty, concise reminder of real estate's scarcity and enduring value."
		},
		{
			quote: "Owning a home is a keystone of wealth, both financial affluence and emotional security.",
			author: "Suze Orman",
			title: "Financial Advisor and Author",
			category: "Homeownership",
			description: "This quote hits the emotional and financial reasons people buy homes, perfect for educating while inspiring."
		},
		{
			quote: "If you aim for nothing, you'll hit it every time.",
			author: "Zig Ziglar",
			title: "Motivational Speaker",
			category: "Goals",
			description: "A great reminder that intention drives results."
		},
		{
			quote: "The best investment on Earth is earth.",
			author: "Louis Glickman",
			title: "Real Estate Investor",
			category: "Investment",
			description: "Land remains the original asset even in a digital-first world. Tech may change how we market or sell, but the core value never fades."
		}
	];

	const categories = ['All', 'Mindset', 'Strategy', 'Persistence', 'Investment', 'Client Service', 'Opportunity', 'Homeownership', 'Goals'];
	let selectedCategory = 'All';

	$: filteredQuotes = selectedCategory === 'All' 
		? motivationalQuotes 
		: motivationalQuotes.filter(quote => quote.category === selectedCategory);
</script>

<svelte:head>
	<title>Motivational Real Estate Quotes | Dr. Janet Duffy, REALTOR®</title>
	<meta name="description" content="Inspirational real estate quotes to motivate agents, build client trust, and drive success. Curated collection from industry leaders and thought leaders." />
	<meta name="keywords" content="real estate quotes, motivational quotes, real estate inspiration, agent motivation, client trust, real estate success" />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.drjanetduffy.com/quotes" />
	<meta property="og:title" content="Motivational Real Estate Quotes | Dr. Janet Duffy, REALTOR®" />
	<meta property="og:description" content="Inspirational real estate quotes to motivate agents, build client trust, and drive success." />
	
	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://www.drjanetduffy.com/quotes" />
	<meta property="twitter:title" content="Motivational Real Estate Quotes | Dr. Janet Duffy, REALTOR®" />
	<meta property="twitter:description" content="Inspirational real estate quotes to motivate agents, build client trust, and drive success." />
</svelte:head>

<section class="section relative" style="background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);">
	<div class="container-premium">
		<!-- Header Section -->
		<div class="text-center mb-16">
			<h1 class="font-display text-5xl md:text-6xl font-bold mb-6 text-gray-900" style="letter-spacing: -0.03em;">
				Motivational Real Estate Quotes
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
				Inspirational quotes from industry leaders, thought leaders, and successful real estate professionals to motivate, inspire, and guide your real estate journey.
			</p>
			
			<!-- Category Filter -->
			<div class="flex flex-wrap justify-center gap-3 mb-8">
				{#each categories as category}
					<button
						on:click={() => selectedCategory = category}
						class="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 {
							selectedCategory === category 
								? 'bg-primary-600 text-white shadow-lg scale-105' 
								: 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-700 border border-gray-200 shadow-md hover:shadow-lg'
						}"
					>
						{category}
					</button>
				{/each}
			</div>
		</div>

		<!-- Quotes Grid -->
		<div class="grid-premium md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
			{#each filteredQuotes as quote, index}
				<div class="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 p-8 border border-gray-100 overflow-hidden">
					<div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
					<div class="mb-6">
						<span class="inline-block bg-primary-50 text-primary-700 text-xs font-bold px-3 py-1.5 rounded-full mb-4">
							{quote.category}
						</span>
						<blockquote class="font-display text-lg text-gray-900 font-medium leading-relaxed mb-4">
							"{quote.quote}"
						</blockquote>
					</div>
					
					<div class="border-t border-gray-100 pt-4">
						<div class="font-display font-bold text-gray-900 text-lg">{quote.author}</div>
						<div class="text-sm text-primary-600 font-semibold mb-3">{quote.title}</div>
						<p class="text-sm text-gray-600 leading-relaxed">{quote.description}</p>
					</div>
				</div>
			{/each}
		</div>

		<!-- How to Use Section -->
		<div class="mb-16 relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white rounded-2xl p-12 shadow-2xl">
			<div class="absolute inset-0 overflow-hidden">
				<div class="absolute top-1/4 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
				<div class="absolute bottom-1/4 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 1.5s;"></div>
			</div>
			<div class="relative z-10 max-w-4xl mx-auto text-center">
				<h2 class="font-display text-4xl font-bold mb-12 text-white" style="text-shadow: 0 4px 20px rgba(0,0,0,0.3); letter-spacing: -0.02em;">How to Use These Quotes</h2>
				<div class="grid-premium md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
					<div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
						<h3 class="font-display text-xl font-bold mb-4 text-white">Email Signatures</h3>
						<p class="text-white/90 leading-relaxed">Add a motivational quote to your email signature to show clients your values and stay optimistic.</p>
					</div>
					<div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
						<h3 class="font-display text-xl font-bold mb-4 text-white">Social Media</h3>
						<p class="text-white/90 leading-relaxed">Use quotes as scroll-stoppers in Instagram Stories, carousels, and captions to engage your audience.</p>
					</div>
					<div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
						<h3 class="font-display text-xl font-bold mb-4 text-white">Client Communications</h3>
						<p class="text-white/90 leading-relaxed">Include quotes in buyer guides, listing presentations, and thank-you cards to add warmth.</p>
					</div>
					<div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
						<h3 class="font-display text-xl font-bold mb-4 text-white">Team Motivation</h3>
						<p class="text-white/90 leading-relaxed">Share quotes in team meetings, Slack messages, and training sessions to boost morale.</p>
					</div>
					<div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
						<h3 class="font-display text-xl font-bold mb-4 text-white">Listing Descriptions</h3>
						<p class="text-white/90 leading-relaxed">Add emotional quotes to property descriptions to set the tone for potential buyers.</p>
					</div>
					<div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
						<h3 class="font-display text-xl font-bold mb-4 text-white">Content Strategy</h3>
						<p class="text-white/90 leading-relaxed">Let quotes inspire your next blog post, video, or newsletter to create engaging content.</p>
					</div>
				</div>
			</div>
		</div>

		<!-- CTA Section -->
		<div class="text-center">
			<h2 class="font-display text-4xl font-bold mb-6 text-gray-900" style="letter-spacing: -0.02em;">Ready to Apply These Insights?</h2>
			<p class="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
				Let Dr. Janet Duffy, REALTOR® help you turn inspiration into action with luxury real estate expertise in West Summerlin.
			</p>
			<div class="flex flex-col sm:flex-row gap-6 justify-center">
				<a 
					href="/contact" 
					class="group relative overflow-hidden bg-primary-600 text-white px-10 py-5 rounded-xl font-bold text-lg shadow-2xl hover:shadow-primary-600/30 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
				>
					<span class="relative z-10">Schedule Consultation</span>
					<div class="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
				</a>
				<a 
					href="tel:+17027667668" 
					class="group relative overflow-hidden bg-transparent text-primary-600 border-2 border-primary-600 px-10 py-5 rounded-xl font-bold text-lg hover:bg-primary-600 hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1"
				>
					<span class="relative z-10">Call (702) 766-7668</span>
				</a>
			</div>
		</div>
	</div>
</section>
