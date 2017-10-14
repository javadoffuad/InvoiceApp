import React from 'react';
import { connect } from 'react-redux';
import {
    Grid, Row, Col, Button, Table
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

class InvoicesPage extends React.Component {
    componentDidMount() {
		document.title = "InvoiceApp | Invoices";
	}
    render() {
        return(
            <Grid>
                <Row>
                    <Col md={12}>
                        <h1>Invoices list <LinkContainer to="/invoices/new"><Button>Create</Button></LinkContainer></h1>
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
                                            <td><Link to={`/invoices/${item.customer_id}/edit`}>edit</Link></td>
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