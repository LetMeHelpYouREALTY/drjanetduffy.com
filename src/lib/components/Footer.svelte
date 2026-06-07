<script>
	const currentYear = new Date().getFullYear();

	const quickLinks = [
		{ name: 'Home', href: '/' },
		{ name: 'Properties', href: '/properties' },
		{ name: 'Home Value', href: '/home-value' },
		{ name: 'Rentals', href: '/rentals' },
		{ name: 'About', href: '/about' },
		{ name: 'Contact', href: '/contact' }
	];

	const services = [
		{ name: 'Luxury Home Sales', href: '/properties' },
		{ name: 'Buyer Representation', href: '/about' },
		{ name: 'Home Valuation', href: '/home-value' },
		{ name: 'Relocation Services', href: '/contact' }
	];

	const neighborhoods = [
		{ name: 'Summerlin West 89138', href: '/properties?zip=89138' },
		{ name: 'The Ridges 89135', href: '/properties?zip=89135' },
		{ name: 'Red Rock 89144', href: '/properties?zip=89144' },
		{ name: 'Summerlin Centre', href: '/properties' }
	];
</script>

<footer class="bg-gray-900 text-white">
	<div class="container mx-auto px-4 py-12">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
			<!-- Company Info with NAP -->
			<div class="lg:col-span-1" itemscope itemtype="https://schema.org/RealEstateAgent">
				<div class="flex items-center space-x-3 mb-4">
					<div class="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
						<span class="text-white font-bold text-lg">JD</span>
					</div>
					<div>
						<h3 class="text-xl font-bold" itemprop="name">Dr. Janet Duffy</h3>
						<p class="text-sm text-gray-400">REALTOR<sup>®</sup></p>
					</div>
				</div>
				<p class="text-gray-300 mb-4">
					West Summerlin's trusted luxury real estate expert with 15+ years of experience serving <span itemprop="areaServed">89138, 89144, and 89135</span>.
				</p>
				<div class="space-y-2">
					<p class="text-sm text-gray-300">
						<span class="font-semibold">Phone:</span>
						<a href="tel:+17022221964" class="hover:text-primary-400" itemprop="telephone">702-222-1964</a>
					</p>
					<p class="text-sm text-gray-300">
						<span class="font-semibold">Email:</span>
						<a href="mailto:drduffy@bhhsnv.com" class="hover:text-primary-400" itemprop="email">drduffy@bhhsnv.com</a>
					</p>
					<p class="text-sm text-gray-300" itemprop="worksFor" itemscope itemtype="https://schema.org/Organization">
						<span class="font-semibold">Brokerage:</span>
						<span itemprop="name">Berkshire Hathaway Nevada Properties</span>
					</p>
				</div>
			</div>

			<!-- Quick Links -->
			<div>
				<h4 class="text-lg font-semibold mb-4">Quick Links</h4>
				<ul class="space-y-2">
					{#each quickLinks as link}
						<li>
							<a
								href={link.href}
								class="text-gray-300 hover:text-primary-400 transition-colors"
							>
								{link.name}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Services & Neighborhoods -->
			<div>
				<h4 class="text-lg font-semibold mb-4">Services</h4>
				<ul class="space-y-2">
					{#each services as service}
						<li>
							<a
								href={service.href}
								class="text-gray-300 hover:text-primary-400 transition-colors"
							>
								{service.name}
							</a>
						</li>
					{/each}
				</ul>

				<div class="mt-6">
					<h5 class="text-md font-semibold mb-3">Neighborhoods Served</h5>
					<div class="space-y-1">
						{#each neighborhoods as neighborhood}
							<a
								href={neighborhood.href}
								class="block text-sm text-gray-300 hover:text-primary-400 transition-colors"
							>
								{neighborhood.name}
							</a>
						{/each}
					</div>
				</div>
			</div>

			<!-- Contact & Hours -->
			<div>
				<h4 class="text-lg font-semibold mb-4">Get In Touch</h4>
				<div class="space-y-4">
					<div itemscope itemtype="https://schema.org/OpeningHoursSpecification">
						<h5 class="font-semibold text-primary-400 mb-2">Office Hours</h5>
						<p class="text-sm text-gray-300">
							<span itemprop="dayOfWeek" content="Monday Tuesday Wednesday Thursday Friday">Monday - Friday</span>:
							<time itemprop="opens" content="09:00">9:00 AM</time> -
							<time itemprop="closes" content="18:00">6:00 PM</time>
						</p>
						<p class="text-sm text-gray-300">
							<span itemprop="dayOfWeek" content="Saturday">Saturday</span>:
							<time itemprop="opens" content="10:00">10:00 AM</time> -
							<time itemprop="closes" content="16:00">4:00 PM</time>
						</p>
						<p class="text-sm text-gray-300">Sunday: By Appointment</p>
					</div>

					<div>
						<a href="/contact" class="inline-block bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors">
							Contact Me Today
						</a>
					</div>
				</div>
			</div>
		</div>

		<!-- Bottom Bar -->
		<div class="border-t border-gray-800 mt-8 pt-8">
			<div class="flex flex-col md:flex-row justify-between items-center">
				<div class="text-sm text-gray-400 mb-4 md:mb-0">
					© {currentYear} Dr. Janet Duffy - Berkshire Hathaway Nevada Properties. All rights reserved.
				</div>
				<div class="flex space-x-6 text-sm">
					<a href="/privacy" class="text-gray-400 hover:text-primary-400 transition-colors">Privacy Policy</a>
					<a href="/terms" class="text-gray-400 hover:text-primary-400 transition-colors">Terms of Service</a>
					<a href="/sitemap.xml" class="text-gray-400 hover:text-primary-400 transition-colors">Sitemap</a>
				</div>
			</div>
			<div class="text-center mt-4 text-xs text-gray-500">
				<p>Serving West Summerlin: 89138, 89144, 89135 | Las Vegas, Nevada Real Estate</p>
			</div>
		</div>
	</div>
</footer>
