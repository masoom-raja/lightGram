/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customColor1: 'rgb(193, 190, 255)'
      },
      backgroundImage: {
        'custom-image':"linear-gradient(to bottom, rgba(39, 11, 96, 0.6), rgba(39, 11, 96, 0.6)),url('https://images.pexels.com/photos/4353618/pexels-photo-4353618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        'custom-image1':"linear-gradient(to bottom, rgba(39, 11, 96, 0.6), rgba(39, 11, 96, 0.6)),url('https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg')",

      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    function ({ addUtilities }) {
      addUtilities({
        '.hide-scrollbar': {
          '-ms-overflow-style': 'none', /* IE and Edge */
          'scrollbar-width': 'none', /* Firefox */
        },
        '.hide-scrollbar::-webkit-scrollbar': {
          display: 'none', /* Chrome, Safari, and Opera */
        },
      });
    }
  ],
}

