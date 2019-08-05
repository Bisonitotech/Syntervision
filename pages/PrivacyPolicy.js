import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import ContactDemo from '../components/ContactDemo';
import SocialMedia from '../components/SocialMedia';
import Footer from '../components/Footer';
import FooterLinks from '../components/FooterLinks';
import Aux from './hoc/Aux_';
import Includes from '../components/Includes';

class PrivacyPolicy extends React.Component {
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
                        <h3 className="title">PRIVACY NOTICE</h3>
                        <h6 className="subtitle">Last updated April 11th, 2019</h6>
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
                        <div id="content1" className="content-title">
                          <h4>1. WHAT INFORMATION DO WE COLLECT?</h4>
                          <h5>Personal information you disclose to us</h5>
                          <p><i><b>In Short: </b>We collect personal information that you provide to us such as name, address, contact information, passwords and security data, and payment information.</i>
                          <br/><br/>
                          We collect personal information that you voluntarily provide to us when registering at the Sites expressing an interest in obtaining information about us or our products and services, when participating in activities on the Sites (such as posting messages in ouronline forums or entering competitions, contests or giveaways) or otherwise contacting us.
                          <br/><br/>The personal information that we collect depends on the context of your interactions with us and the Sites, the choices you makeand the products and features you use. The personal information we collect can include the following:<br/><br/><b>Name and Contact Data.</b> We collect your first and last name, email address, postal address, phone number, and other similar contact data.<br/><br/><b>Credentials.</b>  We  collect  passwords,  password  hints,  and  similar  security  information  used  for  authentication  and  account access.<br/><br/><b>Payment Data.</b> We collect data necessary to process your payment if you make purchases, such as your payment instrument number (such as a credit card number), and the security code associated with your payment instrument. All payment data is stored by our payment processor and you should review its privacy policies and contact the payment processor directly to respond to your questions.<br/><br/>All personal information that you provide to us must be true, complete and accurate, and you must notify us of any changes to such personal information.</p>

