import animated from "tailwindcss-animated";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"], // Sets Roboto as the default sans-serif font
    },
    extend: {
      screens: {
        "3xl": "1920px", // Custom breakpoint for high resolution screens
      },
      colors: {
        PrimaryColor: "#363636",
      },
    },
  },
  plugins: [animated],
};
