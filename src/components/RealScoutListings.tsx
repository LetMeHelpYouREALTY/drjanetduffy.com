'use client';

import { useEffect, useRef } from 'react';

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

  useEffect(() => {
    // Ensure the RealScout script is loaded
    const checkScript = () => {
      if (typeof window !== 'undefined' && window.customElements) {
        if (!window.customElements.get('realscout-office-listings')) {
          // Script not loaded yet, wait and try again
          setTimeout(checkScript, 100);
        }
      }
    };

    checkScript();
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
          className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-200"
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
              '--rs-shadow':
                '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              '--rs-border-radius': '0.5rem',
              '--rs-font-family': 'Inter, system-ui, sans-serif',
            } as React.CSSProperties
          }
        >
          <realscout-office-listings
            agent-encoded-id="QWdlbnQtMjI1MDUw"
            sort-order="STATUS_AND_SIGNIFICANT_CHANGE"
            listing-status="For Sale"
            property-types="SFR,MF,TC"
            style={{
              width: '100%',
              minHeight: '600px',
              display: 'block',
            }}
          />
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <p className="text-lg text-gray-600 mb-4">
            Don't see what you're looking for? Let me help you find the perfect home.
          </p>
          <a
            href="tel:702-222-1964"
            className="inline-flex items-center space-x-2 bg-vegas-gold hover:bg-vegas-gold-dark text-vegas-deep-blue px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span>Call Dr. Jan Duffy</span>
            <span className="font-mono">702-222-1964</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RealScoutListings;
