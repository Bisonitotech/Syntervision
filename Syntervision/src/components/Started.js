import React from 'react';
import { Link } from 'react-router-dom';

class Started extends React.Component {
  render() {
  	return (
        <section className="section section-lg bg-get-start">
            <div className="bg-overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 text-center">
                        <h1 className="get-started-title text-white">IoT Automation</h1>
                        <div className="section-title-border margin-t-20 bg-white"></div>
                        <p className="padding-t-15 home-desc">Delivering exceptional monitoring and automation services for your enterprise through cognitive computing. Leverage out-of-the-box solutions, to seamlessly integrate with other technology and departments for widespread and proactive business impact.</p>
                        <Link to="JavaScript:Void(0);" className="btn btn-bg-white waves-effect margin-t-20 mb-4">Get Started <i className="mdi mdi-arrow-right"></i> </Link>
                    </div>
                </div>
            </div>
            <div className="bg-pattern-effect">
                <img src="images/bg-pattern-light.png" alt="" />
            </div>
        </section>
  	);
  }
}
export default Started;