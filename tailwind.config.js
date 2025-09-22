/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // covers all React files in src
  ],
  theme: {
    extend: {}, // put custom theme/animations/colors here
  },
  plugins: [],
};
