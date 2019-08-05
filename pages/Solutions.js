import React from 'react';
import { BrowserRouter, Route, Switch } from 'next/link';
import Navbar from '../components/Navbar';
import Demo from '../components/Demo';
import Contact from '../components/Contact';
import SocialMedia from '../components/SocialMedia';
import Footer from '../components/Footer';
import FooterLinks from '../components/FooterLinks';
import Aux from './hoc/Aux_';
import Link from 'next/link';
import Includes from '../components/Includes';

class Solutions extends React.Component {
  render() {

    var bkg1 = {
        backgroundImage: 'url(static/images/img-2.jpg)',
        backgroundSize : 'cover',
        backgroundPosition : 'center',
      };

  	return (
        <Aux>
          <Includes />
                <Navbar />

                <section className="home-padding-t-150 position-relative" id="home"  style={bkg1}>
                    <div className="bg-overlay"></div>
                       <div className="display-table">
                            <div className="home-cell-bottom">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-8 offset-lg-2 text-white text-center">
                                            <h1 className="home-title text-right"></h1>
                                        </div>
                                    </div>
                            </div>
                       </div>
                    </div>

                </section>

                <section className="section pt-5" id="services">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h1 className="section-title text-center">Our Solutions</h1>
                        <div className="section-title-border margin-t-20"></div>
                        <p className="section-subtitle text-muted text-center padding-t-30 font-secondary">Syntervision provides integrated IT solutions with the Oasis platform. See how Oasis works for your industry, integrates with your existing systems, and gets you started on your digital transformation journey. </p>
                    </div>
                </div>
                <div className="row margin-t-30">
                    <div className="col-lg-4 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <i className="pe-7s-science text-custom"></i>
                            <h4 className="padding-t-15">Industry Solutions</h4>
                            <p className="padding-t-15 text-muted">Each industry faces unique business challenges. Our job is to understand what those challenges are and tailor solutions that help automate business processes and make your data work for you. Oasis can help companies in any industry achieve their business goals.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <i className="pe-7s-tools text-custom"></i>
                            <h4 className="padding-t-15">Integrations</h4>
                            <p className="padding-t-15 text-muted">The Oasis platform was designed to consume data from anywhere in order to turn it into useful information. View our integrations page to see how Oasis connects with any system that has an API or standard protocols.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <i className="pe-7s-rocket text-custom"></i>
                            <h4 className="padding-t-15">Digital Transformation</h4>
                            <p className="padding-t-15 text-muted">Digital transformation is a journey. As leaders seek to recalibrate their technology programs, they need the ability to strategize, execute, review, and demonstrate tangible results. With Oasis, built-in automation and product solutions help you dive into digital transformation faster than ever.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        <section className="section bg-light">
        <div className="container">
            <div className="row vertical-content">
                <div className="col-lg-5">
                    <div className="features-box">
                        <h3>Life Sciences</h3>
                        <p className="text-muted web-desc">With innovation and technology at the forefront of the life sciences industry, we partner with our clients to digitize their R&D, advance drug research, improve drug time to market and improve IT operations. The Oasis platform has enabled the automation of thousands of requests resulting in delighted employees and reduced costs across multiple departments.</p>
                        <ul className="text-muted list-unstyled margin-t-30 features-item-list">
                            <li className="">Improve time to market for drugs</li>
                            <li className="">Provide visibility into business outcomes for drug development</li>
                            <li className="">Improve end user experience</li>
                        </ul>
                        <Link href={"/platform"} ><a className="btn btn-custom margin-t-30 waves-effect waves-light">Learn More <i className="mdi mdi-arrow-right"></i></a></Link>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="features-img features-right text-right">
                        <img src="/static/images/home-dash.jpg" alt="Oasis Features" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="section bg-light">
        <div className="container">
            <div className="row vertical-content">
            <div className="col-sm">
                    <div className="features-img features-right text-right">
                        <img src="/static/images/home-dash.jpg" alt="Oasis Features" className="img-fluid" />
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="features-box">
                        <h3>Healthcare</h3>
                        <p className="text-muted web-desc">The Healthcare industry is experiencing massive digital transformation, shifting its focus to improved customer experiences, security, and AI. Our client’s use cases range from implementing telemedicine programs to digitizing clinical workflows. With numerous high-value opportunities available, Oasis helps healthcare revolutionize their service offerings.</p>
                        <ul className="text-muted list-unstyled margin-t-30 features-item-list">
                            <li className="">Access client or clinical data real-time, anywhere</li>
                            <li className="">Reduce costs and prevent identity theft </li>
                            <li className="">Increase efficiency and patient satisfaction </li>
                        </ul>
                        <Link href={"/platform"}><a className="btn btn-custom margin-t-30 waves-effect waves-light">Learn More <i className="mdi mdi-arrow-right"></i></a></Link>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <section className="section pt-5" id="services">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h1 className="section-title text-center">Product Solutions</h1>
                        <div className="section-title-border margin-t-20"></div>
                    </div>
                </div>
                <div className="row margin-t-30">
                    <div className="col-lg-4 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <i className="pe-7s-refresh-2 text-custom"></i>
                            <h4 className="padding-t-15">Automation</h4>
                            <p className="padding-t-15 text-muted">Delivering exceptional monitoring and automation services for your enterprise through cognitive computing. Leverage out-of-the-box solutions or make your own. Seamlessly integrate with other technology and departments for widespread and proactive business impact.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <i className="pe-7s-display2 text-custom"></i>
                            <h4 className="padding-t-15">Integration</h4>
                            <p className="padding-t-15 text-muted">Discover all of your enterprise network and device data - simply and quickly. Then view that data in a logical and digestible UI. This is the first step to having massive visibility into all systems and is critical to decision making, security, and capacity management.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <i className="pe-7s-network text-custom"></i>
                            <h4 className="padding-t-15">Security</h4>
                            <p className="padding-t-15 text-muted">With unprecedented visibility, dynamic solutions, and advanced analytics, you are able to truly understand your enterprise ecosystem. Gaining greater efficiency in identifying and implementing your initiatives. Giving you the ability to reach your digital transformation goals.</p>
                        </div>
                    </div>
                </div>
                <div className="row margin-t-30">
                    <div className="col-lg-4 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <i className="pe-7s-refresh-2 text-custom"></i>
                            <h4 className="padding-t-15">Automation</h4>
                            <p className="padding-t-15 text-muted">Delivering exceptional monitoring and automation services for your enterprise through cognitive computing. Leverage out-of-the-box solutions or make your own. Seamlessly integrate with other technology and departments for widespread and proactive business impact.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <i className="pe-7s-display2 text-custom"></i>
                            <h4 className="padding-t-15">Integration</h4>
                            <p className="padding-t-15 text-muted">Discover all of your enterprise network and device data - simply and quickly. Then view that data in a logical and digestible UI. This is the first step to having massive visibility into all systems and is critical to decision making, security, and capacity management.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <i className="pe-7s-network text-custom"></i>
                            <h4 className="padding-t-15">Security</h4>
                            <p className="padding-t-15 text-muted">With unprecedented visibility, dynamic solutions, and advanced analytics, you are able to truly understand your enterprise ecosystem. Gaining greater efficiency in identifying and implementing your initiatives. Giving you the ability to reach your digital transformation goals.</p>
                        </div>
                    </div>
                </div>
                <div className="row margin-t-30">
                    <div className="col-lg-4 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <i className="pe-7s-refresh-2 text-custom"></i>
                            <h4 className="padding-t-15">Automation</h4>
                            <p className="padding-t-15 text-muted">Delivering exceptional monitoring and automation services for your enterprise through cognitive computing. Leverage out-of-the-box solutions or make your own. Seamlessly integrate with other technology and departments for widespread and proactive business impact.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <i className="pe-7s-display2 text-custom"></i>
                            <h4 className="padding-t-15">Integration</h4>
                            <p className="padding-t-15 text-muted">Discover all of your enterprise network and device data - simply and quickly. Then view that data in a logical and digestible UI. This is the first step to having massive visibility into all systems and is critical to decision making, security, and capacity management.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <i className="pe-7s-network text-custom"></i>
                            <h4 className="padding-t-15">Security</h4>
                            <p className="padding-t-15 text-muted">With unprecedented visibility, dynamic solutions, and advanced analytics, you are able to truly understand your enterprise ecosystem. Gaining greater efficiency in identifying and implementing your initiatives. Giving you the ability to reach your digital transformation goals.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>

                <Demo />

                <Contact />

                <SocialMedia />

                <Footer />

                <FooterLinks />
        </Aux>
  	);
  }
}

export default Solutions
