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
        background: "#FFFFFF",
        nearblack: "#0A0A0A",
        deemphasized: "#C7C7C7",
        bodytext: "#1A1A1A",
        mutedlabel: "#9A9A9A",
        wireframe: "#D4D4D4",
      },
      fontFamily: {
        satoshi: ["Satoshi", "General Sans", "sans-serif"],
      },
      letterSpacing: {
        meta: "0.18em",
      },
      spacing: {
        section: "160px",
      },
    },
  },
  plugins: [],
};
export default config;
