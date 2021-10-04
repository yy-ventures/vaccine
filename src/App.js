import './App.css';
import About from './Components/About/About';
import Activities from './Components/Activities/Activities';
import Events from './Components/Events/Events';
import Header from './Components/Header/Header';
import JoinTheCause from './Components/JoinTheCause/JoinTheCause';
import Laureate from './Components/Laureate/Laureate';
import TestimonialSlider from './Components/TestimonialsSlider/TestimonialSlider';
import Partners from './Components/Partners/Partners';
import Footer from './Components/Shared/Footer/Footer';
import "./global.scss"
function App() {
  
  return (
    <div className="App">
      <Header/>
      <About/>
      <Laureate/>
<<<<<<< HEAD
      <Activities/>
=======
      <TestimonialSlider/>
>>>>>>> 53026a5b27709fa008e03d19bd0b2b53338446bd
      <Events/>
      <Partners/>
      <JoinTheCause/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
