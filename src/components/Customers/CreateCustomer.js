import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { newCustomer } from '../../actions/customerActions';
import CustomerForm from './CustomerForm';

class CreateCustomer extends React.Component{
  createCustomer() {
    this.props.onCreateCustomer(
        this.name.value,
        this.address.value,
        this.phone.value
        );
        this.props.onHide();
  }
  
  render() {    
    return (
      <Modal show={this.props.show} onHide={this.props.onHide} bsSize="large" aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">New customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
          <CustomerForm
            nameRef={(el) => this.name=el}
            addressRef={(el) => this.address=el}
            phoneRef={(el) => this.phone=el}/>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.createCustomer.bind(this)} bsStyle="primary">Save</Button>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default connect(
	state => ({
		customers: state.customerReducer
	}),
  dispatch => ({
        onCreateCustomer: (name, address, phone) => {
          dispatch(newCustomer(name, address, phone));
        }
  })
)(CreateCustomer);