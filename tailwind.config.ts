import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      tablet: "1024px", // Tambahkan ukuran kustom "tablet"
      outlet: "1280px", // Ganti md dengan outlet
      outlet2: "1440px", // Tambahkan ukuran kustom "outlet2"
      lg: "1280px", // Kembalikan default lg
      xl: "1536px",
      "2k": "1920px", // Resolusi 2K
      "4k": "3840px", // Resolusi 4K
    },
    fontFamily: {
      quicksand: ["Quicksand", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        theme: {
          blue: "#2563EB",
          primary_blue: "#0A66C2",
          secondary_blue: "#0055A9",
        },
        text: {
          light: "#F8FAFC",
          secondary: "#94A3B8",
          dark: "#334155",
        },
        card: {
          secondary: "#F1F5F9",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
