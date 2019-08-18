import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import productReducer from './store/reducers/productReducer';
import cartReducer from './store/reducers/cartReducer';
import ProductData from './data';
import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productReducer
})

const middleware = [ thunk ];

const store = createStore(
  rootReducer, composeWithDevTools(
  applyMiddleware(...middleware),
  // other store enhancers if any
))
ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
