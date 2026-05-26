import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#121212",
        surface: "#1a1a1a",
        "surface-2": "#242424",
        accent: "#22d3ee",       // cyan-400
        "accent-amber": "#fbbf24", // amber-400
        muted: "#6b7280",
        "muted-2": "#9ca3af",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease forwards",
        "slide-up": "slideUp 0.6s ease forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "glass-gradient":
          "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
        "glow-cyan":
          "radial-gradient(circle at center, rgba(34,211,238,0.15) 0%, transparent 70%)",
      },
    },
  },
  plugins: [],
};

export default config;
