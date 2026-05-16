import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.5rem", sm: "2rem", lg: "4rem", xl: "5rem", "2xl": "6rem" },
    },
    extend: {
      borderColor: {
        border: "hsl(214.3 31.8% 91.4%)",
      },
      colors: {
        brand: {
          50:  "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#1d4ed8",
          700: "#1e40af",
          800: "#1e3a8a",
          900: "#1e3054",
          950: "#0f172a",
        },
        accent: {
          50:  "#fefce8",
          100: "#fef9c3",
          200: "#fef08a",
          300: "#fde047",
          400: "#facc15",
          500: "#eab308",
        },
        surface: {
          DEFAULT: "#ffffff",
          muted:   "#f8fafc",
          subtle:  "#f1f5f9",
        },
      },
      fontFamily: {
        sans:    ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        mono:    ["ui-monospace", "monospace"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        "soft":    "0 2px 15px -3px rgba(0,0,0,.07), 0 10px 20px -2px rgba(0,0,0,.04)",
        "card":    "0 0 0 1px rgba(0,0,0,.04), 0 4px 24px rgba(0,0,0,.07)",
        "brand":   "0 4px 24px rgba(29,78,216,.25)",
        "glow":    "0 0 40px rgba(59,130,246,.15)",
      },
      animation: {
        "fade-in":      "fadeIn .5s ease-in-out",
        "slide-up":     "slideUp .5s ease-out",
        "slide-down":   "slideDown .3s ease-out",
        "pulse-slow":   "pulse 3s cubic-bezier(0.4,0,0.6,1) infinite",
      },
      keyframes: {
        fadeIn:    { from: { opacity: "0" }, to: { opacity: "1" } },
        slideUp:   { from: { opacity: "0", transform: "translateY(20px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        slideDown: { from: { opacity: "0", transform: "translateY(-10px)" }, to: { opacity: "1", transform: "translateY(0)" } },
      },
    },
  },
  plugins: [typography],
};

export default config;
