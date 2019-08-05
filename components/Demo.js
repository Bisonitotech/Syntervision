import React from 'react';
import Link from 'next/link';

class Demo extends React.Component {
  render() {
  	return (
        <section className="section section-lg bg-get-start">
            <div className="bg-overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 text-center">
                        <h1 className="get-started-title text-white">Request a Demo</h1>
                        <div className="section-title-border margin-t-20 bg-white"></div>
                        <p className="padding-t-15 home-desc">We offer a trial version that includes all advanced features - free, for 30 days. Contact us today to request a license!</p>
                        <a href="/demorequest" className="btn btn-bg-white waves-effect margin-t-20 mb-4">Get Started <i className="mdi mdi-arrow-right"></i> </a>
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
export default Demo;