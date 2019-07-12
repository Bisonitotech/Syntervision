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

class Whoweare extends React.Component {
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
                    <div className="col-xl">
                        <h1 className="section-title text-center">Syntervision History</h1>
                        <div className="section-title-border margin-t-20"></div>
                        <p className="section-subtitle text-muted text-justify padding-t-30 font-secondary">In 1994, we started a business called E&D Software Consultants. It quickly evolved from supporting small businesses to providing engineering services and specifically, implementing management solutions for large enterprises. This evolution brought many lessons. We found there was no reliable, unified data solution on the market. Our customers almost always required custom development solutions to reach their goals. With only piecemeal and expensive tools for us to use, our solutions were often too complex, lacked standards, and pushed out some medium and small businesses from benefitting. We wanted to change that, and so - Syntervision was founded in 2016 with plans for becoming a SaaS company.</p>
                        <p className="section-subtitle text-muted text-justify padding-t-30 font-secondary">We built our flagship product, the Oasis Platform, and made it align with ITIL processes that our customers could understand. Based on the challenges we encountered with the existing tool sets, we knew that having Discovery as a dynamic model to represent the environment we managed was crucial. We also knew that storing data in context of that model would then provide a structured unified data source in which we could build off of. We proved ourselves right, finding that the simplest way to manage large data was to structure it on ingest. Thinking big picture, we wanted our Oasis Platform software solution to be fully autonomous - which is where we find ourselves today. Syntervision is on a mission to create a fully cognitive software solution to digitally transform network service operations and security operations teams around the world; we’d love to partner with you so we can get there together.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <br />
                        <h1 className="section-title text-center">Who We Are</h1>
                        <div className="section-title-border margin-t-20"></div>
                        <h3 className="section-subtitle text-muted text-justify padding-t-30 font-secondary text-center">Our mission is to automate and scale the ability of enterprise IT Operations to meet the demands of digital transformation.</h3><br/>
                        <p className="text-muted text-center">Syntervision provides Oasis, an end-to-end monitoring and data management platform as a holistic and foundational solution for accelerating digital transformation. We execute on this strategy in 3 steps:</p>
                    </div>
                </div>
                <div className="row margin-t-30">
                    <div className="col-lg-4 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <i className="pe-7s-refresh-2 text-custom"></i>
                            <h4 className="padding-t-15">Aggregation</h4>
                            <p className="padding-t-15 text-muted">Gain a full, current view of the enterprise ecosystem through network and device discovery.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <i className="pe-7s-display2 text-custom"></i>
                            <h4 className="padding-t-15">Automation</h4>
                            <p className="padding-t-15 text-muted">Automate repeatable processes so that your delivery pipelines are more responsive and personnel can focus on higher level work.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <i className="pe-7s-network text-custom"></i>
                            <h4 className="padding-t-15">Control</h4>
                            <p className="padding-t-15 text-muted">Manage applications and infrastructure seamlessly, optimize services, and truly achieve business agility.</p>
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

export default Whoweare
