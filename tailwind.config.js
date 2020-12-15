module.exports = {
  darkMode: 'media',
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ['./src/components/**/*.{ts,tsx,js,jsx}', './src/pages/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
      },
      textColor: {
        accent: "var(--color-text-accent)",
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
      },
      hover: {
        primary: 'black',
        secondary: 'red'
      }
    },
  },
  
  variants: {
    extend: {
      textOpacity: ['dark']
    }
  },
  plugins: [],
}
