/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-primary': '#00b3b3',
        'custom-primary-light': '#00e6e6',
        'custom-primary-dark': '#009999',
        'custom-bg': '#F2F2F2',
        'custom-text': '#333333',
        'custom-text-secondary': '#666666',
        'custom-secondary': '#F2F2F2',
        'custom-secondary-hover': '#E6E6E6',
      },
      fontFamily: {
        sans: ['Roboto', 'system-ui', 'sans-serif'],
        bokor: ['Bokor', 'cursive'],
        righteous: ['Righteous', 'cursive'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        'heading-1': ['3rem', {
          lineHeight: '1.2',
          fontWeight: '700',
        }],
        'heading-2': ['2.5rem', {
          lineHeight: '1.2',
          fontWeight: '600',
        }],
        'body': ['1rem', {
          lineHeight: '1.6',
          fontWeight: '400',
          letterSpacing: '0.01em',
        }],
        'caption': ['0.875rem', {
          lineHeight: '1.5',
          fontWeight: '300',
          letterSpacing: '0.02em',
        }],
      },
    },
  },
  plugins: [],
};
