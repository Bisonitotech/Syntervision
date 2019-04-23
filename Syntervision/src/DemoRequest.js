import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import ContactDemo from './components/ContactDemo';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';
import FooterLinks from './components/FooterLinks';
import Aux from './hoc/Aux_';

class DemoRequest extends React.Component {
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

                <ContactDemo />

                <SocialMedia />
                
                <Footer />

                <FooterLinks />
        </Aux>
        </Route>
  	);
  }
}

export default DemoRequest