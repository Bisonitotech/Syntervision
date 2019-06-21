import React from 'react';
import Link from 'next/link';
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
    this.showProducts = this.showProducts.bind(this)
    this.setModalContent = this.setModalContent.bind(this)
  }
  showProducts(index){
    console.log(window.screen.width)
    if(window.screen.width<=768){
      // localStorage.setItem("index", index);
      window.location.href='/Products?index='+index;

    }
    else
      this.setState({
        index: index,
        modalShow: true,
        modalContent: 'product'
      })
  }
  setModalContent(content) {
    this.setState({modalContent: content});
    console.log(this.state.modalContent)
  }
  showPlatformOverview(index){
    if(window.screen.width<=768){

      // localStorage.setItem("index", index);
      window.location.href='/PlatformOverview?index='+index;

    }
    else
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
                <img href="/" className="logo" alt="logo" src="/static/images/synterweb_black_logo.png"/>
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
                                      <p>If you’re looking for a world class RPA, you’ve found it with Syntervision.</p>
                                    </div>
                                  </a>
                                  <a className="item" onClick={()=>this.showProducts(1)}>
                                    <div>
                                      <i className="pe-7s-search text-custom"></i>
                                    </div>
                                    <div>

                                      <h4 className="title">Discovery Engine</h4>

                                      <p>Asset and Network Discovery is quick, simple and comprehensive with Oasis.</p>
                                    </div>
                                  </a>
                                  <a className="item" onClick={()=>this.showProducts(2)}>
                                    <div>
                                      <i className="pe-7s-server text-custom"></i>
                                    </div>
                                    <div>

                                      <h4 className="title">Application & Infrastructure Monitoring</h4>

                                      <p>Oasis can monitor virtually anything and everything. The Oasis platform is designed to do end-to-end service management without unnecessary complexity.</p>
                                    </div>
                                  </a>
                                  <a className="item" onClick={()=>this.showProducts(3)}>
                                    <div>
                                      <i className="pe-7s-display1 text-custom"></i>
                                    </div>
                                    <div>
                                      <h4 className="title">Advanced Analytics</h4>
                                      <p>Advanced Analytics and Machine Learning can be used to collect and understand how your data impacts IT Operations, leading to better business decisions.</p>
                                    </div>
                                  </a>
                                  <a className="item" onClick={()=>this.showProducts(4)}>
                                    <div>
                                      <i className="pe-7s-edit text-custom"></i>
                                    </div>
                                    <div>
                                      <h4 className="title">Oasis Event Manager</h4>
                                      <p>The Oasis Event Manager handles event notifications for any data that is in Oasis, natively or via the Rest API.</p>
                                    </div>
                                  </a>
                                  <a className="item" onClick={()=>this.showProducts(5)}>
                                    <div>
                                      <i className="pe-7s-graph3 text-custom"></i>
                                    </div>
                                    <div>

                                      <h4 className="title">Trap Adapter SNMP</h4>

                                      <p>The Oasis Trap Adapter is a fully configurable Trap Listener and Forwarder with native integration to the Oasis Platform.</p>
                                    </div>
                                  </a>
                                  <a className="item" onClick={()=>this.showProducts(6)}>
                                    <div>
                                      <i className="pe-7s-plugin text-custom"></i>
                                    </div>
                                    <div>

                                      <h4 className="title">API Suite</h4>

                                      <p>Open up your enterprise's application landscape and maximize productivity with the simple and flexible Oasis API Suite.</p>
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
                                  <a className="item" href={"/Platform"}>
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
                                      <i className="pe-7s-culture text-custom"></i>
                                    </div>
                                    <div>
                                      <h4 className="title">Architecture</h4>
                                      <p>Understand The Oasis Platform architecture and key components.</p>
                                    </div>
                                  </a>
                                </div>}
                                <div className="bottom-part platform try-oasis">
                                  <img src="/static/images/device.png" />
                                  <div className="right-content">
                                    <h5>Try Oasis Now</h5>

                                    <h6>Discover all of your enterprise network and device data - simply and quickly. Then view that data in a logical and digestible UI. This is the first step to having massive visibility into all systems and is critical to decision making, security, and capacity management.</h6>
                                    <a color="danger" className="learnmore" onClick={()=> window.location.href = '/DemoRequest'}>Learn More</a>
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
                                    <a href="/Security">Security</a>
                                  </div>
                                  <div className="item">
                                    <a href="/Industries">By Industry</a>
                                  </div>
                                  <div className="item">
                                    <a href="/Integrations">Integrations</a>
                                  </div>
                                  {/*<div className="item">
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
                                  </a>*/}
                                </div>
                                <div className="bottom-part platform try-oasis">
                                  <img src="/static/images/device.png" />
                                  <div className="right-content">
                                    <h5>Try Oasis Now</h5>
                                    <h6>We offer a trial version that includes all advanced features - free, for 30 days. Contact us today to request a license!</h6>
                                    <a color="danger" className="learnmore" href="/DemoRequest">Learn More</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a href={"/Whoweare"} className="nav-link">Company</a>
                            <button data-toggle="collapse" data-target="#solutionsMega" aria-controls="solutionsMega" aria-expanded="false" className="toggle-icon collapsed"></button>
                            <div className="dropdown-content" id="solutionsMega">
                              <ul className="header">
                                <li>Company</li>
                              </ul>
                              <div className="content">
                                <div>
                                  <div className="item">
                                    <a href="/Whoweare">Who We Are</a>
                                  </div>
                                  {/* <div className="item">
                                    <a href="#">Leadership</a>
                                  </div>
                                  <div className="item">
                                    <a href="#">Partnerships</a>
                                  </div> */}
                                </div>
                                <div className="bottom-part platform">
                                  <img src="/static/images/device.png" />
                                  <div className="right-content">
                                    <h5>Join Oasis Webinar</h5>
                                    <h6>Discover all of your enterprise network and device data - simply and quickly. Then view that data in a logical and digestible UI. This is the first step to having massive visibility into all systems and is critical to decision making, security, and capacity management.</h6>
                                    <a color="danger" className="learnmore" href="https://www.hubspot.com/">Learn More</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </li>
                        <li className="nav-item mobile-only">
                            <a href={"#contact"} className="nav-link">Contact</a>
                        </li>
                        <li className="nav-item mobile-only">
                            <a href={"/DemoRequest"} className="nav-link">Request a Demo</a>
                        </li>
                        <li className="nav-item mobile-only">
                            <a href={"#"} className="nav-link">Careers</a>
                        </li>
                        <li className="nav-item mobile-only">
                            <a href={"/PrivacyPolicy"} className="nav-link">Privacy Policy</a>
                        </li>
                        <li className="nav-item mobile-only">
                            <a href={"/Terms"} className="nav-link">Terms & Conditions</a>
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
                    <li className="imp-menu-item"><a href="/DemoRequest">Request a Demo</a></li>
                    <li><a href="/PrivacyPolicy">Privacy Policy</a></li>
                    <li><a href="/Terms">Terms & Conditions</a></li>
                    <i className="mdi mdi-close" data-toggle="collapse" data-target="#subbarCollapse" aria-controls="subbarCollapse" aria-expanded="false" aria-label="Toggle navigation"></i>

                  </div>
                </div>
            </div>
            {this.state.modalShow && <div className="product-modal-wrap">
              <div className="product-modal">
                <Product setModalContent={this.setModalContent} contentName={this.state.modalContent} showProducts={this.showProducts} type={'desktop'} currentIndex={this.state.index} closeModal={this.closeModal}/>
              </div>
            </div>}
        </nav>
  	);
  }
}

export default Navbar;
