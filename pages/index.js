import Head from 'next/head';
import Link from 'next/link';

export const getServerSideProps = async ()=> {
  
  // Generate 6 random pokemons
  const NumPokemon = 6;
  let pokemons =[];

  for (let i = 0; i < NumPokemon; i++) {
    let index = (Math.floor(Math.random() * 898) + 1) + i;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
    const data = await res.json();
    pokemons.push({
      name: data.name, 
      id: data.id, 
      imgUrl: data.sprites.other["official-artwork"].front_default, 
      types: data.types
    });
  }
  return {
    props: { pokemons}
  }
};

const Home = ({pokemons}) => {
  
  // Fuction for padding numbers (1 to 001, 2 to 002 ...)
  Number.prototype.pad = function(size) {
    var s = String(this);
    while (s.length < (size || 2)) {s = "0" + s;}
    return s;
  };

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
                  pokemons.map((pokemon)=>(
                    <Link  href={`/pokedex/${pokemon.id}`} key={pokemon.id} >
                      <a>
                      <div 
                        className={`${pokemon.types[0].type.name} pokemonCard max-w-maxcard`}>
                        <img className='w-full h-full' src={pokemon.imgUrl} alt={pokemon.name}/>
                        <p className='pokemonCard_ID'>#{pokemon.id.pad(3)}</p>
                        <p className='pokemonCard_Name '>{pokemon.name}</p>
                        { pokemon.types[1] ?
                          <p className='pokemonCard_Type'>Type:{pokemon.types[0].type.name},{pokemon.types[1].type.name}</p>
                          :
                          <p className='pokemonCard_Type'>Type:{pokemon.types[0].type.name}</p>
                        }
                      </div>
                      </a>
                    </Link>
                  ))
                }
              </div>
            </div>

            {/* Hero Text / Hero Button  */}    
            <main className="heroLeftMain ">
              <div className="sm:text-center lg:text-left">
                <span className="pl-1 lg:text-xl text-white tracking-wide">Explore your Favorite Pokémon</span>
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