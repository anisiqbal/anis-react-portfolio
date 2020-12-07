import React, { Component } from 'react';
import '../assets/css/slider.css';
import profile from '../assets/img/profile.jpeg';

class Slider extends React.Component{
    render(){
        return(
           <section>
               <div className="slider">
                   <div className="container">
                       <div className="row">
                           <div className="col-6 col-md-6 col-lg-6">
                               <h6>Hello</h6>
                               <h4>I'm Muhammad Anis</h4>
                               <p>Having elevated the performance and profitability of diverse organisations through expert alignment of innovative interactive software developments.</p>
                               <a href="#" className="hire-me">Hire Me</a>
                           </div>
                            <div className="col-6 col-md-5 col-lg-6">
                                <div className="profile">  
                                    <img src={profile}></img>
                                </div>             
                           </div>

                           <div className="socials">
                                    <a><i class="fab fa-facebook-square"></i></a>
                                    <a><i class="fab fa-twitter-square"></i></a>
                                    <a><i class="fab fa-instagram"></i></a>
                                    <a><i class="fab fa-linkedin"></i></a>

                                </div>
                       </div>

                   </div>
               </div>
           </section>
        )
    }
}






export default Slider;