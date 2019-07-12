import React from 'react';
import Product from '../components/Product';
import Navbar from '../components/Navbar';
import Demo from '../components/Demo';
import Contact from '../components/Contact';
import SocialMedia from '../components/SocialMedia';
import Footer from '../components/Footer';
import FooterLinks from '../components/FooterLinks';
import Link from 'next/link';
import Aux from './hoc/Aux_';
import Includes from '../components/Includes';

export default ({ url: { query: { index } } }) => (
  <Aux>
    <div className="mobile-only">
    <Includes />
    <Navbar />
    <div className="mobile-products">
      <Product contentName={'product'} currentIndex={parseInt(index)>0?parseInt(index):0} type={'mobile'} interval={null}/>
    </div>
    <Demo />

    <Contact />

    <SocialMedia />

    <Footer />

    <FooterLinks />
    </div>
  </Aux>
)
