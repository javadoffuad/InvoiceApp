import React from 'react';
import { connect } from 'react-redux';
import {
    Grid, Row, Col, Button
} from 'react-bootstrap';
import NewProduct from './NewProduct';
import ProductList from './ProductList';

class ProductsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showModal: false};
    }

    componentDidMount() {
		document.title = "InvoiceApp | Products";
	}

    open() {
        this.setState({ showModal: true });
    }

    close() {
        this.setState({ showModal: false });
    }
    
    render() {
        const products = this.props.products;

        return(
            <Grid>
                <Row>
                    <Col md={12}>
                        <NewProduct show={this.state.showModal} onHide={this.close.bind(this)} />
                        <h1>
                            Product list
                            <Button onClick={this.open.bind(this)}>Create</Button>
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <ProductList products={products}/>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default connect(
	state => ({
		products: state.productReducer
	})
)(ProductsPage);