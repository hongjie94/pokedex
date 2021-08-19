import {useState} from 'react';
import Head from 'next/head';
import Pagination from '../../components/Pokedex/Pagination';
import Link from 'next/link';
import PokemonTypes from '../../components/PokemonTypes.json';


const Pokedex = ({pokemons}) => {

  // Fuction for coverting number (1 to 001, 2 to 002 ...)
  Number.prototype.pad = function(size) {
    var s = String(this);
    while (s.length < (size || 2)) {s = "0" + s;}
    return s;
  };
  const [CardsPerPage, setCardsPerPage] = useState(20);
  const [PageStart, setPageStart] = useState(0);
  const [PageEnd, setPageEnd] = useState(CardsPerPage);

  const ImgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'

  return (
    <> 
      <Head>
        <title>Pokedex | List</title>
      </Head>

      <h1 className="pokedexHeader">Pokémon Pokédex</h1>

      <div className="card_grid">
        {
          pokemons.slice(PageStart, PageEnd).map((pokemon, index)=>(
            <Link href={`/pokedex/${pokemon.id}`} key={pokemon.name}>
              <a>
                <div className={`${ pokemon.type[1] ? pokemon.type[1] : pokemon.type[0]}  xl:w-40 pokemonCard min-w-mincard max-w-pokedexCard`}>
                  <img className='w-full h-full' src={`${ImgUrl}${pokemon.id}.png`} alt={pokemon.name}/>
                  <p className='pokemonCard_ID'>#{ (pokemon.id).pad(3)}</p>
                  <p className='pokemonCard_Name '>{pokemon.name}</p>
                  { pokemon.type[1] ?
                    <p className='pokemonCard_Type'>Type:{pokemon.type[1]},{pokemon.type[0]}</p>
                      :
                    <p className='pokemonCard_Type'>Type:{pokemon.type[0]}</p>
                  }
                </div>
              </a>
            </Link>
          ))
        }
      </div>
      <Pagination
        TotalCardNum= {pokemons.length}
        PageEnd={PageEnd}
        PageStart={PageStart}
        setPageEnd={setPageEnd}
        setPageStart= {setPageStart}
        CardsPerPage={CardsPerPage}
        setCardsPerPage={setCardsPerPage}
      />
    </>
  )
}

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
    props: { pokemons: result }
  };
};

export default Pokedex
