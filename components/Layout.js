import React from 'react';
import { render } from 'react-dom';
import { Button } from 'react-bootstrap';

import Header from '../components/Header';

class Layout extends React.Component {
	render() {
		return <Header/>
	}
}

module.exports = Layout;