import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CalendlyEmbed } from '@/components/calendly/CalendlyEmbed';
import { siteConfig } from '@/config/site.config';
import { zipGuides } from '@/content/geo';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata({
  title: 'Las Vegas Zip Code Guides | 89138, 89135, 89052 & More | Dr. Janet Duffy',
  description:
    'Zip-code-level Las Vegas real estate guides from Dr. Janet Duffy, REALTOR®: Summerlin (89134–89144), Henderson hills (89052, 89044), the northwest (89149, 89131, 89166), and Lake Las Vegas (89011). Call (702) 766-7668.',
  path: 'las-vegas-zip-codes',
});

export default function ZipCodesHubPage() {
  return (
    <article className="container-premium py-12">
      <h1 className="font-display mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
        Las Vegas Zip-Code Home Guides
      </h1>
      <p className="mb-10 max-w-3xl text-xl leading-relaxed text-gray-600">
        Most home searches start with a zip code — and most zip codes hold two or three very
        different markets inside them. These guides break down what each Las Vegas-area zip
        actually contains, village by village. Questions? Call {siteConfig.name} at{' '}
        {siteConfig.phone}.
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {zipGuides.map((area) => (
          <Link
            key={area.path}
            href={`/${area.path}`}
            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white no-underline shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="relative h-40 overflow-hidden">
              <Image
                src={area.hero.src}
                alt={area.hero.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h2 className="mb-2 text-xl font-bold text-gray-900">{area.name}</h2>
              <p className="line-clamp-3 text-gray-600">{area.lead}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-14">
        <CalendlyEmbed
          utmContent="page_zip_codes_hub"
          title="Want zip-level market data?"
          subtitle="Book a call and Dr. Duffy will pull live, village-level numbers for the zips on your shortlist."
        />
      </div>
    </article>
  );
}
