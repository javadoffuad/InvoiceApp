import React from 'react';
import { connect } from 'react-redux';
import {
    Grid, Row, Col, Button
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import InvoiceList from './InvoiceList';

class InvoicesPage extends React.Component {
    componentDidMount() {
		document.title = "InvoiceApp | Invoices";
	}
    render() {
        const invoices = this.props.invoices;
        
        return(
            <Grid>
                <Row>
                    <Col md={12}>
                        <h1>Invoices list <LinkContainer to="/invoices/new"><Button>Create</Button></LinkContainer></h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <InvoiceList invoices={invoices}/>
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