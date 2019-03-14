import React from 'react';
import { Link } from 'react-router-dom';



class Navbar extends React.Component {
  render() {
  	return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark">
            <div className="container">
                <a className="navbar-brand logo" href="/">
                <img href="/" class="logo" alt="logo" src="/images/synterweb_logo.png"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="mdi mdi-menu"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav navbar-right" id="mySidenav">
                      
                        <li className="nav-item">
                            <a href={"/platform"} className="nav-link">Platform</a>
                        </li>
                        <li className="nav-item">
                            <a href={"/solutions"} className="nav-link">Solutions</a>
                        </li>
                        <li className="nav-item">
                            <a href={"/whoweare"} className="nav-link">Company</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link">Contact</a>
                        </li>
                    </ul>
                    <div className="nav-button ml-auto">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <button type="button" href="/demorequest" className="btn btn-custom navbar-btn btn-rounded waves-effect waves-light">Request a Demo</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
  	);
  }
}

export default Navbar;