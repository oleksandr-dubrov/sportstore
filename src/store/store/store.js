import { createStore } from 'redux';
import { combineReducers } from 'redux-immutable';
import products from '../reducers';

export default createStore(
  combineReducers({ products }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
