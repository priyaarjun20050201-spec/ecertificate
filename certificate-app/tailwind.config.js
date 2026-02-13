/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#57BC2C',
        secondary: '#3BA370',
        accent1: '#F09841',
        accent2: '#8CA04F',
        accent3: '#F36A4B',
      },
      fontFamily: {
        heading: ['Poppins', 'Inter', 'sans-serif'],
        body: ['Inter', 'Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
