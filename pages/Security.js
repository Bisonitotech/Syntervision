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

import NextSeo from 'next-seo';

class Security extends React.Component {
  render() {
  	return (
        <Aux>
        <NextSeo
      config={{
        title: 'Syntervision Security',
        description: 'End-to-end security and automation platform for enterprise',
      }}
    />
          <Includes />
          <Navbar />
          <section className="section bg-light">
            <div className="container">
              <div className="row vertical-content">
                <div className="col-lg-6">
                  <div className="features-box">
                    <h3 className="other-p-title">Syntervision Security</h3>
                    <p className="other-p-content">
                    The first step to securing your business is visibility. It’s crucial to truly know your network, easily detect any changes and act in time to minimize risks. And when a breach does occur, your analysts need information that describes the what, who, and why of the situation. With a dynamic network of scale in constant flux, it’s difficult to know where your blind spots are. Oasis meets this challenge by modernizing your monitoring, detection, and response efforts with advanced analytics and workflows.<br/><br/>
                    Looking for an all-in-one solution? Enter Syntervision Security, delivering greater flexibility to organizations than an MSSP and more capabilities than building it in-house. Leveraging the Oasis Platform, the service will reduce time-consuming false alerts and automate remediation actions. Contact us today to learn more about using Syntervision Security as your SIEM and SOAR solution.
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
