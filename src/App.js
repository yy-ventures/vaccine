import './App.css';
import About from './Components/About/About';
import Events from './Components/Events/Events';
import Header from './Components/Header/Header';
import Laureate from './Components/Laureate/Laureate';
import TestimonialSlider from './Components/TestimonialsSlider/TestimonialSlider';
import "./global.scss"
function App() {
  
  return (
    <div className="App">
      <Header/>
      <About/>
      <Laureate/>
      <TestimonialSlider/>
      <Events/>
    </div>
  );
}

export default App;
