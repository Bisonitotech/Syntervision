import React from 'react';
import Link from 'next/link';

class Process extends React.Component {
  render() {
  	return (
        <section className="section bg-light">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <h1 className="section-title text-center">Standing Up the Oasis Platform</h1>
                    <div className="section-title-border margin-t-20"></div>
                    <p className="section-subtitle text-muted text-center font-secondary padding-t-30">In an ideal world we install and be on our way. At Syntervision is to make it that easy, but each of our clients ecosystem is different. We specialise in integrating into any network for quick integrations so you're back to work without having to go thorugh the month long integrations from most IoT solutions.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 text-center process-left-icon-1">
                    <i className="pe-7s-angle-right"></i>
                </div>
                <div className="col-lg-6 text-center process-left-icon-2">
                    <i className="pe-7s-angle-right"></i>
                </div>
            </div>
            <div className="row margin-t-50">
                <div className="col-lg-4 plan-line">
                    <div className="text-center process-box">
                        <i className="pe-7s-share text-custom"></i>
                        <h4 className="padding-t-15">Integrate</h4>
                    </div>
                </div>
                <div className="col-lg-4 plan-line">
                    <div className="text-center process-box">
                        <i className="pe-7s-search text-custom"></i>
                        <h4 className="padding-t-15">Discover</h4>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="text-center process-box">
                        <i className="pe-7s-rocket text-custom"></i>
                        <h4 className="padding-t-15">Automate</h4>
                    </div>
                </div>
                <div className="text-center mx-auto">
                <a href="/platform" className="btn btn-custom waves-light waves-effect margin-t-50 nav-link">Learn More <i className="mdi mdi-arrow-right"></i></a>
                </div>
            </div>
        </div>
    </section>
  	);
  }
}
export default Process;
