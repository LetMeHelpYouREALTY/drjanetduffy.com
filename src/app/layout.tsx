import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { CalendlyRoot } from '@/components/calendly/CalendlyRoot';
import { GlobalListingsSection } from '@/components/realscout/GlobalListingsSection';
import { RealScoutImageConstraints } from '@/components/realscout/RealScoutImageConstraints';
import { ScheduleCTA } from '@/components/sections/ScheduleCTA';
import { siteConfig } from '@/config/site.config';
import { rootLayoutMetadata } from '@/lib/metadata';
import { globalSchemaGraph } from '@/lib/schema';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata: Metadata = rootLayoutMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://widgets.realscout.com" />
        <link rel="preconnect" href="https://em.realscout.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchemaGraph) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} min-h-screen bg-white antialiased`}>
        <Header />
        <Breadcrumbs />
        <main>{children}</main>
        <ScheduleCTA />
        <GlobalListingsSection />
        <Footer />
        <CalendlyRoot />
        <RealScoutImageConstraints />

        <Script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          strategy="afterInteractive"
        />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-CPD9RR8GTX" strategy="lazyOnload" />
        <Script id="ga-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${siteConfig.googleAnalyticsId}');
          `}
        </Script>
        <Analytics />
      </body>
    </html>
  );
}