                          <h5>Information automatically collected</h5>
                          <p><i><b>In Short: </b>Some information – such as IP address and/or browser and device characteristics – is collected automatically whenyou visit our Sites.</i><br/><br/>
                          We automatically collect certain information when you visit, use or navigate the Sites. This information does not reveal yourspecific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location,information about how and when you use our Sites and other technical information. This information is primarily needed to maintain the security and operation of our Sites, and for our internal analytics and reporting purposes. <br/><br/>Like many businesses, we also collect information through cookies and similar technologies.</p>
                          <h5>Information collected from other sources</h5>
                          <p><i><b>In Short: </b>We may collect limited data from public databases, marketing partners, and other outside sources.</i>
                          We may obtain information about you from other sources, such as public databases, joint marketing partners, as well as fromother  third  parties.  Examples  of  the  information  we  receive  from  other  sources  include:  social  media  profile  information; marketing leads and search results and links, including paid listings (such as sponsored links).</p>
                        </div>
                        <div id="content2" className="content-title">
                          <h4>2. HOW DO WE USE YOUR INFORMATION?</h4>
                          <div className="ptype"><i><b>In Short: </b>We process your information for purposes based on legitimate business interests, the fulfillment of our contract withyou, compliance with our legal obligations, and/or your consent.</i>
                            <br/><br/>We use personal information collected via our Sites for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests ("Business Purposes"), in order to enter into or perform a contract with you ("Contractual"), with your consent ("Consent"), and/or for compliance with our legal obligations("Legal Reasons"). We indicate the specific processing grounds we rely on next to each purpose listed below. <br/><br/>We use the information we collect or receive:<br/><br/>
                            <ul>
                              <li><b>To facilitate account creation and logon process</b> with your Consent. If you choose to link your account with us to athird party account *(such as your Google or Facebook account), we use the information you allowed us to collect from those third parties to facilitate account creation and logon process. See the section below headed "<a>HOW DO WE HANDLEYOUR SOCIAL LOGINS</a>" for further information.</li>
                              <li><b>To send administrative information to you</b> for Business Purposes and/or Legal Reasons. We may use your personal information to send you product, service and new feature information and/or information about changes to our terms, conditions, and policies. </li>
                            </ul>
                          </div>
                        </div>
                        <div id="content3" className="content-title">
                          <h4>3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</h4>
                          <div className="ptype"><i><b>In Short: </b>We  only  share  information  with  your  consent,  to  comply  with  laws,  to  protect  your  rights,  or  to  fulfill  business obligations.</i>
                            <br/><br/>We only share and disclose your information in the following situations:
                            <br/><br/>
                            <ul>
                              <li><b>Compliance with Laws.</b>We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process, such as in response to a court order or a subpoena (including in response to public authorities to meet national security or law enforcement requirements).</li>
                              <li><b>Vital Interests and Legal Rights.</b>We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal activities, or as evidence in litigation in which we are involved.</li>
                              <li><b>Business Transfers.</b>We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                              <li><b>With your Consent.</b>We may disclose your personal information for any other purpose with your consent.</li>
                            </ul>
                          </div>
                        </div>
                        <div id="content4" className="content-title">
                          <h4>4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h4>
                          <p><i><b>In Short: </b>We may use cookies and other tracking technologies to collect and store your information.</i><br/><br/>
                          We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Policy. </p>
                        </div>
                        <div id="content5" className="content-title">
                          <h4>5. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</h4>
                          <p><i><b>In Short: </b>We may transfer, store, and process your information in countries other than your own.</i>
                          <br/><br/>
                          Our servers are located in United States. If you are accessing our Sites from outside United States, please be aware that yourinformation may be transferred to, stored, and processed by us in our facilities and by those third parties with whom we mayshare  your  personal  information  (see  "WILL  YOUR  INFORMATION  BE  SHARED  WITH  ANYONE?"  above),  in  and  other countries.<br/><br/>
                          If you are a resident in the European Economic Area, then these countries may not have data protection or other laws ascomprehensive as those in your country. We will however take all necessary measures to protect your personal information in
accordance with this privacy policy and applicable law.
                          <br/><br/>EU­U.S. Privacy Shield Framework: <br/><br/>
                          In particular Syntervision, Inc. complies with the EU­U.S. Privacy Shield Framework as set forth by the U.S. Department ofCommerce regarding the collection, use, and retention of personal information transferred from the European Union to theUnited  States  and  has  certified  its  compliance  with  it.  As  such,  Syntervision,  Inc.  is  committed  to  subjecting  all  personalinformation  received  from  European  Union  (EU)  member  countries,  in  reliance  on  the  Privacy  Shield  Framework,  to  theFramework’s applicable Principles. To learn more about the Privacy Shield Framework, visit the U.S. Department of Commerce’s Privacy Shield List.<br/><br/>Syntervision, Inc.  is responsible for the processing of personal information it receives, under the Privacy Shield Framework, and subsequently transfers to a third party acting as an agent on its behalf.<br/><br/>With respect to personal information received or transferred pursuant to the Privacy Shield Framework, Syntervision, Inc. issubject to the regulatory enforcement powers of the U.S. FTC. In certain situations, we may be required to disclose personal information  in  response  to  lawful  requests  by  public  authorities,  including  to  meet  national  security  or  law  enforcement requirements.
                          </p>

