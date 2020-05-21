import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Register from "./components/Register.js";

function App() {
  return (
    <Router>
   
        
          <Switch>
            <Route exact path='/' component={Register} />
            <Route path="/Register" component={Register} />
          </Switch>
       
    </Router>
  );
}

export default App;
