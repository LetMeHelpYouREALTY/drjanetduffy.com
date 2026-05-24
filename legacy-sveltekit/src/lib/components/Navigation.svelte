<script>
	import { page } from '$app/stores';
	
	const navItems = [
		{ href: '/get-started', label: 'Get Started' },
		{ href: '/properties', label: 'Properties' },
		{ href: '/home-value', label: 'Home Value' },
		{ href: '/rentals', label: 'Rentals' },
		{ href: '/blog', label: 'Blog' },
		{ href: '/about', label: 'About' },
		{ href: '/contact', label: 'Contact' }
	];
</script>

<header class="sticky top-0 z-50 w-full bg-white/95 backdrop-blur border-b border-gray-100">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between gap-4 py-3">
			<!-- Phone Number (replacing logo) -->
			<a
				href="tel:+17027667668"
				class="flex items-center flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded no-underline"
				aria-label="Call Dr. Janet Duffy"
			>
				<div class="leading-tight">
					<span class="block text-lg sm:text-xl font-bold text-gray-900">(702) 766-7668</span>
					<span class="block text-xs sm:text-sm text-gray-500 tracking-wide">Call Now</span>
				</div>
			</a>

			<!-- Navigation Menu -->
			<nav
				class="flex-1 flex items-center justify-center"
				aria-label="Main navigation"
			>
				<div class="flex items-center justify-center gap-x-3 sm:gap-x-4 md:gap-x-6 lg:gap-x-8 flex-wrap">
					{#each navItems as item}
						<a
							href={item.href}
							class="text-sm sm:text-base font-medium text-gray-700 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-md px-2 sm:px-3 py-2 transition-colors whitespace-nowrap no-underline {$page.url.pathname === item.href ? 'text-primary-600 font-semibold bg-primary-50' : ''}"
							aria-current={$page.url.pathname === item.href ? 'page' : undefined}
						>
							{item.label}
						</a>
					{/each}
				</div>
			</nav>

			<!-- Contact shortcut -->
			<div class="flex items-center gap-3 flex-shrink-0">
				<a href="mailto:info@DrJanetDuffy.com" class="hidden sm:flex text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors no-underline">
					info@DrJanetDuffy.com
				</a>
				<a
					href="tel:+17027667668"
					class="inline-flex items-center gap-2 rounded-full border border-primary-500 px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-primary-600 hover:bg-primary-50 transition-colors no-underline"
				>
					<span>Call</span>
					<span class="hidden sm:inline">(702) 766-7668</span>
				</a>
			</div>
		</div>
	</div>
</header>

<style>
	.scrollbar-hide {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
	.scrollbar-hide::-webkit-scrollbar {
		display: none;
	}
</style>

