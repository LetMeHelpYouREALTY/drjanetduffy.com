import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Core integrations
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react({
      include: ['**/react-*.tsx', '**/react-*.ts', '**/*.tsx'],
    }),
    sitemap({
      filter: (page) => !page.includes('404'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),

  ],

  // Output configuration
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true },
    speedInsights: { enabled: true },
  }),

  // Site configuration
  site: 'https://drjanetduffy.com',
  compressHTML: true,

  // Build optimization
  build: {
    inlineStylesheets: 'auto',
    assets: '_astro',
    format: 'file',
  },

  // Vite optimization
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'ui-vendor': ['framer-motion', 'lucide-react'],
            'astro-vendor': ['astro'],
          },
          chunkFileNames: '_astro/[name]-[hash].js',
          entryFileNames: '_astro/[name]-[hash].js',
          assetFileNames: '_astro/[name]-[hash].[ext]',
        },
      },
      target: 'esnext',
      minify: 'esbuild',
    },
    ssr: {
      noExternal: ['@astrojs/vercel'],
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'framer-motion', 'lucide-react'],
    },
  },

  // Image optimization
  image: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        limitInputPixels: false,
      },
    },
  },

  // Security configuration
  security: {
    checkOrigin: true,
    allowedPorts: [3000, 4321],
  },



  // Server configuration
  server: {
    port: 3000,
    host: true,
    open: false,
  },

  // Preview configuration
  preview: {
    port: 4321,
    host: true,
  },

  // Markdown configuration
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
    remarkPlugins: [],
    rehypePlugins: [],
  },

  // TypeScript configuration
  typescript: {
    strict: true,
  },
});