/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fffdf0',
          100: '#fffae1',
          200: '#fff4c2',
          300: '#fee894',
          400: '#fcd55c',
          500: '#f9bd2a',
          600: '#e59d18',
          700: '#be7411',
          800: '#985915',
          900: '#7c4816',
          950: '#462507',
          royal: '#D4AF37',
          warm: '#C59B27',
          bright: '#FDF0A6',
        },
        royalDark: '#0B0E14',
        royalCard: '#131822',
        royalBorder: '#232C3D',
        royalText: '#FAF8F5',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.25)',
        'gold-glow-lg': '0 0 45px rgba(212, 175, 55, 0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
