import React from 'react';
import Link from 'next/link';

class Blog extends React.Component {
  render() {
  	return (
            <section className="section bg-light pt-5" id="blog">
              <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h1 className="section-title text-center">Featured Resources</h1>
                        <div className="section-title-border margin-t-20"></div>
                    </div>
                </div>

                <div className="row margin-t-30">
                    <div className="col-lg-4">
                        <div className="blog-box margin-t-30 hover-effect">
                            <img src="/static/images/blog/img-1.jpg" className="img-fluid" alt="" />
                            <div>
                                <h5 className="mt-4 text-muted">Automation</h5>
                                <h4 className="mt-3">
                                  <Link href="JavaScript:Void(0);"><a className="blog-title"> The Cost of Automation in 2019</a> </Link>
                                </h4>

                                <p className="text-muted">She packed her seven versalia, put her initial into the belt and made herself on the way..</p>
                                <div className="mt-3">
                                    <Link href="JavaScript:Void(0);"><a className="read-btn">Download E-Book <i className="mdi mdi-arrow-right"></i></a></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="blog-box margin-t-30 hover-effect">
                            <img src="/static/images/blog/img-2.jpg" className="img-fluid" alt="" />
                            <div>
                                <h5 className="mt-4 text-muted">Security</h5>
                                <h4 className="mt-3"><Link href="JavaScript:Void(0);"><a className="blog-title">Why an Agile Security Solution is Crucial for Enterprises</a></Link></h4>
                                <p className="text-muted">Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                                <div className="mt-3">
                                    <Link href="JavaScript:Void(0);"><a className="read-btn">Read More <i className="mdi mdi-arrow-right"></i></a></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="blog-box margin-t-30 hover-effect">
                            <img src="/static/images/blog/img-3.jpg" className="img-fluid" alt="" />
                            <div>
                                <h5 className="mt-4 text-muted">Integration</h5>
                                <h4 className="mt-3"><Link href="JavaScript:Void(0);"><a className="blog-title">The 80/20 Rule to Integration</a></Link></h4>
                                <p className="text-muted">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                <div className="mt-3">
                                    <Link href="JavaScript:Void(0);"><a className="read-btn"> Download Now <i className="mdi mdi-arrow-right"></i></a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  	);
  }
}
export default Blog;
