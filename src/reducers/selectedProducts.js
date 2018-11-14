import { handleActions } from 'redux-actions';
import { List } from 'immutable';
import { selectProduct, changeQuantity } from 'actions';

let id = 1;

const initStoreState = List([]);

const selectedProducts = handleActions(
  {
    [selectProduct]: (state, action) => {
      id += 1;
      const product = action.payload;
      product.quantity = 1;
      return state.push({ id, ...product });
    },
    [changeQuantity]: (state, action) => {
      const products = action.payload;
      return products;
    },
  },
  initStoreState,
);

export default selectedProducts;
