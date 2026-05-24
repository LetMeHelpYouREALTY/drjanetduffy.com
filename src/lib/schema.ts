import { siteConfig } from '@/config/site.config';

/** Global JSON-LD graphs from legacy app.html — matches GBP NAP */
export const globalSchemaGraph = [
  {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': `${siteConfig.url}#agent`,
    name: siteConfig.name,
    alternateName: siteConfig.alternateName,
    description:
      'Las Vegas real estate expert with 35+ years experience and $127M+ in career sales. Nevada-licensed real estate agent serving buyers, sellers, and investors across Las Vegas, Summerlin, Henderson, and the surrounding valley.',
    telephone: siteConfig.phone,
    email: siteConfig.email,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    specialty: [
      'Las Vegas Real Estate',
      'Summerlin Luxury',
      'Henderson Real Estate',
      '55+ Communities',
      'Investment Properties',
    ],
    areaServed: [
      {
        '@type': 'City',
        name: 'Las Vegas',
        containedIn: { '@type': 'State', name: 'Nevada' },
      },
      { '@type': 'City', name: 'Summerlin' },
      { '@type': 'City', name: 'Henderson' },
    ],
    memberOf: [
      { '@type': 'Organization', name: 'Nevada Real Estate Division' },
      {
        '@type': 'Organization',
        name: siteConfig.brokerage,
        url: siteConfig.brokerageUrl,
      },
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Professional License',
        recognizedBy: { '@type': 'Organization', name: 'Nevada Real Estate Division' },
        credentialNumber: siteConfig.license,
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteConfig.url}#business`,
    name: siteConfig.legalName,
    alternateName: `${siteConfig.alternateName} - Las Vegas Real Estate Expert`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    openingHours: siteConfig.hours,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '08:00',
        closes: '20:00',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}#website`,
    name: `${siteConfig.name} - Las Vegas Real Estate Expert`,
    url: siteConfig.url,
    publisher: { '@id': `${siteConfig.url}#business` },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/properties?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  },
];
