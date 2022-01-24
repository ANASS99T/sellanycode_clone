import React from 'react';
import './App.scss';
// import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/costum.scss"
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navigation from './component/Navigation';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from './pages/Home';
import User from './pages/user/User';


function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/user' component={User} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
