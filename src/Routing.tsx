import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navigation from './Navigation';
import { Typescripts } from './pages/Typescripts';
import Reactive from './pages/Reactive';
import UseRef from './pages/UseRef';
import Mobx from './pages/Mobx';

const About = () => {
  return <h2>About</h2>;
}

const Users = () => {
  return <h2>Users</h2>;
}

const Routing: React.FC = () => {
  return (
    <Router>
      <div>
        <Navigation></Navigation>

        {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about"><About /></Route>
          <Route path="/users"><Users /></Route>
          <Route path="/typescripts"><Typescripts/></Route>
          <Route path="/rx"><Reactive /></Route>
          <Route path="/useRef"><UseRef /></Route>
          <Route path="/mobx"><Mobx /></Route>
        </Switch>
      </div>
    </Router>
  )
}
export default Routing;
