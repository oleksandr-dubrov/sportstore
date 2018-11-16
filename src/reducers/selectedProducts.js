import { handleActions } from 'redux-actions';
import { List, Map } from 'immutable';
import { selectProduct, changeQuantity, removeProduct } from 'actions';

let id = 1;

const initStoreState = List([]);

const selectedProducts = handleActions(
  {
    [selectProduct]: (state, action) => {
      id += 1;
      /* TODO: under construction */
      const product = action.payload;
      product.quantity = 1;
      return state.push(Map({ id, ...product }));
    },
    [changeQuantity]: (state, action) => {
      const products = action.payload;
      return products;
    },
    [removeProduct]: (state, { payload }) => state.remove(state.findIndex(p => p.get('id') === payload)),
  },
  initStoreState,
);

export default selectedProducts;
