/** @type {import('tailwindcss').Config} */
module.exports = {
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
        'off-white': '#faf9f8',
        'warm-gray': '#8b7355',
        'accent-blue': '#3b82f6',
        'accent-green': '#10b981',
      },
    },
  },
  plugins: [],
};
