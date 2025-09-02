import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dr. Jan Duffy | Las Vegas Real Estate Expert 🎰 | 702-222-1964',
  description:
    'Las Vegas real estate expert Dr. Jan Duffy with 20+ years experience. Find your dream home in Summerlin, Henderson, Green Valley. Call 702-222-1964 for expert guidance.',
  keywords: [
    'Las Vegas real estate',
    'Las Vegas homes for sale',
    'Las Vegas real estate agent',
    'Dr. Jan Duffy',
    'Las Vegas property',
    'Las Vegas realtor',
    'Las Vegas housing market',
    'Las Vegas neighborhoods',
    'Las Vegas home buying',
    'Las Vegas home selling',
    'Summerlin homes',
    'Henderson real estate',
    'Green Valley properties',
    'Anthem Las Vegas',
    'Southern Highlands homes',
    'Las Vegas MLS',
    'Las Vegas property values',
    'Las Vegas real estate market',
    'Las Vegas home prices',
    'Las Vegas investment properties',
  ],
  authors: [{ name: 'Dr. Jan Duffy' }],
  creator: 'Dr. Jan Duffy',
  publisher: 'Dr. Jan Duffy Real Estate',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://drjanetduffy.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Dr. Jan Duffy | Las Vegas Real Estate Expert 🎰 | 702-222-1964',
    description:
      'Las Vegas real estate expert Dr. Jan Duffy with 20+ years experience. Find your dream home in Summerlin, Henderson, Green Valley. Call 702-222-1964.',
    url: 'https://drjanetduffy.com',
    siteName: 'Dr. Jan Duffy Real Estate',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Jan Duffy - Las Vegas Real Estate Expert with 20+ years experience',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Jan Duffy | Las Vegas Real Estate Expert 🎰 | 702-222-1964',
    description:
      'Las Vegas real estate expert Dr. Jan Duffy with 20+ years experience. Find your dream home in Summerlin, Henderson, Green Valley.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#FFD700" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'RealEstateAgent',
              name: 'Dr. Jan Duffy',
              description: 'Las Vegas Real Estate Expert with 20+ years of experience',
              url: 'https://drjanetduffy.com',
              telephone: '+1-702-222-1964',
              email: 'jan@drjanetduffy.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Las Vegas',
                addressRegion: 'NV',
                addressCountry: 'US',
              },
              areaServed: {
                '@type': 'City',
                name: 'Las Vegas, NV',
              },
              serviceType: 'Real Estate Services',
              image: 'https://drjanetduffy.com/headshot.jpg',
              sameAs: [
                'https://www.facebook.com/drjanetduffy',
                'https://www.linkedin.com/in/drjanetduffy',
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* RealScout Script */}
        <Script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />

        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
