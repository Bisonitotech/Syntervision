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

class Products extends React.Component {
closeModal(){
  this.setState({
    index: 0,
    modalShow: false,
    modalContent: ''
  })
}
  render() {
  	return (
      <Route>
        <Aux>
          <Navbar />
          <div className="mobile-products">
            <Product contentName={'product'} currentIndex={parseInt(localStorage.getItem('index'))>0?parseInt(localStorage.getItem('index')):0} type={'mobile'} interval={null}/>
          </div>
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
export default Products;
