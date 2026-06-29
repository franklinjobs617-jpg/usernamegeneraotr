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
        teal: {
          DEFAULT: "#0d7a7b",
          dark:    "#095859",
          light:   "#e0f2f2",
          mist:    "#f0f9f9",
        },
        night:  "#0d1a1a",
        muted:  "#4a6060",
        spark:  "#ff6b35",
        "border-teal": "#c8e8e8",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        tool: "0 4px 24px rgba(13,122,123,0.10)",
        card: "0 1px 4px rgba(13,26,26,0.06)",
        lift: "0 8px 32px rgba(13,122,123,0.14)",
      },
      backgroundImage: {
        "hero-dots": "radial-gradient(circle, #0d7a7b22 1px, transparent 1px)",
      },
      backgroundSize: {
        "dots": "28px 28px",
      },
    },
  },
  plugins: [],
};

export default config;
