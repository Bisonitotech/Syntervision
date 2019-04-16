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

class Integrations extends React.Component {

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
                    <h3 className="other-p-title">Integrations</h3>
                    <p class="other-p-content">
                      The Oasis Platform was designed from the beginning to consume data and convert it into useful information. That makes it simple and fast to pull data, statistics, and anything structured, unstructured and semi-structured into the platform and synthesize it with any related content. The flow of information travels bidirectionally to populate and receive information from the Oasis custom dashboard and reporting engine, Service Desks, Request Systems, and more complex processing business systems.<br/><br/>
                      The result is useful information that can drive faster development cycles and more accurate analyses and reporting - allowing you to make better business decisions and reach your target market faster.
                      <br/><br/>
                      The list of integrations below are a continuously growing example of Oasis leveraging 3rd party products to simplify and automate business cycles. If you don’t see what you need below, let us know, or take a look at the rich Oasis open API.
                    </p>

                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="integrations-flex">
                    <img src="images/NewRelic-logo-bug.png" alt="Integrations" class="img-fluid" />
                    <img src="images/appd-logo-340x0_q100.png" alt="Integrations" class="img-fluid" />
                    <img src="images/sn-logo-transparent.png" alt="Integrations" class="img-fluid" />
                  </div>
                  <div class="integrations-flex">
                    <img src="images/google-cloud.png" alt="Integrations" class="img-fluid" />
                    <img src="images/amazon-aws-logo-transparent.png" alt="Integrations" class="img-fluid" />
                    <img src="images/microsoft-azure-logo.png" alt="Integrations" class="img-fluid" />
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
export default Integrations;
