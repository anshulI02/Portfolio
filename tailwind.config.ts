import type { Config } from "tailwindcss";

/**
 * Design tokens
 * ─────────────
 * base   : deep "solder-mask" charcoal scale used for backgrounds & surfaces
 * accent : electric cyan → signal blue, used sparingly (traces, links, active states)
 * ok     : status-LED green, only for the availability chip
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          950: "#1A2B3C",
          900: "#1F3347",
          850: "#253C52",
          800: "#2C455E",
          700: "#375270",
        },
        line: "#2E4A60",
        ink: {
          DEFAULT: "#E8EEF6",
          dim: "#9AA7B8",
          // Faintest text tier. Kept light enough to clear WCAG AA (≥4.5:1) on
          // every surface it's used on, incl. base-800: muted, not unreadable.
          faint: "#828FA1",
        },
        accent: {
          DEFAULT: "#22D3EE",
          blue: "#3B82F6",
          soft: "#7DD3FC",
        },
        ok: "#34D399",
        gold: "#E8B84B",
        coral: "#F07098",
      },
      fontFamily: {
        display: ['"Times New Roman"', "Georgia", "serif"],
        sans: ['"Times New Roman"', "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "84rem",
      },
      boxShadow: {
        card: "0 1px 0 0 rgba(255,255,255,0.03) inset, 0 8px 30px rgba(0,0,0,0.35)",
        lift: "0 1px 0 0 rgba(255,255,255,0.05) inset, 0 16px 50px rgba(0,0,0,0.5), 0 0 0 1px rgba(34,211,238,0.08)",
      },
      keyframes: {
        "pulse-dot": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
        "trace-flow": {
          to: { strokeDashoffset: "-600" },
        },
      },
      animation: {
        "pulse-dot": "pulse-dot 2.4s ease-in-out infinite",
        "trace-flow": "trace-flow 14s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
