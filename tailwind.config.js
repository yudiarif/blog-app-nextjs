/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      daisyui: {
        themes: ["light", "dark", "coffee"],
      },
    },
    colors: {
      themeColor: {
        primary: "#6A4C93", // Ungu tua
        secondary: "#F08A5D", // Oranye muda
        accent: "#2A9D8F", // Hijau biru
        dark: "#343A40", // Abu-abu tua
        light: "#F7F7F7", // Putih keabu-abuan
        red: "#FF0000", // Merah
        gray: {
          100: "#F1F1F1",
          200: "#E2E2E2",
          300: "#D3D3D3",
          400: "#B5B5B5",
          500: "#979797",
          600: "#7A7A7A",
          700: "#5C5C5C",
          800: "#3E3E3E",
          900: "#202020",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
