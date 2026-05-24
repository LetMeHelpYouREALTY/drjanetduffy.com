'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function labelFromSegment(segment: string): string {
  return segment
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

export function Breadcrumbs() {
  const pathname = usePathname();
  if (!pathname || pathname === '/') return null;

  const segments = pathname.split('/').filter(Boolean);
  const crumbs = segments.map((seg, i) => ({
    href: `/${segments.slice(0, i + 1).join('/')}`,
    label: labelFromSegment(seg),
  }));

  return (
    <nav aria-label="Breadcrumb" className="border-b border-gray-100 bg-gray-50/80">
      <div className="container mx-auto px-4 py-2 text-sm">
        <ol className="flex flex-wrap items-center gap-1 text-gray-600">
          <li>
            <Link href="/" className="text-primary-600 no-underline hover:underline">
              Home
            </Link>
          </li>
          {crumbs.map((crumb, i) => (
            <li key={crumb.href} className="flex items-center gap-1">
              <span aria-hidden>/</span>
              {i === crumbs.length - 1 ? (
                <span className="font-medium text-gray-900" aria-current="page">
                  {crumb.label}
                </span>
              ) : (
                <Link href={crumb.href} className="text-primary-600 no-underline hover:underline">
                  {crumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
