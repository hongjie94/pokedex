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
        pokeRed: '#c33e34'
      },
      height: {
        DetailHeight: '38em',
        '40em': '40em',
        '40vh':'40vh',
        '60vh':'60vh'
      },
      width: {
        '26rem': '26rem',
        '25rem': '25rem',
        '23rem': '23rem',
        '28rem': '28rem',
        '32rem': '32rem',
        '40rem': '40rem'
      },
      maxWidth: {
        maxcard: '9em',
        carNum: '4em',
        type: '6em',
        cur: '15em',
        pokedexCard: '15em'
      },
      minWidth: {
        mincard: '9em',
        statsCard: '17.5em',
        minWDetails: '28rem'
      },
      screens: {
        'below-370': {'max': '370px'},
        'below-500': {'max': '500px'},
        'below-750': {'max': '750px'}
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  
};
