import "./App.css";

import Header from "./components/Header";
import Slider from "./components/Slider";
import Noticias from "./components/Noticias";
import ImgGrid from "./components/ImgGrid";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Slider />
      <Noticias />
      <ImgGrid />
      <Footer />
    </div>
  );
}

export default App;
