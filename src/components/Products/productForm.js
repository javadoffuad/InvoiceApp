import React from 'react';
import {
    FormGroup, ControlLabel, FormControl
} from 'react-bootstrap';

class ProductForm extends React.Component{
    render() {
        const product = this.props.product;

        return (
            <form>
                <FormGroup controlId="name">
                    <ControlLabel>Product name</ControlLabel>
                    {' '}
                    <FormControl inputRef={this.props.nameRef} defaultValue={product && product.name} type="text" placeholder="for example tomates" />
                </FormGroup>
                <FormGroup controlId="price">
                    <ControlLabel>Price {this.props.mylabel}</ControlLabel>
                    {' '}
                    <FormControl inputRef={this.props.priceRef} defaultValue={product && product.price} type="text" placeholder="00.0 USD" />
                </FormGroup>
            </form>
        )
    }
}

export default ProductForm;