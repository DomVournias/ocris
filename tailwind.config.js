/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#496AD0",
        primaryText: "#2F68B7",
        accent: "#6DC8F2",
        accentText: "#2e68b6",
        secondary: "#EBEBEB",
        text: "#3C3C3C",
        pale: "#E0E0E0"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        blur: {
          '0%': { filter: "blur(0px)" },
          '50%': { filter: "blur(5px)" },
          '100%': { filter: "blur(0px)" },
        }
      },
      animation: {
        blur: 'blur 5s linear infinite',
      }
    },
  },
  plugins: ["tailwind-clip-path"],
};
