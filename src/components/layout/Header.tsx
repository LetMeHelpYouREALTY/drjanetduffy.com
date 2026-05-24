'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/config/site.config';

const navItems = [
  { href: '/get-started', label: 'Get Started' },
  { href: '/properties', label: 'Properties' },
  { href: '/home-value', label: 'Home Value' },
  { href: '/rentals', label: 'Rentals' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 py-3">
          <a
            href={siteConfig.phoneTel}
            className="flex flex-shrink-0 items-center rounded no-underline focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            aria-label={`Call ${siteConfig.name}`}
          >
            <div className="leading-tight">
              <span className="block text-lg font-bold text-gray-900 sm:text-xl">
                {siteConfig.phone}
              </span>
              <span className="block text-xs tracking-wide text-gray-500 sm:text-sm">
                Call Now
              </span>
            </div>
          </a>

          <nav className="flex flex-1 items-center justify-center" aria-label="Main navigation">
            <div className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4 md:gap-x-6 lg:gap-x-8">
              {navItems.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-md px-2 py-2 text-sm font-medium no-underline transition-colors sm:px-3 sm:text-base ${
                      active
                        ? 'bg-primary-50 font-semibold text-primary-600'
                        : 'text-gray-700 hover:text-primary-600'
                    }`}
                    aria-current={active ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>

          <div className="flex flex-shrink-0 items-center gap-3">
            <a
              href={`mailto:${siteConfig.email}`}
              className="hidden text-sm font-medium text-gray-600 no-underline transition-colors hover:text-primary-600 sm:flex"
            >
              {siteConfig.email}
            </a>
            <a
              href={siteConfig.phoneTel}
              className="inline-flex items-center gap-2 rounded-full border border-primary-500 px-3 py-2 text-xs font-semibold text-primary-600 no-underline transition-colors hover:bg-primary-50 sm:px-4 sm:text-sm"
            >
              <span>Call</span>
              <span className="hidden sm:inline">{siteConfig.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
