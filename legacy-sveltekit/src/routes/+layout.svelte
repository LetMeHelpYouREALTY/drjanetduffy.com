<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navigation from '$lib/components/Navigation.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import GlobalCTA from '$lib/components/GlobalCTA.svelte';
	import RealScoutListings from '$lib/components/RealScoutListings.svelte';
	import { Facebook, Linkedin, Twitter } from 'lucide-svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	
	<!-- Google Search Console Verification -->
	<!-- TODO: Replace YOUR_VERIFICATION_CODE with the code from Google Search Console -->
	<!-- Get your code from: https://search.google.com/search-console -->
	<!-- Once verified, uncomment the line below and add your verification code -->
	<!-- <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" /> -->
	
	<!-- Google tag (gtag.js) - Google Analytics - Deferred for performance -->
	<script>
		// Defer Google Analytics loading until after page is interactive
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		// Load GA after page is fully interactive
		function loadGA() {
			if (document.readyState === 'complete') {
				initGA();
			} else {
				window.addEventListener('load', initGA, { once: true });
			}
		}
		function initGA() {
			// Use requestIdleCallback if available, otherwise setTimeout
			if ('requestIdleCallback' in window) {
				requestIdleCallback(() => {
					loadGAScript();
				}, { timeout: 2000 });
			} else {
				setTimeout(loadGAScript, 1000);
			}
		}
		function loadGAScript() {
			const script = document.createElement('script');
			script.async = true;
			script.src = 'https://www.googletagmanager.com/gtag/js?id=G-CPD9RR8GTX';
			document.head.appendChild(script);
			gtag('js', new Date());
			gtag('config', 'G-CPD9RR8GTX', {
				'send_page_view': false
			});
			// Send page view after idle
			if ('requestIdleCallback' in window) {
				requestIdleCallback(() => {
					gtag('event', 'page_view');
				});
			} else {
				setTimeout(() => gtag('event', 'page_view'), 500);
			}
		}
		loadGA();
	</script>
	
	<!-- RealScout Widgets Script - Deferred until user interaction -->
	<script>
		// Defer RealScout loading until after user interaction or idle time
		let realScoutLoaded = false;
		function loadRealScout() {
			if (realScoutLoaded) return;
			realScoutLoaded = true;
			const script = document.createElement('script');
			script.async = true;
			script.src = 'https://widgets.realscout.com/js/realscout-widgets.js';
			document.head.appendChild(script);
		}
		// Load on user interaction (scroll, click, touch)
		const events = ['scroll', 'click', 'touchstart', 'mousemove'];
		const loadOnInteraction = () => {
			loadRealScout();
			events.forEach(e => document.removeEventListener(e, loadOnInteraction));
		};
		events.forEach(e => document.addEventListener(e, loadOnInteraction, { once: true, passive: true }));
		// Fallback: load after 3 seconds if no interaction
		setTimeout(() => {
			if (!realScoutLoaded) loadRealScout();
		}, 3000);
	</script>
</svelte:head>

<Navigation />
<Breadcrumbs />

<main>
	{@render children?.()}
</main>

<GlobalCTA />

<!-- RealScout Listings - Below the Fold with Different Price Points -->
<section class="bg-gray-50 py-16 md:py-24">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-7xl mx-auto">
			<!-- Price Range: $500K - $600K -->
			<div class="mb-16">
				<RealScoutListings
					priceMin="500000"
					priceMax="600000"
					title="Homes $500K - $600K"
					subtitle="Discover beautiful single-family homes in this price range"
				/>
			</div>
			
			<!-- Price Range: $600K - $800K -->
			<div class="mb-16">
				<RealScoutListings
					priceMin="600000"
					priceMax="800000"
					title="Homes $600K - $800K"
					subtitle="Explore premium properties in this mid-range price point"
				/>
			</div>
			
			<!-- Price Range: $800K - $1M -->
			<div class="mb-16">
				<RealScoutListings
					priceMin="800000"
					priceMax="1000000"
					title="Homes $800K - $1M"
					subtitle="Luxury homes and estates in this upper price range"
				/>
			</div>
			
			<!-- Price Range: $1M+ -->
			<div>
				<RealScoutListings
					priceMin="1000000"
					priceMax=""
					title="Luxury Homes $1M+"
					subtitle="Premium estates and luxury properties"
				/>
			</div>
		</div>
	</div>
