<script>
	import { Calculator, Home, TrendingUp, DollarSign, CheckCircle, AlertCircle } from 'lucide-svelte';
	
	let monthlyRent = 2000;
	let homePrice = 400000;
	let downPayment = 20;
	let interestRate = 6.5;
	let loanTerm = 30;
	let annualAppreciation = 3;
	let annualRentIncrease = 3;
	let years = 5;
	
	$: downPaymentAmount = (homePrice * downPayment) / 100;
	$: loanAmount = homePrice - downPaymentAmount;
	$: monthlyRate = interestRate / 100 / 12;
	$: numPayments = loanTerm * 12;
	$: monthlyMortgage = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
	$: propertyTax = (homePrice * 0.007) / 12; // Clark County ~0.7%
	$: insurance = 1500 / 12; // Annual homeowners insurance
	$: hoa = 0; // HOA fees (if applicable)
	$: maintenance = homePrice * 0.01 / 12; // 1% annual maintenance
	$: totalMonthlyOwnership = monthlyMortgage + propertyTax + insurance + hoa + maintenance;
	
	// Calculate total costs over time period
	$: totalRentCost = Array(years).fill(0).reduce((sum, _, year) => {
		const yearRent = monthlyRent * Math.pow(1 + annualRentIncrease / 100, year) * 12;
		return sum + yearRent;
	}, 0);
	
	$: totalOwnershipCost = (totalMonthlyOwnership * 12 * years) + downPaymentAmount;
	$: homeValueAfterYears = homePrice * Math.pow(1 + annualAppreciation / 100, years);
	$: equityBuilt = homeValueAfterYears - loanAmount;
	$: netOwnershipCost = totalOwnershipCost - equityBuilt;
	
	function formatCurrency(amount) {
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
			maximumFractionDigits: 0
		}).format(amount);
	}
</script>

<svelte:head>
	<title>Rent vs Buy Calculator | Las Vegas | Dr. Janet Duffy REALTOR®</title>
	<meta name="description" content="Compare renting vs buying a home in Las Vegas. Calculate the financial benefits of homeownership vs renting over time." />
</svelte:head>

