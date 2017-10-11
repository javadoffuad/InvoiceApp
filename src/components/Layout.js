import React from 'react';
import { render } from 'react-dom';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch
} from 'react-router-dom';

import Header from './Header';
import InvoicesPage from './Invoices/InvoicesPage';
import InvoiceEdit from './Invoices/InvoiceEdit';
import CustomersPage from './Customers/CustomersPage';
import ProductsPage from './Products/ProductsPage';
import NoMatch from './Error';

export default class Layout extends React.Component {
	render() {
		return(
			<Router>
				<div>
					<Header/>
					<Switch>
						<Route exact path="/" component={InvoicesPage} />
						<Route exact path="/invoices" component={InvoicesPage} />
						<Route exact path="/invoices/:id/edit" component={InvoiceEdit} />
						<Route path="/products" component={ProductsPage} />
						<Route path="/customers" component={CustomersPage} />
						<Route component={NoMatch}/>
					</Switch>
				</div>
			</Router>
		)
	}
}