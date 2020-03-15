import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import ShoppingCartReducer from './Store/Reducers/ShoppingCart'
import registerServiceWorker from './registerServiceWorker';
//import * as serviceWorker from './serviceWorker';
import ShoppingItemContainer from './Container/ShoppingItem/ShoppingItem';

// let composeEnhancers = null;
// if (process.env.NODE_ENV === 'development') {
//     composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
// } else {
//     composeEnhancers = compose;
// }




const rootReducer = combineReducers(
    {
        ShoppingCart: ShoppingCartReducer
    }
);

const store = createStore(rootReducer);


const app = (
    <Provider store={store}>      
        <ShoppingItemContainer />       
    </Provider>
);
ReactDOM.render( app, document.getElementById( 'root' ) );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
registerServiceWorker();
