import type { Metadata } from 'next';
import { siteConfig } from '@/config/site.config';

/** Canonical https://www URL for a path segment (no leading slash). */
export function canonicalUrl(path = ''): string {
  const normalized = path.replace(/^\/+/, '').replace(/\/+$/, '');
  return normalized ? `${siteConfig.url}/${normalized}` : siteConfig.url;
}

const defaultOgImage = {
  url: `${siteConfig.url}${siteConfig.ogImage}`,
  width: 1200,
  height: 630,
  alt: `${siteConfig.name} — Las Vegas real estate`,
};

/** Shared Open Graph / Twitter defaults for marketing pages. */
export function socialMetadata(title: string, description: string, path: string) {
  const url = canonicalUrl(path);
  return {
    openGraph: {
      type: 'website' as const,
      locale: 'en_US',
      url,
      siteName: siteConfig.name,
      title,
      description,
      images: [defaultOgImage],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title,
      description,
      images: [defaultOgImage.url],
    },
  };
}

type PageMetadataOptions = {
  title: string;
  description: string;
  /** Route path without leading slash (empty for homepage). */
  path: string;
  noindex?: boolean;
};

/** Per-page metadata aligned with Search Console canonical host (www). */
export function pageMetadata({
  title,
  description,
  path,
  noindex = false,
}: PageMetadataOptions): Metadata {
  return {
    title,
    description,
    alternates: { canonical: canonicalUrl(path) },
    robots: noindex
      ? { index: false, follow: false, googleBot: { index: false, follow: false } }
      : { index: true, follow: true },
    ...socialMetadata(title, description, path),
  };
}

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();

/** Root layout metadata — metadataBase, verification, default OG. */
export const rootLayoutMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  creator: siteConfig.name,
  publisher: siteConfig.legalName,
  formatDetection: { telephone: true, email: true },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [defaultOgImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [defaultOgImage.url],
  },
  ...(googleVerification ? { verification: { google: googleVerification } } : {}),
};
