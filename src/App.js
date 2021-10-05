import './App.css';
import "./global.scss"
import  { Personalities } from './Components/Signatories/Personalities';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomeRoute from './Components/Routes/HomeRoute/HomeRoute';
import PartnersRoute from './Components/Routes/PartnersRoute/PartnersRoute';
import Footer from './Components/Shared/Footer/Footer';
import Partners from './Components/Partners/Partners';
import FormRoute from './Components/Routes/FormRoute/FormRoute';
import Pledge from './Components/Pledge/Pledge';
function App() {
  
  return (
    <div className="App">
      <Router>
        <Switch>
        {/* <Route path="/joinus">
            </>
          </Route> */}
        <Route path="/pledgers">
          <Pledge/>
          </Route>
        <Route path="/signatories">
            <Personalities/>
          </Route>
          <Route path="/partners">
            <PartnersRoute/>
          </Route>
          <Route path="/pledge">
            <FormRoute/>
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
