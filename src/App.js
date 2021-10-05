import './App.css';
import "./global.scss"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomeRoute from './Components/Routes/HomeRoute/HomeRoute';
import PartnersRoute from './Components/Routes/PartnersRoute/PartnersRoute';
import Footer from './Components/Shared/Footer/Footer';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/partners">
            <PartnersRoute/>
          </Route>
          <Route path="/">
            <HomeRoute/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
