import React, {Component} from 'react';
import '../assets/css/about.css';
import about from '../assets/img/about.jpeg';

import axios from 'axios';

class About extends React.Component{

    constructor(props){

        super(props)

        this.state = {
            data: ''
        }
    }

    componentDidMount(){
            this.getAbout();
    }

    getAbout(){
        axios.get('https://5ff2e0c528c3980017b18bf0.mockapi.io/api/About').then(res => {
            this.setState({data: res.data[0] });
            console.log('about', this.state.data);
        })
    }


    render(){
        return(
            <section>
                <div className="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-4 col-md-4 col-lg-4">

                               <div className="image">
                                <img src={this.state.data.img}></img>

                               </div>
                            </div>
                            <div className="col-8 col-md-8 col-lg-8">
                                <h4>{this.state.data.heading}</h4>
                                <h5>{this.state.data.subtitles}</h5>
                                <p>{this.state.data.description}</p>
                                <a href={this.state.data.downloadCv}>Download CV</a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}

export default About;