import React, { Component } from 'react';
import '../assets/css/slider.css';
import profile from '../assets/img/profile.jpeg';

import axios from 'axios';

class Slider extends React.Component{

    constructor(props)
    {
        super(props);

        this.state = {
            data: ''
        }
    }

    componentDidMount() {
        this.getSlider();
    }

    getSlider() {
        axios.get('https://5ff2e0c528c3980017b18bf0.mockapi.io/api/sliders').then(res => {
            this.setState({ data: res.data[0] });
            // console.log(this.state.data);
        })
    }

    render(){
        return(
           <section>
               <div className="slider">
                   <div className="container">
                       <div className="row">
                           <div className="col-6 col-md-6 col-lg-6">
                               <h6>Hello</h6>
                               <h4>{this.state.data.heading}</h4>
                               <p>{this.state.data.description}</p>
                               <a href="#" className="hire-me">Hire Me</a>
                           </div>
                            <div className="col-6 col-md-5 col-lg-6">
                                <div className="profile">  
                                    <img src={this.state.data.image}></img>
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