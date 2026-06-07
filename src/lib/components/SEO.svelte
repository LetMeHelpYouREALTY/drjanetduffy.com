<script>
/**
 * Comprehensive SEO Component
 * Implements 2026 best practices for:
 * - Traditional SEO (meta tags, Open Graph, Twitter Cards)
 * - Local SEO / GEO (geographic optimization)
 * - AEO (Answer Engine Optimization for AI search)
 * - Schema.org structured data (JSON-LD)
 */

let {
	title = 'Dr. Jan Duffy - Las Vegas Real Estate Agent | Luxury Homes & Properties',
	description = 'Dr. Jan Duffy is a top Las Vegas REALTOR® with 15+ years of experience. Specializing in luxury homes, investment properties, and first-time buyers in Las Vegas, Henderson, and Summerlin. Call (702) 555-1234.',
	keywords = 'Las Vegas real estate agent, Las Vegas REALTOR, luxury homes Las Vegas, Henderson real estate, Summerlin homes, Las Vegas property, Nevada real estate',
	ogImage = 'https://drjanduffy.com/og-image.jpg',
	url = 'https://drjanduffy.com',
	type = 'website',
	schema = null,
	faq = null
} = $props();

const canonicalUrl = url;

// Default schema for Organization and Person (Dr. Jan Duffy)
const defaultSchema = {
	'@context': 'https://schema.org',
	'@graph': [
		{
			'@type': 'RealEstateAgent',
			'@id': 'https://drjanduffy.com/#person',
			name: 'Dr. Jan Duffy',
			jobTitle: 'REALTOR® / Real Estate Agent',
			url: 'https://drjanduffy.com',
			telephone: '+1-702-555-1234',
			email: 'janet.duffy@bhhsnv.com',
			address: {
				'@type': 'PostalAddress',
				addressLocality: 'Las Vegas',
				addressRegion: 'NV',
				postalCode: '89101',
				addressCountry: 'US'
			},
			areaServed: [
				{
					'@type': 'City',
					name: 'Las Vegas',
					'@id': 'https://www.wikidata.org/wiki/Q23768'
				},
				{
					'@type': 'City',
					name: 'Henderson',
					'@id': 'https://www.wikidata.org/wiki/Q79861'
				},
				{
					'@type': 'Place',
					name: 'Summerlin',
					containedInPlace: {
						'@type': 'City',
						name: 'Las Vegas'
					}
				},
				{
					'@type': 'Place',
					name: 'North Las Vegas'
				}
			],
			knowsAbout: [
				'Luxury Real Estate',
				'Residential Real Estate',
				'Investment Properties',
				'First-Time Home Buyers',
				'Property Valuation',
				'Real Estate Negotiation',
				'Las Vegas Real Estate Market'
			],
			hasCredential: [
				{
					'@type': 'EducationalOccupationalCredential',
					credentialCategory: 'Professional Certification',
					name: 'Certified Residential Specialist (CRS)'
				},
				{
					'@type': 'EducationalOccupationalCredential',
					credentialCategory: 'Professional Certification',
					name: "Accredited Buyer's Representative (ABR)"
				},
				{
					'@type': 'EducationalOccupationalCredential',
					credentialCategory: 'Professional Certification',
					name: 'Graduate, REALTOR Institute (GRI)'
				},
				{
					'@type': 'EducationalOccupationalCredential',
					credentialCategory: 'Professional Certification',
					name: 'Luxury Home Marketing Specialist'
				}
			],
			aggregateRating: {
				'@type': 'AggregateRating',
				ratingValue: '4.9',
				bestRating: '5',
				ratingCount: '47'
			},
			sameAs: [
				'https://www.linkedin.com/in/drjanduffy',
				'https://www.facebook.com/drjanduffyrealtor',
				'https://www.instagram.com/drjanduffyrealtor'
			]
		},
		{
			'@type': 'Organization',
			'@id': 'https://drjanduffy.com/#organization',
			name: 'Dr. Jan Duffy Real Estate',
			url: 'https://drjanduffy.com',
			logo: {
				'@type': 'ImageObject',
				url: 'https://drjanduffy.com/logo.png',
				width: '600',
				height: '60'
			},
			contactPoint: {
				'@type': 'ContactPoint',
				telephone: '+1-702-555-1234',
				contactType: 'Customer Service',
				email: 'janet.duffy@bhhsnv.com',
				areaServed: 'US',
				availableLanguage: ['English', 'Spanish']
			},
			address: {
				'@type': 'PostalAddress',
				addressLocality: 'Las Vegas',
				addressRegion: 'NV',
				postalCode: '89101',
				addressCountry: 'US'
			}
		},
		{
			'@type': 'LocalBusiness',
			'@id': 'https://drjanduffy.com/#localbusiness',
			name: 'Dr. Jan Duffy - Las Vegas Real Estate',
			image: 'https://drjanduffy.com/office.jpg',
			'@id': 'https://drjanduffy.com',
			url: 'https://drjanduffy.com',
			telephone: '+1-702-555-1234',
			priceRange: '$$',
			address: {
				'@type': 'PostalAddress',
				streetAddress: '',
				addressLocality: 'Las Vegas',
				addressRegion: 'NV',
				postalCode: '89101',
				addressCountry: 'US'
			},
			geo: {
				'@type': 'GeoCoordinates',
				latitude: 36.1699,
				longitude: -115.1398
			},
			openingHoursSpecification: [
				{
					'@type': 'OpeningHoursSpecification',
					dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
					opens: '08:00',
					closes: '20:00'
				}
			],
			aggregateRating: {
				'@type': 'AggregateRating',
				ratingValue: '4.9',
				reviewCount: '47'
			}
		},
		{
			'@type': 'WebSite',
			'@id': 'https://drjanduffy.com/#website',
			url: 'https://drjanduffy.com',
			name: 'Dr. Jan Duffy Real Estate',
			description:
				'Las Vegas Real Estate Expert - Luxury Homes, Investment Properties, First-Time Buyers',
			publisher: {
				'@id': 'https://drjanduffy.com/#organization'
			},
			potentialAction: {
				'@type': 'SearchAction',
				target: {
					'@type': 'EntryPoint',
					urlTemplate: 'https://drjanduffy.com/properties?search={search_term_string}'
				},
				'query-input': 'required name=search_term_string'
			}
		}
	]
};

