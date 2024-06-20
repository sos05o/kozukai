/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {},
  plugins: [
    require('daisyui'),
  ],
}

