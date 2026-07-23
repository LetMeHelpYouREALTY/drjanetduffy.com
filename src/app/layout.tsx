import type { Metadata } from 'next';
import '@fontsource/inter';
import '@fontsource/playfair-display';
import '../globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://drjanduffy.com'),
  title: {
    default: 'Dr. Janet Duffy, REALTOR® | West Summerlin Luxury Real Estate Expert',
    template: '%s | Dr. Janet Duffy REALTOR®'
  },
  description: 'West Summerlin\'s trusted luxury real estate expert. 15+ years experience, $50M+ in sales. Specializing in 89138, 89144, 89135.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Global Schema.org for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Dr. Janet Duffy - Berkshire Hathaway Nevada Properties',
              alternateName: 'Dr. Jan Duffy REALTOR',
              url: 'https://drjanduffy.com',
              logo: 'https://drjanduffy.com/favicon.png',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-702-222-1964',
                contactType: 'Customer Service',
                email: 'drduffy@bhhsnv.com',
                areaServed: 'US',
                availableLanguage: ['English']
              },
              sameAs: ['https://drjanduffy.com'],
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Las Vegas',
                addressRegion: 'NV',
                addressCountry: 'US'
              }
            })
          }}
        />
        {/* Global WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Dr. Janet Duffy - West Summerlin Real Estate',
              url: 'https://drjanduffy.com',
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://drjanduffy.com/properties?search={search_term_string}'
                },
                'query-input': 'required name=search_term_string'
              }
            })
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
