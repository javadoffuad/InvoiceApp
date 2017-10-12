import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

import Layout from './components/Layout';
import { loadInvoices } from './actions/invoiceActions';

//import 'react-select/dist/react-select.css';

const store = configureStore();

store.dispatch(loadInvoices());

render(
    <Provider store={store}>
        <Layout/>
    </Provider>,
    document.getElementById('app-root')
);