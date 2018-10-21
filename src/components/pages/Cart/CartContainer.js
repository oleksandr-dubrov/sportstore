import {
  compose, setDisplayName, withHandlers, withState,
} from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increaseQuantity } from 'actions';
import Cart from './Cart';

export const enhance = compose(
  setDisplayName('CartContainer'),
  connect(
    state => ({
      products: state.get('selectedProducts').toJS(),
    }),
    dispatch => bindActionCreators(
      {
        dispatchIncreaseQuantity: increaseQuantity,
      },
      dispatch,
    ),
  ),
  withState('quantity', 'setQuantity', ''),
  withHandlers({
    increaseQuantityHandler: ({ dispatchIncreaseQuantity }) => (product) => {
      dispatchIncreaseQuantity(product.id, product.name, product.price, product.quantity);
    },
  }),
);

export default enhance(Cart);
