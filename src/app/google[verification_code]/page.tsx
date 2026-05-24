import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata({
  title: 'Site verification',
  description: 'Internal verification helper — not indexed.',
  path: 'google[verification_code]',
  noindex: true,
});

/**
 * Legacy Svelte verification URL. GSC HTML-tag verification uses
 * NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION on the root layout instead.
 */
export default function GoogleVerificationLegacyPage() {
  return (
    <div className="container-premium py-16 text-center">
      <h1 className="font-display mb-4 text-2xl font-bold text-gray-900">Search Console verification</h1>
      <p className="mx-auto mb-6 max-w-xl text-gray-600">
        Add your HTML tag code to{' '}
        <code className="rounded bg-gray-100 px-1">NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION</code> in
        Vercel, then verify the homepage in Google Search Console.
      </p>
      <Link href="/" className="font-semibold text-primary-600 no-underline hover:underline">
        Return home
      </Link>
    </div>
  );
}
