import React, {Component} from 'react';
import '../assets/css/recent.css';
import image from '../assets/img/image.png';
import photo from '../assets/img/image.01.png';
import pic from '../assets/img/code.png';

import axios from 'axios';


class Recent extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            data:''
        }
    }

    componentDidMount(){
       this.getRecent();
    }

    getRecent(){
        axios.get('https://5ff2e0c528c3980017b18bf0.mockapi.io/api/recent').then(res=>{
            this.setState({data: res.data});
            console.log('recent', this.state.data);
        })
           }
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
                            {
                                this.state.data && this.state.data.map((value,index)=>{
                                    return(
                                        <div className="col-4 col-md-4 col-lg-4" key={index}> 
                                        <div className="images">
                                            <img src={value.image}></img> 
                                            <p>{value.heading}</p> 
    
                                      </div>
                                    </div>
                                    )
                                })
                            }

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