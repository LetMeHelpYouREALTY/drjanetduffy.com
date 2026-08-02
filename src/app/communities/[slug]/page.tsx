import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { GeoAreaPage } from '@/components/pages/GeoAreaPage';
import { siteConfig } from '@/config/site.config';
import { getGeoArea, newCommunitySlugs } from '@/content/geo';
import { pageMetadata } from '@/lib/metadata';

type CommunityPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return newCommunitySlugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: CommunityPageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = getGeoArea(`communities/${slug}`);
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

export default async function CommunityPage({ params }: CommunityPageProps) {
  const { slug } = await params;
  const area = getGeoArea(`communities/${slug}`);
  if (!area) notFound();

  return <GeoAreaPage area={area} />;
}
