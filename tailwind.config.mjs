/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "Dark-Gray": "hsl(0, 0%, 63%)",
        "Very-Dark-Gray": "hsl(0, 0%, 27%)",
      },
      fontWeight: {
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      fontFamily: {
        LeagueSpartan: ['"League Spartan"'],
      },
      screens: {
        sm: "360px",
        tablet800: "884px",
      },
    },
  },
  plugins: [],
};
