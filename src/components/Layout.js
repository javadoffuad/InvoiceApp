import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch
} from 'react-router-dom';

import Header from './Header';
import Invoices from './Invoices/List';
import Customers from './Customers/List';
import Products from './Products/List';
import NoMatch from './Error';

class Layout extends React.Component {
	render() {
		console.log(this.props.invoices);
		return(
			<Router>
				<div>
					<Header/>
					<Switch>
						<Route exact path="/" component={Invoices} />
						<Route path="/products" component={Products} />
						<Route path="/customers" component={Customers} />
						<Route component={NoMatch}/>
					</Switch>
				</div>
			</Router>
		)
	}
}

export default connect(
	state => ({
		invoices: state.invoiceReducer
	})
)(Layout);