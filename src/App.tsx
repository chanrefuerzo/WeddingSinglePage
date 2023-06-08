import "./App.css";
import Home from "./pages/Home/index";
import Navbar from "./pages/Navbar";
import Us from "./pages/Us";
import Hero from "./pages/Hero";
import Story from "./pages/Story";
import HeroSecond from "./pages/HeroSecond";
import Where from "./pages/Where";
import HeroThird from "./pages/HeroThird";
import Gallery from "./pages/Gallery";
import HeroFourth from "./pages/HeroFourth";
import Groomsmen from "./pages/Groomsmen";
import Herogroom from "./pages/HeroGroom";
import BridesMaid from "./pages/Bridesmaid";
import HeroBride from "./pages/HeroBride";

function App() {
  return (
    <div className=" bg-gray-100">
      <Home />
      <Navbar />
      <Us />
      <Hero />
      <Story />
      <HeroSecond />
      <Where />
      {/* <HeroThird /> */}
      <HeroFourth />

      <Gallery />
      <Herogroom />

      <Groomsmen />
      <HeroBride />

      <BridesMaid />
    </div>
  );
}

export default App;
