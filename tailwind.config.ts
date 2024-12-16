import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx,txt}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,txt}",
    "./src/styles/**/*.{css,scss}",
    "./src/**/**/*.{html,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        platypi: ['var(--font-platypi)', 'sans-serif']
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'frosted-bg': 'rgba(255, 255, 255, 0.8)',
      },
      boxShadow: {
        'frosted-glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'xl': '16px',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
} satisfies Config;
