/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-din)"],
      },
      colors: {
        "hsr-dark": "#404040",
        "hsr-gold": "#D9BD8B",
        "hsr-orange": "#F2913D",
        "hsr-grey": "#BFBFBF",
        "hsr-light": "#F3F3F3",
      },
    },
  },
  plugins: [],
};
