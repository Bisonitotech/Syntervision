import React from 'react';
import Link from 'next/link';

class PlatformFeatures extends React.Component {
  render() {
  	return (
        <section className="section bg-light" id="features">
        <div className="container">
            <div className="row vertical-content">
                <div className="col-lg-5">
                    <div className="features-box">
                    <h1 className="section-title text-left">About Oasis</h1>
                        <p className="text-muted web-desc">Delivering exceptional monitoring and automation services for your enterprise through cognitive computing. We leverage out-of-the-box solutions or create custom-tailored solutions for your enterprise. Oasis seamlessly integrates with other technologies and departments for a widespread and proactive business impact.</p>
                        
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="features-img features-right text-right">
                        <img src="/static/images/oasis-logo.png" alt="oasis platform" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  	);
  }
}
export default PlatformFeatures;