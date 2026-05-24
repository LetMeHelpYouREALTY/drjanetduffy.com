<script>
	import { Home, CheckCircle, AlertTriangle, FileText, Wrench, Shield } from 'lucide-svelte';
	
	const inspectionAreas = [
		{
			area: 'Structural Systems',
			icon: Home,
			items: ['Foundation', 'Walls and ceilings', 'Floors', 'Roof structure', 'Attic']
		},
		{
			area: 'Electrical Systems',
			icon: Wrench,
			items: ['Main panel', 'Wiring', 'Outlets and switches', 'GFCI protection', 'Light fixtures']
		},
		{
			area: 'Plumbing Systems',
			icon: Wrench,
			items: ['Water supply', 'Drainage', 'Water heater', 'Fixtures', 'Water pressure']
		},
		{
			area: 'HVAC Systems',
			icon: Home,
			items: ['Heating system', 'Cooling system', 'Ductwork', 'Vents', 'Thermostat']
		},
		{
			area: 'Exterior',
			icon: Home,
			items: ['Siding', 'Windows and doors', 'Gutters', 'Driveway', 'Landscaping']
		},
		{
			area: 'Interior',
			icon: Home,
			items: ['Walls and paint', 'Floors', 'Doors', 'Windows', 'Stairs']
		}
	];
	
	const commonIssues = [
		{
			issue: 'Foundation Problems',
			severity: 'High',
			description: 'Cracks, settling, or water damage in foundation',
			cost: '$5,000 - $50,000+'
		},
		{
			issue: 'Roof Damage',
			severity: 'High',
			description: 'Missing shingles, leaks, or structural damage',
			cost: '$5,000 - $15,000'
		},
		{
			issue: 'Electrical Issues',
			severity: 'Medium',
			description: 'Outdated wiring, overloaded circuits, or safety hazards',
			cost: '$2,000 - $10,000'
		},
		{
			issue: 'Plumbing Problems',
			severity: 'Medium',
			description: 'Leaks, clogs, or outdated plumbing',
			cost: '$1,000 - $8,000'
		},
		{
			issue: 'HVAC Replacement',
			severity: 'Medium',
			description: 'Old or inefficient heating/cooling systems',
			cost: '$5,000 - $12,000'
		},
		{
			issue: 'Mold or Water Damage',
			severity: 'High',
			description: 'Moisture issues requiring remediation',
			cost: '$3,000 - $20,000+'
		}
	];
</script>

<svelte:head>
	<title>Home Inspection Guide | Las Vegas | Dr. Janet Duffy REALTOR®</title>
	<meta name="description" content="Complete guide to home inspections in Las Vegas. Learn what inspectors check, common issues, and how to use inspection results in negotiations." />
</svelte:head>

