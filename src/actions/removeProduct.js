import { createAction } from 'redux-actions';

// action types
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

// actions creators
const removeProduct = createAction(REMOVE_PRODUCT, id => id);

export default removeProduct;
