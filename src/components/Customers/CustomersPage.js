import React from 'react';
import { connect } from 'react-redux';
import {
    Grid, Row, Col, Button, Table
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import CustomerList from './CustomerList';

class CustomersPage extends React.Component {
    componentDidMount() {
		document.title = "InvoiceApp | Customers";
	}
    render() {
        const customers = this.props.customers;

        return(
            <Grid>
                <Row>
                    <Col md={12}>
                        <h1>Customer list <Button>Create</Button></h1>
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