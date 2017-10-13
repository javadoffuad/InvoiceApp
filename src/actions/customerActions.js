import * as types from './actionTypes';
import axios from 'axios';

export function loadCustomersSuccess(customers){
    return {
        type: types.LOAD_CUSTOMERS_SUCCESS,
        customers
    };
}

export function loadCustomers() {
    return function(dispatch) {
        return axios.get('/api/customers')
        .then(function (response) {
            dispatch(loadCustomersSuccess(response.data));
        })
        .catch(function (error) {
            return error;
        });
    }
}