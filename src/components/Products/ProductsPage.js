import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    Grid,
    Row,
    Col,
    Button,
    Table
} from 'react-bootstrap';
import NewProduct from './NewProduct';

class ProductsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showModal: false};
    }
    componentDidMount() {
		document.title = "InvoiceApp | Products";
	}
    render() {
        let lgClose = () => this.setState({ lgShow: false });

        return(
            <Grid>
                <Row>
                    <Col md={12}>
                        <NewProduct show={this.state.lgShow} onHide={lgClose} />
                        <h1>
                            Product list
                            <Button onClick={()=>this.setState({ lgShow: true })}>
                            Create
                            </Button>
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th colSpan={2}>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.products.map((item, index) =>
                                        <tr key={index + 1}>
                                            <td>{index + 1}</td>
                                            <td>{item.name}</td>
                                            <td>{item.price}</td>
                                            <td><Link to={`/products/${index}/edit`}>edit</Link></td>
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