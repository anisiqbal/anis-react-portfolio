import React, {Component} from 'react';
import '../assets/css/about.css';
import about from '../assets/img/about.jpeg';


class About extends React.Component{
    render(){
        return(
            <section>
                <div className="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-4 col-md-4 col-lg-4">

                               <div className="image">
                                <img src={about}></img>

                               </div>
                            </div>
                            <div className="col-8 col-md-8 col-lg-8">
                                <h4>ABOUT ME</h4>
                                <h5>I am a UI/UX Developer based in Pakistan</h5>
                                <p> Having elevated the performance and profitability of diverse organisations through expert alignment of innovative interactive software developments I have 5+ years of experience in software industry as a Full Stack Developer on the following Tech Stack: ReactJS | Angular | JavaScript | Ionic | NodeJS | Ruby on Rails</p>
                                <a href="#">DOWNLOAD CV</a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}

export default About;