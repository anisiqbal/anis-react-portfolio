import React, {Component} from 'react';
import '../assets/css/skill.css';

class Skill extends React.Component{
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
                                <div className="col-3 col-md-3 col-lg-3">
                                    <div className="iner">
                                        <h6> UI/UX DESIGN</h6>
                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.</p>
                                    </div>
                                </div>

                                <div className="col-3 col-md-3 col-lg-3">
                                <div className="iner">
                                        <h6> GRAPHIC DESIGN</h6>
                                        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32</p>
                                    </div>
                                </div>

                                <div className="col-3 col-md-3 col-lg-3">
                                <div className="iner">
                                        <h6> WEB DEVELOPMENT</h6>
                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from.</p>
                                    </div>
                                </div>

                                <div className="col-3 col-md-3 col-lg-3">
                                <div className="iner">
                                        <h6>SEO & REASEARCH</h6>
                                        <p>Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions.</p>
                                    </div>
                                </div>

                           </div>
                       </div>

                   </div>

               </div>

            </div>

        )
    }
}

export default Skill;