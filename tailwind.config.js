/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          // Primary luxury colors - deep, rich, trustworthy
          navy: '#1a2332', // Deep navy for trust and stability
          'navy-light': '#2d3748', // Lighter navy for accents
          'navy-dark': '#0f1419', // Darkest navy for headers

          // Gold accents - sophisticated and premium
          gold: '#d4af37', // Classic luxury gold
          'gold-light': '#f4e4a6', // Light gold for backgrounds
          'gold-dark': '#b8860b', // Dark gold for text
          'gold-accent': '#ffd700', // Bright gold for highlights

          // Platinum and silver - modern luxury
          platinum: '#e5e7eb', // Light platinum
          'platinum-dark': '#9ca3af', // Dark platinum
          silver: '#f8fafc', // Light silver background

          // Accent colors - sophisticated blues
          'royal-blue': '#1e40af', // Royal blue for trust
          'steel-blue': '#475569', // Steel blue for secondary text
          'sky-blue': '#0ea5e9', // Sky blue for links

          // Neutral luxury colors
          cream: '#fefce8', // Warm cream background
          charcoal: '#374151', // Charcoal for text
          pearl: '#f9fafb', // Pearl white
        },
        // Keep original vegas colors for backward compatibility
        vegas: {
          gold: '#d4af37',
          'gold-dark': '#b8860b',
          'deep-blue': '#1a2332',
          'light-blue': '#0ea5e9',
          'accent-blue': '#1e40af',
          silver: '#e5e7eb',
          'dark-silver': '#9ca3af',
        },
        primary: {
          50: '#fefce8',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#d4af37',
          600: '#b8860b',
          700: '#92400e',
          800: '#78350f',
          900: '#451a03',
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
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'luxury-gradient': 'linear-gradient(135deg, #d4af37 0%, #b8860b 100%)',
        'navy-gradient': 'linear-gradient(135deg, #1a2332 0%, #2d3748 100%)',
        'royal-gradient': 'linear-gradient(135deg, #1e40af 0%, #0ea5e9 100%)',
        'pearl-gradient': 'linear-gradient(135deg, #f9fafb 0%, #fefce8 100%)',
        // Keep original gradients for backward compatibility
        'vegas-gradient': 'linear-gradient(135deg, #d4af37 0%, #b8860b 100%)',
        'blue-gradient': 'linear-gradient(135deg, #1a2332 0%, #0ea5e9 100%)',
      },
    },
  },
  plugins: [],
};
