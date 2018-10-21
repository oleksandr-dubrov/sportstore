import {
  compose, setDisplayName, withHandlers, lifecycle, pure,
} from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectProduct, fetchProducts } from 'actions';
import Products from './Products';

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
  lifecycle({
    componentDidMount() {
      this.props.fetchProductsHandler();
    },
  }),
  pure,
);

export default enhance(Products);
