import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import ProductsListRow from './ProductListRow';
import DeleteConfirm from './DeleteConfirm';
import { deleteProduct } from '../../actions/productActions';

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            preparedItem: null
        };
    }

    open() {
        this.setState({
            showModal: true
        });
    }

    close() {
        this.setState({
            showModal: false,
            preparedItem: null
        });
    }

    confirmation(product, event) {
        event.preventDefault();
        this.setState({
            preparedItem: product
        });
        this.open();
    }

    onDelete() {
        this.props.onDeleteProduct(this.state.preparedItem);
        this.setState({
            preparedItem: null
        });
        this.close();
    }

    render() {
        const products = this.props.products;

        return (
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
                        products.map((product, i) => {
                            product.index = ++i;
                            return <ProductsListRow deleteAction={this.confirmation.bind(this, product)} key={product.index} product={product} />
                            //return <ProductsListRow
                            //      actions={
                            //          edit:   this.edit.bind(this, product.id),
                            //          delete: this.confirmation.bind(this, product.id),
                            //      }
                            //      key={product.index} product={product} />
                        })
                    }
                </tbody>
                <DeleteConfirm primaryAction={this.onDelete.bind(this)} show={this.state.showModal} onHide={this.close.bind(this)}/>
            </Table>
        );
    }
}

export default connect(
	state => ({
		products: state.productReducer
	}),
  dispatch => ({
        onDeleteProduct: (product) => {
          dispatch(deleteProduct(product));
        }
  })
)(ProductList);