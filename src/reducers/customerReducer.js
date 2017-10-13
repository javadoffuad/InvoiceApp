import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function customerReducer(
    state = initialState.customers,
    action
    ) {
    if(action.type === types.LOAD_CUSTOMERS_SUCCESS){
        return action.customers;
    }
    return state;
}