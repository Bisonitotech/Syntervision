import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Platform from './Platform';
import Automation from './Automation';
import Solutions from './Solutions';
import Products from './Products';
import PlatformOverview from './PlatformOverview';
import WhoWeAre from './WhoWeAre';
import DemoRequest from './DemoRequest';
import PrivacyPolicy from './PrivacyPolicy';

class Root extends React.Component {
  render() {
  	return(
  		<BrowserRouter basename={'/'} >
		  	<Switch>
  			  <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home}/>
  			  <Route path={`${process.env.PUBLIC_URL}/platform`} component={Platform}/>
  			  <Route path={`${process.env.PUBLIC_URL}/products`} component={Products}/>
  			  <Route path={`${process.env.PUBLIC_URL}/platformOverview`} component={PlatformOverview}/>
  			  <Route path={`${process.env.PUBLIC_URL}/solutions`} component={Solutions}/>
  			  <Route path={`${process.env.PUBLIC_URL}/whoweare`} component={WhoWeAre}/>
  			  <Route path={`${process.env.PUBLIC_URL}/automation`} component={Automation}/>
  			  <Route path={`${process.env.PUBLIC_URL}/demorequest`} component={DemoRequest}/>
  			  <Route path={`${process.env.PUBLIC_URL}/privacypolicy`} component={PrivacyPolicy}/>
  			</Switch>
		  </BrowserRouter>
  	);
  }
 }

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
