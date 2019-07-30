import React, { Fragment } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import BookNow from './Components/BookNow';

function App() {
  return (
    <Fragment>
      <NavBar/>
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/booknow" component={BookNow} />
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
