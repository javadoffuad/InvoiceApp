import React from 'react';
import { connect } from 'react-redux';

import {
    Grid,
    Row,
    Col,
    Button,
    Table
} from 'react-bootstrap';

class ProductsPage extends React.Component {
    componentDidMount() {
		document.title = "InvoiceApp | Products";
	}
    render() {
        console.log(this.props.products);
        return(
            <Grid>
                <Row>
                    <Col md={12}>
                        <h1>Product list <Button>Create</Button></h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.products.map((item, index) =>
                                        <tr key={index + 1}>
                                            <td>{index + 1}</td>
                                            <td>{item.name}</td>
                                            <td>{item.price}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </Table>
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