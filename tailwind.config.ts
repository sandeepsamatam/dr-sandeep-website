import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f7ff",
          100: "#dceeff",
          200: "#b9deff",
          300: "#83c5ff",
          400: "#45a7ff",
          500: "#1788ff",
          600: "#0068ea",
          700: "#0052bc",
          800: "#074796",
          900: "#0c3d7c"
        },
        ink: "#0f172a",
        muted: "#5b6475",
        line: "#dce7f5",
        surface: "#f7fbff"
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"]
      },
      boxShadow: {
        soft: "0 20px 60px -28px rgba(15, 23, 42, 0.20)",
        card: "0 16px 40px -24px rgba(0, 72, 144, 0.22)"
      },
      backgroundImage: {
        "medical-grid":
          "linear-gradient(rgba(255,255,255,0.74) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.74) 1px, transparent 1px)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        }
      },
      animation: {
        float: "float 7s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
