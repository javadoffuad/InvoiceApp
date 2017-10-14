import React from 'react';
import {
    Modal, Button, FormGroup, ControlLabel, HelpBlock, FormControl
} from 'react-bootstrap';
import ProductForm from './productForm';
import { connect } from 'react-redux';
//import { createProduct } from '../../actions/productActions';

class NewProduct extends React.Component{
  createProduct(){
    console.log(this.nameInput.value);
    console.log(this.priceInput.value);
    //this.props.createProduct(this.searchInput.value);
  }
  render() {
    return (
      <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">New product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
            <form>
              <FormGroup controlId="name">
                  <ControlLabel>Product name</ControlLabel>
                  {' '}
                  <FormControl inputRef={(input) => this.nameInput = input} type="text" placeholder="for example tomates" />
              </FormGroup>
              <FormGroup controlId="price">
                  <ControlLabel>Price</ControlLabel>
                  {' '}
                  <FormControl inputRef={(input) => this.priceInput = input} type="text" placeholder="00.0 USD" />
              </FormGroup>
          </form>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.createProduct.bind(this)} bsStyle="primary">Save</Button>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default NewProduct;