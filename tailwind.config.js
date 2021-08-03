module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Rammetto: ['Rammetto One'],
        Roboto: ['Roboto Mono']
      },
      colors: {
        pokeBlue: '#384987',
        pokeRed: '#c33e34',
        heroBlue: '#4D3495',
        heroRed: '#E52222'
      },
      maxWidth: {
        maxcard: '9em',
        carNum: '4em'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  
}
