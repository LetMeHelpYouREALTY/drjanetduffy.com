<script>
import { onMount } from 'svelte';
import { browser } from '$app/environment';
import { Menu } from 'lucide-svelte';

let _realScoutReady = false;
let mobileMenuOpen = false;

onMount(() => {
  if (browser) {
    // Wait for RealScout to load - check for any RealScout components
    if (
      window.customElements &&
      (customElements.get('realscout-office-listings') ||
        customElements.get('realscout-advanced-search') ||
        customElements.get('realscout-home-value') ||
        customElements.get('realscout-simple-search') ||
        customElements.get('realscout-your-listings'))
    ) {
      realScoutReady = true;
    } else {
      // Wait for the components to be defined
      const checkInterval = setInterval(() => {
        if (
          window.customElements &&
          (customElements.get('realscout-office-listings') ||
            customElements.get('realscout-advanced-search') ||
            customElements.get('realscout-home-value') ||
            customElements.get('realscout-simple-search') ||
            customElements.get('realscout-your-listings'))
        ) {
          clearInterval(checkInterval);
          _realScoutReady = true;
        }
      }, 100);

      // Timeout after 5 seconds
      setTimeout(() => {
        clearInterval(checkInterval);
        _realScoutReady = true; // Show fallback
      }, 5000);
    }
  }
});

function _toggleMobileMenu() {
  mobileMenuOpen = !mobileMenuOpen;
}
</script>

<header class="bg-white shadow-lg sticky top-0 z-50">
	<!-- Top Bar with Search -->
	<div class="bg-primary-600 text-white py-3">
		<div class="container mx-auto px-4">
			<div class="max-w-4xl mx-auto">
				{#if realScoutReady}
					<realscout-simple-search 
						agent-encoded-id="QWdlbnQtMjI1MDUw">
					</realscout-simple-search>
				{:else}
					<div class="animate-pulse">
						<div class="h-12 bg-primary-500 rounded"></div>
					</div>
				{/if}
			</div>
		</div>
	</div>
	
	<!-- Main Navigation -->
	<nav class="container mx-auto px-4 py-4">
		<div class="flex items-center justify-between">
			<!-- Logo -->
			<div class="flex items-center space-x-2">
				<div class="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
					<span class="text-white font-bold text-lg">JD</span>
				</div>
				<div>
					<h1 class="text-xl font-bold text-gray-800">Dr. Jan Duffy</h1>
					<p class="text-sm text-gray-600">REALTOR</p>
				</div>
			</div>
			
			<!-- Desktop Navigation -->
			<div class="hidden md:flex items-center space-x-8">
				<a 
					href="/" 
					class="text-gray-700 hover:text-primary-600 font-medium transition-colors {$page.url.pathname === '/' ? 'text-primary-600' : ''}"
				>
					Home
				</a>
				<a 
					href="/properties" 
					class="text-gray-700 hover:text-primary-600 font-medium transition-colors {$page.url.pathname === '/properties' ? 'text-primary-600' : ''}"
				>
					Properties
				</a>
				<a 
					href="/home-value" 
					class="text-gray-700 hover:text-primary-600 font-medium transition-colors {$page.url.pathname === '/home-value' ? 'text-primary-600' : ''}"
				>
					Home Value
				</a>
				<a 
					href="/rentals" 
					class="text-gray-700 hover:text-primary-600 font-medium transition-colors {$page.url.pathname === '/rentals' ? 'text-primary-600' : ''}"
				>
					Rentals
				</a>
				<a 
					href="/about" 
					class="text-gray-700 hover:text-primary-600 font-medium transition-colors {$page.url.pathname === '/about' ? 'text-primary-600' : ''}"
				>
					About
				</a>
				<a 
					href="/contact" 
					class="text-gray-700 hover:text-primary-600 font-medium transition-colors {$page.url.pathname === '/contact' ? 'text-primary-600' : ''}"
				>
					Contact
				</a>
				<a 
					href="tel:+17027667668" 
					class="bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
				>
					(702) 766-7668
				</a>
			</div>
			
			<!-- Mobile Menu Button -->
			<button 
				on:click={toggleMobileMenu}
				class="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
				aria-label="Toggle mobile menu"
			>
				<Menu class="w-5 h-5" />
			</button>
		</div>
		
		<!-- Mobile Navigation -->
		{#if mobileMenuOpen}
			<div class="md:hidden mt-4 pb-4 border-t border-gray-200">
				<div class="flex flex-col space-y-4 pt-4">
					<a 
						href="/" 
						class="text-gray-700 hover:text-primary-600 font-medium transition-colors {$page.url.pathname === '/' ? 'text-primary-600' : ''}"
						on:click={() => mobileMenuOpen = false}
					>
						Home
					</a>
					<a 
						href="/properties" 
						class="text-gray-700 hover:text-primary-600 font-medium transition-colors {$page.url.pathname === '/properties' ? 'text-primary-600' : ''}"
						on:click={() => mobileMenuOpen = false}
					>
						Properties
					</a>
					<a 
						href="/home-value" 
						class="text-gray-700 hover:text-primary-600 font-medium transition-colors {$page.url.pathname === '/home-value' ? 'text-primary-600' : ''}"
						on:click={() => mobileMenuOpen = false}
					>
						Home Value
					</a>
					<a 
						href="/rentals" 
						class="text-gray-700 hover:text-primary-600 font-medium transition-colors {$page.url.pathname === '/rentals' ? 'text-primary-600' : ''}"
						on:click={() => mobileMenuOpen = false}
					>
						Rentals
					</a>
					<a 
						href="/about" 
						class="text-gray-700 hover:text-primary-600 font-medium transition-colors {$page.url.pathname === '/about' ? 'text-primary-600' : ''}"
						on:click={() => mobileMenuOpen = false}
					>
						About
					</a>
					<a 
						href="/contact" 
						class="text-gray-700 hover:text-primary-600 font-medium transition-colors {$page.url.pathname === '/contact' ? 'text-primary-600' : ''}"
						on:click={() => mobileMenuOpen = false}
					>
						Contact
					</a>
					<a 
						href="tel:+17027667668" 
						class="bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-center"
						on:click={() => mobileMenuOpen = false}
					>
						(702) 766-7668
					</a>
				</div>
			</div>
		{/if}
	</nav>
</header>
