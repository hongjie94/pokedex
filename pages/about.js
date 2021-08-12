import Head from 'next/head';

const about = () => {
  return (
    <>
    <Head>
      <title>Pokedex | About</title>
    </Head>
    <div className='min-h-screen relative overflow-hidden flex justify-center items-center'>
        <img 
          className='absolute opacity-50 md:max-w-2xl sm:max-w-xl md:object-contain object-cover object-center' 
          src="/img/house.png" 
          alt=""
        />
      <div className="p-5 absolute bg-blue-200 bg-opacity-75 max-w-lg rounded-2xl">
        <h1>About</h1>
       <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
         similique earum vel vero quia reiciendis dicta, eaque cum ipsa temporibus sit 
        mollitia sed, natus quos asperiores cupiditate officiis molestias atque.</p>
      </div>
      
    </div>
  </>
  )
}

export default about
