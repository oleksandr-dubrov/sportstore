import { createAction } from 'redux-actions';

// action types
export const SELECT_PRODUCT = 'SELECT_PRODUCT';

// actions creators
const selectProduct = createAction(SELECT_PRODUCT, (name, price) => ({ name, price }));

export default selectProduct;
