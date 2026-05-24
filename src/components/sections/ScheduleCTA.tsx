import { CalendlyButton } from '@/components/calendly/CalendlyButton';
import { siteConfig } from '@/config/site.config';

/** Global CTA band — phone + Calendly (no forms). */
export function ScheduleCTA() {
  return (
    <section className="section bg-gradient-to-r from-primary-600 via-primary-500 to-primary-700 py-16 text-white">
      <div className="container-premium mx-auto max-w-4xl space-y-6 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">
          Ready to explore Las Vegas homes with a local expert?
        </h2>
        <p className="text-lg leading-relaxed text-white/90">
          Search listings with RealScout, then book a consultation online. Your appointment is
          recorded in our CRM so we can follow up quickly.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <CalendlyButton utmContent="global_cta" className="rounded-full bg-white px-8 py-3 font-semibold text-primary-700 no-underline hover:bg-primary-50">
            Schedule online
          </CalendlyButton>
          <a
            href={siteConfig.phoneTel}
            className="rounded-full border border-white/80 px-8 py-3 font-semibold text-white no-underline hover:bg-white/10"
          >
            Call {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
