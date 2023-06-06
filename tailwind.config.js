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
      },    
      fontSize: {
        'sm': '16 px',
        'md': '18 px',
        'lg': '24 px',
      },
      width: {
       " w-95" : "95%"
      },
    },
  },
  plugins: [],
}
