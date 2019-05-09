import React from 'react';
import Product from '../components/Product';
import Navbar from '../components/Navbar';
import Demo from '../components/Demo';
import Contact from '../components/Contact';
import SocialMedia from '../components/SocialMedia';
import Footer from '../components/Footer';
import FooterLinks from '../components/FooterLinks';
import { Link } from 'next/link';
import Aux from './hoc/Aux_';
import Includes from '../components/Includes';

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
        <Aux>
          <Includes />
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
  	);
  }
}
export default Products;
