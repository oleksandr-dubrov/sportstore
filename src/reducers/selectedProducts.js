import { handleActions } from 'redux-actions';
import { List } from 'immutable';
import { selectProduct, changeQuantity, removeProduct } from 'actions';

let id = 1;

const initStoreState = List([]);

const selectedProducts = handleActions(
  {
    [selectProduct]: (state, action) => {
      id += 1;
      const product = action.payload;
      product.quantity = 1;
      product.id = id;
      return state.push(product);
    },
    [changeQuantity]: (state, action) => {
      const products = action.payload;
      return products;
    },
    [removeProduct]: (state, { payload }) => state.remove(state.findIndex(p => p.id === payload)),
  },
  initStoreState,
);

export default selectedProducts;
