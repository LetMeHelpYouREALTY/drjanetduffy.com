<script>
	import { Calculator, DollarSign, FileText, AlertCircle } from 'lucide-svelte';
	
	let homePrice = 575000;
	let loanAmount = 460000;
	let downPayment = 20;
	let loanType = 'conventional';
	
	$: downPaymentAmount = (homePrice * downPayment) / 100;
	$: actualLoanAmount = loanAmount || (homePrice - downPaymentAmount);
	
	// Closing cost estimates (as percentages or fixed amounts)
	$: loanOriginationFee = actualLoanAmount * 0.01; // 1% of loan
	$: titleInsurance = homePrice * 0.005; // 0.5% of home price
	$: escrowFee = homePrice * 0.002; // 0.2% of home price
	$: recordingFee = 200;
	$: transferTax = homePrice * 0.01; // 1% of home price (Nevada)
	$: homeInspection = 500;
	$: appraisal = 500;
	$: prepaidInterest = (actualLoanAmount * 0.065 / 12) * 15; // 15 days at 6.5% rate
	$: homeownersInsurance = 1500; // Annual, prorated
	$: propertyTaxes = homePrice * 0.007; // Annual, prorated (Clark County ~0.7%)
	
	$: totalClosingCosts = loanOriginationFee + titleInsurance + escrowFee + recordingFee + transferTax + homeInspection + appraisal + prepaidInterest + (homeownersInsurance / 12) + (propertyTaxes / 12);
	$: totalCashNeeded = downPaymentAmount + totalClosingCosts;
	
	function formatCurrency(amount) {
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
			maximumFractionDigits: 0
		}).format(amount);
	}
</script>

<svelte:head>
	<title>Closing Costs Calculator | Las Vegas | Dr. Janet Duffy REALTOR®</title>
	<meta name="description" content="Calculate your estimated closing costs for buying a home in Las Vegas. Understand all fees and costs associated with your home purchase." />
</svelte:head>

