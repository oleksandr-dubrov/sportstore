import { createAction } from 'redux-actions';

// action types
export const CHANGE_QUANTITY = 'CHANGE_QUANTITY';

// actions creators
const changeQuantity = createAction(CHANGE_QUANTITY, (products) => {
  return products;
});

export default changeQuantity;
