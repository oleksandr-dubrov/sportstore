import {
  compose, setDisplayName, withHandlers, withState,
} from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import selectProduct from 'store/actions';
import Plates from './Plates';

const enhance = compose(
  setDisplayName('PlatesContainer'),
  connect(
    state => ({
      selectedProducts: state.get('selectedProducts').toJS(),
      products: state.get('products').toJS(),
    }),
    dispatch => ({
      dispatchSelectProduct: bindActionCreators(selectProduct, dispatch),
    }),
  ),
  withHandlers({
    selectProductsHandler: ({ dispatchSelectProduct }) => (name, price) => {
      dispatchSelectProduct(name, price);
    },
  }),
);

export default enhance(Plates);
