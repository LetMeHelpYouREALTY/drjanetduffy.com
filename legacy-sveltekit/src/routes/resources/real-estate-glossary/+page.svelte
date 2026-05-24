<script>
	import { BookOpen, Search } from 'lucide-svelte';
	
	let searchQuery = '';
	
	const terms = [
		{
			term: 'Appraisal',
			definition: 'A professional assessment of a property\'s value, typically required by lenders before approving a mortgage loan.',
			category: 'Financing'
		},
		{
			term: 'Closing',
			definition: 'The final step in a real estate transaction where ownership is transferred from seller to buyer and all documents are signed.',
			category: 'Transaction'
		},
		{
			term: 'Closing Costs',
			definition: 'Fees and expenses paid at closing, including loan origination fees, title insurance, escrow fees, and transfer taxes.',
			category: 'Financing'
		},
		{
			term: 'CMA (Comparative Market Analysis)',
			definition: 'An evaluation of similar properties in the area to determine a property\'s market value, used for pricing homes.',
			category: 'Valuation'
		},
		{
			term: 'Contingency',
			definition: 'A condition that must be met for a real estate contract to be binding, such as home inspection or financing approval.',
			category: 'Contract'
		},
		{
			term: 'Down Payment',
			definition: 'The initial cash payment made when purchasing a home, typically a percentage of the purchase price.',
			category: 'Financing'
		},
		{
			term: 'Equity',
			definition: 'The difference between a property\'s market value and the amount owed on the mortgage.',
			category: 'Financing'
		},
		{
			term: 'Escrow',
			definition: 'A neutral third party that holds funds and documents during a real estate transaction until closing.',
			category: 'Transaction'
		},
		{
			term: 'Foreclosure',
			definition: 'Legal process where a lender takes possession of a property due to the borrower\'s failure to make mortgage payments.',
			category: 'Property Types'
		},
		{
			term: 'Home Inspection',
			definition: 'A professional examination of a property\'s condition, including structure, systems, and potential issues.',
			category: 'Transaction'
		},
		{
			term: 'MLS (Multiple Listing Service)',
			definition: 'A database used by real estate agents to share property listings and market information.',
			category: 'Industry'
		},
		{
			term: 'Mortgage',
			definition: 'A loan used to purchase real estate, where the property serves as collateral for the loan.',
			category: 'Financing'
		},
		{
			term: 'Pre-approval',
			definition: 'A lender\'s commitment to provide a mortgage loan up to a specific amount, based on credit and financial review.',
			category: 'Financing'
		},
		{
			term: 'REALTOR®',
			definition: 'A real estate professional who is a member of the National Association of REALTORS® and adheres to a code of ethics.',
			category: 'Industry'
		},
		{
			term: 'Short Sale',
			definition: 'A sale where the property is sold for less than the amount owed on the mortgage, requiring lender approval.',
			category: 'Property Types'
		},
		{
			term: 'Title Insurance',
			definition: 'Insurance that protects against defects in the property title, ensuring clear ownership transfer.',
			category: 'Transaction'
		},
		{
			term: 'Underwater Mortgage',
			definition: 'A mortgage where the amount owed exceeds the property\'s current market value.',
			category: 'Financing'
		},
		{
			term: 'Walkthrough',
			definition: 'A final inspection of the property by the buyer before closing to ensure it\'s in agreed-upon condition.',
			category: 'Transaction'
		}
	];
	
	$: filteredTerms = terms.filter(t => 
		t.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
		t.definition.toLowerCase().includes(searchQuery.toLowerCase()) ||
		t.category.toLowerCase().includes(searchQuery.toLowerCase())
	);
	
	$: categories = [...new Set(terms.map(t => t.category))];
</script>

<svelte:head>
	<title>Las Vegas Luxury &amp; Relocation Real Estate Glossary | Dr. Janet Duffy REALTOR®</title>
	<meta name="description" content="Las Vegas Luxury & Relocation real estate glossary with clear definitions of terms used in buying, selling, investing, and relocating to Las Vegas." />
</svelte:head>

<section class="section bg-gradient-to-b from-white via-gray-50 to-white">
	<div class="container-premium">
		<div class="text-center mb-16">
			<h1 class="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900">
				Complete Real Estate Glossary & Terminology Guide
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Comprehensive definitions of common real estate terms
			</p>
		</div>

		<!-- Search Bar -->
		<div class="max-w-2xl mx-auto mb-12">
			<div class="relative">
				<Search class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
				<input
					type="text"
					placeholder="Search terms..."
					bind:value={searchQuery}
					class="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900 placeholder-gray-400 transition-all"
					aria-label="Search glossary terms"
				/>
			</div>
		</div>

		<div class="mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">What Real Estate Terms Should You Know for Las Vegas Transactions?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				Understanding real estate terms is essential for Las Vegas transactions. Key terms include financing terms like appraisal, mortgage, and pre-approval, transaction terms like closing, escrow, and title insurance, contract terms like contingency, and property types like foreclosure and short sale that help you navigate the Las Vegas real estate market confidently.
			</p>
		</div>

		<!-- Terms by Category -->
		<div class="space-y-12">
			{#each categories as category}
				{@const categoryTerms = filteredTerms.filter(t => t.category === category)}
				{#if categoryTerms.length > 0}
					<div>
						<h2 class="text-2xl font-bold text-gray-900 mb-6">{category}</h2>
						<div class="grid md:grid-cols-2 gap-6">
							{#each categoryTerms as term}
								<div class="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all">
									<h3 class="text-lg font-bold text-primary-600 mb-2">{term.term}</h3>
									<p class="text-gray-700 text-sm leading-relaxed">{term.definition}</p>
								</div>
							{/each}
						</div>
					</div>
				{/if}
			{/each}
		</div>

		{#if filteredTerms.length === 0}
			<div class="text-center py-12">
				<p class="text-gray-600 text-lg">No terms found matching your search.</p>
			</div>
		{/if}

		<!-- CTA Section -->
		<div class="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-center text-white">
			<h2 class="text-3xl md:text-4xl font-bold mb-4">Have Questions About Las Vegas Real Estate Terms?</h2>
			<p class="text-lg text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
				I'm here to help explain any real estate concepts and guide you through the process. With deep knowledge of Las Vegas real estate terminology, transaction processes, and industry practices, I'll ensure you understand every aspect of your real estate journey.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/contact" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">Contact Me</a>
				<a href="/faq" class="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">View FAQ</a>
			</div>
		</div>
	</div>
</section>

