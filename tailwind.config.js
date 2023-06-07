/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'text-color': '#8E8E8E', 
        'icon-color': '#514F4A',
        'hover-color': '#3d3c3c',
        'hover-text': '#c1ad7f',
        'border-color': '#5f5f5f',
      },    
      fontSize: {
        'sm': '16px',
        'md': '18px',
        '22': '22px',
      },
      width: {
       "w-95" : "95%",

      },
    },
  },
  plugins: [],
}
