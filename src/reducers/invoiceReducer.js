import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function invoiceReducer(
    state = initialState.invoices,
    action
    ) {
    if(action.type === types.LOAD_INVOICES_SUCCESS){
        return action.invoices;
    }
    return state;
}