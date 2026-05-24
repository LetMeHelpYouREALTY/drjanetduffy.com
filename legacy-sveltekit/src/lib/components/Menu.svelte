<script>
	import { page } from '$app/stores';
	import { Search, Menu as MenuIcon, X } from 'lucide-svelte';
	
	let mobileMenuOpen = false;
	let searchOpen = false;
	let searchQuery = '';
	
	const mainMenu = [
		{ name: 'Get Started', href: '/get-started', description: 'Get Started with Las Vegas Real Estate' },
		{ name: 'Properties', href: '/properties', description: 'West Summerlin Homes', hasDropdown: true },
		{ name: 'Home Value', href: '/home-value', description: 'Get Your Home Value' },
		{ name: 'Rentals', href: '/rentals', description: 'Luxury Rentals' },
		{ name: 'Blog', href: '/blog', description: 'Real Estate Blog' },
		{ name: 'About', href: '/about', description: 'Meet Dr. Janet Duffy' },
		{ name: 'Contact', href: '/contact', description: 'Schedule Consultation' }
	];
	
	const propertySubmenu = [
		{ name: 'All Properties', href: '/properties', description: 'Complete inventory' },
		{ name: 'Grid View', href: '/listings-embedded', description: 'Visual property search' },
		{ name: 'List View', href: '/listings-list', description: 'Detailed listings' },
		{ name: 'Past Sales', href: '/past-sales', description: 'Recent transactions' }
	];
	
	const luxuryCommunities = [
		{ name: 'West Summerlin', href: '/properties?neighborhood=west-summerlin', zip: '89138' },
		{ name: 'The Ridges', href: '/properties?neighborhood=the-ridges', zip: '89144' },
		{ name: 'Red Rock Country Club', href: '/properties?neighborhood=red-rock', zip: '89135' },
		{ name: 'Anthem Country Club', href: '/properties?neighborhood=anthem', zip: 'Luxury' },
		{ name: 'MacDonald Highlands', href: '/properties?neighborhood=macdonald', zip: 'Executive' },
		{ name: 'Seven Hills', href: '/properties?neighborhood=seven-hills', zip: 'Investment' }
	];
	
	const luxuryServices = [
		{ name: 'Executive Relocations', href: '/relocation', description: 'C-suite moves' },
		{ name: 'California Migration', href: '/relocation', description: 'CA to NV moves' },
		{ name: 'Investment Sales', href: '/properties?type=investment', description: 'ROI properties' },
		{ name: 'Divorce Relocation', href: '/relocation', description: 'Life transitions' },
		{ name: 'Market Analysis', href: '/home-value', description: 'Home valuation' },
		{ name: 'Timing Advantage', href: '/market-insights', description: 'Market insights' }
	];
	
	const neighborhoods = [
		{ name: 'West Summerlin', href: '/properties?neighborhood=west-summerlin', zip: '89138' },
		{ name: 'The Ridges', href: '/properties?neighborhood=the-ridges', zip: '89144' },
		{ name: 'Red Rock Country Club', href: '/properties?neighborhood=red-rock', zip: '89135' },
		{ name: 'Anthem Country Club', href: '/properties?neighborhood=anthem', zip: 'Luxury' },
		{ name: 'MacDonald Highlands', href: '/properties?neighborhood=macdonald', zip: 'Executive' },
		{ name: 'Seven Hills', href: '/properties?neighborhood=seven-hills', zip: 'Investment' }
	];
	
	const quickLinks = [
		{ name: 'Home Value', href: '/home-value' },
		{ name: 'Market Report', href: '/market-insights' },
		{ name: 'Testimonials', href: '/testimonials' },
		{ name: 'Contact', href: '/contact' }
	];
	
	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
	
	function closeMobileMenu() {
		mobileMenuOpen = false;
	}
	
	function toggleSearch() {
		searchOpen = !searchOpen;
	}
	
	function closeSearch() {
		searchOpen = false;
		searchQuery = '';
	}
	
	function handleSearch(event) {
		event.preventDefault();
		if (searchQuery.trim()) {
			console.log('Searching for:', searchQuery);
		}
	}
</script>

