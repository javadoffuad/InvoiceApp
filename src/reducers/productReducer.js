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
        return state.filter(product => 
            product.id !== action.product.id
        );
    }
    if(action.type === types.UPDATE_PRODUCT_SUCCESS){
        const newState = Object.assign([], state);

        const indexToUpdate = state.findIndex(product =>
             product.id == action.product.id
        );
        
        newState.splice(indexToUpdate, 1, action.product);
        
        return newState;
    }
    return state;
}