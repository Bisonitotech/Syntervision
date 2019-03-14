import React from 'react';

class Services extends React.Component {
  render() {
  	return (
        <section className="section pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h1 className="section-title text-center">Our Platform</h1>
                        <div className="section-title-border margin-t-20"></div>
                        <p className="section-subtitle text-muted text-center padding-t-30 font-secondary">Syntervision was founded in 1994 as a consulting company. Our evolution began when we started offering engineering and management solution services to large enterprises. By 2005, we were established as a SaaS company committed to filling in the gaps of existing ITSM tools with a platform that was simple and scalable. At Syntervision, integrity matters: we are in business to offer solutions that unify IT Service Management and bring synergy to your enterprise.</p>
                    </div>
                </div>
                <div className="row margin-t-30">
                    <div className="col-lg-4 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <i className="pe-7s-refresh-2 text-custom"></i>
                            <h4 className="padding-t-15">Automation</h4>
                            <p className="padding-t-15 text-muted">Oasis Automation is a natural step in the lifecycle of a maturing Enterprise Service Management or IT Operations strategy in any business.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <i className="pe-7s-display2 text-custom"></i>
                            <h4 className="padding-t-15">Event Manager</h4>
                            <p className="padding-t-15 text-muted">The Oasis Event Manager (OEM) delivers a mature and modernized approach to Operations Management by reducing the noise in your system.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <i className="pe-7s-network text-custom"></i>
                            <h4 className="padding-t-15">Trap Adaptor</h4>
                            <p className="padding-t-15 text-muted">The Oasis Trap Adapter is a fully configurable Trap Listener and Forwarder with native integration to the Oasis Platform.</p>
                        </div>
                    </div>
                </div>
                <div className="row margin-t-30">
                    <div className="col-lg-4 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <i className="pe-7s-graph1 text-custom"></i>
                            <h4 className="padding-t-15">Analytics</h4>
                            <p className="padding-t-15 text-muted">Oasis delivers business impacting information straight out of your raw data. Countless feeds from your network are consumed by the Oasis ingestion engine, then normalized to generate context.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <i className="pe-7s-search text-custom"></i>
                            <h4 className="padding-t-15">Discovery</h4>
                            <p className="padding-t-15 text-muted">Asset Discovery is simple and comprehensive with Oasis. It starts by seeding some basic information such as an IP address of a core device like a backbone switch or router and adding a community string.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <i className="pe-7s-science text-custom"></i>
                            <h4 className="padding-t-15">Integration</h4>
                            <p className="padding-t-15 text-muted">The Oasis Platform was designed to consume data and convert it into useful information. Making it simple and fast to pull data into the platform and synthesize it with any related content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  	);
  }
}
export default Services;