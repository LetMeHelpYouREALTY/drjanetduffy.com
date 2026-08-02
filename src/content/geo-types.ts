/** Shared types for hyperlocal geo content (communities + zip-code guides). */

export type GeoFact = { label: string; value: string };

export type GeoSection = { title: string; paragraphs: string[] };

export type GeoFaq = { q: string; a: string };

export type GeoLink = { href: string; label: string };

export type GeoArea = {
  /** Route path without leading slash, e.g. "communities/summerlin". */
  path: string;
  name: string;
  heading: string;
  title: string;
  description: string;
  lead: string;
  hero: { src: string; alt: string };
  /** Query for the Google Maps embed pin. */
  mapQuery: string;
  zips: string[];
  facts: GeoFact[];
  sections: GeoSection[];
  /** REALTOR® service sections — buying/selling focus for this area. */
  services: GeoSection[];
  faqs: GeoFaq[];
  /** Internal links with localized anchor text. */
  nearby: GeoLink[];
};
