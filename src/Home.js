import React from 'react';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Features from './components/Features';
import Descriptions from './components/Descriptions';
import Process from './components/Process';
import Started from './components/Started';
import Blog from './components/Blog';
import Demo from './components/Demo';
import Contact from './components/Contact';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';
import FooterLinks from './components/FooterLinks';
import Aux from './hoc/Aux_';
import { Link } from 'react-router-dom';

class HomeFive extends React.Component {
  render() {

    var bkg1 = {
        backgroundImage: 'url(images/img-2.jpg)',
        backgroundSize : 'cover',
        backgroundPosition : 'center',
      };
 
  	return (
        <Aux>
                <Navbar />

                <section className="home-padding-t-150 position-relative" id="home"  style={bkg1}>
                    <div className="bg-overlay"></div>
                       <div className="display-table">
                            <div className="home-cell-bottom">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-8 offset-lg-2 text-white text-center">
                                            <h1 className="home-title">A Platform for Aggregation, Automation and Control</h1>
                                            <p className="padding-t-15 home-desc">Creating synergy for your enterprise with cognitive technology and solutions. Start your digital transformation journey today.</p>
                                            <img src="images/home-dash.png" alt="" className="img-fluid center-block margin-t-20" />  
                                        </div>
                                    </div>
                            </div>
                       </div>
                    </div>
                </section>

                <Services />

                <Features />
                
                <Descriptions />

                <Process />

                <Demo />

                <Contact />

                <SocialMedia />
                
                <Footer />

                <FooterLinks />
        </Aux>
  	);
  }
}

export default HomeFive;