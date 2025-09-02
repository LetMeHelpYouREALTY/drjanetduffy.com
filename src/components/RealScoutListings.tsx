'use client';

import { useEffect, useRef, useState } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'realscout-office-listings': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        'agent-encoded-id'?: string;
        'sort-order'?: string;
        'listing-status'?: string;
        'property-types'?: string;
      };
    }
  }
}

interface RealScoutListingsProps {
  className?: string;
}

const RealScoutListings: React.FC<RealScoutListingsProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Ensure the RealScout script is loaded
    const checkScript = () => {
      if (typeof window !== 'undefined' && window.customElements) {
        if (!window.customElements.get('realscout-office-listings')) {
          // Script not loaded yet, wait and try again
          setTimeout(checkScript, 100);
        } else {
          // Script is loaded, hide loading state after a short delay
          setTimeout(() => setIsLoading(false), 1000);
        }
      }
    };

    checkScript();

    // Set a timeout to hide loading state even if script doesn't load
    const timeout = setTimeout(() => {
      setIsLoading(false);
      setHasError(true);
    }, 10000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`w-full ${className}`}>
      <div className="container-max">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-vegas-deep-blue mb-4">
            Featured Las Vegas Properties
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the latest homes for sale in Las Vegas with our comprehensive property
            listings. From luxury estates to family homes, find your perfect match.
          </p>
        </div>

        {/* RealScout Listings Container */}
        <div
          ref={containerRef}
          className="realscout-container"
          style={
            {
              '--rs-listing-divider-color': 'rgb(101, 141, 172)',
              '--rs-primary-color': '#0A2540',
              '--rs-secondary-color': '#FFD700',
              '--rs-accent-color': '#3A8DDE',
              '--rs-text-color': '#1f2937',
              '--rs-background-color': '#ffffff',
              '--rs-border-color': '#e5e7eb',
              '--rs-hover-color': '#f3f4f6',
              '--rs-shadow': 'var(--shadow-lg)',
              '--rs-border-radius': '0.5rem',
              '--rs-font-family': 'Inter, system-ui, sans-serif',
            } as React.CSSProperties
          }
        >
          {isLoading && (
            <div className="realscout-loading">
              <div className="text-center">
                <div className="text-vegas-deep-blue text-lg font-semibold mb-2">
                  Loading Properties...
                </div>
                <div className="text-gray-600 text-sm">
                  Fetching the latest Las Vegas real estate listings
                </div>
              </div>
            </div>
          )}

          {hasError && !isLoading && (
            <div className="text-center py-12">
              <div className="text-vegas-deep-blue text-lg font-semibold mb-4">
                Properties Loading...
              </div>
              <p className="text-gray-600 mb-6">
                Our property listings are being updated. Please call for immediate assistance.
              </p>
              <a
                href="tel:702-222-1964"
                className="btn-phone"
              >
                Call 702-222-1964
              </a>
            </div>
          )}

          {!hasError && (
            <realscout-office-listings
              agent-encoded-id="QWdlbnQtMjI1MDUw"
              sort-order="STATUS_AND_SIGNIFICANT_CHANGE"
              listing-status="For Sale"
              property-types="SFR,MF,TC"
              style={{
                width: '100%',
                minHeight: '600px',
                display: 'block',
                opacity: isLoading ? 0 : 1,
                transition: 'opacity 0.3s ease-in-out',
              }}
            />
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <p className="text-lg text-gray-600 mb-4">
            Don't see what you're looking for? Let me help you find the perfect home.
          </p>
          <a
            href="tel:702-222-1964"
            className="btn-phone"
          >
            <span>Call Dr. Jan Duffy</span>
            <span className="font-mono ml-2">702-222-1964</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RealScoutListings;
