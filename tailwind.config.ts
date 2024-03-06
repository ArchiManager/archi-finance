import type { Config } from "tailwindcss";

const config: Config = {
  important: true,
  corePlugins: {
    preflight: true,
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sharp: ["Sharp Grotesk"],
        serif: ["ui-serif", "Georgia"],
        lato: ["Lato", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        sans: ["Proxima Nova", "sans-serif"],
      },
      screens: {
        mlg: "970px",
        ssm: "400px",
        // => @media (min-width: 640px) { ... }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "rgb(43, 103, 219)",
        navText: "rgb(137, 137, 137)",
        categoryHover: "#007fff",
        category: "#f0f8ff",
        bgCard: '#f7faf7',
        footer: '#323232'
      },
      height: {
        "336px": "336px",
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
