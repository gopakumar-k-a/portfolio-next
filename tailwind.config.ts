import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bowlby: ['"Bowlby One"', "sans-serif"],
        doto: ['"Doto"', "sans-serif"],
        montserrat: ['"Montserrat"', "sans-serif"],
        poppins: ['"Poppins"', "serif"],
      },
      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      fontStyle: {
        italic: "italic",
        normal: "normal",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    
  },
  plugins: [],
  darkMode:'class',
} satisfies Config;
