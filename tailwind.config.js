/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        crack: {
          orange: '#EF4A23',
          black: '#000000',
          beige: '#F2EEE8',
          dark: '#333333',
          light: '#D4D4D4',
        },
      },
    },
  },
  plugins: [],
}
