import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CalendlyEmbed } from '@/components/calendly/CalendlyEmbed';
import { siteConfig } from '@/config/site.config';
import { allGeoAreas } from '@/content/geo';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata({
  title: 'Las Vegas Communities Guide | 21 Neighborhood Profiles | Dr. Janet Duffy',
  description:
    'Hyperlocal Las Vegas community guides from Dr. Janet Duffy, REALTOR®: Summerlin, Skye Canyon, Henderson, Lake Las Vegas, and 17 more — with zip codes, parks, golf, and market intel. Call (702) 766-7668.',
  path: 'communities',
});

const communities = allGeoAreas.filter((area) => area.path.startsWith('communities/'));

export default function CommunitiesHubPage() {
  return (
    <article className="container-premium py-12">
      <h1 className="font-display mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
        Las Vegas Community Guides
      </h1>
      <p className="mb-10 max-w-3xl text-xl leading-relaxed text-gray-600">
        Hyperlocal profiles of the valley’s master plans and neighborhoods — zip codes, parks,
        golf courses, commute times, and what actually drives value in each. Written by{' '}
        {siteConfig.name}, REALTOR® with {siteConfig.brokerage}, License {siteConfig.license}.
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {communities.map((area) => (
          <Link
            key={area.path}
            href={`/${area.path}`}
            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white no-underline shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="relative h-44 overflow-hidden">
              <Image
                src={area.hero.src}
                alt={area.hero.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h2 className="mb-1 text-xl font-bold text-gray-900">{area.name}</h2>
              <p className="mb-3 text-sm font-semibold text-primary-600">
                {area.zips.map((z) => `Zip ${z}`).join(' · ')}
              </p>
              <p className="line-clamp-3 text-gray-600">{area.lead}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-14">
        <CalendlyEmbed
          utmContent="page_communities_hub"
          title="Not sure which community fits?"
          subtitle="Book a neighborhood-strategy call — Dr. Duffy will map your budget and lifestyle to the right villages."
        />
      </div>
    </article>
  );
}
