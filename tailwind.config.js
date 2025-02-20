/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html,css}", // Include React files
  ],
  theme: {
    extend: {
        fontSize:{
          '10xl': ['9rem', { lineHeight: '1.2' }],
        },
        
        screens:{
            xsm : '500px',
        },

      keyframes : {
        bounceHigher: {
          '0%, 100%': { transform: 'translateY(0)', animationTimingFunction : 'ease-in-out', },
          '50%': { transform: 'translateY(-100px)', animationTimingFunction : 'ease-in-out', }, // Increase this value for a higher bounce
        },
      },
      animation: {
        bounceHigher: 'bounceHigher 1s infinite',
      },

      spacing:{
        13 : "3.25rem"
      },
    },
  },
  plugins: [],
};