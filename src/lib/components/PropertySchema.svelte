<script>
/**
 * RealEstateListing Schema Component
 * Implements schema.org/RealEstateListing for property pages
 * 2026 best practice for real estate SEO and AEO
 */

let {
	name = '',
	description = '',
	price = '',
	currency = 'USD',
	address = {},
	bedrooms = null,
	bathrooms = null,
	squareFootage = null,
	yearBuilt = null,
	propertyType = 'House',
	listingStatus = 'ForSale',
	datePosted = new Date().toISOString(),
	images = [],
	url = '',
	mls = null
} = $props();

const propertySchema = {
	'@context': 'https://schema.org',
	'@type': 'RealEstateListing',
	name: name,
	description: description,
	url: url,
	datePosted: datePosted,
	offers: {
		'@type': 'Offer',
		price: price,
		priceCurrency: currency,
		availability: 'https://schema.org/InStock',
		validFrom: datePosted
	},
	address: {
		'@type': 'PostalAddress',
		streetAddress: address.street || '',
		addressLocality: address.city || 'Las Vegas',
		addressRegion: address.state || 'NV',
		postalCode: address.zip || '',
		addressCountry: 'US'
	},
	geo: address.latitude && address.longitude
		? {
				'@type': 'GeoCoordinates',
				latitude: address.latitude,
				longitude: address.longitude
			}
		: undefined,
	numberOfBedrooms: bedrooms,
	numberOfBathroomsTotal: bathrooms,
	floorSize: squareFootage
		? {
				'@type': 'QuantitativeValue',
				value: squareFootage,
				unitText: 'square feet'
			}
		: undefined,
	yearBuilt: yearBuilt,
	propertyType: propertyType,
	additionalProperty: mls
		? [
				{
					'@type': 'PropertyValue',
					name: 'MLS Number',
					value: mls
				}
			]
		: undefined,
	image: images,
	agent: {
		'@type': 'RealEstateAgent',
		name: 'Dr. Jan Duffy',
		telephone: '+1-702-555-1234',
		email: 'janet.duffy@bhhsnv.com',
		url: 'https://drjanduffy.com'
	}
};

// Clean up undefined values
const cleanedSchema = JSON.parse(
	JSON.stringify(propertySchema, (key, value) => (value === undefined ? undefined : value))
);
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${JSON.stringify(cleanedSchema)}</script>`}
</svelte:head>
