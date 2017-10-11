import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';

import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap';

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
                                    <th colSpan={2}>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.invoices.map((item, index) =>
                                        <tr key={index}>
                                            <td>{index}</td>
                                            <td>{item.name}</td>
                                            <td>{item.discount}</td>
                                            <td>{item.total}</td>
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