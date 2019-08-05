import React from 'react';
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
import OasisArchitecture from '../components/OasisArchitecture';
import Includes from '../components/Includes';

class Automation extends React.Component {
  render() {

    var bkg1 = {
        backgroundImage: 'url(static/images/img-2.jpg)',
        backgroundSize : 'cover',
        backgroundPosition : 'center',
      };

  	return (
        <Aux>
        <Includes/>
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
