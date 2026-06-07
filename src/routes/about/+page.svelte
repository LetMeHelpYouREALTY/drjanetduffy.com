<script>
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
	<title>About Dr. Janet Duffy | West Summerlin REALTOR® | 15+ Years Experience</title>
	<meta name="description" content="Meet Dr. Janet Duffy - West Summerlin's premier REALTOR® with 15+ years serving 89138, 89144, 89135. 150+ properties sold, $50M+ volume, CRS & ABR certified. Berkshire Hathaway Nevada Properties." />
	<meta name="keywords" content="Dr. Janet Duffy REALTOR, about Janet Duffy, West Summerlin real estate agent, Las Vegas REALTOR experience, CRS certified realtor, ABR realtor Las Vegas, Berkshire Hathaway agent" />
	<link rel="canonical" href="https://drjanduffy.com/about" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="profile" />
	<meta property="og:url" content="https://drjanduffy.com/about" />
	<meta property="og:title" content="About Dr. Janet Duffy | West Summerlin REALTOR®" />
	<meta property="og:description" content="15+ years experience, 150+ properties sold, $50M+ in sales volume. West Summerlin's trusted luxury real estate expert." />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://drjanduffy.com/about" />
	<meta property="twitter:title" content="About Dr. Janet Duffy | West Summerlin REALTOR®" />
	<meta property="twitter:description" content="15+ years experience, 150+ properties sold, $50M+ in sales volume." />

	<!-- Person Schema -->
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "Person",
		"name": "Dr. Janet Duffy",
		"alternateName": "Dr. Jan Duffy",
		"jobTitle": "REALTOR®",
		"worksFor": {
			"@type": "Organization",
			"name": "Berkshire Hathaway Nevada Properties"
		},
		"url": "https://drjanduffy.com",
		"image": "https://drjanduffy.com/favicon.png",
		"telephone": "+1-702-222-1964",
		"email": "drduffy@bhhsnv.com",
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "Las Vegas",
			"addressRegion": "NV",
			"addressCountry": "US"
		},
		"knowsAbout": [
			"Luxury Real Estate",
			"West Summerlin Properties",
			"Executive Relocation",
			"Real Estate Investment",
			"First-Time Home Buyers",
			"California to Nevada Relocation"
		],
		"hasCredential": [
			{
				"@type": "EducationalOccupationalCredential",
				"credentialCategory": "Professional Certification",
				"name": "Certified Residential Specialist",
				"description": "CRS - Highest credential in residential real estate"
			},
			{
				"@type": "EducationalOccupationalCredential",
				"credentialCategory": "Professional Certification",
				"name": "Accredited Buyer's Representative",
				"description": "ABR - Buyer representation specialist"
			},
			{
				"@type": "EducationalOccupationalCredential",
				"credentialCategory": "Professional Certification",
				"name": "Graduate REALTOR Institute",
				"description": "GRI - Advanced real estate education"
			}
		],
		"award": [
			"150+ Properties Sold",
			"$50M+ in Sales Volume",
			"98% Client Satisfaction Rating"
		]
	}
	</script>

	<!-- ProfilePage Schema -->
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "ProfilePage",
		"mainEntity": {
			"@type": "RealEstateAgent",
			"name": "Dr. Janet Duffy",
			"description": "West Summerlin's premier luxury real estate expert with 15+ years of experience serving executives and families in Las Vegas, Nevada",
			"url": "https://drjanduffy.com",
			"telephone": "+1-702-222-1964",
			"areaServed": [
				{
					"@type": "PostalCodeArea",
					"postalCode": "89138"
				},
				{
					"@type": "PostalCodeArea",
					"postalCode": "89144"
				},
				{
					"@type": "PostalCodeArea",
					"postalCode": "89135"
				}
			]
		}
	}
	</script>
</svelte:head>

