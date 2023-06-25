import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ShowCase from './components/ShowCase';
import FeatureList from './components/FeatureList';
import Button from './components/Button';
import Hero2 from './components/Hero2';
import Footer from './components/Footer';
import Gallery from './components/Gallery/Gallery';

const Home = () => {
  return (
    <div className="relative w-full">
      {/* <Navbar /> */}
      <Hero />
      <ShowCase />
      <FeatureList />
      <div className="font-great border-2 border-red-900 sm:text-xl md:text-3xl tracking-widest mx-auto bg-textSecondary px-4 sm:px-10 py-1 sm:py-3 my-4 max-w-max text-white">
        Design Your Suit
      </div>
      <Hero2 />
      <Gallery />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