</section>

<footer class="bg-gray-900 text-white py-16 mt-16">
	<div class="container mx-auto px-4">
		<div class="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
			<!-- About Section -->
			<div class="lg:col-span-2">
				<h3 class="text-xl font-display font-bold mb-4 text-white">Dr. Janet Duffy</h3>
				<p class="text-gray-400 mb-4">Licensed REALTOR®</p>
				<p class="text-gray-400 mb-6 text-sm">Your trusted Las Vegas real estate expert with 15+ years of experience serving buyers, sellers, and investors.</p>
				<div class="flex gap-4">
					<a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page" class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
						<Facebook class="w-5 h-5" aria-hidden="true" />
					</a>
					<a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our LinkedIn page" class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
						<Linkedin class="w-5 h-5" aria-hidden="true" />
					</a>
					<a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Twitter page" class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
						<Twitter class="w-5 h-5" aria-hidden="true" />
					</a>
				</div>
			</div>
			
			<!-- Main Pages -->
			<div>
				<h3 class="text-lg font-display font-bold mb-4 text-white">Main</h3>
				<ul class="space-y-2 text-sm">
					<li><a href="/" class="text-gray-400 hover:text-white transition-colors">Home</a></li>
					<li><a href="/properties" class="text-gray-400 hover:text-white transition-colors">Properties</a></li>
					<li><a href="/about" class="text-gray-400 hover:text-white transition-colors">About</a></li>
					<li><a href="/services" class="text-gray-400 hover:text-white transition-colors">Services</a></li>
					<li><a href="/neighborhoods" class="text-gray-400 hover:text-white transition-colors">Neighborhoods</a></li>
					<li><a href="/testimonials" class="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
					<li><a href="/market-insights" class="text-gray-400 hover:text-white transition-colors">Market Insights</a></li>
					<li><a href="/contact" class="text-gray-400 hover:text-white transition-colors">Contact</a></li>
					<li><a href="/blog" class="text-gray-400 hover:text-white transition-colors">Blog</a></li>
				</ul>
			</div>
			
					<!-- Properties -->
					<div>
						<h3 class="text-lg font-display font-bold mb-4 text-white">Properties</h3>
						<ul class="space-y-2 text-sm">
							<li><a href="/rentals" class="text-gray-400 hover:text-white transition-colors">Rentals</a></li>
							<li><a href="/listings-embedded" class="text-gray-400 hover:text-white transition-colors">Grid View</a></li>
							<li><a href="/listings-list" class="text-gray-400 hover:text-white transition-colors">List View</a></li>
							<li><a href="/past-sales" class="text-gray-400 hover:text-white transition-colors">Past Sales</a></li>
							<li><a href="/properties?type=single-family" class="text-gray-400 hover:text-white transition-colors">Single Family</a></li>
							<li><a href="/properties?type=condos" class="text-gray-400 hover:text-white transition-colors">Condos</a></li>
							<li><a href="/properties?type=townhomes" class="text-gray-400 hover:text-white transition-colors">Townhomes</a></li>
							<li><a href="/properties?type=new-construction" class="text-gray-400 hover:text-white transition-colors">New Construction</a></li>
							<li><a href="/properties?type=luxury" class="text-gray-400 hover:text-white transition-colors">Luxury Estates</a></li>
							<li><a href="/properties?type=gated" class="text-gray-400 hover:text-white transition-colors">Gated Communities</a></li>
							<li><a href="/properties?type=golf" class="text-gray-400 hover:text-white transition-colors">Golf Communities</a></li>
							<li><a href="/properties?type=55-plus" class="text-gray-400 hover:text-white transition-colors">55+ Communities</a></li>
							<li><a href="/properties?type=foreclosures" class="text-gray-400 hover:text-white transition-colors">Foreclosures</a></li>
							<li><a href="/properties?type=short-sales" class="text-gray-400 hover:text-white transition-colors">Short Sales</a></li>
						</ul>
					</div>
			
			<!-- Communities -->
			<div>
				<h3 class="text-lg font-display font-bold mb-4 text-white">Communities</h3>
				<ul class="space-y-2 text-sm">
					<li><a href="/neighborhoods" class="text-gray-400 hover:text-white transition-colors">Popular Neighborhoods</a></li>
					<li><a href="/properties?neighborhood=summerlin" class="text-gray-400 hover:text-white transition-colors">Summerlin</a></li>
					<li><a href="/properties?neighborhood=henderson" class="text-gray-400 hover:text-white transition-colors">Henderson</a></li>
					<li><a href="/properties?neighborhood=green-valley" class="text-gray-400 hover:text-white transition-colors">Green Valley</a></li>
					<li><a href="/properties?neighborhood=north-las-vegas" class="text-gray-400 hover:text-white transition-colors">North Las Vegas</a></li>
					<li><a href="/properties?neighborhood=boulder-city" class="text-gray-400 hover:text-white transition-colors">Boulder City</a></li>
					<li><a href="/properties?neighborhood=seven-hills" class="text-gray-400 hover:text-white transition-colors">Seven Hills</a></li>
					<li><a href="/properties?neighborhood=southern-highlands" class="text-gray-400 hover:text-white transition-colors">Southern Highlands</a></li>
					<li><a href="/properties?neighborhood=mountains-edge" class="text-gray-400 hover:text-white transition-colors">Mountains Edge</a></li>
					<li><a href="/properties?neighborhood=anthem" class="text-gray-400 hover:text-white transition-colors">Anthem</a></li>
					<li><a href="/sitemap" class="text-gray-400 hover:text-white transition-colors text-primary-400">View All →</a></li>
				</ul>
			</div>
			
			<!-- Services & Contact -->
			<div>
						<h3 class="text-lg font-display font-bold mb-4 text-white">Services</h3>
						<ul class="space-y-2 text-sm mb-6">
							<li><a href="/services" class="text-gray-400 hover:text-white transition-colors">All Services</a></li>
							<li><a href="/home-value" class="text-gray-400 hover:text-white transition-colors">Home Value</a></li>
							<li><a href="/buying-guide" class="text-gray-400 hover:text-white transition-colors">Buying Guide</a></li>
							<li><a href="/selling-guide" class="text-gray-400 hover:text-white transition-colors">Selling Guide</a></li>
							<li><a href="/first-time-buyers" class="text-gray-400 hover:text-white transition-colors">First-Time Buyers</a></li>
							<li><a href="/investment-guide" class="text-gray-400 hover:text-white transition-colors">Investment Guide</a></li>
							<li><a href="/relocation" class="text-gray-400 hover:text-white transition-colors">Relocation</a></li>
							<li><a href="/resources" class="text-gray-400 hover:text-white transition-colors">Resources</a></li>
							<li><a href="/faq" class="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
							<li><a href="/mortgage-calculator" class="text-gray-400 hover:text-white transition-colors">Mortgage Calculator</a></li>
							<li><a href="/testimonials" class="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
							<li><a href="/market-insights" class="text-gray-400 hover:text-white transition-colors">Market Insights</a></li>
						</ul>
				
				<h3 class="text-lg font-display font-bold mb-4 text-white mt-6">Contact</h3>
				<div class="space-y-3 text-sm text-gray-400">
					<div>
						<p class="font-semibold text-white mb-1">Phone</p>
						<a href="tel:+17027667668" class="hover:text-white transition-colors">(702) 766-7668</a>
					</div>
					<div>
						<p class="font-semibold text-white mb-1">Email</p>
						<a href="mailto:info@DrJanetDuffy.com" class="hover:text-white transition-colors">info@DrJanetDuffy.com</a>
					</div>
					<div>
						<p class="font-semibold text-white mb-1">Office Location</p>
						<p class="text-sm">1980 Festival Plaza Drive, Suite 300</p>
						<p class="text-sm">Las Vegas, NV 89135</p>
					</div>
				</div>
			</div>
		</div>
		
		<div class="border-t border-gray-800 pt-8">
			<div class="flex flex-col md:flex-row justify-between items-center gap-4">
				<p class="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Dr. Janet Duffy, REALTOR®. All rights reserved.</p>
				<div class="flex flex-wrap gap-4 text-sm justify-center">
					<a href="/privacy" class="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
					<a href="/terms" class="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
					<a href="/sitemap" class="text-gray-400 hover:text-white transition-colors">Sitemap</a>
				</div>
			</div>
		</div>
	</div>
</footer>
