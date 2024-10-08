/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'liblack':'rgba(10,10,10,0.5)',
         'liyellow':'rgba(170, 191, 40, 0.5)',
         'button':'#D2CB2E',
         'light_button':'#D2CB2EE6',
         'hover':'#F1E715',
         'input_color':'#D9D9D9',
         'link_color':'#AABF28',
         'reddy':'#e51010'
      }
    },
  },
  plugins: [],
}