<div class="container mx-auto px-4 py-8">
	<!-- Hero Section -->
	<div class="text-center mb-16">
		<div class="w-32 h-32 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
			<span class="text-white font-bold text-4xl">JD</span>
		</div>
		<h1 class="text-4xl font-bold mb-4 text-gray-800">Dr. Jan Duffy</h1>
		<p class="text-xl text-primary-600 font-semibold mb-4">Licensed REALTOR</p>
		<p class="text-lg text-gray-600 max-w-3xl mx-auto">
			Your trusted Las Vegas real estate expert with over 15 years of experience helping clients buy, sell, and invest in properties throughout the greater Las Vegas area.
		</p>
	</div>
	
	<!-- About Story -->
	<div class="max-w-4xl mx-auto mb-16">
		<div class="grid md:grid-cols-2 gap-12 items-center">
			<div>
				<h2 class="text-3xl font-bold mb-6 text-gray-800">My Story</h2>
				<div class="space-y-4 text-gray-600">
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
			<div class="bg-gray-50 rounded-lg p-8">
				<h3 class="text-xl font-semibold mb-4 text-gray-800">Quick Facts</h3>
				<ul class="space-y-3">
					<li class="text-gray-600">• Las Vegas native</li>
					<li class="text-gray-600">• 15+ years in real estate</li>
					<li class="text-gray-600">• Luxury home specialist</li>
					<li class="text-gray-600">• Investment property expert</li>
					<li class="text-gray-600">• Available 7 days a week</li>
				</ul>
			</div>
		</div>
	</div>
	
	<!-- Achievements -->
	<div class="mb-16">
		<h2 class="text-3xl font-bold text-center mb-12 text-gray-800">My Achievements</h2>
		<div class="grid md:grid-cols-4 gap-8">
			{#each achievements as achievement}
				<div class="text-center">
					<h3 class="text-xl font-semibold mb-2 text-gray-800">{achievement.title}</h3>
					<p class="text-gray-600">{achievement.description}</p>
				</div>
			{/each}
		</div>
	</div>
	
	<!-- Services -->
	<div class="mb-16">
		<h2 class="text-3xl font-bold text-center mb-12 text-gray-800">Services I Provide</h2>
		<div class="max-w-4xl mx-auto">
			<div class="grid md:grid-cols-2 gap-6">
				{#each services as service}
					<div>
						<span class="text-gray-700">{service}</span>
					</div>
				{/each}
			</div>
		</div>
	</div>
	
	<!-- Certifications -->
	<div class="mb-16">
		<h2 class="text-3xl font-bold text-center mb-12 text-gray-800">Professional Certifications</h2>
		<div class="max-w-4xl mx-auto">
			<div class="grid md:grid-cols-2 gap-6">
				{#each certifications as cert}
					<div>
						<span class="text-gray-700">{cert}</span>
					</div>
				{/each}
			</div>
		</div>
	</div>
	
	<!-- Client Testimonials -->
	<div class="mb-16">
		<h2 class="text-3xl font-bold text-center mb-12 text-gray-800">What My Clients Say</h2>
		<div class="grid md:grid-cols-3 gap-8">
			<div class="bg-white rounded-lg shadow-lg p-6">
				<p class="text-gray-600 mb-4">
					"Dr. Duffy made our first home buying experience seamless. Her knowledge of the Las Vegas market and attention to detail helped us find the perfect home within our budget."
				</p>
				<div class="font-semibold text-gray-800">Sarah & Mike Johnson</div>
				<div class="text-sm text-gray-500">First-time Buyers</div>
			</div>
			
			<div class="bg-white rounded-lg shadow-lg p-6">
				<p class="text-gray-600 mb-4">
					"Jan's expertise in luxury properties is unmatched. She helped us sell our home for 15% above asking price and found us an incredible investment property."
				</p>
				<div class="font-semibold text-gray-800">Robert Chen</div>
				<div class="text-sm text-gray-500">Luxury Home Seller & Investor</div>
			</div>
			
			<div class="bg-white rounded-lg shadow-lg p-6">
				<p class="text-gray-600 mb-4">
					"Professional, responsive, and results-driven. Jan's market knowledge and negotiation skills saved us thousands on our home purchase."
				</p>
				<div class="font-semibold text-gray-800">Lisa Martinez</div>
				<div class="text-sm text-gray-500">Relocating from California</div>
			</div>
		</div>
	</div>
	
	<!-- CTA Section -->
	<div class="bg-primary-600 text-white rounded-lg p-8 text-center">
		<h2 class="text-2xl font-bold mb-4">Ready to Work Together?</h2>
		<p class="text-lg mb-6">
			Let's discuss your real estate goals and how I can help you achieve them. I'm here to provide expert guidance every step of the way.
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<a href="/contact" class="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
				Get in Touch
			</a>
			<a href="tel:+17025551234" class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
				Call (702) 555-1234
			</a>
		</div>
	</div>
</div>