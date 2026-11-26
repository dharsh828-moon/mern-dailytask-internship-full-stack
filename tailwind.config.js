/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: {
    fontFamily: { sans: ['DM Sans', 'sans-serif'], display: ['Manrope', 'sans-serif'] },
    colors: { ink: '#182338', muted: '#788397', line: '#e9edf3', brand: '#5967d8', teal: '#16a394' },
    boxShadow: { soft: '0 8px 28px rgba(25, 42, 70, .06)' }
  }},
  plugins: []
}