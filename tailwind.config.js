// @type {import('tailwindcss').Config}

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screen: {
      "2sm": "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1350px",
      "2xl": "1536px",
    },
    extend: {},
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar-hide")],
};
