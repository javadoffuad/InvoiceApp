import * as types from './actionTypes';
import axios from 'axios';

export function loadProductsSuccess(products){
    return {
        type: types.LOAD_PRODUCTS_SUCCESS,
        products
    };
}

export function loadProducts() {
    return function(dispatch) {
        return axios.get('/api/products')
        .then(function (response) {
            dispatch(loadProductsSuccess(response.data));
        })
        .catch(function (error) {
            return error;
        });
    }
}