import Head from 'next/head';
import axios from 'axios';
import Style from '../styles/pokedex.module.css';
import Pagination from '../components/Pokedex/Pagination';
import Dropdown from '../components/Pokedex/Dropdown';

export const getStaticProps = async ()=> {
 
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=898&offset=0');
  const data = await res.json();

  return {
    props: { pokemons: data}
  }
};

const pokedex = ({pokemons}) => {

  console.log(pokemons);

  const FetchForSymbolData = async () => {
    await axios({
      method: 'get',
      url: `https://pokeapi.co/api/v2/pokemon/?limit=898&offset=0`
    })
    .then(function (res) {
      if(res.data) {
        alert('worked')
        console.log(res.data);
      }
    }).catch(err => {
      if(err.response) {
        console.log(err.response);
      } 
    });
  }

  

  // G1 1-151
  // G2 152-251
  // G3 152-386
  // G4 387-493
  // G5 494-649
  // G6 650-721
  // G7 722-809
  // G8 810-898

  // axios.get('https://pokeapi.co/api/v2/pokemon/1/').then(function (response)  {
  //   response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
  // });
  return (
    <> 
  {/* https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png */}
    {/* https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0 */}
    {/* https://pokeapi.co/api/v2/pokemon-species/1/ */}
    {/* https://pokeapi.co/api/v2/evolution-chain/1/ */}
    {/* https://pokeapi.co/api/v2/pokemon-color/green/ */}
    {/* https://pokeapi.co/api/v2/pokemon/1/ */}
    {/* https://pokeapi.co/api/v2/pokemon/898 */}
    {/* https://pokeapi.co/api/v2/type/18/ */}
    {/* colors 
      black 
      blue
      brown
      gray
      green
      pink
      purple
      red
      white
      yellow
    */}
  
      {/*  For search
      https://pokeapi.co/api/v2/pokemon/bulbasaur/ */}
      <Head>
        <title>Pokedex | List</title>
      </Head>
      <div className="grid grid-cols-12 min-h-screen">
        {/* Type */}
        <section className='col-span-2 bg-red-200'>
        Type
        <button className='rounded bg-yellow-300 shadow p-5' onClick={()=> FetchForSymbolData()}>test</button>
        </section>
        
        {/* List */}
        {/* <section className='col-span-6 bg-green-200'>
          List { pokemons.results.map((pokemon, index)=>(
            <>
            <p key={pokemon.url}>{pokemon.name}</p> 
            <p key={pokemon.name}>{pokemon.url}</p> 
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index}.png`} alt=""/>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index}.svg`} alt=""/>
            </>
          ))}
        </section> */}

        {/* Pokemon info */}
        <section className='col-span-4 bg-yellow-200'>
          Pokemon
        </section>
        <div className="bg-red-200 p-5">
        <div className={Style.fire}>fire</div>
        <div className={Style.grass}>grass</div>
        <div className={Style.electric}>electric</div>
        <div className={Style.water}>water</div>
        <div className={Style.ground}>ground</div>
        <div className={Style.rock}>rock</div>
        <div className={Style.fairy}>fairy</div>
        <div className={Style.poison}>poison</div>
        <div className={Style.bug}>bug</div>
        <div className={Style.dragon}>dragon</div>
        <div className={Style.psychic}>psychic</div>
        <div className={Style.flying}>flying</div>
        <div className={Style.fighting}>fighting</div>
        <div className={Style.normal}>normal</div>
        </div>
      </div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>
      </div>
   
   
      {/* <Dropdown/> */}
      <Pagination/>
 

    </>
  )
}

export default pokedex
