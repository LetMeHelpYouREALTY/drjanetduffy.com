import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { GeoAreaPage } from '@/components/pages/GeoAreaPage';
import { siteConfig } from '@/config/site.config';
import { getGeoArea, zipSlugs } from '@/content/geo';
import { pageMetadata } from '@/lib/metadata';

type ZipPageProps = {
  params: Promise<{ zip: string }>;
};

export function generateStaticParams() {
  return zipSlugs.map((zip) => ({ zip }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: ZipPageProps): Promise<Metadata> {
  const { zip } = await params;
  const area = getGeoArea(`las-vegas-zip-codes/${zip}`);
  if (!area) return {};

  const meta = pageMetadata({
    title: area.title,
    description: area.description,
    path: area.path,
  });
  const heroImage = {
    url: `${siteConfig.url}${area.hero.src}`,
    width: 1600,
    height: 900,
    alt: area.hero.alt,
  };
  return {
    ...meta,
    openGraph: { ...meta.openGraph, images: [heroImage] },
    twitter: { ...meta.twitter, images: [heroImage.url] },
  };
}

export default async function ZipCodePage({ params }: ZipPageProps) {
  const { zip } = await params;
  const area = getGeoArea(`las-vegas-zip-codes/${zip}`);
  if (!area) notFound();

  return <GeoAreaPage area={area} />;
}
