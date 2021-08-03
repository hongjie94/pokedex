import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
  <nav className="flex items-center justify-between flex-wrap py-4 px-6 shadow-2xl bg-gray-800 font-Roboto">
    <div className="flex items-center flex-shrink-0 text-white mr-6">
      <Image src="/img/ball.png" width={30} height={35}/>
      <span className="font-Roboto font-bold tracking-tight text-3xl text-red-500 pl-2 pt-2">Pokédex</span>
    </div>
    <div className="block lg:hidden">
      <button className="flex items-center px-3 py-2 text-red-500 hover:text-red-700">
        <svg className="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto tracking-wide">
    <div className="lg:flex-grow lg:text-center">
      <Link href="/"><a className="navlink" >Home</a></Link>
      <Link href="/about"><a className="navlink lg:px-20" >About</a></Link>
      <Link href="/pokedex"><a className="navlink" >Pokémons</a></Link>
    </div>
  </div>
</nav>
    // <nav className='flex justify-between mx-auto px-10 py-2 bg-white shadow-lg'>
    //   <div className='flex align-center'>
    //     <Image src="/img/ball.png" width={80} height={80}/>
    //     <span>Pokemon</span>
    //   </div>
     
    //   <div className="flex justify-end text-red-600 font-medium items-end w-full">
    //     <Link href="/"><a className="py-1.5 px-5" >Home</a></Link>
    //     <Link href="/about"><a className=" py-1.5 px-5">About</a></Link>
    //     <Link href="/pokedex"><a className="py-1.5 px-5">Pokemon List</a></Link>
    //   </div>
    // </nav>
  )
}

export default Navbar
