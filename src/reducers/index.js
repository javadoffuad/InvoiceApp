import { combineReducers } from 'redux';

import invoiceReducer from './invoiceReducer';
import productReducer from './productReducer';
import customerReducer from './customerReducer';

export default combineReducers({
    invoiceReducer,
    productReducer,
    customerReducer
});