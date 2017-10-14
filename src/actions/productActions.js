import * as types from './actionTypes';
import axios from 'axios';

export function loadProductsSuccess(products){
    return {
        type: types.LOAD_PRODUCTS_SUCCESS,
        products
    };
}

export function createProductSuccess(product) {
    return {
      type: types.CREATE_PRODUCT_SUCCESS,
      product
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

export function createProduct(product) {
    return function (dispatch) {
        return axios.post('/api/products', {
            name: 'tomato',
            price: '1000'
        })
        .then(function (response) {
            dispatch(createProductSuccess(response.data));
        })
        .catch(function (error) {
            return error;
        });
    };
}