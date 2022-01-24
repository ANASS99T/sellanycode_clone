import React from 'react';
import './App.scss';
// import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/costum.scss"
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navigation from './component/Navigation';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