<section class="section bg-gradient-to-b from-white via-gray-50 to-white">
	<div class="container-premium">
		<div class="text-center mb-16">
			<h1 class="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900">
				Calculate Whether to Rent or Buy in Las Vegas
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Compare the financial benefits of renting vs buying a home in Las Vegas
			</p>
		</div>

		<div class="mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Should You Rent or Buy a Home in Las Vegas?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				Deciding whether to rent or buy in Las Vegas depends on monthly costs, down payment availability, interest rates, time period, and long-term financial goals. Use this calculator to compare total costs, equity building, and net ownership benefits to make an informed decision about your Las Vegas housing choice.
			</p>
		</div>

		<div class="grid md:grid-cols-2 gap-12 mb-16">
			<!-- Input Form -->
			<div class="bg-white rounded-2xl p-10 shadow-lg border border-gray-100">
				<h3 class="text-2xl font-bold text-gray-900 mb-6">Comparison Inputs</h3>
				<div class="space-y-6">
					<div>
						<label for="monthlyRent" class="block text-sm font-semibold text-gray-700 mb-2">Monthly Rent</label>
						<div class="relative">
							<span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
							<input type="number" id="monthlyRent" bind:value={monthlyRent} min="0" step="100" class="w-full pl-8 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900" />
						</div>
					</div>
					<div>
						<label for="homePrice" class="block text-sm font-semibold text-gray-700 mb-2">Home Price</label>
						<div class="relative">
							<span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
							<input type="number" id="homePrice" bind:value={homePrice} min="0" step="1000" class="w-full pl-8 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900" />
						</div>
					</div>
					<div>
						<label for="downPayment" class="block text-sm font-semibold text-gray-700 mb-2">Down Payment ({downPayment}%)</label>
						<input type="range" id="downPayment" bind:value={downPayment} min="0" max="50" step="1" class="w-full" />
						<p class="text-sm text-gray-600 mt-1">{formatCurrency(downPaymentAmount)}</p>
					</div>
					<div>
						<label for="interestRate" class="block text-sm font-semibold text-gray-700 mb-2">Interest Rate ({interestRate}%)</label>
						<input type="range" id="interestRate" bind:value={interestRate} min="2" max="10" step="0.1" class="w-full" />
					</div>
					<div>
						<label for="years" class="block text-sm font-semibold text-gray-700 mb-2">Time Period ({years} years)</label>
						<input type="range" id="years" bind:value={years} min="1" max="10" step="1" class="w-full" />
					</div>
				</div>
			</div>

			<!-- Comparison Results -->
			<div class="space-y-6">
				<!-- Monthly Costs -->
				<div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
					<h3 class="text-xl font-bold text-gray-900 mb-4">Monthly Costs</h3>
					<div class="grid grid-cols-2 gap-4">
						<div class="text-center p-4 bg-gray-50 rounded-lg">
							<p class="text-sm text-gray-600 mb-1">Renting</p>
							<p class="text-2xl font-bold text-gray-900">{formatCurrency(monthlyRent)}</p>
						</div>
						<div class="text-center p-4 bg-primary-50 rounded-lg">
							<p class="text-sm text-gray-600 mb-1">Buying</p>
							<p class="text-2xl font-bold text-primary-600">{formatCurrency(totalMonthlyOwnership)}</p>
						</div>
					</div>
				</div>

				<!-- Total Costs Over Time -->
				<div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
					<h3 class="text-xl font-bold text-gray-900 mb-4">Total Costs Over {years} Years</h3>
					<div class="space-y-3">
						<div class="flex justify-between">
							<span class="text-gray-700">Renting Total:</span>
							<span class="font-bold text-gray-900">{formatCurrency(totalRentCost)}</span>
						</div>
						<div class="flex justify-between">
							<span class="text-gray-700">Buying Total:</span>
							<span class="font-bold text-gray-900">{formatCurrency(totalOwnershipCost)}</span>
						</div>
						<div class="flex justify-between border-t border-gray-200 pt-3">
							<span class="text-gray-700">Home Value After {years} Years:</span>
							<span class="font-bold text-primary-600">{formatCurrency(homeValueAfterYears)}</span>
						</div>
						<div class="flex justify-between">
							<span class="text-gray-700">Equity Built:</span>
							<span class="font-bold text-green-600">{formatCurrency(equityBuilt)}</span>
						</div>
					</div>
				</div>

				<!-- Recommendation -->
				<div class="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
					<h3 class="text-xl font-bold mb-4">Financial Comparison</h3>
					{#if netOwnershipCost < totalRentCost}
						<p class="text-lg mb-2">Buying is more cost-effective by:</p>
						<p class="text-3xl font-bold mb-4">{formatCurrency(totalRentCost - netOwnershipCost)}</p>
						<p class="text-white text-opacity-90">Over {years} years, buying builds equity while renting provides no return.</p>
					{:else}
						<p class="text-lg mb-2">Renting may be more cost-effective in the short term</p>
						<p class="text-white text-opacity-90">Consider your long-term plans and financial goals.</p>
					{/if}
				</div>
			</div>
		</div>

		<!-- Benefits Comparison -->
		<div class="grid md:grid-cols-2 gap-12 mb-16">
			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
				<h2 class="text-3xl font-bold text-gray-900 mb-6">Benefits of Buying</h2>
				<ul class="space-y-4">
					<li class="flex items-start gap-3">
						<CheckCircle class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
						<span class="text-gray-700">Build equity over time</span>
					</li>
					<li class="flex items-start gap-3">
						<CheckCircle class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
						<span class="text-gray-700">Tax deductions for mortgage interest</span>
					</li>
					<li class="flex items-start gap-3">
						<CheckCircle class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
						<span class="text-gray-700">Fixed monthly payment (with fixed-rate mortgage)</span>
					</li>
					<li class="flex items-start gap-3">
						<CheckCircle class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
						<span class="text-gray-700">Property appreciation potential</span>
					</li>
					<li class="flex items-start gap-3">
						<CheckCircle class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
						<span class="text-gray-700">Freedom to customize and improve</span>
					</li>
				</ul>
			</div>

			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
				<h2 class="text-3xl font-bold text-gray-900 mb-6">Benefits of Renting</h2>
				<ul class="space-y-4">
					<li class="flex items-start gap-3">
						<CheckCircle class="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
						<span class="text-gray-700">Lower upfront costs</span>
					</li>
					<li class="flex items-start gap-3">
						<CheckCircle class="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
						<span class="text-gray-700">No maintenance responsibilities</span>
					</li>
					<li class="flex items-start gap-3">
						<CheckCircle class="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
						<span class="text-gray-700">More flexibility to relocate</span>
					</li>
					<li class="flex items-start gap-3">
						<CheckCircle class="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
						<span class="text-gray-700">No property taxes or HOA fees</span>
					</li>
					<li class="flex items-start gap-3">
						<CheckCircle class="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
						<span class="text-gray-700">Predictable monthly costs</span>
					</li>
				</ul>
			</div>
		</div>

		<!-- CTA Section -->
		<div class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-center text-white">
			<h2 class="text-3xl font-bold mb-4">Ready to Make a Decision?</h2>
			<p class="text-lg text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
				I can help you analyze your specific situation and determine if buying or renting is right for you
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/contact" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">Get Personalized Advice</a>
				<a href="/buying-guide" class="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">Buying Guide</a>
			</div>
		</div>
	</div>
</section>

