<script>
	import { GraduationCap, Award, CheckCircle, MapPin, Users, TrendingUp } from 'lucide-svelte';
	
	const districts = [
		{
			name: 'Clark County School District',
			rating: 'A-',
			description: 'Largest school district in Nevada, serving Las Vegas and surrounding areas',
			schools: '350+ schools',
			students: '300K+ students',
			features: ['Diverse programs', 'Advanced placement', 'Career and technical education', 'Magnet schools']
		},
		{
			name: 'Henderson Area Schools',
			rating: 'A',
			description: 'Top-rated schools serving Henderson and Green Valley',
			schools: '40+ schools',
			students: '45K+ students',
			features: ['Excellent test scores', 'Strong parent involvement', 'Comprehensive programs', 'High graduation rates']
		},
		{
			name: 'Summerlin Schools',
			rating: 'A+',
			description: 'Premier schools in the Summerlin master-planned community',
			schools: '15+ schools',
			students: '12K+ students',
			features: ['Top-rated performance', 'Modern facilities', 'Extensive extracurriculars', 'College prep focus']
		}
	];
	
	const topSchools = [
		{ name: 'Coronado High School', district: 'CCSD', rating: 'A+', type: 'High School' },
		{ name: 'Palo Verde High School', district: 'CCSD', rating: 'A+', type: 'High School' },
		{ name: 'Green Valley High School', district: 'CCSD', rating: 'A', type: 'High School' },
		{ name: 'Sig Rogich Middle School', district: 'CCSD', rating: 'A+', type: 'Middle School' },
		{ name: 'Vanderburg Elementary', district: 'CCSD', rating: 'A+', type: 'Elementary' }
	];
</script>

<svelte:head>
	<title>School Districts & Schools | Las Vegas | Dr. Janet Duffy REALTOR®</title>
	<meta name="description" content="Information about Las Vegas area school districts and top-rated schools. Find the best schools for your family in Henderson, Summerlin, and Clark County." />
</svelte:head>

<section class="section bg-gradient-to-b from-white via-gray-50 to-white">
	<div class="container-premium">
		<div class="text-center mb-16">
			<h1 class="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900">
				Find the Best Las Vegas School Districts & Schools
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Find the best schools for your family in Las Vegas and surrounding areas
			</p>
		</div>

		<!-- School Districts -->
		<div class="mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">What Are the Major Las Vegas School Districts?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				Las Vegas major school districts include Clark County School District, Henderson Area Schools, and Summerlin Schools. Each district offers diverse programs, excellent test scores, comprehensive educational opportunities, and top-rated schools that serve families throughout the Las Vegas Valley.
			</p>
			<div class="grid md:grid-cols-3 gap-6">
				{#each districts as district}
					<div class="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
						<div class="flex items-center justify-between mb-4">
							<div class="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg">
								<GraduationCap class="w-6 h-6 text-primary-600" />
							</div>
							<span class="text-2xl font-bold text-primary-600">{district.rating}</span>
						</div>
						<h3 class="text-xl font-bold text-gray-900 mb-2">{district.name}</h3>
						<p class="text-gray-600 mb-4">{district.description}</p>
						<div class="mb-4">
							<p class="text-sm text-gray-600 mb-1"><strong>{district.schools}</strong></p>
							<p class="text-sm text-gray-600"><strong>{district.students}</strong></p>
						</div>
						<ul class="space-y-2">
							{#each district.features as feature}
								<li class="flex items-start gap-2 text-sm text-gray-700">
									<CheckCircle class="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
									{feature}
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</div>

		<!-- Top Schools -->
		<div class="mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Which Las Vegas Schools Are Top-Rated?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				Las Vegas top-rated schools include Coronado High School, Palo Verde High School, Green Valley High School, Sig Rogich Middle School, and Vanderburg Elementary. These schools consistently achieve A and A+ ratings with excellent academic performance, comprehensive programs, and strong community support.
			</p>
			<div class="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
				<div class="overflow-x-auto">
					<table class="w-full">
						<thead class="bg-gray-50">
							<tr>
								<th class="px-6 py-4 text-left text-sm font-bold text-gray-900">School Name</th>
								<th class="px-6 py-4 text-left text-sm font-bold text-gray-900">Type</th>
								<th class="px-6 py-4 text-left text-sm font-bold text-gray-900">District</th>
								<th class="px-6 py-4 text-left text-sm font-bold text-gray-900">Rating</th>
							</tr>
						</thead>
						<tbody class="divide-y divide-gray-200">
							{#each topSchools as school}
								<tr class="hover:bg-gray-50 transition-colors">
									<td class="px-6 py-4 text-sm font-semibold text-gray-900">{school.name}</td>
									<td class="px-6 py-4 text-sm text-gray-600">{school.type}</td>
									<td class="px-6 py-4 text-sm text-gray-600">{school.district}</td>
									<td class="px-6 py-4 text-sm">
										<span class="inline-flex items-center gap-1 text-primary-600 font-bold">
											<Award class="w-4 h-4" />
											{school.rating}
										</span>
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		</div>

		<!-- School Search Tips -->
		<div class="grid md:grid-cols-2 gap-12 mb-16">
			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
				<h2 class="text-3xl font-bold text-gray-900 mb-6">Finding the Right School</h2>
				<ul class="space-y-4">
					<li class="flex items-start gap-3">
						<CheckCircle class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
						<span class="text-gray-700">Research school ratings and test scores</span>
					</li>
					<li class="flex items-start gap-3">
						<CheckCircle class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
						<span class="text-gray-700">Visit schools and meet with administrators</span>
					</li>
					<li class="flex items-start gap-3">
						<CheckCircle class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
						<span class="text-gray-700">Consider special programs and extracurriculars</span>
					</li>
					<li class="flex items-start gap-3">
						<CheckCircle class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
						<span class="text-gray-700">Check school boundaries and enrollment policies</span>
					</li>
				</ul>
			</div>

			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
				<h2 class="text-3xl font-bold text-gray-900 mb-6">School Impact on Real Estate</h2>
				<div class="space-y-4">
					<div class="flex items-start gap-4">
						<TrendingUp class="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
						<div>
							<h3 class="font-bold text-gray-900 mb-1">Property Values</h3>
							<p class="text-gray-700 text-sm">Top-rated schools can increase home values by 10-20%</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<MapPin class="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
						<div>
							<h3 class="font-bold text-gray-900 mb-1">Location Matters</h3>
							<p class="text-gray-700 text-sm">Homes in top school zones sell faster and for higher prices</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<Users class="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
						<div>
							<h3 class="font-bold text-gray-900 mb-1">Resale Value</h3>
							<p class="text-gray-700 text-sm">Strong school districts maintain property values over time</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- CTA Section -->
		<div class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-center text-white">
			<h2 class="text-3xl font-bold mb-4">Need Help Finding the Right School?</h2>
			<p class="text-lg text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
				I can help you find homes in top-rated school districts that match your family's needs
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/contact" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">Contact Me</a>
				<a href="/properties" class="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">View Properties</a>
			</div>
		</div>
	</div>
</section>

