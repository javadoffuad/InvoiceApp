import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import CustomerListRow from './CustomerListRow';
import EditCustomer from './EditCustomer';
import DeleteConfirm from '../common/DeleteConfirm';
import { deleteCustomer } from '../../actions/customerActions';

class CustomerList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDeleteModal: false,
            showEditModal: false,
            preparedItem: null
        };
    }

    editConfirmation(customer, event) {
        event.preventDefault();
        this.setState({
            preparedItem: customer,
            showEditModal: true
        });
    }

    onEdit() {
        this.setState({
            preparedItem: null,
            showEditModal: false
        });
    }

    deleteConfirmation(customer, event) {
        event.preventDefault();
        this.setState({
            preparedItem: customer,
            showDeleteModal: true
        });
    }

    onDelete() {
        this.props.onDeleteCustomer(this.state.preparedItem);
        this.setState({
            preparedItem: null,
            showDeleteModal: false
        });
    }

    render() {
        const customers = this.props.customers;

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
                        <th>Address</th>
                        <th colSpan={2}>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        customers.map((customer, i) => {
                            const index = ++i;
                            return <CustomerListRow
                                    editAction = {this.editConfirmation.bind(this, customer)}
                                    deleteAction = {this.deleteConfirmation.bind(this, customer)}
                                    key={index} index={index} customer={customer} />
                        })
                    }
                </tbody>
                <DeleteConfirm
                    title="Delete customer"
                    primaryAction={this.onDelete.bind(this)}
                    show={this.state.showDeleteModal}
                    onHide={deleteModalClose}/>

                <EditCustomer
                    customer={this.state.preparedItem}
                    callback={this.onEdit.bind(this)}
                    show={this.state.showEditModal}
                    onHide={editModalClose}/>
            </Table>
          );
    }
}

export default connect(
	state => ({
		customers: state.customerReducer
	}),
    dispatch => ({
            onDeleteCustomer: customer =>
                dispatch(deleteCustomer(customer))
    })
)(CustomerList);