/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F2EBDF',
        'cream-dark': '#EAE0CE',
        espresso: '#2A2018',
        sable: '#A8623C',
        sandcastle: '#E3D2B0',
        'text-secondary': '#6B5E4F',
        'text-light': '#F4EFE7',
        'text-light-secondary': '#B6A88F',
      },
      fontFamily: {
        lora: ['Lora', 'serif'],
        bevietnam: ['"Be Vietnam Pro"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
