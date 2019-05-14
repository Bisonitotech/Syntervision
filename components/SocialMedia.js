import React from 'react';
import Link from 'next/link';

class SocialMedia extends React.Component {
  render() {
  	return (
        <section className="cta bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <ul className="list-inline social margin-t-20">

                            <li className="list-inline-item"> <a href="https://twitter.com/syntervisioninc" className="social-icon"><i className="mdi mdi-twitter"></i></a></li>
                            <li className="list-inline-item"> <a href="https://www.linkedin.com/company/syntervision-inc" className="social-icon"><i className="mdi mdi-linkedin"></i></a></li>
                            {/*<li className="list-inline-item"> <a href="JavaScript:Void(0);" className="social-icon"><i className="mdi mdi-medium"></i></a></li>
                            <li className="list-inline-item"> <a href="JavaScript:Void(0);" className="social-icon"><i className="mdi mdi-youtube-play"></i></a></li>
                             <li className="list-inline-item"> <Link to="JavaScript:Void(0);" className="social-icon"><i className="mdi mdi-telegram"></i></Link></li> */}
                        </ul>
                    </div>
                    <div className="col-lg-3 margin-t-30">
                        <p className="margin-b-0 contact-title mobile-hidden"><i className="pe-7s-call"></i> &nbsp;+1 256 508 5590</p>
                        <p className="margin-b-0 contact-title desktop-hidden"><a href="tel:1-256-508-5590"><i className="pe-7s-call"></i> &nbsp;+1 256 508 5590</a></p>
                    </div>
                    <div className="col-lg-3 margin-t-30 text-right">
                        <p className="contact-title"><i className="pe-7s-mail-open"></i>&nbsp; info@syntervision.com</p>
                    </div>
                </div>
            </div>
        </section>
  	);
  }
}
export default SocialMedia;
