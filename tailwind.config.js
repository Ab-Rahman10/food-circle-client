/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Kavivanar: ["Kavivanar", "sans-serif"],
      },
      colors: {
        "custom-orange": "#FE6A13",
      },
    },
  },
  plugins: [require("daisyui")],
};
