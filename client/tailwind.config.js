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
        "ctm-dark": "#161b22",
        "ctm-light": "#f5f6f7",
        "ctm-black": "#0d1117",
        "ctm-red": "#E63946",
        "ctm-yellow": "#ffb703",
        "ctm-light-gray": "#f6f8fa",
        "ctm-darck-blue": "#1D3557",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
