import React from 'react';

import Slider from './Slider';
import About from './About';
import Skill from './Skill';
import Recent from './Recent';
import Contact from './Contact';
import Update from './Update';


function Home() {
    return (
      <div>
       
        <Slider/>
        <About/>
        <Skill/>
        <Recent/>
        <Contact/>
        <Update/>
      </div>
    );
  }
  
  export default Home;
  