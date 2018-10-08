import axios from 'axios';
import { createAction } from 'redux-actions';

// action types
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

const payloadCreator = () => axios.get('http://localhost:2001/v1/products');

// actions creators
const fetchProductsAsync = createAction(FETCH_PRODUCTS, payloadCreator);

const fetchProducts = () => dispatch => dispatch(fetchProductsAsync());

fetchProducts.toString = fetchProductsAsync.toString;

export default fetchProducts;
