<script>
	import { Mail, MapPin } from 'lucide-svelte';
	
	const currentYear = new Date().getFullYear();
	
	let newsletterEmail = '';
	let newsletterSubmitted = false;
	let newsletterError = false;
	
	function handleNewsletterSubmit() {
		if (!newsletterEmail || !newsletterEmail.includes('@')) {
			newsletterError = true;
			return;
		}
		
		// In a real implementation, this would send to your email service
		// For now, we'll just show a success message
		newsletterSubmitted = true;
		newsletterError = false;
		newsletterEmail = '';
		
		// Reset success message after 5 seconds
		setTimeout(() => {
			newsletterSubmitted = false;
		}, 5000);
	}
	
	const mainLinks = [
		{ name: 'Home', href: '/' },
		{ name: 'Properties', href: '/properties' },
		{ name: 'About', href: '/about' },
		{ name: 'Services', href: '/services' },
		{ name: 'Neighborhoods', href: '/neighborhoods' },
		{ name: 'Testimonials', href: '/testimonials' },
		{ name: 'Market Insights', href: '/market-insights' },
		{ name: 'Contact', href: '/contact' },
		{ name: 'Blog', href: '/blog' }
	];
	
	const propertyLinks = [
		{ name: 'Rentals', href: '/rentals' },
		{ name: 'Grid View', href: '/listings-embedded' },
		{ name: 'List View', href: '/listings-list' },
		{ name: 'Past Sales', href: '/past-sales' },
		{ name: 'Single Family', href: '/property-types/single-family' },
		{ name: 'Condos', href: '/property-types/condos' },
		{ name: 'Townhomes', href: '/property-types/townhomes' },
		{ name: 'New Construction', href: '/property-types/new-construction' },
		{ name: 'Luxury Estates', href: '/property-types/luxury-homes' },
		{ name: 'Gated Communities', href: '/property-types/gated-communities' },
		{ name: 'Golf Communities', href: '/property-types/golf-communities' },
		{ name: '55+ Communities', href: '/property-types/55-plus-communities' },
		{ name: 'Foreclosures', href: '/property-types/foreclosures' },
		{ name: 'Short Sales', href: '/property-types/short-sales' }
	];
	
	const communityLinks = [
		{ name: 'Summerlin', href: '/communities/summerlin' },
		{ name: 'Henderson', href: '/communities/henderson' },
		{ name: 'Green Valley', href: '/communities/green-valley' },
		{ name: 'North Las Vegas', href: '/communities/north-las-vegas' },
		{ name: 'Boulder City', href: '/communities/boulder-city' },
		{ name: 'Seven Hills', href: '/communities/seven-hills' },
		{ name: 'Southern Highlands', href: '/communities/southern-highlands' },
		{ name: 'Mountains Edge', href: '/communities/mountains-edge' },
		{ name: 'Anthem', href: '/communities/anthem' }
	];
	
	const serviceLinks = [
		{ name: 'All Services', href: '/services' },
		{ name: 'Home Value', href: '/home-value' },
		{ name: 'Buying Guide', href: '/buying-guide' },
		{ name: 'Selling Guide', href: '/selling-guide' },
		{ name: 'First-Time Buyers', href: '/first-time-buyers' },
		{ name: 'Investment Guide', href: '/investment-guide' },
		{ name: 'Relocation', href: '/relocation' },
		{ name: 'Resources', href: '/resources' },
		{ name: 'FAQ', href: '/faq' },
		{ name: 'Mortgage Calculator', href: '/mortgage-calculator' },
		{ name: 'Testimonials', href: '/testimonials' },
		{ name: 'Market Insights', href: '/market-insights' },
		{ name: 'Contact', href: '/contact' }
	];
</script>

