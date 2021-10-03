import './App.css';
import About from './Components/About/About';
import Events from './Components/Events/Events';
import Header from './Components/Header/Header';
import Laureate from './Components/Laureate/Laureate';
import "./global.scss"
function App() {
  
  return (
    <div className="App">
      <Header/>
      <About/>
      <Laureate/>
      <Events/>
    </div>
  );
}

export default App;
