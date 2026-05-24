<script>
	import { CheckCircle, Calendar, Box, FileText, Users, Home, Truck } from 'lucide-svelte';
	
	const checklistItems = [
		{
			category: '8 Weeks Before',
			icon: Calendar,
			items: [
				'Research moving companies and get quotes',
				'Start decluttering and organizing',
				'Create a moving binder with important documents',
				'Notify current landlord if renting',
				'Begin packing non-essential items'
			]
		},
		{
			category: '4 Weeks Before',
			icon: Box,
			items: [
				'Book moving company or rent truck',
				'Order packing supplies',
				'Change address with USPS',
				'Notify banks, credit cards, and subscriptions',
				'Schedule utility transfers'
			]
		},
		{
			category: '2 Weeks Before',
			icon: FileText,
			items: [
				'Transfer medical records',
				'Update driver\'s license and vehicle registration',
				'Notify insurance companies',
				'Pack most belongings',
				'Confirm moving day details'
			]
		},
		{
			category: 'Moving Week',
			icon: Truck,
			items: [
				'Pack essentials box (toiletries, clothes, documents)',
				'Defrost refrigerator',
				'Disconnect appliances',
				'Do final walkthrough',
				'Get keys and move in!'
			]
		}
	];
</script>

<svelte:head>
	<title>Moving Checklist | Las Vegas | Dr. Janet Duffy REALTOR®</title>
	<meta name="description" content="Complete moving checklist for relocating to Las Vegas. Timeline and tasks to ensure a smooth move to your new home." />
</svelte:head>

<section class="section bg-gradient-to-b from-white via-gray-50 to-white">
	<div class="container-premium">
		<div class="text-center mb-16">
			<h1 class="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900">
				Complete Moving Checklist for Las Vegas Relocation
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Complete timeline and tasks to ensure a smooth move to your new Las Vegas home
			</p>
		</div>

		<!-- Checklist Timeline -->
		<div class="mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">What Should You Include in Your Las Vegas Moving Checklist?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				Your Las Vegas moving checklist should include tasks from 8 weeks before moving through moving week, covering moving company research, decluttering, address changes, utility transfers, medical records, insurance updates, and final preparations to ensure a smooth relocation to your new Las Vegas home.
			</p>
		</div>

		<div class="space-y-8 mb-16">
			{#each checklistItems as category}
				<div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
					<div class="flex items-center gap-4 mb-6">
						<div class="flex-shrink-0 w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center">
							<svelte:component this={category.icon} class="w-8 h-8 text-primary-600" />
						</div>
						<h3 class="text-2xl font-bold text-gray-900">{category.category}</h3>
					</div>
					<ul class="space-y-3">
						{#each category.items as item}
							<li class="flex items-start gap-3">
								<CheckCircle class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
								<span class="text-gray-700">{item}</span>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>

		<!-- Important Contacts -->
		<div class="mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">What Essential Contacts Do You Need for Your Las Vegas Move?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				Essential contacts for your Las Vegas move include utility companies like NV Energy and Southwest Gas, government services for address changes and vehicle registration, and service providers for internet, cable, and other utilities to ensure seamless transition to your new Las Vegas home.
			</p>
		</div>

		<div class="grid md:grid-cols-2 gap-12 mb-16">
			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
				<h3 class="text-2xl font-bold text-gray-900 mb-6">Essential Contacts</h3>
				<div class="space-y-4">
					<div>
						<h3 class="font-bold text-gray-900 mb-2">Utilities</h3>
						<ul class="text-sm text-gray-700 space-y-1">
							<li>NV Energy (Electric): 702-402-5555</li>
							<li>Southwest Gas: 877-860-6020</li>
							<li>Las Vegas Valley Water District: 702-870-4194</li>
						</ul>
					</div>
					<div>
						<h3 class="font-bold text-gray-900 mb-2">Government</h3>
						<ul class="text-sm text-gray-700 space-y-1">
							<li>DMV: 702-486-4368</li>
							<li>USPS Change of Address: usps.com</li>
							<li>Clark County Assessor: 702-455-3882</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
				<h3 class="text-2xl font-bold text-gray-900 mb-6">Moving Tips</h3>
				<ul class="space-y-4">
					<li class="flex items-start gap-3">
						<Home class="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
						<span class="text-gray-700">Label boxes clearly with room and contents</span>
					</li>
					<li class="flex items-start gap-3">
						<Box class="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
						<span class="text-gray-700">Pack a first-night essentials box</span>
					</li>
					<li class="flex items-start gap-3">
						<FileText class="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
						<span class="text-gray-700">Keep important documents with you</span>
					</li>
					<li class="flex items-start gap-3">
						<Users class="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
						<span class="text-gray-700">Take photos of valuable items before packing</span>
					</li>
					<li class="flex items-start gap-3">
						<Truck class="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
						<span class="text-gray-700">Measure doorways and furniture before moving</span>
					</li>
				</ul>
			</div>
		</div>

		<!-- CTA Section -->
		<div class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-center text-white">
			<h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Plan Your Move to Las Vegas?</h2>
			<p class="text-lg text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
				I can help you with relocation services and finding your perfect Las Vegas home. With deep knowledge of Las Vegas neighborhoods, moving resources, and relocation assistance, I'll guide you through every step of your move.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/contact" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">Contact Me</a>
				<a href="/relocation" class="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">Relocation Services</a>
			</div>
		</div>
	</div>
</section>

