<script lang="ts">
	import { Home, Key, Users, DollarSign, CheckCircle, Wrench } from 'lucide-svelte';

	interface TocItem {
		id: string;
		label: string;
	}

	const tocItems: TocItem[] = [
		{ id: 'overview', label: 'Overview' },
		{ id: 'services', label: 'Management Services' },
		{ id: 'markets', label: 'Rental Markets' },
		{ id: 'benefits', label: 'Benefits' },
		{ id: 'cta', label: 'Work With Dr. Duffy' }
	];
</script>

<svelte:head>
	<title>
		Las Vegas Luxury &amp; Relocation Property Management Services | Dr. Janet Duffy REALTOR®
	</title>
	<meta
		name="description"
		content="Las Vegas Luxury &amp; Relocation REALTOR® Dr. Janet Duffy provides professional property management services for single-family, multi-unit, and luxury rentals across the Las Vegas Valley."
	/>
	<meta
		name="keywords"
		content="Las Vegas Luxury &amp; Relocation REALTOR, property management Las Vegas, rental property management, Las Vegas property manager, investor services"
	/>

	<meta
		property="og:title"
		content="Las Vegas Luxury &amp; Relocation Property Management Services | Dr. Janet Duffy REALTOR®"
	/>
	<meta
		property="og:description"
		content="Full-service property management for Las Vegas rental investors, from tenant screening to maintenance and financial reporting."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.drjanetduffy.com/services/property-management" />
	<meta property="og:site_name" content="Las Vegas Luxury &amp; Relocation REALTOR" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="twitter:title"
		content="Las Vegas Luxury &amp; Relocation Property Management Services | Dr. Janet Duffy REALTOR®"
	/>
	<meta
		name="twitter:description"
		content="Hands-on, investor-focused property management to protect your assets and stabilize cash flow in Las Vegas."
	/>

	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "WebPage",
			"name": "Las Vegas Luxury & Relocation Property Management Services",
			"description": "Property management services from Las Vegas Luxury & Relocation REALTOR Dr. Janet Duffy, serving local and out-of-state investors with full-service management.",
			"url": "https://www.drjanetduffy.com/services/property-management",
			"about": {
				"@type": "RealEstateAgent",
				"name": "Dr. Janet Duffy",
				"areaServed": "Las Vegas, Nevada"
			}
		}
	</script>
</svelte:head>

