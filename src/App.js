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
import FormRoute from './Components/Routes/FormRoute/FormRoute';
import PledgeRoute from './Components/Routes/PledgeRoute/PledgeRoute';
import EventRoute from './Components/Routes/EventRoute/EventRoute';
import ActivityRoute from './Components/Routes/ActivityRoute/ActivityRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/signatories">
            <Personalities />
          </Route>
          <Route path="/partners">
            <PartnersRoute />
          </Route>
          <Route path="/pledge">
            <FormRoute />
          </Route>
          <Route path="/people-pledge">
            <PledgeRoute />
          </Route>
          <Route path="/events">
            <EventRoute/>
          </Route>
          <Route path="/activities">
            <ActivityRoute/>
          </Route>
          <Route path="/">
            <HomeRoute />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
