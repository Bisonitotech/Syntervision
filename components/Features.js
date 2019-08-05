import React from 'react';
import Link from 'next/link';

class Features extends React.Component {
  render() {
  	return (
        <section className="section bg-light">
        <div className="container">
            <div className="row vertical-content">
                <div className="col-lg-5">
                    <div className="features-box">
                        <h3>Platform Features</h3>
                        <p className="text-muted web-desc">Discover all of your enterprise network and device data - simply and quickly. Then view that data in a logical and digestible UI. This is the first step to having massive visibility into all systems and is critical to decision making, security, and capacity management.</p>
                        <ul className="text-muted list-unstyled margin-t-30 features-item-list">
                            <li className="">Fully Scalable</li>
                            <li className="">Multi vendor monitoring</li>
                            <li className="">Advanced Alerting</li>
                            <li className="">Performance Analytic Dashboards</li>
                        </ul>
                        <a href="/platform" className="btn btn-custom margin-t-30 waves-effect waves-light">Learn More <i className="mdi mdi-arrow-right"></i></a>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="features-img features-right text-right">
                        <img src="/static/images/platform-features.gif" alt="Oasis Features" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  	);
  }
}
export default Features;