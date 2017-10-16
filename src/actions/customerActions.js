import * as types from './actionTypes';
import axios from 'axios';

export function loadCustomersSuccess(customers){
    return {
        type: types.LOAD_CUSTOMERS_SUCCESS,
        customers
    };
}

export function newCustomerSuccess(customer) {
    return {
      type: types.CREATE_CUSTOMER_SUCCESS,
      customer
    };
}

export function deleteCustomerSuccess(customer){
    return {
        type: types.DELETE_CUSTOMER_SUCCESS,
        customer
    };
}

export function updateCustomerSuccess(customer) {
    return {
      type: types.UPDATE_CUSTOMER_SUCCESS,
      customer
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

export function newCustomer(name, address, phone) {
    return function (dispatch) {
        return axios.post('/api/customers', {
            name: name,
            address: address,
            phone: phone
        })
        .then(function (response) {
            dispatch(newCustomerSuccess(response.data));
        })
        .catch(function (error) {
            return error;
        });
    };
}

export function deleteCustomer(customer) {
    return function (dispatch) {
        return axios.delete('/api/customers/' + customer.id)
        .then(response =>
            dispatch(deleteCustomerSuccess(customer))
        )
        .catch(function (error) {
            return error;
        });
    };
}

export function updateCustomer(customer) {
    return function (dispatch) {
        return axios.put('/api/customers/' + customer.id, {
            name: customer.name,
            address: customer.address,
            phone: customer.phone
        })
        .then(response => 
            dispatch(updateCustomerSuccess(response.data))
        )
        .catch(function (error) {
            return error;
        });
    };
}