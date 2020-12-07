import React, {Component} from 'react';
import '../assets/css/contact.css';

class Contact extends React.Component{
    render(){
        return(
            <div className="contact-us">
                <div className="container">
                    <div className="row">

                        <div className="col-6 col-md-6 col-lg-6">
                            <h5>Let's Make something new, different great together. <span> Just Say Hello </span></h5> 
                            <div className="contact-info">
                                <div className="row">
                                    <div className="col-12">
                                        <a><i class="fas fa-phone-alt"></i> +92 3070210260</a>
                                    </div>

                                    <div className="col-12">
                                        <a><i class="fas fa-envelope"></i> anisiqbal484@gmail.com</a>
                                    </div>

                                    <div className="col-12">
                                        <a><i class="fas fa-map-marker-alt"></i> Gulistan-e-jauhar karachi,pakistan</a>
                                    </div>
                                </div>
                            </div>                                
                        </div>

                        <div className="col-6 col-md-6 col-lg-6">
                            <form className="input">
                                <input type="text" class="form-control" placeholder="Your Name"></input>
                                <input type="email" class="form-control" placeholder="Email"></input>
                                <input type="text" class="form-control" placeholder="Message..."></input>

                                <div className="hold">
                                    <a href="#">Submit</a>
                                </div>
                            </form>
                        </div>
                           


                    </div>
                </div>
            </div>

            
        )
    }
}

export default Contact;