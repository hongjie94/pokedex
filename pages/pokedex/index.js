import {useState} from 'react';
import Head from 'next/head';
import Pagination from '../../components/Pokedex/Pagination';
import Dropdown from '../../components/Pokedex/Dropdown';
import Link from 'next/link';
import PokemonTypes from '../../components/PokemonTypes.json';


const Pokedex = ({pokemons}) => {

  // Fuction for coverting number (1 to 001, 2 to 002 ...)
  Number.prototype.pad = function(size) {
    var s = String(this);
    while (s.length < (size || 2)) {s = "0" + s;}
    return s;
  };

  const [PageStart, setPageStart] = useState(0);
  const [PageEnd, setPageEnd] = useState(20);

  const ImgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'

  // G1 1-151
  // G2 152-251
  // G3 152-386
  // G4 387-493
  // G5 494-649
  // G6 650-721
  // G7 722-809
  // G8 810-898


  return (
    <> 
      {/*  For search
      https://pokeapi.co/api/v2/pokemon/bulbasaur/ */}
      <Head>
        <title>Pokedex | List</title>
      </Head>

      {/* .slice(PageStart, PageEnd) */}
      <div className="card_grid ">
        {
          pokemons.slice(PageStart, PageEnd).map((pokemon, index)=>(
            <Link href={`/pokedex/${(Number(index) + 1)}`} key={pokemon.name}>
              <a>
                <div className={`${ pokemon.type[1] ? pokemon.type[1] : pokemon.type[0]}  xl:w-40 pokemonCard min-w-mincard max-w-pokedexCard`}>
                  <img className='w-full h-full' src={`${ImgUrl}${Number(index) + 1}.png`} alt={pokemon.name}/>
                  <p className='pokemonCard_ID'>#{ (Number(index) + 1).pad(3)}</p>
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
      {/* <Dropdown/> */}
      <Pagination
        Total= {pokemons.length}
        PageEnd={PageEnd}
        PageStart={PageStart}
        setPageEnd={setPageEnd}
        setPageStart= {setPageStart}
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
  const result = Array.from(new Set(pokemons.map(s => s.name)))
    .map(pokeName => {
      return {
        name: pokeName,
        type: pokemons.filter(s => s.name === pokeName).map(type => type.type)
      }
    });

  return {
    props: { pokemons: result }
  };
};

export default Pokedex
