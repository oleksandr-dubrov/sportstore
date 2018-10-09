import { handleActions } from 'redux-actions';
import { FULFILLED } from 'redux-promise-middleware';
import { List, fromJS } from 'immutable';
import { fetchProducts } from '../actions';

const initStoreState = List([]);

const fetchedProducts = handleActions(
  {
    [`${fetchProducts}_${FULFILLED}`]: (state, { payload: { data } }) => fromJS(data),
  },
  initStoreState,
);

export default fetchedProducts;
