import { siteConfig } from '@/config/site.config';

export type CalendlyEvent = 'appointment' | 'consultation' | 'seller' | 'buyer';

const defaults: Record<CalendlyEvent, string> = {
  appointment:
    process.env.NEXT_PUBLIC_CALENDLY_APPOINTMENT_URL ??
    'https://calendly.com/drjanduffy/appointment',
  consultation:
    process.env.NEXT_PUBLIC_CALENDLY_CONSULTATION_URL ??
    'https://calendly.com/drjanduffy/appointment',
  seller:
    process.env.NEXT_PUBLIC_CALENDLY_SELLER_URL ??
    'https://calendly.com/drjanduffy/listing-consultation',
  buyer:
    process.env.NEXT_PUBLIC_CALENDLY_BUYER_URL ??
    'https://calendly.com/drjanduffy/buyer-consultation-30-min',
};

const SELLER_SLUGS = ['home-value', 'selling-guide', 'past-sales'];
const BUYER_SLUGS = ['buying-guide', 'first-time-buyers', 'properties', 'listings-list', 'listings-embedded', 'mortgage-calculator', 'relocation'];

/** Pick the Calendly event that matches a page's intent (seller vs buyer vs general). */
export function eventForSlug(slug: string): CalendlyEvent {
  const root = slug.split('/')[0];
  if (SELLER_SLUGS.includes(root)) return 'seller';
  if (BUYER_SLUGS.includes(root)) return 'buyer';
  return 'appointment';
}

/** Calendly URL with UTM + branding params for FUB attribution */
export function buildCalendlyUrl(
  event: CalendlyEvent = 'appointment',
  overrides?: {
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_content?: string;
  },
): string {
  const base = defaults[event];
  const url = new URL(base);
  url.searchParams.set('hide_gdpr_banner', '1');
  url.searchParams.set('primary_color', '0284c7');
  url.searchParams.set(
    'utm_source',
    overrides?.utm_source ?? siteConfig.url.replace(/^https?:\/\/(www\.)?/, ''),
  );
  url.searchParams.set('utm_medium', overrides?.utm_medium ?? 'website');
  url.searchParams.set(
    'utm_campaign',
    overrides?.utm_campaign ?? 'calendly_embed',
  );
  if (overrides?.utm_content) {
    url.searchParams.set('utm_content', overrides.utm_content);
  }
  return url.toString();
}

export function getCalendlyDefaults() {
  return {
    appointment: buildCalendlyUrl('appointment'),
    consultation: buildCalendlyUrl('consultation', { utm_campaign: 'calendly_badge' }),
  };
}
