import React, { Component } from 'react';
import '../assets/css/header.css';
import logo from '../assets/img/logo-1.png';

import {
  Link
} from "react-router-dom";

class Header extends React.Component {
  render() {
    return(
       <div className="top-bar">
          <div>
            <div className="container">
              <div className="row">

                <div className="col-3 col-md-3 col-lg-3">
                  <div className="logo">
                    <img src={logo}></img>
                   </div>
                </div>

                <div className="col-9 col-md-9 col-lg-9">
                  <div className="nav">
                    <ul>
                      <li>
                        <Link to="/home">Home</Link>                       
                        <Link to="/about">About</Link>
                        <Link to="/skill">Skill</Link>
                        <Link to="/recent">Recent</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/admin">Admin</Link>

                      </li>
                    </ul>
                  </div>

                </div>

              </div>
            </div>
        </div>

       </div>
    )
  }
}

export default Header;