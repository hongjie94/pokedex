import Link from 'next/link';
import Requirements from './EvolutionRequirements';

const EvolutionTwo = ({SlectedType, ImgUrl, evolution_chain}) => {

  const EvolutionSpecies2 = (evolution_chain[0].chain.evolves_to[0].species);
  const Evolution2 = evolution_chain[0].chain.evolves_to[0].evolves_to[0];

  const EvolutionDetails2 = () => {
    if (evolution_chain[0].chain.evolves_to[0].evolves_to) {
      
      return (evolution_chain[0].chain.evolves_to[0].evolves_to[0].evolution_details[0]);
    }
  };

  return (
    <>
      {/* Evolution 2 */}
      {evolution_chain[0].chain.evolves_to.length === 1 && 
        <div className='evolutionCenter flex-col'>
          <div  key={'2'} className={`${SlectedType} p-3 rounded-full mb-5 lg:w-auto w-36`}>
            <img className='w-32 p-2' src={ImgUrl + (EvolutionSpecies2.url.slice(42, -1)) + '.png'} alt="EvolutionSpecies2"/>
          </div>
          <p className='text-sm tracking-wide'>#{('00'+EvolutionSpecies2.url.slice(42, -1)).slice(-3)}</p>
          <Link href={'/pokedex/'+EvolutionSpecies2.url.slice(42, -1)}>
            <a>
              <p className='evolution_Name'>{EvolutionSpecies2.name}</p>
            </a>
         </Link>
        </div>
      }

      {/* Evolution requirment 2 */}
      {evolution_chain[0].chain.evolves_to[0].evolves_to.length === 1 &&  evolution_chain[0].chain.evolves_to.length === 1  &&
        <div className='lg:mx-8 evolutionCenter'>
          <div className='evolutionCenter evolution_requirments'>
          
          <svg  className="evolutionArrow" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" /><path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
          {/* Require Level-up */}
          { EvolutionDetails2().trigger.name === 'level-up' &&
            <>
              {Requirements(EvolutionDetails2()).levelupRequirments}
            </>
          }

          {/* Require Use-item */}
          { EvolutionDetails2().trigger.name ==='use-item' &&
            <p className='evolution_Details'>Use {EvolutionDetails2().item.name}</p>
          }

          {/* Require Trade */}
          { EvolutionDetails2().trigger.name ==='trade' &&
          <> 
            { EvolutionDetails2().held_item ?
              <p className='evolution_Details'>Trade Holding <br/> { EvolutionDetails2().held_item.name}</p> 
              :
              <p className='evolution_Details'>Trade</p> 
            }
          </>
          }
          </div>
        </div>
      }

      {/* Evolution 2 (evolves to more than 1 types) */}
      { evolution_chain[0].chain.evolves_to.length > 1 &&  Evolution2 &&
        <> 
          <div className='evolutionCenter flex-col'>
            { evolution_chain[0].chain.evolves_to.map((datas, index) => (
              <div className='evolutionCenter my-5' key={`Ev2_${index}`}>
                <div className='evolutionCenter evolution_requirments'>
                  <svg className="evolutionArrow" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" /><path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                  { datas.evolution_details[0].trigger.name === 'level-up' &&
                    <p className="evolution_Details">Level {datas.evolution_details[0].min_level}</p>
                  }
                </div>
                {/* Species Image and Name */}
                <div className='evolutionCenter flex-col'>
                  <div className={`${SlectedType} p-3 rounded-full mb-5 lg:w-auto w-28`}>  
                    <img className='w-32 p-2' src={ImgUrl + (datas.evolves_to[0].species.url.slice(42, -1)) + '.png'} alt="not-found"/>
                  </div>
                  <p className='text-sm tracking-wide'>#{('00'+datas.evolves_to[0].species.url.slice(42, -1)).slice(-3)}</p>
                  <Link href={'/pokedex/'+ datas.evolves_to[0].species.url.slice(42, -1)}>
                    <a>
                      <p className='evolution_Name'>{datas.evolves_to[0].species.name}</p>
                    </a>
                  </Link>  
                </div>
              </div>               
              ))
            }
          </div>
        </>
      }
    </>
  )
}

export default EvolutionTwo
