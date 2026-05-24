<script>
import { Star, Award, TrendingUp, Users, CheckCircle, MapPin } from 'lucide-svelte';
import { PhotoGallery } from '$lib';
import { drDuffyHeadshots } from '$lib/data/photo-galleries';

// This could be expanded to load dynamic content from a CMS
const achievements = [
  {
    title: '150+ Properties Sold',
    description: 'Successfully closed transactions across Las Vegas',
  },
  {
    title: '$50M+ Sales Volume',
    description: 'Total value of properties sold',
  },
  {
    title: '15 Years Experience',
    description: 'Dedicated real estate expertise',
  },
  {
    title: '98% Client Satisfaction',
    description: 'Based on client feedback and reviews',
  },
];

const services = [
  'Residential Sales & Purchases',
  'Luxury Home Specialization',
  'First-Time Buyer Guidance',
  'Investment Property Consulting',
  'Market Analysis & Pricing',
  'Negotiation & Transaction Management',
  'Rental Property Management',
  'Relocation Services',
];

const certifications = [
  'Licensed REALTOR in Nevada',
  'Certified Residential Specialist (CRS)',
  "Accredited Buyer's Representative (ABR)",
  'Graduate, REALTOR Institute (GRI)',
  'Luxury Home Marketing Specialist',
  'Certified Negotiation Expert (CNE)',
];
</script>

<svelte:head>
	<title>About Las Vegas Luxury &amp; Relocation REALTOR | Dr. Jan Duffy</title>
	<meta name="description" content="Learn about Dr. Jan Duffy, Las Vegas Luxury & Relocation REALTOR with 15+ years of experience, 150+ properties sold, and $50M+ in sales volume." />
	<meta name="keywords" content="Dr. Jan Duffy, Las Vegas REALTOR, real estate agent, about, experience, credentials" />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.drjanetduffy.com/about" />
	<meta property="og:title" content="About Las Vegas Luxury &amp; Relocation REALTOR | Dr. Jan Duffy" />
	<meta property="og:description" content="Meet Dr. Jan Duffy, Las Vegas Luxury & Relocation REALTOR with 15+ years of experience and proven results." />
	
	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://www.drjanetduffy.com/about" />
	
	<!-- Canonical URL -->
	<link rel="canonical" href="https://www.drjanetduffy.com/about" />
	
	<!-- Structured Data -->
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "ProfilePage",
		"mainEntity": {
			"@type": "RealEstateAgent",
			"name": "Dr. Jan Duffy",
			"description": "Licensed REALTOR® with 15+ years of experience in Las Vegas real estate",
			"url": "https://www.drjanetduffy.com",
			"telephone": "(702) 766-7668",
			"email": "info@DrJanetDuffy.com",
			"address": {
				"@type": "PostalAddress",
				"streetAddress": "1980 Festival Plaza Drive, Suite 300",
				"addressLocality": "Las Vegas",
				"addressRegion": "NV",
				"postalCode": "89135",
				"addressCountry": "US"
			},
			"hasCredential": [
				"Licensed REALTOR in Nevada",
				"Certified Residential Specialist (CRS)",
				"Accredited Buyer's Representative (ABR)",
				"Graduate, REALTOR Institute (GRI)",
				"Luxury Home Marketing Specialist",
				"Certified Negotiation Expert (CNE)"
			]
		}
	}
	</script>
	<meta property="twitter:title" content="About Las Vegas Luxury &amp; Relocation REALTOR | Dr. Jan Duffy" />
	<meta property="twitter:description" content="Learn about Dr. Jan Duffy, Las Vegas Luxury & Relocation REALTOR with 15+ years of experience and proven results." />
</svelte:head>

