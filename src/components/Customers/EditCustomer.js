import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { updateCustomer } from '../../actions/customerActions';
import CustomerForm from './CustomerForm';

class EditCustomer extends React.Component{
    editCustomer() {
        this.props.customer.name = this.name.value
        this.props.customer.address = this.address.value;
        this.props.customer.phone = this.phone.value;

        this.props.onUpdateCustomer(
            this.props.customer
            );
        this.props.callback();
        //this.props.onHide();
    }

    render() {
        return (
        <Modal show={this.props.show} onHide={this.props.onHide} bsSize="large" aria-labelledby="contained-modal-title-lg">
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">Edit customer</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <CustomerForm
                customer={this.props.customer}
                nameRef={(el) => this.name=el}
                addressRef={(el) => this.address=el}
                phoneRef={(el) => this.phone=el}/>

            </Modal.Body>
            <Modal.Footer>
            <Button onClick={this.editCustomer.bind(this)} bsStyle="primary">Save</Button>
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
        onUpdateCustomer: customer => 
            dispatch(updateCustomer(customer))
  })
)(EditCustomer);