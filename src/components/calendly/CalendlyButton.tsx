'use client';

import { buildCalendlyUrl, type CalendlyEvent } from '@/lib/calendly';

type CalendlyButtonProps = {
  children: React.ReactNode;
  event?: CalendlyEvent;
  utmContent?: string;
  className?: string;
};

export function CalendlyButton({
  children,
  event = 'appointment',
  utmContent,
  className = 'inline-flex items-center justify-center rounded-full bg-primary-600 px-6 py-3 font-semibold text-white no-underline hover:bg-primary-700',
}: CalendlyButtonProps) {
  const url = buildCalendlyUrl(event, { utm_content: utmContent });

  function open(e: React.MouseEvent) {
    e.preventDefault();
    window.Calendly?.initPopupWidget({ url });
  }

  return (
    <a href={url} onClick={open} className={className}>
      {children}
    </a>
  );
}
