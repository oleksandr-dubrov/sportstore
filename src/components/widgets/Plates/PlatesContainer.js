import { compose, setDisplayName, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectProduct, fetchProducts } from 'store/actions';
import Plates from './Plates';

const enhance = compose(
  setDisplayName('PlatesContainer'),
  connect(
    state => ({
      selectedProducts: state.get('selectedProducts').toJS(),
      fetchedProducts: state.get('fetchedProducts').toJS(),
    }),
    dispatch => bindActionCreators(
      {
        dispatchSelectProduct: selectProduct,
        dispatchFetchProduct: fetchProducts,
      },
      dispatch,
    ),
  ),
  withHandlers({
    selectProductsHandler: ({ dispatchSelectProduct }) => (name, price) => {
      dispatchSelectProduct(name, price);
    },
    fetchProductsHandler: ({ dispatchFetchProduct }) => () => {
      dispatchFetchProduct();
    },
  }),
);

export default enhance(Plates);
