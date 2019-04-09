import React from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';
import { Button } from 'reactstrap';


class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      megaPlatfromStatus: 0,
      modalShow: false,
      modalContent: '',
      index: 0,
    };
    this.closeModal = this.closeModal.bind(this)
  }
  showProducts(index){
    if(window.innerWidth<=768){

      localStorage.setItem("index", index);
      window.location.href='/products'

    }
    this.setState({
      index: index,
      modalShow: true,
      modalContent: 'product'
    })
  }
  showPlatformOverview(index){
    if(window.innerWidth<=768){

      localStorage.setItem("index", index);
      window.location.href='/platformOverview'

    }
    this.setState({
      index: index,
      modalShow: true,
      modalContent: 'platformOverview'
    })
  }
  closeModal(){
    this.setState({
      index: 0,
      modalShow: false,
      modalContent: ''
    })
  }
  render() {

  	return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-">
            <div className="full-container">
                <a className="navbar-brand logo" href="/">
                <img href="/" className="logo" alt="logo" src="/images/synterweb_black_logo.png"/>
                </a>
                <button className="navbar-toggler whole-mobile-menu" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="mdi mdi-menu"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav navbar-right mega-menu" id="mySidenav">

                        <li className="nav-item dropdown">
                            <a className="nav-link">Platform</a>
                            <button data-toggle="collapse" data-target="#platformMega" aria-controls="platformMega" aria-expanded="false" className="toggle-icon collapsed"></button>
                            <div className="dropdown-content" id="platformMega">
                              <ul className="header">
                                <li className={this.state.megaPlatfromStatus===0?'active':''} onClick={()=>this.setState({megaPlatfromStatus:0})}>Products</li>
                                <li className={this.state.megaPlatfromStatus===1?'active':''}  onClick={()=>this.setState({megaPlatfromStatus:1})}>Platform Overview</li>
                              </ul>
                              <div className="content">
                                {this.state.megaPlatfromStatus===0 && <div>
                                  <a className="item" onClick={()=>this.showProducts(0)}>
                                    <div>
                                      <i className="pe-7s-refresh-2 text-custom"></i>
                                    </div>
                                    <div>
                                      <h4 className="title">Oasis Automation RPA</h4>
                                      <p>Oasis Event Manager reduces the noise in the system, reducing the number of daily events from thousands down to a</p>
                                    </div>
                                  </a>
                                  <a className="item" onClick={()=>this.showProducts(1)}>
                                    <div>
                                      <i className="pe-7s-search text-custom"></i>
                                    </div>
                                    <div>

                                      <h4 className="title">Discovery Engine</h4>

                                      <p>If you’re looking for a world class RPA, you’ve found it with Syntervision.</p>
                                    </div>
                                  </a>
                                  <a className="item" onClick={()=>this.showProducts(2)}>
                                    <div>
                                      <i className="pe-7s-server text-custom"></i>
                                    </div>
                                    <div>

                                      <h4 className="title">Application & Infrastructure Monitoring</h4>

                                      <p>Asset Discovery is simple and comprehensive with Oasis.</p>
                                    </div>
                                  </a>
                                  <a className="item" onClick={()=>this.showProducts(3)}>
                                    <div>
                                      <i className="pe-7s-display1 text-custom"></i>
                                    </div>
                                    <div>
                                      <h4 className="title">Advanced Analytics</h4>
                                      <p>Delivers business impacting information from your devices, applications, logs and events are consumed by then normalised to generate context.</p>
                                    </div>
                                  </a>
                                  <a className="item" onClick={()=>this.showProducts(4)}>
                                    <div>
                                      <i className="pe-7s-edit text-custom"></i>
                                    </div>
                                    <div>
                                      <h4 className="title">Oasis Event Manager</h4>
                                      <p>Unlock productivity and transform IT across your enterprise with a unified platform.</p>
                                    </div>
                                  </a>
                                  <a className="item" onClick={()=>this.showProducts(5)}>
                                    <div>
                                      <i className="pe-7s-graph3 text-custom"></i>
                                    </div>
                                    <div>
                                        
                                      <h4 className="title">Trap Adaptor SMNP</h4>

                                      <p>The Oasis Trap Adapter is a fully configurable Trap Listener and Forwarder with native integration to the Oasis Platform.</p>
                                    </div>
                                  </a>
                                  <a className="item" onClick={()=>this.showProducts(6)}>
                                    <div>
                                      <i className="pe-7s-plugin text-custom"></i>
                                    </div>
                                    <div>

                                      <h4 className="title">API Suite</h4>

                                      <p>Unlock productivity and transform IT across your enterprise with a unified platform.</p>
                                    </div>
                                  </a>
                                  <a className="item" onClick={()=>this.showProducts(7)}>
                                    <div>
                                      <i className="pe-7s-lock text-custom"></i>
                                    </div>
                                    <div>
                                      <h4 className="title">Cybervision</h4>
                                      <p>Cybervision is our leading all-in-one cybersecurity service, protecting your enterprise from cybersecurity attacks and keeping you in control of your security protocols.</p>
                                    </div>
                                  </a>
                                </div>}
                                {this.state.megaPlatfromStatus===1 && <div>
                                  <a className="item" href={"/platform"}>
                                    <div>
                                      <i className="pe-7s-home text-custom"></i>
                                    </div>
                                    <div>
                                      <h4 className="title">Oasis Platform Overview</h4>
                                      <p>We leverage out-of-the-box solutions or create custom-tailored solutions for your enterprise.</p>
                                    </div>
                                  </a>
                                  <a className="item" onClick={()=>this.showPlatformOverview(0)}>
                                    <div>
                                      <i className="pe-7s-global text-custom"></i>
                                    </div>
                                    <div>
                                      <h4 className="title">Core Features</h4>
                                      <p>Discover all of your enterprise network and device data - simply and quickly.</p>
                                    </div>
                                  </a>
                                  <a className="item" onClick={()=>this.showPlatformOverview(1)}>
                                    <div>
                                      <i className="pe-7s-culture text-custom"></i>
                                    </div>
                                    <div>
                                      <h4 className="title">Architecture</h4>
                                      <p>View how Oasis performs digital transformation.</p>
                                    </div>
                                  </a>
                                </div>}
                                <div className="bottom-part platform">
                                  <img src="images/device.png" />
                                  <div className="right-content">
                                    <h5>Try Oasis Now</h5>
                                    <h6>Discover all of your enterprise network and device data - simply and quickly. Then view that data in a logical and digestible UI. This is the first step to having massive visibility into all systems and is critical to decision making, security, and capacity management.</h6>
                                    <Button color="danger">Learn More</Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link">Solutions</a>
                            <button className="navbar-toggle" data-toggle="collapse" data-target="#solutionsMega" aria-controls="solutionsMega" aria-expanded="false" className="toggle-icon collapsed"></button>
                            <div className="dropdown-content" id="solutionsMega">
                              <ul className="header">
                                <li>Solutions</li>
                              </ul>
                              <div className="content">
                                <div>
                                  <div className="item">
                                    <a href="/security">Security</a>
                                  </div>
                                  <div className="item">
                                    <a href="/industries">By Industry</a>
                                  </div>
                                  <div className="item">
                                    <a href="/integrations">Integrations</a>
                                  </div>
                                  <div className="item">
                                    <a href="#">Digital Transformation</a>
                                  </div>
                                  <a className="item">
                                    <div>
                                      <i className="pe-7s-refresh-2 text-custom"></i>
                                    </div>
                                    <div>
                                      <p>Automation</p>
                                    </div>
                                  </a>
                                  <a className="item">
                                    <div>
                                      <i className="pe-7s-search text-custom"></i>
                                    </div>
                                    <div>
                                      <p>Discovery</p>
                                    </div>
                                  </a>
                                  <a className="item">
                                    <div>
                                      <i className="pe-7s-shield text-custom"></i>
                                    </div>
                                    <div>
                                      <p>Monitoring</p>
                                    </div>
                                  </a>
                                  <a className="item">
                                    <div>
                                      <i className="pe-7s-headphones text-custom"></i>
                                    </div>
                                    <div>
                                      <p>Compliance</p>
                                    </div>
                                  </a>
                                </div>
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
                        <li className="nav-item dropdown">
                            <a href={"/whoweare"} className="nav-link">Company</a>
                            <button data-toggle="collapse" data-target="#solutionsMega" aria-controls="solutionsMega" aria-expanded="false" className="toggle-icon collapsed"></button>
                            <div className="dropdown-content" id="solutionsMega">
                              <ul className="header">
                                <li>Company</li>
                              </ul>
                              <div className="content">
                                <div>
                                  <div className="item">
                                    <a href="#">Who We Are</a>
                                  </div>
                                  <div className="item">
                                    <a href="#">Leadership</a>
                                  </div>
                                  <div className="item">
                                    <a href="#">Partnerships</a>
                                  </div>
                                </div>
                                <div className="bottom-part platform">
                                  <img src="images/device.png" />
                                  <div className="right-content">
                                    <h5>Join Oasis Webinar</h5>
                                    <h6>Discover all of your enterprise network and device data - simply and quickly. Then view that data in a logical and digestible UI. This is the first step to having massive visibility into all systems and is critical to decision making, security, and capacity management.</h6>
                                    <button></button>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </li>
                        <li className="nav-item mobile-only">
                            <a href={"#contact"} className="nav-link">Contact</a>
                        </li>
                        <li className="nav-item mobile-only">
                            <a href={"/demorequest"} className="nav-link">Request a Demo</a>
                        </li>
                        <li className="nav-item mobile-only">
                            <a href={"#"} className="nav-link">Careers</a>
                        </li>
                        <li className="nav-item mobile-only">
                            <a href={"/privacypolicy"} className="nav-link">Privacy Policy</a>
                        </li>
                        <li className="nav-item mobile-only">
                            <a href={"/terms"} className="nav-link">Terms & Conditions</a>
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
                <div className="sub-menu">
                  <button className="navbar-toggler sub-mobile-menu" type="button" data-toggle="collapse" data-target="#subbarCollapse" aria-controls="subbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                      <i className="mdi mdi-menu"></i>
                  </button>
                  <div className="collapse navbar-collapse" id="subbarCollapse">
                    <li className="imp-menu-item"><a href="#contact">Contact</a></li>
                    <li className="imp-menu-item"><a href="/demorequest">Request a Demo</a></li>
                    <li className="imp-menu-item"><a href="#">Careers</a></li>
                    <li><a href="/privacypolicy">Privacy Policy</a></li>
                    <li><a href="/terms">Terms & Conditions</a></li>
                    <i className="mdi mdi-close" data-toggle="collapse" data-target="#subbarCollapse" aria-controls="subbarCollapse" aria-expanded="false" aria-label="Toggle navigation"></i>

                  </div>
                </div>
            </div>
            {this.state.modalShow && <div className="product-modal-wrap">
              <div className="product-modal">
                <Product contentName={this.state.modalContent} type={'desktop'} currentIndex={this.state.index} closeModal={this.closeModal} interval={5000}/>
              </div>
            </div>}
        </nav>
  	);
  }
}

export default Navbar;
