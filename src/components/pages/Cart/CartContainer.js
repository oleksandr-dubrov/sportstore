import {
  compose, setDisplayName, withHandlers, withState, mapProps,
} from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeQuantity, removeProduct } from 'actions';
import { Map } from 'immutable';
import Cart from './Cart';

export const enhance = compose(
  setDisplayName('CartContainer'),
  connect(
    state => ({
      products: state.get('selectedProducts'),
    }),
    dispatch => bindActionCreators(
      {
        dispatchChangeQuantity: changeQuantity,
        dispatchRemoveProduct: removeProduct,
      },
      dispatch,
    ),
  ),
  withState('quantity', 'setQuantity'),
  withState('total', 'setTotal', 0),
  withState('products', 'setProducts', props => props.products),
  withHandlers({
    onChangeHandler: ({ products, setProducts }) => (product, newQuantity) => {
      setProducts(
        products.set(products.findIndex(p => p.id === product.id), Map({ ...product, quantity: newQuantity })),
      );
    },
    onCommitHandler: ({ dispatchChangeQuantity, products }) => () => {
      dispatchChangeQuantity(products);
    },
    onRemoveHandler: ({ dispatchRemoveProduct }) => (id) => {
      dispatchRemoveProduct(id);
    },
  }),
  mapProps(props => ({
    ...props,
    products: props.products.toJS(),
    total: props.products
      .toJS()
      .map(product => product.quantity * product.price)
      .reduce((prev, current) => prev + current, 0),
  })),
);

export default enhance(Cart);
