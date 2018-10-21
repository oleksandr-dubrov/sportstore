import axios from 'axios';
import { createAction } from 'redux-actions';

// action types
const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

const payloadCreator = userId => axios.get('http://localhost:2001/v1/products', { headers: { 'X-User-Id': userId } });

// actions creators
const fetchProductsAsync = createAction(FETCH_PRODUCTS, payloadCreator);

const fetchProducts = () => dispatch => dispatch(fetchProductsAsync('1'));

fetchProducts.toString = fetchProductsAsync.toString;

export default fetchProducts;
