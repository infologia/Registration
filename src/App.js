
import React from 'react';

import './App.css';
import Form from './components/Form';
import Login from "./components/login";
import SignUp from "./components/signup";
import Test from "./components/Test";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>

  <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          
            <Route path="/Form" component={Form} />
            <Route path="/test" component={Test} />
          </Switch>
    
  </Router>
  );
}

export default App;
