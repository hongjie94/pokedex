import Link from 'next/link';
import Image from 'next/image';
import {useState} from 'react'
const Navbar = () => {

  const [ShowNav, SetShowNav] = useState(false);
  
  const toggleNav = () => {
    ShowNav ? SetShowNav(false) : SetShowNav(true)
  };

  return (
    <nav className="navmain">
      {/* Logo */}
      <div className="logo">
        <Image src="/img/ball.png" width={30} height={35} alt='logo'/>
        <span className="logoSpan">Pokédex</span>
      </div>

      {/* Buger icon */}
      <div className="block lg:hidden">
        <button className="MobileIcon" onClick={()=>toggleNav()}>
          <svg 
            className="fill-current h-5 w-5" 
            viewBox="0 0 20 20" 
            xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path 
            d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
          </svg>
        </button>
      </div>

      {/* Nav Links */}
      <div className={ShowNav ? 'navlinks block' : 'navlinks hidden lg:block'}>
        <div className="lg:flex-grow lg:text-center">
          <Link href="/"><a className="navlink" >Home</a></Link>
          <Link href="/about"><a className="navlink lg:px-20" >About</a></Link>
          <Link href="/pokemons"><a className="navlink" >Pokémons</a></Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
