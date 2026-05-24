import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata({
  title: 'Page not found',
  description: 'The page you requested could not be found.',
  path: '404',
  noindex: true,
});

export default function NotFound() {
  return (
    <div className="container-premium py-24 text-center">
      <h1 className="font-display mb-4 text-4xl font-bold text-gray-900">Page not found</h1>
      <p className="mb-8 text-gray-600">That URL may have moved. Try search or our main pages.</p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="rounded-full bg-primary-600 px-6 py-3 font-semibold text-white no-underline hover:bg-primary-700"
        >
          Home
        </Link>
        <Link
          href="/properties"
          className="rounded-full border border-primary-500 px-6 py-3 font-semibold text-primary-600 no-underline hover:bg-primary-50"
        >
          Search homes
        </Link>
      </div>
    </div>
  );
}
