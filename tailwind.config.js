/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily:{
        'sans': ['comfortaa', 'cambria', 'cambria math',]
      },
      colors: {
        'fb-blue' : '#1877f2'
      },
      keyframes: {
        'typing' : {
          '0%' : { width: '0' },
          '100%' : { width: '100%' }
        },

        'blink-caret' : {
          '0%' : { opacity : '0' }
        }
      },
      animation: {
        'typing' : 'typing 3.5s steps(30, end), blink-caret .5s step-end infinite'
      }
    },
    fontFamily: {
      'comfortaa': ['comfortaa', 'sans-serif'],
      'roboto': ['Roboto Serif', 'serif']
    }
  },
  plugins: [],
}
