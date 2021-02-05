const { spacing, fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    './components/**/*.{ts,tsx,js,jsx}',
    './pages/**/*.{ts,tsx,js,jsx}',
    './layouts/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)'
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans]
      },
      textColor: {
        accent: 'var(--color-text-accent)',
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)'
      },
      hover: {
        primary: 'black',
        secondary: 'red'
      },
      boxShadow: {
        primary:
          '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        secondary: 'red'
      }
    }
  },

  variants: {},
  plugins: []
};