<section class="section bg-gradient-to-b from-white via-gray-50 to-white">
	<div class="container-premium">
		<div class="text-center mb-16">
			<h1 class="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900">
				Complete Home Inspection Guide for Las Vegas Buyers
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Everything you need to know about home inspections when buying a Las Vegas home
			</p>
		</div>

		<!-- What Inspectors Check -->
		<div class="mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">What Do Home Inspectors Check During Las Vegas Home Inspections?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				Las Vegas home inspectors check structural systems including foundation and roof, electrical systems with main panel and wiring, plumbing systems with water supply and drainage, HVAC systems for heating and cooling, exterior elements like siding and windows, and interior features including walls, floors, and doors to identify potential issues and safety concerns.
			</p>
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
				{#each inspectionAreas as area}
					<div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
						<div class="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-4">
							<svelte:component this={area.icon} class="w-6 h-6 text-primary-600" />
						</div>
						<h3 class="text-lg font-bold text-gray-900 mb-3">{area.area}</h3>
						<ul class="space-y-2">
							{#each area.items as item}
								<li class="flex items-start gap-2 text-sm text-gray-700">
									<CheckCircle class="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
									{item}
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</div>

		<!-- Common Issues -->
		<div class="mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">What Are Common Home Inspection Issues in Las Vegas?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				Common Las Vegas home inspection issues include foundation problems, roof damage, electrical issues, plumbing problems, HVAC replacement needs, and mold or water damage. These issues range from medium to high severity with repair costs from $1,000 to $50,000+ depending on the problem and scope.
			</p>
			<div class="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
				<div class="overflow-x-auto">
					<table class="w-full">
						<thead class="bg-gray-50">
							<tr>
								<th class="px-6 py-4 text-left text-sm font-bold text-gray-900">Issue</th>
								<th class="px-6 py-4 text-left text-sm font-bold text-gray-900">Severity</th>
								<th class="px-6 py-4 text-left text-sm font-bold text-gray-900">Description</th>
								<th class="px-6 py-4 text-left text-sm font-bold text-gray-900">Estimated Cost</th>
							</tr>
						</thead>
						<tbody class="divide-y divide-gray-200">
							{#each commonIssues as issue}
								<tr class="hover:bg-gray-50 transition-colors">
									<td class="px-6 py-4 text-sm font-semibold text-gray-900">{issue.issue}</td>
									<td class="px-6 py-4 text-sm">
										<span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold {issue.severity === 'High' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}">
											{issue.severity}
										</span>
									</td>
									<td class="px-6 py-4 text-sm text-gray-700">{issue.description}</td>
									<td class="px-6 py-4 text-sm font-semibold text-gray-900">{issue.cost}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		</div>

		<!-- Inspection Process -->
		<div class="mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">How Does the Las Vegas Home Inspection Process Work?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				The Las Vegas home inspection process includes scheduling inspection within 7-10 days of accepted offer, attending inspection to see issues firsthand, receiving detailed written report with photos, and negotiating repairs, credits, or price adjustments based on inspection findings.
			</p>
		</div>

		<div class="grid md:grid-cols-2 gap-12 mb-16">
			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
				<h3 class="text-2xl font-bold text-gray-900 mb-6">The Inspection Process</h3>
				<ol class="space-y-4">
					<li class="flex items-start gap-3">
						<span class="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold">1</span>
						<div>
							<h3 class="font-bold text-gray-900 mb-1">Schedule Inspection</h3>
							<p class="text-gray-700 text-sm">Typically scheduled within 7-10 days of accepted offer</p>
						</div>
					</li>
					<li class="flex items-start gap-3">
						<span class="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold">2</span>
						<div>
							<h3 class="font-bold text-gray-900 mb-1">Attend Inspection</h3>
							<p class="text-gray-700 text-sm">Be present to see issues firsthand and ask questions</p>
						</div>
					</li>
					<li class="flex items-start gap-3">
						<span class="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold">3</span>
						<div>
							<h3 class="font-bold text-gray-900 mb-1">Receive Report</h3>
							<p class="text-gray-700 text-sm">Detailed written report with photos and recommendations</p>
						</div>
					</li>
					<li class="flex items-start gap-3">
						<span class="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold">4</span>
						<div>
							<h3 class="font-bold text-gray-900 mb-1">Negotiate Repairs</h3>
							<p class="text-gray-700 text-sm">Request repairs, credits, or price adjustments</p>
						</div>
					</li>
				</ol>
			</div>

			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
				<h3 class="text-2xl font-bold text-gray-900 mb-6">Using Inspection Results</h3>
				<div class="space-y-6">
					<div>
						<h3 class="text-xl font-bold text-gray-900 mb-2">Request Repairs</h3>
						<p class="text-gray-700 text-sm mb-4">Ask seller to fix major issues before closing</p>
					</div>
					<div>
						<h3 class="text-xl font-bold text-gray-900 mb-2">Request Credits</h3>
						<p class="text-gray-700 text-sm mb-4">Negotiate closing cost credits for repairs you'll handle</p>
					</div>
					<div>
						<h3 class="text-xl font-bold text-gray-900 mb-2">Price Reduction</h3>
						<p class="text-gray-700 text-sm mb-4">Request purchase price reduction for major issues</p>
					</div>
					<div>
						<h3 class="text-xl font-bold text-gray-900 mb-2">Walk Away</h3>
						<p class="text-gray-700 text-sm">If issues are too severe, you can cancel the contract</p>
					</div>
				</div>
			</div>
		</div>

		<!-- CTA Section -->
		<div class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-center text-white">
			<h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Navigate Your Las Vegas Home Inspection?</h2>
			<p class="text-lg text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
				I can recommend qualified inspectors and help you navigate the inspection process. With deep knowledge of Las Vegas home inspections, common issues, and negotiation strategies, I'll guide you through every step of your inspection journey.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/contact" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">Contact Me</a>
				<a href="/services/buyer-representation" class="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">Buyer Services</a>
			</div>
		</div>
	</div>
</section>

