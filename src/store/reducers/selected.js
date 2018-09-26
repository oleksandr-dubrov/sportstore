import { handleActions } from 'redux-actions';
import { List } from 'immutable';
import selectProduct from '../actions';

let id = 1;

export const initStoreState = List([{ id, name: 'name', price: 999 }]);

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