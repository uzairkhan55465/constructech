import './App.css';
import HeroPage from './pages/homePage/heroPage';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImageSlider from './pages/homePage/imagesSlider.js';
import AboutPage from './pages/homePage/aboutPage/index.js';
import OurFeaturePage from './pages/homePage/ourFeaturePage/index.js';
import OurServices from './pages/homePage/ourServices/index.js';
function App() {
  return (
    <>
      <HeroPage />
      <ImageSlider />
      <AboutPage />
      <OurFeaturePage />
      <OurServices />
    </>
  );
}

export default App;
