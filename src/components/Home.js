import React from 'react';

import Slider from './Slider';
import About from './About';
import Skill from './Skill';
import Recent from './Recent';
import Contact from './Contact';


function Home() {
    return (
      <div>
       
        <Slider/>
        <About/>
        <Skill/>
        <Recent/>
        <Contact/>
      </div>
    );
  }
  
  export default Home;
  