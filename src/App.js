
import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';  
import Home from './components/pages/Home';
import Trailer from './components/pages/Trailer';
import Paragliding from './components/pages/Paragliding';
import Canyon from './components/pages/Canyon';
import Bike from './components/pages/Bike';
import Info from './components/pages/Info';
import Team from './components/pages/Team';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path="/trailer" component={Trailer} />
        <Route path="/paragliding" component={Paragliding} />
        <Route path="/canyon" component={Canyon} />
        <Route path="/bike" component={Bike} />
        <Route path="/info" component={Info} />
        <Route path="/team" component={Team} />
        <Route path="/sign-up" component={SignUp} />
        </Switch>
 
    </Router>
    </>
  );
}

export default App;
