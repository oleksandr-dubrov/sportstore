import { compose, setDisplayName } from 'recompose';
import { connect } from 'react-redux';
import CartBox from './CartBox';

export const enhance = compose(
  setDisplayName('CartBoxContainer'),
  connect(state => ({
    quantity: state.get('selectedProducts').size,
  })),
);

export default enhance(CartBox);
