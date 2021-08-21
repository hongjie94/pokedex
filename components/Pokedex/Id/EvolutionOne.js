import Link from 'next/link';
import Requirements from './EvolutionRequirements';

const EvolutionOne = ({SlectedType, ImgUrl, evolution_chain}) => {

  const EvolutionSpecies1 = (evolution_chain[0].chain.species);
  const EvolutionDetails1 = (evolution_chain[0].chain.evolves_to[0].evolution_details[0]);
  const EvolutionDetails1length = evolution_chain[0].chain.evolves_to[0].evolution_details.length;
  return (
    <>
      {/* Evolution 1 */}
      <div className='evolutionCenter flex-col'>
        <div className={`${SlectedType} p-3 rounded-full mb-5 lg:w-auto w-36`}>
          <img 
            className='w-32 p-2' 
            src={ImgUrl + (EvolutionSpecies1.url.slice(42, -1)) + '.png'} 
            alt="EvolutionSpecies1"
          />
        </div>
        <p className='text-sm tracking-wide'>#{('00'+EvolutionSpecies1.url.slice(42, -1)).slice(-3)}</p>
        <Link href={'/pokedex/'+(EvolutionSpecies1.url.slice(42, -1))}>
          <a>
            <p className='evolution_Name'>{EvolutionSpecies1.name}</p> 
          </a>
        </Link>
      </div>
        
      {/* Evolution requirment 1 */}
      <div className='lg:mx-8 evolutionCenter'>
        <div className='evolutionCenter evolution_requirments'>
          
          { evolution_chain[0].chain.evolves_to.length === 1 && EvolutionDetails1 ?
          <> 
            <svg  className="evolutionArrow" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" /><path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
            
            {/* Require Level-up */}
            { EvolutionDetails1.trigger.name === 'level-up' &&
              <>
                {EvolutionDetails1length  === 1 &&
                  <>
                  
                    {Requirements(EvolutionDetails1).levelupRequirments}
                  </>
                }
                { EvolutionDetails1length > 1 &&
                  <>
                  {evolution_chain[0].chain.evolves_to[0].evolution_details.map((datas, index) => (
                    <div key={`Ev1${index}`}>
                      { datas.min_beauty &&
                        <p lassName='evolution_Details'  key={`Beauty${index}`}>Beauty {datas.min_beauty}</p>
                      }

                      {datas.trigger.name === 'trade' &&
                      <>
                        { datas.held_item ?
                          <p className='evolution_Details'>
                            Trade Holding <br/> { datas.held_item.name}</p> 
                          :
                          <p className='evolution_Details'>Trade</p> 
                        }
                      </>
                    }
                    </div>
                  ))}
                  </>
                }
              </>
            }

            {/* Require Use-item */}
            { EvolutionDetails1.trigger.name ==='use-item' &&
              <>
                { EvolutionDetails1.item ? 
                  <p className='evolution_Details'>Use {EvolutionDetails1.item.name}</p>
                  :
                  <p className='evolution_Details'>Use Item</p>
                }
              </>
            }

            {/* Require other */}
            { EvolutionDetails1.trigger.name ==='other' &&
              <p className='evolution_Details'>Other</p>
            }


            {/* Require Trade */}
            { EvolutionDetails1.trigger.name ==='trade' &&
            <> 
              { EvolutionDetails1.held_item ?
                <p className='evolution_Details'>Trade Holding <br/> { EvolutionDetails1.held_item.name}</p> 
                :
                <p className='evolution_Details'>Trade
                {EvolutionDetails1.trade_species &&
                  <>
                    <p>
                      with {EvolutionDetails1.trade_species.name}
                    </p>
                  </>
                }
                </p> 
              }
            </>
            }
            </>
            :
          <>
           { !EvolutionDetails1 &&
            <>
              <svg  className="evolutionArrow" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" /><path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
              <p className='evolution_Details'>Use Item</p>
            </>   
           }   
          </>    
            }

            {/* Evolution 1 (evolves to more than 1 types) */}
            { evolution_chain[0].chain.evolves_to.length !== 1 && EvolutionDetails1 &&
              <div className='flex lg:flex-col lg:w-full flex-row lg:overflow-hidden overflow-x-scroll below-750:w-25rem xsCardsWrap'>
              { (evolution_chain[0].chain.evolves_to).map((datas, index) => (
                <div className='evolutionCenter my-5 lg:flex-row flex-col' key={`Evs1${index}`}>
                  <div className='evolutionCenter evolution_requirments'>
                    <svg  className="evolutionArrow" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" /><path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                    {/* Require Level-up */}
                    { datas.evolution_details[0] && datas.evolution_details[0].trigger.name === 'level-up' &&
                    <> 
                      {Requirements(datas.evolution_details[0]).levelupRequirments}
                      <p className="text-xs w-32 text-center mb-2 capitalize">
                        { datas.evolution_details[0].relative_physical_stats === 1 &&
                        ' Attack > Defense'
                        }
                        { datas.evolution_details[0].relative_physical_stats === -1 &&
                          'Attack < Defense '
                        }
                        {datas.evolution_details[0].relative_physical_stats === 0 &&
                          'Attack = Defense'
                        }
                      </p>
                    </>
                    }

                    {/* Require Use-item */}
                    { datas.evolution_details[0] && datas.evolution_details[0].trigger.name ==='use-item' &&
                      <>
                        {datas.evolution_details[0].item ?
                          <p className='evolution_Details'>Use {datas.evolution_details[0].item.name}</p>
                          :
                          <p className='evolution_Details'>Use Item</p>
                        }
                      </>
                    }

                    {/* Require others */}
                    {  datas.evolution_details[0] && datas.evolution_details[0].trigger.name ==='other' && datas.species.name === "runerigus" &&
                      <p className='evolution_Details'>Near Dusty Bowl</p>
                    }
                    
                    {/* Require Trade */}
                    {  datas.evolution_details[0] && datas.evolution_details[0].trigger.name ==='trade' &&
                    <> 
                      { datas.evolution_details[0].held_item ?
                        <p className='evolution_Details'>Trade Holding <br/> { datas.evolution_details[0].held_item.name}</p> 
                        :
                        <p className='evolution_Details'>Trade</p> 
                      }
                    </>
                     
                    }

                    {/* Require Shed */}
                    { datas.evolution_details[0] && datas.evolution_details[0].trigger.name === 'shed' && 
                      <p className="evolution_Details"> Empty spot in party, </p>
                    }
                  </div>

                  {/* Species Image and name */}
                  {evolution_chain[0].chain.evolves_to.length !== 1 && 
                  <div className='evolutionCenter flex-col '>
                    <div className={`${SlectedType} p-3 rounded-full mb-5 lg:w-auto w-28`}>  
                      <img className='w-32 p-2' src={ImgUrl + (datas.species.url.slice(42, -1)) + '.png'} alt="not-found"/>
                    </div>
                    <p className='text-sm tracking-wide'>#{('00'+datas.species.url.slice(42, -1)).slice(-3)}</p>
                    <Link href={'/pokedex/'+datas.species.url.slice(42, -1)}>
                      <a>
                        <p className='evolution_Name'>{datas.species.name}</p>
                      </a>
                    </Link>  
                  </div>
                  }
                </div>
                ))
              }
            </div>
            
          }
          </div>
        </div>
    </>
  )
}

export default EvolutionOne
