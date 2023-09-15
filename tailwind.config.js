/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "var-dark": "#070707",
        "var-gray": "#878d9e",
        "var-light": "#f8f8f8",
        "var-primary-orange": "#ff5f38 ",
      },
      backgroundImage: {
        "home-gradient":
          "url('/src/assets/images/site/home/background-gradient.png')",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
