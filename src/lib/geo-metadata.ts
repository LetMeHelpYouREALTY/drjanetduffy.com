import type { Thing, WithContext } from 'schema-dts';
import { siteConfig } from '@/config/site.config';

/**
 * Geographic and location-based metadata helpers for local SEO/GEO
 * Optimized for real estate location pages
 */

export type LocationData = {
  name: string;
  type: 'City' | 'Neighborhood' | 'Community';
  description: string;
  slug: string;
  county?: string;
  state?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
};

/**
 * Generate location-specific Place schema
 * Critical for local search and map features
 */
export function locationPlaceSchema(location: LocationData): WithContext<Thing> {
  const baseSchema: any = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: location.name,
    description: location.description,
    geo: location.coordinates
      ? {
          '@type': 'GeoCoordinates',
          latitude: location.coordinates.lat.toString(),
          longitude: location.coordinates.lng.toString(),
        }
      : undefined,
    containedInPlace: location.state
      ? {
          '@type': 'State',
          name: location.state,
          containedInPlace: {
            '@type': 'Country',
            name: 'United States',
          },
        }
      : undefined,
  };

  return baseSchema;
}

/**
 * Las Vegas area coordinates for common locations
 */
export const lasVegasLocations = {
  downtown: { lat: 36.1699, lng: -115.1398 },
  summerlin: { lat: 36.1864, lng: -115.3244 },
  henderson: { lat: 36.0395, lng: -114.9817 },
  northLasVegas: { lat: 36.1989, lng: -115.1175 },
  skyeCanyon: { lat: 36.2789, lng: -115.3142 },
  inspirada: { lat: 35.9803, lng: -115.1381 },
  theLakes: { lat: 36.1628, lng: -115.2647 },
} as const;

/**
 * Generate location-specific breadcrumbs
 */
export function locationBreadcrumbs(location: LocationData) {
  return [
    { name: 'Home', path: '' },
    { name: 'Communities', path: 'communities' },
    { name: location.name, path: `communities/${location.slug}` },
  ];
}

/**
 * Generate location-specific FAQs
 */
export function locationFAQs(location: LocationData) {
  return [
    {
      q: `What is the average home price in ${location.name}?`,
      a: `${location.name} home prices vary by neighborhood and property type. Contact Dr. Janet Duffy at ${siteConfig.phone} for current market data and available listings in ${location.name}.`,
    },
    {
      q: `Is ${location.name} a good place to live in Las Vegas?`,
      a: `${location.description} Dr. Janet Duffy specializes in ${location.name} real estate and can provide detailed neighborhood insights, school information, and amenities overview.`,
    },
    {
      q: `How do I find homes for sale in ${location.name}?`,
      a: `Dr. Janet Duffy has access to all MLS listings in ${location.name}. Schedule a consultation to discuss your must-haves, budget, and timeline. Call ${siteConfig.phone} or visit the properties page.`,
    },
  ];
}

/**
 * Enhanced metadata for location pages with GEO optimization
 */
export function locationMetadata(location: LocationData) {
  const title = `${location.name} Real Estate & Homes for Sale | Las Vegas`;
  const description = `${location.description} Find ${location.name} homes for sale with Dr. Janet Duffy, Las Vegas REALTOR® with 35+ years experience. Call ${siteConfig.phone}.`;

  return {
    title,
    description,
    keywords: [
      `${location.name} homes for sale`,
      `${location.name} real estate`,
      `${location.name} realtor`,
      `${location.name} Las Vegas`,
      'Las Vegas real estate',
      'Dr. Janet Duffy',
    ].join(', '),
  };
}

/**
 * Service area schema for multi-location real estate agents
 */
export function serviceAreaSchema(locations: LocationData[]): WithContext<Thing> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Real Estate Services',
    provider: {
      '@id': `${siteConfig.url}#agent`,
    },
    areaServed: locations.map((loc) => ({
      '@type': loc.type === 'City' ? 'City' : 'Place',
      name: loc.name,
      ...(loc.coordinates && {
        geo: {
          '@type': 'GeoCoordinates',
          latitude: loc.coordinates.lat.toString(),
          longitude: loc.coordinates.lng.toString(),
        },
      }),
    })),
  };
}
