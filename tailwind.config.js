/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wood: {
          50: '#fdfbf7',
          100: '#f7f2e8',
          200: '#eee3d0',
          300: '#e1cdb0',
          400: '#ceae85',
          500: '#bd9262',
          600: '#a7764f',
          700: '#895a3e',
          800: '#714936',
          900: '#5c3d2e',
          950: '#341f17',
          deep: '#2C1A0E',
          warm: '#4A2E19',
          amber: '#965A2C',
        },
        cream: {
          50: '#FFFFFF',
          100: '#FAF8F5',
          200: '#F4EFE6',
          300: '#EAE2D5',
        },
        gold: {
          light: '#F5E6BE',
          main: '#D4AF37',
          dark: '#B08A22',
        },
        waGreen: {
          50: '#ecfdf5',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft-card': '0 4px 20px -2px rgba(74, 46, 25, 0.06), 0 2px 6px -1px rgba(74, 46, 25, 0.04)',
        'soft-hover': '0 12px 30px -4px rgba(74, 46, 25, 0.12), 0 4px 12px -2px rgba(74, 46, 25, 0.08)',
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.3)',
      }
    },
  },
  plugins: [],
}
