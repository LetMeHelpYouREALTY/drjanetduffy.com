import Link from 'next/link';
import { siteConfig } from '@/config/site.config';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 bg-gray-900 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <h3 className="font-display mb-4 text-xl font-bold text-white">{siteConfig.name}</h3>
            <p className="mb-4 text-gray-400">Licensed REALTOR®</p>
            <p className="mb-6 text-sm text-gray-400">
              Your trusted Las Vegas real estate expert serving buyers, sellers, and investors.
            </p>
          </div>

          <div>
            <h3 className="font-display mb-4 text-lg font-bold text-white">Main</h3>
            <ul className="space-y-2 text-sm">
              {[
                ['/', 'Home'],
                ['/properties', 'Properties'],
                ['/about', 'About'],
                ['/services', 'Services'],
                ['/contact', 'Contact'],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-gray-400 no-underline hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display mb-4 text-lg font-bold text-white">Contact</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div>
                <p className="mb-1 font-semibold text-white">Phone</p>
                <a href={siteConfig.phoneTel} className="hover:text-white">
                  {siteConfig.phone}
                </a>
              </div>
              <div>
                <p className="mb-1 font-semibold text-white">Email</p>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                  {siteConfig.email}
                </a>
              </div>
              <div>
                <p className="mb-1 font-semibold text-white">Office</p>
                <p>{siteConfig.address.street}</p>
                <p>
                  {siteConfig.address.city}, {siteConfig.address.region}{' '}
                  {siteConfig.address.postalCode}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-400">
              © {year} {siteConfig.name}, REALTOR®. License {siteConfig.license}. All rights
              reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/privacy" className="text-gray-400 no-underline hover:text-white">
                Privacy
              </Link>
              <Link href="/terms" className="text-gray-400 no-underline hover:text-white">
                Terms
              </Link>
              <Link href="/sitemap" className="text-gray-400 no-underline hover:text-white">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
