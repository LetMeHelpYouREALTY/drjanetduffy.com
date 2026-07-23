'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Header() {
  const [realScoutReady, setRealScoutReady] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Wait for RealScout to load
      if (
        window.customElements &&
        (customElements.get('realscout-office-listings') ||
          customElements.get('realscout-advanced-search') ||
          customElements.get('realscout-home-value') ||
          customElements.get('realscout-simple-search') ||
          customElements.get('realscout-your-listings'))
      ) {
        setRealScoutReady(true);
      } else {
        const checkInterval = setInterval(() => {
          if (
            window.customElements &&
            (customElements.get('realscout-office-listings') ||
              customElements.get('realscout-advanced-search') ||
              customElements.get('realscout-home-value') ||
              customElements.get('realscout-simple-search') ||
              customElements.get('realscout-your-listings'))
          ) {
            clearInterval(checkInterval);
            setRealScoutReady(true);
          }
        }, 100);

        setTimeout(() => {
          clearInterval(checkInterval);
          setRealScoutReady(true);
        }, 5000);
      }
    }
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/properties', label: 'Properties' },
    { href: '/home-value', label: 'Home Value' },
    { href: '/rentals', label: 'Rentals' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar with Search */}
      <div className="bg-primary-600 text-white py-3">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {realScoutReady ? (
              <div dangerouslySetInnerHTML={{
                __html: '<realscout-simple-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-simple-search>'
              }} />
            ) : (
              <div className="animate-pulse">
                <div className="h-12 bg-primary-500 rounded"></div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">JD</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Dr. Janet Duffy</h1>
              <p className="text-sm text-gray-600">REALTOR<sup>®</sup></p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-primary-600'
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+17022221964"
              className="bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              702-222-1964
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-colors ${
                    pathname === link.href
                      ? 'text-primary-600'
                      : 'text-gray-700 hover:text-primary-600'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+17022221964"
                className="bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                702-222-1964
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
