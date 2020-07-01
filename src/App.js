import React from 'react';

import './App.css';
import Form from './components/Form';
import Login from "./components/login";
import SignUp from "./components/signup";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
  <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          
            <Route path="/Form" component={Form} />
          </Switch>
      </div>
  </Router>
  );
}

export default App;