<footer class="bg-gray-900 text-white">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="py-12 lg:py-16">
			<div class="flex flex-wrap -mx-4">
				<!-- Main Navigation -->
				<div class="w-full sm:w-1/2 lg:w-1/5 px-4 mb-8 lg:mb-0">
					<h3 class="text-lg font-bold mb-4 text-white">Main</h3>
					<ul class="space-y-2.5">
						{#each mainLinks as link}
							<li>
								<a 
									href={link.href} 
									class="text-gray-300 hover:text-primary-400 transition-colors text-sm"
								>
									{link.name}
								</a>
							</li>
						{/each}
					</ul>
				</div>
				
				<!-- Properties -->
				<div class="w-full sm:w-1/2 lg:w-1/5 px-4 mb-8 lg:mb-0">
					<h3 class="text-lg font-bold mb-4 text-white">Properties</h3>
					<ul class="space-y-2.5">
						{#each propertyLinks as link}
							<li>
								<a 
									href={link.href} 
									class="text-gray-300 hover:text-primary-400 transition-colors text-sm"
								>
									{link.name}
								</a>
							</li>
						{/each}
					</ul>
				</div>
				
				<!-- Communities -->
				<div class="w-full sm:w-1/2 lg:w-1/5 px-4 mb-8 lg:mb-0">
					<h3 class="text-lg font-bold mb-4 text-white">Communities</h3>
					<p class="text-sm text-gray-400 mb-3">Popular Neighborhoods</p>
					<ul class="space-y-2.5 mb-4">
						{#each communityLinks as link}
							<li>
								<a 
									href={link.href} 
									class="text-gray-300 hover:text-primary-400 transition-colors text-sm"
								>
									{link.name}
								</a>
							</li>
						{/each}
					</ul>
					<a 
						href="/neighborhoods" 
						class="text-primary-400 hover:text-primary-300 font-semibold text-sm inline-flex items-center gap-1 transition-colors"
					>
						View All →
					</a>
				</div>
				
				<!-- Services -->
				<div class="w-full sm:w-1/2 lg:w-1/5 px-4 mb-8 lg:mb-0">
					<h3 class="text-lg font-bold mb-4 text-white">Services</h3>
					<ul class="space-y-2.5">
						{#each serviceLinks as link}
							<li>
								<a 
									href={link.href} 
									class="text-gray-300 hover:text-primary-400 transition-colors text-sm"
								>
									{link.name}
								</a>
							</li>
						{/each}
					</ul>
				</div>
				
				<!-- Contact Information -->
				<div class="w-full sm:w-1/2 lg:w-1/5 px-4 mb-8 lg:mb-0">
					<div class="flex items-center space-x-3 mb-6">
						<div class="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
							<span class="text-white font-bold text-lg">JD</span>
						</div>
						<div>
							<h3 class="text-xl font-bold text-white">Dr. Janet Duffy</h3>
							<p class="text-sm text-gray-400">REALTOR<sup>®</sup></p>
						</div>
					</div>
					
					<div class="space-y-4">
						<div class="flex items-start gap-3">
							<div>
								<p class="text-sm text-gray-400 mb-1">Phone</p>
								<a 
									href="tel:+17027667668" 
									class="text-gray-300 hover:text-primary-400 transition-colors text-sm font-medium"
								>
									(702) 766-7668
								</a>
							</div>
						</div>
						
						<div class="flex items-start gap-3">
							<Mail class="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
							<div>
								<p class="text-sm text-gray-400 mb-1">Email</p>
								<a 
									href="mailto:info@DrJanetDuffy.com" 
									class="text-gray-300 hover:text-primary-400 transition-colors text-sm font-medium break-all"
								>
									info@DrJanetDuffy.com
								</a>
							</div>
						</div>
						
						<div class="flex items-start gap-3">
							<MapPin class="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
							<div>
								<p class="text-sm text-gray-400 mb-1">Office Location</p>
								<address class="text-gray-300 text-sm not-italic leading-relaxed">
									1980 Festival Plaza Drive, Suite 300<br />
									Las Vegas, NV 89135
								</address>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<!-- Newsletter Signup Section -->
			<div class="border-t border-gray-800 pt-12 pb-8">
				<div class="max-w-2xl mx-auto text-center">
					<h3 class="text-2xl font-bold text-white mb-2">Stay in the Know</h3>
					<p class="text-gray-400 mb-6">Get the latest Las Vegas real estate insights and market updates delivered to your inbox.</p>
					<form class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" on:submit|preventDefault={handleNewsletterSubmit}>
						<input
							type="email"
							placeholder="Email:"
							bind:value={newsletterEmail}
							required
							class="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent {newsletterError ? 'border-red-500' : ''}"
						/>
						<button
							type="submit"
							class="px-6 py-3 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-lg transition-colors whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
							disabled={newsletterSubmitted}
						>
							{newsletterSubmitted ? 'Subscribed!' : 'Subscribe'}
						</button>
					</form>
					{#if newsletterSubmitted}
						<p class="text-green-400 text-sm mt-3">Thank you for subscribing!</p>
					{/if}
					{#if newsletterError}
						<p class="text-red-400 text-sm mt-3">Please enter a valid email address.</p>
					{/if}
				</div>
			</div>
		</div>
		
		<!-- Bottom Bar -->
		<div class="border-t border-gray-800 pt-8 pb-6">
			<div class="flex flex-col md:flex-row justify-between items-center gap-4">
				<div class="text-sm text-gray-400 text-center md:text-left">
					© {currentYear} Dr. Janet Duffy REALTOR<sup>®</sup>. All rights reserved.
				</div>
				<div class="flex flex-wrap justify-center gap-6 text-sm">
					<a href="/privacy" class="text-gray-400 hover:text-primary-400 transition-colors">Privacy Policy</a>
					<a href="/terms" class="text-gray-400 hover:text-primary-400 transition-colors">Terms of Service</a>
					<a href="/sitemap" class="text-gray-400 hover:text-primary-400 transition-colors">Sitemap</a>
				</div>
			</div>
		</div>
	</div>
</footer>
