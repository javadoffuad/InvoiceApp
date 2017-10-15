import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function productReducer(
    state = initialState.products,
    action
    ) {
    if(action.type === types.LOAD_PRODUCTS_SUCCESS){
        return action.products;
    }
    if(action.type === types.CREATE_PRODUCT_SUCCESS){
        return [
            ...state,
            Object.assign({}, action.product)
        ]
    }
    if(action.type === types.DELETE_PRODUCT_SUCCESS){
        return state.filter(function(product){
          return product.id !== action.product.id
        });
    }
    return state;
}