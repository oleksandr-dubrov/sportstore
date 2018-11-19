import {
  compose, setDisplayName, withHandlers, withState, mapProps, lifecycle, pure,
} from 'recompose';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeQuantity, removeProduct } from 'actions';
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
  withRouter,
  withHandlers({
    onChangeHandler: ({ products, setProducts }) => (product, newQuantity) => {
      setProducts(products.set(products.findIndex(p => p.id === product.id), { ...product, quantity: newQuantity }));
    },
    onCommitHandler: ({
      dispatchChangeQuantity, products, to, history,
    }) => () => {
      dispatchChangeQuantity(products);
      history.push(to);
    },
    onRemoveHandler: ({ dispatchRemoveProduct, setProducts, products }) => (id) => {
      dispatchRemoveProduct(id);
      setProducts(products.remove(products.findIndex(p => p.id === id)));
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
  lifecycle({
    componentWillUnmount() {
      this.props.onCommitHandler();
    },
  }),
  pure,
);

export default enhance(Cart);
