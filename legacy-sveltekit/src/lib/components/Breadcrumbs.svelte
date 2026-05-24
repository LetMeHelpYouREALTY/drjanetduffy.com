<script>
	import { page } from '$app/stores';
	import { ChevronRight, Home } from 'lucide-svelte';
	
	const pageLabels = {
		'about': 'About',
		'services': 'Services',
		'neighborhoods': 'Neighborhoods',
		'testimonials': 'Testimonials',
		'market-insights': 'Market Insights',
		'properties': 'Properties',
		'home-value': 'Home Value',
		'rentals': 'Rentals',
		'blog': 'Blog',
		'contact': 'Contact'
	};
	
	$: breadcrumbs = getBreadcrumbs($page.url.pathname);
	
	function getBreadcrumbs(pathname) {
		const paths = pathname.split('/').filter(Boolean);
		const crumbs = [{ href: '/', label: 'Home' }];
		
		let currentPath = '';
		paths.forEach((path, index) => {
			currentPath += `/${path}`;
			const label = pageLabels[path] || path
				.split('-')
				.map(word => word.charAt(0).toUpperCase() + word.slice(1))
				.join(' ');
			crumbs.push({ href: currentPath, label });
		});
		
		return crumbs;
	}
</script>

{#if $page.url.pathname !== '/'}
	<nav class="bg-gray-50 border-b border-gray-200" aria-label="Breadcrumb">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<ol class="flex items-center py-3 space-x-2 text-sm" itemscope itemtype="https://schema.org/BreadcrumbList">
				{#each breadcrumbs as crumb, index}
					<li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
						{#if index > 0}
							<ChevronRight class="w-4 h-4 text-gray-400 inline mr-2" />
						{/if}
						{#if index === breadcrumbs.length - 1}
							<span class="text-gray-600 font-medium" aria-current="page" itemprop="name">{crumb.label}</span>
							<meta itemprop="position" content={index + 1} />
						{:else}
							<a href={crumb.href} class="text-gray-500 hover:text-primary-600 transition-colors" itemprop="item">
								<span itemprop="name">
									{#if index === 0}
										<Home class="w-4 h-4 inline" />
									{:else}
										{crumb.label}
									{/if}
								</span>
							</a>
							<meta itemprop="position" content={index + 1} />
						{/if}
					</li>
				{/each}
			</ol>
		</div>
	</nav>
{/if}

