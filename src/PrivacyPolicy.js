import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import ContactDemo from './components/ContactDemo';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';
import FooterLinks from './components/FooterLinks';
import Aux from './hoc/Aux_';

class PrivacyPolicy extends React.Component {
  render() {

    var bkg1 = {
        backgroundImage: 'url(images/img-2.jpg)',
        backgroundSize : 'cover',
        backgroundPosition : 'center',
      };

  	return (
          <Route>
        <Aux>
                <Navbar />

                <section className="home-padding-t-150 position-relative" id="home"  style={bkg1}>
                    <div className="bg-overlay"></div>
                       <div className="display-table">
                            <div className="home-cell-bottom">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-8 offset-lg-2 text-white text-center">
                                        </div>
                                    </div>
                            </div>
                       </div>
                    </div>
                </section>
                <section className="privacy">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <h3 className="title">PRIVACY TITLE</h3>
                        <h6 className="subtitle">Last updated June 29, 2018</h6>
                        <p>
                          Thank you for choosing to be part of our community at Syntervision, Inc. (“company”, “we”, “us”, or “our”). We are committed toprotecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or ourpractices with regards to your personal information, please contact us at greg.elmore@syntervision.com.<br/><br/>When you visit our website and use our services and/or software, you trust us with your personal information. We take your privacyvery seriously. In this privacy notice, we describe our privacy policy. We seek to explain to you in the clearest way possible whatinformation we collect, how we use it and what rights you have in relation to it. We hope you take some time to read through itcarefully, as it is important. If there are any terms in this privacy policy that you do not agree with, please discontinue use of ourSites and our services.<br/><br/>This privacy policy applies to all information collected through our website and software, and/or any related services,sales, marketing or events (we refer to them collectively in this privacy policy as the <b>"Sites"</b>). <br/><br/>
                          <b>Please read this privacy policy carefully as it will help you make informed decisions about sharing your personalinformation with us. </b>
                        </p>
                        <h4 className="contents-title">TABLE OF CONTENTS</h4>
                        <div className="contents-link">
                          <a href="#content1">1. WHAT INFORMATION DO WE COLLECT?</a>
                          <a href="#content2">2. HOW DO WE USE YOUR INFORMATION?</a>
                          <a href="#content3">3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</a>
                          <a href="#content4">4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</a>
                          <a href="#content5">5. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</a>
                          <a href="#content6">6. HOW LONG DO WE KEEP YOUR INFORMATION?</a>
                          <a href="#content7">7. HOW DO WE KEEP YOUR INFORMATION SAFE?</a>
                          <a href="#content8">8. DO WE COLLECT INFORMATION FROM MINORS?</a>
                          <a href="#content9">9. WHAT ARE YOUR PRIVACY RIGHTS?</a>
                          <a href="#content1">10. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</a>
                          <a href="#content1">11. DO WE MAKE UPDATES TO THIS POLICY?</a>
                          <a href="#content1">12. HOW CAN YOU CONTACT US ABOUT THIS POLICY?</a>
                        </div>
                        <div id="content1">
                          <h4>1. WHAT INFORMATION DO WE COLLECT?</h4>
                          <h5>Personal information you disclose to us</h5>
                          <p><i><b>In Short: </b>We collect personal information that you provide to us such as name, address, contact information, passwords andsecurity data, and payment information.</i>
                          <br/><br/>
                          We collect personal information that you voluntarily provide to us when registering at the Sites expressing an interest in obtaininginformation about us or our products and services, when participating in activities on the Sites (such as posting messages in ouronline forums or entering competitions, contests or giveaways) or otherwise contacting us.
                          <br/><br/>The personal information that we collect depends on the context of your interactions with us and the Sites, the choices you makeand the products and features you use. The personal information we collect can include the following:<br/><br/><b>Name and Contact Data.</b> We collect your first and last name, email address, postal address, phone number, and other similar contact data.<br/><br/><b>Credentials.</b>  We  collect  passwords,  password  hints,  and  similar  security  information  used  for  authentication  and  account access.<br/><br/><b>Payment Data.</b> We collect data necessary to process your payment if you make purchases, such as your payment instrumentnumber (such as a credit card number), and the security code associated with your payment instrument. All payment data isstored by our payment processor and you should review its privacy policies and contact the payment processor directly torespond to your questions.<br/><br/>All personal information that you provide to us must be true, complete and accurate, and you must notify us of any changes tosuch personal information.</p>

                          <h5>Information automatically collected</h5>
                          <p><i><b>In Short: </b>Some information – such as IP address and/or browser and device characteristics – is collected automatically whenyou visit our Sites.</i><br/><br/>
                          We automatically collect certain information when you visit, use or navigate the Sites. This information does not reveal yourspecific identity (like your name or contact information) but may include device and usage information, such as your IP address,browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location,information about how and when you use our Sites and other technical information. This information is primarily needed tomaintain the security and operation of our Sites, and for our internal analytics and reporting purposes. <br/><br/>Like many businesses, we also collect information through cookies and similar technologies.</p>
                          <h5>Information collected from other sources</h5>
                          <p><i><b>In Short: </b>We may collect limited data from public databases, marketing partners, and other outside sources.</i>
                          We may obtain information about you from other sources, such as public databases, joint marketing partners, as well as fromother  third  parties.  Examples  of  the  information  we  receive  from  other  sources  include:  social  media  profile  information;marketing leads and search results and links, including paid listings (such as sponsored links).</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <SocialMedia />

                <Footer />

                <FooterLinks />
        </Aux>
        </Route>
  	);
  }
}

export default PrivacyPolicy
