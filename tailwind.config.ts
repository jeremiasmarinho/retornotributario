import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-black": "#0b0b0b",
        "brand-charcoal": "#1f1f1f",
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #1f2937 0%, #111827 50%, #0b0f1a 100%)",
      },
      boxShadow: {
        "brand-glow": "0 20px 45px rgba(212, 175, 55, 0.25)",
      },
    },
  },
  plugins: [],
} satisfies Config;
