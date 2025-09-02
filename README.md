# Dr. Jan Duffy - Las Vegas Real Estate Expert

A modern, professional Next.js website for Dr. Jan Duffy, Las Vegas Real Estate Expert.

## Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** with Vegas-inspired design
- **RealScout Integration** for property listings
- **Mobile-first responsive design**
- **SEO optimized** for Las Vegas real estate
- **Fast loading times** and Core Web Vitals optimization
- **Accessibility compliant**

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)
- React Hook Form
- Zod (validation)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run Biome linter
- `npm run lint:fix` - Fix linting issues
- `npm run format` - Format code with Biome
- `npm run check` - Run full Biome check
- `npm run type-check` - Run TypeScript type checking

## RealScout Integration

The website features RealScout web components for displaying property listings:

- Agent ID: `QWdlbnQtMjI1MDUw`
- Custom styling with Vegas-inspired colors
- Responsive design for all devices
- Optimized for mobile viewing

## SEO Features

- Comprehensive meta tags
- Open Graph and Twitter Card support
- Schema.org structured data
- Sitemap and robots.txt
- Local business optimization
- Fast Core Web Vitals scores

## Design System

### Colors
- Vegas Gold: `#FFD700`
- Deep Blue: `#0A2540`
- Light Blue: `#3A8DDE`
- Accent Blue: `#1E3A8A`

### Typography
- Primary: Inter (sans-serif)
- Secondary: Playfair Display (serif)

## Deployment

This project is optimized for Vercel deployment with automated workflows:

### Automatic Deployment
- **GitHub Integration**: Connected to Vercel for automatic deployments
- **Branch Strategy**: Main branch deploys to production
- **Preview Deployments**: Feature branches get preview URLs

### Manual Deployment
```bash
# Full deployment with quality checks
npm run deploy

# Skip quality checks (faster)
npm run deploy:skip-checks

# Run checks only (no deployment)
npm run deploy:checks-only
```

### Vercel Configuration
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Node Version**: 18.x

### Environment Variables
Set these in your Vercel dashboard:
- `NODE_ENV=production`
- `NEXT_TELEMETRY_DISABLED=1`

### Performance Optimizations
- **Image Optimization**: Next.js automatic image optimization
- **Static Generation**: Pre-rendered pages for better SEO
- **Edge Functions**: API routes optimized for edge deployment
- **Caching**: Aggressive caching for static assets
- **Compression**: Gzip/Brotli compression enabled

### Security Headers
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: origin-when-cross-origin
- Strict-Transport-Security: enabled

## Contact Information

- **Phone**: 702-222-1964
- **Email**: jan@drjanetduffy.com
- **Website**: https://drjanetduffy.com

## License

All rights reserved. © 2025 Dr. Jan Duffy Real Estate.
