import Head from 'next/head';
import Link from 'next/link';
import PokemonTypes from '../components/PokemonTypes.json';

export const getStaticProps = async ()=> {
 
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=898&offset=0');
  const data = await res.json();

  let pokemons = []
  
  data.results.forEach((pokemon, index)=> {
    PokemonTypes.PokemonTypes.filter((type)=> {
      const match = type.name === pokemon.name;
       if(match) {
        let data = {
          name: pokemon.name,
          type: type.type
        };
        pokemons.push(data);
      }
    });
  });

  // Remove Deplicate 
  const result = Array.from(new Set(pokemons.map(p => p.name)))
    .map((pokeName, index) => {
      return {
        name: pokeName,
        id: (index + 1),
        type: pokemons.filter(p => p.name === pokeName).map(p => p.type)
      }
    });

  return {
    props: { Allpokemons: result }
  };
};


const Home = ({Allpokemons}) => {
  
  // Fuction for padding numbers (1 to 001, 2 to 002 ...)
  Number.prototype.pad = function(size) {
    var s = String(this);
    while (s.length < (size || 2)) {s = "0" + s;}
    return s;
  };

  // Generate 6 random pokemons
  const NumPokemons = 6;
  let randomPokemons =[];

  for (let i = 0; i < NumPokemons; i++) {
    let randomId = (Math.floor(Math.random() * 898) + 1) + i;
    const randomPokemon = Allpokemons.filter((pokemon)=>{
      return pokemon.id === randomId;
    });
    randomPokemons.push(randomPokemon);
  }

  // Pokemons Image url
  const ImgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

  return (
    <>
      <Head>
        <title>Pokédex | Home</title>
      </Head>

      {/* Hero */}
      <div className="hero">
        <div className="max-w-7xl mx-auto">
          <div className="heroLeft">

            {/* Hero Divider  */}
            <svg 
              className="hero_divider" 
              fill="#4f46e5" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            {/* Pokemon Cards  */}
            <div className="hero_pokemonCard_wrap">
              <div className='hero_pokemonCards'>
                { 
                  randomPokemons.map((pokemons)=>(
                    pokemons.map((pokemon)=>(
                     <Link  href={`/pokedex/${pokemon.id}`} key={pokemon.id} >
                      <a>
                      <div 
                        className={`${pokemon.type[0]} pokemonCard max-w-maxcard`}>
                        <img className='w-full h-full' src={`${ImgUrl}${pokemon.id}.png`} alt={pokemon.name}/>
                        <p className='pokemonCard_ID'>#{pokemon.id.pad(3)}</p>
                        <p className='pokemonCard_Name '>{pokemon.name}</p>
                        { pokemon.type[1] ?
                          <p className='pokemonCard_Type'>Type:{pokemon.type[0]},{pokemon.type[1]}</p>
                          :
                          <p className='pokemonCard_Type'>Type:{pokemon.type[0]}</p>
                        }
                      </div>
                      </a>
                    </Link>
                    ))
                  ))
                }
              </div>
            </div>

            {/* Hero Text / Hero Button  */}    
            <main className="heroLeftMain ">
              <div className="sm:text-center lg:text-left">
                <span className="pl-1 lg:text-xl text-white tracking-wide">Explore your Favorite Pokémons</span>
                <h1 className="heroLeftMainH1">
                  <span className="block text-white xl:inline">Pokédex</span>
                </h1>
                <div className="heroBtnWrap">
                  <div className="rounded-full">
                  <Link href='/pokedex'>
                    <a className="heroBtn">
                    See Pokémon List
                    </a>
                  </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>

        {/* Hero Right side Image */}           
        <div className="heroRight">
          <img className="heroImg" src='/img/hero.svg' alt="PokemonImg"/>
        </div>
      </div>
    </>
  )
};

export default Home;