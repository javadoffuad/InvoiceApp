import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import InvoiceListRow from './InvoiceListRow';
import DeleteConfirm from '../common/DeleteConfirm';
import { deleteInvoice } from '../../actions/invoiceActions';

class InvoiceList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            showDeleteModal: false,
            preparedItem: null
        };
    }

    deleteConfirmation(invoice, event) {
        event.preventDefault();
        this.setState({
            preparedItem: invoice,
            showDeleteModal: true
        });
    }

    onDelete() {
        this.props.onDeleteInvoice(this.state.preparedItem);
        this.setState({
            preparedItem: null,
            showDeleteModal: false
        });
    }

    render() {
        const deleteModalClose = () => this.setState({
            showDeleteModal: false,
            preparedItem: null
        });

        return (
            <Table responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Customer</th>
                        <th>Discount</th>
                        <th>Total</th>
                        <th colSpan={2}>Created</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.invoices.map((invoice, i) => {
                            const index = ++i;
                            return <InvoiceListRow
                                deleteAction = {this.deleteConfirmation.bind(this, invoice)}
                                key={index}
                                index={index}
                                invoice={invoice}/>
                        })
                    }
                </tbody>
                <DeleteConfirm
                    title="Delete invoice"
                    primaryAction={this.onDelete.bind(this)}
                    show={this.state.showDeleteModal}
                    onHide={deleteModalClose}/>
            </Table>
        );
    }
}

export default connect(
	state => ({
		invoices: state.invoiceReducer
	}),
    dispatch => ({
        onDeleteInvoice: invoice => 
            dispatch(deleteInvoice(invoice))
    })
)(InvoiceList);