<section class="section bg-gradient-to-b from-white via-gray-50 to-white">
	<div class="container-premium">
		<div class="text-center mb-16">
			<h1 class="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900">
				Calculate Your Las Vegas Home Closing Costs
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Estimate your closing costs and total cash needed to buy a home in Las Vegas
			</p>
		</div>

		<div class="mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">What Are Las Vegas Home Closing Costs?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				Las Vegas home closing costs include loan origination fees, title insurance, escrow fees, recording fees, transfer taxes, home inspection, appraisal, prepaid interest, homeowners insurance, and property taxes. These costs typically range from 2-5% of the home price and are paid at closing in addition to your down payment.
			</p>
		</div>

		<div class="grid md:grid-cols-2 gap-12 mb-16">
			<!-- Calculator Form -->
			<div class="bg-white rounded-2xl p-10 shadow-lg border border-gray-100">
				<h3 class="text-2xl font-bold text-gray-900 mb-6">Loan Details</h3>
				<div class="space-y-6">
					<div>
						<label for="homePrice" class="block text-sm font-semibold text-gray-700 mb-2">
							Home Price
						</label>
						<div class="relative">
							<span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
							<input
								type="number"
								id="homePrice"
								bind:value={homePrice}
								min="0"
								step="1000"
								class="w-full pl-8 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900"
							/>
						</div>
					</div>

					<div>
						<label for="downPayment" class="block text-sm font-semibold text-gray-700 mb-2">
							Down Payment ({downPayment}%)
						</label>
						<input
							type="range"
							id="downPayment"
							bind:value={downPayment}
							min="0"
							max="50"
							step="1"
							class="w-full"
						/>
						<div class="flex justify-between text-sm text-gray-600 mt-1">
							<span>0%</span>
							<span>50%</span>
						</div>
						<p class="text-sm text-gray-600 mt-2">Amount: {formatCurrency(downPaymentAmount)}</p>
					</div>

					<div>
						<label for="loanAmount" class="block text-sm font-semibold text-gray-700 mb-2">
							Loan Amount (optional)
						</label>
						<div class="relative">
							<span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
							<input
								type="number"
								id="loanAmount"
								bind:value={loanAmount}
								min="0"
								step="1000"
								class="w-full pl-8 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900"
								placeholder="Auto-calculated"
							/>
						</div>
						<p class="text-xs text-gray-500 mt-1">Leave empty to auto-calculate from home price and down payment</p>
					</div>
				</div>
			</div>

			<!-- Results -->
			<div class="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-10 shadow-lg text-white">
				<h3 class="text-2xl font-bold mb-6">Estimated Closing Costs</h3>
				
				<div class="space-y-4 mb-6 bg-white/10 rounded-xl p-6 backdrop-blur-sm">
					<div class="flex justify-between text-sm">
						<span class="text-white text-opacity-90">Loan Origination Fee</span>
						<span class="font-semibold">{formatCurrency(loanOriginationFee)}</span>
					</div>
					<div class="flex justify-between text-sm">
						<span class="text-white text-opacity-90">Title Insurance</span>
						<span class="font-semibold">{formatCurrency(titleInsurance)}</span>
					</div>
					<div class="flex justify-between text-sm">
						<span class="text-white text-opacity-90">Escrow Fee</span>
						<span class="font-semibold">{formatCurrency(escrowFee)}</span>
					</div>
					<div class="flex justify-between text-sm">
						<span class="text-white text-opacity-90">Recording Fee</span>
						<span class="font-semibold">{formatCurrency(recordingFee)}</span>
					</div>
					<div class="flex justify-between text-sm">
						<span class="text-white text-opacity-90">Transfer Tax</span>
						<span class="font-semibold">{formatCurrency(transferTax)}</span>
					</div>
					<div class="flex justify-between text-sm">
						<span class="text-white text-opacity-90">Home Inspection</span>
						<span class="font-semibold">{formatCurrency(homeInspection)}</span>
					</div>
					<div class="flex justify-between text-sm">
						<span class="text-white text-opacity-90">Appraisal</span>
						<span class="font-semibold">{formatCurrency(appraisal)}</span>
					</div>
					<div class="flex justify-between text-sm">
						<span class="text-white text-opacity-90">Prepaid Interest</span>
						<span class="font-semibold">{formatCurrency(prepaidInterest)}</span>
					</div>
					<div class="flex justify-between text-sm">
						<span class="text-white text-opacity-90">Homeowners Insurance</span>
						<span class="font-semibold">{formatCurrency(homeownersInsurance / 12)}</span>
					</div>
					<div class="flex justify-between text-sm">
						<span class="text-white text-opacity-90">Property Taxes</span>
						<span class="font-semibold">{formatCurrency(propertyTaxes / 12)}</span>
					</div>
					<div class="border-t border-white/20 pt-4 flex justify-between">
						<span class="font-bold">Total Closing Costs</span>
						<span class="font-bold text-lg">{formatCurrency(totalClosingCosts)}</span>
					</div>
				</div>
				
				<div class="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
					<div class="flex justify-between mb-2">
						<span class="text-white text-opacity-90">Down Payment</span>
						<span class="font-semibold">{formatCurrency(downPaymentAmount)}</span>
					</div>
					<div class="flex justify-between mb-4">
						<span class="text-white text-opacity-90">Closing Costs</span>
						<span class="font-semibold">{formatCurrency(totalClosingCosts)}</span>
					</div>
					<div class="border-t border-white/30 pt-4 flex justify-between">
						<span class="font-bold text-lg">Total Cash Needed</span>
						<span class="font-bold text-2xl">{formatCurrency(totalCashNeeded)}</span>
					</div>
				</div>
			</div>
		</div>

		<!-- Important Notes -->
		<div class="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-16 rounded-r-lg">
			<div class="flex items-start gap-4">
				<AlertCircle class="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
				<div>
					<h3 class="text-lg font-bold text-gray-900 mb-2">Important Notes</h3>
					<ul class="text-gray-700 space-y-2 text-sm">
						<li>• Closing costs typically range from 2-5% of the home purchase price</li>
						<li>• Actual costs may vary based on lender, location, and loan type</li>
						<li>• Some costs may be negotiable or paid by the seller</li>
						<li>• This is an estimate - get a Loan Estimate from your lender for exact figures</li>
						<li>• Nevada transfer tax is typically 1% of the purchase price</li>
					</ul>
				</div>
			</div>
		</div>

		<!-- CTA Section -->
		<div class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-center text-white">
			<h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Understand Your Las Vegas Closing Costs?</h2>
			<p class="text-lg text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
				I can help you understand all costs associated with buying a home and connect you with trusted lenders. With deep knowledge of Las Vegas closing costs, loan processes, and financing options, I'll guide you through every step of your home purchase journey.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/contact" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">Contact Me</a>
				<a href="/services/mortgage-guidance" class="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">Mortgage Guidance</a>
			</div>
		</div>
	</div>
</section>

