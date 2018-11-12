import {
  compose, setDisplayName, withHandlers, withState, mapProps, lifecycle, pure,
} from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increaseQuantity } from 'actions';
import Cart from './Cart';

export const enhance = compose(
  setDisplayName('CartContainer'),
  connect(
    state => ({
      products: state.get('selectedProducts'),
    }),
    dispatch => bindActionCreators(
      {
        dispatchIncreaseQuantity: increaseQuantity,
      },
      dispatch,
    ),
  ),
  withState('quantity', 'setQuantity'),
  withState('total', 'setTotal', 0),
  withState('products', 'setProducts', props => props.products),
  withHandlers({
    onChangeHandler: ({ products, setProducts }) => (product, newQuantity) => {
      setProducts(products.set(products.findIndex(p => p.id === product.id), { ...product, quantity: newQuantity }));
    },
  }),
  mapProps(props => ({
    ...props,
    products: props.products.toJS(),
    total: props.products.map(product => product.quantity * product.price).reduce((prev, current) => prev + current, 0),
  })),
  pure,
);

export default enhance(Cart);
