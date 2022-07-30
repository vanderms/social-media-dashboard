/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      "sm": "22.5rem",
      "md": "45rem",
      "xl": "74rem"
    },

    colors: {
      "neutral-50": "var(--clr-neutral-50)",
      "neutral-100": "var(--clr-neutral-100)",
      "neutral-200": "var(--clr-neutral-200)",
      "neutral-300": "var(--clr-neutral-300)",
      "neutral-500": "var(--clr-neutral-500)",
      "neutral-800": "var(--clr-neutral-800)",
      "clr-facebook": "var(--clr-facebook)",
      "clr-twitter": "var(--clr-twitter)",
      "clr-youtube": "var(--clr-youtube)",
      "danger": "var(--clr-danger)",
      "success": "var(--clr-success)",
      "brand": "var(--clr-brand)",
      "transparent": "transparent"
    },
    extend: {
      backgroundImage: {
        "clr-instagram": "var(--clr-instagram)",
        "button-gradient": "linear-gradient(225deg, #40DB82 0%, #388FE7 98.02%)"
      },
    },
  },
  plugins: [],
}