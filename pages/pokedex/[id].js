import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import EvolutionOne from '../../components/Pokedex/Id/EvolutionOne';
import EvolutionThree from '../../components/Pokedex/Id/EvolutionThree';
import EvolutionTwo from '../../components/Pokedex/Id/EvolutionTwo';



const Details = ({pokemon, species, evolution_chain, flavor_text, NextPokemonName, PrePokemonName}) => {
  
  const [SlectedType, setSlectedType]= useState(pokemon.types[0].type.name);

  const toggler = useRef(null);

  const ImgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

  const path = useRouter().asPath;

  // Reset toggler and colors 
  useEffect(() => {
    if(toggler.current) {
      toggler.current.checked = false;
    }
    setSlectedType(pokemon.types[0].type.name);
  }, [path]);

  // toggler colors base on pokemon types
  const toggleColor = ((e)=> {
    e.target.checked ? setSlectedType(pokemon.types[1].type.name) : setSlectedType(pokemon.types[0].type.name);
  });

  return (
    <> 
      <Head>
        <title>Pokédex | {pokemon.name.toUpperCase()}</title>
      </Head>
      {/*  Pokedex  */}
      <div className='pokedex below-750:mx-0 below-500:p-0'>
        <div className='max-w-screen-2xl'>
          <div className={pokemon.id === 1 ? 'flex justify-between w-full p-8 below-750:justify-end' :'flex justify-between w-full p-8'}>
            {/*  Previous Pokemon  */}
            <div className={pokemon.id === 1 ? 'hidden' : 'pokedexArrow_wrap w-48'}>
              <Link href={`/pokedex/${(pokemon.id - 1)}`} key={pokemon.name}>
                <a className='flex items-center truncate'>
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path></svg>
                  <span className='px-2 font-bold'>#{('00' + (pokemon.id - 1)).slice(-3)}</span>
                  <span className='capitalize font-semibold runcate'>{PrePokemonName.toUpperCase()}</span>
                </a>
              </Link>
            </div>

          {/*  Current Pokemon  */}
          <div className={`${SlectedType}_type text-gray-100 font-bold tracking-wider shadow-inner bg-opacity-75 py-3 px-4 rounded-md border-transparent max-w-cur below-750:hidden`}>
            <div className='p-2 px-3 rounded-md truncate'>
              <span>#{('00' + (pokemon.id)).slice(-3)}</span>
              <span className='px-2'>{pokemon.name.toUpperCase()}</span>
            </div>
            </div>

            {/*  Next Pokemon  */}
            <div className={pokemon.id === 898 ? 'hidden' : 'pokedexArrow_wrap  w-48 justify-end'}>
              <Link href={`/pokedex/${(pokemon.id + 1)}`} key={pokemon.name}>
                <a className='truncate'>
                  <span className='font-bold'>#{('00' + (pokemon.id + 1)).slice(-3)}</span>
                  <span className='px-2 font-semibold runcate'>{NextPokemonName.toUpperCase()}</span>
                </a>
              </Link>
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </div>
          </div>

          <div className='below-750:flex hidden justify-center w-full`'>
          {/*  Current Pokemon show below 750px  */}
          <div className={`${SlectedType}_type text-gray-100 font-bold tracking-wider shadow-inner bg-opacity-75 py-3 px-4 rounded-md border-transparent max-w-cur
          `}>
            <div className='p-2 px-3 rounded-md truncate'>
              <span>#{('00' + (pokemon.id)).slice(-3)}</span>
              <span className='px-2'>{pokemon.name.toUpperCase()}</span>
            </div>
            </div>
          </div>  

          <div className='flex justify-items-center justify-center items-center p-5 lg:flex-row flex-col'>

           {/*  Image & Stats section */}
          <section className={`${SlectedType} 
            flex justify-items-center rounded-l-md lg:w-auto justify-between items-center lg:flex-col lg:h-DetailHeight my-5 w-full lg:rounded-r-none rounded-r-md 
            below-750:flex-col below-750:w-26rem below-500:w-23rem`}>

            {/*  Image */}
            <div className={`bg-transparent image-wrap lg:h-full lg:w-full lg:pb-0 h-72 flex justify-center items-center w-2/5 lg:p-10 pr-0 pl-10 below-750:p-0 below-750:w-26rem`}>
              <img className="w-72 lg:p-0" src={`${ImgUrl}${pokemon.id}.png`} alt={pokemon.name} />
            </div>

            {/*  Stats  */}
            <div className={`bg-transparent stats lg:pb-7 lg:pt-2 lg:px-10 lg:h-full lg:w-full h-72 w-auto flex lg:justify-center lg:items-end items-center w-3/5
              pl-11 justify-start below-750:pl-0 below-750:justify-center below-750:w-80
            ` }>
              <div className='bg-gray-100 lg:p-5 lg:w-full rounded-md px-10 py-5 min-w-statsCard shadow-inner below-750:w-full'> 
              <h1 className='font-bold text-xl mb-2'>Base Stats</h1>
              { pokemon.stats.map((data, index)=> (
                <div key={data.stat.name + index}>
                  <span className='text-sm font-medium'>{data.stat.name.toUpperCase()}: </span>
                  <span className='text-sm'>{data.base_stat}</span>
                </div>
                ))
              }
              </div>
            </div> 
          </section>

          {/* Details */} 
          <section className="details-section w-full below-750:w-26rem below-750:h-full below-750:p-8">

            {/*  Pokemon Details  */}
            <div className='pokemonDetails lg:w-full lg:min-w-minWDetails max-w-lg w-32rem shadow-inner below-750:w-80'>

              {/* Pokemon Id */}
              <p className='detail_Id'> #{('00' + pokemon.id).slice(-3)}</p>
            
              {/* Pokemon Name */}  
              <div className="flex items-center justify-start w-full my-2">
                <p className='detail_Name'>{pokemon.name}</p>            
                { pokemon.types.length > 1 && 
                  <>
                    {/*  Color toggle  */}
                    <label htmlFor="toggle" className="flex items-center cursor-pointer">
                      <div className="relative">
                        <input type="checkbox" ref={toggler} id="toggle" value="false" className="sr-only" onChange={(e)=>{toggleColor(e)}}/>
                        <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
                        <div className={`${SlectedType} colorTogglerDot dot`}></div>
                      </div>
                    </label>
                  </>
                }
              </div>

              {/* Pokemon Type */}  
              <div className='my-3'>
                <span className='font-medium'>Type: </span> 
                <span className={`${pokemon.types[0].type.name}_type detailType`}>
                  {pokemon.types[0].type.name.toUpperCase()}
                </span> 
                { pokemon.types.length > 1 && 
                  <span className={`${pokemon.types[1].type.name}_type detailType`}>
                    {pokemon.types[1].type.name.toUpperCase()}
                  </span>
                }
              </div>

              {/* Pokemon Abilities */}    
              <div className="capitalize">
                <span className='font-medium'>Abilities: </span> 
                { pokemon.abilities.map((data, index) => (
                    <span key={data.ability.name + index} className='capitalize text-sm'>{data.ability.name} </span>
                  ))
                }
              </div>    
            
              {/* Pokemon Height */}    
              <div className='text-sm'>
                <span className='font-medium text-base'>Height: </span> 
                <span>{(pokemon.height/ 10).toFixed(1) + 'm'} </span>
                <span>({Math.floor((pokemon.height / 10) * 3.28084 )}'</span>
                <span>{((((pokemon.height / 10) * 3.28084 ) % 1 ) * 12).toFixed(0) }")</span>
              </div>

              {/* Pokemon Weight */}    
              <div className='text-sm'>
                <span className='font-medium text-base'>Weight: </span> 
                <span>{((pokemon.weight) /10).toFixed(1) + 'kg'} </span> 
                <span>({(pokemon.weight / 10 * 2.20462).toFixed(2) + 'lbs'})</span>
              </div>

              {/* Pokemon Growth Rate */}    
              <div className='capitalize'>
                <span className='font-medium'>Growth Rate: </span> 
                <span className='text-sm'>{species.growth_rate.name}</span> 
              </div>

              {/* Pokemon Capture Rate */}     
              <div>
                <span className='font-medium'>Capture Rate: </span> 
                <span className='text-sm'>{species.capture_rate}</span> 
              </div>

              {/* Pokemon Base Happiness */}    
              <div>
                <span className='font-medium'>Base Happiness: </span> 
                <span className='text-sm'>{species.base_happiness}</span> 
              </div>
            </div>

            {/* Pokédex Entries */}      
            <div className='entries mincardDetails py-7 shadow-inner below-750:w-80 below-750:mt-5'>
              <h1 className='font-bold text-xl mb-2'>Pokédex Entries</h1>
              <p>{flavor_text[0].flavor_text}</p>
            </div> 
          </section>
        </div> 

        {/*  25rem, 20rem  */}   
       
        {/*  Evolution Chain  */}   
        <div className='flex justify-center px-5 text-gray-100'>
        { evolution_chain[0].chain.evolves_to[0] &&
          <section className='evolutionChain below-750:w-26rem'> 
            <span className='font-bold text-xl mt-10 bg-gray-100 text-gray-800 rounded-md p-4'>Evolution Chain</span>
            <div className='flex p-5 m-5 rounded-md lg:flex-row flex-col below-750:p-0'>
              {/* Evolution 1 */}
              <EvolutionOne 
                SlectedType={SlectedType}
                ImgUrl={ImgUrl}
                evolution_chain={evolution_chain}
              />

              {/* Evolution 2 */}
              <EvolutionTwo
                SlectedType={SlectedType}
                ImgUrl={ImgUrl}
                evolution_chain={evolution_chain}
              />  
                
              {/* Evolution 3 */}  
              <EvolutionThree 
                SlectedType={SlectedType}
                ImgUrl={ImgUrl}
                evolution_chain={evolution_chain}
              />
            </div>
          </section>
        }
        </div>     
        </div>  
      </div>
    </>
  )
};

export const getStaticPaths = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=898&offset=0/');
  const data = await res.json();

  const paths = (data.results).map((pokedex, index) => {
    return {
      params: { id: (index + 1).toString() }
    }
  })
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {

  const id = context.params.id;
  let evolution_chain = [];
  let PrePokemonName;
  let NextPokemonName;

  // Get pokemon datas
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/' + id);
  const pokemon = await res.json();

  // Get pokemon species datas
  const res2 = await fetch('https://pokeapi.co/api/v2/pokemon-species/' + id);
  const species = await res2.json();

  // Get next pokemon name
  if (id < 898) {
    const res3 = await fetch('https://pokeapi.co/api/v2/pokemon/' + (Number(id) + 1));
    const NextPokemonData  = await res3.json();
    NextPokemonName = NextPokemonData.name;
  }else {
    NextPokemonName = 'null'
  }

  // Get previous pokemon name
  if(id > 1) {
    const res4 = await fetch('https://pokeapi.co/api/v2/pokemon/' + (Number(id) - 1));
    const PrePokemonData= await res4.json();
    PrePokemonName = PrePokemonData.name;
  } else {
    PrePokemonName = 'null'
  }
   
  // Filter the english version of text
  const flavor_text = species.flavor_text_entries.filter((text)=> {
     return text.language.name === 'en';
  });

  // Get pokemon evolution chain
  if (species.evolution_chain.url) {
    const res3 = await fetch(species.evolution_chain.url);
    const evolution_chainData = await res3.json();
    evolution_chain.push(evolution_chainData);
  }
  
  return {
    props: { pokemon, species, evolution_chain, flavor_text, PrePokemonName, NextPokemonName}
  }
}

export default Details
