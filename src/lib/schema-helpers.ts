import type { Thing, WithContext } from 'schema-dts';
import { siteConfig } from '@/config/site.config';

/**
 * 2026 Schema.org helpers for GEO/AEO optimization
 * Supports: BreadcrumbList, FAQPage, VideoObject, Speakable
 */

export type BreadcrumbItem = {
  name: string;
  path: string;
};

/**
 * Generate BreadcrumbList schema for improved navigation understanding
 * Critical for Google AI Overviews and answer engines
 */
export function breadcrumbSchema(items: BreadcrumbItem[]): WithContext<Thing> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.path ? `${siteConfig.url}/${item.path}` : siteConfig.url,
    })),
  };
}

export type FAQItem = {
  q: string;
  a: string;
};

/**
 * Generate FAQPage schema - high-value for AEO/voice search
 * AI engines heavily cite FAQ content
 */
export function faqSchema(faqs: FAQItem[]): WithContext<Thing> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };
}

export type VideoData = {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  contentUrl: string;
  embedUrl?: string;
  duration?: string;
};

/**
 * Generate VideoObject schema for property tours
 * Enables video rich results in search
 */
export function videoSchema(video: VideoData): WithContext<Thing> {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.name,
    description: video.description,
    thumbnailUrl: video.thumbnailUrl,
    uploadDate: video.uploadDate,
    contentUrl: video.contentUrl,
    embedUrl: video.embedUrl,
    duration: video.duration,
  };
}

/**
 * Generate Speakable schema for voice search optimization
 * Used by Google Assistant, Alexa, etc.
 */
export function speakableSchema(cssSelectors: string[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: cssSelectors,
    },
  };
}

export type PropertyListingData = {
  name: string;
  description: string;
  price: string;
  priceCurrency: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  image: string[];
  bedrooms?: number;
  bathrooms?: number;
  floorSize?: {
    value: number;
    unitCode: string;
  };
  yearBuilt?: number;
};

/**
 * Generate RealEstateListing schema (Schema.org v30.0)
 * Essential for real estate SEO/GEO
 */
export function propertyListingSchema(property: PropertyListingData): WithContext<Thing> {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: property.name,
    description: property.description,
    offers: {
      '@type': 'Offer',
      price: property.price,
      priceCurrency: property.priceCurrency,
      availability: 'https://schema.org/InStock',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: property.address.street,
      addressLocality: property.address.city,
      addressRegion: property.address.state,
      postalCode: property.address.zip,
      addressCountry: 'US',
    },
    image: property.image,
    ...(property.bedrooms && { numberOfRooms: property.bedrooms }),
    ...(property.bathrooms && { numberOfBathroomsTotal: property.bathrooms }),
    ...(property.floorSize && { floorSize: property.floorSize }),
    ...(property.yearBuilt && { yearBuilt: property.yearBuilt }),
    landlord: {
      '@id': `${siteConfig.url}#agent`,
    },
  };
}

/**
 * Generate Article schema with 2026 enhancements
 * Includes dateModified for content freshness signals (critical for GEO)
 */
export function articleSchema(data: {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author?: string;
}): WithContext<Thing> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.headline,
    description: data.description,
    image: data.image,
    datePublished: data.datePublished,
    dateModified: data.dateModified,
    author: {
      '@id': `${siteConfig.url}#agent`,
    },
    publisher: {
      '@id': `${siteConfig.url}#business`,
    },
  };
}
