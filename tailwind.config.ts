import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "shio-heading": "#E74291",
        "shio-accent": "#E6536A",
        "shio-blue": "#2B7AC6",
        ritsyo: "#004098",
        "text-body": "#333333",
        "section-gray": "#F7F8FA",
        "section-blue": "#F0F5FA",
      },
      fontFamily: {
        sans: [
          "var(--font-noto)",
          '"Yu Gothic"',
          "Hiragino Kaku Gothic ProN",
          "Meiryo",
          "sans-serif",
        ],
      },
      maxWidth: {
        content: "1140px",
      },
    },
  },
  plugins: [],
};
export default config;
