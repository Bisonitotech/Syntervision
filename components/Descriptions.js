import React from 'react';
import Link from 'next/link';

class Descriptions extends React.Component {
  render() {
  	return (
          <section className="section section-lg bg-web-desc">
            <div className="bg-overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="text-white">Why Oasis?</h2>
                        <p className="padding-t-15 home-desc">With unprecedented visibility, dynamic solutions, and advanced analytics, you are able to truly understand your enterprise ecosystem. Gaining greater efficiency in identifying and implementing your initiatives. Giving you the ability to reach your digital transformation goals.</p>
                        {/* <Link to="JavaScript:Void(0);" className="btn btn-bg-white margin-t-30 waves-effect waves-light mb-5">View Plan & Pricing</Link> */}
                    </div>
                </div>
            </div>
            <div className="bg-pattern-effect">
                <img src="/static/images/bg-pattern.png" alt="" />
            </div>
        </section>
  	);
  }
}
export default Descriptions;
