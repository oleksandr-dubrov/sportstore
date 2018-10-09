import { handleActions } from 'redux-actions';
import { List } from 'immutable';
import { selectProduct } from '../actions';

let id = 1;

const initStoreState = List([]);

const selectedProducts = handleActions(
  {
    [selectProduct]: (state, action) => {
      id += 1;

      return state.push({ id, ...action.payload });
    },
  },
  initStoreState,
);

export default selectedProducts;
