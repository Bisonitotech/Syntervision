import React from 'react';
import { Link } from 'react-router-dom';



class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      megaPlatfromStatus: 0
    };
  }
  render() {
  	return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-">
            <div className="full-container">
                <a className="navbar-brand logo" href="/">
                <img href="/" class="logo" alt="logo" src="/images/synterweb_logo.png"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="mdi mdi-menu"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav navbar-right mega-menu" id="mySidenav">
                      
                        <li className="nav-item dropdown">
                            <a href={"/platform"} className="nav-link">Platform</a>
                            <div className="dropdown-content">
                              <ul className="header">
                                <li className={this.state.megaPlatfromStatus==0?'active':''} onClick={()=>this.setState({megaPlatfromStatus:0})}>Products</li>
                                <li className={this.state.megaPlatfromStatus==1?'active':''}  onClick={()=>this.setState({megaPlatfromStatus:1})}>Platform Overview</li>
                              </ul>
                              <div className="content">
                                {this.state.megaPlatfromStatus==0 && <div>
                                  <div className="item">
                                    <div>
                                      <i class="pe-7s-share text-custom"></i>
                                    </div>
                                    <div>
                                      <h4 className="title">Event Manager Tool</h4>
                                      <p>Oasis Event Manager reduces the noise in the system, reducing the number of daily events from thousands down to a</p>
                                    </div>
                                  </div>
                                  <div className="item">
                                    <div>
                                      <i class="pe-7s-share text-custom"></i>
                                    </div>
                                    <div>
                                      <h4 className="title">Oasis Automation</h4>
                                      <p>If you’re looking for a world class RPA, you’ve found it with Syntervision.</p>
                                    </div>
                                  </div>
                                  <div className="item">
                                    <div>
                                      <i class="pe-7s-share text-custom"></i>
                                    </div>
                                    <div>
                                      <h4 className="title">Network Discovery Tool</h4>
                                      <p>Asset Discovery is simple and comprehensive with Oasis.</p>
                                    </div>
                                  </div>
                                  <div className="item">
                                    <div>
                                      <i class="pe-7s-share text-custom"></i>
                                    </div>
                                    <div>
                                      <h4 className="title">Oasis Advanced Analytics</h4>
                                      <p>Delivers business impacting information from your devices, applications, logs and events are consumed by then normalised to generate context.</p>
                                    </div>
                                  </div>
                                  <div className="item">
                                    <div>
                                      <i class="pe-7s-share text-custom"></i>
                                    </div>
                                    <div>
                                      <h4 className="title">Cybervision</h4>
                                      <p>Unlock productivity and transform IT across your enterprise with a unified platform.</p>
                                    </div>
                                  </div>
                                  <div className="item">
                                    <div>
                                      <i class="pe-7s-share text-custom"></i>
                                    </div>
                                    <div>
                                      <h4 className="title">Trap Adaptor</h4>
                                      <p>The Oasis Trap Adapter is a fully configurable Trap Listener and Forwarder with native integration to the Oasis Platform.</p>
                                    </div>
                                  </div>
                                  <div className="item">
                                    <div>
                                      <i class="pe-7s-share text-custom"></i>
                                    </div>
                                    <div>
                                      <h4 className="title">Oasis API Suite</h4>
                                      <p>Unlock productivity and transform IT across your enterprise with a unified platform.</p>
                                    </div>
                                  </div>
                                </div>}
                                {this.state.megaPlatfromStatus==1 && <div>
                                  <div className="item">
                                    <div>
                                      <i class="pe-7s-share text-custom"></i>
                                    </div>
                                    <div>
                                      <h4 className="title">Oasis Platform Overview</h4>
                                      <p>We leverage out-of-the-box solutions or create custom-tailored solutions for your enterprise.</p>
                                    </div>
                                  </div>
                                  <div className="item">
                                    <div>
                                      <i class="pe-7s-share text-custom"></i>
                                    </div>
                                    <div>
                                      <h4 className="title">Core Features</h4>
                                      <p>Discover all of your enterprise network and device data - simply and quickly.</p>
                                    </div>
                                  </div>
                                  <div className="item">
                                    <div>
                                      <i class="pe-7s-share text-custom"></i>
                                    </div>
                                    <div>
                                      <h4 className="title">Architecture</h4>
                                      <p>View how Oasis performs digital transformation.</p>
                                    </div>
                                  </div>
                                </div>}
                                <div className="bottom-part platform">
                                  <img src="images/device.png" />
                                  <div className="right-content">
                                    <h5>Try Oasis Now</h5>
                                    <h6>Discover all of your enterprise network and device data - simply and quickly. Then view that data in a logical and digestible UI. This is the first step to having massive visibility into all systems and is critical to decision making, security, and capacity management.</h6>
                                    <button></button>
                                  </div>
                                </div>
                              </div>
                            </div>
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
                    {/* <div className="nav-button ml-auto">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <button type="button" href="/demorequest" className="btn btn-custom navbar-btn btn-rounded waves-effect waves-light">Request a Demo</button>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </div>
        </nav>
  	);
  }
}

export default Navbar;