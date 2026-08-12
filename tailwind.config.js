/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '2rem',
        lg: '3rem',
        xl: '4rem',
      },
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B1B2B',
          50: '#EEF1F4',
          100: '#D6DCE3',
          200: '#AEB9C6',
          300: '#8695A8',
          400: '#5E7289',
          500: '#3C5169',
          600: '#243549',
          700: '#16263A',
          800: '#0B1B2B',
          900: '#060F19',
        },
        plaster: {
          DEFAULT: '#F7F4EE',
          50: '#FFFFFF',
          100: '#FCFAF6',
          200: '#F7F4EE',
          300: '#EFE9DD',
          400: '#E4DBC7',
        },
        brass: {
          DEFAULT: '#B8912F',
          50: '#FBF3DF',
          100: '#F3E1AE',
          200: '#E7C876',
          300: '#D6AC4C',
          400: '#B8912F',
          500: '#8F7024',
          600: '#6A531A',
        },
        clay: '#A9532E',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(11,27,43,0.04), 0 12px 32px -12px rgba(11,27,43,0.16)',
        lift: '0 1px 2px rgba(11,27,43,0.06), 0 24px 48px -18px rgba(11,27,43,0.28)',
        glass: '0 1px 0 rgba(255,255,255,0.4) inset, 0 8px 32px rgba(11,27,43,0.12)',
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(11,27,43,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(11,27,43,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid-cell': '48px 48px',
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'float-slow': 'float 11s ease-in-out infinite',
        'spin-slow': 'spin 18s linear infinite',
        marquee: 'marquee 32s linear infinite',
        shimmer: 'shimmer 2.4s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(2deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
