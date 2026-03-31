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
        "v2-pink": "#D64672",
        "v2-pink-deep": "#B33A5E",
        "v2-blue": "#004098",
        "v2-blue-deep": "#002D6B",
        "v2-warm": "#FAF8F5",
        "v2-cool": "#F5F6F8",
      },
      fontFamily: {
        sans: [
          "var(--font-noto)",
          '"YakuHanJP"',
          '"Yu Gothic"',
          "Hiragino Kaku Gothic ProN",
          "Meiryo",
          "sans-serif",
        ],
        serif: ["var(--font-serif)", "YuMincho", "serif"],
        en: ["var(--font-en)", "sans-serif"],
      },
      maxWidth: {
        content: "1140px",
        v2: "1080px",
      },
    },
  },
  plugins: [],
};
export default config;
