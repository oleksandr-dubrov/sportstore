import {
  compose, setDisplayName, withHandlers, withState,
} from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increaseQuantity } from 'store/actions';
import Summary from './Summary';

export const enhance = compose(
  setDisplayName('SummaryContainer'),
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

export default enhance(Summary);
