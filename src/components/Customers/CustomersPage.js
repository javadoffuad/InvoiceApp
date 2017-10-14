import React from 'react';
import { connect } from 'react-redux';
import {
    Grid, Row, Col, Button, Table
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class CustomersPage extends React.Component {
    componentDidMount() {
		document.title = "InvoiceApp | Customers";
	}
    render() {
        return(
            <Grid>
                <Row>
                    <Col md={12}>
                        <h1>Customer list <Button>Create</Button></h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th colSpan={2}>Phone</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.customers.map((item, index) =>
                                        <tr key={index + 1}>
                                            <td>{index + 1}</td>
                                            <td>{item.name}</td>
                                            <td>{item.address}</td>
                                            <td>{item.phone}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </Table>
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