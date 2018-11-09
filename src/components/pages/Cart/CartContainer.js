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
  withState('total', 'setTotal'),
  withState('products', 'setProducts', props => props.products),
  withHandlers({
    onChangeHandler: ({ products, setProducts }) => (product, newQuantity) => {
      setProducts(products.set(products.findIndex(p => p.id === product.id), { ...product, quantity: newQuantity }));
    },
  }),
  lifecycle({
    componentDidMount() {
      console.log(this.props.products);
      if (this.props.products.length > 0) {
        this.props.setTotal(
          this.props.products
            .map(product => product.quantity * product.price)
            .reduce((prev, current) => prev + current, 0),
        );
      } else {
        this.props.setTotal(0);
      }
    },
  }),
  mapProps(props => ({
    ...props,
    products: props.products.toJS(),
  })),
  pure,
);

export default enhance(Cart);
