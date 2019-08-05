import React from 'react';
import { CookieBanner } from '@palmabit/react-cookie-law';
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
            <div className="cookie-banner">
              <CookieBanner
                 message="This site and third-party tools used by this site, make use of cookies to improve your website experience. To learn more or opt out, see the cookie policy. By accepting, you consent to the use of cookies."
                 onAccept = {() => {}}
                 onAcceptPreferences = {() => {}}
                 onAcceptStatistics = {() => {}}
                 onAcceptMarketing = {() => {}}
                 styles = {{
                  dialog: {
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    width: '100vw',
                    height: '100vh',
                    position: 'fixed',
                    top: '0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    left: '0',
                    zIndex: '1000000',
                  },
                  container: {
                    position: 'absolute',
                    width: '60%',
                    minWidth: '300px',
                    margin: '0 auto',
                    background: 'white',
                    padding: '20px',
                  },
                  policy: {
                    cursor: 'pointer',
                    textDecoration: 'underline!important',
                    fontSize: '10px'
                  }
                }}
               />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 margin-t-20">
                        <h4>Syntervision</h4>
                        <div className="text-muted margin-t-20">
                            <ul className="list-unstyled footer-list">
                                <li><a href="/DemoRequest">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 margin-t-20">
                        <h4>Solutions</h4>
                        <div className="text-muted margin-t-20">
                            <ul className="list-unstyled footer-list">
                                <li><a href="/Platform">Oasis Platform</a></li>
                                <li><a href="/Security">Security</a></li>
                                <li><a href="/Industries">By Industry</a></li>
                                <li><a href="/Integrations">Integrations</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 margin-t-20">
                        <h4>Support</h4>
                        <div className="text-muted margin-t-20">
                            <ul className="list-unstyled footer-list">
                                <li><a href="/PrivacyPolicy">Privacy Policy</a></li>
                                <li><a href="/Terms">Terms & Conditions</a></li>
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
