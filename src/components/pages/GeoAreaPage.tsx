import Image from 'next/image';
import Link from 'next/link';
import { CalendlyEmbed } from '@/components/calendly/CalendlyEmbed';
import { RealScoutListings } from '@/components/realscout/RealScoutListings';
import { siteConfig } from '@/config/site.config';
import type { GeoArea } from '@/content/geo';

type GeoAreaPageProps = {
  area: GeoArea;
};

/** Hyperlocal community / zip-code page: hero, facts, listings, map, FAQs, schema. */
export function GeoAreaPage({ area }: GeoAreaPageProps) {
  const pageUrl = `${siteConfig.url}/${area.path}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(area.mapQuery)}`;

  const schemaGraph = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: area.title,
      description: area.description,
      primaryImageOfPage: `${siteConfig.url}${area.hero.src}`,
      about: {
        '@type': 'Place',
        name: area.name,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Las Vegas',
          addressRegion: 'NV',
          postalCode: area.zips[0],
          addressCountry: 'US',
        },
      },
      provider: { '@id': `${siteConfig.url}#agent` },
    },
    ...(area.faqs.length > 0
      ? [
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: area.faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          },
        ]
      : []),
  ];

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />

      <div className="relative">
        <Image
          src={area.hero.src}
          alt={area.hero.alt}
          width={1600}
          height={900}
          priority
          className="h-64 w-full object-cover md:h-96"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="container-premium pb-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-white/90">
              {area.zips.map((z) => `Zip ${z}`).join(' · ')}
            </p>
            <h1 className="font-display text-3xl font-bold text-white md:text-5xl">
              {area.heading}
            </h1>
          </div>
        </div>
      </div>

      <div className="container-premium py-10">
        <p className="mb-8 max-w-3xl text-xl leading-relaxed text-gray-600">{area.lead}</p>

        <div className="mb-10 flex flex-wrap gap-4">
          <a
            href={siteConfig.phoneTel}
            className="rounded-full bg-primary-600 px-6 py-3 font-semibold text-white no-underline hover:bg-primary-700"
          >
            Call {siteConfig.phone}
          </a>
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-primary-500 px-6 py-3 font-semibold text-primary-600 no-underline hover:bg-primary-50"
          >
            Get directions
          </a>
          <Link
            href="/properties"
            className="rounded-full border border-gray-300 px-6 py-3 font-semibold text-gray-700 no-underline hover:bg-gray-50"
          >
            Search {area.name} homes
          </Link>
        </div>

        <section className="mb-12" aria-label={`${area.name} quick facts`}>
          <h2 className="font-display mb-4 text-2xl font-bold text-gray-900">
            {area.name} at a glance
          </h2>
          <dl className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {area.facts.map((fact) => (
              <div key={fact.label} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <dt className="text-sm font-semibold uppercase tracking-wide text-primary-600">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-gray-800">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <div className="mb-12">
          <RealScoutListings
            priceMin="400000"
            title={`Homes for sale near ${area.name}`}
            subtitle="Live MLS inventory from Dr. Janet Duffy — updated continuously"
          />
        </div>

        {area.sections.map((section) => (
          <section key={section.title} className="mb-10 max-w-4xl">
            <h2 className="font-display mb-4 text-2xl font-bold text-gray-900">{section.title}</h2>
            {section.paragraphs.map((p) => (
              <p key={p.slice(0, 40)} className="mb-4 leading-relaxed text-gray-700">
                {p}
              </p>
            ))}
          </section>
        ))}

        <section className="mb-12 rounded-2xl bg-gray-50 p-6 md:p-10">
          <h2 className="font-display mb-2 text-2xl font-bold text-gray-900">
            REALTOR® services in {area.name}
          </h2>
          <p className="mb-6 text-gray-600">
            {siteConfig.name}, {siteConfig.brokerage} · License {siteConfig.license} ·{' '}
            {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.region}{' '}
            {siteConfig.address.postalCode} · {siteConfig.phone}
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {area.services.map((service) => (
              <div key={service.title}>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">{service.title}</h3>
                {service.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)} className="mb-3 leading-relaxed text-gray-700">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12" aria-label={`Map of ${area.name}`}>
          <h2 className="font-display mb-4 text-2xl font-bold text-gray-900">
            Where {area.name} sits in the valley
          </h2>
          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(area.mapQuery)}&output=embed`}
              title={`Map of ${area.name}, Las Vegas area`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-80 w-full border-0"
            />
          </div>
        </section>

        {area.faqs.length > 0 && (
          <section className="mb-12 max-w-4xl">
            <h2 className="font-display mb-6 text-2xl font-bold text-gray-900">
              {area.name} FAQs
            </h2>
            <div className="space-y-4">
              {area.faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <summary className="cursor-pointer font-semibold text-gray-900">{faq.q}</summary>
                  <p className="mt-3 text-gray-600">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        <section className="mb-12" aria-label="Nearby areas">
          <h2 className="font-display mb-4 text-2xl font-bold text-gray-900">
            Keep exploring nearby
          </h2>
          <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {area.nearby.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-xl border border-gray-200 bg-white px-5 py-4 font-medium text-primary-700 no-underline shadow-sm hover:border-primary-300 hover:bg-primary-50"
                >
                  {link.label} →
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-12">
          <CalendlyEmbed
            utmContent={`page_${area.path.replace(/\//g, '_')}`}
            title={`Talk with Dr. Duffy about ${area.name}`}
            subtitle="Book a time online — your appointment syncs to our CRM (no contact form required)."
          />
        </div>
      </div>
    </article>
  );
}
