/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        blue: '#4A69E2',
        yellow: '#FFA52F',
        faWhite: '#FAFAFA',
        gray: '#E7E7E3',
        grayMain: '#70706E',
        darkGray: '#232321',
        jetBlack: '#36323B',
        gunmetalGray: '#79767C'
      }
    },

  },
  plugins: [],
}
