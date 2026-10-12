/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: '#FE2C55',
          red: '#FF304F',
          black: '#0F0F0F',
          gray: '#1E1E22',
          muted: '#A1A1AA',
        },
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.35)',
      },
    },
  },
  plugins: [],
};
