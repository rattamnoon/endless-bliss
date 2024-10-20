import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: {
          light: "#FFB6C1", // สีชมพูอ่อน
          DEFAULT: "#FF69B4", // สีชมพูปกติ
          dark: "#C71585", // สีชมพูเข้ม
        },
      },
      fontFamily: {
        sans: ["Lilita One", ...defaultTheme.fontFamily.sans],
        serif: ["Concert One", ...defaultTheme.fontFamily.serif],
        mono: ["Lilita One", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
} satisfies Config;
