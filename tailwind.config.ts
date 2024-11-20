import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        custom1: '0px 4px 4px 0px rgba(0, 0, 0, 0.3)', // #0000004D en RGBA
        custom2: '0px 8px 12px 6px rgba(0, 0, 0, 0.15)', // #00000026 en RGBA
      },
      fontFamily: {
        general: ['Lato', 'sans-serif'], // Define la fuente como 'general'
      },
    },
  },
  plugins: [],
};
export default config;
