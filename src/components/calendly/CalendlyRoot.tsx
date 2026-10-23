'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { buildCalendlyUrl } from '@/lib/calendly';

const BADGE_TEXT = 'Schedule a consultation';

/** Loads Calendly widget.js once site-wide + optional floating badge (FUB via Calendly native). */
export function CalendlyRoot() {
  const badgeUrl = buildCalendlyUrl('consultation', { utm_campaign: 'calendly_badge' });

  useEffect(() => {
    const init = () => {
      window.Calendly?.initBadgeWidget({
        url: badgeUrl,
        text: BADGE_TEXT,
        color: '#0284c7',
        textColor: '#ffffff',
        branding: true,
      });
    };
    if (window.Calendly) init();
    else window.addEventListener('load', init, { once: true });
  }, [badgeUrl]);

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== 'https://calendly.com' || e.data?.event !== 'calendly.event_scheduled') return;
      (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag?.('event', 'calendly_booked', {
        page_path: window.location.pathname,
      });
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  return (
    <>
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      <Script
        id="calendly-widget-js"
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
    </>
  );
}
