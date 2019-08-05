import React from 'react';
import { BrowserRouter, Route, Switch } from 'next/link';
import Navbar from '../components/Navbar';
import CoreFeatures from '../components/CoreFeatures';
import Demo from '../components/Demo';
import PlatformFeatures from '../components/PlatformFeatures';
import Contact from '../components/Contact';
import SocialMedia from '../components/SocialMedia';
import Footer from '../components/Footer';
import FooterLinks from '../components/FooterLinks';
import Aux from './hoc/Aux_';
import Link from 'next/link';
import Includes from '../components/Includes';
import OasisArchitecture from '../components/OasisArchitecture';

class Platform extends React.Component {
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

                <PlatformFeatures />

                <CoreFeatures />

                <OasisArchitecture />

                <section className="section pt-5" id="services">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h1 className="section-title text-center">Our Products</h1>
                        <div className="section-title-border margin-t-20"></div>
                    </div>
                </div>
                <div className="row margin-t-30">
                    <div className="col-lg-4 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <i className="pe-7s-refresh-2 text-custom"></i>
                            <h4 className="padding-t-15">Automation with OVO</h4>
                            <p className="padding-t-15 text-muted">The Oasis Virtual Operator delivers exceptional automation services for any repeatable process through cognitive computing. The graphical user interface offers a number of common automations right out of the box, but can also be customized!</p>
                        </div>
                    </div>
                    <div className="col-lg-4 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <i className="pe-7s-keypad text-custom"></i>
                            <h4 className="padding-t-15">Event Manager</h4>
                            <p className="padding-t-15 text-muted">The Oasis Event Manager (OEM) delivers a modernized approach to Operations Management by reducing the noise in your system. Go from thousands of daily events down to a manageable volume for your NOC staff - increasing productivity.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <i className="pe-7s-plugin text-custom"></i>
                            <h4 className="padding-t-15">Trap Adapter</h4>
                            <p className="padding-t-15 text-muted">The Oasis Trap Adapter is a fully configurable Trap Listener and Forwarder with native integration to the Oasis Platform. When you leverage the easy-to-use Oasis web application, you can fully configure all features, including the trap exploder and forwarder. </p>
                        </div>
                    </div>
                </div>
                <div className="row margin-t-30">
                    <div className="col-lg-4 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <i className="pe-7s-graph1 text-custom"></i>
                            <h4 className="padding-t-15">Analytics</h4>
                            <p className="padding-t-15 text-muted">Oasis delivers business impacting information straight out of your raw data. Countless feeds from your devices, applications, logs and events are consumed by the Oasis ingestion engine, then normalized to generate context. In turn, that information can be converted into actionable intelligence by the Oasis analytics engine.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <i className="pe-7s-search text-custom"></i>
                            <h4 className="padding-t-15">Discovery</h4>
                            <p className="padding-t-15 text-muted">Discover all of your enterprise network and device data - simply and quickly. Then view that data in a logical and digestible UI. This is the first step to having massive visibility into all systems and is critical to decision making, security, and capacity management.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <i className="pe-7s-door-lock text-custom"></i>
                            <h4 className="padding-t-15">Security with Cybervision</h4>
                            <p className="padding-t-15 text-muted">Securing your business depends on firstly knowing what you have and then, what changed and why. It's crucial to spot the changes in time to minimize risk to the business. And when a breach occurs, analysts need information that describes what and who was impacted and how the breach happened. </p>
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

export default Platform
