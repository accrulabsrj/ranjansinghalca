/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Website colors (slate/cyan theme)
        'accru-dark': '#1a1a2e',
        'accru-blue': '#16213e',
        'accru-light-blue': '#0f3460',
        'accru-accent': '#00a8cc',
        'accru-bg': '#f5f5f5',
        'accru-text': '#2d3748',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

