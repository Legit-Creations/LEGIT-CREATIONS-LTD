// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/seo/**/*.{ts,tsx}",
    "./src/types/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#22333B",     /* Deep Ocean (Dark Base / Background) */
        bone: "#EFF3F1",         /* Pale Ice (Light Surface / Text) */
        teal: "#5E8B7E",         /* Ocean Teal (Graphics / Accents / Borders) */
        gold: {
          DEFAULT: '#C7A17A',    /* Clay / Warm Gold Accent */
          light: '#E0C5A8',      /* Lighter Clay Tint */
          dark: '#A3805D',       /* Deep Clay Shade */
        },
      },
      fontFamily: {
        body: ["Google Sans", "sans-serif"],
        display: ["Ubuntu", "sans-serif"],
      },
      backgroundImage: {
        'grid-pattern': "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUAgMAAADNEp7UAAAADFBMVEUAAAD///////8clp9WAAAAAnRSTlMAAHaTzTgAAAAXSURBVAjXY2hgYGBgYGCYwcDAwMCgAQA87AKB4M0mOQAAAABJRU5ErkJggg==')",
      },
    },
  },
  plugins: [],
};

export default config;