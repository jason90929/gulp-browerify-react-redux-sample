// const jQuery = require('jquery');
// const $ = jQuery;
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'

const initialState = {
    // userRole: 'ADMIN'
};

// window.store = createStore(todoApp, initialState);
let store = createStore(todoApp, initialState);

// init user
store.dispatch({
    type: 'GET_ROLE',
    user: {
        username: 'Jason'
    }
});

// init menu list
store.dispatch({
    type: 'GET_MENU_LIST',
    role: store.getState()['userRole']
});

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);