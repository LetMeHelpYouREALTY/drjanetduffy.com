import type { Metadata } from 'next';
import Link from 'next/link';
import { CalendlyEmbed } from '@/components/calendly/CalendlyEmbed';
import { RealScoutListings } from '@/components/realscout/RealScoutListings';
import { pageMetadata } from '@/lib/metadata';
import { siteConfig } from '@/config/site.config';
import { faqSchema, breadcrumbSchema, speakableSchema } from '@/lib/schema-helpers';

const homeTitle = 'Las Vegas Luxury & Relocation REALTOR | Dr. Janet Duffy';
const homeDescription =
  'Dr. Janet Duffy is a Las Vegas REALTOR® with 35+ years experience and $127M+ career sales, serving Summerlin, Henderson, Skye Canyon buyers, sellers, and investors. Call (702) 766-7668.';

export const metadata: Metadata = pageMetadata({
  title: homeTitle,
  description: homeDescription,
  path: '',
});

const faqs = [
  {
    q: 'Who is Dr. Janet Duffy?',
    a: 'Dr. Janet Duffy is a licensed Las Vegas REALTOR® (License S.0197614.LLC) with Berkshire Hathaway HomeServices Nevada Properties. With 35+ years of real estate experience and over $127 million in career sales, she specializes in luxury homes, relocation services, and investment properties across Las Vegas, Summerlin, Henderson, and Skye Canyon.',
  },
  {
    q: 'How quickly can we tour homes in Las Vegas?',
    a: 'Same-day and next-day showings are often available when you are pre-approved or paying cash. Dr. Duffy prioritizes your must-haves and schedules efficient property tours. In 2025, 78% of her buyer clients toured homes within 24 hours of their request.',
  },
  {
    q: 'Do you help with relocation from out of state?',
    a: 'Yes. Dr. Duffy specializes in executive and military relocations, providing neighborhood briefings, school overviews, temporary housing coordination, and virtual tours before you arrive in Las Vegas. Over 40% of her clients relocate from California, Arizona, and other states.',
  },
  {
    q: 'What should sellers do before listing?',
    a: 'Dr. Duffy provides a comprehensive market analysis reviewing comparable sales, prep priorities, and optimal timing. Professional staging and photography recommendations are tailored to your price point and community. Her listings average 12% above list price in competitive markets.',
  },
  {
    q: 'What areas does Dr. Janet Duffy serve?',
    a: 'Dr. Duffy serves all of Las Vegas Valley including Summerlin, Henderson, North Las Vegas, Skye Canyon, Inspirada, The Lakes, and surrounding communities. She specializes in luxury properties, 55+ active adult communities, and investment properties throughout Clark County.',
  },
];

export default function HomePage() {
  const schemas = [
    faqSchema(faqs),
    breadcrumbSchema([{ name: 'Home', path: '' }]),
    speakableSchema(['h1', '.direct-answer', '#faq']),
  ];

  return (
    <>
      {schemas.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-20">
        <div className="container-premium text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary-600">
            Las Vegas luxury & relocation
          </p>
          <h1 className="font-display mb-6 text-4xl font-bold text-gray-900 md:text-6xl">
            Dr. Janet Duffy - Las Vegas REALTOR® | 35+ Years Experience
          </h1>
          <div className="direct-answer mx-auto mb-6 max-w-3xl text-xl text-gray-900">
            <p className="mb-4">
              Dr. Janet Duffy is a licensed Las Vegas REALTOR® with over $127 million in career
              sales and 35+ years of experience serving buyers, sellers, and investors across Las
              Vegas, Summerlin, Henderson, and Skye Canyon.
            </p>
          </div>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600">
            Specializing in luxury homes, relocation services, 55+ communities, and investment
            properties. Licensed with Berkshire Hathaway HomeServices Nevada Properties (License{' '}
            {siteConfig.license}).
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
              className="rounded-full border border-primary-500 px-8 py-3 font-semibold text-primary-600 no-underline hover:bg-primary-50"
            >
              Search homes
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-gray-300 px-8 py-3 font-semibold text-gray-700 no-underline hover:bg-gray-50"
            >
              Contact
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

      <section id="faq" className="bg-gray-50 py-16">
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
