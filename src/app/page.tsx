import type { Metadata } from 'next';
import Link from 'next/link';
import { CalendlyEmbed } from '@/components/calendly/CalendlyEmbed';
import { RealScoutListings } from '@/components/realscout/RealScoutListings';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Las Vegas Luxury & Relocation REALTOR | Dr. Janet Duffy',
  description:
    'Dr. Janet Duffy — Las Vegas REALTOR® serving Summerlin, Henderson, Skye Canyon, and the valley. Buy, sell, or relocate. Call (702) 766-7668.',
  alternates: { canonical: siteConfig.url },
};

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

      <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-20">
        <div className="container-premium text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary-600">
            Las Vegas luxury & relocation
          </p>
          <h1 className="font-display mb-6 text-4xl font-bold text-gray-900 md:text-6xl">
            Your Las Vegas REALTOR® for buyers, sellers & investors
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-600">
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
