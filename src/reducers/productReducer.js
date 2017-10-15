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
    return state;
}