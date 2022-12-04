/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        "5xl": " 10px 10px 0px 0px rgba(110,97,255,0.8)",
      },
    },
  },
  plugins: [],
};