<section class="section bg-gradient-to-b from-white via-gray-50 to-white">
	<div class="container-premium">
		<div class="text-center mb-8 sm:mb-10" id="overview">
			<h1 class="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900">
				Property Management Services in Las Vegas
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Professional property management services for Las Vegas rental properties. Recognized as experts in real estate management, demonstrating expertise and integrity to employers, owners, and investors.
			</p>
		</div>

		<!-- On-page navigation -->
		<nav
			aria-label="On this page"
			class="mb-10 rounded-full border border-gray-200 bg-white px-3 py-2 shadow-sm overflow-x-auto scrollbar-hide"
		>
			<ul class="flex items-center gap-2 text-sm whitespace-nowrap">
				{#each tocItems as item}
					<li>
						<a
							href={`#${item.id}`}
							class="inline-flex items-center rounded-full px-3 py-1.5 text-gray-700 hover:text-primary-700 hover:bg-primary-50 transition-colors no-underline"
						>
							{item.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<div class="max-w-4xl mx-auto">
			<section
				id="services"
				class="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-12 scroll-mt-24"
				aria-labelledby="services-heading"
			>
				<h2
					id="services-heading"
					class="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
				>
					What Comprehensive Property Management Services Do We Provide in Las Vegas?
				</h2>
				
				<p class="text-lg text-gray-700 mb-6 leading-relaxed">
					Property management is essential for successful rental property ownership, especially for out-of-town owners or those with multiple properties. Las Vegas's strong rental markets require professional management to maximize returns, maintain properties, and ensure compliance. Our property management services provide comprehensive management through tenant management, maintenance coordination, financial management, and complete owner services.
				</p>

				<div class="grid md:grid-cols-2 gap-6 mb-8">
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<Key class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Tenant Management</h3>
							<p class="text-gray-600">Comprehensive tenant screening, leasing, and management services for Las Vegas rental properties.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<Wrench class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Maintenance & Repairs</h3>
							<p class="text-gray-600">Professional maintenance and repair coordination to keep properties in excellent condition.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<DollarSign class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Financial Management</h3>
							<p class="text-gray-600">Complete financial management including rent collection, accounting, and reporting.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<Users class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Owner Services</h3>
							<p class="text-gray-600">Comprehensive owner services including regular reporting and communication.</p>
						</div>
					</div>
				</div>
			</section>

			<section
				id="services-detail"
				class="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-12 scroll-mt-24"
				aria-labelledby="services-detail-heading"
			>
				<h2
					id="services-detail-heading"
					class="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
				>
					What Property Management Services Are Included?
				</h2>
				<p class="text-lg text-gray-700 mb-8 leading-relaxed">
					Our property management services include tenant screening and leasing, rent collection and financial management, maintenance and repairs coordination, property inspections, and legal compliance. These comprehensive services ensure your Las Vegas rental properties are well-maintained, legally compliant, and generating maximum returns.
				</p>
				
				<div class="space-y-8">
					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">Tenant Screening & Leasing</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Quality tenants are essential for successful rental property ownership. We provide comprehensive tenant screening, including credit checks, employment verification, and rental history. We'll help you find qualified tenants who pay rent on time and take care of your property.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Our tenant screening process includes credit checks, employment verification, rental history, and background checks. We'll evaluate applicants thoroughly and help you select tenants who are likely to be reliable and responsible. We'll also handle lease preparation, execution, and tenant move-in processes.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">Rent Collection & Financial Management</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							We handle all aspects of rent collection and financial management, including rent collection, late fee management, and accounting. We'll provide regular financial reports and ensure you receive rent payments promptly. We'll also handle security deposits and coordinate with accounting professionals as needed.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Our financial management services include rent collection, late fee management, expense tracking, and financial reporting. We'll provide regular reports showing income, expenses, and property performance. We'll also coordinate with accountants and ensure all financial records are maintained properly.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">Maintenance & Repairs</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Property maintenance is crucial for preserving property values and keeping tenants satisfied. We coordinate all maintenance and repairs, working with trusted contractors and vendors. We'll handle routine maintenance, emergency repairs, and property improvements as needed.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Our maintenance services include routine maintenance scheduling, emergency repair coordination, and vendor management. We'll work with trusted contractors who provide quality work at fair prices. We'll also conduct regular property inspections to identify maintenance needs before they become major problems.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">Property Inspections</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Regular property inspections help identify maintenance needs, ensure tenant compliance, and protect property values. We conduct regular inspections, documenting property condition and identifying any issues. We'll provide inspection reports and coordinate any necessary repairs or tenant communications.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Our inspection services include move-in inspections, regular property inspections, and move-out inspections. We'll document property condition, identify maintenance needs, and ensure tenants are complying with lease terms. Regular inspections help protect your investment and maintain property values.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">Legal Compliance</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Rental properties are subject to various laws and regulations, and compliance is essential. We help ensure properties comply with all applicable laws, including fair housing laws, building codes, and local regulations. We'll also handle legal issues as they arise, coordinating with attorneys when necessary.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Our compliance services include ensuring properties meet all legal requirements, handling tenant disputes, and coordinating with legal professionals when needed. We'll help you understand legal requirements and ensure your properties remain in compliance. This protects you from legal issues and ensures smooth operations.
						</p>
					</div>
				</div>
			</section>

			<section
				id="markets"
				class="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-12 scroll-mt-24"
				aria-labelledby="markets-heading"
			>
				<h2
					id="markets-heading"
					class="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
				>
					Which Las Vegas Rental Markets Do We Manage?
				</h2>
				<p class="text-lg text-gray-700 mb-8 leading-relaxed">
					We manage rental properties across all Las Vegas rental markets including single-family rental markets in North Las Vegas and Henderson, multi-unit properties from duplexes to apartment buildings, and luxury rental properties in communities like The Ridges and Red Rock Country Club. Each market requires specialized management expertise.
				</p>
				
				<div class="space-y-6">
					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Single-Family Rental Markets</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Las Vegas's single-family rental markets are strong throughout the valley, with good demand and rental rates. Areas like North Las Vegas, Henderson, and various Las Vegas neighborhoods offer excellent rental opportunities. We help property owners understand rental markets and maximize rental income.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Single-family rental properties in Las Vegas typically offer good cash flow and appreciation potential. Rental rates vary by location, property condition, and features. We'll help you understand rental markets, set competitive rents, and maximize rental income while maintaining property values.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Multi-Unit Properties</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Multi-unit properties can provide excellent rental income and diversification. Las Vegas offers various multi-unit properties, from duplexes to apartment buildings. We help property owners manage multi-unit properties effectively, maximizing income and maintaining properties.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Multi-unit properties require specialized management, including tenant coordination, maintenance scheduling, and financial management. We'll help you manage multi-unit properties effectively, ensuring all units are occupied, maintained, and generating income. Our goal is to maximize returns while minimizing management burden.
						</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Luxury Rental Properties</h3>
						<p class="text-gray-700 mb-4 leading-relaxed">
							Luxury rental properties in communities like The Ridges, Red Rock Country Club, and Anthem offer high rental rates and quality tenants. Luxury rentals require specialized management, including high-end maintenance and tenant relations. We help property owners manage luxury rentals effectively.
						</p>
						<p class="text-gray-700 leading-relaxed">
							Luxury rental properties require specialized management to maintain property condition and attract quality tenants. We'll help you manage luxury rentals, ensuring properties are maintained to luxury standards and attracting tenants who appreciate and care for luxury properties.
						</p>
					</div>
				</div>
			</section>

			<section
				id="benefits"
				class="bg-gradient-to-br from-primary-50 to-white rounded-2xl shadow-lg p-8 md:p-10 mb-12 scroll-mt-24"
				aria-labelledby="benefits-heading"
			>
				<h2
					id="benefits-heading"
					class="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
				>
					What Are the Benefits of Professional Property Management?
				</h2>
				<p class="text-lg text-gray-700 mb-8 leading-relaxed">
					Professional property management provides maximized rental income through effective marketing and tenant screening, property protection through regular maintenance and inspections, time savings by handling all day-to-day management tasks, and legal protection ensuring compliance with all applicable laws and regulations.
				</p>
				
				<div class="grid md:grid-cols-2 gap-6">
					<div class="flex items-start gap-4">
						<CheckCircle class="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Maximized Rental Income</h3>
							<p class="text-gray-700">Professional management helps maximize rental income through effective marketing, tenant screening, and rent collection.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<CheckCircle class="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Property Protection</h3>
							<p class="text-gray-700">Regular maintenance and inspections help protect property values and prevent costly repairs.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<CheckCircle class="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Time Savings</h3>
							<p class="text-gray-700">Professional management saves property owners time by handling all day-to-day management tasks.</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<CheckCircle class="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Legal Protection</h3>
							<p class="text-gray-700">Professional management helps ensure legal compliance and protects owners from legal issues.</p>
						</div>
					</div>
				</div>
			</section>

			<section
				id="cta"
				class="bg-primary-600 rounded-2xl p-8 md:p-12 text-center text-white scroll-mt-24"
				aria-labelledby="cta-heading"
			>
				<h2
					id="cta-heading"
					class="text-3xl md:text-4xl font-bold mb-4"
				>
					Property Management Services in Las Vegas
				</h2>
				<p class="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
					Let us help you manage your Las Vegas rental properties. Contact us today to schedule a consultation.
				</p>
				<div class="flex flex-col sm:flex-row gap-4 justify-center">
					<a href="/contact" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">
						Schedule Consultation
					</a>
					<a
						href="/properties"
						class="btn-primary bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600"
					>
						View Rental Properties
					</a>
				</div>
			</section>
		</div>
	</div>
</section>

