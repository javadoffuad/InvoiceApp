import React from 'react';
import {
    FormGroup, ControlLabel, HelpBlock, FormControl
} from 'react-bootstrap';

class ProductForm extends React.Component{
    render() {
        return (
            <form>
                <FormGroup controlId="name">
                    <ControlLabel>Product name</ControlLabel>
                    {' '}
                    <FormControl inputRef={this.props.nameRef} type="text" placeholder="for example tomates" />
                </FormGroup>
                <FormGroup controlId="price">
                    <ControlLabel>Price {this.props.mylabel}</ControlLabel>
                    {' '}
                    <FormControl inputRef={this.props.priceRef} type="text" placeholder="00.0 USD" />
                </FormGroup>
            </form>
        )
    }
}

export default ProductForm;