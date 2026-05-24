import type { NextConfig } from 'next';

const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://widgets.realscout.com https://em.realscout.com https://assets.calendly.com",
  "connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://widgets.realscout.com https://em.realscout.com https://www.realscout.com https://calendly.com",
  "img-src 'self' data: https: blob:",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://assets.calendly.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  "frame-src 'self' https://www.google.com https://maps.google.com https://calendly.com https://assets.calendly.com",
].join('; ');

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'drjanetduffy.com' }],
        destination: 'https://www.drjanetduffy.com/:path*',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Content-Security-Policy', value: csp },
        ],
      },
    ];
  },
};

export default nextConfig;
