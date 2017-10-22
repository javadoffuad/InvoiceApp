import * as types from './actionTypes';
import axios from 'axios';

export function loadInvoicesSuccess(invoices){
    return {
        type: types.LOAD_INVOICES_SUCCESS,
        invoices
    };
}

export function newInvoiceSuccess(invoice) {
    return {
      type: types.CREATE_INVOICE_SUCCESS,
      invoice
    };
}

export function deleteInvoiceSuccess(invoice){
    return {
        type: types.DELETE_INVOICE_SUCCESS,
        invoice
    };
}

export function loadInvoices() {
    return function(dispatch) {
        return axios.get('/api/invoices')
        .then(function (response) {
            dispatch(loadInvoicesSuccess(response.data));
        })
        .catch(function (error) {
            return error;
        });
    }
}

export function newInvoice(invoice, callback) {
    return function (dispatch) {
        return axios.post('/api/invoices', {
            customer_id: invoice.id,
            discount: invoice.discount,
            total: invoice.total
        })
        .then(function (response) {
            dispatch(newInvoiceSuccess(response.data));
            callback(response);
        })
        .catch(function (error) {
            return error;
        });
    };
}

export function deleteInvoice(invoice) {
    return function (dispatch) {
        return axios.delete('/api/invoices/' + invoice.id)
        .then(response => 
            dispatch(deleteInvoiceSuccess(response.data))
        )
        .catch(function (error) {
            return error;
        });
    };
}