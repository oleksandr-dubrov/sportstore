import { handleActions } from 'redux-actions';
import { List } from 'immutable';

const initStoreState = List([
  {
    name: 'product1',
    price: 1,
    picture: null,
  },
  {
    name: 'product2',
    price: 2,
    picture: null,
  },
  {
    name: 'product3',
    price: 3,
    picture: null,
  },
]);

const products = handleActions({}, initStoreState);

export default products;
