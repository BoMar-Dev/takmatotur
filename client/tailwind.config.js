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
        primary: "#363636", // Set your custom primary color
        PrimaryColor: "#363636", // Keeping the custom color as defined originally
        black: "#363636", // Override the default black color with your custom primary color
        lightGray: "#f0f0f0",
      },
      keyframes: {
        bounce: {
          "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
          "40%": { transform: "translateY(-30px)" },
          "60%": { transform: "translateY(-15px)" },
        },
      },
      animation: {
        bounce: "bounce 2s infinite",
      },
      transitionProperty: {
        opacity: "opacity",
      },
    },
  },
  plugins: [animated],
};
