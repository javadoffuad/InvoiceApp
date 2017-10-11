import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Layout from './components/Layout';
import reducer from './reducers';
//import 'react-select/dist/react-select.css';

const store = createStore(reducer);

render(
    <Provider store={store}>
        <Layout/>
    </Provider>,
    document.getElementById('app-root')
);