import React from 'react';
import Navbar from '../src/components/Navbar';
import CoreFeatures from '../src/components/CoreFeatures';
import Demo from './components/Demo';
import PlatformFeatures from './components/PlatformFeatures';
import Contact from '../src/components/Contact';
import SocialMedia from '../src/components/SocialMedia';
import Footer from '../src/components/Footer';
import FooterLinks from '../src/components/FooterLinks';
import Aux from '../src/hoc/Aux_';
import { Link } from 'react-router-dom';
import OasisArchitecture from './components/OasisArchitecture';

class Automation extends React.Component {
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
                                            <h1 className="home-title">Automation</h1>
                                            <br />
                                        </div>
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

export default Automation