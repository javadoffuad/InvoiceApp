import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function customerReducer(
    state = initialState.customers,
    action
    ) {
    if(action.type === types.LOAD_CUSTOMERS_SUCCESS){
        return action.customers;
    }
    if(action.type === types.CREATE_CUSTOMER_SUCCESS){
        return [
            ...state,
            Object.assign({}, action.customer)
        ]
    }
    if(action.type === types.DELETE_CUSTOMER_SUCCESS){
        return state.filter(customer => 
            customer.id !== action.customer.id
        );
    }
    if(action.type === types.UPDATE_CUSTOMER_SUCCESS){
        const newState = Object.assign([], state);

        const indexToUpdate = state.findIndex(customer =>
            customer.id == action.customer.id
        );
        
        newState.splice(indexToUpdate, 1, action.customer);
        
        return newState;
    }
    return state;
}