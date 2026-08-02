import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CalendlyEmbed } from '@/components/calendly/CalendlyEmbed';
import { RealScoutListings } from '@/components/realscout/RealScoutListings';
import { pageMetadata } from '@/lib/metadata';
import { siteConfig } from '@/config/site.config';

const homeTitle = 'Las Vegas Luxury & Relocation REALTOR | Dr. Janet Duffy';
const homeDescription =
  'Dr. Janet Duffy — Las Vegas REALTOR® serving Summerlin, Henderson, Skye Canyon, and the valley. Buy, sell, or relocate. Call (702) 766-7668.';

export const metadata: Metadata = pageMetadata({
  title: homeTitle,
  description: homeDescription,
  path: '',
});

const featuredCommunities = [
  {
    href: '/communities/summerlin',
    name: 'Summerlin',
    blurb: 'The 22,500-acre master plan against Red Rock Canyon — zips 89134–89145.',
    image: '/images/communities/summerlin.jpg',
    alt: 'Desert-modern Summerlin homes with the Red Rock Canyon escarpment behind',
  },
  {
    href: '/communities/henderson',
    name: 'Henderson',
    blurb: 'Green Valley, Inspirada, Anthem, Lake Las Vegas — Nevada’s second-largest city.',
    image: '/images/communities/henderson.jpg',
    alt: 'Hillside Henderson homes overlooking the Las Vegas valley at dusk',
  },
  {
    href: '/communities/skye-canyon',
    name: 'Skye Canyon',
    blurb: 'New construction at the foot of the Spring Mountains in zip 89166.',
    image: '/images/communities/skye-canyon.jpg',
    alt: 'New Skye Canyon homes with the Spring Mountains on the horizon',
  },
  {
    href: '/communities/the-ridges',
    name: 'The Ridges',
    blurb: 'Summerlin’s premier guard-gated estates along Bear’s Best (89135).',
    image: '/images/communities/the-ridges.jpg',
    alt: 'Modern luxury estate at dusk in The Ridges, Summerlin',
  },
  {
    href: '/communities/lake-las-vegas',
    name: 'Lake Las Vegas',
    blurb: 'The valley’s only true waterfront — 320 acres of lake in Henderson 89011.',
    image: '/images/communities/lake-las-vegas.jpg',
    alt: 'Mediterranean-style village and marina at Lake Las Vegas',
  },
  {
    href: '/communities/sun-city-summerlin',
    name: 'Sun City Summerlin',
    blurb: 'The flagship Del Webb 55+ community — three courses, four rec centers (89134).',
    image: '/images/communities/sun-city-summerlin.jpg',
    alt: 'Single-story homes and golf in Sun City Summerlin',
  },
];

const faqs = [
  {
    q: 'How quickly can we tour homes in Las Vegas?',
    a: 'Same-day and next-day showings are often available when you are pre-approved or paying cash. Share your must-haves and we will prioritize the best matches.',
  },
  {
    q: 'Do you help with relocation from out of state?',
    a: 'Yes. Executive and military relocations include neighborhood briefings, school overviews, temporary housing coordination, and virtual tours before you fly in.',
  },
  {
    q: 'What should sellers do before listing?',
    a: 'We review comparable sales, prep priorities, and timing. Staging and photography recommendations are tailored to your price point and community.',
  },
];

export default function HomePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="relative overflow-hidden py-24 md:py-32">
        <Image
          src="/images/las-vegas-valley.jpg"
          alt="Las Vegas valley at golden hour, from the western foothills toward the Strip skyline"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="container-premium relative z-10 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/90">
            Las Vegas luxury & relocation
          </p>
          <h1 className="font-display mb-6 text-4xl font-bold text-white md:text-6xl">
            Your Las Vegas REALTOR® for buyers, sellers & investors
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-white/90">
            Dr. Janet Duffy guides you through Summerlin, Henderson, Skye Canyon, and valley-wide
            moves with concierge-level service. License {siteConfig.license}.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={siteConfig.phoneTel}
              className="rounded-full bg-primary-600 px-8 py-3 font-semibold text-white no-underline hover:bg-primary-700"
            >
              Call {siteConfig.phone}
            </a>
            <Link
              href="/properties"
              className="rounded-full border border-white/80 px-8 py-3 font-semibold text-white no-underline hover:bg-white/10"
            >
              Search homes
            </Link>
            <Link
              href="/communities"
              className="rounded-full border border-white/80 px-8 py-3 font-semibold text-white no-underline hover:bg-white/10"
            >
              Explore communities
            </Link>
          </div>
        </div>
      </section>

      <section id="featured-properties" className="container-premium py-16">
        <RealScoutListings
          priceMin="500000"
          priceMax="750000"
          title="Featured Las Vegas homes"
          subtitle="Live MLS listings — updated continuously"
        />
      </section>

      <section id="communities" className="bg-gray-50 py-16">
        <div className="container-premium">
          <h2 className="font-display mb-3 text-center text-3xl font-bold text-gray-900">
            Hyperlocal guides to the valley’s best communities
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-lg text-gray-600">
            Zip codes, parks, golf, commutes, and what actually drives value — village by village.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredCommunities.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white no-underline shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={c.image}
                    alt={c.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="mb-1 text-xl font-bold text-gray-900">{c.name}</h3>
                  <p className="text-sm text-gray-600">{c.blurb}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/communities"
              className="inline-block rounded-full border border-primary-500 px-8 py-3 font-semibold text-primary-600 no-underline hover:bg-primary-50"
            >
              All 21 community guides
            </Link>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16">
        <div className="container-premium">
          <h2 className="font-display mb-8 text-center text-3xl font-bold text-gray-900">
            Buyer & seller FAQs
          </h2>
          <div className="mx-auto max-w-3xl space-y-6">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <summary className="cursor-pointer font-semibold text-gray-900">{f.q}</summary>
                <p className="mt-3 text-gray-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="container-premium py-16">
        <CalendlyEmbed utmContent="homepage" />
      </section>
    </>
  );
}
