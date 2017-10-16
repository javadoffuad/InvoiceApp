import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import ProductsListRow from './ProductListRow';
import DeleteConfirm from './DeleteConfirm';
import EditProduct from './EditProduct';
import { deleteProduct } from '../../actions/productActions';

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDeleteModal: false,
            showEditModal: false,
            preparedItem: null
        };
    }

    editConfirmation(product, event) {
        event.preventDefault();
        this.setState({
            preparedItem: product,
            showEditModal: true
        });
    }

    onEdit() {
        this.setState({
            preparedItem: null,
            showEditModal: false
        });
    }

    deleteConfirmation(product, event) {
        event.preventDefault();
        this.setState({
            preparedItem: product,
            showDeleteModal: true
        });
    }

    onDelete() {
        this.props.onDeleteProduct(this.state.preparedItem);
        this.setState({
            preparedItem: null,
            showDeleteModal: false
        });
    }

    render() {
        const products = this.props.products;

        const deleteModalClose = () => this.setState({
            showDeleteModal: false,
            preparedItem: null
        });
        const editModalClose = () => this.setState({
            showEditModal: false,
            preparedItem: null
        });

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
                            return <ProductsListRow
                                    editAction = {this.editConfirmation.bind(this, product)}
                                    deleteAction = {this.deleteConfirmation.bind(this, product)}
                                    key={product.index} product={product} />
                        })
                    }
                </tbody>
                <DeleteConfirm
                    primaryAction={this.onDelete.bind(this)}
                    show={this.state.showDeleteModal}
                    onHide={deleteModalClose}/>
                
                <EditProduct 
                    product={this.state.preparedItem}
                    callback={this.onEdit.bind(this)}
                    show={this.state.showEditModal}
                    onHide={editModalClose}/>
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