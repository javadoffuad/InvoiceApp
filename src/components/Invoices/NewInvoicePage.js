import React from 'react';
import { connect } from 'react-redux'
import Select from 'react-select';
import { newInvoice } from '../../actions/invoiceActions';

import { Grid, Row, Col, FormGroup, FormControl, ControlLabel, Button, Table } from 'react-bootstrap';

class NewInvoicePage extends React.Component{      
    constructor(props) {
        super(props);
        this.state = {
            selectedCustomer: '',
            selectedProduct: '',
            productsToOrder: [],
            total: (0).toFixed(2),
            discount: '',
            saveButton: {
                text: 'Save',
                state: false
            }
        }

        this.updateTotal = this.updateTotal.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    componentDidMount() {
        document.title = "InvoiceApp | New Invoice";
    }

    updateSelectedCustomer(customer) {
        this.setState({
            selectedCustomer: customer
        });
    }

    updateSelectedProduct(product) {
        this.setState({
            selectedProduct: product
        });
    }

    addProduct(e) {
        if(!this.state.selectedProduct)
            return false;
            
        this.setState({
            productsToOrder: [...this.state.productsToOrder, this.state.selectedProduct],
            selectedProduct: ''
        }, () => this.updateTotal());
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
            this.updateTotal();
        });
    }

    updateDiscount(e) {
        this.setState({
            discount: e.target.value
        }, () => this.updateTotal());
    }

    updateTotal() {
        var sum = 0;
        this.state.productsToOrder.forEach(function(product){
            sum += product.price * product.qty;
        });

        if(this.state.discount > 0){
            sum -= sum/100 * this.state.discount
        }
        
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
        }, () => this.updateTotal());
    }

    onSave(event) {
        if(!this.state.productsToOrder.length || this.state.selectedCustomer == '')
            return false;

        this.setState({
            saveButton: {
                state: true,
                text: 'Saving...'
            }
        })

        this.props.onSaveInvoice({
            id: this.state.selectedCustomer.value,
            discount: this.state.discount,
            total: this.state.total
        }, response =>
            this.setState({
                productsToOrder: [],
                selectedCustomer: '',
                discount: '',
                total: (0).toFixed(2),
                saveButton: {
                    state: false,
                    text: 'Save'
                }
            })
        )
    }
    
    render() {
        var optionsCustomer = [];
        var optionsProduct = []; 

        this.props.customers.forEach(function(item) {
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
                                value={this.state.discount}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                    <FormGroup controlId="customer">
                        <ControlLabel>Customer</ControlLabel>
                        <Select
                            value={this.state.selectedCustomer}
                            options={optionsCustomer}
                            onChange={this.updateSelectedCustomer.bind(this)}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <FormGroup controlId="product">
                            <ControlLabel>Add product</ControlLabel>
                            <Select
                                value={this.state.selectedProduct}
                                options={optionsProduct}
                                onChange={this.updateSelectedProduct.bind(this)}
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
                        <Button disabled={this.state.saveButton.state} onClick={this.onSave} bsStyle="primary">{this.state.saveButton.text}</Button>
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
    }),
    dispatch => ({
        onSaveInvoice: (invoice, callback) => {
            dispatch(newInvoice(invoice, callback))
        }
        
    })
)(NewInvoicePage);
