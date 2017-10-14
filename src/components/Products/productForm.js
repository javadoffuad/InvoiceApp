import React from 'react';
import {
    FormGroup, ControlLabel, HelpBlock, FormControl
} from 'react-bootstrap';

export default () => (
    <form>
        <FormGroup controlId="name">
            <ControlLabel>Product name</ControlLabel>
            {' '}
            <FormControl ref={(input) => this.nameInput = input} type="text" placeholder="for example tomates" />
        </FormGroup>
        <FormGroup controlId="price">
            <ControlLabel>Price</ControlLabel>
            {' '}
            <FormControl type="text" placeholder="00.0 USD" />
        </FormGroup>
    </form>
);