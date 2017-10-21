import React from 'react';
import { connect } from 'react-redux'
import Select from 'react-select';

import { Grid, Row, Col, FormGroup, FormControl, ControlLabel, Button, Table } from 'react-bootstrap';

class InvoiceEdit extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            customer: '',
            product: '',
            productsToOrder: []
        }
    }

    componentDidMount() {
		document.title = "InvoiceApp | Edit invoice";
	}

    updateState(element) {
        this.setState({
            customer: element
        });
    }

    updateStateProduct(element) {
        this.setState({
            product: element
        });
    }
    
    render() {
        console.log("customers", this.props.customers)
        console.log("products", this.props.products)

        //console.log(this.props.match.params.id)

        var options = [];
        var optionsProduct = [];

        this.props.customers.forEach(function(item, i) {
            options.push({
                    value: item.id,
                    label: item.name
                })
        });

        this.props.products.forEach(function(item, i) {
            optionsProduct.push({
                value: item.id,
                label: item.name,
                price: item.price
            })
        });

        return(
            <Grid>
                <Row>
                    <Col md={12}>
                        <h1>Edit invoice</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={2}>
                        <FormGroup controlId="discount">
                            <ControlLabel>Discount (%)</ControlLabel>
                            <FormControl
                                type="text"
                                placeholder="Enter text"/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <FormGroup controlId="customer">
                            <ControlLabel>Customer</ControlLabel>
                            <Select
                                name="form-field-name"
                                value={this.state.customer}
                                options={options}
                                onChange={this.updateState.bind(this)}
                                />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <FormGroup controlId="product">
                            <ControlLabel>Add product</ControlLabel>
                            <Select
                            name="form-field-name2"
                            value={this.state.product}
                            options={optionsProduct}
                            onChange={this.updateStateProduct.bind(this)}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <Button>Add</Button>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>John Doe</td>
                                    <td>100</td>
                                    <td width="180">
                                    <FormControl
                                        defaultValue="1"
                                        type="text"
                                        placeholder="Enter text"/>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <h1>Total: 1000</h1>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default connect(
    state => ({
		invoices: state.invoiceReducer,
		customers: state.customerReducer,
		products: state.productReducer,
	})
)(InvoiceEdit);