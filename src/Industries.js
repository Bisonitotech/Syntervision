import React from 'react';
import Product from './components/Product';
import Navbar from './components/Navbar';
import Demo from './components/Demo';
import Contact from './components/Contact';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';
import FooterLinks from './components/FooterLinks';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Aux from './hoc/Aux_';

class Industries extends React.Component {
  render() {
  	return (
      <Route>
        <Aux>
          <Navbar />
          <section class="section bg-light">
            <div class="container">
              <div class="row vertical-content">
                <div class="col-lg-6">
                  <div class="features-box">
                    <h3 className="other-p-title">Industries</h3>
                    <p class="other-p-content">
                      Syntervision provides integrated IT solutions with the Oasis platform. See how Oasis works for your industry, integrates with your existing systems, and gets you started on your digital transformation journey.<br/><br/>
                      Each industry faces unique business challenges. Our job is to understand what those challenges are and tailor solutions that help automate business processes and make your data work for you. Oasis can help companies in any industry achieve their business goals.
                    </p>

                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="features-img features-right text-right">
                    <img src="images/healthcare-modal.jpg" alt="Industries" class="img-fluid" />
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
      </Route>
  	);
  }
}
export default Industries;
