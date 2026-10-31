/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        agro: {
          50: '#F4F7F4',
          100: '#E5EDE5',
          200: '#CADBCA',
          300: '#A3C2A3',
          400: '#72A473',
          500: '#4A874C',
          600: '#386D3A',
          700: '#2D562F',
          800: '#254527',
          900: '#1F3921',
          950: '#0E1E10',
        },
        soil: {
          50: '#F9F7F5',
          100: '#F1ECE6',
          200: '#E4D9CE',
          300: '#D2C1AF',
          400: '#BAA28D',
          500: '#A68870',
          600: '#92735C',
          700: '#795D4A',
          800: '#634D3F',
          900: '#524136',
        },
        harvest: {
          gold: '#D97706',
          amber: '#F59E0B',
          light: '#FEF3C7',
          dark: '#B45309'
        }
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
};

