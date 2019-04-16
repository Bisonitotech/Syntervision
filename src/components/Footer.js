import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      email: ''
    };
  }
  sendEmail(){
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(reg.test(this.state.email.toLowerCase()))
      this.setState({success: true})
    else {
      alert('Please input validate email!')
    }
  }
  render() {
  	return (
         <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 margin-t-20">
                        <h4>Syntervision</h4>
                        <div className="text-muted margin-t-20">
                            <ul className="list-unstyled footer-list">
                                <li><a href="/demorequest">Contact</a></li>
                                <li><Link to="JavaScript:Void(0);">Leadership</Link></li>
                                <li><Link to="JavaScript:Void(0);">Careers</Link></li>
                                <li><Link to="JavaScript:Void(0);">Contact us</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 margin-t-20">
                        <h4>Solutions</h4>
                        <div className="text-muted margin-t-20">
                            <ul className="list-unstyled footer-list">
                                <li><Link to="JavaScript:Void(0);">Automation</Link></li>
                                <li><Link to="JavaScript:Void(0);">Event Manager</Link></li>
                                <li><Link to="JavaScript:Void(0);">Trap Adaptor</Link></li>
                                <li><Link to="JavaScript:Void(0);">Analytics</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 margin-t-20">
                        <h4>Support</h4>
                        <div className="text-muted margin-t-20">
                            <ul className="list-unstyled footer-list">
                                <li><Link to="JavaScript:Void(0);">FAQ</Link></li>
                                <li><Link to="/privacypolicy">Privacy Policy</Link></li>
                                <li><Link to="/terms">Terms & Condition</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 margin-t-20">
                        <h4>Subscribe</h4>
                        <div className="text-muted margin-t-20">
                            <p></p>
                        </div>
                        {this.state.success==false && <form className="form subscribe">
                            <input placeholder="Email" value={this.state.email} onChange={(e)=>this.setState({email: e.target.value})} className="form-control" required />
                            <a className="submit" onClick={()=>this.sendEmail()}><i className="pe-7s-paper-plane"></i></a>
                        </form>}
                        {this.state.success==true && <p className="confirmation">Thank you! Check your inbox for a confirmation message from us.</p>}
                    </div>
                </div>
            </div>
        </footer>
  	);
  }
}
export default Footer;
