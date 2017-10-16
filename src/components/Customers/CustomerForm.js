import React from 'react';
import {
    FormGroup, ControlLabel, FormControl
} from 'react-bootstrap';

class CustomerForm extends React.Component{
    render() {
        const customer = this.props.customer;

        return (
            <form>
                <FormGroup controlId="name">
                    <ControlLabel>Customer name</ControlLabel>
                    {' '}
                    <FormControl inputRef={this.props.nameRef} defaultValue={customer && customer.name} type="text" placeholder="John Doe" />
                </FormGroup>
                <FormGroup controlId="address">
                    <ControlLabel>Address</ControlLabel>
                    {' '}
                    <FormControl inputRef={this.props.addressRef} defaultValue={customer && customer.address} type="text" placeholder="Location" />
                </FormGroup>
                <FormGroup controlId="phone">
                    <ControlLabel>Phone</ControlLabel>
                    {' '}
                    <FormControl inputRef={this.props.phoneRef} defaultValue={customer && customer.phone} type="text" placeholder="xxx-xx-xx" />
                </FormGroup>
            </form>
        )
    }
}

export default CustomerForm;