import logo from './eylogo.svg';
import './Landingpage.scss';
import {Link} from "react-router-dom";
// import React from 'react';
import React, { Component } from "react";

class Landingpage extends Component {

   constructor(props){

       super(props);

   }

componentDidMount(){

   (function(d, m){

       var kommunicateSettings =

           {"appId":"1c443582ee4d1054e327ec89cd28fa474","popupWidget":true,"automaticChatOpenOnNavigation":true};

       var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;

       s.src = "https://widget.kommunicate.io/v2/kommunicate.app";

       var h = document.getElementsByTagName("head")[0]; h.appendChild(s);

       window.kommunicate = m; m._globals = kommunicateSettings;

   })(document, window.kommunicate || {});

}

render(){
    return(
        <div>
            <div className="bg-img">
        <div className="mask" style={{backgroundColor:" rgba(0, 21, 54, 0.7)"}}>
          <nav className="navbar fixed-top navbar-expand-lg navbar-dark ">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                  <img src={logo} width="100" height="34" className="d-inline-block align-text-top"/></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="https://www.ey.com/en_in">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="https://www.ey.com/en_in/about-us">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="https://www.ey.com/en_in/insights">More</a>
                  </li>
                </ul>
                <form className="d-flex">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search" aria-label="Search"
                      aria-describedby="button-addon2"/>
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2"><i
                        className="bi bi-search"></i></button>
                  </div>
                </form>
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button"
                      data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="bi bi-person-fill"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                      <li><a className="dropdown-item" href="#">Log In</a></li>
                      <li><a className="dropdown-item" href="./sample.html">Sign Up</a></li>
                      <li><a className="dropdown-item" href="https://www.ey.com/en_in/connect-with-us">Help</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
            <div className="container d-flex align-items-center justify-content-center text-center">
                <div className="text-white middle">

                  <h1>Ernst and Young </h1>
                  <p style={{width:"700px;font-size:1.2rem"}}>EY refers to the global organization, and may refer to one or more, of the member firms of Ernst & Young Global Limited, each of which is a separate legal entity. Ernst & Young Global Limited, a UK company limited by guarantee, does not provide services to clients.</p>
                  <Link to = "/login" className = "btn btn-outline-light btn-lg m-2">Login</Link>
                    <Link to = "/signup" className = "btn btn-outline-light btn-lg m-2">Sign Up</Link>
                </div>
            </div>

        </div>
    </div>
        </div>
    )}
}

export default Landingpage;