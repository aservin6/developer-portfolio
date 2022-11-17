/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        josefin: ["Josefin Sans", "sans"],
      },
      backgroundImage: {
        darkBgDesktop: "url('/assets/dark-bg-desktop.svg')",
        darkBgMobile: "url('/assets/dark-bg-mobile.svg')",
        lightBgDesktop: "url('/assets/light-bg-desktop.svg')",
        lightBgMobile: "url('/assets/light-bg-mobile.svg')",
      },
    },
  },
  plugins: [],
};
