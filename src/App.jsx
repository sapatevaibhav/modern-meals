import "./App.css";
import CateringBanner from "./components/CateringBanner";
import Carousel from "./components/Description";
import MagicalExperience from "./components/MagicalExperience";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <CateringBanner />
      <Carousel />
      <MagicalExperience />
    </>
  );
}

export default App;
