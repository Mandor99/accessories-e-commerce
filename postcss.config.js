module.exports = {
  plugins: {
    tailwindcss: {
      content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        colors: {
          "my-light-black": "rgba(0,0,0,.5)",
          'white': '#fff',
          'black': '#000',
          'my-red': {
            100: '#f20d34',
            DEFAULT: '#FF0000'
          },
          'my-green': {
            100: 'rgb(49,168,49)',
            DEFAULT: '#00FF00'
          },
          'my-blue': {
            100:  '#0070f3',
            DEFAULT: '#0000FF'
          },
          'my-gray': {
            100: '#5f5f5f',
            200: '#324d67',
            DEFAULT: '#808080',
          },
          'my-light': {
            100: '#dcdcdc',
            200: '#ebebeb',
            300: '#eaeaea',
            400: '#fafafa',
            500: '#eee'
          },
        },
        container: {
          center: true,
          screens: {
            lg: '1124',
            xl: '1124px',
            '2xl': '1124px'
          },
          padding: '2rem'
        },
        animation: {
          'marquee': 'marquee 15s linear infinite',
          'show': 'show .2s ease-in-out .5s',
          'hide': 'hide .3s ease-in-out',
        },
        keyframes: {
          'marquee': {
            '0%': {transform: 'translateX(0)'},
            '100%': {transform: 'translateX(-50%)'}
          },
          'show': {
            '0%': {transform: 'translateX(100%)'},
            '100%': {transform: 'translateX(0)'},
          },
          'hide': {
            '0%': {transform: 'translateX(0)'},
            '100%': {transform: 'translateX(100%)'},
          }
        }
      },
      plugins: [
        require('tailwind-scrollbar-hide')
      ],
    },
    autoprefixer: {},
  },
}
