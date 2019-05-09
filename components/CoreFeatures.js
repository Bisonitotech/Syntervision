import React from 'react';

class CoreFeatures extends React.Component {
  render() {
  	return (
        <section className="section pt-5" id="services">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h1 className="section-title text-center">Oasis's Core Features</h1>
                        <div className="section-title-border margin-t-20"></div>
                        <p className="section-subtitle text-muted text-center padding-t-30 font-secondary">Discover all of your enterprise network and device data - simply and quickly. Then view that data in a logical and digestible UI. This is the first step to having massive visibility into all systems and is critical to decision making, security, and capacity management.</p>
                    </div>
                </div>
                <div className="row margin-t-30">
                    <div className="col-lg-4 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <i className="pe-7s-refresh-2 text-custom"></i>
                            <h4 className="padding-t-15">Automation</h4>
                            <p className="padding-t-15 text-muted">Delivering exceptional monitoring and automation services for your enterprise through cognitive computing. Leverage out-of-the-box solutions or make your own. Seamlessly integrate with other technology and departments for widespread and proactive business impact.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <i className="pe-7s-display2 text-custom"></i>
                            <h4 className="padding-t-15">Aggregation</h4>
                            <p className="padding-t-15 text-muted">Discover all of your enterprise network and device data - simply and quickly. Then view that data in a logical and digestible UI. This is the first step to having massive visibility into all systems and is critical to decision making, security, and capacity management.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <i className="pe-7s-network text-custom"></i>
                            <h4 className="padding-t-15">Control</h4>
                            <p className="padding-t-15 text-muted">With unprecedented visibility, dynamic solutions, and advanced analytics, you are able to truly understand your enterprise ecosystem. Gaining greater efficiency in identifying and implementing your initiatives. Giving you the ability to reach your digital transformation goals.</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
  	);
  }
}
export default CoreFeatures;