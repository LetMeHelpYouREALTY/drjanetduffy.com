import type { Metadata } from 'next';
import { CalendlyEmbed } from '@/components/calendly/CalendlyEmbed';
import { CalendlyButton } from '@/components/calendly/CalendlyButton';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Contact Las Vegas REALTOR | Dr. Janet Duffy',
  description: `Schedule a consultation with Dr. Janet Duffy or call ${siteConfig.phone}. Calendly bookings sync to our CRM.`,
  alternates: { canonical: `${siteConfig.url}/contact` },
};

export default function ContactPage() {
  return (
    <section className="section py-16">
      <div className="container-premium">
        <h1 className="font-display mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
          Contact your Las Vegas REALTOR®
        </h1>
        <p className="mb-6 max-w-3xl text-lg text-gray-600">
          Book online below (syncs to our CRM) or reach us directly. We do not use contact forms —
          scheduling ensures your request is tracked and answered quickly.
        </p>

        <div className="mb-10 flex flex-wrap gap-4">
          <CalendlyButton utmContent="contact_hero">Book a consultation</CalendlyButton>
          <a
            href={siteConfig.phoneTel}
            className="rounded-full border border-primary-500 px-6 py-3 font-semibold text-primary-600 no-underline hover:bg-primary-50"
          >
            Call {siteConfig.phone}
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="rounded-full border border-gray-300 px-6 py-3 font-semibold text-gray-700 no-underline hover:bg-gray-50"
          >
            {siteConfig.email}
          </a>
        </div>

        <p className="mb-8 text-sm text-gray-500">
          Office: {siteConfig.address.street}, {siteConfig.address.city},{' '}
          {siteConfig.address.region} {siteConfig.address.postalCode}
        </p>

        <CalendlyEmbed
          utmContent="contact_page"
          title="Schedule your consultation"
          subtitle="Choose a time below. Property search activity from RealScout and your booking both flow into Follow Up Boss."
        />
      </div>
    </section>
  );
}
