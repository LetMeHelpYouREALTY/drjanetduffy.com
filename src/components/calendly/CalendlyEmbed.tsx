'use client';

import { useEffect, useRef } from 'react';
import { buildCalendlyUrl, type CalendlyEvent } from '@/lib/calendly';

type CalendlyEmbedProps = {
  event?: CalendlyEvent;
  utmContent?: string;
  minHeight?: string;
  title?: string;
  subtitle?: string;
};

export function CalendlyEmbed({
  event = 'appointment',
  utmContent,
  minHeight = '700px',
  title = 'Book your consultation',
  subtitle = 'Pick a time that works for you — appointments sync to our CRM automatically.',
}: CalendlyEmbedProps) {
  const parentRef = useRef<HTMLDivElement>(null);
  const url = buildCalendlyUrl(event, { utm_content: utmContent });

  useEffect(() => {
    const parent = parentRef.current;
    if (!parent) return;

    const mount = () => {
      if (!window.Calendly) return;
      parent.innerHTML = '';
      const el = document.createElement('div');
      el.className = 'calendly-inline-widget';
      el.style.minWidth = '320px';
      el.style.height = minHeight;
      el.style.width = '100%';
      parent.appendChild(el);
      window.Calendly.initInlineWidget({ url, parentElement: el });
    };

    if (window.Calendly) mount();
    else {
      const id = window.setInterval(() => {
        if (window.Calendly) {
          window.clearInterval(id);
          mount();
        }
      }, 100);
      return () => window.clearInterval(id);
    }
  }, [url, minHeight]);

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xl md:p-8">
      <div className="mb-6 text-center">
        <h2 className="font-display text-2xl font-bold text-gray-900 md:text-3xl">{title}</h2>
        <p className="mt-2 text-gray-600">{subtitle}</p>
      </div>
      <div ref={parentRef} style={{ minHeight, width: '100%' }} />
    </div>
  );
}
