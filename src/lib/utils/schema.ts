/**
 * Schema.org structured data utilities for SEO/AEO optimization
 * Following 2026 best practices for real estate websites
 */

export interface RealEstateAgentSchema {
	'@context': 'https://schema.org';
	'@type': 'RealEstateAgent';
	name: string;
	alternateName?: string;
	description?: string;
	url?: string;
	telephone: string;
	email: string;
	image?: string;
	priceRange?: string;
	address: {
		'@type': 'PostalAddress';
		streetAddress?: string;
		addressLocality: string;
		addressRegion: string;
		postalCode?: string;
		addressCountry: string;
	};
	geo?: {
		'@type': 'GeoCoordinates';
		latitude: number;
		longitude: number;
	};
	areaServed?: Array<{
		'@type': 'City' | 'PostalCode';
		name: string;
	}>;
	openingHoursSpecification?: Array<{
		'@type': 'OpeningHoursSpecification';
		dayOfWeek: string | string[];
		opens: string;
		closes: string;
	}>;
	sameAs?: string[];
	knowsAbout?: string[];
	memberOf?: {
		'@type': 'Organization';
		name: string;
		url?: string;
	};
	award?: string[];
	hasCredential?: Array<{
		'@type': 'EducationalOccupationalCredential';
		credentialCategory: string;
		name: string;
	}>;
}

export interface FAQPageSchema {
	'@context': 'https://schema.org';
	'@type': 'FAQPage';
	mainEntity: Array<{
		'@type': 'Question';
		name: string;
		acceptedAnswer: {
			'@type': 'Answer';
			text: string;
		};
	}>;
}

export interface BreadcrumbListSchema {
	'@context': 'https://schema.org';
	'@type': 'BreadcrumbList';
	itemListElement: Array<{
		'@type': 'ListItem';
		position: number;
		name: string;
		item?: string;
	}>;
}

/**
 * Generate RealEstateAgent schema with 2026 best practices
 */
export function createRealEstateAgentSchema(): RealEstateAgentSchema {
	return {
		'@context': 'https://schema.org',
		'@type': 'RealEstateAgent',
		name: 'Dr. Janet Duffy',
		alternateName: 'Dr. Jan Duffy',
		description: 'Luxury Las Vegas real estate expert specializing in West Summerlin properties, executive relocations, and California buyer relocations. Over 15 years of experience serving Las Vegas, Henderson, and Summerlin.',
		url: 'https://drjanduffy.com',
		telephone: '+1-702-222-1964',
		email: 'drduffy@bhhsnv.com',
		priceRange: '$$$',
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Las Vegas',
			addressRegion: 'NV',
			postalCode: '89144',
			addressCountry: 'US'
		},
		geo: {
			'@type': 'GeoCoordinates',
			latitude: 36.1699,
			longitude: -115.1398
		},
		areaServed: [
			{ '@type': 'PostalCode', name: '89138' },
			{ '@type': 'PostalCode', name: '89144' },
			{ '@type': 'PostalCode', name: '89135' },
			{ '@type': 'City', name: 'Las Vegas' },
			{ '@type': 'City', name: 'Summerlin' },
			{ '@type': 'City', name: 'Henderson' }
		],
		openingHoursSpecification: [
			{
				'@type': 'OpeningHoursSpecification',
				dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
				opens: '09:00',
				closes: '18:00'
			},
			{
				'@type': 'OpeningHoursSpecification',
				dayOfWeek: 'Saturday',
				opens: '10:00',
				closes: '16:00'
			}
		],
		sameAs: [
			'https://www.linkedin.com/in/drjanetduffy',
			'https://www.facebook.com/drjanduffyrealtor'
		],
		knowsAbout: [
			'Luxury Real Estate',
			'West Summerlin Properties',
			'Executive Relocation',
			'California to Nevada Relocation',
			'Investment Properties',
			'Las Vegas Real Estate Market',
			'Residential Real Estate',
			'Property Valuation'
		],
		memberOf: {
			'@type': 'Organization',
			name: 'Berkshire Hathaway HomeServices Nevada Properties',
			url: 'https://www.bhhsnv.com'
		},
		hasCredential: [
			{
				'@type': 'EducationalOccupationalCredential',
				credentialCategory: 'Professional Certification',
				name: 'Licensed REALTOR® in Nevada'
			},
			{
				'@type': 'EducationalOccupationalCredential',
				credentialCategory: 'Professional Certification',
				name: 'Certified Residential Specialist (CRS)'
			},
			{
				'@type': 'EducationalOccupationalCredential',
				credentialCategory: 'Professional Certification',
				name: 'Accredited Buyer\'s Representative (ABR)'
			}
		]
	};
}

/**
 * Generate FAQ schema for AEO optimization
 */
export function createFAQSchema(questions: Array<{ question: string; answer: string }>): FAQPageSchema {
	return {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: questions.map(q => ({
			'@type': 'Question',
			name: q.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: q.answer
			}
		}))
	};
}

/**
 * Generate breadcrumb schema for better navigation context
 */
export function createBreadcrumbSchema(items: Array<{ name: string; url?: string }>): BreadcrumbListSchema {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.name,
			...(item.url && { item: item.url })
		}))
	};
}

/**
 * Convert schema object to JSON-LD script content
 */
export function schemaToJsonLd(schema: any): string {
	return JSON.stringify(schema, null, 2);
}
