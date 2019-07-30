import React, { Fragment } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import BookNow from './Components/BookNow';
import Default from './Default';

function App() {
  return (
    <Fragment>
      <NavBar/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/booknow" component={BookNow} />
          <Route component={Default} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
