import React from 'react';
import { connect } from 'react-redux';
import {
    Grid, Row, Col, Button
} from 'react-bootstrap';
import CustomerList from './CustomerList';
import CreateCustomer from './CreateCustomer';

class CustomersPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showModal: false};
    }

    componentDidMount() {
		document.title = "InvoiceApp | Customers";
	}

    open() {
        this.setState({ showModal: true });
    }

    close() {
        this.setState({ showModal: false });
    }
    
    render() {
        const customers = this.props.customers;

        return(
            <Grid>
                <Row>
                    <Col md={12}>
                        <CreateCustomer show={this.state.showModal} onHide={this.close.bind(this)} />
                        <h1>
                            Customer list
                            <Button onClick={this.open.bind(this)}>Create</Button>
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <CustomerList customers={customers}/>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default connect(
	state => ({
		customers: state.customerReducer
	})
)(CustomersPage);