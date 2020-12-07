import React, {Component} from 'react';
import '../assets/css/recent.css';
import image from '../assets/img/image.png';
import photo from '../assets/img/image.01.png';
import pic from '../assets/img/code.png';


class Recent extends React.Component{
    render(){
        return(

            <div className="recent">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-12">
                            <h3>RECENT WORK</h3>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia</p>
                        </div>
                        
                        <div className="col-12 col-md-12 col-lg-12" >
                            <div className="work row">
                                <div className="col-4 col-md-4 col-lg-4">
                                    <div className="images">
                                        <img src={image}></img>  

                                  </div>
                                </div>
                            
                                <div className="col-4 col-md-4 col-lg-4">
                                    <div className="images">
                                        <img src={photo}></img> 
                                  </div>
                                </div>

                                <div className="col-4 col-md-4 col-lg-4">
                                    <div className="images">
                                        <img src={pic}></img>                                      
                                </div>
                              </div>                                                       
                            </div>                             
                        </div>

                        <div className="col-12 col-md-12 col-lg-12">
                            <div className="press">
                                <a href="#">View All</a>   
                            </div>
                        </div>
                            

                    </div>
                </div>
            </div>
        )
    }

}

export default Recent;