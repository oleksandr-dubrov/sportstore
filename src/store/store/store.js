import { createStore } from 'redux';
import { combineReducers } from 'redux-immutable';
import { selectedProducts, fetchedProducts } from '../reducers';

export default createStore(
  combineReducers({ selectedProducts, fetchedProducts }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
