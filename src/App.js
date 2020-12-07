import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Resume from './components/Resume';

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
      <Route exact path='/resume' component={Resume}></Route>
     </Switch>
         
    </Router>
  );
}

export default App;
