import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Layout = ({children }) => {
  return (
    <div className="bg-gradient-to-r from-pokeBlue to-pokeRed overflow-hidden">
      <Navbar/>
      { children }
      <Footer />
    </div>
  );
}

export default Layout;
