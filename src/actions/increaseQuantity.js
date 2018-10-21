import { createAction } from 'redux-actions';

// action types
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';

// actions creators
const increaseQuantity = createAction(INCREASE_QUANTITY, (id, name, price, quantity) => {
  console.log(id, name, price, quantity);
  return {
    id, name, price, quantity,
  };
});

export default increaseQuantity;
