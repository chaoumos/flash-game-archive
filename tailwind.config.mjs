/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'retro-blue': '#0077CC',
        'retro-green': '#009933',
        'retro-yellow': '#FFCC00',
        'retro-red': '#EE0000',
        'retro-white': '#FFFFFF',
        'retro-black': '#000000',
      },
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive'],
      },
    },
  },
  plugins: [],
}