                        </div>
                        <div id="content6" className="content-title">
                          <h4>6. HOW LONG DO WE KEEP YOUR INFORMATION?</h4>
                          <p><i><b>In Short: </b>We keep your information for as long as necessary to fulfill the purposes outlined in this privacy policy unless otherwise required by law.</i>
                            <br/><br/>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless alonger retention period is required or permitted by law (such as tax, accounting or other legal requirements). No purpose in this policy will require us keeping your personal information for longer than 90 days past the termination of the user's account.
                            <br/><br/>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize it,or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
                          </p>
                        </div>
                        <div id="content7" className="content-title">
                          <h4>7. HOW DO WE KEEP YOUR INFORMATION SAFE?</h4>
                          <p><i><b>In Short: </b>We aim to protect your personal information through a system of organizational and technical security measures.</i>
                            <br/><br/>We  have  implemented  appropriate  technical  and  organizational  security  measures  designed  to  protect  the  security  of  any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure. Although we will do our best to protect your personal information, transmission of personal information to and from ourSites is at your own risk. You should only access the services within a secure environment.
                          </p>
                        </div>
                        <div id="content8" className="content-title">
                          <h4>8. DO WE COLLECT INFORMATION FROM MINORS?</h4>
                          <p><i><b>In Short: </b>We do not knowingly collect data from or market to children under 18 years of age.</i>
                          <br/><br/>We do not knowingly solicit data from or market to children under 18 years of age. By using the Sites, you represent that you areat least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Sites. If welearn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we have collected fromchildren under age 18, please contact us at greg.elmore@syntervision.com.
                          </p>
                        </div>
                        <div id="content9" className="content-title">
                          <h4>9. WHAT ARE YOUR PRIVACY RIGHTS?</h4>
                          <p><i><b>In Short: </b>In some regions, such as the European Economic Area, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.</i>
                            <br/><br/>In some regions (like the European Economic Area), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) torestrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information. To make such a request, please use the <a>contact details</a> provided below. We will consider and act upon any request in accordance with applicable data protection laws.
                            <br/><br/>
                            If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time. Please note however that this will not affect the lawfulness of the processing before its withdrawal.
                            <br/><br/>
                            If you are resident in the European Economic Area and you believe we are unlawfully processing your personal information, youalso  have  the  right  to  complain  to  your  local  data  protection  supervisory  authority.  You  can  find  their  contact  details here: <a href="http://ec.europa.eu/justice/data­protection/bodies/authorities/index_en.htm">http://ec.europa.eu/justice/data­protection/bodies/authorities/index_en.htm</a>
                          </p>
                          <h5>Account Information</h5>
                          <div className="ptype">
                            If you would at any time like to review or change the information in your account or terminate your account, you can:
                            <ul>
                              <li>Log into your account settings and update your user account.</li>
                              <li>Contact us using the contact information provided.</li>
                            </ul>
                            <br/><br/>
                            Upon  your  request  to  terminate  your  account,  we  will  deactivate  or  delete  your  account  and  information  from  our  active databases. However, some information may be retained in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our Terms of Use and/or comply with legal requirements.
                            <br/><br/>
                            <a className="greya">
                              Cookies and similar technologies:
                            </a>
                            Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could  affect  certain  features  or  services  of  our  Sites.  To  opt­out  of  interest ­based  advertising  by  advertisers  on  our  Sites visit <a href="http://www.aboutads.info/choices/">http://www.aboutads.info/choices/</a> .
                            <br/><br/>

                            <a className="greya">
                              Opting out of email marketing:
                            </a>
                            You can unsubscribe from our marketing email list at any time by clicking on the unsubscribe link in the emails that we send or by contacting us using the details provided below. You will then be removed from the marketing email list – however, we will still need to send you service­ related emails that are necessary for the administration and use ofyour account. To otherwise opt­out, you may:
                            <br/><br/>
                            <ul>
                              <li>Contact us using the contact information provided. </li>
                            </ul>
                          </div>
                        </div>

                        <div id="content10" className="content-title">
                          <h4>10. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h4>
                          <p><i><b>In Short: </b>Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information. </i>
                            <br/><br/>California Civil Code Section 1798.83, also known as the “Shine The Light” law, permits our users who are California residents torequest and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such arequest, please submit your request in writing to us using the contact information provided below.
                            <br/><br/>If you are under 18 years of age, reside in California, and have a registered account with the Sites, you have the right to request removal of unwanted data that you publicly post on the Sites. To request removal of such data, please contact us using the contact information provided below, and include the email address associated with your account and a statement that you residein California. We will make sure the data is not publicly displayed on the Sites, but please be aware that the data may not becompletely or comprehensively removed from our systems.
                          </p>
                        </div>
                        <div id="content11" className="content-title">
                          <h4>11. DO WE MAKE UPDATES TO THIS POLICY?</h4>
                          <p><i><b>In Short: </b>Yes, we will update this policy as necessary to stay compliant with relevant laws.</i>
                          <br/><br/>
                          We may update this privacy policy from time to time. The updated version will be indicated by an updated “Revised” date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy policy, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy policy frequently to be informed of how we are protecting your information.
                          </p>
                        </div>
                        <div id="content12" className="content-title">
                          <h4>12. HOW CAN YOU CONTACT US ABOUT THIS POLICY?</h4>
                          <p>If you have questions or comments about this policy, you may email us at greg.elmore@syntervision.com or by post to:
                            <br/><br/>
                            Syntervision, Inc.<br/>
                            4800 Whitesburg Drive<br/>#30­257<br/>
                            Huntsville, AL 35802<br/>
                            United States<br/>
                            <br/>If you have any further questions or comments about us or our policies, email us at greg.elmore@syntervision.com or by post to:
                            <br/>
                            <br/>Syntervision, Inc.<br/>
                            4800 Whitesburg Drive<br/>
                            #30­257<br/>
                            Huntsville, AL 35802<br/>
                            United States<br/>
                            Phone: (877) 801 3100
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <SocialMedia />

                <Footer />

                <FooterLinks />
        </Aux>
  	);
  }
}

export default PrivacyPolicy
