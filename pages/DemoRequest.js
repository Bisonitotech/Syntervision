import React from 'react';
import Navbar from '../components/Navbar';
import ContactDemo from '../components/ContactDemo';
import SocialMedia from '../components/SocialMedia';
import Footer from '../components/Footer';
import FooterLinks from '../components/FooterLinks';
import Aux from './hoc/Aux_';
import Link from 'next/link';
import Includes from '../components/Includes';
import NextSeo from 'next-seo';

class DemoRequest extends React.Component {
  render() {

    var bkg1 = {
        backgroundImage: 'url(static/images/img-2.jpg)',
        backgroundSize : 'cover',
        backgroundPosition : 'center',
      };

  	return (
        <Aux>
        <NextSeo
      config={{
        title: 'Request a Demo',
        description: 'Request a free demo version of the Oasis Platform today.',
      }}
    />
        <Includes/>
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

                <ContactDemo />

                <SocialMedia />

                <Footer />

                <FooterLinks />
        </Aux>
  	);
  }
}

export default DemoRequest
