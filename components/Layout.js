import React from 'react';
import { render } from 'react-dom';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch
} from 'react-router-dom';

import Header from '../components/Header';
import Invoices from '../components/Invoices/List';
import Customers from '../components/Customers/List';
import Products from '../components/Products/List';
import Error from '../components/Error';

class Layout extends React.Component {
	render() {
		return(
			<Router>
				<div>
					
					<Header/>

					<Switch>
						<Route exact path="/" component={Invoices} />
						<Route path="/customers" component={Customers} />
						<Route path="/products" component={Products} />
						<Route path="*" component={Error} />
					</Switch>
				</div>
			</Router>
		)
	}
}

module.exports = Layout;