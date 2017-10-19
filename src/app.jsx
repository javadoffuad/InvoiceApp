import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

import Layout from './components/Layout';
import { loadInvoices } from './actions/invoiceActions';
import { loadProducts } from './actions/productActions';
import { loadCustomers } from './actions/customerActions';

import 'react-select/dist/react-select.css';

const store = configureStore();

store.dispatch(loadInvoices());
store.dispatch(loadProducts());
store.dispatch(loadCustomers());

render(
    <Provider store={store}>
        <Layout/>
    </Provider>,
    document.getElementById('app-root')
);