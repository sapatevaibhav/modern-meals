import "./App.css";
import CateringBanner from "./components/CateringBanner";
import Carousel from "./components/Description";
import Gallery from "./components/HomeGallery";
import MagicalExperience from "./components/MagicalExperience";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <CateringBanner />
      <Carousel />
      <MagicalExperience />
      <Gallery />
    </>
  );
}

export default App;
