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

class Industries extends React.Component {
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
                    <h3 className="other-p-title">Industries</h3>
                    <p className="other-p-content">
                      Syntervision provides integrated IT solutions with the Oasis platform. See how Oasis works for your industry, integrates with your existing systems, and gets you started on your digital transformation journey.<br/><br/>
                      Each industry faces unique business challenges. Our job is to understand what those challenges are and tailor solutions that help automate business processes and make your data work for you. Oasis can help companies in any industry achieve their business goals.
                    </p>
                    <br/>
                    <br/>
                    <h3>Life Sciences</h3>
                    <div className="ptype">
                      With innovation and technology at the forefront of the life sciences industry, we partner with our clients to digitize their R&D, advance drug research, improve drug time to market and improve IT operations. The Oasis platform has enabled the automation of thousands of requests resulting in delighted employees and reduced costs across multiple departments.

                      <ul>
                        <li>Improve time to market for drugs</li>
                        <li>Provide visibility into business outcomes for drug development</li>
                        <li>Improve end user experience</li>
                      </ul>
                    </div>
                    <br/>
                    <br/>
                    <h3>Healthcare</h3>
                    <div className="ptype">The Healthcare industry is experiencing massive digital transformation, shifting its focus to improved customer experiences, security, and AI. Our client’s use cases range from implementing telemedicine programs to digitizing clinical workflows. With numerous high-value opportunities available, Oasis helps healthcare revolutionize their service offerings.
                    <ul>
                      <li>Access client or clinical data real-time, anywhere</li>
                      <li>Reduce costs and prevent identity theft</li>
                      <li>Increase efficiency and patient satisfaction</li>
                    </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="features-img features-right text-right">
                    <img src="/static/images/healthcare-modal.jpg" alt="Industries" className="img-fluid" />
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
export default Industries;
