/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Luxury color palette
        luxury: {
          navy: '#1a2332',
          'navy-light': '#2d3748',
          'navy-dark': '#0f1419',
          gold: '#d4af37',
          'gold-light': '#f4e4a6',
          'gold-dark': '#b8860b',
          'gold-accent': '#ffd700',
          platinum: '#e5e7eb',
          'platinum-dark': '#9ca3af',
          silver: '#f8fafc',
          'royal-blue': '#1e40af',
          'steel-blue': '#475569',
          'sky-blue': '#0ea5e9',
          cream: '#fefce8',
          charcoal: '#374151',
          pearl: '#f9fafb',
        },
        // Vegas colors for backward compatibility
        vegas: {
          gold: '#d4af37',
          'gold-dark': '#b8860b',
          'deep-blue': '#1a2332',
          'light-blue': '#0ea5e9',
          'accent-blue': '#1e40af',
          silver: '#e5e7eb',
          'dark-silver': '#9ca3af',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-gold': 'pulseGold 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(255, 215, 0, 0.7)' },
          '50%': { boxShadow: '0 0 0 10px rgba(255, 215, 0, 0)' },
        },
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(135deg, #d4af37 0%, #b8860b 100%)',
        'navy-gradient': 'linear-gradient(135deg, #1a2332 0%, #2d3748 100%)',
        'royal-gradient': 'linear-gradient(135deg, #1e40af 0%, #0ea5e9 100%)',
        'pearl-gradient': 'linear-gradient(135deg, #f9fafb 0%, #fefce8 100%)',
        'vegas-gradient': 'linear-gradient(135deg, #d4af37 0%, #b8860b 100%)',
        'blue-gradient': 'linear-gradient(135deg, #1a2332 0%, #0ea5e9 100%)',
      },
    },
  },
  plugins: [],
};
