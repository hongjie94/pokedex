import Head from 'next/head';
import Link from 'next/link';
import axios from 'axios';


export const getStaticProps = async ()=> {
  const NumPokemon = 6;
  let pokemons =[];
  for (let i = 0; i < NumPokemon; i++) {
    let index = (Math.floor(Math.random() * 898) + 1) + i;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}/`);
    const data = await res.json();
    const res2 = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${index}/`);
    const data2 = await res2.json();

    pokemons.push({name: data.name, id: data.id, imgUrl: data.sprites.other["official-artwork"].front_default, color: data2.color.name});
  }
  return {
    props: { pokemons: pokemons}
  }
};

export default function Home({pokemons}) {

  return (
    <>
      <Head>
        <title>Pokédex | Home</title>
      </Head>


<div className="relative bg-indigo-600 overflow-hidden font-Rammetto">
  <div className="max-w-7xl mx-auto">
    <div className="relative z-10 pb-8 bg-indigo-600 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
      <svg 
        className="
          hidden lg:block absolute right-0 inset-y-0 
          h-full w-48 text-white transform translate-x-1/2
        " 
        fill="#4f46e5" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg>
      <div className="lg:block lg:relative pt-6 px-2 sm:hidden lg:px-8 w-screen">
        <div className='grid gap-10 lg:grid-cols-6 md:grid-cols-3 my-10 xl:mr-40'>
          {
            // brown white
            pokemons.map((pokemon)=>(
              <div className={`bg-${pokemon.color}-700
              p-3 m-auto border rounded-lg shadow-xl font-Roboto 
              transform hover:scale-125 hover: shadow-2xl
              cursor-pointer
              max-w-maxcard`}
              key={pokemon.id} >
                <img className='w-full h-full' src={pokemon.imgUrl} alt={pokemon.name}/>
                <p className='text-center text-black tracking-wide shadow-inner shadow-2xl bg-gray-200 rounded-full max-w-carNum'>#{pokemon.id}</p>
                <p>{pokemon.color}</p>
                <p className='text-center text-white capitalize truncate min-w-150'>{pokemon.name}</p>
              </div>
            ))
          }
        </div>
      </div>
     
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <span className="pl-1 lg:text-xl text-white tracking-wide">Explore your Favorite Pokémon</span>
          <h1 className="text-4xl tracking-tight font-extrabold mt-2 tracking-wide py-5 sm:text-5xl md:text-6xl">
            <span className="block text-white xl:inline">Pokédex</span>
          </h1>
         
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-full shadow">
            <Link href='/pokedex'>
              <a className="w-full flex items-center justify-center px-8 py-3
              border border-transparent text-base font-medium 
              rounded-full text-black bg-yellow-300 transition 
              ease-in hover:bg-yellow-400 hover:shadow-inner md:py-4 md:text-lg md:px-10">
              See Pokémon List
              </a>
            </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
  <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 opacity-90">
    <img className="h-56 w-full object-contain object-bottom sm:h-72 md:h-96 lg:w-full lg:pl-36 lg:h-full lg:px-20 bg-red-500" src='/img/hero.svg' alt=""/>
  </div>
</div>
{/* 
<div className='grid gap-10 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 my-10 px-20'>
  {
    pokemons.map((pokemon)=>(
      <div className='p-3 m-auto border rounded-md shadow-md font-Rammetto' key={pokemon.id}>
        <img className='w-full h-full' src={pokemon.imgUrl} alt={pokemon.name}/>
        <p className='text-center '>#{pokemon.id}</p>
        <p className='text-center capitalize'>{pokemon.name}</p>
      </div>
    ))
  }
</div> */}

  



    </>
  )
}
