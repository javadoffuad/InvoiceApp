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
            productsToOrder: [],
            total: (0).toFixed(2),
            discount: ''
        }

        this.sumTotal = this.sumTotal.bind(this);
    }

    componentDidMount() {
        document.title = "InvoiceApp | New Invoice";
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
            
        this.setState({
            productsToOrder: [...this.state.productsToOrder, this.state.selectedProduct],
            selectedProduct: ''
        }, function(){
            this.sumTotal();
        });
    }

    setQty (product, e){
        product.qty = e.target.value;
        const newState = Object.assign([], this.state.productsToOrder);
        
        const index = this.state.productsToOrder.findIndex(item =>
                product.id == item.id
        );
        newState.splice(index, 1, product);
        
        this.setState({
            products: newState
        }, function(){
            this.sumTotal();
        });
    }

    updateDiscount(e) {
        this.setState({
            discount: e.target.value
        },function(){
            this.sumTotal();
        });
    }

    sumTotal() {
        var sum = 0;
        this.state.productsToOrder.map(function(product){
            sum = sum + product.price * product.qty;
        });
        sum = this.state.discount > 0
            ? sum - sum/100 * this.state.discount
            : sum;
        
        this.setState({
            total: sum.toFixed(2)
        });
    }

    delete(product) {
        const newState = this.state.productsToOrder.filter(item =>
            product.id !== item.id
        );
        
        this.setState({
            productsToOrder: newState
        }, function(){
            this.sumTotal();
        });
    }
    
    render() {
        var optionsCustomer = [];
        var optionsProduct = [];

        this.props.customers.forEach(function(item, i) {
            optionsCustomer.push({
                    value: item.id,
                    label: item.name
                })
        });

        this.props.products.forEach(function(item, i) {
            optionsProduct.push({
                    id: i,
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
                                onChange={this.updateDiscount.bind(this)}
                                placeholder="Enter discount"
                                defaultValue={this.state.discount}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                    <FormGroup controlId="customer">
                        <ControlLabel>Customer</ControlLabel>
                        <Select
                            name="form-field-name"
                            value={this.state.selectedCustomer}
                            options={optionsCustomer}
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
                                value={this.state.selectedProduct}
                                options={optionsProduct}
                                onChange={this.updateStateProduct.bind(this)}
                                />
                        </FormGroup>
                    </Col>
                    <Col>
                        <Button style={{marginTop: "26px"}} onClick={this.addProduct.bind(this)}>Add</Button>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th colSpan="2">Qty</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.productsToOrder.map((product, index) => {
                                        return  <tr key={index}>
                                                    <td>{product.label}</td>
                                                    <td>{product.price}</td>
                                                    <td width="120">
                                                    <FormControl
                                                        type="text"
                                                        onChange={this.setQty.bind(this, product)}
                                                        placeholder="Enter discount"
                                                        defaultValue={product.qty}/>
                                                    </td>
                                                    <td>
                                                        <Button onClick={this.delete.bind(this, product)} bsStyle="danger">Delete</Button>
                                                    </td>
                                                </tr>
                                    })
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <h1>Total: {this.state.total}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Button bsStyle="primary">Save</Button>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default connect(
    state => ({
		//invoices: state.invoiceReducer,
		customers: state.customerReducer,
		products: state.productReducer,
	})
)(NewInvoicePage);