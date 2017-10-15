import * as types from './actionTypes';
import axios from 'axios';

export function loadProductsSuccess(products){
    return {
        type: types.LOAD_PRODUCTS_SUCCESS,
        products
    };
}

export function newProductSuccess(product) {
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

export function newProduct(name, price) {
    return function (dispatch) {
        return axios.post('/api/products', {
            name: name,
            price: price
        })
        .then(function (response) {
            dispatch(newProductSuccess(response.data));
        })
        .catch(function (error) {
            return error;
        });
    };
}