import React from 'react';
import ReactDOM from 'react-dom';
import HomeFive from './HomeFive';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Platform from './Platform';
import Automation from './Automation';
import Solutions from './Solutions';
import WhoWeAre from './WhoWeAre';
import DemoRequest from './DemoRequest';

class Root extends React.Component {
  render() {
  	return(
  		<BrowserRouter basename={'/'} >
		  	<Switch>
			  <Route exact path={`${process.env.PUBLIC_URL}/`} component={HomeFive}/>
			  <Route path={`${process.env.PUBLIC_URL}/platform`} component={Platform}/>
			  <Route path={`${process.env.PUBLIC_URL}/solutions`} component={Solutions}/>
			  <Route path={`${process.env.PUBLIC_URL}/whoweare`} component={WhoWeAre}/>
			  <Route path={`${process.env.PUBLIC_URL}/automation`} component={Automation}/>
			  <Route path={`${process.env.PUBLIC_URL}/demorequest`} component={DemoRequest}/>
			</Switch>
		</BrowserRouter>
  	);
  }
 }

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
