import { handleActions } from 'redux-actions';
import { List } from 'immutable';
import fetchProducts from '../actions';

const initStoreState = List([]);

let id = 1;

const fetchedProducts = handleActions(
  {
    [fetchProducts]: (state, action) => {
      id += 1;

      return state.push({ id, ...action.payload });
    },
  },
  initStoreState,
);

export default fetchedProducts;
