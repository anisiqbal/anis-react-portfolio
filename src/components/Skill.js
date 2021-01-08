import React, {Component} from 'react';
import '../assets/css/skill.css';

import axios from 'axios';


class Skill extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            data:''
        }
    }

    componentDidMount(){
       this.getSkill();
    }

    getSkill(){
        axios.get('https://5ff2e0c528c3980017b18bf0.mockapi.io/api/skill').then (res =>{
            this.setState({data:res.data});
            // console.log('skill', this.state.data);
        })
    }

    render(){
        return(
            <div className="skill">
               <div className="container">
                   <div className="row">
                       <div className="col-12 col-md-12 col-lg-12">
                           <h3>MY SKILLS</h3>
                        </div>

                       <div className="col-12 col-md-12 col-lg-12">
                           <div className="area row">
                                {
                                    this.state.data && this.state.data.map((value, index)=>{
                                        return(
                                            <div className="col-3 col-md-3 col-lg-3" key={index}>
                                                <div className="iner">
                                                    <h6>{value.heading}</h6>
                                                    <p>{value.description}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                           </div>
                       </div>

                   </div>

               </div>

            </div>

        )
    }
}

export default Skill;