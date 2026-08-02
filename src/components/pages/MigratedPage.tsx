import Link from 'next/link';
import { CalendlyEmbed } from '@/components/calendly/CalendlyEmbed';
import { GeoAreaPage } from '@/components/pages/GeoAreaPage';
import { RealScoutListings } from '@/components/realscout/RealScoutListings';
import { ServiceAreasSection } from '@/components/sections/ServiceAreasSection';
import { siteConfig } from '@/config/site.config';
import { getGeoArea } from '@/content/geo';
import { getPageContent } from '@/lib/page-content';

type MigratedPageProps = {
  slug: string;
};

export function MigratedPage({ slug }: MigratedPageProps) {
  const geoArea = getGeoArea(slug);
  if (geoArea) {
    return <GeoAreaPage area={geoArea} />;
  }

  const page = getPageContent(slug);
  const showListings =
    slug.includes('properties') ||
    slug.includes('listings') ||
    slug.startsWith('communities/') ||
    slug.startsWith('property-types/');

  return (
    <article className="section">
      <div className="container-premium relative z-10 py-12">
        <h1 className="font-display mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
          {page.heading}
        </h1>
        {page.lead && (
          <p className="mb-8 max-w-3xl text-xl leading-relaxed text-gray-600">{page.lead}</p>
        )}

        <div className="mb-10 flex flex-wrap gap-4">
          <a
            href={siteConfig.phoneTel}
            className="rounded-full bg-primary-600 px-6 py-3 font-semibold text-white no-underline hover:bg-primary-700"
          >
            Call {siteConfig.phone}
          </a>
          <Link
            href="/contact"
            className="rounded-full border border-primary-500 px-6 py-3 font-semibold text-primary-600 no-underline hover:bg-primary-50"
          >
            Send a message
          </Link>
          <Link
            href="/properties"
            className="rounded-full border border-gray-300 px-6 py-3 font-semibold text-gray-700 no-underline hover:bg-gray-50"
          >
            Search homes
          </Link>
        </div>

        {showListings && (
          <div className="mb-12">
            <RealScoutListings
              priceMin="400000"
              priceMax="900000"
              title="Featured Las Vegas listings"
              subtitle="Live MLS inventory from Dr. Janet Duffy"
            />
          </div>
        )}

        {page.sections.map((section) => (
          <section key={section.title} className="mb-10">
            <h2 className="font-display mb-4 text-2xl font-bold text-gray-900">{section.title}</h2>
            {section.paragraphs.map((p) => (
              <p key={p.slice(0, 40)} className="mb-4 leading-relaxed text-gray-700">
                {p}
              </p>
            ))}
          </section>
        ))}

        <ServiceAreasSection />

        <div className="mt-12">
          <CalendlyEmbed
            utmContent={`page_${slug.replace(/\//g, '_')}`}
            title="Questions about this topic?"
            subtitle="Book a time online — your appointment syncs to our CRM (no contact form required)."
          />
        </div>
      </div>
    </article>
  );
}
