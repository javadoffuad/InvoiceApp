import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { updateProduct } from '../../actions/productActions';
import ProductForm from './ProductForm';

class EditProduct extends React.Component{
    editProduct() {
        this.props.product.name = this.name.value
        this.props.product.price = this.price.value;

        this.props.onUpdateProduct(
            this.props.product
            );
        this.props.callback();
    }

    render() {
        return (
        <Modal show={this.props.show} onHide={this.props.onHide} bsSize="large" aria-labelledby="contained-modal-title-lg">
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">Edit product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <ProductForm
                product={this.props.product}
                nameRef={(el) => this.name=el}
                priceRef={(el) => this.price=el}/>

            </Modal.Body>
            <Modal.Footer>
            <Button onClick={this.editProduct.bind(this)} bsStyle="primary">Save</Button>
            <Button onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
        );
    }
}

export default connect(
	state => ({
		products: state.productReducer
	}),
  dispatch => ({
        onUpdateProduct: product => 
            dispatch(updateProduct(product))
  })
)(EditProduct);