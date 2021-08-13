import Head from 'next/head';
import { useState } from 'react';
import EvolutionOne from '../../components/Pokedex/Id/EvolutionOne';
import EvolutionThree from '../../components/Pokedex/Id/EvolutionThree';
import EvolutionTwo from '../../components/Pokedex/Id/EvolutionTwo';


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

  // Get pokemon datas
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/' + id);
  const pokemon = await res.json();

  // Get pokemon species datas
  const res2 = await fetch('https://pokeapi.co/api/v2/pokemon-species/' + id);
  const species = await res2.json();


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
    props: { pokemon, species, evolution_chain, flavor_text}
  }
}



const Details = ({pokemon, species, evolution_chain, flavor_text}) => {
  
  const [SlectedType, setSlectedType]= useState(pokemon.types[0].type.name);

  const ImgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

  // const EvolutionSpecies1 = (evolution_chain[0].chain.species);
  // const EvolutionDetails1 = (evolution_chain[0].chain.evolves_to[0].evolution_details[0]);

  // const EvolutionSpecies2 = (evolution_chain[0].chain.evolves_to[0].species);
  // const EvolutionDetails2 = (evolution_chain[0].chain.evolves_to[0].evolves_to[0].evolution_details[0]);
  
  // const EvolutionSpecies3 = (evolution_chain[0].chain.evolves_to[0].species);
  // const EvolutionDetails3 = (evolution_chain[0].chain.evolves_to[0].evolves_to[0].evolution_details[0]);

  const toggleColor = ((e)=> {
    e.target.checked ? setSlectedType(pokemon.types[1].type.name) : setSlectedType(pokemon.types[0].type.name);
  });


  // console.log('evolution_chain', evolution_chain[0].chain.species.name);
  // console.log('evolution_chain', evolution_chain[0].chain.species.url);

  // console.log('evolution_chain', evolution_chain[0].chain.evolves_to[0].evolution_details[0].min_level);

  // console.log('evolution_chain', evolution_chain[0].chain.evolves_to[0].species.name);
  // console.log('evolution_chain', evolution_chain[0].chain.evolves_to[0].species.url);

  // console.log('evolution_chain', evolution_chain[0].chain.evolves_to[0].evolves_to[0].evolution_details[0].min_level);

  // console.log('evolution_chain', evolution_chain[0].chain.evolves_to[0].evolves_to[0].species.name);
  // console.log('evolution_chain', evolution_chain[0].chain.evolves_to[0].evolves_to[0].species.url);
  
  // console.log('evolution_chain', evolution_chain[0].chain.evolves_to[0].evolves_to[0].evolves_to[0]);
  return (
    <> 
      <Head>
        <title className='capitalize'>Pokédex | {pokemon.name}</title>
      </Head>
      {/*  Pokedex  */}
      <div className='pokedex'>
        <div>
        <div className='flex justify-items-center justify-center items-center p-5'>
        {/*  Image  */}
        <section className='image-section '>
          <div className={`${SlectedType} image-wrap`}>
            <img className="w-72" src={`${ImgUrl}${pokemon.id}.png`} alt={pokemon.name} />
          </div>

          {/*  Stats  */}
          <div className={`${SlectedType} stats h-full` }>
            <div className='bg-gray-100 p-5 rounded-md'> 
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
        <section className="details-section">

          {/*  Pokemon Details  */}
          <div className='pokemonDetails'>

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
                      <input type="checkbox" id="toggle" value="false" className="sr-only" onChange={(e)=>{toggleColor(e)}}/>
                      <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
                      <div className={`${SlectedType} colorTogglerDot`}></div>
                    </div>
                  </label>
                </>
              }
            </div>

            {/* Pokemon Type */}  
            <div className='my-3'>
              <span className='font-medium'>Type: </span> 
              <span className={`bg-${pokemon.types[0].type.name}_type detailType`}>
                {pokemon.types[0].type.name.toUpperCase()}
              </span> 
              { pokemon.types.length > 1 && 
                <span className={`bg-${pokemon.types[1].type.name}_type detailType`}>
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
            <div className='entries'>
              <h1 className='font-bold text-xl mb-2'>Pokédex Entries</h1>
              <p>{flavor_text[0].flavor_text}</p>
            </div> 
          </section>
        </div> 

        {/*  Evolution Chain  */}   
        <div className='flex justify-center px-5 text-gray-100'>
        { evolution_chain[0].chain.evolves_to[0] &&     
          <section className='evolutionChain'> 
            <div className='flex p-5 m-5 mb-5 l rounded-md'>
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
export default Details
