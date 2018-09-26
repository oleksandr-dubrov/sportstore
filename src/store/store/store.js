import { createStore } from 'redux';
import { combineReducers } from 'redux-immutable';
import { selectedProducts, products } from '../reducers';

export default createStore(
  combineReducers({ selectedProducts, products }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
