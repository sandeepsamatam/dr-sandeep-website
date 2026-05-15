import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#F2F6F9",
          100: "#E0EBF1",
          200: "#C2D7E4",
          300: "#94BCD2",
          400: "#609BBA",
          500: "#19A7CE", // Teal Accent
          600: "#1486A5",
          700: "#23516A",
          800: "#173C56",
          900: "#0B2447"  // Deep Navy
        },
        accent: {
          500: "#D4AF37", // Premium Gold/Bronze
          600: "#AA8C2C"
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
        soft: "0 20px 60px -28px rgba(15, 23, 42, 0.15)",
        card: "0 16px 40px -24px rgba(11, 36, 71, 0.15)",
        premium: "0 20px 40px -15px rgba(11, 36, 71, 0.15), 0 0 15px rgba(25, 167, 206, 0.1)"
      },
      backgroundImage: {
        "medical-grid":
          "linear-gradient(rgba(11, 36, 71, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(11, 36, 71, 0.04) 1px, transparent 1px)"
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
