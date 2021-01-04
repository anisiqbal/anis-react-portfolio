import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Recent from './components/Recent';
import Skill from './components/Skill';
import Slider from './components/Slider';
import Admin from './components/Admin';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  return (
   <Router>
     
     <Header/>

     <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/home' component={Home}></Route>
      <Route exact path='/about' component={About}></Route>
      <Route exact path='/contact' component={Contact}></Route>
      <Route exact path='/recent' component={Recent}></Route>
      <Route exact path='/skill' component={Skill}></Route>
      <Route exact path='/slider' component={Slider}></Route>
      <Route exact path='/admin' component={Admin}></Route>
      
      

     </Switch>
         
    </Router>
  );
}

export default App;