// Merge custom schema with default
const finalSchema = schema ? { ...defaultSchema, ...schema } : defaultSchema;

// FAQ Schema for AEO
const faqSchema = faq
	? {
			'@context': 'https://schema.org',
			'@type': 'FAQPage',
			mainEntity: faq.map((item) => ({
				'@type': 'Question',
				name: item.question,
				acceptedAnswer: {
					'@type': 'Answer',
					text: item.answer
				}
			}))
		}
	: null;
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>{title}</title>
	<meta name="title" content={title} />
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />
	<link rel="canonical" href={canonicalUrl} />

	<!-- Geographic Meta Tags for Local SEO -->
	<meta name="geo.region" content="US-NV" />
	<meta name="geo.placename" content="Las Vegas" />
	<meta name="geo.position" content="36.1699;-115.1398" />
	<meta name="ICBM" content="36.1699, -115.1398" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content={type} />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:locale" content="en_US" />
	<meta property="og:site_name" content="Dr. Jan Duffy Real Estate" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={url} />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content={ogImage} />

	<!-- Additional SEO Meta Tags -->
	<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
	<meta name="googlebot" content="index, follow" />
	<meta name="author" content="Dr. Jan Duffy" />
	<meta name="language" content="English" />
	<meta name="revisit-after" content="7 days" />

	<!-- Mobile Optimization -->
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
	<meta name="format-detection" content="telephone=yes" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

	<!-- Schema.org JSON-LD Structured Data -->
	{#if finalSchema}
		{@html `<script type="application/ld+json">${JSON.stringify(finalSchema)}</script>`}
	{/if}

	<!-- FAQ Schema for AEO -->
	{#if faqSchema}
		{@html `<script type="application/ld+json">${JSON.stringify(faqSchema)}</script>`}
	{/if}
</svelte:head>
