import './App.css';
import About from './Components/About/About';
import Events from './Components/Events/Events';
import Header from './Components/Header/Header';
import JoinTheCause from './Components/JoinTheCause/JoinTheCause';
import Laureate from './Components/Laureate/Laureate';
import Partners from './Components/Partners/Partners';
import Footer from './Components/Shared/Footer/Footer';
import "./global.scss"
function App() {
  
  return (
    <div className="App">
      <Header/>
      <About/>
      <Laureate/>
      <Events/>
      <Partners/>
      <JoinTheCause/>
      <Footer/>
    </div>
  );
}

export default App;
