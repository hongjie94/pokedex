import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const notfound = () => {
  return (
    <>
      <Head>
      <title>404 Page Not Found</title>
      </Head>
      <div className='h-80vh w-full flex items-center justify-start flex-col font-Rammetto pt-28 pb-56 space-y-4'>
        <div className='w-full p-5 flex items-center justify-center mb-2'>
          <Image src="/img/ball2.png" width={145} height={165} alt='poke-ball'/>
        </div>
        <p className='text-medium text-red-600'>404 ERROR</p>
        <h1 className='text-2xl md:text-5xl sm:text-3xl below-500:text-2xl'>Page not found.</h1> 
        <p className='text-center px-10'>Sorry, we couldn't find the page you're looking for</p>
        <div className='flex items-center'>
          <Link href="/">
            <a>
              <p className='text-white hover:text-blue-400 cursor-pointer'>Go back home</p> 
            </a>
          </Link>
          <svg className="w-10 h-10 pl-2" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </div>
      
      </div>
    </>
  )
   
}

export default notfound
