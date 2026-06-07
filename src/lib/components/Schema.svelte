<script>
/**
 * Schema.org JSON-LD structured data component
 * Following 2026 best practices for SEO, GEO, and AEO optimization
 */

// Core agent information - centralized for consistency
const agentSchema = {
	"@context": "https://schema.org",
	"@type": ["RealEstateAgent", "Person"],
	"@id": "https://drjanduffy.com/#person",
	"name": "Dr. Janet Duffy",
	"givenName": "Janet",
	"familyName": "Duffy",
	"honorificPrefix": "Dr.",
	"jobTitle": "REALTOR®, Luxury Home Specialist",
	"email": "drduffy@bhhsnv.com",
	"telephone": "+1-702-222-1964",
	"url": "https://drjanduffy.com",
	"image": "https://drjanduffy.com/images/dr-janet-duffy.jpg",
	"description": "Dr. Janet Duffy is a licensed REALTOR® specializing in luxury West Summerlin real estate with 15+ years of experience, serving executives and California relocations in Las Vegas.",
	"knowsAbout": [
		"Luxury Real Estate",
		"West Summerlin Properties",
		"Executive Relocation",
		"California to Nevada Relocation",
		"Investment Properties",
		"First-time Home Buyers"
	],
	"areaServed": [
		{
			"@type": "City",
			"name": "Las Vegas",
			"@id": "https://www.wikidata.org/wiki/Q23768"
		},
		{
			"@type": "PostalAddress",
			"addressLocality": "Summerlin",
			"postalCode": "89138",
			"addressRegion": "NV"
		},
		{
			"@type": "PostalAddress",
			"addressLocality": "Summerlin",
			"postalCode": "89144",
			"addressRegion": "NV"
		},
		{
			"@type": "PostalAddress",
			"addressLocality": "Summerlin",
			"postalCode": "89135",
			"addressRegion": "NV"
		}
	],
	"address": {
		"@type": "PostalAddress",
		"addressLocality": "Las Vegas",
		"addressRegion": "NV",
		"addressCountry": "US"
	},
	"worksFor": {
		"@type": "RealEstateAgent",
		"@id": "https://drjanduffy.com/#organization"
	},
	"memberOf": {
		"@type": "Organization",
		"name": "National Association of REALTORS"
	},
	"hasCredential": [
		{
			"@type": "EducationalOccupationalCredential",
			"credentialCategory": "Professional Certification",
			"name": "Certified Residential Specialist (CRS)"
		},
		{
			"@type": "EducationalOccupationalCredential",
			"credentialCategory": "Professional Certification",
			"name": "Accredited Buyer's Representative (ABR)"
		},
		{
			"@type": "EducationalOccupationalCredential",
			"credentialCategory": "Professional Certification",
			"name": "Graduate, REALTOR Institute (GRI)"
		}
	]
};

const organizationSchema = {
	"@context": "https://schema.org",
	"@type": ["Organization", "LocalBusiness", "RealEstateAgent"],
	"@id": "https://drjanduffy.com/#organization",
	"name": "Dr. Janet Duffy - Berkshire Hathaway Nevada Properties",
	"legalName": "Berkshire Hathaway HomeServices Nevada Properties",
	"url": "https://drjanduffy.com",
	"logo": "https://drjanduffy.com/logo.png",
	"image": "https://drjanduffy.com/images/office.jpg",
	"telephone": "+1-702-222-1964",
	"email": "drduffy@bhhsnv.com",
	"description": "Premier luxury real estate services in West Summerlin, Las Vegas. Specializing in executive relocations and high-end properties.",
	"priceRange": "$$$$",
	"currenciesAccepted": "USD",
	"paymentAccepted": "Cash, Check, Wire Transfer",
	"address": {
		"@type": "PostalAddress",
		"addressLocality": "Las Vegas",
		"addressRegion": "NV",
		"addressCountry": "US"
	},
	"geo": {
		"@type": "GeoCoordinates",
		"latitude": "36.1699",
		"longitude": "-115.1398"
	},
	"areaServed": [
		{
			"@type": "GeoCircle",
			"geoMidpoint": {
				"@type": "GeoCoordinates",
				"latitude": "36.1699",
				"longitude": "-115.1398"
			},
			"geoRadius": "50000"
		},
		{
			"@type": "City",
			"name": "Las Vegas",
			"@id": "https://www.wikidata.org/wiki/Q23768"
		},
		{
			"@type": "City",
			"name": "Henderson"
		},
		{
			"@type": "City",
			"name": "North Las Vegas"
		}
	],
	"serviceArea": [
		"Summerlin 89138",
		"Summerlin 89144",
		"Summerlin 89135",
		"Las Vegas",
		"Henderson",
		"North Las Vegas"
	],
	"employee": {
		"@id": "https://drjanduffy.com/#person"
	},
	"openingHoursSpecification": [
		{
			"@type": "OpeningHoursSpecification",
			"dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
			"opens": "09:00",
			"closes": "18:00"
		},
		{
			"@type": "OpeningHoursSpecification",
			"dayOfWeek": "Saturday",
			"opens": "10:00",
			"closes": "16:00"
		}
	],
	"sameAs": [
		"https://www.facebook.com/drjanetduffy",
		"https://www.linkedin.com/in/drjanetduffy",
		"https://www.instagram.com/drjanetduffy"
	]
};

// Export for use in other components if needed
export { agentSchema, organizationSchema };
</script>

<svelte:head>
	<!-- Person/RealEstateAgent Schema -->
	<script type="application/ld+json">
		{JSON.stringify(agentSchema)}
	</script>

	<!-- Organization/LocalBusiness Schema -->
	<script type="application/ld+json">
		{JSON.stringify(organizationSchema)}
	</script>

	<!-- WebSite Schema with search action -->
	<script type="application/ld+json">
		{JSON.stringify({
			"@context": "https://schema.org",
			"@type": "WebSite",
			"@id": "https://drjanduffy.com/#website",
			"name": "Dr. Janet Duffy - Las Vegas Luxury Real Estate",
			"url": "https://drjanduffy.com",
			"potentialAction": {
				"@type": "SearchAction",
				"target": {
					"@type": "EntryPoint",
					"urlTemplate": "https://drjanduffy.com/properties?search={search_term_string}"
				},
				"query-input": "required name=search_term_string"
			}
		})}
	</script>
</svelte:head>
