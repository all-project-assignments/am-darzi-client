import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import ShowCase from "./components/ShowCase";
import FeatureList from "./components/FeatureList";
import Button from "./components/Button";
import Hero2 from "./components/Hero2";
import Footer from "./components/Footer";

const Home = () => {
    return (
      <div className="">
        <Navbar />
        <Hero />
        <ShowCase />
        <FeatureList />
        <div className="font-great sm:text-xl tracking-widest mx-auto bg-textSecondary px-4 py-1 my-4 max-w-max text-white">Design Your Suit</div>
        <Hero2 />
        <Footer />
      </div>
    );
  };
  
  export default Home;