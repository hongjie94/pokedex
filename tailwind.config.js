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
        fire_type: '#e65533',
        water_type: '#1E3A8A',
        grass_type: '#065F46',
        electric_type: '#FBBF24', 
        ice_type: '#60A5FA',
        dark_type:'#000000',
        fighting_type:'#7F1D1D',
        flying_type: '#818CF8',
        poison_type: '#5B21B6',
        ground_type: '#92411e',
        rock_type: '#4B5563',
        bug_type: '#064E3B',
        steel_type: '#1F2937',
        normal_type: '#9CA3AF',
        unknown_type: '#9CA3AF',   
        psychic_type: '#DB2777',     
        fairy_type: '#F87171'
      },
      height: {
        DetailHeight: '38em',
        '40em': '40em'
      },
      width: {
        '26rem': '26rem',
        '25rem': '25rem',
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
