/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}", "./public/static/script.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "Roboto", "sans-serif"],
      },
      colors: {
        brand: {
          gold: "#D4AF37",
          goldSoft: "#E6C879",
          black: "#050505",
          charcoal: "#0B0B0B",
          slate: "#121214",
          gray: "#A0A3AB",
        },
      },
      boxShadow: {
        "brand-glow": "0 25px 45px rgba(212, 175, 55, 0.35)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #050505 0%, #121214 50%, #050505 100%)",
      },
    },
  },
  plugins: [],
};