<section class="section relative" style="background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);">
	<div class="container-premium">
		<!-- Hero Section -->
		<div class="mb-20">
			<div class="grid md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] gap-10 items-center">
				<div class="text-center md:text-left">
					<h1 class="font-display text-5xl md:text-6xl font-bold mb-6 text-gray-900" style="letter-spacing: -0.03em;">Meet Your Las Vegas Luxury &amp; Relocation REALTOR<sup>®</sup></h1>
					<p class="text-2xl text-primary-600 font-semibold mb-6">Serving Luxury Moves, Relocation Clients &amp; Local Sellers</p>
					<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mb-6 mx-auto md:mx-0"></div>
					<p class="text-xl text-gray-600 max-w-3xl mx-auto md:mx-0 leading-relaxed">
						Your trusted Las Vegas real estate expert with over 15 years of experience helping clients buy, sell, and invest in properties throughout the greater Las Vegas area.
					</p>
					<div class="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
						<a href="/contact" class="inline-flex items-center justify-center rounded-xl bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-primary-700 transition-colors">
							Schedule a call with Dr. Duffy
						</a>
					</div>
				</div>
				<div class="max-w-sm mx-auto md:mx-0">
					<PhotoGallery
						title={undefined}
						subtitle={undefined}
						photos={drDuffyHeadshots}
					/>
				</div>
			</div>
		</div>
	
		<!-- Why Choose Dr. Janet Duffy -->
		<div class="mb-20">
			<div class="text-center mb-16">
				<h2 class="font-display text-4xl md:text-5xl font-bold mb-6 text-gray-900" style="letter-spacing: -0.02em;">Why Should You Choose Dr. Janet Duffy as Your Las Vegas REALTOR?</h2>
				<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-4"></div>
				<p class="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
					Choose Dr. Janet Duffy for 15+ years of Las Vegas real estate experience, expert guidance with personalized service tailored to your unique needs, and deep local expertise in Las Vegas neighborhoods and communities that ensures you make informed decisions and achieve your real estate goals.
				</p>
			</div>

			<div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
				<div class="text-center">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
						<Award class="w-5 h-5 text-primary-600" />
					</div>
					<h3 class="text-xl font-bold text-gray-900 mb-2">15+ Years Experience</h3>
					<p class="text-gray-600">Extensive knowledge of the Las Vegas real estate market</p>
				</div>

				<div class="text-center">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
						<TrendingUp class="w-5 h-5 text-primary-600" />
					</div>
					<h3 class="text-xl font-bold text-gray-900 mb-2">Expert Guidance</h3>
					<p class="text-gray-600">Personalized service tailored to your unique needs</p>
				</div>

				<div class="text-center">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
						<MapPin class="w-5 h-5 text-primary-600" />
					</div>
					<h3 class="text-xl font-bold text-gray-900 mb-2">Local Expertise</h3>
					<p class="text-gray-600">Deep understanding of Las Vegas neighborhoods and communities</p>
				</div>
			</div>
		</div>

		<!-- About Story -->
		<div class="max-w-6xl mx-auto mb-20">
			<div class="mb-8 text-center">
				<h2 class="font-display text-4xl md:text-5xl font-bold mb-6 text-gray-900" style="letter-spacing: -0.02em;">What Is Dr. Janet Duffy's Real Estate Story?</h2>
				<p class="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
					Dr. Janet Duffy's real estate story spans over 15 years of experience in the Las Vegas market, building a reputation for exceptional results, personalized service, expert guidance, market insights, and unwavering support that helps buyers, sellers, and investors achieve their real estate goals throughout the greater Las Vegas area.
				</p>
			</div>
			<div class="grid md:grid-cols-2 gap-16 items-center">
				<div>
					<div class="space-y-6 text-gray-700 leading-relaxed text-lg">
						<p>
							With over 15 years of experience in the Las Vegas real estate market, I've built a reputation for delivering exceptional results and personalized service. My journey in real estate began with a passion for helping people find their perfect home and has evolved into a comprehensive practice serving buyers, sellers, and investors.
						</p>
						<p>
							I understand that buying or selling a home is one of life's most significant decisions. That's why I'm committed to providing expert guidance, market insights, and unwavering support throughout every step of the process. My clients trust me not just for my expertise, but for my integrity, attention to detail, and genuine care for their success.
						</p>
						<p>
							Based in Las Vegas, I have an intimate knowledge of local neighborhoods, market trends, and the unique characteristics that make each area special. Whether you're a first-time buyer, seasoned investor, or looking to sell your current home, I'm here to help you achieve your real estate goals.
						</p>
					</div>
				</div>
				<div class="bg-gradient-to-br from-white to-primary-50/50 rounded-2xl p-10 shadow-xl border border-gray-100">
					<h3 class="font-display text-2xl font-bold mb-6 text-gray-900">Quick Facts</h3>
					<ul class="space-y-4">
					<li class="flex items-center gap-3 text-gray-700 text-lg">
						<CheckCircle class="w-5 h-5 text-primary-600 flex-shrink-0" />
						Las Vegas native
					</li>
					<li class="flex items-center gap-3 text-gray-700 text-lg">
						<CheckCircle class="w-5 h-5 text-primary-600 flex-shrink-0" />
						15+ years in real estate
					</li>
					<li class="flex items-center gap-3 text-gray-700 text-lg">
						<CheckCircle class="w-5 h-5 text-primary-600 flex-shrink-0" />
						Luxury home specialist
					</li>
					<li class="flex items-center gap-3 text-gray-700 text-lg">
						<CheckCircle class="w-5 h-5 text-primary-600 flex-shrink-0" />
						Investment property expert
					</li>
					<li class="flex items-center gap-3 text-gray-700 text-lg">
						<CheckCircle class="w-5 h-5 text-primary-600 flex-shrink-0" />
						Available 7 days a week
					</li>
					</ul>
				</div>
			</div>
		</div>
	
		<!-- Achievements -->
		<div class="mb-20">
			<div class="text-center mb-16">
				<h2 class="font-display text-4xl md:text-5xl font-bold mb-6 text-gray-900" style="letter-spacing: -0.02em;">What Are Dr. Janet Duffy's Real Estate Achievements?</h2>
				<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-4"></div>
				<p class="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
					Dr. Janet Duffy's real estate achievements include 150+ properties sold across Las Vegas, $50M+ in total sales volume, 15 years of dedicated real estate expertise, and 98% client satisfaction based on client feedback and reviews that demonstrate proven results and exceptional service.
				</p>
			</div>
                <div class="grid-premium md:grid-cols-4 gap-8">
                    <div class="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 hover:scale-105 group">
					<div class="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
						<TrendingUp class="w-5 h-5 text-white" />
					</div>
					<h3 class="font-display text-2xl font-bold mb-3 text-gray-900">{achievements[0].title}</h3>
					<p class="text-gray-600 text-lg">{achievements[0].description}</p>
				</div>
                    <div class="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 hover:scale-105 group">
                        <div class="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
						<Award class="w-5 h-5 text-white" />
					</div>
					<h3 class="font-display text-2xl font-bold mb-3 text-gray-900">{achievements[1].title}</h3>
					<p class="text-gray-600 text-lg">{achievements[1].description}</p>
				</div>
                    <div class="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 hover:scale-105 group">
                        <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
						<Users class="w-5 h-5 text-white" />
					</div>
					<h3 class="font-display text-2xl font-bold mb-3 text-gray-900">{achievements[2].title}</h3>
					<p class="text-gray-600 text-lg">{achievements[2].description}</p>
				</div>
                    <div class="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 hover:scale-105 group">
                        <div class="w-16 h-16 bg-gradient-to-br from-primary-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
						<Star class="w-5 h-5 text-white" />
					</div>
					<h3 class="font-display text-2xl font-bold mb-3 text-gray-900">{achievements[3].title}</h3>
					<p class="text-gray-600 text-lg">{achievements[3].description}</p>
				</div>
			</div>
		</div>
	
		<!-- Services -->
		<div class="mb-20">
			<div class="text-center mb-16">
				<h2 class="font-display text-4xl md:text-5xl font-bold mb-6 text-gray-900" style="letter-spacing: -0.02em;">What Real Estate Services Does Dr. Janet Duffy Provide?</h2>
				<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-4"></div>
				<p class="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
					Dr. Janet Duffy provides comprehensive real estate services including residential sales and purchases, luxury home specialization, first-time buyer guidance, investment property consulting, market analysis and pricing, negotiation and transaction management, rental property management, and relocation services throughout Las Vegas.
				</p>
			</div>
			<div class="max-w-5xl mx-auto">
				<div class="grid md:grid-cols-2 gap-6">
					{#each services as service}
						<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
							<span class="text-gray-700 text-lg font-medium">{service}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
		
		<!-- Buying Guide -->
		<div class="mb-20" id="buying">
			<div class="text-center mb-16">
				<h2 class="font-display text-4xl md:text-5xl font-bold mb-6 text-gray-900" style="letter-spacing: -0.02em;">How Does Dr. Janet Duffy Guide Las Vegas Home Buyers?</h2>
				<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-4"></div>
				<p class="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
					Dr. Janet Duffy guides Las Vegas home buyers through comprehensive market analysis, property search tailored to your needs, expert negotiation, seamless transaction management, financing options understanding, thorough property inspections, and best terms negotiation to find the perfect property at the right price with a smooth, stress-free experience.
				</p>
			</div>
			<div class="max-w-4xl mx-auto">
				<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-xl border border-gray-100">
					<div class="space-y-6 text-gray-700 leading-relaxed text-lg">
						<p>
							Buying a home is an exciting journey, and I'm here to guide you through every step. From initial consultation to closing, I'll help you navigate the Las Vegas real estate market with confidence.
						</p>
						<p>
							My buying process includes comprehensive market analysis, property search tailored to your needs, expert negotiation, and seamless transaction management. Whether you're a first-time buyer or experienced investor, I'll ensure you make informed decisions.
						</p>
						<p>
							I'll help you understand financing options, conduct thorough property inspections, and negotiate the best terms. My goal is to find you the perfect property at the right price, with a smooth and stress-free experience.
						</p>
					</div>
				</div>
			</div>
		</div>
		
		<!-- Selling Guide -->
		<div class="mb-20" id="selling">
			<div class="text-center mb-16">
				<h2 class="font-display text-4xl md:text-5xl font-bold mb-6 text-gray-900" style="letter-spacing: -0.02em;">How Does Dr. Janet Duffy Help Las Vegas Home Sellers?</h2>
				<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-4"></div>
				<p class="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
					Dr. Janet Duffy helps Las Vegas home sellers maximize property value through professional home staging recommendations, comprehensive market analysis for optimal pricing, professional photography and marketing, expert negotiation for best terms, home preparation guidance, effective marketing to qualified buyers, and complete transaction management that demonstrates proven success in helping sellers achieve their goals.
				</p>
			</div>
			<div class="max-w-4xl mx-auto">
				<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-xl border border-gray-100">
					<div class="space-y-6 text-gray-700 leading-relaxed text-lg">
						<p>
							Selling your home requires strategic planning and expert execution. I'll help you maximize your property's value and achieve a successful sale in the Las Vegas market.
						</p>
						<p>
							My selling services include professional home staging recommendations, comprehensive market analysis to determine optimal pricing, professional photography and marketing, and expert negotiation to get you the best possible terms.
						</p>
						<p>
							I'll guide you through preparing your home for sale, marketing it effectively to reach qualified buyers, and managing all aspects of the transaction. My track record of successful sales demonstrates my ability to help sellers achieve their goals.
						</p>
					</div>
				</div>
			</div>
		</div>
		
		<!-- Mortgage Calculator Info -->
		<div class="mb-20" id="mortgage">
			<div class="text-center mb-16">
				<h2 class="font-display text-4xl md:text-5xl font-bold mb-6 text-gray-900" style="letter-spacing: -0.02em;">How Does Dr. Janet Duffy Help With Mortgage and Financing?</h2>
				<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-4"></div>
				<p class="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
					Dr. Janet Duffy helps with mortgage and financing by working with trusted mortgage professionals to find the best loan programs and rates, helping you understand different mortgage types, calculating monthly payments, determining affordability, and connecting you with reputable lenders offering competitive rates and excellent service for your Las Vegas home purchase.
				</p>
			</div>
			<div class="max-w-4xl mx-auto">
				<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-xl border border-gray-100">
					<div class="space-y-6 text-gray-700 leading-relaxed text-lg">
						<p>
							Understanding your financing options is crucial when buying a home. I work with trusted mortgage professionals to help you find the best loan programs and rates available.
						</p>
						<p>
							I can help you understand different mortgage types, calculate your monthly payments, determine how much home you can afford, and connect you with reputable lenders who offer competitive rates and excellent service.
						</p>
						<p>
							For a quick estimate, use our <a href="/home-value" class="text-primary-600 font-semibold hover:text-primary-700 underline">Home Value Calculator</a> to get started. For personalized mortgage advice and pre-approval assistance, contact me directly.
						</p>
					</div>
				</div>
			</div>
		</div>
	
		<!-- Certifications -->
		<div class="mb-20">
			<div class="text-center mb-16">
				<h2 class="font-display text-4xl md:text-5xl font-bold mb-6 text-gray-900" style="letter-spacing: -0.02em;">What Professional Certifications Does Dr. Janet Duffy Hold?</h2>
				<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-4"></div>
				<p class="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
					Dr. Janet Duffy holds professional certifications including Licensed REALTOR in Nevada, Certified Residential Specialist (CRS), Accredited Buyer's Representative (ABR), Graduate REALTOR Institute (GRI), Luxury Home Marketing Specialist, and Certified Negotiation Expert (CNE) that demonstrate advanced expertise and commitment to excellence in Las Vegas real estate.
				</p>
			</div>
			<div class="max-w-5xl mx-auto">
				<div class="grid md:grid-cols-2 gap-6">
					{#each certifications as cert}
						<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
							<span class="text-gray-700 text-lg font-medium">{cert}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
	
		<!-- Client Testimonials -->
		<div class="mb-20" id="testimonials">
			<div class="text-center mb-16">
				<h2 class="font-display text-4xl md:text-5xl font-bold mb-6 text-gray-900" style="letter-spacing: -0.02em;">What Do Dr. Janet Duffy's Clients Say About Her Service?</h2>
				<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-4"></div>
				<p class="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
					Dr. Janet Duffy's clients consistently praise her seamless home buying experiences, extensive Las Vegas market knowledge, attention to detail, luxury property expertise, negotiation skills that save thousands, and professional, responsive, results-driven service that helps first-time buyers, luxury sellers, investors, and relocating families achieve their real estate goals.
				</p>
			</div>
			<div class="grid-premium md:grid-cols-3 gap-8">
                    <div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 border border-gray-100">
                        <div class="flex items-center gap-1 mb-4">
                            {#each Array(5) as _}
                                <Star class="w-5 h-5 text-yellow-400 fill-yellow-400" />
                            {/each}
                        </div>
                        <p class="text-gray-700 mb-6 leading-relaxed text-lg">
                            "Dr. Duffy made our first home buying experience seamless. Her knowledge of the Las Vegas market and attention to detail helped us find the perfect home within our budget."
                        </p>
					<div class="border-t border-gray-200 pt-6">
						<div class="font-display font-bold text-gray-900 text-lg">Sarah & Mike Johnson</div>
						<div class="text-sm text-gray-600">First-time Buyers</div>
					</div>
				</div>
				
                    <div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 border border-gray-100">
                        <div class="flex items-center gap-1 mb-4">
                            {#each Array(5) as _}
                                <Star class="w-5 h-5 text-yellow-400 fill-yellow-400" />
                            {/each}
                        </div>
                        <p class="text-gray-700 mb-6 leading-relaxed text-lg">
                            "Jan's expertise in luxury properties is unmatched. She helped us sell our home for 15% above asking price and found us an incredible investment property."
                        </p>
					<div class="border-t border-gray-200 pt-6">
						<div class="font-display font-bold text-gray-900 text-lg">Robert Chen</div>
						<div class="text-sm text-gray-600">Luxury Home Seller & Investor</div>
					</div>
				</div>
				
                    <div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 border border-gray-100">
                        <div class="flex items-center gap-1 mb-4">
                            {#each Array(5) as _}
                                <Star class="w-5 h-5 text-yellow-400 fill-yellow-400" />
                            {/each}
                        </div>
                        <p class="text-gray-700 mb-6 leading-relaxed text-lg">
                            "Professional, responsive, and results-driven. Jan's market knowledge and negotiation skills saved us thousands on our home purchase."
                        </p>
					<div class="border-t border-gray-200 pt-6">
						<div class="font-display font-bold text-gray-900 text-lg">Lisa Martinez</div>
						<div class="text-sm text-gray-600">Relocating from California</div>
					</div>
				</div>
			</div>
		</div>
	
		<!-- CTA Section -->
		<div class="relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white rounded-3xl p-12 text-center shadow-2xl">
			<div class="absolute inset-0 overflow-hidden">
				<div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
				<div class="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
			</div>
			<div class="relative z-10">
				<h2 class="font-display text-4xl md:text-5xl font-bold mb-6 text-white" style="text-shadow: 0 2px 10px rgba(0,0,0,0.2);">Ready to Work With Dr. Janet Duffy on Your Las Vegas Real Estate Goals?</h2>
				<p class="text-xl mb-8 text-white/95 max-w-2xl mx-auto">
					Let's discuss your real estate goals and how I can help you achieve them. With 15+ years of experience, proven results, and personalized service, I'm here to provide expert guidance every step of the way to help you buy, sell, or invest in Las Vegas real estate successfully.
				</p>
				<div class="flex flex-col sm:flex-row gap-6 justify-center">
					<a href="/contact" class="group relative overflow-hidden bg-white text-primary-700 px-10 py-5 rounded-xl font-bold text-lg shadow-2xl hover:shadow-white/30 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
						<span class="relative z-10">Get in Touch</span>
						<div class="absolute inset-0 bg-gradient-to-r from-primary-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
					</a>
					<a href="tel:+17027667668" class="group relative overflow-hidden bg-transparent text-white border-2 border-white/50 px-10 py-5 rounded-xl font-bold text-lg backdrop-blur-sm hover:bg-white hover:text-primary-700 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
						<span class="relative z-10">Call (702) 766-7668</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>