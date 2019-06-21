import React from 'react';

class OasisArchitecture extends React.Component {
  render() {
  	return (
        <section className="section pt-5" id="services">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h1 className="section-title text-center">Platform Architecture</h1>
                        <div className="section-title-border margin-t-20">

                        </div>
                        <p className="section-subtitle text-muted text-center padding-t-30 font-secondary">The Oasis Platform was designed from the ground up with three key concepts in mind: aggregation, automation. and control. Along with the built-in discovery and monitoring capabilities, this enterprise-ready solution aggregates data from any monitoring service or tool for the management of applications and infrastructure. Providing views of the managed environment in a single interface via alerting, dashboards, and charts, Oasis enables instant identification and analysis of the impact on services in real-time; as well as providing historical data for reporting, trending, and capacity planning.
                        <br/><br/>
                        See our full <a href="/Products?index=0">product suite</a> for more information.</p>
                        <img src="/static/images/oasis-platform-arch.png" alt="" className="img-fluid" />
                    </div>


                </div>


            </div>
        </section>
  	);
  }
}
export default OasisArchitecture;
