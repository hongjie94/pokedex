import Link from 'next/link';

const EvolutionThree = ({SlectedType, ImgUrl, evolution_chain}) => {

  const EvolutionSpecies3 = () => {
    if(evolution_chain[0].chain.evolves_to[0].evolves_to[0]) {
      return (evolution_chain[0].chain.evolves_to[0].evolves_to[0].species);
    }
  }

  const EvolutioEevolves = (evolution_chain[0].chain.evolves_to);
  const EvolutioEevolves3 = (evolution_chain[0].chain.evolves_to[0].evolves_to);

  return (
    <>
       { EvolutioEevolves3.length === 1 &&  EvolutioEevolves.length === 1 &&
           <div className='evolutionCenter flex-col' >
            <div  className={`${SlectedType} p-3 rounded-full mb-5 lg:w-auto w-36`}>
              <img className='w-32 p-2' src={ImgUrl + (EvolutionSpecies3().url.slice(42, -1)) + '.png'} alt="not-found"/>
            </div>
            <p className='text-sm tracking-wide'>#{('00'+EvolutionSpecies3().url.slice(42, -1)).slice(-3)}</p>
            <Link href={'/pokedex/'+(EvolutionSpecies3().url.slice(42, -1))}>
              <a>
                <p className='evolution_Name'>{EvolutionSpecies3().name}</p>
              </a>
            </Link>  
          </div>  
          } 
         
          {/* Evolution 3 (evolves to more than 1 types) */}
          { EvolutioEevolves3.length > 1 &&
            <>
              <div className='evolutionCenter lg:flex-col flex-row'>
                {(evolution_chain[0].chain.evolves_to[0].evolves_to).map((evolution, index) => (
                  <div className='evolutionCenter my-5 lg:flex-row flex-col' key={`EV3_${index}`}>
                    <div className='evolutionCenter evolution_requirments'>
                      <svg className="evolutionArrow" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" /><path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                      {/* Require Level-up */}
                      { evolution.evolution_details[0].trigger.name === 'level-up' &&
                        <>
                          { evolution.evolution_details[0].min_level ?
                          <p className="evolution_Details">Level {evolution.evolution_details[0].min_level}</p>
                          :
                          <p className="evolution_Details">Happiness {evolution.evolution_details[0].min_happiness}</p>
                          }
                        </>
                      }
                      { evolution.evolution_details[0].trigger.name === 'use-item' &&
                        <p className='evolution_Details'>Use {evolution.evolution_details[0].item.name}</p>
                      }
                      { evolution.evolution_details[0].trigger.name === 'trade' &&
                        <> 
                          {evolution.evolution_details[0].held_item ?
                            <p className='evolution_Details'>Trade Holding <br/> {evolution.evolution_details[0].held_item.name}</p> 
                            :
                            <p className='evolution_Details'>Trade</p> 
                          }
                        </>
                      }
                    </div>
                    {/* Species Image and name */}
                    <div className='evolutionCenter flex-col '>
                      <div className={`${SlectedType} p-3 rounded-full mb-5 lg:w-auto w-28`}>  
                        <img className='w-32 p-2' src={ImgUrl + (evolution.species.url.slice(42, -1)) + '.png'} alt="not-found"/>
                      </div>
                      <p className='text-sm tracking-wide'>#{('00'+evolution.species.url.slice(42, -1)).slice(-3)}</p>
                      <Link href={'/pokedex/'+(evolution.species.url.slice(42, -1))}>
                        <a>
                          <p className='evolution_Name'>{evolution.species.name}</p>
                        </a>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </>
          
          } 
    </>
  )
}

export default EvolutionThree
