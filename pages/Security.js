import React from 'react';
import Product from '../components/Product';
import Navbar from '../components/Navbar';
import Demo from '../components/Demo';
import Contact from '../components/Contact';
import SocialMedia from '../components/SocialMedia';
import Footer from '../components/Footer';
import FooterLinks from '../components/FooterLinks';
import Link from 'next/link';
import Aux from './hoc/Aux_';
import Includes from '../components/Includes';

class Security extends React.Component {
  render() {
  	return (
        <Aux>
          <Includes />
          <Navbar />
          <section className="section bg-light">
            <div className="container">
              <div className="row vertical-content">
                <div className="col-lg-6">
                  <div className="features-box">
                    <h3 className="other-p-title">Security</h3>
                    <p className="other-p-content">
                      The first step to securing your business is visibility. It’s crucial to truly know your network, easily detect any changes and act in time to minimize risks. And when a does breach occur, your analysts need information that describes the what, who, and why of the situation. With a dynamic network of scale in constant flux, it’s difficult to know where your blind spots are. Oasis meets this challenge by modernizing your monitoring, detection, and response efforts with advanced analytics and workflows.<br/><br/>
                      Looking for an all-in-one solution? Enter Cybervision, our partner offering for a SOC-as-service, delivering greater flexibility to organizations than an MSSP and more capabilities than building it in-house. Leveraging the Oasis Platform, the service will reduce time-consuming false alerts and stand by with world-leading cyber forensic experts in case rapid remediation is required. Cybervision is a fully staffed 24/7 security team who will detect, analyze, and respond to network threats. Learn more about Cybervision here.
                    </p>

                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="features-img features-right text-right">
                    <img src="/static/images/secuirty-modal.png" alt="Security" className="img-fluid" />
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
export default Security;
