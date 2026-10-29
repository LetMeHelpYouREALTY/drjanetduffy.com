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
  // Apex → www redirects live in vercel.json (308 at the edge). Do not duplicate here —
  // double redirects caused GSC "Redirect error" (307 chains on non-www URLs).
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
