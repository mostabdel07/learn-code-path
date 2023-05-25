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
        "ctm-dark": "#0D1321",
        "ctm-light": "#F2F5FF",
        "ctm-black": "#0d1117",
        "ctm-red": "#f23d3d",
        "ctm-gray": "#3C4048",
        "ctm-accent": "#35a9e2",
        "ctm-accent-dark": "#F45050",
        "ctm-action": "#FF9505",
      },
      animation: {
        // cursor: "cursor .6s linear infinite alternate",
        type: "type 1.8s ease-out .8s 1 normal both",
        // "type-reverse": "type 1.8s ease-out 0s infinite alternate-reverse both",
      },
      keyframes: {
        type: {
          "0%": { width: "0ch" },
          "5%, 10%": { width: "1ch" },
          "15%, 20%": { width: "2ch" },
          "25%, 30%": { width: "3ch" },
          "35%, 40%": { width: "4ch" },
          "45%, 50%": { width: "5ch" },
          "55%, 60%": { width: "6ch" },
          "65%, 70%": { width: "7ch" },
          "75%, 80%": { width: "8ch" },
          "85%, 90%": { width: "9ch" },
          "95%": { width: "10ch" },
        },
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
