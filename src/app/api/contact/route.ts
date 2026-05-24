import { NextResponse } from 'next/server';
import { getCalendlyDefaults } from '@/lib/calendly';

/** Lead capture is Calendly + RealScout → FUB — HTML forms are disabled. */
export async function POST() {
  const { appointment } = getCalendlyDefaults();
  return NextResponse.json(
    {
      error: 'Contact forms are disabled. Please schedule via Calendly or search listings on RealScout.',
      calendlyUrl: appointment,
    },
    { status: 410 },
  );
}
