/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        tablet: '1000px'
      },
      colors: {
        gold: "#b89b1e",
        ink: "#161616",
        panel: "#15171f"
      },
      boxShadow: {
        glow: "0 0 60px rgba(184, 155, 30, 0.25)"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};
