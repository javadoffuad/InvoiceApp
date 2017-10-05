import React from 'react';
import { render } from 'react-dom';
import Header from '../components/Header';
import Invoices from '../components/Invoices/List';

class Layout extends React.Component {
	render() {
		return(
			<div>
				<Header/>
				<Invoices/>
			</div>
		)
	}
}

module.exports = Layout;