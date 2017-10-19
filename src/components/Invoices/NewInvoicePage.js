import React from 'react';
import { connect } from 'react-redux'
import Select from 'react-select';

import { Grid, Row, Col, FormGroup, FormControl, ControlLabel, Button, Table } from 'react-bootstrap';

class NewInvoicePage extends React.Component{      
    constructor(props) {
        super(props);
        this.state = {
            selectedCustomer: '',
            selectedProduct: '',
            productsToOdred: [],
            total: 0,
            discount: 3
        }

        this.sumTotal = this.sumTotal.bind(this);
    }

    componentDidMount() {
        document.title = "InvoiceApp | New Invoice";
    }

    countTotal() {
        console.log(this.state.productsToOdred);
       // const sum = this.state.total + this.state.selectedProduct.price * this.state.selectedProduct.count;
       // console.log(sum/100*this.state.discount);
    }

    updateState(element) {
        this.setState({
            selectedCustomer: element
        });
    }

    updateStateProduct(element) {
        this.setState({
            selectedProduct: element
        });
    }

    addProduct(e) {
        if(!this.state.selectedProduct)
            return false;

        //const sum = this.state.selectedProduct.price * this.state.selectedProduct.count;

        //const sum = this.state.total + this.state.selectedProduct.price * this.state.selectedProduct.qty;
        //console.log("total", sum/100*1);
            
        this.setState({
            productsToOdred: [...this.state.productsToOdred, this.state.selectedProduct],
            selectedProduct: '',
           // total: 0
        });
        //this.sumTotal(this.state.productsToOdred);
    }

    sumTotal(state) {
        console.log("total", state, this.state.selectedProduct)
        /*var sum = 0;
        state.map(function(product){
            sum = sum + product.price * product.qty;
        });
        this.setState({
            total: sum - sum/100*1
        });
        console.log(sum - sum/100*1)*/
    }
    
    render() {
        
        this.sumTotal(this.state.productsToOdred);

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
                    price: item.price,
                    qty: 1
                })
        });

        return(
            <Grid>
                <Row>
                    <Col md={12}>
                        <h1>New invoice</h1>
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
                    <ControlLabel>Customer</ControlLabel>
                    <Select
                        name="form-field-name"
                        value={this.state.selectedCustomer}
                        options={options}
                        onChange={this.updateState.bind(this)}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <FormGroup controlId="product">
                            <ControlLabel>Add product</ControlLabel>
                            <Select
                                name="form-field-name2"
                                value={this.state.selectedProduct}
                                options={optionsProduct}
                                onChange={this.updateStateProduct.bind(this)}
                                />
                        </FormGroup>
                    </Col>
                    <Col>
                        <Button onClick={this.addProduct.bind(this)}>Add</Button>
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
                                {
                                    this.state.productsToOdred.map((product, index) => {
                                        return  <tr key={index}>
                                                    <td>{product.label}</td>
                                                    <td>{product.price}</td>
                                                    <td>
                                                        <input type="text" defaultValue="1"/>
                                                    </td>
                                                </tr>
                                    })
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <h1>Total: {this.state.total}</h1>
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
)(NewInvoicePage);