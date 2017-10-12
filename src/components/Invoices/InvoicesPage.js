import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {
    Grid, Row, Col, Button, Table
} from 'react-bootstrap';

class InvoicesPage extends React.Component {
    componentDidMount() {
		document.title = "InvoiceApp | Invoices";
	}
    render() {
        console.log(this.props.invoices);
        return(
            <Grid>
                <Row>
                    <Col md={12}>
                        <h1>Invoices list <Button>Create</Button></h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Customer</th>
                                    <th>Discount</th>
                                    <th>Total</th>
                                    <th colSpan={2}>Created</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.invoices.map((item, index) =>
                                        <tr key={index + 1}>
                                            <td>{index + 1}</td>
                                            <td>{item.customer_id}</td>
                                            <td>{item.discount}</td>
                                            <td>{item.total}</td>
                                            <td>{item.createdAt}</td>
                                            <td>edit</td>
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
};

export default connect(
	state => ({
		invoices: state.invoiceReducer
	})
)(InvoicesPage);