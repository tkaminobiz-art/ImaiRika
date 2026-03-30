import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "cdp-blue": "#004098",
        "cdp-blue-link": "#1E88E5",
        "cdp-yellow": "#FFE72F",
        "cdp-red": "#FF3E4D",
        "cdp-purple": "#6321E0",
        "cdp-cyan": "#009FAD",
        "cdp-orange": "#FF7F00",
        "text-dark": "#151B1E",
        "text-body": "#2F2F2F",
        "gray-bg": "#F0F0F0",
      },
      fontFamily: {
        sans: [
          "YakuHanJP",
          '"Noto Sans JP"',
          '"Helvetica Neue"',
          '"Yu Gothic"',
          '"Hiragino Kaku Gothic ProN"',
          "Meiryo",
          "sans-serif",
        ],
      },
      maxWidth: {
        content: "1340px",
      },
    },
  },
  plugins: [],
};
export default config;
