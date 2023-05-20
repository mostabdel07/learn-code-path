/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "ctm-dark": "#20262E",
        "ctm-light": "#f2f2f2",
        "ctm-black": "#0d1117",
        "ctm-red": "#f23d3d",
        "ctm-gray": "#3C4048",
        "ctm-accent": "#FF6D60",
        "ctm-accent-dark": "#F45050",
        "ctm-action": "#00ABB3",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
