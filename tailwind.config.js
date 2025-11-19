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
          goldLight: "#FBF124",
          black: "#050505",
          charcoal: "#0B0B0B",
          gray: "#A0A3AB",
          darkGray: "#1A1A1A",
        },
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
          950: "#0a0a0a", // Pure dark gray without blue
        },
      },
      boxShadow: {
        "brand-glow": "0 25px 45px rgba(212, 175, 55, 0.35)",
        "gold-glow":
          "0 0 20px rgba(251, 191, 36, 0.4), 0 0 40px rgba(251, 191, 36, 0.2)",
        "white-glow":
          "0 0 20px rgba(255, 255, 255, 0.3), 0 0 40px rgba(255, 255, 255, 0.1)",
        premium:
          "0 20px 60px rgba(212, 175, 55, 0.25), 0 10px 30px rgba(0, 0, 0, 0.3)",
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #050505 0%, #1a1a1a 50%, #050505 100%)",
        "gold-gradient":
          "linear-gradient(135deg, #fbbf24 0%, #ffffff 50%, #fbbf24 100%)",
        "dark-gradient": "linear-gradient(135deg, #1a1a1a 0%, #0b0b0b 100%)",
        "premium-gradient":
          "linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(212, 175, 55, 0.05))",
      },
      backdropBlur: {
        xs: "4px",
        sm: "8px",
        md: "12px",
        lg: "20px",
      },
      animation: {
        shimmer: "shimmerSweep 3s infinite",
        "float-card": "floatingCard 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2.5s ease-in-out infinite",
        neon: "neonPulse 3s ease-in-out infinite",
        particle: "particlesShift 20s ease-in-out infinite",
        gradient: "gradientShift 6s ease infinite",
        "fade-stagger": "fadeInStagger 0.8s ease forwards",
        "border-rotate": "borderRotate 4s linear infinite",
        "shadow-pulse": "shadowPulse 4s ease-in-out infinite",
        "text-wave": "textWave 1.2s ease-in-out infinite",
        "dot-blink": "dotBlink 2s ease-in-out infinite",
        "line-grow": "lineGrow 1.2s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
