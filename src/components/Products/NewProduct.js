import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { newProduct } from '../../actions/productActions';
import ProductForm from './ProductForm';

class NewProduct extends React.Component{
  createProduct() {
    this.props.onCreateProduct(
        this.name.value,
        this.price.value
        );
        this.props.onHide();
  }
  
  render() {    
    return (
      <Modal show={this.props.show} onHide={this.props.onHide} bsSize="large" aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">New product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
          <ProductForm
            nameRef={(el) => this.name=el}
            priceRef={(el) => this.price=el}/>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.createProduct.bind(this)} bsStyle="primary">Save</Button>
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
        onCreateProduct: (name, price) => {
          dispatch(newProduct(name, price));
        }
  })
)(NewProduct);