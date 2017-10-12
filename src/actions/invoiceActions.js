import * as types from './actionTypes';
import axios from 'axios';

export function loadInvoicesSuccess(invoices){
    return {
        type: types.LOAD_INVOICES_SUCCESS,
        invoices: invoices
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