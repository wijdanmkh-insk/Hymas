/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:['freeman', 'sans-serif'],
      },

      fontSize : {
        'xxxs' : '0.5rem',
        'xxs' : '0.75rem',
      },

      colors:{
        'hijau-muda' : '#1ED37D',
        'hijau-tua' : '#00904B',
        'putih':'#ffffff',
        'hitam':'#3D473E',
        'merah': '#ef4444',
      },
    },
  },
  plugins: [],
}