<nav class="bg-white shadow-lg sticky top-0 z-50">
	<div class="container mx-auto px-4">
		<div class="flex justify-between items-center h-16">
			<!-- Logo -->
			<div class="flex items-center space-x-3">
				<div class="w-10 h-10 bg-vegas-gold-600 rounded-full flex items-center justify-center">
					<span class="text-white font-bold text-lg">JD</span>
				</div>
				<div>
					<h1 class="text-xl font-bold text-vegas-deep-900">Dr. Janet Duffy</h1>
					<p class="text-sm text-vegas-gold-600 font-semibold">REALTOR<sup>®</sup></p>
				</div>
			</div>
			
			<!-- Desktop Navigation -->
			<div class="hidden lg:flex items-center space-x-1">
				{#each mainMenu as item}
					<div class="relative group">
						<a 
							href={item.href} 
							class="px-4 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors rounded-lg hover:bg-gray-50 {$page.url.pathname === item.href ? 'text-primary-600 bg-primary-50' : ''}"
						>
							{item.name}
						</a>
						
						{#if item.name === 'Properties'}
							<div class="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
								<div class="p-6">
									<h3 class="text-lg font-semibold text-vegas-deep-900 mb-4">Luxury Property Search</h3>
									
									<div class="mb-6">
										<h4 class="text-sm font-semibold text-vegas-gold-600 mb-3">Browse Properties</h4>
										<div class="space-y-2">
											{#each propertySubmenu as subItem}
												<a 
													href={subItem.href} 
													class="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:text-vegas-gold-600 hover:bg-vegas-gold-50 rounded-md transition-colors"
												>
													<div>
														<div class="font-medium text-sm">{subItem.name}</div>
														<div class="text-xs text-gray-500">{subItem.description}</div>
													</div>
												</a>
											{/each}
										</div>
									</div>
									
									<div class="border-t border-gray-200 pt-4 mb-4">
										<h4 class="text-sm font-semibold text-vegas-gold-600 mb-3">West Summerlin Communities</h4>
										<div class="grid grid-cols-2 gap-2">
											{#each luxuryCommunities as community}
												<a 
													href={community.href} 
													class="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:text-vegas-gold-600 hover:bg-vegas-gold-50 rounded-md transition-colors"
												>
													<div>
														<div class="font-medium">{community.name}</div>
														<div class="text-xs text-gray-500">{community.zip}</div>
													</div>
												</a>
											{/each}
										</div>
									</div>
									
									<div class="border-t border-gray-200 pt-4">
										<h4 class="text-sm font-semibold text-vegas-gold-600 mb-3">Quick Access</h4>
										<div class="grid grid-cols-2 gap-2">
											{#each quickLinks as link}
												<a 
													href={link.href} 
													class="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:text-vegas-gold-600 hover:bg-vegas-gold-50 rounded-md transition-colors"
												>
													<span>{link.name}</span>
												</a>
											{/each}
										</div>
									</div>
								</div>
							</div>
						{/if}
					</div>
				{/each}
				
				<!-- Search Button -->
				<div class="relative search-container">
					<button 
						type="button"
						on:click={toggleSearch}
						class="p-2 text-gray-700 hover:text-primary-600 transition-colors"
						aria-label="Search properties"
					>
						<Search class="w-4 h-4" />
					</button>
					
					{#if searchOpen}
						<div class="absolute top-full right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
							<form on:submit={handleSearch} class="p-4">
								<div class="flex space-x-2">
									<input
										type="text"
										bind:value={searchQuery}
										placeholder="Search properties, neighborhoods..."
										class="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
									/>
									<button
										type="submit"
										class="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
									>
										Search
									</button>
								</div>
								<div class="mt-3 text-sm text-gray-500">
									Try: "Henderson", "Summerlin", "3 bedroom", "pool"
								</div>
							</form>
						</div>
					{/if}
				</div>
				
				<!-- CTA Button -->
				<a 
g					href="tel:+17027667668" 
					class="ml-4 bg-vegas-gold-600 text-vegas-deep-900 px-6 py-2 rounded-lg font-semibold hover:bg-vegas-gold-700 transition-colors shadow-lg hover:shadow-xl"
				>
					Call: (702) 766-7668
				</a>
			</div>
			
			<!-- Mobile menu button -->
			<div class="lg:hidden flex items-center space-x-2">
				<button 
					type="button"
					on:click={toggleSearch}
					class="p-2 text-gray-700 hover:text-primary-600 transition-colors"
					aria-label="Search"
				>
					<Search class="w-4 h-4" />
				</button>
				
				<button 
					type="button"
					on:click={toggleMobileMenu}
					class="p-2 text-gray-700 hover:text-primary-600 focus:outline-none focus:text-primary-600"
					aria-label="Toggle mobile menu"
				>
					{#if mobileMenuOpen}
						<X class="w-5 h-5" />
					{:else}
						<MenuIcon class="w-5 h-5" />
					{/if}
				</button>
			</div>
		</div>
		
		<!-- Mobile Search -->
		{#if searchOpen}
			<div class="lg:hidden border-t border-gray-200 bg-gray-50 p-4">
				<form on:submit={handleSearch} class="flex space-x-2">
					<input
						type="text"
						bind:value={searchQuery}
						placeholder="Search properties..."
						class="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
					/>
					<button
						type="submit"
						class="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
					>
						Search
					</button>
				</form>
			</div>
		{/if}
		
		<!-- Mobile Navigation -->
		{#if mobileMenuOpen}
			<div class="lg:hidden border-t border-gray-200 bg-gray-50">
				<div class="px-4 py-2 space-y-1">
					<!-- Main Menu -->
					{#each mainMenu as item}
						<a 
							href={item.href} 
							class="flex items-center space-x-3 px-3 py-3 text-gray-700 hover:text-primary-600 font-medium transition-colors rounded-lg hover:bg-white {$page.url.pathname === item.href ? 'text-primary-600 bg-white' : ''}"
							on:click={closeMobileMenu}
						>
							<span class="font-medium">{item.name}</span>
						</a>
					{/each}
					
					<!-- Property Submenu for Mobile -->
					<div class="border-t border-gray-200 my-2"></div>
					<div class="px-3 py-2">
						<h4 class="text-sm font-semibold text-gray-700 mb-3">Property Search</h4>
						<div class="space-y-1">
							{#each propertySubmenu as subItem}
								<a 
									href={subItem.href} 
									class="flex items-center space-x-3 px-3 py-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-white transition-colors rounded-md"
									on:click={closeMobileMenu}
								>
									<span class="font-medium">{subItem.name}</span>
								</a>
							{/each}
						</div>
					</div>
					
					<!-- Quick Links for Mobile -->
					<div class="border-t border-gray-200 my-2"></div>
					<div class="px-3 py-2">
						<h4 class="text-sm font-semibold text-gray-700 mb-3">Quick Access</h4>
						<div class="grid grid-cols-1 gap-2">
							{#each quickLinks as link}
								<a 
									href={link.href} 
									class="flex items-center space-x-3 px-3 py-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-white rounded-md transition-colors"
									on:click={closeMobileMenu}
								>
									<span class="font-medium">{link.name}</span>
								</a>
							{/each}
						</div>
					</div>
					
					<!-- Luxury Communities for Mobile -->
					<div class="border-t border-gray-200 my-2"></div>
					<div class="px-3 py-2">
						<h4 class="text-sm font-semibold text-vegas-gold-600 mb-3">West Summerlin Communities</h4>
						<div class="grid grid-cols-2 gap-2">
							{#each luxuryCommunities as community}
								<a 
									href={community.href} 
									class="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:text-vegas-gold-600 hover:bg-vegas-gold-50 rounded-md transition-colors"
									on:click={closeMobileMenu}
								>
									<div>
										<div class="font-medium">{community.name}</div>
										<div class="text-xs text-gray-500">{community.zip}</div>
									</div>
								</a>
							{/each}
						</div>
					</div>
					
					<!-- Contact Options for Mobile -->
					<div class="border-t border-gray-200 my-2"></div>
					<div class="px-3 py-2">
						<h4 class="text-sm font-semibold text-vegas-gold-600 mb-3">Get In Touch</h4>
						<div class="space-y-2">
							<a 
								href="tel:+17027667668" 
								class="flex items-center space-x-3 px-3 py-2 text-sm bg-vegas-gold-600 text-vegas-deep-900 hover:bg-vegas-gold-700 transition-colors rounded-md font-semibold"
								on:click={closeMobileMenu}
							>
								<span class="font-medium">Call Direct: (702) 766-7668</span>
							</a>
							<a 
								href="mailto:info@DrJanetDuffy.com" 
								class="flex items-center space-x-3 px-3 py-2 text-sm text-gray-600 hover:text-vegas-gold-600 hover:bg-vegas-gold-50 transition-colors rounded-md"
								on:click={closeMobileMenu}
							>
								<span class="font-medium">info@DrJanetDuffy.com</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		{/if}
	</div>
</nav>

<style>
	.group:hover .group-hover\:opacity-100 {
		z-index: 50;
	}
</style>