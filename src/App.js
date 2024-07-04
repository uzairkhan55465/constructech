import './App.css';
import HeroPage from './pages/homePage/heroPage';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImageSlider from './pages/homePage/imagesSlider.js';
import AboutPage from './pages/homePage/aboutPage/index.js';
import OurFeaturePage from './pages/homePage/ourFeaturePage/index.js';
import OurServices from './pages/homePage/ourServices/index.js';
import ModelPage from './pages/homePage/modelPage/index.js';
import CeoMessage from './pages/homePage/ceoMessage/index.js';
import TeamCarousel from './pages/homePage/teamMembers/index.js';
import Footer from './components/footer/index.js';
import Header from "./components/header/index.js"
function App() {
  return (
    <>
      <Header />
      <HeroPage />
      <ImageSlider /> 
      <AboutPage /> 
      <OurFeaturePage /> 
      <OurServices /> 
      <ModelPage /> 
      <CeoMessage /> 
      <TeamCarousel /> 
      <Footer/>
    </>
  );
}

export default App;
