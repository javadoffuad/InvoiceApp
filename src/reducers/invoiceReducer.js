import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function invoiceReducer(
    state = initialState.invoices,
    action
    ) {
    if(action.type === types.LOAD_INVOICES_SUCCESS){
        return action.invoices;
    }
    if(action.type === types.CREATE_INVOICE_SUCCESS){
        return [
            ...state,
            Object.assign({}, action.invoice)
        ]
    }
    if(action.type === types.DELETE_INVOICE_SUCCESS){
        return state.filter(invoice => 
            invoice.id !== action.invoice.id
        );
    }
    return state;
}