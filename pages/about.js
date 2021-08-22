import Head from 'next/head';

const about = () => {
  return (
    <>
    <Head>
      <title>Pokedex | About</title>
    </Head>
    <div className='about'>
      <img 
        className='aboutBgImage' 
        src="/img/house.png"
        alt="pokeHouse"
      />
      <div className="aboutContents">
        <h1 className='text-3xl p-2 font-semibold' >About</h1> 
        {/* source from https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9dex */}
        <div className='p-2'>The 
          <a 
            target="_blank" 
            rel='noreferrer' 
            href="https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9dex"
            className='text-red-500 hover:text-blue-500 cursor-pointer' 
          > Pokédex </a> 
          is a handheld electronic encyclopedia device, one which 
          is capable of recording and retaining information of the various Pokémon of the world.
          <br/>
          <div className='p-2 w-full text-right mt-5'>
            <p>Sources of Datas from <a 
                href="https://pokeapi.co/"  
                target="_blank" 
                rel='noreferrer' 
                className='text-red-500 hover:text-blue-500 cursor-pointer'
              > 
                PokeApi
              </a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default about
