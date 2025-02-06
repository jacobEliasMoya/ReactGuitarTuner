/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'main': ['Noto Serif', 'serif'],
      'secondary': ['Montserrat', 'serif']
    },

    extend: {
      animation: {
        'drop-n-rotate': 'dropnrotate .35s ease-in-out 1 forwards',
        'drop-n-rotate-reverse': 'dropnrotaterev .35s ease-in-out 1 forwards',
      },
      keyframes: {
        dropnrotate: {
          '0%': { 
            transform: 'rotate(-135deg) translateY(150vh) translateX(150vh) ',
            boxShadow: '-25em -25em 1em -4em #00000026' 

          },

          '100%': { 
            transform: 'rotate(-135deg) translateY(0vh) translateX(0vh)',
            boxShadow: '0em 0em 0em 0em #00000026' 
           },
        },
        dropnrotaterev: {
          '0%': { 
            transform: 'rotate(-135deg) translateY(0vh) translateX(0vh)',
            boxShadow: '0em 0em 0em 0em #00000026' 
          },

          '100%': { 
            transform: 'rotate(-135deg) translateY(-150vh) translateX(-150vh) ',
            boxShadow: '0em 0em 0em 0em #00000026' 
           },
        },
      },
    },

  },
  plugins: [
    require("@xpd/tailwind-3dtransforms"),
  ],  
}

